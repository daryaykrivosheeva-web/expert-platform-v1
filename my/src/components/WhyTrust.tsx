import { cn } from "@/lib/utils";
import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { getIcon } from "@/lib/icons";

const gridColsByCount: Record<number, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-3",
};

export function WhyTrust() {
  const { whyTrust } = siteConfig;
  if (!whyTrust) return null;

  return (
    <section id="why-trust" className="py-20 sm:py-28">
      <Container>
        <SectionHeading heading={whyTrust.heading} subheading={whyTrust.subheading} />

        <div
          className={cn(
            "mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2",
            gridColsByCount[whyTrust.items.length] ?? "lg:grid-cols-4"
          )}
        >
          {whyTrust.items.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="h-full rounded-card border border-cloud bg-snow p-7 transition-colors duration-300 hover:border-ash">
                  <span className="flex h-10 w-10 items-center justify-center rounded-icon bg-paper text-graphite">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-heading text-subheading font-semibold text-obsidian">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-body text-steel">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
