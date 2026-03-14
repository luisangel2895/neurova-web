import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  const screenshots = siteConfig.mediaAssets.iphoneScreenshots.slice(0, 4).map((shot) => ({
    src: shot.src,
    label: shot.caption,
    platform: "ios" as const,
    form_factor: "narrow" as const,
    sizes: "1242x2688",
    type: "image/png",
  }));

  return {
    id: "/",
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f4f8ff",
    theme_color: "#f4f8ff",
    categories: ["education", "productivity"],
    icons: [
      {
        src: siteConfig.mediaAssets.logo,
        sizes: "412x427",
        type: "image/png",
        purpose: "any",
      },
      {
        src: siteConfig.mediaAssets.logo,
        sizes: "412x427",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots,
    shortcuts: [
      {
        name: "Support",
        short_name: "Support",
        description: "Open Neurova support.",
        url: "/support",
      },
      {
        name: "Privacy",
        short_name: "Privacy",
        description: "Read the Neurova Privacy Policy.",
        url: "/privacy",
      },
    ],
    related_applications: siteConfig.appStoreId
      ? [
          {
            platform: "itunes",
            url: siteConfig.appStoreUrl,
            id: siteConfig.appStoreId,
          },
        ]
      : undefined,
    prefer_related_applications: Boolean(siteConfig.appStoreId),
  };
}
