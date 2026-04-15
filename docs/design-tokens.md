# Design Tokens — entrenaconDiego

Single source of truth for every visual decision on the site.
All tokens are defined as CSS custom properties in `src/app/globals.css`
and mapped to Tailwind utilities in `tailwind.config.ts`.

---

## Colors

### Surfaces (light mode)

| Token | CSS variable | Hex approx. | Tailwind class | Use |
|---|---|---|---|---|
| Background base | `--background` | `#F5F9F5` | `bg-background` | Page default background |
| Card / elevated surface | `--card` | `#FFFFFF` | `bg-card` | Card backgrounds |
| Secondary surface | `--secondary` | `#EBF3EC` | `bg-secondary` | Subtle section differentiation |
| Muted surface | `--muted` | `#ECF1EC` | `bg-muted` | Divider sections |
| Dark inverse | `--surface-inverse` | `#0B1A0E` | `bg-surface-inverse` | Hero, contact, footer |
| Dark elevated | `--surface-inverse-elevated` | `#111E15` | `bg-surface-inverse-elevated` | Cards on dark sections |

### Text

| Token | CSS variable | Hex approx. | Tailwind class | Use |
|---|---|---|---|---|
| Primary text | `--foreground` | `#0C1B10` | `text-foreground` | Headings, main body |
| Muted text | `--muted-foreground` | `#646F66` | `text-muted-foreground` | Secondary descriptions |
| Card text | `--card-foreground` | `#0C1B10` | `text-card-foreground` | Text on cards |

### Brand

| Token | CSS variable | Hex approx. | Tailwind class | Use |
|---|---|---|---|---|
| Primary | `--primary` | `#155929` | `bg-primary` / `text-primary` | Brand green, interactive elements |
| Primary foreground | `--primary-foreground` | `#FFFFFF` | `text-primary-foreground` | Text on primary bg |
| Secondary | `--secondary` | `#EBF3EC` | `bg-secondary` | Soft green surface |

### CTA Accent

| Token | CSS variable | Hex approx. | Tailwind class | Use |
|---|---|---|---|---|
| Accent | `--accent` | `#D97A13` | `bg-accent` / `text-accent` | Primary CTAs, call-out highlights |
| Accent foreground | `--accent-foreground` | `#FFFFFF` | `text-accent-foreground` | Text on accent bg |

The accent (warm amber/gold) is **reserved for primary CTAs** — hero CTA, form submit, key badges. Using it sparingly ensures it retains its visual weight and draws the eye to conversion points.

### System

| Token | CSS variable | Tailwind class | Use |
|---|---|---|---|
| Border | `--border` | `border-border` | Dividers, card borders |
| Input | `--input` | — | Form field borders |
| Ring | `--ring` | — | Focus rings |
| Destructive | `--destructive` | `bg-destructive` | Error states |

### WCAG AA contrast ratios

| Combination | Contrast | Pass |
|---|---|---|
| `foreground` (#0C1B10) on `background` (#F5F9F5) | ≈ 16:1 | ✅ AAA |
| `primary` (#155929) on `background` (#F5F9F5) | ≈ 7.5:1 | ✅ AAA |
| `muted-foreground` (#646F66) on `background` (#F5F9F5) | ≈ 4.8:1 | ✅ AA |
| white on `accent` (#D97A13) | ≈ 3.4:1 — used only at large/bold sizes | ✅ AA Large |
| white on `surface-inverse` (#0B1A0E) | ≈ 19:1 | ✅ AAA |
| white on `primary` (#155929) | ≈ 8.5:1 | ✅ AAA |

---

## Typography

### Font pairing

| Role | Family | Weights | Rationale |
|---|---|---|---|
| `font-headline` | **Syne** | 600, 700, 800 | Geometric, editorial, slightly condensed at display sizes. Reads as confident and sporty — ideal for a premium fitness brand. Replaces Rajdhani/Playfair. |
| `font-body` | **Inter** | 400, 500, 600 | The gold standard for screen readability. Neutral, refined, works at every size. Replaces PT Sans. |

### Type scale

| Role | Size | Weight | Line-height | Letter-spacing | Class pattern |
|---|---|---|---|---|---|
| Display (hero h1) | 4xl–7xl | 800 | 1.05 | -0.03em | `text-5xl md:text-7xl font-bold leading-[1.05] tracking-[-0.03em]` |
| H1 (page titles) | 4xl–5xl | 700 | 1.1 | -0.02em | `text-4xl md:text-5xl font-bold` |
| H2 (section titles) | 3xl–4xl | 700 | 1.15 | -0.02em | `text-3xl md:text-4xl font-bold` |
| H3 (card titles) | xl–2xl | 700 | 1.2 | normal | `text-xl font-bold` |
| Body large | lg | 400 | 1.65 | normal | `text-lg leading-relaxed` |
| Body | base | 400 | 1.65 | normal | `text-base leading-relaxed` |
| Body small | sm | 500 | 1.5 | normal | `text-sm` |
| Caption / label | xs | 600 | 1.4 | 0.06em | `text-xs font-semibold tracking-wide` |
| All-caps label | xs–sm | 700 | 1.2 | 0.10–0.16em | `text-xs font-bold uppercase tracking-widest` |

**Measure** (line length): all long-form text blocks cap at `max-w-[65ch]` to stay within the 65–75ch optimal reading range.

---

## Spacing

8px base grid. All spacing via Tailwind's default scale (4 = 1rem = 16px).

| Scale | Value | Common use |
|---|---|---|
| 1 (4px) | `p-1` | Tight icon padding |
| 2 (8px) | `p-2` | Small gaps |
| 4 (16px) | `p-4` | Base padding |
| 6 (24px) | `p-6` | Card padding |
| 8 (32px) | `p-8` | Generous card padding |
| 12 (48px) | `py-12` | Section sub-spacing |
| 20 (80px) | `py-20` | Default section vertical padding |
| 28 (112px) | `py-28` | Desktop section vertical padding |

---

## Border Radii

| Token | CSS variable | Value | Tailwind class | Use |
|---|---|---|---|---|
| sm | `--radius-sm` | 4px | `rounded-sm` | Subtle, tags |
| md | `--radius-md` | 8px | `rounded-md` | Inputs, small elements |
| lg (base) | `--radius` | 12px | `rounded-lg` | shadcn/ui default, buttons |
| xl | `--radius-xl` | 20px | `rounded-xl` | Cards |
| 2xl | `--radius-2xl` | 28px | `rounded-2xl` | Hero cards, large containers |
| full | `--radius-full` | 9999px | `rounded-full` | Pills, avatars, icon containers |

---

## Shadows

All shadows use a green-tinted base color (`hsl(144 40% 8%)`) instead of flat gray for visual cohesion.

| Name | CSS variable | Tailwind class | Use |
|---|---|---|---|
| sm | `--shadow-sm` | `shadow-sm` | Subtle, hover states |
| md | `--shadow-md` | `shadow-md` | Default cards |
| lg | `--shadow-lg` | `shadow-lg` | Elevated cards, floating elements |
| xl | `--shadow-xl` | `shadow-xl` | Hero benefit cards, modals |

---

## Motion

| Token | CSS variable | Value | Use |
|---|---|---|---|
| fast | `--duration-fast` | 150ms | Micro-interactions (hover color) |
| base | `--duration-base` | 250ms | Button states, small transitions |
| slow | `--duration-slow` | 400ms | Scroll animations, large transitions |
| ease-out | `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrances, reveal |
| ease-in-out | `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Bidirectional transitions |
| premium | `--ease-premium` | `cubic-bezier(0.22, 1, 0.36, 1)` | Scroll animations — feels organic |

### Reduced motion

All scroll animations are wrapped in `@media (prefers-reduced-motion: no-preference)`.
When a user sets `prefers-reduced-motion: reduce`, elements render at full opacity with no transform, and no transition is applied.

---

## Breakpoints

Standard Tailwind breakpoints (unchanged):

| Name | Min width |
|---|---|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |
