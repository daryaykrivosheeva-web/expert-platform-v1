import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Requisites } from "@/legal/requisites";
import siteConfig from "@/config/site.config";

export const metadata: Metadata = {
  title: `Реквизиты — ${siteConfig.brand.logoText}`,
};

export default function RequisitesPage() {
  return (
    <>
      <Header />
      <Requisites />
      <Footer />
    </>
  );
}
