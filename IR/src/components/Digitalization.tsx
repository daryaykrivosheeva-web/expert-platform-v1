import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import StaggerGroup, { staggerItem } from "./ui/StaggerGroup";
import { motion } from "framer-motion";
import { DIGITALIZATION } from "../data/profile";

export default function Digitalization() {
  return (
    <section id="digitalization" className="bg-paper-alt py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Цифровизация бизнеса" title={DIGITALIZATION.title} subtitle={DIGITALIZATION.intro} />

        <StaggerGroup className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {DIGITALIZATION.directions.map((d) => (
            <motion.div key={d.title} variants={staggerItem} className="bg-paper-alt p-7 sm:p-8">
              <h3 className="font-serif text-xl text-ink">{d.title}</h3>
              <p className="mt-3 text-balance leading-relaxed text-stone">{d.description}</p>
            </motion.div>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1} className="mt-8 border-l-2 border-bronze pl-5">
          <p className="text-balance leading-relaxed text-stone-muted">
            Направление находится в начале пути — раздел будет пополняться реальными кейсами по мере их появления.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
