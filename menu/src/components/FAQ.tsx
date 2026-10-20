import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { faqItems } from "../data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Вопросы" title="Частые вопросы" align="center" className="mb-10 sm:mb-14" />

        <div className="mx-auto max-w-2xl divide-y divide-ink/10 border-t border-b border-ink/10">
          {faqItems.map((item, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={item.question} delay={i * 0.03}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[15px] font-medium text-ink sm:text-lg">{item.question}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sage/30 text-sage transition-transform duration-300 ${
                        open ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-3 pb-6 pr-10">
                          {item.paragraphs.map((p, idx) => (
                            <p key={idx} className="text-[15px] leading-relaxed text-ink/70">
                              {p}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
