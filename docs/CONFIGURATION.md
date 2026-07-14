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

## `nav`

Header/footer navigation links — label + anchor href (`#about`, `#services`, …).

## `hero`

Eyebrow badge, two-part headline (plain + gradient-highlighted), subheadline,
two CTA button labels, hero image, and a 3-item stat row.

## `about`

Heading/subheading, bio paragraphs (can differ from `expert.bio` if you want
a longer About section), photo, and up to 4 highlight badges (icon + text).

## `helpWith`

Heading/subheading + a grid of cards (icon, title, description) — the "who
this is for" / "what I help with" section.

## `services`

Heading/subheading + pricing cards. Each card: title, description, price,
optional price note (e.g. "for 4 sessions"), duration, feature bullet list,
CTA label, and an optional `highlighted: true` to render it as the
dark "recommended" card. Optional `footnote` below the grid (e.g. installment
plan note).

## `process`

Heading/subheading + an ordered list of steps (title + description),
rendered as a numbered timeline.

## `testimonials`

Heading/subheading + a list of `{ name, role, text, photo?, rating }`.
Missing `photo` falls back to an initials avatar.

## `faq`

Heading/subheading + an accordion of `{ question, answer }` pairs.

## `finalCta`

Heading/subheading + primary CTA label + secondary supporting text (e.g.
"I reply within a day"), shown just before Contacts.

## `contacts`

Heading/subheading, email, phone, city, working hours, and the three
messaging channels: `telegram` and `whatsapp` (full deep links, required)
and `instagram` (optional). These same values also feed the footer's social
icons and the header/hero/final-CTA buttons.

## `footer`

Short description line, footer nav links, and the legal name used in the
copyright line.

## `seo`

`title`, `description`, `keywords[]`, `siteUrl` (used as `metadataBase`),
`locale` (drives both `<html lang>` and Open Graph locale), and `themeColor`
(mobile browser chrome color). `ogImage` is reserved for teams that want to
replace the auto-generated Open Graph image with a static asset — see
`docs/ARCHITECTURE.md`.
