#!/usr/bin/env bash
# daily-rebuild.sh — refresh GitHub stars by clearing cache + rebuild.
# No commit, no push. Nginx serves dist/ directly; rebuild is enough.
# Run by cron at 06:00 Asia/Shanghai.
#
# Also saves a daily star snapshot to .rebuild-logs/stars-YYYY-MM-DD.json
# for the weekly report script to diff against.

set -uo pipefail

# Ensure user-local bins (pnpm via npm-global) are on PATH for cron.
export PATH="$HOME/.npm-global/bin:$HOME/.local/bin:/usr/local/bin:/usr/bin:/bin"

REPO="${MACK_PORTAL_REPO:-/home/mack/Projects/mack-portal}"
CACHE_FILE="$REPO/node_modules/.cache/mack-portal/github.json"
LOG_DIR="$REPO/.rebuild-logs"
LOG_FILE="$LOG_DIR/$(date +%Y-%m-%d).log"
STAR_SNAP="$LOG_DIR/stars-$(date +%Y-%m-%d).json"

mkdir -p "$LOG_DIR"

# Keep only last 14 logs + 14 star snapshots
find "$LOG_DIR" -type f -name '*.log' -mtime +14 -delete 2>/dev/null
find "$LOG_DIR" -type f -name 'stars-*.json' -mtime +14 -delete 2>/dev/null

exec > >(tee -a "$LOG_FILE") 2>&1
echo "=== daily-rebuild start: $(date '+%Y-%m-%d %H:%M:%S %Z') ==="

step() { printf "\n▸ %s\n" "$1"; }
ok()   { printf "  ✓ %s\n" "$1"; }
warn() { printf "  ! %s\n" "$1"; }
fail() { printf "  ✗ %s\n" "$1"; exit 1; }

cd "$REPO" || fail "cannot cd $REPO"

step "preflight"
[ -d .git ] || fail "not a git repo"
ok "repo exists"

step "git pull (catch remote changes)"
git pull --rebase --autostash origin main 2>&1 | tail -3 || warn "git pull failed; continuing with local"

step "clear cache"
rm -f "$CACHE_FILE"
ok "cache cleared"

step "pnpm build"
pnpm build 2>&1 | tail -8 || fail "pnpm build failed"
[ -f "$REPO/dist/index.html" ] || fail "dist/index.html missing after build"
DIST_SIZE=$(stat -c%s "$REPO/dist/index.html")
ok "build succeeded (dist/index.html = $DIST_SIZE bytes)"

step "save star snapshot"
if [ -f "$CACHE_FILE" ]; then
  cp "$CACHE_FILE" "$STAR_SNAP"
  ok "saved to $STAR_SNAP"
else
  warn "no cache file produced; GitHub API may be down"
fi

step "verify live site"
sleep 2
HTTP=$(curl -sS -o /dev/null -w '%{http_code}' --max-time 10 https://mack.claws.ltd/ || echo "000")
[ "$HTTP" = "200" ] || fail "live site returned $HTTP"
ok "live site = 200"

echo "=== daily-rebuild end: success ==="
