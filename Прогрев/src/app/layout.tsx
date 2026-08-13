import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "5 готовых инструментов для эксперта — Даша Радченко",
  description:
    "Не курс, а готовые инструменты: сайт, заявки, CRM, контент и презентации. Разовая оплата 1900 ₽, доступ навсегда.",
  openGraph: {
    title: "5 готовых инструментов для эксперта — Даша Радченко",
    description:
      "Не курс, а готовые инструменты: сайт, заявки, CRM, контент и презентации. Разовая оплата 1900 ₽, доступ навсегда.",
    locale: "ru_RU",
    type: "website",
  },
};

export function generateViewport() {
  return {
    themeColor: "#F6F9F7",
    width: "device-width",
    initialScale: 1,
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={cn("font-sans antialiased")}>{children}</body>
    </html>
  );
}
