import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

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

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={contacts.telegram} target="_blank" className="w-full sm:w-auto">
            <Send className="h-4 w-4" />
            Написать в Telegram
          </Button>
          <Button href={contacts.whatsapp} target="_blank" variant="secondary" className="w-full sm:w-auto">
            <MessageCircle className="h-4 w-4" />
            Написать в WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
