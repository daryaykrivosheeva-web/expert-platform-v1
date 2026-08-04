import type { SiteConfig } from "@/types/config";
import psychologistConfig from "./examples/psychologist.config";
import businessCoachConfig from "./examples/business-coach.config";
import nutritionistConfig from "./examples/nutritionist.config";
import astrologerConfig from "./examples/astrologer.config";
import lawyerConfig from "./examples/lawyer.config";
import studioConfig from "./examples/studio.config";

/**
 * SINGLE SOURCE OF TRUTH.
 *
 * Multiple real clients can now deploy from this one repo — each Vercel/
 * Netlify project sets NEXT_PUBLIC_SITE_CONFIG to pick its own niche config,
 * so one client's production deployment never touches another's. No
 * component code changes to switch niches — only this file and the env var.
 *
 * Default (no env var set): psychologist — the live production config for
 * the first real client. Do not change this default; it protects that
 * deployment. New clients get their own Vercel project with their own env
 * var instead of flipping this default.
 *
 * Ready-made variants live in src/config/examples/: business-coach.config.ts
 * (the original generic default demo), nutritionist.config.ts,
 * astrologer.config.ts, lawyer.config.ts.
 */
const configsByKey: Record<string, SiteConfig> = {
  psychologist: psychologistConfig,
  "business-coach": businessCoachConfig,
  nutritionist: nutritionistConfig,
  astrologer: astrologerConfig,
  lawyer: lawyerConfig,
  studio: studioConfig,
};

const activeKey = process.env.NEXT_PUBLIC_SITE_CONFIG ?? "psychologist";
const siteConfig: SiteConfig = configsByKey[activeKey] ?? psychologistConfig;

export default siteConfig;
