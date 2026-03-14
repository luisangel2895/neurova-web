# Architecture

## Overview

Neurova Web is a focused product site built around three production-facing goals:

- present the app publicly with a premium marketing landing page
- provide a real App Store Connect support URL
- provide a real App Store Connect privacy URL

The implementation favors a small, explicit architecture over heavy abstraction. Most behavior is concentrated in:

- `app/` for routes and metadata routes
- `components/marketing/` for reusable presentation components
- `lib/` for configuration, localization, metadata, and SEO helpers

## Diagram

![Neurova Web Architecture](./assets/architecture/neurova-web-architecture.png)

## Runtime Layers

### 1. Route Layer

The app uses the `Next.js` App Router. Route files are intentionally thin and delegate rendering to page view components.

Primary routes:

- `/`
- `/support`
- `/privacy`
- `/support/success`
- `/en`
- `/en/support`
- `/en/privacy`
- `/en/support/success`

Infrastructure routes:

- `/api/contact`
- `/manifest.webmanifest`
- `/opengraph-image`
- `/robots.txt`
- `/sitemap.xml`

### 2. View Layer

`components/marketing/page-views.tsx` composes the major route experiences:

- `HomePageView`
- `SupportPageView`
- `SupportSuccessPageView`
- `PrivacyPageView`

This keeps each route file minimal while centralizing layout wiring, structured data, and page-level composition.

### 3. Content Layer

Localized copy is centralized in `lib/site-content.ts`.

Benefits:

- one place to edit product copy
- consistent ES/EN parity
- easier SEO iteration
- easier support/privacy maintenance

### 4. Configuration Layer

`lib/site-config.ts` stores stable configuration such as:

- site URL
- App Store URL
- support email
- image assets
- screenshot definitions
- last updated date

### 5. SEO Layer

SEO concerns are split cleanly:

- `lib/metadata.ts`
- `lib/seo.ts`
- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `app/manifest.ts`
- `app/opengraph-image.tsx`

This separation avoids mixing SEO logic into UI components.

## Request Flows

### Marketing Flow

1. User lands on `/` or `/en`.
2. Route exports metadata through `buildMetadata`.
3. `HomePageView` renders header, sections, footer, and structured data.
4. Download CTAs point to the configured App Store URL.

### Support Flow

1. User opens `/support` or `/en/support`.
2. `SupportForm` handles client-side validation and submission state.
3. Form posts to `/api/contact`.
4. On success, the user is redirected to the localized success page.
5. The backend route is intentionally lightweight and ready to be replaced or extended with a real provider.

### Privacy Flow

1. User opens `/privacy` or `/en/privacy`.
2. Content is rendered from the localized policy source.
3. Metadata, breadcrumbs, and structured data describe the page for search engines and App Store review contexts.

## File-Level Responsibilities

### `app/`

- route entry points
- metadata routes
- contact API route
- global layout and global CSS

### `components/marketing/`

- layout shell
- landing sections
- support form
- shared UI primitives
- animation wrappers
- structured data script injection

### `lib/`

- locale helpers
- metadata builders
- SEO helpers
- site configuration
- localized content dictionary

### `tests/`

- unit tests for helpers, metadata, support flow, sitemap, manifest, and page views
- E2E tests for home, support, and privacy flows

## Architectural Principles

- Keep page routes small and declarative.
- Keep content centralized and editable.
- Prefer reusable composition over deep component hierarchies.
- Keep marketing visuals separate from metadata and infrastructure logic.
- Treat support/privacy pages as first-class production pages, not secondary extras.
- Make testing and CI part of the architecture, not an afterthought.

## Visual Reference

For the latest visual captures of the landing page sections, see [visual-reference.md](./visual-reference.md).
