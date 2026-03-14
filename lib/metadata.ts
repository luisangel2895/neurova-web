import type { Metadata } from "next";

import { defaultLocale, localizedPath, localeMeta, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

type MetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  keywords?: ReadonlyArray<string>;
};

export function buildMetadata({
  locale,
  title,
  description,
  path,
  keywords,
}: MetadataInput): Metadata {
  const localizedRoute = localizedPath(locale, path);
  const canonical =
    localizedRoute === "/"
      ? siteConfig.siteUrl
      : `${siteConfig.siteUrl}${localizedRoute}`;

  return {
    title,
    description,
    keywords: Array.from(keywords ?? siteConfig.keywords),
    alternates: {
      canonical,
      languages: {
        es: `${siteConfig.siteUrl}${localizedPath("es", path) === "/" ? "" : localizedPath("es", path)}`,
        en: `${siteConfig.siteUrl}${localizedPath("en", path)}`,
        "x-default": `${siteConfig.siteUrl}${localizedPath(defaultLocale, path) === "/" ? "" : localizedPath(defaultLocale, path)}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: localeMeta[locale].ogLocale,
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
  };
}
