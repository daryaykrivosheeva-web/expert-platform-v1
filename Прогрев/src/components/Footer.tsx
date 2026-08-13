import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footer } from "@/content/site-content";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-wrap items-center justify-between gap-4">
        <div className="font-bold text-ink">
          {footer.name} <span className="font-normal text-ink-muted">· {footer.status}</span>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-ink-muted">
          <Link href="/legal/policy" className="hover:text-accent-dark">
            Политика конфиденциальности
          </Link>
          <Link href="/legal/consent" className="hover:text-accent-dark">
            Обработка персональных данных
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
