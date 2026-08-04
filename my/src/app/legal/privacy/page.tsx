import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PrivacyPolicy } from "@/legal/privacy";
import siteConfig from "@/config/site.config";

export const metadata: Metadata = {
  title: `Политика конфиденциальности — ${siteConfig.brand.logoText}`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
