import Container from "./ui/Container";
import { SITE } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal py-12 text-on-dark-muted">
      <Container className="flex flex-col gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg uppercase text-on-dark">
            {SITE.name} «{SITE.callsign}»
          </p>
          <p className="mt-1 text-sm">{SITE.descriptor}</p>
          <p className="mt-1 text-sm">
            {SITE.city}, {SITE.region}
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a href={SITE.phoneHref} className="transition-colors hover:text-gold-soft">
            {SITE.phone}
          </a>
          <a href={SITE.telegramHref} target="_blank" rel="noreferrer" className="transition-colors hover:text-gold-soft">
            Telegram
          </a>
          <a href={SITE.vkHref} target="_blank" rel="noreferrer" className="transition-colors hover:text-gold-soft">
            ВКонтакте
          </a>
        </div>
      </Container>

      <Container className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-on-dark-muted/70">
          © {year} {SITE.fullName}. Все права защищены.
        </p>
        <p className="text-xs text-on-dark-muted/70">
          Разработка сайта —{" "}
          <a href="https://www.studiodarya.ru/" target="_blank" rel="noreferrer" className="transition-colors hover:text-gold-soft">
            Студия Дарья
          </a>
        </p>
      </Container>
    </footer>
  );
}
