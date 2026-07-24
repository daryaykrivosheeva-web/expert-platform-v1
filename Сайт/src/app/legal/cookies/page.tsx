import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookiesPolicy } from "@/legal/cookies";
import siteConfig from "@/config/site.config";

export const metadata: Metadata = {
  title: `Использование Cookie — ${siteConfig.brand.logoText}`,
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <CookiesPolicy />
      <Footer />
    </>
  );
}
