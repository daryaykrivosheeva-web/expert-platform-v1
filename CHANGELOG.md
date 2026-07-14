# Changelog

All notable changes to Expert Platform v1 are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
