# Changelog

All notable changes to Expert Platform v1 are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.5.0] — 2026-08-04

### Added

- **The studio's own site**: `src/config/examples/studio.config.ts` (`NEXT_PUBLIC_SITE_CONFIG=studio`) — Дарья Радченко's business-card/portfolio site (website development for experts and small business), built on the same template and mechanism as every client niche. Pine-green + copper palette, Manrope + Inter typography.
- **`Portfolio` section** (`src/components/Portfolio.tsx`, optional `portfolio` field on `SiteConfig`): a case-study grid — each card leads with the problem it solved and expands ("Подробнее") to show what was built and the result. Omit the field to skip the section.
- **`Comparison` section** (`src/components/Comparison.tsx`, optional `comparison` field): an "own site vs. website builder" table (own-site column / builder column + optional footnote). Omit the field to skip the section.
- **`AddOns` section** (`src/components/AddOns.tsx`, optional `addOns` field): a small "what can be added later" chip list. Omit the field to skip the section.
- **`helpWith` is now optional per niche** (`page.tsx` renders it only when present) — lets a niche skip it when `whyTrust` already covers the same ground (used by `studio.config.ts`).
- **`contacts.max`** (optional): a MAX-messenger link (or a `tel:`/`mailto:` fallback) shown as a second booking button next to Telegram and as a footer icon; falls back to WhatsApp when unset. `contacts.whatsapp` can now be set to `""` to hide the WhatsApp button/icon entirely (used by `studio.config.ts`, which has no WhatsApp channel).
- **`expert.experienceYears` and `expert.clientsHelped` are now optional**: Hero hides each floating stat badge when its value is absent, instead of forcing a niche to state a number it can't honestly back up.
- `WhyTrust`'s grid now derives its column count from `items.length` (same pattern as `Process`), so a 6-item grid (used by `studio.config.ts`) lays out 3×2 instead of an uneven 4+2.

## [1.4.0] — 2026-07-27

### Added

- Second commercial adaptation: **lawyer** (`src/config/examples/lawyer.config.ts`) — a restrained, minimalist personal legal practice site. White/graphite/deep-navy palette, Sora + Inter typography, no literal legal iconography. Built entirely through configuration — no component code touched beyond the two universal, backward-compatible template extensions below (needed by this niche, available to all future ones).
- **Optional `whyTrust` section** (`src/components/WhyTrust.tsx`, `src/types/config.ts`): a small trust-factor grid (icon + title + description) rendered between HelpWith and Process. Omit the `whyTrust` field on `SiteConfig` to skip it — the 4 existing niches are unaffected.
- **Services and Testimonials are now optional per niche**: `page.tsx` renders each only if `items.length > 0`. Set either to `[]` to omit the section (used by `lawyer.config.ts`: services are shown as plain cards via `helpWith` instead of a priced grid, and no reviews are collected yet).
- **Multi-tenant config selection**: `site.config.ts` now picks the active niche via `NEXT_PUBLIC_SITE_CONFIG` (defaults to `psychologist`, preserving the exact previous behavior for the live client). Lets multiple real clients deploy from this one repo, each as their own Vercel/Netlify project with their own env var — see `docs/DEPLOYMENT.md` → "Multiple clients, one repo".
- `hero.ctaSecondaryHref` (optional): lets a niche point the Hero secondary button somewhere other than `#services` (defaults to `#services` for backward compatibility; `lawyer.config.ts` points it at `#contacts`).

## [1.3.1] — 2026-07-24

### Changed

- Repository reorganized to separate the product from studio-wide material: moved `STUDIO_SYSTEM.md`, `PRODUCT_MATRIX.md`, `SERVICES.md`, and `02_SOP/SOP-013` to the `AI-Product-Studio` monorepo, where they belong (they describe the whole studio, not this product). Deleted the disconnected `PROJECTS/PROJECT_TEMPLATE` scaffolding (`CLIENT_DATA.yaml`, empty `Info.md` stubs, duplicate source photos, empty placeholder portfolio niches) that had never been wired to the real client-tracking convention (`13_Clients/` in the monorepo) or the real per-niche config mechanism (`src/config/examples/*.config.ts`).
- `06_AI/Website_Product_Builder` → `builder/`, rewritten to describe the actual adaptation mechanism (config files in `src/config/examples/`, photos in `public/images/`) instead of the never-used `CLIENT_DATA.yaml`/`PROJECTS/PROJECT-XXX` scheme.
- `Portfolio/Psychologist/Мария Полякова` → `portfolio/psychologist/maria-polyakova/` (also fixed a `Cosmetologist/Lawyer` mis-nesting bug and dropped empty placeholder niche folders).
- Added a "Repository layout" section to `README.md` explaining product code (`src/`, `public/`, `docs/`) vs. supporting material (`builder/`, `portfolio/`), so new niches and clients can be added without restructuring again.
- No changes to `src/`, `public/`, `docs/`, or any config — build and typecheck verified passing.

## [1.3.0] — 2026-07-16

### Fixed

- Hero stat badges (`Hero.tsx`): fully opaque background instead of 90%-transparent + backdrop-blur, so text stays readable regardless of what's behind them in the photo (was low-contrast over dark photo areas).
- Duplicate section titles: `About`, `HelpWith`, `Services`, `Process`, `Testimonials`, `FAQ`, and `Contacts` no longer render a separate small "eyebrow" label above the heading when it just repeated (or nearly repeated) the heading text itself — every section now shows one clean title, consistent across the whole page.
- `Process` step grid: column count is now derived from `process.steps.length` instead of being hardcoded to 5, so a 4-step (or 3/6-step) process fills the row evenly instead of leaving an empty trailing column that visually shifted everything left.
- `FinalCTA` background changed from `bg-ink` (near-black) to `bg-primary-dark` — stays on-brand and dark enough for white text, without looking like an unrelated black slab.

### Changed

- Psychologist config content: `helpWith.heading` → "Направления работы" (was duplicating "С чем я помогаю"/nav wording), `services.heading` → "Стоимость" (was "Стоимость консультаций"), `process.heading` → "Процесс работы" (was "Как проходит работа", now built from the removed "Процесс" eyebrow), `services.footnote` no longer says "вы ничем не обязаны" (dropped "ничем").

## [1.2.2] — 2026-07-16

### Changed

- Replaced the stock hero/about photos with the client's real portrait photography (`public/images/hero.jpg`, `public/images/about.jpg`), downsized from source (~3.6 MB, up to 4082×5440) to web-appropriate JPEGs (~200 KB, max 2000px) via `sharp`. `expert.photo`, `hero.image`, and `about.photo` in `psychologist.config.ts` now point to local files instead of hotlinked Pexels URLs.

## [1.2.1] — 2026-07-16

### Changed

- Legal document content moved from being generated inline in each route to named components in `src/legal/`: `privacy.tsx`, `consent.tsx`, `agreement.tsx` (Terms of Use), `cookies.tsx`, `requisites.tsx`. Each pairs one `src/lib/legal-content.ts` generator with the shared `LegalPage` layout. The `src/app/legal/*/page.tsx` routes are now thin wrappers around these.

## [1.2.0] — 2026-07-16

### Added

- New universal `legal` config section (`src/types/config.ts`) — entity type (ИП / самозанятый / ООО), legal name, INN/OGRN, registration address, effective date, and the "informational, not a public offer" disclaimer. Backfilled into all 4 example configs.
- Auto-generated legal documents (`src/lib/legal-content.ts`) built from each client's own config data — Privacy Policy, Consent to Personal Data Processing, Terms of Use, Cookie Policy, and Requisites — rendered at `/legal/privacy`, `/legal/consent`, `/legal/terms`, `/legal/cookies`, `/legal/requisites` via a shared `LegalPage` layout. Reusable for every future niche/client without touching component code.
- Required consent checkbox (`BookingConsent`) gating the Telegram/WhatsApp booking buttons in the Contacts section, linking to the Consent document.
- Footer now shows links to all 5 legal pages, the entity's requisites (status, legal name, INN/OGRN), and the offer disclaimer — all sourced from `legal` config.
- `consentLabel` field on `ContactsConfig` for the checkbox copy.

### Changed

- Psychologist config: "Услуги" renamed to "Стоимость" (nav) / "Стоимость консультаций" (section heading) — applied as a generic template change (the `Services` section eyebrow is now "Стоимость" across all niches).

## [1.1.0] — 2026-07-14

### Added

- First commercial niche adaptation: **psychologist** (`src/config/examples/psychologist.config.ts`), now the active config re-exported by `site.config.ts`. Built entirely through configuration and content — no component code changed.
- Warm, calm, premium palette (milk white / beige / warm gray / sage / dusty terracotta) inspired by Apple, Stripe, Framer, Calm, and Headspace, expressed purely via `brand.colors` and `brand.fonts` (Playfair heading + Manrope body).
- Real photography (Pexels, free commercial-use license) wired into `expert.photo`, `hero.image`, `about.photo`, and testimonial avatars.
- Psychology-specific content: hero copy, "what I help with" cards (anxiety, panic attacks, burnout, self-esteem, relationships, stress), 3-tier pricing, a 4-step process (Знакомство → Первая консультация → Индивидуальная работа → Результат), testimonials with ratings, and a psychology-themed FAQ.
- `src/config/examples/business-coach.config.ts` — the original generic default demo, preserved as a selectable variant now that the psychologist config is active.

### Changed

- `site.config.ts` now imports and re-exports the active niche config from `src/config/examples/` instead of holding content inline — switching the live site to a different niche is a one-line import change.

## [1.0.0] — 2026-07-14

### Added

- Initial release of Expert Platform v1: a premium, config-driven landing page template for individual experts (psychologists, nutritionists, coaches, astrologers, marketers, and more).
- 10 page sections: Hero, About, What I Help With, Services & Pricing, How It Works, Testimonials, FAQ, Final CTA, Contacts, Footer.
- Single-source-of-truth configuration (`src/config/site.config.ts`) with a full TypeScript contract (`src/types/config.ts`) covering brand, colors, fonts, services, pricing, contacts, Telegram/WhatsApp, and SEO.
- Ready-made niche variants in `src/config/examples/`: business coach (default), psychologist, nutritionist, astrologer.
- Dynamically generated favicon and Open Graph image from brand colors and expert name (no image assets required).
- Fallback gradient avatars when no photo is supplied.
- Scroll-reveal micro-animations via Framer Motion.
- Fully responsive layout (mobile, tablet, desktop).
- Deployment configuration for Vercel (`vercel.json`) and Netlify (`netlify.toml` + `@netlify/plugin-nextjs`).
- Documentation (`README.md`) covering local development, customization, and deployment.
