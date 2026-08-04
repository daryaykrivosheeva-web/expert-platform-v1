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
          <div className="flex flex-wrap items-center justify-center gap-4 rounded-3xl border border-border bg-surface p-8 sm:p-10">
            {addOns.items.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <span
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-ink"
                >
                  <Icon className="h-4 w-4 text-primary" />
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
