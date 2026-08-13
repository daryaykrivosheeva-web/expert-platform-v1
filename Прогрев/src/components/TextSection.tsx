import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function TextSection({
  eyebrow,
  title,
  paragraphs,
  alt = false,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  alt?: boolean;
}) {
  return (
    <section className={cn("py-16 sm:py-20", alt && "bg-bg-soft")}>
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-accent-soft px-3.5 py-1.5 text-[13px] font-semibold uppercase tracking-wide text-accent-dark">
            {eyebrow}
          </span>
          <h2 className="text-[26px] font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
          <div className="mt-6 space-y-4 text-left text-[17px] leading-relaxed text-ink-muted">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
