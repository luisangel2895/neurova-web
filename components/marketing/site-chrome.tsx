import Image from "next/image";
import Link from "next/link";

import { AppStoreButton } from "@/components/marketing/app-store-button";
import { locales, localizedHashPath, localizedPath, switchLocalePath, type Locale } from "@/lib/i18n";
import { getSiteCopy } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type SiteChromeProps = {
  locale: Locale;
  currentPath: string;
};

function HeaderDownloadButton({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale);

  return (
    <AppStoreButton
      size="compact"
      className="hidden sm:inline-flex"
      compactLabel={copy.appStore.compactLabel}
      ariaLabel={copy.appStore.ariaLabel}
    />
  );
}

function LocaleSwitch({
  locale,
  currentPath,
}: SiteChromeProps) {
  const copy = getSiteCopy(locale);

  return (
    <div className="flex items-center gap-2 rounded-full border border-line/70 bg-white/82 px-2 py-1 shadow-soft">
      <span className="px-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-subtle">
        {copy.header.languageLabel}
      </span>
      {locales.map((targetLocale) => (
        <Link
          key={targetLocale}
          href={switchLocalePath(currentPath, targetLocale)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition",
            locale === targetLocale
              ? "bg-brand-700 text-white"
              : "text-subtle hover:bg-page hover:text-ink",
          )}
        >
          {targetLocale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

export function SiteHeader({ locale, currentPath }: SiteChromeProps) {
  const copy = getSiteCopy(locale);
  const navigation = [
    { href: localizedHashPath(locale, "features"), label: copy.navigation.features },
    { href: localizedHashPath(locale, "screenshots"), label: copy.navigation.screens },
    { href: localizedHashPath(locale, "how-it-works"), label: copy.navigation.howItWorks },
    { href: localizedPath(locale, "/support"), label: copy.navigation.support },
    { href: localizedPath(locale, "/privacy"), label: copy.navigation.privacy },
  ];

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
                  {copy.header.tagline}
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-7 text-sm font-medium text-subtle md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <LocaleSwitch locale={locale} currentPath={currentPath} />
              <HeaderDownloadButton locale={locale} />
            </div>

            <div className="hidden items-center gap-3 md:flex lg:hidden">
              <HeaderDownloadButton locale={locale} />
            </div>
          </div>

          <div className="scrollbar-none flex gap-2 overflow-x-auto pb-3 md:hidden">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="pill-link">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 pb-4 md:hidden">
            <LocaleSwitch locale={locale} currentPath={currentPath} />
            <AppStoreButton
              size="compact"
              compactLabel={copy.appStore.compactLabel}
              ariaLabel={copy.appStore.ariaLabel}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale);

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
              {copy.footer.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm font-medium text-subtle">
            <Link href={localizedPath(locale, "/")} className="pill-link">
              {copy.navigation.home}
            </Link>
            <Link href={localizedPath(locale, "/support")} className="pill-link">
              {copy.navigation.support}
            </Link>
            <Link href={localizedPath(locale, "/privacy")} className="pill-link">
              {copy.navigation.privacy}
            </Link>
            <a href={`mailto:${siteConfig.supportEmail}`} className="pill-link">
              {siteConfig.supportEmail}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line/70 pt-6 text-sm text-subtle md:flex-row md:items-center md:justify-between">
          <p>{copy.footer.rights}</p>
          <p>{copy.footer.appStoreConnectNote}</p>
        </div>
      </div>
    </footer>
  );
}
