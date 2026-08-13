import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LeadMagnet } from "@/components/LeadMagnet";
import { TextSection } from "@/components/TextSection";
import { Tools } from "@/components/Tools";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { why, problem } from "@/content/site-content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LeadMagnet />
        <TextSection
          eyebrow={why.eyebrow}
          title={why.title}
          paragraphs={why.paragraphs}
          alt
        />
        <TextSection
          eyebrow={problem.eyebrow}
          title={problem.title}
          paragraphs={problem.paragraphs}
        />
        <Tools />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
