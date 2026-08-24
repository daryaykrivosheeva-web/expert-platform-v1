import type { Metadata } from "next";
import siteConfig from "@/config/site.config";
import { fontVariables } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export function generateMetadata(): Metadata {
  const { seo, expert } = siteConfig;

  return {
    metadataBase: new URL(seo.siteUrl),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: expert.name }],
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.siteUrl,
      siteName: expert.name,
      locale: seo.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export function generateViewport() {
  return {
    themeColor: siteConfig.seo.themeColor,
    width: "device-width",
    initialScale: 1,
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { colors } = siteConfig.brand;

  const cssVars = {
    "--color-obsidian": colors.obsidian,
    "--color-graphite": colors.graphite,
    "--color-slate": colors.slate,
    "--color-iron": colors.iron,
    "--color-steel": colors.steel,
    "--color-fog": colors.fog,
    "--color-ash": colors.ash,
    "--color-mist": colors.mist,
    "--color-cloud": colors.cloud,
    "--color-paper": colors.paper,
    "--color-snow": colors.snow,
    "--color-ember": colors.ember,
  } as React.CSSProperties;

  return (
    <html lang={siteConfig.seo.locale.startsWith("ru") ? "ru" : "en"} style={cssVars}>
      <body className={cn(fontVariables, "font-body antialiased")}>{children}</body>
    </html>
  );
}
