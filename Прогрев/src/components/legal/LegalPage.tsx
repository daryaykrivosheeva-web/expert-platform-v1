import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export function LegalPage({
  title,
  updatedAtLabel,
  sections,
}: {
  title: string;
  updatedAtLabel: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Header />
      <main className="py-10 sm:py-16">
        <Container className="max-w-2xl">
          <Link
            href="/"
            className="mb-7 inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-accent-dark"
          >
            ← Вернуться на главную
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h1>
          <p className="mt-4 mb-10 text-sm text-ink-muted">{updatedAtLabel}</p>

          {sections.map((section) => (
            <div key={section.heading} className="mt-9 first:mt-0">
              <h2 className="text-xl font-bold text-ink">{section.heading}</h2>
              <div className="mt-3 space-y-3 text-[16px] leading-relaxed text-ink">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </main>
      <Footer />
    </>
  );
}
