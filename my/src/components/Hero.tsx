"use client";

import { ArrowRight } from "lucide-react";
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
        className="relative aspect-[4/5] w-full overflow-hidden rounded-card border border-cloud"
      >
        <Avatar src={src} name={name} className="h-full w-full" />
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
    <section id="hero" className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
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
              className="inline-flex items-center gap-2 rounded-badge border border-cloud px-2 py-1 text-caption font-medium uppercase text-graphite"
            >
              {hero.eyebrow}
            </motion.span>

            <h1 className="mt-6 font-heading text-heading-lg font-semibold text-obsidian sm:text-display">
              <motion.span variants={itemVariants} className="block">
                <RevealHeadline text={hero.headline} reduceMotion={!!reduceMotion} />
              </motion.span>
              <motion.span variants={itemVariants} className="block font-bold">
                <RevealHeadline text={hero.highlight} reduceMotion={!!reduceMotion} />
              </motion.span>
            </h1>

            <motion.p variants={itemVariants} className="mt-6 max-w-xl text-body-lg text-steel">
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
                className="mt-14 grid grid-cols-3 gap-6 border-t border-cloud pt-8"
              >
                {hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-heading text-heading-sm font-semibold text-obsidian">
                      {stat.value}
                    </dd>
                    <p className="mt-1 text-body text-steel">{stat.label}</p>
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
