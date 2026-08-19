import Container from "./ui/Container";
import PhotoFrame from "./ui/PhotoFrame";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { ABOUT } from "../data/profile";
import { IMAGES } from "../data/images";

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Обо мне" title="Человек, который работает на стыке нескольких систем" />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <Reveal>
              <ol className="flex flex-col gap-0" aria-label="Профессиональные системы">
                {ABOUT.chain.map((step, i) => (
                  <li key={step} className="relative flex items-center gap-4 py-3">
                    <span className="font-serif text-sm text-stone-muted">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-serif text-xl text-ink sm:text-2xl">{step}</span>
                    {i < ABOUT.chain.length - 1 && (
                      <span
                        className="absolute left-[7px] top-full h-3 w-px bg-border"
                        aria-hidden="true"
                      />
                    )}
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 hidden lg:block">
              <PhotoFrame image={IMAGES.about} frame="portrait" />
            </Reveal>
          </div>

          <div className="order-1 flex flex-col gap-6 lg:order-2">
            {ABOUT.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className="text-balance text-lg leading-relaxed text-stone">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.2} className="mt-4 lg:hidden">
              <PhotoFrame image={IMAGES.about} frame="landscape" />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
