"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { tools } from "@/content/site-content";

export function Tools() {
  return (
    <section id="tools" className="bg-bg-soft py-16 sm:py-20">
      <Container>
        <Reveal className="mx-auto mb-12 max-w-xl text-center">
          <span className="mb-4 inline-block rounded-full bg-accent-soft px-3.5 py-1.5 text-[13px] font-semibold uppercase tracking-wide text-accent-dark">
            Что внутри
          </span>
          <h2 className="text-[26px] font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Пять готовых решений — не теория
          </h2>
          <p className="mt-4 text-[17px] text-ink-muted">
            Каждый инструмент закрывает свою задачу и не требует технической подготовки.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {tools.map((tool, i) => (
            <Reveal
              key={tool.title}
              delay={i * 0.06}
              className={i === 0 ? "sm:col-span-2" : undefined}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="h-full rounded-2xl border border-border bg-card p-8 shadow-card hover:shadow-card-hover"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-[15px] font-bold text-accent-dark">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-ink">{tool.title}</h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-ink-muted">
                  {tool.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
