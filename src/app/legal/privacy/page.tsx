import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalPage } from "@/components/legal/LegalPage";
import { getPrivacyPolicyContent } from "@/lib/legal-content";
import siteConfig from "@/config/site.config";

export const metadata: Metadata = {
  title: `Политика конфиденциальности — ${siteConfig.brand.logoText}`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <LegalPage document={getPrivacyPolicyContent(siteConfig)} />
      <Footer />
    </>
  );
}
