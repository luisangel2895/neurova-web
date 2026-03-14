# SEO

## Goal

Neurova Web is designed to be both a public marketing site and a strong App Store Connect companion surface. SEO is not limited to the homepage; support and privacy are also treated as production-grade pages.

## Indexed Pages

Indexable pages:

- `/`
- `/support`
- `/privacy`
- `/en`
- `/en/support`
- `/en/privacy`

Utility pages intentionally not meant for search index priority:

- `/support/success`
- `/en/support/success`

These success pages are marked with `noindex`.

## Metadata Model

Metadata is generated through `lib/metadata.ts` and shared helpers in `lib/seo.ts`.

The current metadata layer includes:

- canonical URLs
- language alternates
- Open Graph
- Twitter cards
- app-related metadata for iOS when App Store values are configured
- referrer and format-detection settings
- page-level robots rules

## Structured Data

Structured data currently includes:

- `Organization`
- `MobileApplication`
- `FAQPage`
- `BreadcrumbList`
- `WebSite`
- `ContactPage`
- `WebPage`

These are injected from `components/marketing/page-views.tsx` through the safe serializer in `components/marketing/structured-data.tsx`.

## Metadata Routes

The following metadata routes are implemented:

- [../app/opengraph-image.tsx](../app/opengraph-image.tsx)
- [../app/sitemap.ts](../app/sitemap.ts)
- [../app/robots.ts](../app/robots.ts)
- [../app/manifest.ts](../app/manifest.ts)

## Sitemap Strategy

The sitemap includes:

- primary ES and EN routes
- language alternates
- image references for richer search parsing

The support success pages are intentionally excluded.

## Open Graph and Sharing

Social preview support includes:

- dynamic OG image route
- Open Graph metadata per page
- Twitter summary-large-image cards

## App Store Connect Alignment

The site is structured to map directly to the required App Store surfaces:

- Marketing URL: `/`
- Support URL: `/support`
- Privacy Policy URL: `/privacy`

## Required Production Variables

For best SEO results in production, configure:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/idXXXXXXXXXX
NEXT_PUBLIC_APP_STORE_ID=XXXXXXXXXX
NEXT_PUBLIC_APP_SCHEME=neurova://
```

## Remaining Non-Code SEO Work

To reach the practical maximum after deployment:

1. Set the final production domain.
2. Replace the placeholder App Store URL with the real listing.
3. Add the real App Store ID.
4. Submit the site to Google Search Console.
5. Submit the sitemap.
6. Validate the final OG preview using the deployed domain.
7. Run Lighthouse/PageSpeed on the live site.

## Source Files

- [../app/layout.tsx](../app/layout.tsx)
- [../lib/metadata.ts](../lib/metadata.ts)
- [../lib/seo.ts](../lib/seo.ts)
- [../app/sitemap.ts](../app/sitemap.ts)
- [../app/robots.ts](../app/robots.ts)
- [../app/manifest.ts](../app/manifest.ts)
- [../app/opengraph-image.tsx](../app/opengraph-image.tsx)
