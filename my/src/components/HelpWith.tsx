import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { getIcon } from "@/lib/icons";

export function HelpWith() {
  const { helpWith } = siteConfig;
  if (!helpWith) return null;

  return (
    <section id="help-with" className="bg-ash-gray py-20 sm:py-28">
      <Container>
        <SectionHeading heading={helpWith.heading} subheading={helpWith.subheading} />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {helpWith.items.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="group h-full rounded-3xl border border-charcoal bg-concrete p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-obsidian text-volt transition-colors group-hover:bg-volt group-hover:text-ink">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-heading text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">
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
