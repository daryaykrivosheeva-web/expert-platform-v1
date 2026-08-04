/**
 * Full content & branding schema for the Expert Platform template.
 * Everything a new niche/expert needs to change lives behind this contract —
 * see src/config/site.config.ts for the single file to edit.
 */

export type FontKey = "inter" | "manrope" | "sora" | "playfair" | "poppins";

export interface BrandColors {
  primary: string;
  primaryDark: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
}

export interface ExpertConfig {
  name: string;
  role: string;
  niche: string;
  tagline: string;
  bio: string[];
  photo: string;
  credentials: string[];
  /** Optional — omit if there's no honest number to show yet; Hero hides the floating badge. */
  experienceYears?: number;
  /** Optional — omit if there's no honest number to show yet; Hero hides the floating badge. */
  clientsHelped?: string;
}

export interface BrandConfig {
  logoText: string;
  logoImage?: string;
  colors: BrandColors;
  fonts: {
    heading: FontKey;
    body: FontKey;
  };
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroConfig {
  eyebrow: string;
  headline: string;
  highlight: string;
  subheadline: string;
  ctaPrimaryText: string;
  ctaSecondaryText: string;
  /** Anchor the secondary hero button scrolls to. Defaults to "#services". */
  ctaSecondaryHref?: string;
  image: string;
  stats: { value: string; label: string }[];
}

export interface AboutConfig {
  heading: string;
  subheading: string;
  paragraphs: string[];
  photo: string;
  highlights: { icon: string; text: string }[];
}

export interface HelpWithItem {
  icon: string;
  title: string;
  description: string;
}

export interface HelpWithConfig {
  heading: string;
  subheading: string;
  items: HelpWithItem[];
}

export interface ServiceItem {
  title: string;
  description: string;
  price: string;
  priceNote?: string;
  duration: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
}

export interface ServicesConfig {
  heading: string;
  subheading: string;
  items: ServiceItem[];
  footnote?: string;
}

export interface WhyTrustItem {
  icon: string;
  title: string;
  description: string;
}

/**
 * Optional "why clients trust me" section — a small grid of trust factors
 * (e.g. confidentiality, experience, individual approach). Omit this field
 * entirely to skip the section; no niche is required to use it.
 */
export interface WhyTrustConfig {
  heading: string;
  subheading: string;
  items: WhyTrustItem[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ProcessConfig {
  heading: string;
  subheading: string;
  steps: ProcessStep[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  photo?: string;
  rating: number;
}

export interface TestimonialsConfig {
  heading: string;
  subheading: string;
  items: Testimonial[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqConfig {
  heading: string;
  subheading: string;
  items: FaqItem[];
}

export interface FinalCtaConfig {
  heading: string;
  subheading: string;
  ctaText: string;
  secondaryText: string;
}

export interface ContactsConfig {
  heading: string;
  subheading: string;
  email: string;
  phone: string;
  city: string;
  telegram: string;
  /** Set to "" to omit the WhatsApp button/icon (e.g. a niche that uses MAX instead). */
  whatsapp: string;
  /** Optional MAX messenger link (or a tel:/mailto: fallback if there's no public profile yet). */
  max?: string;
  instagram?: string;
  workingHours: string;
  consentLabel: string;
}

export interface PortfolioItem {
  icon: string;
  title: string;
  category: string;
  /** The one-sentence answer to "what task did this project solve?" — shown on the card front. */
  problem: string;
  /** What was actually built — shown when the card is expanded. */
  description: string;
  /** The outcome — shown when the card is expanded. */
  result: string;
  /** Optional preview image shown on the card front. Falls back to the icon badge when unset. */
  image?: string;
}

export interface PortfolioConfig {
  heading: string;
  subheading: string;
  items: PortfolioItem[];
}

export interface ComparisonRow {
  label: string;
  ownSite: string;
  builder: string;
}

/**
 * Optional "own site vs. website builder" comparison table. Omit entirely
 * to skip the section — most niches don't need it.
 */
export interface ComparisonConfig {
  heading: string;
  subheading: string;
  ownSiteLabel: string;
  builderLabel: string;
  rows: ComparisonRow[];
  footnote?: string;
}

export interface AddOnItem {
  icon: string;
  label: string;
}

/**
 * Optional "what can be added later" teaser list. Omit entirely to skip
 * the section.
 */
export interface AddOnsConfig {
  heading: string;
  subheading: string;
  items: AddOnItem[];
}

export interface FooterConfig {
  description: string;
  links: NavLink[];
  legalName: string;
}

/**
 * Legal entity status. Drives wording across the auto-generated legal
 * documents (src/lib/legal-content.ts) — e.g. a self-employed individual
 * and an LLC are described differently in the consent/terms text.
 */
export type LegalEntityType = "ip" | "self-employed" | "llc";

export interface LegalConfig {
  entityType: LegalEntityType;
  /** Human-readable status shown in the footer, e.g. "Самозанятая", "ИП", "ООО". */
  entityLabel: string;
  /** Full legal name of the entity/individual, e.g. "Полякова Мария Андреевна". */
  entityName: string;
  inn: string;
  ogrn?: string;
  registrationAddress: string;
  /** ISO date (YYYY-MM-DD) the legal documents take effect / were last updated. */
  effectiveDate: string;
  /** Shown in the footer, e.g. "Информация на сайте носит информационный характер и не является публичной офертой." */
  disclaimer: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string[];
  siteUrl: string;
  ogImage: string;
  locale: string;
  themeColor: string;
}

/**
 * Keys of every orderable page section, matching `sectionComponents` in
 * `src/app/page.tsx`. Used by the optional `pageOrder` field below.
 */
export type SectionKey =
  | "hero"
  | "about"
  | "helpWith"
  | "services"
  | "whyTrust"
  | "comparison"
  | "portfolio"
  | "process"
  | "addOns"
  | "testimonials"
  | "faq"
  | "finalCta"
  | "contacts";

export interface SiteConfig {
  brand: BrandConfig;
  expert: ExpertConfig;
  nav: NavLink[];
  hero: HeroConfig;
  about: AboutConfig;
  /** Optional "what I help with" grid. Omit entirely to skip the section (e.g. when whyTrust already covers it). */
  helpWith?: HelpWithConfig;
  services: ServicesConfig;
  /** Optional trust-factors grid. Omit entirely to skip the section. */
  whyTrust?: WhyTrustConfig;
  /** Optional case-study grid. Omit entirely to skip the section. */
  portfolio?: PortfolioConfig;
  /** Optional own-site-vs-builder comparison table. Omit entirely to skip the section. */
  comparison?: ComparisonConfig;
  process: ProcessConfig;
  testimonials: TestimonialsConfig;
  /** Optional "what can be added later" teaser list. Omit entirely to skip the section. */
  addOns?: AddOnsConfig;
  faq: FaqConfig;
  finalCta: FinalCtaConfig;
  contacts: ContactsConfig;
  footer: FooterConfig;
  seo: SeoConfig;
  legal: LegalConfig;
  /**
   * Optional override of the section order in `<main>`. Omit entirely to
   * keep the default order (the exact order every existing niche already
   * renders in — changing the default would silently reshuffle the live
   * psychologist deployment and every other niche). Sections not listed
   * here are simply not rendered; each section component already no-ops
   * (returns null) when its own config data is missing/empty, so listing
   * a section a niche doesn't use is harmless.
   */
  pageOrder?: SectionKey[];
}
