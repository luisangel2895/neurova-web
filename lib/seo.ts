import { defaultLocale, localizedPath, localeMeta, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function toAbsoluteUrl(path: string) {
  const normalizedPath = path === "/" ? "" : path;
  return `${siteConfig.siteUrl}${normalizedPath}`;
}

export function getLocalizedAbsoluteUrl(locale: Locale, path: string) {
  return toAbsoluteUrl(localizedPath(locale, path));
}

export function getAlternateLanguageUrls(path: string) {
  return {
    es: getLocalizedAbsoluteUrl("es", path),
    en: getLocalizedAbsoluteUrl("en", path),
    "x-default": getLocalizedAbsoluteUrl(defaultLocale, path),
  };
}

export function getAlternateOgLocales(locale: Locale) {
  return Object.entries(localeMeta)
    .filter(([targetLocale]) => targetLocale !== locale)
    .map(([, value]) => value.ogLocale);
}

export function serializeJsonLd(
  data: Record<string, unknown> | Array<Record<string, unknown>>,
) {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

type BreadcrumbItem = {
  name: string;
  url: string;
};

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildOrganizationSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: getLocalizedAbsoluteUrl(locale, "/"),
    logo: toAbsoluteUrl(siteConfig.mediaAssets.logo),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.supportEmail,
        availableLanguage: Object.values(localeMeta).map((value) => value.label),
        url: getLocalizedAbsoluteUrl(locale, "/support"),
      },
    ],
  };
}
