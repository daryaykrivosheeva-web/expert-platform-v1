# Legal pages

Every deployment of Expert Platform v1 ships 5 legal document routes,
generated automatically from the client's own config data:

| Page | Route | Content component | Generator |
|---|---|---|---|
| Privacy Policy | `/legal/privacy` | `src/legal/privacy.tsx` | `getPrivacyPolicyContent` |
| Consent to Personal Data Processing | `/legal/consent` | `src/legal/consent.tsx` | `getConsentContent` |
| Terms of Use ("Пользовательское соглашение") | `/legal/terms` | `src/legal/agreement.tsx` | `getTermsContent` |
| Cookie Policy | `/legal/cookies` | `src/legal/cookies.tsx` | `getCookiesContent` |
| Requisites | `/legal/requisites` | `src/legal/requisites.tsx` | `getRequisitesContent` |

All 5 generators live in `src/lib/legal-content.ts` and take the full
`SiteConfig` as input — they read `legal`, `expert`, `contacts`, and `seo`
to produce the document text. `src/legal/*.tsx` are named components that
pair one generator with the shared `src/components/legal/LegalPage.tsx`
layout (e.g. `PrivacyPolicy`, `CookiesPolicy`, `UserAgreement`,
`Requisites`, `ConsentToProcessing`). The Next.js routes themselves
(`src/app/legal/*/page.tsx`) are thin: each just wraps the matching
`src/legal/*.tsx` component in `Header`/`Footer` and sets the page title.

## Re-skinning for a new client

Because the documents are generated from config, a new niche/client gets
correct legal pages automatically as soon as `src/config/site.config.ts`
provides a `legal` block and `contacts.consentLabel` — no new code, no
copy-pasting legal text between projects.

## Important: template, not legal advice

The generated text is a standard-form template for an individual
online-consultation practice under Russian law (152-ФЗ personal data
basics, a generic offer-style terms structure, a generic cookie notice).
It is **not** a substitute for review by a qualified lawyer, especially:

- the specific wording required for the client's actual legal entity type;
- `legal.inn` / `legal.ogrn` / `legal.registrationAddress`, which must be
  the client's real, verified registration details before going live;
- any additional disclosures required by the client's specific services
  (e.g. medical licensing disclosures, if applicable).

Treat every generated page as a first draft to be reviewed before a real
client's site goes to production.

## Where the checkbox fits in

`src/components/BookingConsent.tsx` renders the required consent checkbox
in the Contacts section — the Telegram/WhatsApp buttons are inert
(`pointer-events-none`, dimmed, and their `onClick` calls
`preventDefault()`) until the box is checked. The checkbox label text is
`contacts.consentLabel`; the "Подробнее" link always points to
`/legal/consent`.
