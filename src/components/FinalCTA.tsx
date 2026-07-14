import { ArrowRight, MessageCircle } from "lucide-react";
import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const { finalCta, contacts } = siteConfig;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-16 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,var(--color-primary)_0%,transparent_70%)] opacity-30"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {finalCta.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              {finalCta.subheading}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="#contacts" className="group !bg-white !text-ink hover:!bg-white/90">
                {finalCta.ctaText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                href={contacts.telegram}
                target="_blank"
                variant="secondary"
                className="!border-white/20 !bg-white/10 !text-white hover:!bg-white/20"
              >
                <MessageCircle className="h-4 w-4" />
                Telegram
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/50">{finalCta.secondaryText}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
