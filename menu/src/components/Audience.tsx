import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { audienceFor, audienceNotFor } from "../data/audience";

export default function Audience() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading title="Для кого это" align="center" className="mb-10 sm:mb-14" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-sage/25 bg-white p-7">
              <p className="mb-4 text-sm font-semibold text-sage">Подойдёт</p>
              <ul className="space-y-3">
                {audienceFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/80">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/15 text-xs text-sage">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="h-full rounded-3xl border border-ink/10 bg-white p-7">
              <p className="mb-4 text-sm font-semibold text-ink/60">Не подойдёт</p>
              <ul className="space-y-3">
                {audienceNotFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/70">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink/10 text-xs text-ink/50">
                      –
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
