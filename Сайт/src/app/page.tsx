import siteConfig from "@/config/site.config";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HelpWith } from "@/components/HelpWith";
import { Services } from "@/components/Services";
import { WhyTrust } from "@/components/WhyTrust";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <HelpWith />
        {siteConfig.services.items.length > 0 && <Services />}
        {siteConfig.whyTrust && <WhyTrust />}
        <Process />
        {siteConfig.testimonials.items.length > 0 && <Testimonials />}
        <FAQ />
        <FinalCTA />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
