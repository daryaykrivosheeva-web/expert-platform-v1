import { motion } from "framer-motion";
import Container from "./ui/Container";
import PhotoFrame from "./ui/PhotoFrame";
import CTAButton from "./ui/CTAButton";
import { HERO, SITE } from "../data/profile";
import { IMAGES } from "../data/images";

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-paper pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze sm:text-sm"
          >
            {HERO.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-[clamp(2.5rem,6vw+1rem,5.5rem)] font-semibold leading-[1.02] text-ink"
          >
            {SITE.name}
          </motion.h1>

          <motion.p variants={item} className="mt-5 text-sm font-medium uppercase tracking-[0.15em] text-stone-muted sm:text-base">
            {SITE.descriptor}
          </motion.p>

          <motion.p variants={item} className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-stone sm:text-xl">
            {HERO.lead}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton href="#about" variant="solid">
              Узнать больше
            </CTAButton>
            <CTAButton href="#contacts" variant="outline">
              Связаться
            </CTAButton>
          </motion.div>
        </motion.div>

        <div className="relative">
          <PhotoFrame image={IMAGES.hero} priority frame="square" className="lg:aspect-[4/5]" />
        </div>
      </Container>
    </section>
  );
}
