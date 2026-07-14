# Changelog

All notable changes to Expert Platform v1 are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
