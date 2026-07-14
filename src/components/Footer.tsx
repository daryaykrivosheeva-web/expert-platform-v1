import Link from "next/link";
import { Instagram, Send, MessageCircle } from "lucide-react";
import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const { footer, brand, contacts } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <Link href="#hero" className="font-heading text-lg font-bold text-ink">
              {brand.logoText}
            </Link>
            <p className="mt-2 max-w-xs text-sm text-muted">{footer.description}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              href={contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary/40 hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            {contacts.instagram && (
              <a
                href={contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted">
          © {year} {footer.legalName}. Все права защищены.
        </div>
      </Container>
    </footer>
  );
}
