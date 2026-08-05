import { Check, Minus } from "lucide-react";
import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Comparison() {
  const { comparison } = siteConfig;
  if (!comparison) return null;

  return (
    <section id="comparison" className="bg-ash-gray py-20 sm:py-28">
      <Container>
        <SectionHeading heading={comparison.heading} subheading={comparison.subheading} />

        <Reveal className="mt-14">
          <div className="overflow-x-auto rounded-3xl border border-charcoal bg-concrete">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-charcoal">
                  <th className="w-1/3 px-6 py-5 text-left font-heading text-sm font-semibold text-steel sm:px-8">
                    &nbsp;
                  </th>
                  <th className="px-4 py-5 text-left font-heading text-base font-semibold text-ink">
                    {comparison.ownSiteLabel}
                  </th>
                  <th className="px-4 py-5 text-left font-heading text-base font-semibold text-steel sm:pr-8">
                    {comparison.builderLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i < comparison.rows.length - 1 ? "border-b border-charcoal" : ""}
                  >
                    <td className="px-6 py-5 text-sm font-medium text-steel sm:px-8">
                      {row.label}
                    </td>
                    <td className="px-4 py-5 text-sm text-ink">
                      <span className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-ink" />
                        {row.ownSite}
                      </span>
                    </td>
                    <td className="px-4 py-5 text-sm text-steel sm:pr-8">
                      <span className="flex items-start gap-2">
                        <Minus className="mt-0.5 h-4 w-4 shrink-0 text-steel" />
                        {row.builder}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {comparison.footnote && (
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-steel">
            {comparison.footnote}
          </p>
        )}
      </Container>
    </section>
  );
}
