import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import CTAButton from "./ui/CTAButton";
import Eyebrow from "./ui/Eyebrow";
import { BOOK, SITE } from "../data/profile";

export default function Book() {
  return (
    <section id="book" className="bg-paper py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 border border-border bg-paper-alt p-8 sm:p-12 lg:grid-cols-[0.7fr_1fr] lg:gap-16 lg:p-16">
          <div>
            <Reveal>
              <Eyebrow>Профессиональные материалы</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance font-serif text-[30px] leading-[1.15] text-ink sm:text-[38px]">
                {BOOK.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-balance text-lg leading-relaxed text-stone">{BOOK.subtitle}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-stone-muted">{BOOK.date}</p>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center gap-5">
            {BOOK.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className="text-balance leading-relaxed text-stone">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <CTAButton href={SITE.bookUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="mt-2 w-fit">
                {BOOK.cta}
              </CTAButton>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
