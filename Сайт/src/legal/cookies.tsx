import siteConfig from "@/config/site.config";
import { LegalPage } from "@/components/legal/LegalPage";
import { getCookiesContent } from "@/lib/legal-content";

export function CookiesPolicy() {
  return <LegalPage document={getCookiesContent(siteConfig)} />;
}
