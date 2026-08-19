# Design System Master File — Igor Radchenko Personal Site

> Generated via `ui-ux-pro-max --design-system` (query: "personal professional portfolio
> government official digitalization entrepreneurship AI editorial institutional trustworthy
> male"), then manually adjusted against the brief's explicit constraints (§9, §33, §34):
> no corporate blue, no AI-purple, no glassmorphism, no cyberpunk black. Final palette pulled
> from the tool's Luxury/Premium Brand + Editorial Grid results (warm graphite + bronze),
> not the tool's default blue-accent output — documented below.

---

**Project:** Igor Radchenko — personal professional site
**Category:** Personal portfolio / institutional editorial
**Design Dials:** Variance 5/10 (Balanced) | Motion 6/10 (Standard) | Density 4/10 (Standard)

---

## Visual Direction

**Modern Editorial + Institutional + Technology + Human.**

Synthesis of two tool-matched styles: **Swiss Modernism 2.0** (strict grid, mathematical
spacing, single accent, high discipline) + **Editorial Grid/Magazine** (asymmetric layout,
pull quotes, large photography, print-inspired hierarchy). Reads as a serious professional
publication/dossier, not a SaaS landing page and not a government portal template.

## Color Palette

Warm graphite + bronze, on warm paper — deliberately **not** blue (avoids "corporate/gov
template" and "trust-blue SaaS" cliché) and **not** purple (avoids "AI startup template").
Bronze/gold accent reads premium and institutional without becoming flashy.

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Ink (primary text/dark surfaces) | `#1C1917` | `--color-ink` | Headings, primary text on light |
| Charcoal (deep dark surface) | `#14120F` | `--color-charcoal` | Hero/footer dark bands |
| Paper (background) | `#FAF9F6` | `--color-paper` | Page background |
| Paper Alt (card/section bg) | `#F1EDE6` | `--color-paper-alt` | Alternating sections, cards |
| Stone (secondary text) | `#57534E` | `--color-stone` | Body copy on light |
| Stone Muted (tertiary text) | `#6E6960` | `--color-stone-muted` | Captions, meta, dates |
| Border | `#E2DED3` | `--color-border` | Hairlines, dividers |
| Bronze (accent) | `#8C6027` | `--color-bronze` | Links, key numbers, underline accents, active states — used sparingly |
| Bronze Soft (accent hover/tint) | `#C08A3E` | `--color-bronze-soft` | Hover states, small highlights |
| On Dark (text on charcoal/ink) | `#FAF9F6` | `--color-on-dark` | Text on dark sections |
| On Dark Muted | `#B8B2A6` | `--color-on-dark-muted` | Secondary text on dark sections |
| Destructive (form errors only) | `#B3261E` | `--color-destructive` | Validation states |

Contrast verified (WCAG relative-luminance formula): ink-on-paper 16.6:1, stone-on-paper
7.25:1, stone-muted-on-paper 5.18:1, bronze-on-paper 5.22:1, on-dark-on-charcoal 17.76:1,
on-dark-muted-on-charcoal 8.87:1, bronze-soft-on-charcoal 6.18:1 — all ≥ 4.5:1 (AA for normal
text). Initial tool-suggested bronze (#9C6B2C, 4.38:1) and stone-muted (#8A8478, 3.53:1) were
darkened to clear AA with margin.

## Typography

- **Display/Heading:** EB Garamond (500/600/700) — authoritative editorial serif, carries the
  name and section titles with institutional weight without tipping into "law firm brochure."
- **Body/UI:** Inter (400/500/600) — clean, highly legible at small sizes, reads as
  contemporary/technological; pairs with the serif without competing.
- **Numerals/labels/timeline dates:** Inter, tabular-nums, uppercase tracking-wide for eyebrow
  labels ("2021 — настоящее время", "01").

```css
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');
```

Scale (mobile-first, fluid via clamp):
- Hero name: `clamp(2.5rem, 6vw + 1rem, 5.5rem)` EB Garamond 600
- Section title: `clamp(1.75rem, 3vw + 1rem, 3rem)` EB Garamond 600
- Body: `1.0625rem` / line-height `1.65`
- Caption/meta: `0.875rem` / uppercase / tracking `0.06em`

## Spacing (Density 4/10 — Standard)

| Token | Value |
|-------|-------|
| `--space-xs` | 8px |
| `--space-sm` | 16px |
| `--space-md` | 24px |
| `--space-lg` | 40px |
| `--space-xl` | 64px |
| `--space-2xl` | 96px |
| `--space-3xl` | 144px |

Section vertical rhythm: 96–144px desktop, 56–72px mobile.

## Effects

- No glassmorphism, no heavy drop shadows, no neumorphism.
- Depth via **1px hairline borders** (`--color-border`) and flat color bands (paper ↔
  paper-alt ↔ charcoal), not shadows — matches Swiss/editorial discipline.
- Photography: no filters/duotone, natural color grading, consistent crop ratios.
- Radius: sharp-to-minimal — `0px`–`4px` on structural elements, `2px` on buttons/pills for
  tactility without softening the institutional tone.

## Motion

Base: scroll-reveal + stagger (fade + 16–24px translate-y), 300–450ms,
`cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) — calmer than the tool's default `back.out(1.4)`
overshoot, which reads too playful for this register.

- Hero: staged reveal (eyebrow → name → descriptor → CTAs), 80ms stagger.
- Section titles/paragraphs: fade + translate-y(20px) on enter, once, `whileInView`.
- Result numbers: count-up on first view.
- Timeline: draw-in vertical line + stagger nodes.
- Photos: subtle scale (1.04 → 1.0) + slight parallax translate on scroll, bounded to ±24px.
- Nav: active-section indicator, smooth underline transition.
- All motion gated behind `prefers-reduced-motion: reduce` → instant, no transform.

## Anti-Patterns (from brief + tool)

- ❌ Corporate blue, AI-purple, glassmorphism, cyberpunk black, acid gradients
- ❌ Emojis as icons — SVG only (inline, stroke-based, consistent weight)
- ❌ Stock photos of people — only Igor's real photos
- ❌ Decorative-only animation, infinite floating/rotating elements
- ❌ Missing `cursor:pointer`, invisible focus states, <4.5:1 text contrast
- ❌ Keyword-stuffed SEO copy, "эксперт №1" style claims

## Pre-Delivery Checklist

- [ ] No emojis as icons — SVG only, consistent stroke weight
- [ ] `cursor-pointer` + visible hover on every clickable element
- [ ] Text contrast ≥ 4.5:1 (bronze accent never used for small body text)
- [ ] Focus states visible (2px ring, bronze or ink depending on surface)
- [ ] `prefers-reduced-motion` respected everywhere
- [ ] Responsive verified at 375 / 390 / 768 / 1024 / 1440px, no horizontal scroll
- [ ] All images have real `alt`, lazy-loaded below the fold, no CLS
- [ ] Semantic HTML + correct heading hierarchy (h1 → h2 → h3)
