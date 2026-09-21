import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { insideGallery, insideList } from "../data/inside";

export default function WhatsInside() {
  return (
    <section id="inside" className="py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Внутри файла" title="Что внутри" align="center" className="mb-10 sm:mb-14" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
          <Reveal>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {insideGallery.map((item) => (
                <figure key={item.src}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full rounded-xl shadow-[0_16px_40px_-20px_rgba(47,79,65,0.4)]"
                    width={1050}
                    height={1427}
                    loading="lazy"
                  />
                  <figcaption className="px-1 py-2 text-center text-[11px] leading-tight text-ink/60 sm:text-xs">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-ink/50">
              47 страниц в каждом PDF
            </p>
            <ul className="space-y-3">
              {insideList.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/80 sm:text-base">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/15 text-xs text-sage">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
