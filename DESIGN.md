# DESIGN.md — mack-portal

Design rationale for the landing page. All picks were made with the `ui-ux-pro-max` Claude Code plugin (run via `search.py`), then tuned by hand.

---

## Picks at a glance

| Dimension          | Choice                               | Source query                               |
| ------------------ | ------------------------------------ | ------------------------------------------ |
| Style              | **Modern Dark (Cinema)**             | `-d style` &nbsp;`developer portfolio dark minimal` |
| Color palette      | **Developer Tool / IDE** (dark)      | `-d color` &nbsp;`dark minimal developer tools`     |
| Typography pairing | **Tech Startup** (Space Grotesk + DM Sans) → _swapped DM Sans for Inter_ | `-d typography` &nbsp;`tech founder minimal modern` |
| Landing structure  | **Portfolio Grid**                   | `-d landing` &nbsp;`developer portfolio product grid` |

Everything is documented below with the actual values that ended up in `src/styles/global.css` as `@theme` tokens.

---

## 1. Style — Modern Dark (Cinema)

The `ui-ux-pro-max` **"Modern Dark (Cinema Mobile)"** entry was the closest match to the Linear / Vercel / Tailscale / Fly.io reference the brief asked for:

> "Design a cinematic dark … Background: LinearGradient from #0a0a0f (top) to #020203 (bottom). Cards: borderRadius 16, border rgba(255,255,255,0.08) hairline, subtle top-edge shading … avoid pure #000000 (OLED smear)"

Decisions I kept from this recommendation:

- **Never pure `#000000`.** Base is `#07080B` with a layered radial-gradient on the hero that reads as one cinematic indigo pool at the top of the page.
- **Hairline borders at `rgba(255,255,255,0.08)`** on every card — this single rule does more to make the page feel "designed" than any other token.
- **Accent `#5E6AD2`** (the Linear indigo) for primary CTAs, the `mack.dev` logo punctuation, active language toggle, and focus ring. One hue used sparingly.
- **GitHub merged purple `#8250DF`** for the Merged PR chip — the one place the indigo accent doesn't own the page, because this is about signalling *GitHub state* and readers already pattern-match the purple.
- **Radius 14–16 px** on cards and 10 px on buttons — soft but not rounded-toy.
- **Expo-out easing** `cubic-bezier(0.16, 1, 0.3, 1)` on every transition.
- **Entry animations are subtle and one-shot** — a 12 px `translateY` fade-up with a 40–360 ms stagger, and `prefers-reduced-motion` kills them entirely.

### 1a. Stronger gradient (v2 pass)

The v1 hero gradient was too subtle — readers didn't feel they were in a *place*, just on a dark page. v2 leans in:

- **Hero top indigo glow roughly 2× more visible**: the primary radial went from `rgba(94,106,210,0.18)` over a 60% spread to `rgba(94,106,210,0.42)` over an 85×80% spread. A second hotspot is pushed off-center at `72% 8%` with `rgba(124,133,225,0.32)` — reads as a smaller secondary light.
- **Full-page vertical gradient** on `body` from `#07080B` at the top to `#0B0D18` at the bottom (fixed attachment). Scrolling feels like moving deeper into a space rather than sliding over a flat plane. The shift in luminance is ~3 points — enough to feel, not enough to harm contrast: body text `#9A9EA6` still clears **7.2 : 1** on `#0B0D18` (AAA).
- **Cyan / purple edge bleeds** in the hero only: two `.hero-edge-bleed` elements at 42% width each, left uses `rgba(77,178,226,0.14)` (a cool cyan), right uses `rgba(163,107,224,0.14)` (a soft purple). Low opacity on purpose — they register as "third colour is bleeding in" not "disco". Scoped to the hero section because the cards below need the current surface treatment intact.
- `prefers-reduced-motion` is respected (all animations disabled); gradients are static layers, so they're not affected by motion settings but equally not noisy.

Things I dropped from the source suggestion:

- Native blur / `BlurView` glass headers — not needed on a static web landing; costs paint time for zero gain.
- Animated ambient "blob" oscillation — would force a JS island just for motion. Replaced with a **static layered radial gradient + a subtle SVG grid overlay at 8% opacity** so the hero still has depth without any runtime cost.
- Haptics — N/A for web.

## 2. Color palette — Developer Tool (dark), tuned

Starting point from `ui-ux-pro-max`:

```
bg: #0F172A | card: #1B2336 | accent: #22C55E (run green)
```

I kept the **structure** (bg / card / border / muted / fg layers) but re-tinted to match the Linear-style "indigo on near-black" reference rather than IDE green-on-slate:

| Role                 | Token                    | Value                         |
| -------------------- | ------------------------ | ----------------------------- |
| Page background      | `--color-bg`             | `#07080B`                     |
| Elevated background  | `--color-bg-elevated`    | `#0C0E13`                     |
| Card surface         | `--color-surface`        | `rgba(255,255,255,0.03)`      |
| Card hover           | `--color-surface-hover`  | `rgba(255,255,255,0.05)`      |
| Border               | `--color-border`         | `rgba(255,255,255,0.08)`      |
| Border hover         | `--color-border-strong`  | `rgba(255,255,255,0.14)`      |
| Foreground           | `--color-fg`             | `#EDEEF0`                     |
| Foreground muted     | `--color-fg-muted`       | `#9A9EA6`                     |
| Foreground subtle    | `--color-fg-subtle`      | `#60646C`                     |
| Accent               | `--color-accent`         | `#5E6AD2`                     |
| Accent bright        | `--color-accent-bright`  | `#7C85E1`                     |
| Accent glow          | `--color-accent-glow`    | `rgba(94,106,210,0.28)`       |
| Star (rating icon)   | `--color-star`           | `#E3B341`                     |

**Contrast spot-checks** on the darkest surface (`#07080B`):

- `--color-fg` `#EDEEF0` → 17.7 : 1 (AAA ✅)
- `--color-fg-muted` `#9A9EA6` → 7.6 : 1 (AAA ✅)
- `--color-fg-subtle` `#60646C` → 3.7 : 1 — used only for **metadata** (timestamps, non-essential chips), which meets WCAG 1.4.11 for non-text / AA for large text. Never used for primary body copy.
- `--color-accent-bright` `#7C85E1` on dark → 6.0 : 1 (AA+ ✅) — this is why the nav links and focus ring use the *bright* variant rather than the base accent.

Language-chip colors (`--color-lang-*`) follow GitHub's conventional palette so the language dots feel familiar.

## 3. Typography — Space Grotesk + Inter

The `ui-ux-pro-max` "Tech Startup" pairing was Space Grotesk + **DM Sans**. I kept the display font but swapped the body to **Inter**, for two reasons:

1. **Inter has better optical sizing and more weights** — I needed 400/500/600/700 at sub-14px sizes for the card chips, and Inter renders noticeably cleaner than DM Sans in the 11–12 px range on Windows + Linux.
2. **Better tabular-nums** — star counts render as `24`, not `2 4`.

Final stack:

```css
--font-display: "Space Grotesk", …    /* h1, h2, h3, product names, logo */
--font-sans:    "Inter", …             /* body, nav, pitches */
--font-mono:    "JetBrains Mono", …    /* chips, eyebrow labels, repo/PR refs, footer */
```

Weights used:

- Display: **500 / 600 / 700**
- Body: **400 / 500 / 600 / 700**
- Mono: **400 / 500**

All three are Google Fonts, loaded via a single stylesheet link with `preconnect` on `fonts.googleapis.com` and `fonts.gstatic.com`.

Font-feature-settings: `"cv11" "ss01" "ss02"` turn on Inter's more rounded `a`, single-story `g`, and straight `l` — small touches that make body text feel less generic.

## 4. Landing structure — Portfolio Grid

The recommended section order was:

```
1. Hero (Name / Role)
2. Project Grid (Masonry)
3. About / Philosophy
4. Contact
```

Adaptation: I **swapped the order of "About" and "Grid"** because the brief's "What I build" paragraph is short, sets context for the grid that follows, and pairs well with 3 pillar cards. Also pulled contact into the footer. Final order:

```
1. Hero — name, bio, CTA pair ("My GitHub" / "Say hi")
2. What I build — one paragraph + 3 pillar cards
3. Projects — 12 cards across 3 semantic groups (Agents, Dev tools, Fun)
4. Upstream contributions — OpenClaw PR #11106 + dashed placeholder
5. Footer — GitHub, Telegram, email, copyright
```

The grid is a regular CSS grid (1 / 2 / 3 cols at sm / md / lg), not masonry — all cards fit the same shape anyway and equal-height rows feel more deliberate than a staggered layout.

### Card anatomy

Each project card:

- Owner handle (`MackDing/`) in 11 px mono, very muted — signals the GitHub convention without dominating
- Product name in **Space Grotesk 600, 17 px**
- One-line pitch (up to 4 lines, clamped). In v2 the pitch is pulled from `products.ts` as `{ en, zh }` and switched at render time — no more `pitchZh` squeezed underneath the English one.
- Language chip (GitHub-style colored dot) + star count with a gold star icon
- Whole card is one `<a target="_blank" rel="noopener noreferrer">` — hits the brief's "entire card is clickable" rule
- Hover: border brightens, card lifts 2 px, a soft indigo glow appears inside-and-below
- Focus: 2 px accent-bright outline with 2 px offset

## 5. Motion

- **All transitions**: 200–240 ms, `cubic-bezier(0.16, 1, 0.3, 1)`
- **Entry animations**: `.reveal` class with `.reveal-1` … `.reveal-5` stagger (40–360 ms delay) — one pass on page load, then finished
- **`prefers-reduced-motion: reduce`** disables every animation and forces transition durations to `0ms`
- **No scroll-triggered reveals** — I considered IntersectionObserver for fade-up-on-scroll but:
  1. It costs JS on a site that otherwise ships zero
  2. The page is short enough that scroll-reveal feels showy, not subtle
  3. The brief says "subtle entry animations — subtle, not Apple-keynote"

## 6. Deviations from the brief, and why

The brief mentioned **Framer Motion** and **lucide-react**. Both imply a React runtime. I built with pure Astro + CSS instead:

- **No Framer Motion** — would require `@astrojs/react` + hydrated islands just to fade something in. That adds ~45 KB of JS to a page whose current total runtime JS is ≤ 2 KB. Pure CSS `@keyframes` + `prefers-reduced-motion` guard gets the same end-user result. The brief's spirit ("subtle", "no jank", "loads fast", "static HTML/CSS/JS") weighs heavier than the specific library.
- **No `lucide-react`** — instead, `src/components/Icon.astro` inlines the exact lucide SVG paths I use (GitHub, Telegram, Mail, Arrow, Star, GitPullRequest, Sparkles, Terminal, Layers). Zero JS, zero HTTP, identical visuals, under 2 KB gzipped of SVG total.

Everything else in the brief is honored: Astro, Tailwind, pnpm, semantic HTML, ARIA, keyboard focus, mobile-first, `target="_blank" rel="noopener noreferrer"` on every outbound card, 12 projects in the specified order, OpenClaw PR card (in v2: shipped as "Merged" with GitHub merged-purple `#8250DF` and a "Merged Feb 10, 2026" line), full English + 中文 routes, footer with GitHub / Telegram / email.

## 7. Internationalization (v2)

Added proper route-based i18n rather than a client-only toggle:

- `/` serves English (default). `/zh/` serves the Chinese full-page translation.
- One source of truth: `src/data/i18n.ts` for UI strings, `src/data/products.ts` with `pitch: { en, zh }` per project. Every component takes a `lang` prop and looks up its own strings — no duplicated JSX.
- `<html lang>` flips between `en` and `zh-Hans`. `<link rel="alternate" hreflang=...>` for `en`, `zh-Hans`, and `x-default` so Google serves the right page to the right reader.
- Inline language toggle (EN / 中) in the top-right nav. Active language gets an indigo chip (`rgba(124,133,225,0.18)` background + inset border). Non-active is `--color-fg-subtle`. Keyboard focus lands on each link natively.
- **First-visit-only auto-redirect**: a tiny (~15 LOC) inline script in `<head>` reads `localStorage['mack-portal-lang']`. If unset and `navigator.language` starts with `zh`, it `location.replace()`'s to `/zh/`. After that, every page load just *records* the current path's lang so the user's most recent choice sticks. Never auto-redirects again. Wrapped in `try/catch` so Safari-in-private-mode (blocked localStorage) fails open rather than breaking the page. Inline instead of a component island because it's six lines and must run before first paint.
- Repo names, tech stack chips, and code stay in English in both locales — they're proper nouns, and `TypeScript` rendered as `TypeScript` is more useful than any transliteration.
- Chinese pitches and UI copy were written as natural-sounding prose, not machine-translated. The goal is that a Chinese-speaking reader doesn't feel like they're reading a translated page.

## 8. Things I deliberately did **not** add

- A theme toggle. The brief allowed it as optional; adding a light-mode palette well takes more time than the rest of the site put together, and the default dark look is the point. Can be layered on later via `:root[data-theme='light']`.
- A hero photo / avatar. Adds weight without adding signal for a dev-tools-focused portal.
- Analytics. Out of scope. Easy to add later by dropping a snippet in `src/layouts/Layout.astro`.
- Filtering / search on the grid. 12 items don't justify the UI.
