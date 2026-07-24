import siteConfig from "@/config/site.config";
import { LegalPage } from "@/components/legal/LegalPage";
import { getPrivacyPolicyContent } from "@/lib/legal-content";

export function PrivacyPolicy() {
  return <LegalPage document={getPrivacyPolicyContent(siteConfig)} />;
}
