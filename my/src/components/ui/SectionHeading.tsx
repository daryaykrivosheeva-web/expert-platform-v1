"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOut } from "@/lib/motion";

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "center",
  className,
}: {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "center" | "left";
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: easeOut }}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{subheading}</p>
      )}
    </motion.div>
  );
}
