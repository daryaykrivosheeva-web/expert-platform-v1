import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { steps } from "../data/steps";

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Как это работает" title="Три простых шага" align="center" className="mb-10 sm:mb-14" />

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <div className="text-center sm:text-left">
                <span className="font-serif text-4xl text-terracotta">{step.number}</span>
                <h3 className="mt-3 text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
