"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import siteConfig from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <Container className="!max-w-[1200px] !px-0">
        <div className="flex h-16 items-center justify-between rounded-full border border-ink bg-concrete/90 px-6 backdrop-blur-md">
          <Link href="#hero" className="font-heading text-lg font-bold tracking-tight text-ink">
            {siteConfig.brand.logoText}
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-steel transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contacts" className="!px-5 !py-2.5 text-sm">
              {siteConfig.hero.ctaPrimaryText}
            </Button>
          </div>

          <button
            aria-label="Открыть меню"
            className="rounded-full p-2 text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-[5px] border border-ink bg-concrete lg:hidden">
            <div className="flex flex-col gap-1 p-4">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-[2px] px-3 py-3 text-sm font-medium text-ink hover:bg-ash-gray"
                >
                  {item.label}
                </Link>
              ))}
              <Button href="#contacts" className="mt-2 justify-center" onClick={() => setOpen(false)}>
                {siteConfig.hero.ctaPrimaryText}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
