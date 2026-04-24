# Mack's Portal — Build Brief

## Who this is for
Hi, I'm **Mack Ding** (GitHub: `@MackDing`). I'm a programmer based in Shenzhen. I build open-source tools mostly around AI agents, LLM gateways, and developer productivity. This landing page is my personal product portal — think of it like Pieter Levels's `https://levels.io`: one page that shows all my products clearly so people can explore, pick, star, and use them.

## Goal
Build **one polished, fast, beautiful static landing page** for `https://mack.dev` (or similar, domain TBD) that:

1. Has a strong, memorable hero section introducing me.
2. Shows a **grid of all my products** with clear title, one-line pitch, tech stack chip(s), star count (hard-coded snapshot is fine), and a big CTA to the GitHub repo.
3. Groups the products in a way that actually helps humans understand what I do (see "Grouping" below).
4. Has a footer with my socials (GitHub: MackDing, Telegram @MackClaws), copyright.
5. Works great on mobile. Loads fast. No jank.
6. Looks like a product designer helped build it, not a raw Tailwind dump.

## Tone
- Confident, calm, senior-engineer.
- Light playful touches okay, but not cringe.
- Core is **English**. Since some repos have Chinese descriptions, keep English as the main tagline and show a short Chinese version smaller below when useful. Optional EN / 中文 toggle is a plus, not required.

## Stack
- **Static site, simple deploy.** Prefer **Astro** or **Next.js (app router, static export)** — your call based on what fits this best.
- **Tailwind CSS** for styling.
- **shadcn/ui** components if Next.js.
- **Framer Motion** for subtle entry animations — subtle, not Apple-keynote.
- Use **lucide-react** icons.
- Must build to static HTML/CSS/JS so I can host on Cloudflare Pages / Vercel / plain nginx.
- Use **pnpm** as package manager.
- Add a `README.md` with exact deploy steps (build command, output dir, how to change content).

## Use the `ui-ux-pro-max` skill
This environment has the `ui-ux-pro-max` Claude Code plugin installed. **Actually use it.** Before coding, run the skill's search commands to pick:
- a **style** (look up "developer portfolio", "dark minimal", "tech founder")
- a **color palette**
- a **typography** pairing
- a **landing page structure**

Bias toward a clean dark theme (optional light toggle) that feels like Linear / Vercel / Tailscale / Fly.io — refined, confident, not flashy. Record which palette/fonts/style you picked in `DESIGN.md`.

## Products to show
Show these cards. Respect this order (most important / most polished first):

1. **CodexClaw** — `MackDing/CodexClaw` — TypeScript — 24 ⭐
   > A powerful Telegram bot that provides remote access to CodeX, enabling developers to interact with their projects from anywhere with full AI assistance and session persistence.

2. **openclaw-installer-skill** — `Claws-ZH/openclaw-installer-skill` — Shell — 8 ⭐
   > Robust OpenClaw installer skill for Chinese users — handles network proxies, dependencies, and builds.

3. **claws-shield** — `Claws-ZH/claws-shield` — TypeScript — 7 ⭐
   > Security / guard layer for the Claws ecosystem. (Work in progress — keep the line humble.)

4. **awesome-ai-api** — `MackDing/awesome-ai-api` — Python — 1 ⭐
   > 🏆 The world's largest open-source leaderboard of 200+ AI API gateways & relays. Daily /v1/models probe. Bilingual (EN / 中文). OpenAI-compatible · Claude Code · DeepSeek · Gemini.

5. **opc-daily-signal** — `MackDing/opc-daily-signal` — CSS — 2 ⭐
   > OPC (一人公司) daily decision intelligence — AI-powered daily brief for one-person companies.

6. **hermes-manager** — `MackDing/hermes-manager` — Go — 1 ⭐
   > K8s-native control plane for Hermes Agent fleets. 5-minute helm install to a working fleet.

7. **doc-preprocess-hub** — `MackDing/doc-preprocess-hub` — Python — 1 ⭐
   > Enterprise document preprocessing platform — MinerU + docling with audit, PII redaction, and operator console.

8. **claude-context-health** — `MackDing/claude-context-health` — 1 ⭐
   > Claude Code context-health diagnosis guide — spot and fix context degradation in long sessions. (EN + 中文.)

9. **claude-cli-session-monitor** — `MackDing/claude-cli-session-monitor` — Shell
   > Monitor and observe Claude CLI sessions — usage, health, anomalies.

10. **network-egress-doctor** — `MackDing/network-egress-doctor` — Shell
    > Diagnose outbound network issues on Linux servers fast — DNS, TLS, proxy, IPv6, MTU.

11. **OnePC** — `MackDing/OnePC`
    > One-person company (一人公司) playbook and toolkit. "Running a whole business solo."

12. **five-in-a-row** — `MackDing/five-in-a-row`
    > Classic Gomoku (五子棋) — weekend fun project.

## Upstream Contributions (separate section, below the grid)
Add a small **"Upstream Contributions"** section. Right now, feature:

- **OpenClaw** — PR **#11106**: _feat(onboard): add custom/local API configuration flow_
  - URL: `https://github.com/openclaw/openclaw/pull/11106`
  - One-liner: "Added a Custom / Local API onboarding flow to OpenClaw (Ollama, vLLM, LocalAI, any OpenAI-compatible endpoint). Auto-discovers models from `/models`, falls back to manual entry, and verifies connectivity before saving."
  - Status badge: "In review".
  - Design: small card, separate from the personal-project grid, with an "OpenClaw" tag.

Leave room for more "Upstream Contributions" cards later.

## Sections
- **Hero**: name, one-line bio, a tasteful CTA pair ("My GitHub" / "Say hi").
- **What I build**: one short paragraph, 2–3 sentences, in my voice. Sample: "I build small, focused tools around AI agents, LLM gateways, and developer productivity. Most of them are open source. Some are useful. All of them are honest."
- **Projects**: the grid above. You can split into three sub-groups if it helps: **Agents & LLM infra** (CodexClaw, awesome-ai-api, hermes-manager, doc-preprocess-hub), **Developer tools** (claws-shield, openclaw-installer-skill, claude-context-health, claude-cli-session-monitor, network-egress-doctor), **For fun** (five-in-a-row, OnePC, opc-daily-signal). But keep it visually simple.
- **Upstream Contributions**: the PR card above.
- **Contact / Footer**: GitHub (MackDing), Telegram (@MackClaws), email placeholder `hi@claws.ltd`. Copyright.

## Card design rules
Each project card must have:
- Product name (bold).
- Tiny chip for primary language (e.g., `TypeScript`, `Go`, `Python`).
- Star count if known (small, subtle).
- One-line pitch.
- Hover state (lift / subtle glow / border change).
- Entire card is clickable to the repo URL (`target="_blank"`, `rel="noopener noreferrer"`).
- Visible keyboard focus state.

## Quality bar
- Proper ARIA / keyboard focus on every interactive element.
- Target Lighthouse Perf / Best Practices / A11y >= 95.
- No horizontal scroll on mobile.
- Semantic HTML (`<main>`, `<section>`, `<footer>`).
- Respect `prefers-reduced-motion`.

## Deliverables
In `~/Projects/mack-portal/`:
- Working source code.
- `README.md` with local dev, build command, output folder, deploy instructions (Cloudflare Pages / Vercel / plain nginx static).
- `DESIGN.md` noting which style, palette, typography, and landing structure you picked from `ui-ux-pro-max`, and *why*.
- Commit everything. Do not push to any remote unless I ask.

## When completely finished
Run this to notify me immediately:

```
openclaw system event --text "Done: Built Mack's portal landing page at ~/Projects/mack-portal, ready for review" --mode now
```

Then stop. Good taste > infinite iteration.

## Hard rules
- Do **not** touch anything outside `~/Projects/mack-portal/`.
- Do **not** run destructive commands (`rm -rf`, sudo installs).
- If `pnpm` is missing, install it with `npm i -g pnpm`.
- If you hit a blocker, write what you tried in `DESIGN.md` and proceed with the safest reasonable default.
- Do not fake numbers. Use the star counts I gave above or skip them.

Go build something I'd be proud to send to a recruiter or a customer.
