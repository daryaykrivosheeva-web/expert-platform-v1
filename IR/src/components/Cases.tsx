import { useState } from "react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { CASES, type CaseStudy } from "../data/profile";

const FIELDS: { key: keyof CaseStudy; label: string }[] = [
  { key: "problem", label: "Проблема" },
  { key: "task", label: "Задача" },
  { key: "actions", label: "Действия" },
  { key: "solution", label: "Решение" },
  { key: "result", label: "Результат" },
  { key: "scale", label: "Масштаб" },
];

function CaseCard({ item, index }: { item: CaseStudy; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `case-panel-${index}`;

  return (
    <Reveal delay={Math.min(index * 0.05, 0.25)} className="h-full">
      <article className="flex h-full flex-col border border-border bg-paper p-7 sm:p-8">
        <span className="text-sm font-medium uppercase tracking-wide text-bronze">{item.year}</span>
        <h3 className="mt-3 font-serif text-xl leading-snug text-ink sm:text-2xl">{item.title}</h3>
        <p className="mt-4 flex-1 text-balance leading-relaxed text-stone">{item.result}</p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-3 inline-flex w-fit cursor-pointer items-center gap-2 py-3 text-sm font-medium text-ink underline decoration-border underline-offset-4 transition-colors hover:text-bronze hover:decoration-bronze"
        >
          {open ? "Свернуть кейс" : "Подробнее о кейсе"}
        </button>

        {open && (
          <div id={panelId} className="mt-6 flex flex-col gap-4 border-t border-border pt-6">
            {FIELDS.filter((f) => f.key !== "result").map((f) => (
              <div key={f.key}>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-muted">{f.label}</p>
                <p className="mt-1.5 text-balance leading-relaxed text-stone">{item[f.key]}</p>
              </div>
            ))}
          </div>
        )}
      </article>
    </Reveal>
  );
}

export default function Cases() {
  return (
    <section id="cases" className="bg-paper-alt py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Проекты"
          title="Восемь решений с проблемой, действием и измеримым результатом"
          subtitle="Каждый кейс — реальная ситуация из практики: что было, что сделано и что изменилось."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((item, i) => (
            <CaseCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
