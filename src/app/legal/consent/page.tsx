import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalPage } from "@/components/legal/LegalPage";
import { getConsentContent } from "@/lib/legal-content";
import siteConfig from "@/config/site.config";

export const metadata: Metadata = {
  title: `Согласие на обработку персональных данных — ${siteConfig.brand.logoText}`,
};

export default function ConsentPage() {
  return (
    <>
      <Header />
      <LegalPage document={getConsentContent(siteConfig)} />
      <Footer />
    </>
  );
}
