import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Avatar } from "@/components/ui/Avatar";
import { Reveal } from "@/components/ui/Reveal";
import { getIcon } from "@/lib/icons";

export function About() {
  const { about, expert } = siteConfig;

  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <SectionHeading heading={about.heading} subheading={about.subheading} />

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-card border border-cloud">
              <Avatar
                src={about.photo || expert.photo}
                name={expert.name}
                className="h-full w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <p className="font-heading text-subheading font-semibold text-obsidian">{expert.name}</p>
            <p className="mt-1 text-caption uppercase text-fog">{expert.role}</p>

            <div className="mt-6 space-y-4">
              {about.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-body-lg text-steel">
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {about.highlights.map((item) => {
                const Icon = getIcon(item.icon);
                return (
                  <li
                    key={item.text}
                    className="flex items-center gap-3 rounded-card border border-cloud bg-snow px-4 py-3.5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-icon bg-paper text-graphite">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-body font-medium text-graphite">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
