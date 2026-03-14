# Testing

## Strategy

The testing strategy is intentionally split into two layers:

- unit/integration tests for helpers, metadata, routing logic, and form behavior
- end-to-end tests for real user flows across the production-like site

This keeps fast feedback for logic-heavy changes while still validating the real browser experience.

## Tooling

### Unit and integration

- `Vitest`
- `React Testing Library`
- `@testing-library/jest-dom`
- `jsdom`

### End-to-end

- `Playwright`
- Chromium project
- production-style server execution in CI

## Commands

```bash
npm run test
npm run test:coverage
npm run test:e2e
```

## CI Expectations

The project CI treats these checks as release blockers:

- lint
- typecheck
- unit coverage thresholds
- production build
- end-to-end suite

## Coverage Thresholds

Configured in `vitest.config.ts`:

- lines: `85`
- statements: `85`
- functions: `90`
- branches: `75`

These thresholds are designed to keep the marketing platform well-covered without encouraging low-value tests.

## Current Unit Coverage Areas

### Localization

- route localization helpers
- alternate route resolution

Files:

- [../tests/unit/i18n.test.ts](../tests/unit/i18n.test.ts)

### Metadata and SEO

- metadata builder
- canonical logic
- alternate language URLs
- `noindex` behavior
- manifest generation
- sitemap generation
- SEO helper utilities

Files:

- [../tests/unit/metadata.test.ts](../tests/unit/metadata.test.ts)
- [../tests/unit/seo.test.ts](../tests/unit/seo.test.ts)
- [../tests/unit/manifest-sitemap.test.ts](../tests/unit/manifest-sitemap.test.ts)

### Support flow

- contact route validation
- support form validation
- localized success redirect

Files:

- [../tests/unit/contact-route.test.ts](../tests/unit/contact-route.test.ts)
- [../tests/unit/support-form.test.tsx](../tests/unit/support-form.test.tsx)

### Rendered page views

- home page view
- support page view
- privacy page view
- structured data presence

Files:

- [../tests/unit/page-views.test.tsx](../tests/unit/page-views.test.tsx)

## Current E2E Coverage Areas

### Home

- Spanish home render
- App Store CTA visibility
- locale switch to English

File:

- [../tests/e2e/home.spec.ts](../tests/e2e/home.spec.ts)

### Support

- validation messaging
- localized support render
- successful submit redirect

File:

- [../tests/e2e/support.spec.ts](../tests/e2e/support.spec.ts)

### Privacy

- localized privacy page rendering

File:

- [../tests/e2e/privacy.spec.ts](../tests/e2e/privacy.spec.ts)

## Local Development Workflow

Recommended sequence before pushing:

```bash
npm run lint
npm run typecheck
npm run test:coverage
npm run build
npm run test:e2e
```

## Notes for Future Contributors

- Prefer testing public behavior over implementation detail.
- Add unit tests when introducing new helper logic, metadata rules, or form behavior.
- Add E2E coverage when changing navigation, localization, critical CTAs, or route behavior.
- Keep test names descriptive and user-facing.
- Avoid snapshot-heavy testing for marketing UI unless there is a strong reason.
