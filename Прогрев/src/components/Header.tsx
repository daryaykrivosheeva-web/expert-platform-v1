import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footer } from "@/content/site-content";

export function Header() {
  return (
    <header className="py-7">
      <Container>
        <Link href="/" className="inline-flex items-center gap-3 text-base font-bold text-ink">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
            ДР
          </span>
          {footer.name}
        </Link>
      </Container>
    </header>
  );
}
