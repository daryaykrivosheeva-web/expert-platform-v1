import { Inter, JetBrains_Mono, Caveat } from "next/font/google";

/**
 * Osmo-style system: Inter carries both body copy and (at heavy weight +
 * tight tracking) the oversized display headlines — the DESIGN.md brief's
 * own suggested substitute for Haffer VF/XH, and the only option here with
 * full Cyrillic coverage. JetBrains Mono stamps small metadata labels.
 * Caveat is the sparse handwritten accent — used for at most one or two
 * annotations on the whole page, never for real content.
 */
const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
const hand = Caveat({
  subsets: ["latin", "cyrillic"],
  weight: ["600"],
  variable: "--font-hand",
  display: "swap",
});

export const fontVariables = [inter.variable, mono.variable, hand.variable].join(" ");
