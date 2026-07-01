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
      ThemeToggle.tsx # Fixed top-right, Sun/Moon, mounted guard
    sections/
      Hero.tsx        # Intro text, three paragraphs + location
  lib/
    utils.ts          # cn() helper

content/
  cases/              # MDX files for case studies
  writing/            # MDX files for articles
  lab/                # MDX files for experiments
```

## CSS Variables

All theme colors go through CSS variables, not Tailwind color utilities:

| Variable | Light | Dark |
|---|---|---|
| `--background` | `#ffffff` | `#0a0a0a` |
| `--foreground` | `#111111` | `#f5f5f5` |
| `--muted` | `#6b7280` | `#9ca3af` |
| `--border` | `#e5e7eb` | `#1f2937` |

Use as: `text-[var(--muted)]`, `bg-[var(--background)]`, etc.

## Planned Sections (future sessions)

- **Cases Slider** — horizontal scroll or carousel of case studies
- **Writing** — list of MDX articles from `content/writing/`
- **Lab** — experimental work from `content/lab/`

## Conventions

- No comments unless the WHY is non-obvious
- No over-engineering — build what's needed now
- Server components by default; `"use client"` only where needed (ThemeToggle, animations)
- `cn()` for all conditional classNames
