# Deployment

## Overview

The repository includes both CI and deployment automation, but they are intentionally decoupled:

- `CI` validates the project on every push and pull request
- `Deploy to Vercel` is prepared for CLI-driven production deployment

If the repository is already connected directly to Vercel through the Git integration, you may choose to use:

- GitHub Actions for CI only
- Vercel native Git deployment for actual releases

## Workflows

### CI

File:

- [../.github/workflows/ci.yml](../.github/workflows/ci.yml)

What it runs:

- `npm ci`
- `npm run lint`
- `npm run typecheck`
- `npm run test:coverage`
- `npm run build`
- `npm run test:e2e`

Artifacts:

- coverage report
- Playwright HTML report
- Playwright raw test results

### Deploy to Vercel

File:

- [../.github/workflows/deploy-vercel.yml](../.github/workflows/deploy-vercel.yml)

Behavior:

- triggers after successful `CI` runs on `main`
- can also be triggered manually
- skips cleanly when required Vercel secrets are not configured

Required secrets for CLI-based deploy:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Recommended Production Setup

### Option A: Vercel Git integration

Best when:

- Vercel is already connected directly to the GitHub repository
- you want the simplest deployment model

Recommended setup:

- keep `CI` enabled in GitHub Actions
- let Vercel deploy automatically from Git
- optionally ignore the CLI deploy workflow

### Option B: GitHub Actions deploys with Vercel CLI

Best when:

- you want deployment fully controlled from GitHub Actions
- you want to gate deploys after CI in a single pipeline

Required setup:

- configure the Vercel secrets above
- optionally disable auto-deploy from Vercel Git integration to avoid double deployments

## Release Checklist

Before a production release:

1. Confirm `NEXT_PUBLIC_SITE_URL`.
2. Confirm `NEXT_PUBLIC_APP_STORE_URL`.
3. Confirm App Store metadata values if available.
4. Run the full local verification sequence.
5. Push to GitHub and check the `CI` workflow.
6. Confirm the final deployed domain serves the correct favicon, OG image, sitemap, and robots output.

## Local Verification Sequence

```bash
npm run lint
npm run typecheck
npm run test:coverage
npm run build
env CI=1 PORT=3001 npm run test:e2e
```
