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

type FaqItem = {
  question: string;
  answer: string;
};

type WebPageSchemaInput = {
  locale: Locale;
  name: string;
  url: string;
  description: string;
  type?: "WebPage" | "ContactPage";
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
    description: siteConfig.description,
    logo: toAbsoluteUrl(siteConfig.mediaAssets.logo),
    email: siteConfig.supportEmail,
    sameAs: siteConfig.appStoreId ? [siteConfig.appStoreUrl] : undefined,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.supportEmail,
        areaServed: "Worldwide",
        availableLanguage: Object.values(localeMeta).map((value) => value.label),
        url: getLocalizedAbsoluteUrl(locale, "/support"),
      },
    ],
  };
}

export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildWebSiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: getLocalizedAbsoluteUrl(locale, "/"),
    inLanguage: localeMeta[locale].htmlLang,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: getLocalizedAbsoluteUrl(locale, "/"),
    },
  };
}

export function buildWebPageSchema({
  locale,
  name,
  url,
  description,
  type = "WebPage",
}: WebPageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    url,
    description,
    inLanguage: localeMeta[locale].htmlLang,
    dateModified: siteConfig.lastUpdated,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: getLocalizedAbsoluteUrl(locale, "/"),
    },
  };
}
