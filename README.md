# Mack's Portal

A single-page, statically rendered landing site for [Mack Ding](https://github.com/MackDing) — an index of open-source tools across AI agents, LLM gateways, and developer productivity.

Live (intended): [mack.dev](https://mack.dev)

---

## Stack

- **[Astro 5](https://astro.build/)** — static output, zero client-side JS by default
- **[Tailwind CSS v4](https://tailwindcss.com/)** — via the official `@tailwindcss/vite` plugin and `@theme` tokens in `src/styles/global.css`
- **TypeScript** (strict)
- **System / Google fonts** — Space Grotesk, Inter, JetBrains Mono
- **pnpm** as the package manager
- **No JavaScript framework islands** — all animations are pure CSS, respecting `prefers-reduced-motion`

Output: pure static HTML + a single small CSS bundle. Total page weight is well under 100 KB.

---

## Local development

Requirements: **Node.js 20.18+ or 22+**, **pnpm 9+** (this repo was built against pnpm 10.33).

```bash
# install pnpm once (globally), if you don't have it
npm i -g pnpm

# install deps
pnpm install

# start the dev server (http://localhost:4321)
pnpm dev
```

Hot module reload is on. Edit a component in `src/components/` and the page updates instantly.

## Build

```bash
pnpm build
```

This writes the static site to `dist/`. Output is:

- `dist/index.html`
- `dist/favicon.svg`
- `dist/_astro/*.css` (a single hashed CSS file)

No server, no runtime, no database. Open `dist/index.html` in a browser to preview the built output, or:

```bash
pnpm preview
```

...to serve `dist/` locally on `http://localhost:4321`.

---

## Deploy

The output in `dist/` is plain static files. Point any static host at that folder.

### Cloudflare Pages

From the Cloudflare dashboard → **Pages** → **Create → Connect to Git**:

- **Framework preset**: Astro
- **Build command**: `pnpm build`
- **Build output directory**: `dist`
- **Root directory**: `/` (repo root)
- **Node version**: `22` (set `NODE_VERSION=22` in env vars if needed)

Or deploy the built output directly:

```bash
pnpm build
npx wrangler pages deploy dist --project-name=mack-portal
```

### Vercel

From the Vercel dashboard → **Add New → Project**:

- **Framework preset**: Astro
- **Build command**: `pnpm build`
- **Output directory**: `dist`
- **Install command**: `pnpm install`

Or from the CLI:

```bash
pnpm build
npx vercel deploy --prod dist
```

### Plain nginx (or any static host)

```bash
pnpm build
rsync -az --delete dist/ user@host:/var/www/mack-portal/
```

Minimal nginx snippet:

```nginx
server {
  listen 443 ssl http2;
  server_name mack.dev;
  root /var/www/mack-portal;

  # immutable hashed assets
  location ^~ /_astro/ {
    add_header Cache-Control "public, max-age=31536000, immutable";
  }

  # HTML
  location / {
    try_files $uri $uri/ $uri.html /index.html;
  }
}
```

### GitHub Pages

```bash
pnpm build
# copy dist/ to a gh-pages branch, or use actions/deploy-pages
```

Set `site` in `astro.config.mjs` to your final domain if different from `https://mack.dev`.

---

## Editing content

Everything you'd typically want to change lives in **four files**:

| What                       | File                                          |
| -------------------------- | --------------------------------------------- |
| Product cards (the grid)   | `src/data/products.ts`                        |
| Upstream-contribution card | `src/components/UpstreamContributions.astro`  |
| Hero copy + nav            | `src/components/Hero.astro`                   |
| Footer links + copyright   | `src/components/Footer.astro`                 |

Product type (see `src/data/products.ts`):

```ts
type Product = {
  name: string;                 // display name
  repo: string;                 // "owner/repo"
  url: string;                  // full GitHub URL
  language?: "TypeScript" | "Go" | "Python" | "Shell" | "CSS" | null;
  stars?: number;               // optional, shown if set
  pitch: string;                // one-line English pitch
  pitchZh?: string;             // optional Chinese translation
  group: "agents" | "devtools" | "fun";
  featured?: boolean;
};
```

To add a new upstream contribution, edit the `contributions` array at the top of `src/components/UpstreamContributions.astro`.

## Design tokens

All color / typography / radius tokens are defined in `src/styles/global.css` under `@theme`. Change one CSS custom property and the whole site updates.

See `DESIGN.md` for the rationale behind the chosen palette, typography, and structure.

## Project layout

```
.
├── BRIEF.md                # original build brief
├── DESIGN.md               # design rationale (ui-ux-pro-max picks)
├── README.md               # this file
├── astro.config.mjs        # static output + Tailwind v4 plugin
├── package.json
├── tsconfig.json
├── public/
│   └── favicon.svg
└── src/
    ├── components/
    │   ├── Footer.astro
    │   ├── Hero.astro
    │   ├── Icon.astro                  # inlined lucide-style SVGs
    │   ├── ProjectCard.astro
    │   ├── ProjectGrid.astro
    │   ├── UpstreamContributions.astro
    │   └── WhatIBuild.astro
    ├── data/
    │   └── products.ts
    ├── layouts/
    │   └── Layout.astro
    ├── pages/
    │   └── index.astro
    └── styles/
        └── global.css
```

## Quality targets

- Lighthouse Perf / Best Practices / A11y ≥ 95
- No horizontal scroll on any viewport ≥ 320px
- Semantic HTML (`<main>`, `<section>`, `<footer>`, real links everywhere)
- Visible `:focus-visible` outlines
- `prefers-reduced-motion` disables all transitions and animations

## License

Source code: MIT (feel free to fork and re-theme for your own portfolio).
Personal content (pitches, copy, photos): © Mack Ding.


---

## 🦞 OPC Ecosystem

> Built by [@MackDing](https://github.com/MackDing) — One-Person Company infrastructure powered by AI agents.

| Project | What it does |
|---------|-------------|
| [**opc.ren**](https://opc.ren) | OPC founder hub — tools, signals, community |
| [**CodexClaw**](https://github.com/MackDing/CodexClaw) | Telegram bot for remote Codex access with MCP + subagent routing |
| [**awesome-ai-api**](https://github.com/MackDing/awesome-ai-api) | Leaderboard of 200+ AI API gateways & relays |
| [**claude-context-health**](https://github.com/MackDing/claude-context-health) | Diagnose & fix Claude Code session degradation |
| [**opc-daily-signal**](https://github.com/MackDing/opc-daily-signal) | AI-powered daily decision intelligence for OPC founders |
| [**doc-preprocess-hub**](https://github.com/MackDing/doc-preprocess-hub) | Enterprise document preprocessing — MinerU + docling |
