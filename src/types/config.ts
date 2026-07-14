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
  experienceYears: number;
  clientsHelped: string;
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
  whatsapp: string;
  instagram?: string;
  workingHours: string;
}

export interface FooterConfig {
  description: string;
  links: NavLink[];
  legalName: string;
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

export interface SiteConfig {
  brand: BrandConfig;
  expert: ExpertConfig;
  nav: NavLink[];
  hero: HeroConfig;
  about: AboutConfig;
  helpWith: HelpWithConfig;
  services: ServicesConfig;
  process: ProcessConfig;
  testimonials: TestimonialsConfig;
  faq: FaqConfig;
  finalCta: FinalCtaConfig;
  contacts: ContactsConfig;
  footer: FooterConfig;
  seo: SeoConfig;
}
