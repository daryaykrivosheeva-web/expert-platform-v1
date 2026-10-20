import type { ReactNode } from "react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

export default function QuoteBlock({
  quote,
  supporting,
  tone = "lavender",
}: {
  quote: ReactNode;
  supporting?: ReactNode;
  tone?: "lavender" | "bg";
}) {
  return (
    <section className={tone === "lavender" ? "bg-lavender/60" : "bg-bg"}>
      <Container className="py-20 sm:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="font-serif text-6xl leading-none text-gold/70 sm:text-7xl" aria-hidden="true">
            “
          </span>
          <blockquote className="mt-2 font-quote text-[28px] italic leading-[1.3] text-plum sm:text-[36px] lg:text-[42px]">
            {quote}
          </blockquote>
          {supporting && (
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg not-italic">
              {supporting}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
