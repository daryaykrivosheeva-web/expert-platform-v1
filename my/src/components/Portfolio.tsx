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
        className="group flex h-full flex-col overflow-hidden rounded-card border border-cloud bg-snow outline-none transition-colors duration-300 hover:border-ash focus-visible:border-ash"
      >
        {item.image ? (
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        ) : (
          <div className="flex aspect-[16/10] w-full items-center justify-center bg-paper">
            <span className="flex h-14 w-14 items-center justify-center rounded-icon bg-snow text-graphite">
              <Icon className="h-6 w-6" />
            </span>
          </div>
        )}

        <div className="flex flex-1 flex-col p-7">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-heading text-subheading font-semibold text-obsidian">{item.title}</h3>
            <span className="shrink-0 rounded-badge border border-cloud px-2 py-1 text-caption font-medium text-graphite">
              {item.category}
            </span>
          </div>
          <p className="mt-2 text-body text-steel">{item.problem}</p>

          <span className="mt-6 text-caption uppercase text-fog">
            Наведите для подробностей
          </span>

          <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-hover:pt-4 group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:pt-4 group-focus-visible:opacity-100">
            <div className="min-h-0 space-y-3 border-t border-cloud pt-4 text-body">
              <p className="text-graphite">
                <span className="font-semibold text-obsidian">Что сделано: </span>
                {item.description}
              </p>
              <p className="text-steel">
                <span className="font-semibold text-obsidian">Результат: </span>
                {item.result}
              </p>
            </div>
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
