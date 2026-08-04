/**
 * The 5 legal document routes are structural — every client gets the same
 * pages at the same paths, only the generated content differs (see
 * src/lib/legal-content.ts). Not part of SiteConfig since it never
 * varies per client.
 */
export const legalLinks = [
  { label: "Политика конфиденциальности", href: "/legal/privacy" },
  { label: "Согласие на обработку данных", href: "/legal/consent" },
  { label: "Пользовательское соглашение", href: "/legal/terms" },
  { label: "Использование Cookie", href: "/legal/cookies" },
  { label: "Реквизиты", href: "/legal/requisites" },
];
