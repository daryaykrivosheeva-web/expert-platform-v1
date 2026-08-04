import { Container } from "@/components/ui/Container";
import type { LegalDocument } from "@/lib/legal-content";

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <main className="py-32 sm:py-40">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {document.title}
        </h1>
        <p className="mt-3 text-sm text-muted">{document.updatedAtLabel}</p>

        <div className="mt-12 space-y-10">
          {document.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-heading text-lg font-semibold text-ink">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
