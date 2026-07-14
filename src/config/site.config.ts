import type { SiteConfig } from "@/types/config";
import psychologistConfig from "./examples/psychologist.config";

/**
 * SINGLE SOURCE OF TRUTH.
 *
 * This file re-exports whichever niche config is currently live. No
 * component code needs to change to switch niches — only this import.
 *
 * Active: src/config/examples/psychologist.config.ts (first commercial
 * adaptation — psychology niche).
 *
 * Other ready-made variants live in src/config/examples/:
 * business-coach.config.ts (the original generic default),
 * nutritionist.config.ts, astrologer.config.ts. To switch niche, change
 * the import above to point at a different file, or copy that file's
 * content in here directly.
 */
const siteConfig: SiteConfig = psychologistConfig;

export default siteConfig;
