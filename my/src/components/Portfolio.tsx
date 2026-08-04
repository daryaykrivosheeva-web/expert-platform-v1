"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { PortfolioItem } from "@/types/config";

function PortfolioCard({
  item,
  Icon,
  delay,
}: {
  item: PortfolioItem;
  Icon: LucideIcon;
  delay: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={delay}>
      <div className="flex h-full flex-col rounded-3xl border border-border bg-surface p-8">
        {item.image && (
          <div className="relative -mx-8 -mt-8 mb-6 aspect-[16/10] overflow-hidden rounded-t-3xl">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        )}
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </span>
          <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted">
            {item.category}
          </span>
        </div>

        <h3 className="mt-6 font-heading text-lg font-semibold text-ink">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{item.problem}</p>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-primary"
        >
          Подробнее
          <ChevronDown
            className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")}
          />
        </button>

        <div
          className={cn(
            "grid overflow-hidden transition-all duration-300",
            open ? "grid-rows-[1fr] pt-4 opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="min-h-0 space-y-3 border-t border-border pt-4 text-sm leading-relaxed">
            <p className="text-ink">
              <span className="font-semibold">Что сделано: </span>
              {item.description}
            </p>
            <p className="text-muted">
              <span className="font-semibold text-ink">Результат: </span>
              {item.result}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Portfolio() {
  const { portfolio } = siteConfig;
  if (!portfolio) return null;

  return (
    <section id="portfolio" className="py-20 sm:py-28">
      <Container>
        <SectionHeading heading={portfolio.heading} subheading={portfolio.subheading} />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {portfolio.items.map((item, i) => (
            <PortfolioCard
              key={item.title}
              item={item}
              Icon={getIcon(item.icon)}
              delay={(i % 4) * 0.05}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
