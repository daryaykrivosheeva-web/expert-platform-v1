import Container from "./ui/Container";
import PhotoFrame from "./ui/PhotoFrame";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { GOV_SERVICE } from "../data/profile";
import { IMAGES } from "../data/images";

export default function GovService() {
  return (
    <section id="gov" className="bg-charcoal py-24 text-on-dark sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Государственная служба" title={GOV_SERVICE.title} tone="dark" />
          <div className="mt-8 flex flex-col gap-6">
            {GOV_SERVICE.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className="text-balance leading-relaxed text-on-dark-muted">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <PhotoFrame image={IMAGES.govService} frame="landscape" className="lg:aspect-[3/4]" />
        </Reveal>
      </Container>
    </section>
  );
}
