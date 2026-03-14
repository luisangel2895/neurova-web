import type { Metadata, Viewport } from "next";

import { localeMeta, type Locale } from "@/lib/i18n";
import { getAlternateOgLocales, toAbsoluteUrl } from "@/lib/seo";
import { getSiteCopy } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";

export function buildRootMetadata(locale: Locale): Metadata {
  const copy = getSiteCopy(locale);
  const socialTitle = `${copy.seo.home.title} | ${siteConfig.name}`;

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: copy.seo.home.description,
    applicationName: siteConfig.name,
    keywords: [...copy.seo.keywords],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "education",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
    manifest: "/manifest.webmanifest",
    verification: {
      google: siteConfig.googleSiteVerification,
      other: siteConfig.bingSiteVerification
        ? {
            "msvalidate.01": siteConfig.bingSiteVerification,
          }
        : undefined,
    },
    alternates: {
      canonical: locale === "es" ? "/" : "/en",
    },
    openGraph: {
      title: socialTitle,
      description: copy.seo.home.description,
      url: locale === "es" ? siteConfig.siteUrl : `${siteConfig.siteUrl}/en`,
      siteName: siteConfig.name,
      locale: localeMeta[locale].ogLocale,
      alternateLocale: getAlternateOgLocales(locale),
      type: "website",
      images: [
        {
          url: toAbsoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: copy.seo.home.description,
      images: [toAbsoluteUrl("/opengraph-image")],
    },
    robots: siteConfig.shouldIndex
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    appleWebApp: {
      capable: true,
      title: siteConfig.name,
      statusBarStyle: "default",
    },
    itunes: siteConfig.appStoreId
      ? {
          appId: siteConfig.appStoreId,
          appArgument: siteConfig.appStoreScheme,
        }
      : undefined,
    appLinks: siteConfig.appStoreId
      ? {
          ios: {
            url: siteConfig.appStoreScheme || siteConfig.siteUrl,
            app_store_id: siteConfig.appStoreId,
            app_name: siteConfig.name,
          },
          iphone: {
            url: siteConfig.appStoreScheme || siteConfig.siteUrl,
            app_store_id: siteConfig.appStoreId,
            app_name: siteConfig.name,
          },
          ipad: {
            url: siteConfig.appStoreScheme || siteConfig.siteUrl,
            app_store_id: siteConfig.appStoreId,
            app_name: siteConfig.name,
          },
          web: {
            url: siteConfig.siteUrl,
            should_fallback: true,
          },
        }
      : undefined,
  };
}

export const viewport: Viewport = {
  themeColor: "#f4f8ff",
  colorScheme: "light",
};

export function RootShell({
  locale,
  children,
}: Readonly<{
  locale: Locale;
  children: React.ReactNode;
}>) {
  return (
    <html lang={localeMeta[locale].htmlLang} className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
