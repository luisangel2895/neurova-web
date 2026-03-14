import Image from "next/image";
import Link from "next/link";

import { hasRealAppStoreUrl, siteConfig } from "@/lib/site-config";

function AppStoreButton() {
  if (!hasRealAppStoreUrl()) {
    return (
      <Link href="/support" className="button-primary hidden sm:inline-flex">
        Support
      </Link>
    );
  }

  return (
    <a
      href={siteConfig.appStoreUrl}
      target="_blank"
      rel="noreferrer"
      className="button-primary hidden sm:inline-flex"
    >
      App Store
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-line/60 bg-white/78 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={siteConfig.mediaAssets.logo}
                alt={`${siteConfig.name} logo`}
                width={40}
                height={40}
                className="rounded-[15px] shadow-soft"
                priority
              />
              <div>
                <span className="block font-display text-lg font-semibold tracking-tight text-ink">
                  {siteConfig.name}
                </span>
                <span className="block text-xs font-medium uppercase tracking-[0.22em] text-subtle">
                  Study smarter on iPhone
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-7 text-sm font-medium text-subtle md:flex">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <AppStoreButton />
          </div>

          <div className="scrollbar-none flex gap-2 overflow-x-auto pb-4 md:hidden">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="pill-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70 bg-white/75">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <Image
                src={siteConfig.mediaAssets.logo}
                alt={`${siteConfig.name} logo`}
                width={34}
                height={34}
                className="rounded-[12px] shadow-soft"
              />
              <span className="font-display text-xl font-semibold tracking-tight text-ink">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-subtle">
              Premium study flow for iPhone with flashcards, OCR capture, spaced
              repetition, insights, streaks, and private iCloud sync.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm font-medium text-subtle">
            <Link href="/" className="pill-link">
              Home
            </Link>
            <Link href="/support" className="pill-link">
              Support
            </Link>
            <Link href="/privacy" className="pill-link">
              Privacy
            </Link>
            <a href={`mailto:${siteConfig.supportEmail}`} className="pill-link">
              {siteConfig.supportEmail}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line/70 pt-6 text-sm text-subtle md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Marketing URL: `/` · Support URL: `/support` · Privacy URL: `/privacy`</p>
        </div>
      </div>
    </footer>
  );
}
