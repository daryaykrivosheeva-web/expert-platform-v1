import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalPage } from "@/components/legal/LegalPage";
import { getRequisitesContent } from "@/lib/legal-content";
import siteConfig from "@/config/site.config";

export const metadata: Metadata = {
  title: `Реквизиты — ${siteConfig.brand.logoText}`,
};

export default function RequisitesPage() {
  return (
    <>
      <Header />
      <LegalPage document={getRequisitesContent(siteConfig)} />
      <Footer />
    </>
  );
}
