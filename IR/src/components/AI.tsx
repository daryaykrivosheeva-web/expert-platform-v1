import Container from "./ui/Container";
import PhotoFrame from "./ui/PhotoFrame";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { AI_BLOCK } from "../data/profile";
import { IMAGES } from "../data/images";

export default function AI() {
  return (
    <section id="digital" className="bg-paper py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <PhotoFrame image={IMAGES.ai} frame="portrait" />
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="Искусственный интеллект" title={AI_BLOCK.title} />
          <div className="mt-8 flex flex-col gap-6">
            {AI_BLOCK.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className="text-balance leading-relaxed text-stone">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
