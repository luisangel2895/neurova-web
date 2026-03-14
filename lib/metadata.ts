import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: ReadonlyArray<string>;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords,
}: MetadataInput): Metadata {
  const canonical = path === "/" ? siteConfig.siteUrl : `${siteConfig.siteUrl}${path}`;

  return {
    title,
    description,
    keywords: Array.from(keywords ?? siteConfig.keywords),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
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
