import { Check } from "lucide-react";
import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Services() {
  const { services } = siteConfig;

  return (
    <section id="services" className="py-20 sm:py-28">
      <Container>
        <SectionHeading heading={services.heading} subheading={services.subheading} />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-3xl border p-8",
                  item.highlighted
                    ? "border-primary bg-ink text-white shadow-lift"
                    : "border-border bg-background shadow-card"
                )}
              >
                {item.highlighted && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    Популярный выбор
                  </span>
                )}

                <h3
                  className={cn(
                    "font-heading text-xl font-semibold",
                    item.highlighted ? "text-white" : "text-ink"
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    item.highlighted ? "text-white/70" : "text-muted"
                  )}
                >
                  {item.description}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-heading text-3xl font-bold">{item.price}</span>
                  {item.priceNote && (
                    <span className={cn("text-sm", item.highlighted ? "text-white/60" : "text-muted")}>
                      {item.priceNote}
                    </span>
                  )}
                </div>
                <p className={cn("mt-1 text-xs", item.highlighted ? "text-white/60" : "text-muted")}>
                  {item.duration}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          item.highlighted ? "text-secondary" : "text-primary"
                        )}
                      />
                      <span className={item.highlighted ? "text-white/85" : "text-ink"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contacts"
                  variant={item.highlighted ? "primary" : "secondary"}
                  className={cn("mt-8 w-full", item.highlighted && "!bg-white !text-ink hover:!bg-white/90")}
                >
                  {item.ctaText}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        {services.footnote && (
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted">
            {services.footnote}
          </p>
        )}
      </Container>
    </section>
  );
}
