# simon-next-site

Personal portfolio site for Simon Lodemann — product & brand designer.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** — class-based dark mode via `@variant dark`
- **next-themes** — theme toggle, `attribute="class"`, defaultTheme `system`
- **framer-motion** — animations (used in future sections)
- **next-mdx-remote + gray-matter** — MDX content for writing & lab
- **lucide-react** — icons
- **clsx + tailwind-merge** — via `src/lib/utils.ts` `cn()` helper

## Folder Structure

```
src/
  app/
    layout.tsx        # ThemeProvider, Container (max-w-2xl px-6), global metadata
    page.tsx          # Home: Hero + (future) Cases, Writing, Lab
    globals.css       # Tailwind v4 import, CSS vars for bg/fg/muted/border
  components/
    ui/
      ThemeToggle.tsx # Fixed top-center, sun rotates / moon tilts on hover
      icons.tsx       # SunIcon, MoonIcon (cleaned SVGs)
    sections/
      Hero.tsx        # Centered intro, Romie <em> highlights
      CasesSlider.tsx # Full-bleed horizontal scroll-snap slider
      About.tsx       # Bio paragraphs, Contact pill, location
  lib/
    utils.ts          # cn() helper

content/
  cases/              # MDX files for case studies
  writing/            # MDX files for articles
  lab/                # MDX files for experiments
```

## Design Tokens

Two layers in `globals.css`. Components use ONLY semantic tokens, never the ramp directly.

**Ink ramp** (neutral black scale): `--ink-0` (#ffffff) → `--ink-950` (#0d0d0d), steps 50/100/200/…/900.

**Semantic tokens** (light / dark):

| Token | Use for | Light | Dark |
|---|---|---|---|
| `--surface` | Page background | ink-0 | ink-950 |
| `--surface-inverse` | Buttons, inverted blocks | ink-950 | ink-0 |
| `--text-primary` | Headings, hero copy | ink-950 | ink-100 |
| `--text-secondary` | Bios, supporting body | ink-600 | ink-400 |
| `--text-tertiary` | Labels, metadata, location | ink-400 | ink-500 |
| `--text-quaternary` | Icons, decorative | ink-300 | ink-600 |
| `--text-inverse` | Text on surface-inverse | ink-0 | ink-950 |
| `--border-default` | Dividers | ink-200 | ink-800 |

Typography tokens: `--text-hero` (clamp 28–39px), `--leading-hero` 1.25, `--tracking-hero` -0.05em, `--text-body` 16px.

Fonts: Inter (`--font-sans`, body) + Romie Medium Italic (`--font-display`, applied to all `<em>` — used for highlighted words in copy).

## Planned Sections (future sessions)

- **Cases Slider** — horizontal scroll or carousel of case studies
- **Writing** — list of MDX articles from `content/writing/`
- **Lab** — experimental work from `content/lab/`

## Conventions

- No comments unless the WHY is non-obvious
- No over-engineering — build what's needed now
- Server components by default; `"use client"` only where needed (ThemeToggle, animations)
- `cn()` for all conditional classNames
