import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import PhotoFrame from "./ui/PhotoFrame";
import StaggerGroup, { staggerItem } from "./ui/StaggerGroup";
import { motion } from "framer-motion";
import { SPORT_ITEMS } from "../data/profile";
import { IMAGES } from "../data/images";

export default function Sport() {
  return (
    <section id="sport" className="bg-paper-alt py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Спорт без ограничений"
          title="Жизнь после ампутации — это спорт, а не карантин"
          subtitle="Волейбол сидя, зал, бассейн, велосипед, эндуро и Эльбрус — ампутация не помешала ни одному из этих увлечений."
        />

        <StaggerGroup className="mt-14 grid gap-8 sm:grid-cols-2">
          {SPORT_ITEMS.map((item) => {
            const image = IMAGES[item.image as keyof typeof IMAGES];
            return (
              <motion.div key={item.id} variants={staggerItem} className="group">
                <PhotoFrame image={image} frame="landscape" />
                <h3 className="mt-5 text-xl uppercase leading-snug text-ink">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-stone">{item.text}</p>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gold transition-colors hover:text-ink"
                  >
                    {item.link.label} →
                  </a>
                )}
              </motion.div>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
