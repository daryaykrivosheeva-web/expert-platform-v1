import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import CTAButton from "./ui/CTAButton";
import { products } from "../data/products";

function ProductScreenshot({ screenshot, title }: { screenshot: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white shadow-[0_20px_45px_-24px_rgba(37,33,39,0.25)]">
      <div className="flex items-center gap-1.5 border-b border-ink/8 bg-sand/40 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
      </div>
      <div className="aspect-[4/3] overflow-hidden bg-sand/20">
        <img
          src={screenshot}
          alt={title}
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Набор"
          title="5 инструментов для работы онлайн"
          subtitle="Готовые инструменты + инструкции, чтобы взять и настроить под себя."
          align="center"
          className="mb-16 sm:mb-20"
        />

        <div className="space-y-16 sm:space-y-24">
          {products.map((product, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={product.number}>
                <div
                  className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <ProductScreenshot screenshot={product.screenshot} title={product.title} />
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-sm font-medium tracking-[0.3em] text-plum/60">
                        {product.number} / 05
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl text-ink sm:text-3xl">
                      {product.icon} {product.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-gold-dark">
                      {product.tagline}
                    </p>
                    <div className="mt-5 space-y-3">
                      {product.paragraphs.map((p, idx) => (
                        <p key={idx} className="text-[16px] leading-relaxed text-ink/75 sm:text-lg">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16 flex justify-center sm:mt-20">
          <CTAButton>Забрать 5 инструментов — 1 900 ₽</CTAButton>
        </Reveal>
      </Container>
    </section>
  );
}
