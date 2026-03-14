import type { MetadataRoute } from "next";

import { getAlternateLanguageUrls, toAbsoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      path: "/",
      images: [
        siteConfig.mediaAssets.logo,
        ...siteConfig.mediaAssets.iphoneScreenshots.map((shot) => shot.src),
      ],
      changeFrequency: "weekly" as const,
      priority: 1,
      alternates: {
        languages: getAlternateLanguageUrls("/"),
      },
    },
    {
      path: "/support",
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: getAlternateLanguageUrls("/support"),
      },
    },
    {
      path: "/privacy",
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: getAlternateLanguageUrls("/privacy"),
      },
    },
    {
      path: "/en",
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: {
        languages: getAlternateLanguageUrls("/"),
      },
    },
    {
      path: "/en/support",
      changeFrequency: "monthly" as const,
      priority: 0.75,
      alternates: {
        languages: getAlternateLanguageUrls("/support"),
      },
    },
    {
      path: "/en/privacy",
      changeFrequency: "monthly" as const,
      priority: 0.75,
      alternates: {
        languages: getAlternateLanguageUrls("/privacy"),
      },
    },
  ];

  return routes.map((route) => ({
    url: toAbsoluteUrl(route.path),
    lastModified: new Date(siteConfig.lastUpdated),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: route.alternates,
    images: route.images?.map((image) => toAbsoluteUrl(image)),
  }));
}
