import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { comparisonRows } from "../data/comparison";

export default function Comparison() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading title="Без меню / С меню" align="center" className="mb-10 sm:mb-14" />

        <div className="mx-auto grid max-w-3xl grid-cols-1 overflow-hidden rounded-3xl border border-ink/10 sm:grid-cols-2">
          <div className="bg-white p-6 sm:p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
              Без меню
            </p>
            <ul className="space-y-4">
              {comparisonRows.map((row) => (
                <li key={row.without} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/60">
                  <span className="mt-1 text-ink/30" aria-hidden="true">
                    –
                  </span>
                  {row.without}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-sage/10 p-6 sm:p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-sage">
              С меню
            </p>
            <ul className="space-y-4">
              {comparisonRows.map((row, i) => (
                <Reveal key={row.with} delay={i * 0.05}>
                  <li className="flex items-start gap-3 text-[15px] leading-relaxed text-ink">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/20 text-xs text-sage">
                      ✓
                    </span>
                    {row.with}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
