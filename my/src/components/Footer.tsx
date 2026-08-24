import Link from "next/link";
import { Instagram, Send, MessageCircle } from "lucide-react";
import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { legalLinks } from "@/lib/legal-links";

export function Footer() {
  const { footer, brand, contacts, legal } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cloud py-12">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <Link href="#hero" className="font-heading text-lg font-semibold text-obsidian">
              {brand.logoText}
            </Link>
            <p className="mt-2 max-w-xs text-body text-steel">{footer.description}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body text-steel transition-colors hover:text-obsidian"
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cloud text-steel transition-colors hover:border-ash hover:text-obsidian"
            >
              <Send className="h-4 w-4" />
            </a>
            {contacts.whatsapp && (
              <a
                href={contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cloud text-steel transition-colors hover:border-ash hover:text-obsidian"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            )}
            {contacts.max && (
              <a
                href={contacts.max}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MAX"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cloud text-steel transition-colors hover:border-ash hover:text-obsidian"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            )}
            {contacts.instagram && (
              <a
                href={contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cloud text-steel transition-colors hover:border-ash hover:text-obsidian"
              >
                <Instagram className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-cloud pt-6">
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-caption text-steel transition-colors hover:text-obsidian"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 text-center text-caption text-steel">
            © {year} {footer.legalName}. Все права защищены.
          </div>
          <div className="mt-1 text-center text-caption text-steel">
            {legal.entityLabel} {legal.entityName} · ИНН {legal.inn}
            {legal.ogrn ? ` · ${legal.entityType === "llc" ? "ОГРН" : "ОГРНИП"} ${legal.ogrn}` : ""}
          </div>
          <p className="mx-auto mt-3 max-w-xl text-center text-caption text-steel">
            {legal.disclaimer}
          </p>
        </div>
      </Container>
    </footer>
  );
}
