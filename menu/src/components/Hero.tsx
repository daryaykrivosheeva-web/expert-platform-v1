import Container from "./ui/Container";
import CTAButton from "./ui/CTAButton";
import Eyebrow from "./ui/Eyebrow";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-16 sm:pt-40 sm:pb-24">
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-peach/70 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />
      <Container className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left"
        >
          <Eyebrow className="justify-center lg:justify-start">Меню на 4 недели</Eyebrow>

          <h1 className="mt-5 text-[34px] leading-[1.15] text-ink sm:text-[44px] lg:text-[52px]">
            Неделя без вопроса «Что приготовить?»
          </h1>

          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-ink/70 sm:text-xl lg:mx-0">
            Меню на 4 недели со списками покупок и воскресной заготовкой. Выберите свою
            калорийность.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 lg:items-start">
            <CTAButton>Получить меню за 990 ₽</CTAButton>
            <p className="text-sm text-ink/55">
              4 недели · 4 уровня калорийности · списки покупок · подарок
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mb-6 w-full max-w-[300px] sm:mb-12 sm:max-w-md"
        >
          <img
            src="/images/01-oblozhka.png"
            alt="Обложка PDF «Меню на 4 недели, 1400 ккал»"
            className="w-full -rotate-2 rounded-xl shadow-[0_30px_60px_-24px_rgba(47,79,65,0.4)]"
            width={1050}
            height={1427}
            loading="eager"
          />
          <img
            src="/images/02-obzor-nedeli.png"
            alt="Страница обзора недели 1 из PDF-меню: таблица завтраков, обедов, перекусов и ужинов"
            className="absolute -bottom-8 -right-6 hidden w-3/5 rotate-3 rounded-xl shadow-[0_30px_60px_-20px_rgba(47,79,65,0.45)] sm:block"
            width={1050}
            height={1427}
            loading="eager"
          />
        </motion.div>
      </Container>
    </section>
  );
}
