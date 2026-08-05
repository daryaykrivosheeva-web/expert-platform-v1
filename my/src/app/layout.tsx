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
    "--color-concrete": colors.concrete,
    "--color-ash-gray": colors.ashGray,
    "--color-bone": colors.bone,
    "--color-smoke": colors.smoke,
    "--color-graphite": colors.graphite,
    "--color-steel": colors.steel,
    "--color-charcoal": colors.charcoal,
    "--color-ink": colors.ink,
    "--color-obsidian": colors.obsidian,
    "--color-volt": colors.volt,
    "--color-ultraviolet": colors.ultraviolet,
    "--color-vermillion": colors.vermillion,
  } as React.CSSProperties;

  return (
    <html lang={siteConfig.seo.locale.startsWith("ru") ? "ru" : "en"} style={cssVars}>
      <body className={cn(fontVariables, "font-body antialiased")}>{children}</body>
    </html>
  );
}
