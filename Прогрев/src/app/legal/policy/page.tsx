import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { privacyPolicy } from "@/content/legal-content";

export const metadata: Metadata = { title: "Политика конфиденциальности — Даша Радченко" };

export default function Page() {
  return <LegalPage {...privacyPolicy} />;
}
