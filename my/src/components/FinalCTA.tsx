import { ArrowRight, MessageCircle } from "lucide-react";
import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const { finalCta, contacts } = siteConfig;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-obsidian px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-black leading-[0.95] tracking-tight text-concrete sm:text-4xl">
              {finalCta.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-concrete/70">
              {finalCta.subheading}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="#contacts" className="group">
                {finalCta.ctaText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                href={contacts.telegram}
                target="_blank"
                variant="secondary"
                className="!border !border-concrete/20 !bg-concrete/10 !text-concrete hover:!bg-concrete/20"
              >
                <MessageCircle className="h-4 w-4" />
                Telegram
              </Button>
            </div>

            <p className="mt-6 text-sm text-concrete/50">{finalCta.secondaryText}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
