import Container from "./ui/Container";
import PhotoFrame from "./ui/PhotoFrame";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import StaggerGroup, { staggerItem } from "./ui/StaggerGroup";
import { motion } from "framer-motion";
import { QUALITATIVE_RESULTS, STATS } from "../data/profile";
import { IMAGES } from "../data/images";
import { useCountUp } from "../hooks/useCountUp";

function StatCard({ stat }: { stat: (typeof STATS)[number] }) {
  const { ref, value } = useCountUp(stat.numeric ?? 0);

  return (
    <motion.div variants={staggerItem} className="border-t border-border pt-6">
      <p className="font-serif text-3xl text-ink sm:text-4xl">
        {stat.numeric ? (
          <>
            <span ref={ref}>{value.toLocaleString("ru-RU")}</span>
            {stat.suffix}
          </>
        ) : (
          stat.value
        )}
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wide text-bronze">{stat.label}</p>
      <p className="mt-3 text-balance leading-relaxed text-stone">{stat.description}</p>
    </motion.div>
  );
}

export default function Results() {
  return (
    <section id="results" className="bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Результаты"
          title="Не «занимался», а сделал, внедрил, изменил"
          subtitle="Конкретные показатели и системные решения — за время работы Уполномоченным по защите прав предпринимателей."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </StaggerGroup>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div>
            <Reveal>
              <h3 className="font-serif text-2xl text-ink">Что ещё изменилось</h3>
            </Reveal>
            <ul className="mt-6 flex flex-col gap-4">
              {QUALITATIVE_RESULTS.map((res, i) => (
                <Reveal key={res} delay={Math.min(i * 0.04, 0.24)}>
                  <li className="flex gap-3 border-b border-border pb-4 text-stone">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" aria-hidden="true" />
                    <span className="leading-relaxed">{res}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal className="hidden lg:block">
            <PhotoFrame image={IMAGES.results} frame="landscape" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
