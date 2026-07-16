import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalPage } from "@/components/legal/LegalPage";
import { getCookiesContent } from "@/lib/legal-content";
import siteConfig from "@/config/site.config";

export const metadata: Metadata = {
  title: `Использование Cookie — ${siteConfig.brand.logoText}`,
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <LegalPage document={getCookiesContent(siteConfig)} />
      <Footer />
    </>
  );
}
