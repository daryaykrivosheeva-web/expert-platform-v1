import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import StaggerGroup, { staggerItem } from "./ui/StaggerGroup";
import CTAButton from "./ui/CTAButton";
import { motion } from "framer-motion";
import { HOWTO_STEPS, SITE } from "../data/profile";

export default function HowToGet() {
  return (
    <section id="howto" className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Порядок действий"
          title="Как бесплатно получить улучшенный протез от государства"
          subtitle="Коротко — путь, который я прошёл сам. В подробностях всё разберём на созвоне."
        />

        <StaggerGroup className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {HOWTO_STEPS.map((s) => (
            <motion.div key={s.step} variants={staggerItem} className="border-t border-gold/50 pt-6">
              <span className="font-display text-3xl text-gold">{s.step}</span>
              <h3 className="mt-4 text-lg uppercase leading-snug text-ink">{s.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-stone">{s.text}</p>
            </motion.div>
          ))}
        </StaggerGroup>

        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <CTAButton href={SITE.phoneHref} variant="solid">
            Получить консультацию
          </CTAButton>
          <p className="text-base text-stone">Бесплатно, по телефону или в мессенджере — из любого региона России.</p>
        </div>
      </Container>
    </section>
  );
}
