import type { Metadata, Viewport } from "next";
import "./globals.css";
import { defaultLocale } from "@/lib/i18n";
import { getSiteCopy } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";

const defaultCopy = getSiteCopy(defaultLocale);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: defaultCopy.seo.home.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultCopy.seo.home.description,
  applicationName: siteConfig.name,
  keywords: [...defaultCopy.seo.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "education",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultCopy.seo.home.title,
    description: defaultCopy.seo.home.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "es_ES",
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
    title: defaultCopy.seo.home.title,
    description: defaultCopy.seo.home.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
  icons: {
    icon: "/favicon.ico",
    apple: siteConfig.mediaAssets.logo,
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f8ff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
