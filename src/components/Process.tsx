import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  const { process } = siteConfig;

  return (
    <section id="process" className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Процесс"
          heading={process.heading}
          subheading={process.subheading}
        />

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block"
          />
          {process.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06} className="relative">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-white shadow-soft">
                {i + 1}
              </div>
              <h3 className="mt-5 font-heading text-base font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
