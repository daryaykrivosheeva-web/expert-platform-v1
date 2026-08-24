import { Check, ArrowRight } from "lucide-react";
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

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-card p-7",
                  item.highlighted
                    ? "bg-graphite text-snow"
                    : "border border-cloud bg-snow"
                )}
              >
                {item.highlighted && (
                  <span className="mb-4 inline-block w-fit rounded-badge bg-ember px-2 py-1 text-caption font-medium text-snow">
                    Популярный выбор
                  </span>
                )}

                <h3
                  className={cn(
                    "font-heading text-subheading font-semibold",
                    item.highlighted ? "text-snow" : "text-obsidian"
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-body",
                    item.highlighted ? "text-mist" : "text-steel"
                  )}
                >
                  {item.description}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-heading text-heading-sm font-semibold">{item.price}</span>
                  {item.priceNote && (
                    <span className={cn("text-body", item.highlighted ? "text-ash" : "text-steel")}>
                      {item.priceNote}
                    </span>
                  )}
                </div>
                <p className={cn("mt-1 text-caption", item.highlighted ? "text-ash" : "text-fog")}>
                  {item.duration}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-body">
                      {item.highlighted ? (
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-ash" />
                      ) : (
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-obsidian" />
                      )}
                      <span className={item.highlighted ? "text-mist" : "text-graphite"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contacts"
                  variant={item.highlighted ? "ghost" : "primary"}
                  className="mt-8 w-full"
                >
                  {item.ctaText}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        {services.footnote && (
          <p className="mx-auto mt-10 max-w-2xl text-center text-body text-steel">
            {services.footnote}
          </p>
        )}
      </Container>
    </section>
  );
}
