import Image from "next/image";
import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { getIcon } from "@/lib/icons";
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
  return (
    <Reveal delay={delay}>
      <div
        tabIndex={0}
        className="group flex h-full flex-col rounded-3xl border border-charcoal bg-ash-gray p-8 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-lift focus-visible:-translate-y-1 focus-visible:border-ink focus-visible:shadow-lift"
      >
        {item.image && (
          <div className="relative -mx-8 -mt-8 mb-6 aspect-[16/10] overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        )}
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-obsidian text-volt">
            <Icon className="h-6 w-6" />
          </span>
          <span className="rounded-full border border-charcoal bg-concrete px-3 py-1 text-xs font-semibold uppercase tracking-wider text-steel">
            {item.category}
          </span>
        </div>

        <h3 className="mt-6 font-heading text-lg font-semibold text-ink">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-steel">{item.problem}</p>

        <span className="mt-6 font-mono text-[11px] uppercase tracking-wider text-steel">
          Наведите для подробностей
        </span>

        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-hover:pt-4 group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:pt-4 group-focus-visible:opacity-100">
          <div className="min-h-0 space-y-3 border-t border-charcoal pt-4 text-sm leading-relaxed">
            <p className="text-ink">
              <span className="font-semibold">Что сделано: </span>
              {item.description}
            </p>
            <p className="text-steel">
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
