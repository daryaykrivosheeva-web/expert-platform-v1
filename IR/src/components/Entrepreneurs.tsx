import Container from "./ui/Container";
import PhotoFrame from "./ui/PhotoFrame";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import StaggerGroup, { staggerItem } from "./ui/StaggerGroup";
import { motion } from "framer-motion";
import { ENTREPRENEURS } from "../data/profile";
import { IMAGES } from "../data/images";

export default function Entrepreneurs() {
  return (
    <section id="entrepreneurs" className="bg-charcoal py-24 text-on-dark sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Работа с предпринимателями" title={ENTREPRENEURS.title} tone="dark" />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-balance leading-relaxed text-on-dark-muted">{ENTREPRENEURS.intro}</p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="hidden lg:block">
            <PhotoFrame image={IMAGES.digital} frame="landscape" />
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {ENTREPRENEURS.steps.map((step, i) => (
            <motion.div key={step.title} variants={staggerItem} className="border-t border-white/15 pt-5">
              <span className="font-serif text-sm text-bronze-soft">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-serif text-lg text-on-dark">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">{step.description}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
