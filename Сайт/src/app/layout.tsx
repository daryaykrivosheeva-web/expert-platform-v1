import type { Metadata } from "next";
import siteConfig from "@/config/site.config";
import { fontVariables, resolveFontVar } from "@/lib/fonts";
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
    "--color-primary": colors.primary,
    "--color-primary-dark": colors.primaryDark,
    "--color-secondary": colors.secondary,
    "--color-accent": colors.accent,
    "--color-background": colors.background,
    "--color-surface": colors.surface,
    "--color-text": colors.text,
    "--color-muted": colors.muted,
    "--color-border": colors.border,
    "--font-heading": resolveFontVar(siteConfig.brand.fonts.heading),
    "--font-body": resolveFontVar(siteConfig.brand.fonts.body),
  } as React.CSSProperties;

  return (
    <html lang={siteConfig.seo.locale.startsWith("ru") ? "ru" : "en"} style={cssVars}>
      <body className={cn(fontVariables, "font-body antialiased")}>{children}</body>
    </html>
  );
}
