import Hero from "../components/Hero";
import QuoteBlock from "../components/QuoteBlock";
import IntroSection from "../components/IntroSection";
import FiveTools from "../components/FiveTools";
import ClientJourney from "../components/ClientJourney";
import Philosophy from "../components/Philosophy";
import Checklist from "../components/Checklist";
import ProductIntro from "../components/ProductIntro";
import ProductShowcase from "../components/ProductShowcase";
import ProductLogic from "../components/ProductLogic";
import FAQ from "../components/FAQ";
import Pricing from "../components/Pricing";
import PersonalWork from "../components/PersonalWork";
import FinalCTA from "../components/FinalCTA";

export default function Landing() {
  return (
    <main>
      <article>
        <Hero />
        <QuoteBlock
          quote="Вам не обязательно становиться маркетологом, дизайнером и техническим специалистом одновременно."
          supporting="Вам нужна простая база, которая позволяет представить себя в интернете, показать, чем вы занимаетесь, собрать потенциального клиента и не потерять его."
        />
        <IntroSection />
        <FiveTools />
        <ClientJourney />
        <Philosophy />
        <Checklist />
      </article>

      <ProductIntro />
      <ProductShowcase />
      <ProductLogic />
      <FAQ />
      <Pricing />
      <PersonalWork />
      <FinalCTA />
    </main>
  );
}
