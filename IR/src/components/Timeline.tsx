import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./ui/Container";
import PhotoFrame from "./ui/PhotoFrame";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { TIMELINE } from "../data/profile";
import { IMAGES } from "../data/images";

export default function Timeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="timeline" className="bg-paper-alt py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Профессиональный путь"
          title="От школьной подработки до государственной службы"
          subtitle="Каждый этап — с реальным периодом, ролью и результатом. Нажмите на пункт, чтобы раскрыть подробности."
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.6fr_1fr]">
          <ol className="relative flex flex-col" aria-label="Хронология профессионального пути">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[9px]" aria-hidden="true" />

            {TIMELINE.map((entry, i) => {
              const isOpen = openIndex === i;
              const panelId = `timeline-panel-${i}`;

              return (
                <Reveal key={entry.period + entry.title} delay={Math.min(i * 0.03, 0.3)}>
                  <li className="relative pb-8 pl-8 sm:pl-10 last:pb-0">
                    <span
                      className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 sm:h-[18px] sm:w-[18px] ${
                        isOpen ? "border-bronze bg-bronze" : "border-bronze bg-paper-alt"
                      } transition-colors duration-300`}
                      aria-hidden="true"
                    />

                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="group -my-2.5 flex w-full flex-col items-start gap-1 py-2.5 text-left cursor-pointer sm:flex-row sm:items-baseline sm:gap-4"
                    >
                      <span className="shrink-0 font-medium text-sm uppercase tracking-wide text-bronze sm:w-36">
                        {entry.period}
                      </span>
                      <span className="font-serif text-lg text-ink transition-colors group-hover:text-bronze sm:text-xl">
                        {entry.title}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (entry.org || entry.description) && (
                        <motion.div
                          id={panelId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden sm:pl-[9.5rem]"
                        >
                          <div className="pt-3">
                            {entry.org && <p className="text-sm font-medium text-stone-muted">{entry.org}</p>}
                            {entry.description && (
                              <p className="mt-2 max-w-xl text-balance leading-relaxed text-stone">
                                {entry.description}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                </Reveal>
              );
            })}
          </ol>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <Reveal>
                <PhotoFrame image={IMAGES.timeline} frame="portrait" />
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
