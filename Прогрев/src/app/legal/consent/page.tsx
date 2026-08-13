import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { consent } from "@/content/legal-content";

export const metadata: Metadata = { title: "Обработка персональных данных — Даша Радченко" };

export default function Page() {
  return <LegalPage {...consent} />;
}
