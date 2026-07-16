import { Mail, Phone, MapPin, Clock } from "lucide-react";
import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BookingConsent } from "@/components/BookingConsent";

export function Contacts() {
  const { contacts } = siteConfig;

  const items = [
    { icon: Mail, label: "Email", value: contacts.email, href: `mailto:${contacts.email}` },
    { icon: Phone, label: "Телефон", value: contacts.phone, href: `tel:${contacts.phone.replace(/[^+\d]/g, "")}` },
    { icon: MapPin, label: "Локация", value: contacts.city, href: undefined },
    { icon: Clock, label: "Часы работы", value: contacts.workingHours, href: undefined },
  ];

  return (
    <section id="contacts" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Контакты"
          heading={contacts.heading}
          subheading={contacts.subheading}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05}>
              <div className="flex h-full flex-col items-center rounded-3xl border border-border bg-surface px-6 py-8 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted">
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} className="mt-1 text-sm font-medium text-ink hover:text-primary">
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-medium text-ink">{item.value}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <BookingConsent
          telegram={contacts.telegram}
          whatsapp={contacts.whatsapp}
          consentLabel={contacts.consentLabel}
        />
      </Container>
    </section>
  );
}
