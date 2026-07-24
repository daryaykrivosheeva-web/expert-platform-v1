import siteConfig from "@/config/site.config";
import { LegalPage } from "@/components/legal/LegalPage";
import { getConsentContent } from "@/lib/legal-content";

export function ConsentToProcessing() {
  return <LegalPage document={getConsentContent(siteConfig)} />;
}
