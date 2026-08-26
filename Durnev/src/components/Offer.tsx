import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import CTAButton from "./ui/CTAButton";
import Reveal from "./ui/Reveal";
import { OFFER, SITE } from "../data/profile";

export default function Offer() {
  return (
    <section id="offer" className="bg-ink py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={OFFER.eyebrow} title={OFFER.title} tone="dark" />

        <Reveal delay={0.1} className="mt-10">
          <blockquote className="border-l-2 border-gold pl-6 sm:pl-8">
            <p className="text-balance text-xl leading-relaxed text-on-dark sm:text-2xl">{OFFER.storyLead}</p>
            <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-on-dark-muted sm:text-lg">
              {OFFER.storyBody}
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <div className="rounded-[2px] border border-gold/40 bg-gradient-to-br from-white/[0.06] to-transparent p-8 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">{OFFER.ctaEyebrow}</p>
            <h3 className="mt-4 text-balance text-2xl leading-snug text-on-dark sm:text-3xl">{OFFER.ctaTitle}</h3>
            <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-on-dark-muted sm:text-lg">
              {OFFER.ctaBody}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <CTAButton href={SITE.phoneHref} variant="solid">
                Позвонить: {SITE.phone}
              </CTAButton>
              <CTAButton href={SITE.telegramHref} variant="ghost" target="_blank" rel="noreferrer">
                Написать в Telegram
              </CTAButton>
            </div>
            <p className="mt-4 text-sm text-on-dark-muted">{SITE.maxNote}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
