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
    <header className="sticky inset-x-0 top-0 z-50 bg-snow/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="#hero" className="font-heading text-lg font-semibold text-obsidian">
            {siteConfig.brand.logoText}
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-body font-normal text-steel transition-colors hover:text-obsidian"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contacts" pill>
              {siteConfig.hero.ctaPrimaryText}
            </Button>
          </div>

          <button
            aria-label="Открыть меню"
            className="rounded-pill p-2 text-obsidian lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="mb-4 rounded-card border border-cloud bg-snow shadow-menu lg:hidden">
            <div className="flex flex-col gap-1 p-4">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-btn px-3 py-3 text-body font-normal text-obsidian hover:bg-paper"
                >
                  {item.label}
                </Link>
              ))}
              <Button href="#contacts" pill className="mt-2 justify-center" onClick={() => setOpen(false)}>
                {siteConfig.hero.ctaPrimaryText}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
