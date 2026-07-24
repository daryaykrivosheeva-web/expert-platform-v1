import { Inter, Manrope, Sora, Playfair_Display, Poppins } from "next/font/google";
import type { FontKey } from "@/types/config";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin", "cyrillic"], variable: "--font-manrope", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"], variable: "--font-playfair", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });

export const fontVariables = [
  inter.variable,
  manrope.variable,
  sora.variable,
  playfair.variable,
  poppins.variable,
].join(" ");

const fontCssVarMap: Record<FontKey, string> = {
  inter: "var(--font-inter)",
  manrope: "var(--font-manrope)",
  sora: "var(--font-sora)",
  playfair: "var(--font-playfair)",
  poppins: "var(--font-poppins)",
};

export function resolveFontVar(key: FontKey): string {
  return fontCssVarMap[key] ?? fontCssVarMap.inter;
}
