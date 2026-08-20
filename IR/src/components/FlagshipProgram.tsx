import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import StaggerGroup, { staggerItem } from "./ui/StaggerGroup";
import { motion } from "framer-motion";
import { FLAGSHIP_PROGRAM } from "../data/profile";
import { useCountUp } from "../hooks/useCountUp";

function StatCard({ stat }: { stat: (typeof FLAGSHIP_PROGRAM.stats)[number] }) {
  const { ref, value } = useCountUp(stat.numeric ?? 0);

  return (
    <motion.div variants={staggerItem} className="border-t border-bronze pt-6">
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

export default function FlagshipProgram() {
  return (
    <section id="flagship" className="bg-paper-alt py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={FLAGSHIP_PROGRAM.eyebrow}
          title={FLAGSHIP_PROGRAM.title}
          subtitle={FLAGSHIP_PROGRAM.since}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <h3 className="font-serif text-xl text-ink">Цель программы</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {FLAGSHIP_PROGRAM.goals.map((goal) => (
                <li key={goal} className="flex gap-3 text-stone">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" aria-hidden="true" />
                  <span className="leading-relaxed">{goal}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.05}>
            <h3 className="font-serif text-xl text-ink">Суть программы</h3>
            <p className="mt-5 text-balance leading-relaxed text-stone">{FLAGSHIP_PROGRAM.mechanism}</p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
          {FLAGSHIP_PROGRAM.stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </StaggerGroup>

        <Reveal className="mt-16">
          <h3 className="font-serif text-xl text-ink">Три направления проактивной работы</h3>
        </Reveal>
        <StaggerGroup className="mt-6 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
          {FLAGSHIP_PROGRAM.directions.map((d) => (
            <motion.div key={d.title} variants={staggerItem} className="bg-paper p-7 sm:p-8">
              <h4 className="font-serif text-lg text-ink">{d.title}</h4>
              <p className="mt-3 text-balance leading-relaxed text-stone">{d.description}</p>
            </motion.div>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1} className="mt-10 border-l-2 border-bronze pl-5">
          <p className="text-balance leading-relaxed text-ink">{FLAGSHIP_PROGRAM.outcome}</p>
        </Reveal>
      </Container>
    </section>
  );
}
