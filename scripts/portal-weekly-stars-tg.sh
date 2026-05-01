#!/usr/bin/env bash
# portal-weekly-stars-tg.sh — weekly portal star report → Telegram (0 LLM tokens).
# Runs the pure-bash star report script and pipes stdout directly to Telegram.
#
# Schedule: Monday 09:00 Asia/Shanghai (via user crontab).

set -uo pipefail
source "$HOME/.config/mack-bot/env"

SCRIPT="$HOME/Projects/mack-portal/scripts/weekly-star-report.sh"
if [ ! -x "$SCRIPT" ]; then
  echo "missing: $SCRIPT" >&2
  exit 1
fi

OUTPUT=$(bash "$SCRIPT" 2>&1)
RC=$?

if [ $RC -ne 0 ]; then
  OUTPUT="⚠️ weekly-star-report.sh exited $RC"$'\n'"$(echo "$OUTPUT" | tail -5)"
fi

# Telegram message size limit is 4096 chars; trim if needed.
if [ ${#OUTPUT} -gt 3900 ]; then
  OUTPUT="${OUTPUT:0:3800}"$'\n\n…(truncated)'
fi

curl -sS --max-time 15 \
  -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
  --data-urlencode "chat_id=${TELEGRAM_CHAT_ID}" \
  --data-urlencode "text=${OUTPUT}" \
  --data-urlencode "parse_mode=Markdown" \
  --data-urlencode "disable_web_page_preview=true" \
  > /dev/null
