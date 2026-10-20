# Configuration reference

Full field-by-field reference for `src/config/site.config.ts`. Types are
defined in `src/types/config.ts` — this document explains what each field
controls visually rather than repeating the TypeScript signatures.

## `brand`

| Field | Controls |
|---|---|
| `logoText` | Text shown in the header logo and footer |
| `logoImage` | Optional image logo (falls back to `logoText` if unset) |
| `colors.*` | Every color in the site — primary/secondary/accent for CTAs and gradients, background/surface for section backgrounds, text/muted for typography, border for card outlines |
| `fonts.heading` / `fonts.body` | One of `inter`, `manrope`, `sora`, `playfair`, `poppins` |

## `expert`

Name, role, niche label, tagline, bio paragraphs, credentials list,
experience years, and clients-helped count. Used across Hero, About, and
the SEO author field.

`experienceYears` and `clientsHelped` are optional: omit either one to
hide its floating stat badge in Hero, rather than stating a number you
can't honestly back up yet (used by `studio.config.ts`).

## `nav`

Header/footer navigation links — label + anchor href (`#about`, `#services`, …).

## `hero`

Eyebrow badge, two-part headline (plain + gradient-highlighted), subheadline,
two CTA button labels, hero image, and a 3-item stat row.

## `about`

Heading/subheading, bio paragraphs (can differ from `expert.bio` if you want
a longer About section), photo, and up to 4 highlight badges (icon + text).

## `helpWith` (optional)

Heading/subheading + a grid of cards (icon, title, description) — the "who
this is for" / "what I help with" section. Omit the field entirely to skip
it (e.g. when `whyTrust` already covers the same ground — see
`studio.config.ts`).

## `services`

Heading/subheading + pricing cards. Each card: title, description, price,
optional price note (e.g. "for 4 sessions"), duration, feature bullet list,
CTA label, and an optional `highlighted: true` to render it as the
dark "recommended" card. Optional `footnote` below the grid (e.g. installment
plan note).

**Optional section**: set `items: []` to omit Services entirely (e.g. a niche
that shows services as plain cards via `helpWith` instead of a priced grid —
see `lawyer.config.ts`). `Hero`'s secondary CTA falls back to `#services` by
default; set `hero.ctaSecondaryHref` to point elsewhere (e.g. `#contacts`)
when Services is omitted.

## `whyTrust` (optional)

Add this field to a niche config to render a small grid of trust factors
(e.g. confidentiality, years of experience, individual approach).
Heading/subheading + `items: { icon, title, description }[]` — the column
count is derived from `items.length` (2–6 supported, 6 lays out 3×2). Omit
the field entirely to skip the section — most niches don't need it; see
`lawyer.config.ts` for a working example. Where it renders relative to the
other sections is controlled by `pageOrder` (see below); by default it sits
between HelpWith and Process.

## `comparison` (optional)

An "own site vs. website builder" table: `heading`, `subheading`,
`ownSiteLabel`/`builderLabel` (the two column headers), `rows: { label,
ownSite, builder }[]`, and an optional `footnote` below the table. Keep the
copy factual and non-disparaging — no competitor pricing claims, since
those go stale. Omit the field entirely to skip the section; see
`studio.config.ts` for a working example ("Почему не Tilda?").

## `portfolio` (optional)

A case-study grid: `heading`, `subheading`, `items: { icon, title,
category, problem, description, result }[]`. Each card leads with
`problem` — the one-sentence answer to "what task did this solve?" — and
expands ("Подробнее") to reveal `description` (what was built) and
`result` (the outcome). Omit the field entirely to skip the section; see
`studio.config.ts` for a working example.

## `process`

Heading/subheading + an ordered list of steps (title + description),
rendered as a numbered timeline.

## `addOns` (optional)

A small "what can be added later" teaser: `heading`, `subheading`, `items:
{ icon, label }[]`, rendered as a single row of chips. Omit the field
entirely to skip the section; see `studio.config.ts` for a working example.

## `testimonials`

Heading/subheading + a list of `{ name, role, text, photo?, rating }`.
Missing `photo` falls back to an initials avatar.

**Optional section**: set `items: []` to omit Testimonials entirely (e.g. a
new client with no collected reviews yet).

## `faq`

Heading/subheading + an accordion of `{ question, answer }` pairs.

## `finalCta`

Heading/subheading + primary CTA label + secondary supporting text (e.g.
"I reply within a day"), shown just before Contacts.

## `contacts`

Heading/subheading, email, phone, city, working hours, and the messaging
channels: `telegram` (full deep link, required), `whatsapp` (deep link —
set to `""` to hide the WhatsApp button/icon entirely), `max` (optional —
a MAX-messenger link, or a `tel:`/`mailto:` fallback if there's no public
profile yet; shown as a second booking button next to Telegram and as a
footer icon, falling back to `whatsapp` when unset), and `instagram`
(optional). These same values also feed the footer's social icons and the
header/hero/final-CTA buttons. `consentLabel` is the copy next to the
required checkbox that gates the Telegram/MAX (or WhatsApp) buttons in the
Contacts section (see `legal` below).

## `footer`

Short description line, footer nav links, and the legal name used in the
copyright line.

## `legal`

Drives the site's legal footprint — this is what makes the auto-generated
legal pages (see `docs/LEGAL_PAGES.md`) usable for a real client without
touching code:

- `entityType`: `"ip" | "self-employed" | "llc"`
- `entityLabel`: human-readable status shown in the footer, e.g. "Самозанятая", "ИП", "ООО"
- `entityName`: full legal name, e.g. "Полякова Мария Андреевна"
- `inn`, `ogrn` (optional)
- `registrationAddress`
- `effectiveDate`: ISO date, formatted into Russian on the legal pages
- `disclaimer`: shown in the footer, e.g. "Информация на сайте носит информационный характер и не является публичной офертой."

The 5 legal document routes themselves (`/legal/privacy`, `/legal/consent`,
`/legal/terms`, `/legal/cookies`, `/legal/requisites`) are structural and
listed in `src/lib/legal-links.ts` — every client gets the same pages at
the same paths; only the generated content changes per `legal` + `expert`
+ `contacts` + `seo`.

## `seo`

`title`, `description`, `keywords[]`, `siteUrl` (used as `metadataBase`),
`locale` (drives both `<html lang>` and Open Graph locale), and `themeColor`
(mobile browser chrome color). `ogImage` is reserved for teams that want to
replace the auto-generated Open Graph image with a static asset — see
`docs/ARCHITECTURE.md`.

## `pageOrder` (optional)

Overrides the order sections render in on `<main>`. Omit it entirely and
you get the exact order every existing niche has always rendered in — hero,
about, helpWith, services, whyTrust, process, testimonials, faq, finalCta,
contacts (each optional/empty section already no-ops, so this is identical
to today's conditional rendering). Set it when a niche wants a genuinely
different narrative flow — e.g. `studio.config.ts` leads with `whyTrust` and
`comparison` right after Hero, and moves `about` down near the end. Listing
a section whose data is missing is harmless (it renders nothing); listing a
section twice or a typo'd key is a TypeScript error (`SectionKey` in
`src/types/config.ts`) since the value must be one of the keys `page.tsx`'s
`sectionComponents` registry knows about.
