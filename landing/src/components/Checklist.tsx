import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { checklistItems, checklistResults } from "../data/checklist";

const toneStyles = {
  green: {
    bg: "bg-[#E9F1E6]",
    border: "border-[#CBDFC6]",
    text: "text-[#3F5D3F]",
    dot: "bg-[#6E9A63]",
  },
  yellow: {
    bg: "bg-[#F6EFDF]",
    border: "border-[#E8D8B3]",
    text: "text-[#8A6A2E]",
    dot: "bg-[#C89B4A]",
  },
  red: {
    bg: "bg-[#F3E6E3]",
    border: "border-[#E3C6BF]",
    text: "text-[#8A4C3F]",
    dot: "bg-[#B8735F]",
  },
} as const;

export default function Checklist() {
  const [checked, setChecked] = useState<boolean[]>(() => Array(checklistItems.length).fill(false));
  const [touched, setTouched] = useState(false);

  const count = useMemo(() => checked.filter(Boolean).length, [checked]);
  const result = useMemo(
    () => checklistResults.find((r) => count >= r.min && count <= r.max),
    [count],
  );

  function toggle(index: number) {
    setTouched(true);
    setChecked((prev) => prev.map((v, i) => (i === index ? !v : v)));
  }

  const tone = result ? toneStyles[result.tone] : null;

  return (
    <section id="checklist" className="bg-lavender/40 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Самопроверка"
          title="Проверьте себя"
          subtitle="Насколько вы готовы к работе онлайн? Отметьте то, что у вас уже есть."
          align="center"
          className="mb-14 sm:mb-16"
        />

        <div className="mx-auto max-w-2xl">
          <Reveal>
            <ul className="space-y-3">
              {checklistItems.map((item, i) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-pressed={checked[i]}
                    className={`flex w-full items-start gap-4 rounded-2xl border px-5 py-4 text-left transition-colors duration-200 ${
                      checked[i]
                        ? "border-plum/30 bg-white"
                        : "border-ink/10 bg-white/50 hover:border-plum/20 hover:bg-white"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-200 ${
                        checked[i] ? "border-plum bg-plum" : "border-ink/25 bg-transparent"
                      }`}
                    >
                      <AnimatePresence>
                        {checked[i] && (
                          <motion.svg
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            viewBox="0 0 16 16"
                            className="h-3.5 w-3.5"
                            fill="none"
                          >
                            <path
                              d="M3 8.5L6.2 11.5L13 4.5"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </motion.svg>
                        )}
                      </AnimatePresence>
                    </span>
                    <span
                      className={`text-[15px] leading-snug sm:text-base ${
                        checked[i] ? "text-ink" : "text-ink/75"
                      }`}
                    >
                      {item}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <div className="flex items-center justify-between text-sm text-ink/50">
              <span>Отмечено пунктов</span>
              <span className="font-semibold text-ink">{count} / {checklistItems.length}</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white">
              <motion.div
                className="h-full bg-plum"
                animate={{ width: `${(count / checklistItems.length) * 100}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </Reveal>

          <div className="mt-6 min-h-[104px]">
            <AnimatePresence mode="wait">
              {touched && result && tone ? (
                <motion.div
                  key={result.tone}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className={`rounded-2xl border ${tone.border} ${tone.bg} px-6 py-5`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${tone.dot}`} />
                    <div>
                      <p className={`font-semibold ${tone.text}`}>{result.title}</p>
                      {result.detail && (
                        <p className={`mt-1 text-sm leading-relaxed ${tone.text} opacity-80`}>
                          {result.detail}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="px-1 text-sm text-ink/40"
                >
                  Отметьте пункты — здесь появится результат.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
