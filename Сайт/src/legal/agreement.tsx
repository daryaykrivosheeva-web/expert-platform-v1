import siteConfig from "@/config/site.config";
import { LegalPage } from "@/components/legal/LegalPage";
import { getTermsContent } from "@/lib/legal-content";

export function UserAgreement() {
  return <LegalPage document={getTermsContent(siteConfig)} />;
}
