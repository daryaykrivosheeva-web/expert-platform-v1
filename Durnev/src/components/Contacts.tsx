import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import CTAButton from "./ui/CTAButton";
import Reveal from "./ui/Reveal";
import { SITE } from "../data/profile";

export default function Contacts() {
  return (
    <section id="contacts" className="bg-ink py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Контакты"
          title="Пишите, звоните — разберём ваш случай"
          subtitle="Живу в Благовещенске, но на связи из любого города России и с новых территорий — ДНР, ЛНР, Запорожской и Херсонской областей."
          tone="dark"
        />

        <Reveal delay={0.1} className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <a href={SITE.phoneHref} className="rounded-[2px] border border-white/10 p-6 transition-colors hover:border-gold">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-on-dark-muted">Телефон</p>
            <p className="mt-3 font-display text-xl text-on-dark">{SITE.phone}</p>
          </a>

          <a
            href={SITE.telegramHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-[2px] border border-white/10 p-6 transition-colors hover:border-gold"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-on-dark-muted">Telegram</p>
            <p className="mt-3 font-display text-xl text-on-dark">Написать</p>
          </a>

          <div className="rounded-[2px] border border-white/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-on-dark-muted">MAX</p>
            <p className="mt-3 font-display text-xl text-on-dark">{SITE.phone}</p>
          </div>

          <a
            href={SITE.vkHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-[2px] border border-white/10 p-6 transition-colors hover:border-gold"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-on-dark-muted">ВКонтакте</p>
            <p className="mt-3 font-display text-xl text-on-dark">Профиль</p>
          </a>
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <CTAButton href={SITE.phoneHref} variant="solid">
            Позвонить сейчас
          </CTAButton>
        </Reveal>
      </Container>
    </section>
  );
}
