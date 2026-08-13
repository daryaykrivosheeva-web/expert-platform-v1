import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { pricing, price, buyUrl } from "@/content/site-content";

export function Pricing() {
  return (
    <section id="price" className="py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-lg rounded-3xl border border-border bg-card p-8 text-center shadow-card sm:p-12">
          <span className="mb-3 inline-block rounded-full bg-accent-soft px-3.5 py-1.5 text-[13px] font-semibold uppercase tracking-wide text-accent-dark">
            {pricing.eyebrow}
          </span>
          <div className="text-5xl font-extrabold tracking-tight text-accent-dark sm:text-6xl">
            {price}
          </div>
          <p className="mt-3 mb-8 text-[15px] text-ink-muted">{pricing.note}</p>

          <ul className="mb-9 space-y-3.5 text-left">
            {pricing.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15.5px] text-ink">
                <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <Button href={buyUrl} block className="buy-button">
            Купить за {price}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
