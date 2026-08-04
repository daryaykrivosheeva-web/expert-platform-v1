import siteConfig from "@/config/site.config";
import { LegalPage } from "@/components/legal/LegalPage";
import { getRequisitesContent } from "@/lib/legal-content";

export function Requisites() {
  return <LegalPage document={getRequisitesContent(siteConfig)} />;
}
