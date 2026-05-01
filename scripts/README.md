# scripts/

Operational scripts for `mack.claws.ltd`. All are pure bash — **no LLM calls**, **no tokens consumed**.

## Files

| Script | Schedule | Purpose |
|---|---|---|
| `daily-rebuild.sh` | daily 06:00 | `git pull` + `pnpm build` + star snapshot + live-site verify |
| `weekly-star-report.sh` | on demand | Build a Markdown report diffing today's star snapshot vs 7 days ago |
| `portal-weekly-stars-tg.sh` | Monday 09:00 | Wrapper: runs `weekly-star-report.sh` and pipes stdout straight to Telegram |

## Why pure bash?

The portal and its operational loop must run at **0 LLM token cost**. Every script here uses:

- Public GitHub REST API (unauthenticated; cached 60 min at build time)
- Telegram Bot API (via `curl`)
- Local files and `pnpm build`

No skill runs, no `agentTurn`, no model calls.

## Secrets

`portal-weekly-stars-tg.sh` sources `~/.config/mack-bot/env` (chmod 600), which must contain:

```
TELEGRAM_BOT_TOKEN=<bot token>
TELEGRAM_CHAT_ID=<chat id>
```

This file is **not** committed to the repo.

## Deploy notes

Production schedule lives in the Mack server user crontab (`crontab -l`):

```cron
0 6 * * * /usr/bin/flock -n /tmp/mack-portal-rebuild.lock /usr/bin/env bash /home/mack/Projects/mack-portal/scripts/daily-rebuild.sh >> /home/mack/Projects/mack-portal/.rebuild-logs/cron.log 2>&1
0 9 * * 1 /usr/bin/flock -n /tmp/portal-weekly-stars.lock /home/mack/bin/portal-weekly-stars-tg.sh 2>&1 | /usr/bin/logger -t portal-weekly-stars
```

`~/bin/portal-weekly-stars-tg.sh` is a symlink pointing back to this repo so a `git pull` ships changes automatically.

## History

This file tree replaces two OpenClaw `agentTurn` cron jobs (`mack-portal-weekly-stars` and `litellm-contributor-wall-watch`) which were disabled on 2026-05-01 to eliminate LLM cost from the portal operational loop.
