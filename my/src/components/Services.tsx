import { Check } from "lucide-react";
import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Services() {
  const { services } = siteConfig;
  if (services.items.length === 0) return null;

  return (
    <section id="services" className="py-20 sm:py-28">
      <Container>
        <SectionHeading heading={services.heading} subheading={services.subheading} />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1",
                  item.highlighted
                    ? "border-obsidian bg-obsidian text-concrete shadow-lift hover:shadow-[0_28px_70px_-20px_rgba(0,0,0,0.5)]"
                    : "border-charcoal bg-concrete shadow-card hover:border-ink hover:shadow-lift"
                )}
              >
                {item.highlighted && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-volt px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-ink">
                    Популярный выбор
                  </span>
                )}

                <h3
                  className={cn(
                    "font-heading text-xl font-semibold",
                    item.highlighted ? "text-concrete" : "text-ink"
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    item.highlighted ? "text-concrete/70" : "text-steel"
                  )}
                >
                  {item.description}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-heading text-3xl font-bold">{item.price}</span>
                  {item.priceNote && (
                    <span className={cn("text-sm", item.highlighted ? "text-concrete/60" : "text-steel")}>
                      {item.priceNote}
                    </span>
                  )}
                </div>
                <p className={cn("mt-1 text-xs", item.highlighted ? "text-concrete/60" : "text-steel")}>
                  {item.duration}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          item.highlighted ? "text-volt" : "text-ink"
                        )}
                      />
                      <span className={item.highlighted ? "text-concrete/85" : "text-ink"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contacts"
                  variant={item.highlighted ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  {item.ctaText}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        {services.footnote && (
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-steel">
            {services.footnote}
          </p>
        )}
      </Container>
    </section>
  );
}
