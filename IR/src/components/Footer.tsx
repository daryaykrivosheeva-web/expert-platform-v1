import Container from "./ui/Container";
import { SITE } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal py-12 text-on-dark-muted">
      <Container className="flex flex-col gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-lg text-on-dark">{SITE.name}</p>
          <p className="mt-1 text-sm">{SITE.descriptor}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a href={SITE.phoneHref} className="transition-colors hover:text-bronze-soft">
            {SITE.phone}
          </a>
          <a href={SITE.emailHref} className="transition-colors hover:text-bronze-soft">
            {SITE.email}
          </a>
        </div>
      </Container>

      <Container className="mt-8">
        <p className="text-xs text-on-dark-muted/70">© {year} {SITE.fullName}. Все права защищены.</p>
      </Container>
    </footer>
  );
}
