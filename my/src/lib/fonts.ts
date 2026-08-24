import { Manrope } from "next/font/google";

/**
 * Awesomic-style system: a single geometric grotesque carries every role —
 * bold (600/700) display headlines down to compact 400-weight UI text, no
 * secondary mono/handwritten faces. The reference's own face (Cosmica) has
 * no public distribution; Manrope is the closest confident geometric
 * grotesque with full Cyrillic coverage (DM Sans, the brief's suggested
 * substitute, ships latin-only).
 */
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const fontVariables = manrope.variable;
