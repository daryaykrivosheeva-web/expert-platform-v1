# Architecture

## Principle

One rule drives every decision in this codebase: **components render, config
supplies content.** No section component contains hardcoded copy, prices, or
contact info — everything flows from `src/config/site.config.ts` through a
single typed contract (`src/types/config.ts`).

This makes the template safe to resell: adapting it for a new expert or a
new niche never touches `src/components/` or `src/app/`.

## Layers

```
src/types/config.ts        Contract: what data the site needs
        ↑
src/config/site.config.ts  Data: one expert's actual content
        ↓
src/components/*.tsx        Presentation: reads config, renders markup
        ↓
src/app/page.tsx            Composition: orders the sections
src/app/layout.tsx          Theming: turns config.brand into CSS variables
                             + generates SEO metadata from config.seo
```

## Theming without touching Tailwind config

`tailwind.config.ts` maps utility classes (`bg-primary`, `text-ink`,
`font-heading`, etc.) to **CSS custom properties**, not to fixed hex values
or font names:

```ts
colors: { primary: "var(--color-primary)", ... }
fontFamily: { heading: ["var(--font-heading)", "sans-serif"] }
```

`src/app/layout.tsx` sets those CSS variables at runtime from
`siteConfig.brand.colors` and `siteConfig.brand.fonts` (resolved to a
preloaded `next/font/google` variable via `src/lib/fonts.ts`). Changing a
color or font in the config re-themes every component automatically,
because every component already uses these utility classes.

## Icons as data

Section content that needs an icon (`helpWith.items[].icon`,
`about.highlights[].icon`) stores a **string key**, not a React import. This
keeps `site.config.ts` a plain data file that a non-developer (or an LLM)
can safely edit. `src/lib/icons.ts` maps string keys to `lucide-react`
components; unknown keys fall back to a sensible default icon rather than
crashing the build.

## Zero-asset requirement

Real photography is often unavailable when a template is being demoed or
first configured. Every image field (`expert.photo`, `hero.image`,
`about.photo`, testimonial photos) is optional:

- Missing expert/testimonial photo → `src/components/ui/Avatar.tsx` renders
  a gradient block with initials, using the brand colors.
- Favicon and Open Graph share image are generated at build time by
  `src/app/icon.tsx` and `src/app/opengraph-image.tsx` (Next's `ImageResponse`)
  from `brand.colors` and `expert.name` — no static image file needed.

## No backend

All calls to action link out to `mailto:`, `tel:`, a Telegram deep link
(`t.me/...`), or a WhatsApp deep link (`wa.me/...`) — configured once in
`contacts`. There is no database, no server action, and no form submission
endpoint, which keeps the template deployable as a pure Next.js app on
Vercel or Netlify with no environment variables or secrets required.

See `docs/CONFIGURATION.md` for the full field reference and
`docs/DEPLOYMENT.md` for hosting instructions.
