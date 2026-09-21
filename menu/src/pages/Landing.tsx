import Hero from "../components/Hero";
import Pain from "../components/Pain";
import Solution from "../components/Solution";
import HowItWorks from "../components/HowItWorks";
import WhatsInside from "../components/WhatsInside";
import Levels from "../components/Levels";
import Bonus from "../components/Bonus";
import Comparison from "../components/Comparison";
import Audience from "../components/Audience";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
// import Testimonials from "../components/Testimonials";
import FinalCTA from "../components/FinalCTA";

export default function Landing() {
  return (
    <main id="top">
      <Hero />
      <Pain />
      <Solution />
      <HowItWorks />
      <WhatsInside />
      <Levels />
      <Bonus />
      <Comparison />
      <Audience />
      <Pricing />
      <FAQ />
      {/* Блок отзывов скрыт до появления настоящих отзывов.
          Заполните src/data/testimonials.ts и раскомментируйте строку ниже. */}
      {/* <Testimonials /> */}
      <FinalCTA />
    </main>
  );
}
