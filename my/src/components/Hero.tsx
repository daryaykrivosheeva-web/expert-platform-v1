"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MouseEvent } from "react";
import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { usePointerFine, easeOut } from "@/lib/motion";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

/**
 * Each word rises out of its own clipped mask — reads as "the headline
 * arrives", not just fades in.
 *
 * The element tree is identical regardless of reduced motion (only the
 * `initial`/transition values differ, same as Reveal.tsx) — branching the
 * tree shape itself on a client-only media query is what causes React
 * hydration to fail, since the server can never know the visitor's OS-level
 * motion preference ahead of time.
 */
function RevealHeadline({ text, reduceMotion }: { text: string; reduceMotion: boolean }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden pb-1">
            <motion.span
              className="inline-block"
              initial={reduceMotion ? false : undefined}
              variants={{
                hidden: { y: "110%" },
                show: { y: "0%", transition: { duration: 0.9, ease: easeOut } },
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

function HeroPhoto({ src, name }: { src?: string; name: string }) {
  const reduceMotion = useReducedMotion();
  const pointerFine = usePointerFine();
  const tiltEnabled = pointerFine && !reduceMotion;

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springX = useSpring(px, { stiffness: 150, damping: 20 });
  const springY = useSpring(py, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [0, 1], [6, -6]);
  const rotateY = useTransform(springX, [0, 1], [-6, 6]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!tiltEnabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
    >
      <motion.div
        style={tiltEnabled ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-charcoal shadow-lift"
      >
        <Avatar src={src} name={name} className="h-full w-full rounded-3xl" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-ink/10"
        />
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const { hero, expert } = siteConfig;
  const reduceMotion = useReducedMotion();
  // With reduced motion, start already in the "show" state — content is
  // simply there, with no stagger delay to sit through.
  const initialState = reduceMotion ? "show" : "hidden";

  return (
    <section id="hero" className="relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48">
      <Container>
        <motion.div
          variants={containerVariants}
          initial={initialState}
          animate="show"
          className="grid items-center gap-16 lg:grid-cols-2"
        >
          <div>
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full bg-volt px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-ink"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {hero.eyebrow}
            </motion.span>

            <h1 className="mt-6 font-heading text-4xl font-black leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-6xl lg:tracking-[-0.03em]">
              <motion.span variants={itemVariants} className="block">
                <RevealHeadline text={hero.headline} reduceMotion={!!reduceMotion} />
              </motion.span>
              <motion.span
                variants={itemVariants}
                className="block underline decoration-volt decoration-[6px] underline-offset-8"
              >
                <RevealHeadline text={hero.highlight} reduceMotion={!!reduceMotion} />
              </motion.span>
            </h1>

            <motion.p variants={itemVariants} className="mt-6 max-w-xl text-lg leading-relaxed text-steel">
              {hero.subheadline}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#contacts" className="group">
                {hero.ctaPrimaryText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href={hero.ctaSecondaryHref ?? "#services"} variant="secondary">
                {hero.ctaSecondaryText}
              </Button>
            </motion.div>

            {hero.stats.length > 0 && (
              <motion.dl
                variants={itemVariants}
                className="mt-14 grid grid-cols-3 gap-6 border-t border-charcoal pt-8"
              >
                {hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-heading text-2xl font-bold text-ink sm:text-3xl">
                      {stat.value}
                    </dd>
                    <p className="mt-1 text-sm text-steel">{stat.label}</p>
                  </div>
                ))}
              </motion.dl>
            )}
          </div>

          <HeroPhoto src={hero.image || expert.photo} name={expert.name} />
        </motion.div>
      </Container>
    </section>
  );
}
