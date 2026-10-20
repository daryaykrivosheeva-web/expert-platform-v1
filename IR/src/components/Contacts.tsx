import Container from "./ui/Container";
import PhotoFrame from "./ui/PhotoFrame";
import Reveal from "./ui/Reveal";
import CTAButton from "./ui/CTAButton";
import Eyebrow from "./ui/Eyebrow";
import { FINAL_CTA, SITE } from "../data/profile";
import { IMAGES } from "../data/images";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 5.5c0-1.1.9-2 2-2h2.1c.5 0 .9.3 1 .8l.9 3.4c.1.4-.1.9-.5 1.1L7.4 9.9a1 1 0 0 0-.4 1.3 12.5 12.5 0 0 0 5.8 5.8 1 1 0 0 0 1.3-.4l1.1-1.6c.2-.4.7-.6 1.1-.5l3.4.9c.5.1.8.5.8 1v2.1c0 1.1-.9 2-2 2h-1C10.5 20.5 3.5 13.5 3.5 5.5"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 shrink-0" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

export default function Contacts() {
  return (
    <section id="contacts" className="bg-charcoal py-24 text-on-dark sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow tone="dark">Контакты</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance font-serif text-[30px] leading-[1.15] text-on-dark sm:text-[38px] lg:text-[44px]">
              {FINAL_CTA.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-balance text-lg leading-relaxed text-on-dark-muted">
              {FINAL_CTA.description}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col gap-4">
              <a
                href={SITE.phoneHref}
                className="group flex w-fit items-center gap-3 text-lg text-on-dark transition-colors hover:text-bronze-soft"
              >
                <PhoneIcon />
                <span>{SITE.phone}</span>
              </a>
              <a
                href={SITE.emailHref}
                className="group flex w-fit items-center gap-3 text-lg text-on-dark transition-colors hover:text-bronze-soft"
              >
                <MailIcon />
                <span>{SITE.email}</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <CTAButton href={SITE.phoneHref} variant="solid" className="!bg-bronze hover:!bg-bronze-soft">
                Связаться
              </CTAButton>
              <CTAButton
                href={`${SITE.emailHref}?subject=${encodeURIComponent("Обсудить проект")}`}
                variant="ghost"
              >
                Обсудить проект
              </CTAButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="hidden lg:block">
          <PhotoFrame image={IMAGES.contact} frame="landscape" className="lg:aspect-[4/5]" />
        </Reveal>
      </Container>
    </section>
  );
}
