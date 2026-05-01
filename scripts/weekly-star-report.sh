#!/usr/bin/env bash
# weekly-star-report.sh — diff today's star snapshot vs 7 days ago,
# print a markdown report. Designed to be piped to Telegram by
# portal-weekly-stars-tg.sh (pure bash, 0 LLM tokens).
#
# Run anytime; it just reads .rebuild-logs/stars-*.json snapshots.

set -uo pipefail

REPO="${MACK_PORTAL_REPO:-/home/mack/Projects/mack-portal}"
LOG_DIR="$REPO/.rebuild-logs"

TODAY=$(date +%Y-%m-%d)
WEEK_AGO=$(date -d '7 days ago' +%Y-%m-%d 2>/dev/null || date -v-7d +%Y-%m-%d)

TODAY_FILE="$LOG_DIR/stars-$TODAY.json"
PAST_FILE="$LOG_DIR/stars-$WEEK_AGO.json"

# Fall back to the most recent older snapshot if exact 7-days-ago is missing.
if [ ! -f "$PAST_FILE" ]; then
  PAST_FILE=$(ls -1t "$LOG_DIR"/stars-*.json 2>/dev/null | tail -n +2 | head -1)
fi

if [ ! -f "$TODAY_FILE" ]; then
  echo "📊 *Mack Portal weekly report*"
  echo
  echo "⚠️ No star snapshot for today ($TODAY). Did the daily rebuild run?"
  echo
  echo "Last rebuild log:"
  ls -1t "$LOG_DIR"/*.log 2>/dev/null | head -1 | xargs -r tail -10
  exit 0
fi

if [ -z "${PAST_FILE:-}" ] || [ ! -f "$PAST_FILE" ]; then
  echo "📊 *Mack Portal weekly report*"
  echo
  echo "ℹ️ Not enough history yet (need at least 2 daily snapshots). Today's count:"
  echo
  python3 <<PY
import json
data = json.load(open("$TODAY_FILE"))
print(f"- Followers: {data.get('user', {}).get('followers', '?')}")
print(f"- Public repos: {data.get('user', {}).get('public_repos', '?')}")
print()
print("**Stars**:")
total = 0
for repo, n in sorted(data.get('stars', {}).items(), key=lambda x: -x[1]):
    short = repo.split('/')[-1]
    print(f"- {short}: {n}")
    total += n
print(f"\n**Total**: {total}")
PY
  exit 0
fi

# Both files exist — do the diff
python3 <<PY
import json, os, sys

today = json.load(open("$TODAY_FILE"))
past  = json.load(open("$PAST_FILE"))

today_date = "$TODAY"
past_date  = os.path.basename("$PAST_FILE").replace("stars-", "").replace(".json", "")

ts = today.get("stars", {})
ps = past.get("stars", {})

repos = sorted(set(ts.keys()) | set(ps.keys()))
diffs = []
total_now, total_then = 0, 0
for r in repos:
    t = ts.get(r, 0); p = ps.get(r, 0)
    total_now += t; total_then += p
    if t != p:
        diffs.append((r, p, t, t - p))

# Sort: gainers first by delta desc, then losers
diffs.sort(key=lambda x: -x[3])

tu = today.get("user") or {}
pu = past.get("user")  or {}
follower_delta = (tu.get("followers", 0) - pu.get("followers", 0)) if pu else None

print("📊 *Mack Portal weekly report*")
print(f"_{past_date} → {today_date}_")
print()
if diffs:
    print("**Star changes**:")
    for repo, p, t, d in diffs:
        short = repo.split('/')[-1]
        sign = '+' if d > 0 else ''
        emoji = '⭐' if d > 0 else '📉'
        print(f"- {emoji} {short}: {p} → {t} ({sign}{d})")
else:
    print("**Star changes**: none this week 😴")
print()
print(f"**Totals**: {total_then} → {total_now} ({'+' if total_now-total_then>=0 else ''}{total_now-total_then})")
if follower_delta is not None and follower_delta != 0:
    sign = '+' if follower_delta > 0 else ''
    print(f"**Followers**: {pu.get('followers')} → {tu.get('followers')} ({sign}{follower_delta})")
elif tu.get("followers") is not None:
    print(f"**Followers**: {tu.get('followers')}")
print()
print(f"_All numbers from build cache; live: https://mack.claws.ltd_")
PY
