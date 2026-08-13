import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { leadMagnet, leadMagnetUrl } from "@/content/site-content";

export function LeadMagnet() {
  return (
    <section className="pb-6 sm:pb-10">
      <Container>
        <Reveal className="flex flex-col items-center gap-8 rounded-3xl bg-gradient-to-br from-accent-soft to-bg-soft p-8 sm:flex-row sm:justify-between sm:p-11">
          <div className="max-w-lg text-center sm:text-left">
            <h3 className="text-xl font-bold text-ink">{leadMagnet.title}</h3>
            <p className="mt-2 text-[15.5px] text-ink-muted">{leadMagnet.text}</p>
          </div>
          <Button href={leadMagnetUrl} variant="secondary" target="_blank" className="shrink-0">
            {leadMagnet.cta}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
