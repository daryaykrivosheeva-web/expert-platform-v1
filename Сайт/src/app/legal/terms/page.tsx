import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { UserAgreement } from "@/legal/agreement";
import siteConfig from "@/config/site.config";

export const metadata: Metadata = {
  title: `Пользовательское соглашение — ${siteConfig.brand.logoText}`,
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <UserAgreement />
      <Footer />
    </>
  );
}
