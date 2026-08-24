import { Container } from "@/components/ui/Container";
import type { LegalDocument } from "@/lib/legal-content";

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <main className="py-32 sm:py-40">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-heading font-semibold text-obsidian">
          {document.title}
        </h1>
        <p className="mt-3 text-body text-steel">{document.updatedAtLabel}</p>

        <div className="mt-12 space-y-10">
          {document.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-heading text-body-lg font-semibold text-obsidian">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-body text-steel">
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
