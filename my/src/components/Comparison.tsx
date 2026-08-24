import { Check, ArrowRight } from "lucide-react";
import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Comparison() {
  const { comparison } = siteConfig;
  if (!comparison) return null;

  return (
    <section id="comparison" className="py-20 sm:py-28">
      <Container>
        <SectionHeading heading={comparison.heading} subheading={comparison.subheading} />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-card border border-cloud bg-snow p-7 sm:p-8">
              <h3 className="font-heading text-subheading font-semibold text-obsidian">
                {comparison.ownSiteLabel}
              </h3>
              <ul className="mt-6 space-y-5">
                {comparison.rows.map((row) => (
                  <li key={row.label} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-obsidian" />
                    <span>
                      <span className="block text-caption uppercase text-fog">{row.label}</span>
                      <span className="text-body text-graphite">{row.ownSite}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-card bg-graphite p-7 text-snow sm:p-8">
              <h3 className="font-heading text-subheading font-semibold text-snow">
                {comparison.builderLabel}
              </h3>
              <ul className="mt-6 space-y-5">
                {comparison.rows.map((row) => (
                  <li key={row.label} className="flex items-start gap-3">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-ash" />
                    <span>
                      <span className="block text-caption uppercase text-fog">{row.label}</span>
                      <span className="text-body text-mist">{row.builder}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {comparison.footnote && (
          <p className="mx-auto mt-8 max-w-2xl text-center text-body text-steel">
            {comparison.footnote}
          </p>
        )}
      </Container>
    </section>
  );
}
