# Expert Platform v1

Premium, single-config landing page template for individual experts —
psychologists, nutritionists, coaches, astrologers, marketers, consultants,
lawyers, trainers, and any other one-person practice that sells consultations.

Built by **AI Product Studio** as the first reusable commercial template in
the Solution Library (`06_Solutions/SaaS` in the
[AI-Product-Studio](https://github.com/daryaykrivosheeva-web/AI-Product-Studio)
monorepo, registered as `SOL-001`).

---

## Preview

| Desktop | Mobile |
|---|---|
| ![Desktop hero](docs/screenshots/desktop-hero.png) | <img src="docs/screenshots/mobile-full.png" width="240" /> |

Full-page screenshots: [`docs/screenshots/desktop-full.png`](docs/screenshots/desktop-full.png) · [`docs/screenshots/mobile-full.png`](docs/screenshots/mobile-full.png)

Scroll-through walkthrough video: [`docs/video/walkthrough.webm`](docs/video/walkthrough.webm)

---

## Documentation

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — how the config-driven theming and content model work
- [`docs/CONFIGURATION.md`](docs/CONFIGURATION.md) — full field-by-field reference for `site.config.ts`
- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) — Vercel and Netlify deployment steps
- [`docs/LEGAL_PAGES.md`](docs/LEGAL_PAGES.md) — the 5 auto-generated legal pages (Privacy, Consent, Terms, Cookies, Requisites) and the booking consent checkbox
- [`CHANGELOG.md`](CHANGELOG.md) — release history

---

## Stack

- **Next.js 16** (App Router) + React 19 + TypeScript
- **Tailwind CSS** with a CSS-variable-driven theme (colors/fonts come from config, not from editing Tailwind classes)
- **Framer Motion** for subtle scroll-reveal animation
- **lucide-react** for icons
- Zero backend, zero database — deploys as a static-friendly Next.js app to **Vercel** or **Netlify**

## Page structure

1. Hero
2. About (Обо мне)
3. What I help with (С чем я помогаю)
4. Services & pricing (Услуги и стоимость)
5. How it works (Как проходит работа)
6. Testimonials (Отзывы)
7. FAQ
8. Final CTA (Финальный призыв к записи)
9. Contacts
10. Footer

---

## The one file you edit: `src/config/site.config.ts`

This is the single source of truth for the entire site. **No component code
needs to change** to re-skin the template for a new expert or niche.

It controls:

| What | Where in config |
|---|---|
| Expert name, role, bio, credentials | `expert` |
| Logo text/image, brand colors, fonts | `brand` |
| Hero headline, stats, image | `hero` |
| About section content & photo | `about` |
| "What I help with" cards | `helpWith` |
| Services & prices | `services` |
| Step-by-step process | `process` |
| Testimonials | `testimonials` |
| FAQ | `faq` |
| Final CTA copy | `finalCta` |
| Email, phone, city, Telegram, WhatsApp, Instagram | `contacts` |
| Footer links & legal name | `footer` |
| SEO title/description/keywords/locale | `seo` |

Full type definitions live in `src/types/config.ts`.

### Ready-made niche variants

`src/config/examples/` contains complete alternate configs you can drop in
as-is:

- `psychologist.config.ts` — **currently active** (first commercial adaptation, see below)
- `business-coach.config.ts` — the original generic default demo
- `nutritionist.config.ts`
- `astrologer.config.ts`

`site.config.ts` doesn't hold content directly — it imports and re-exports
whichever example is currently live. To switch niche, change that one
import line (or copy a file's contents in directly), then adjust
names/prices/contacts as needed.

### Commercial adaptation: psychologist

The active config is a full premium adaptation for the psychology niche —
warm milk/beige/sage palette, Playfair + Manrope typography, real Pexels
photography, psychology-specific "what I help with" cards, a 4-step
process, and a psychology-themed FAQ. See `CHANGELOG.md` [1.1.0] for the
full list of what changed, and `src/config/examples/psychologist.config.ts`
for the source of truth.

### Colors

Edit `brand.colors` (hex values). They're injected as CSS variables in
`app/layout.tsx` and consumed by Tailwind (`tailwind.config.ts` maps
`primary`, `secondary`, `accent`, `background`, `surface`, `ink`, `muted`,
`border` to those variables) — every component already uses these utility
classes, so a color change here re-themes the whole site.

### Fonts

Edit `brand.fonts.heading` / `brand.fonts.body`. Choose from the curated set
already preloaded via `next/font/google` in `src/lib/fonts.ts`:
`inter`, `manrope`, `sora`, `playfair`, `poppins`.

### Photos

Set `expert.photo`, `hero.image`, `about.photo` to an image path (local file
in `public/` or a remote URL — remote hosts are allowed via
`next.config.mjs`). Leave any of them empty and the template falls back to a
tasteful gradient avatar with initials — the site never looks broken without
real photos, which makes it easy to demo before a client supplies assets.

### Favicon & social share image

`src/app/icon.tsx` and `src/app/opengraph-image.tsx` auto-generate the
favicon and Open Graph image from `brand.colors` and `expert.name` — no
image asset required. Replace these files with static images if you'd
rather ship a real photo-based OG card.

### Telegram / WhatsApp

Set `contacts.telegram` and `contacts.whatsapp` to full links, e.g.
`https://t.me/yourhandle` and `https://wa.me/79991234567`. These are used by
the header CTA, final CTA, contacts section, and footer social icons.

### SEO

`seo.title`, `seo.description`, `seo.keywords`, `seo.siteUrl`, `seo.locale`,
`seo.themeColor` feed `generateMetadata()` in `src/app/layout.tsx`
(Open Graph + Twitter cards + theme color).

---

## Local development

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build      # production build
npm run start      # run the production build locally
npm run lint        # eslint
npm run typecheck   # tsc --noEmit
```

---

## Deployment

### Vercel

Zero configuration — `vercel.json` pins the Next.js framework preset. Import
the repo/folder in Vercel and deploy.

### Netlify

`netlify.toml` is preconfigured with `@netlify/plugin-nextjs`, which gives
full support for Next.js SSR/ISR on Netlify. Point Netlify at this folder
(`products/expert-platform-v1`) as the base directory and deploy.

---

## Project structure

```
src/
  app/            # Next.js App Router entry (layout, page, icon, og image, legal/* routes)
  components/     # One component per page section + shared UI primitives
  config/         # site.config.ts (edit this) + examples/ (niche variants)
  legal/          # Named legal-document components (privacy, consent, agreement, cookies, requisites)
  lib/            # fonts, icon map, utils, legal-content generators, legal-links
  types/          # SiteConfig type contract
```

Every section component (`Hero`, `About`, `HelpWith`, `Services`, `Process`,
`Testimonials`, `FAQ`, `FinalCTA`, `Contacts`, `Footer`, `Header`) imports
`siteConfig` and renders purely from it — there is no hardcoded copy in the
component tree.
