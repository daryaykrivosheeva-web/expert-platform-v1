import { Star } from "lucide-react";
import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Avatar } from "@/components/ui/Avatar";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  const { testimonials } = siteConfig;

  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <Container>
        <SectionHeading heading={testimonials.heading} subheading={testimonials.subheading} />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-background p-8 shadow-card">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-ink">
                  &ldquo;{item.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar
                    src={item.photo}
                    name={item.name}
                    className="h-11 w-11 shrink-0 rounded-full"
                    imgClassName="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold text-ink">{item.name}</p>
                    <p className="text-xs text-muted">{item.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
