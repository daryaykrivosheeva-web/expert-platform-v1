"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function BookingConsent({
  telegram,
  whatsapp,
  consentLabel,
}: {
  telegram: string;
  whatsapp: string;
  consentLabel: string;
}) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="mt-8 flex flex-col items-center gap-5">
      <label className="flex max-w-xl items-start gap-3 text-left text-sm text-muted">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
        />
        <span>
          {consentLabel}{" "}
          <Link href="/legal/consent" className="underline underline-offset-2 hover:text-ink">
            Подробнее
          </Link>
        </span>
      </label>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button
          href={telegram}
          target="_blank"
          className={cn("w-full sm:w-auto", !checked && "pointer-events-none opacity-40")}
          onClick={(e) => {
            if (!checked) e.preventDefault();
          }}
        >
          <Send className="h-4 w-4" />
          Написать в Telegram
        </Button>
        <Button
          href={whatsapp}
          target="_blank"
          variant="secondary"
          className={cn("w-full sm:w-auto", !checked && "pointer-events-none opacity-40")}
          onClick={(e) => {
            if (!checked) e.preventDefault();
          }}
        >
          <MessageCircle className="h-4 w-4" />
          Написать в WhatsApp
        </Button>
      </div>
    </div>
  );
}
