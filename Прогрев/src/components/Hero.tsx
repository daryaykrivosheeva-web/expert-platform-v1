"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { easeOut } from "@/lib/motion";
import { hero, buyUrl, price } from "@/content/site-content";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const initialState = reduceMotion ? "show" : "hidden";

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-6 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-soft/70 blur-3xl motion-safe:animate-float-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-40 h-56 w-56 rounded-full bg-accent-soft/50 blur-3xl motion-safe:animate-float"
      />

      <Container>
        <motion.div
          variants={containerVariants}
          initial={initialState}
          animate="show"
          className="relative mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={itemVariants}
            className="mb-5 inline-block rounded-full bg-accent-soft px-3.5 py-1.5 text-[13px] font-semibold uppercase tracking-wide text-accent-dark"
          >
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-[32px] font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-xl text-lg text-ink-muted"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-9 flex flex-col items-center">
            <Button href={buyUrl} id="buy-button" className="buy-button">
              Купить за {price}
            </Button>
            <p className="mt-3 text-sm text-ink-muted">{hero.ctaNote}</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {hero.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-accent-soft px-4 py-2 text-sm text-accent-dark"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
