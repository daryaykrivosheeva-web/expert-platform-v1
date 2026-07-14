import { Sparkles, ArrowRight } from "lucide-react";
import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";

export function Hero() {
  const { hero, expert } = siteConfig;

  return (
    <section id="hero" className="relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[-10rem] -z-10 h-[40rem] bg-[radial-gradient(closest-side,var(--color-primary)_0%,transparent_70%)] opacity-[0.10]"
      />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              {hero.eyebrow}
            </span>

            <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {hero.headline}{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {hero.highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {hero.subheadline}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#contacts" className="group">
                {hero.ctaPrimaryText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href="#services" variant="secondary">
                {hero.ctaSecondaryText}
              </Button>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-heading text-2xl font-bold text-ink sm:text-3xl">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-lift">
              <Avatar
                src={hero.image || expert.photo}
                name={expert.name}
                className="h-full w-full rounded-3xl"
              />
            </div>
            <div
              aria-hidden
              className="absolute -bottom-6 -left-6 hidden animate-float rounded-2xl border border-border bg-background/90 px-5 py-4 shadow-card backdrop-blur sm:block"
            >
              <p className="font-heading text-lg font-bold text-ink">{expert.clientsHelped}</p>
              <p className="text-xs text-muted">клиентов</p>
            </div>
            <div
              aria-hidden
              className="absolute -right-4 -top-4 hidden rounded-2xl border border-border bg-background/90 px-5 py-4 shadow-card backdrop-blur sm:block"
              style={{ animationDelay: "1.5s" }}
            >
              <p className="font-heading text-lg font-bold text-ink">{expert.experienceYears} лет</p>
              <p className="text-xs text-muted">опыта</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
