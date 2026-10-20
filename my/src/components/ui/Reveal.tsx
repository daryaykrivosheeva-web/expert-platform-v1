"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOut } from "@/lib/motion";

export function Reveal({
  children,
  delay = 0,
  className,
  distance = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: reduceMotion ? 0 : delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
