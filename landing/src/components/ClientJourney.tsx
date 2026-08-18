import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { systemJourney } from "../data/journey";

export default function ClientJourney() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Целиком"
          title="Теперь посмотрите на всю систему целиком"
          align="center"
          className="mb-16 sm:mb-20"
        />

        {/* Desktop: horizontal journey */}
        <Reveal className="relative hidden lg:block">
          <div className="absolute left-0 right-0 top-7 h-px bg-plum/15" aria-hidden="true" />
          <div className="relative grid grid-cols-5 gap-6">
            {systemJourney.map((step) => (
              <div key={step.number} className="flex flex-col items-center px-2 text-center">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-plum/25 bg-bg font-serif text-base text-plum">
                  {step.number}
                </div>
                <h3 className="mt-6 text-[15px] font-semibold leading-snug text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{step.subtitle}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile / tablet: vertical timeline */}
        <div className="relative space-y-10 pl-12 lg:hidden">
          <div className="absolute left-[23px] top-2 bottom-2 w-px bg-plum/15" aria-hidden="true" />
          {systemJourney.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.05} className="relative">
              <div className="absolute -left-12 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-plum/25 bg-bg font-serif text-sm text-plum">
                {step.number}
              </div>
              <h3 className="text-[15px] font-semibold leading-snug text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/55">{step.subtitle}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
