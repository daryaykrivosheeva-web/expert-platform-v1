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
        <span className="mb-3 inline-block rounded-full bg-volt px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-ink">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-4xl font-black leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-6xl lg:tracking-[-0.03em]">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 text-lg leading-relaxed text-steel">{subheading}</p>
      )}
    </motion.div>
  );
}
