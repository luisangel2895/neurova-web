import type { Metadata } from "next";

import { localeMeta, type Locale } from "@/lib/i18n";
import {
  getAlternateLanguageUrls,
  getAlternateOgLocales,
  getLocalizedAbsoluteUrl,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

type MetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  keywords?: ReadonlyArray<string>;
  noIndex?: boolean;
};

export function buildMetadata({
  locale,
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: MetadataInput): Metadata {
  const canonical = getLocalizedAbsoluteUrl(locale, path);

  return {
    title,
    description,
    keywords: Array.from(keywords ?? siteConfig.keywords),
    category: "education",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
    alternates: {
      canonical,
      languages: getAlternateLanguageUrls(path),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: localeMeta[locale].ogLocale,
      alternateLocale: getAlternateOgLocales(locale),
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : undefined,
    itunes: siteConfig.appStoreId
      ? {
          appId: siteConfig.appStoreId,
          appArgument: siteConfig.appStoreScheme,
        }
      : undefined,
    appLinks: siteConfig.appStoreId
      ? {
          ios: {
            url: siteConfig.appStoreScheme || canonical,
            app_store_id: siteConfig.appStoreId,
            app_name: siteConfig.name,
          },
          iphone: {
            url: siteConfig.appStoreScheme || canonical,
            app_store_id: siteConfig.appStoreId,
            app_name: siteConfig.name,
          },
          ipad: {
            url: siteConfig.appStoreScheme || canonical,
            app_store_id: siteConfig.appStoreId,
            app_name: siteConfig.name,
          },
          web: {
            url: canonical,
            should_fallback: true,
          },
        }
      : undefined,
  };
}
