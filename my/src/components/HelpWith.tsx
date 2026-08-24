import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { getIcon } from "@/lib/icons";

export function HelpWith() {
  const { helpWith } = siteConfig;
  if (!helpWith) return null;

  return (
    <section id="help-with" className="py-20 sm:py-28">
      <Container>
        <SectionHeading heading={helpWith.heading} subheading={helpWith.subheading} />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {helpWith.items.map((item, i) => {
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
