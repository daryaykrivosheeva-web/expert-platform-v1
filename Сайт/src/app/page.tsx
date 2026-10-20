import siteConfig from "@/config/site.config";
import type { SectionKey } from "@/types/config";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HelpWith } from "@/components/HelpWith";
import { Services } from "@/components/Services";
import { WhyTrust } from "@/components/WhyTrust";
import { Comparison } from "@/components/Comparison";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { AddOns } from "@/components/AddOns";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";

/**
 * Every section is self-contained: it reads its own slice of siteConfig and
 * returns null when that data is missing/empty (whyTrust, comparison,
 * portfolio, addOns, helpWith when omitted; services/testimonials when
 * items: []). page.tsx only decides *order* — see `SiteConfig.pageOrder`.
 */
const sectionComponents: Record<SectionKey, () => React.ReactElement | null> = {
  hero: Hero,
  about: About,
  helpWith: HelpWith,
  services: Services,
  whyTrust: WhyTrust,
  comparison: Comparison,
  portfolio: Portfolio,
  process: Process,
  addOns: AddOns,
  testimonials: Testimonials,
  faq: FAQ,
  finalCta: FinalCTA,
  contacts: Contacts,
};

/** The exact order every existing niche has always rendered in. */
const defaultPageOrder: SectionKey[] = [
  "hero",
  "about",
  "helpWith",
  "services",
  "whyTrust",
  "process",
  "testimonials",
  "faq",
  "finalCta",
  "contacts",
];

export default function Home() {
  const order = siteConfig.pageOrder ?? defaultPageOrder;

  return (
    <>
      <Header />
      <main>
        {order.map((key) => {
          const Section = sectionComponents[key];
          return <Section key={key} />;
        })}
      </main>
      <Footer />
    </>
  );
}
