import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import PhotoFrame from "./ui/PhotoFrame";
import Reveal from "./ui/Reveal";
import { ABOUT, SITE } from "../data/profile";
import { IMAGES } from "../data/images";

export default function About() {
  return (
    <section id="about" className="bg-paper py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:order-2">
          <SectionHeading eyebrow={ABOUT.eyebrow} title={ABOUT.title} />
          <div className="mt-8 space-y-5">
            {ABOUT.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className="text-balance text-lg leading-relaxed text-stone">{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-8">
            <a
              href={SITE.vkHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gold transition-colors hover:text-ink"
            >
              Мой профиль ВКонтакте →
            </a>
          </Reveal>
        </div>

        <div className="lg:order-1">
          <PhotoFrame image={IMAGES.elbrusSummit} frame="portrait" />
        </div>
      </Container>
    </section>
  );
}
