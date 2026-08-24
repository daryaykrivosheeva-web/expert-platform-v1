import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { getIcon } from "@/lib/icons";

export function AddOns() {
  const { addOns } = siteConfig;
  if (!addOns) return null;

  return (
    <section id="add-ons" className="py-20 sm:py-28">
      <Container>
        <SectionHeading heading={addOns.heading} subheading={addOns.subheading} />

        <Reveal className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-4 rounded-card border border-cloud bg-snow p-8 sm:p-10">
            {addOns.items.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <span
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-pill border border-cloud bg-paper px-4 py-2.5 text-body font-medium text-graphite transition-colors duration-300 hover:border-ash"
                >
                  <Icon className="h-4 w-4 text-graphite" />
                  {item.label}
                </span>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
