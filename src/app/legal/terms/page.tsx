import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalPage } from "@/components/legal/LegalPage";
import { getTermsContent } from "@/lib/legal-content";
import siteConfig from "@/config/site.config";

export const metadata: Metadata = {
  title: `Пользовательское соглашение — ${siteConfig.brand.logoText}`,
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <LegalPage document={getTermsContent(siteConfig)} />
      <Footer />
    </>
  );
}
