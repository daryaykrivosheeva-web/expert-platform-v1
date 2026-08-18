import { motion } from "framer-motion";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pb-28">
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-lavender/70 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow>Даша Радченко</Eyebrow>

            <h1 className="mt-6 text-[42px] leading-[1.06] sm:text-[56px] lg:text-[64px] text-ink">
              Как выйти
              <br />в онлайн
            </h1>

            <p className="mt-6 font-serif text-xl italic text-plum sm:text-2xl">
              5 инструментов, которые нужны тем, кто работает на себя
            </p>

            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
              Помогаю тем, кто работает на себя, собирать простую систему для работы и продаж в
              интернете.
            </p>

            <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-plum/20 bg-lavender/60 px-4 py-2.5 text-sm font-medium text-plum">
              <span aria-hidden="true">✦</span>
              Не нужно становиться маркетологом
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div
              className="absolute -bottom-6 -left-6 h-full w-full rounded-[2rem] bg-sand/80 sm:-bottom-8 sm:-left-8"
              aria-hidden="true"
            />
            <img
              src="/images/hero-portrait.jpg"
              alt="Даша Радченко"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_30px_60px_-24px_rgba(37,33,39,0.35)]"
            />
          </motion.div>
        </div>

        <motion.a
          href="#intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex flex-col items-center gap-2 text-sm font-medium text-ink/50 transition-colors hover:text-plum sm:mt-24"
        >
          5 инструментов
          <span aria-hidden="true">↓</span>
        </motion.a>
      </Container>
    </section>
  );
}
