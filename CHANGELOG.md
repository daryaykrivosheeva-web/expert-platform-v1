# Changelog

All notable changes to Expert Platform v1 are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
