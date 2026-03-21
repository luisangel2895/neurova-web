"use client";

import { useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon, CloseIcon, MenuIcon } from "@/components/marketing/icons";
import { locales, switchLocalePath, type Locale } from "@/lib/i18n";
import { getSiteCopy } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type NavigationItem = {
  href: string;
  label: string;
};

type MobileHeaderNavProps = {
  locale: Locale;
  currentPath: string;
  localizedHomePath: string;
  navigation: NavigationItem[];
};

export function MobileHeaderNav({
  locale,
  currentPath,
  localizedHomePath,
  navigation,
}: MobileHeaderNavProps) {
  const copy = getSiteCopy(locale);
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between gap-3 py-3">
        <Link
          href={localizedHomePath}
          className="flex min-w-0 items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.15rem] border border-white/70 bg-white/84 shadow-soft">
            <span className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_left,_rgba(90,149,255,0.22),_transparent_52%),radial-gradient(circle_at_bottom_right,_rgba(102,231,204,0.18),_transparent_48%)]" />
            <Image
              src={siteConfig.mediaAssets.logo}
              alt={`${siteConfig.name} logo`}
              width={40}
              height={40}
              className="relative rounded-[0.95rem]"
              priority
            />
          </span>

          <div className="min-w-0">
            <span className="block truncate font-display text-[1.75rem] font-semibold tracking-[-0.04em] text-ink">
              {siteConfig.name}
            </span>
            <span className="hidden text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-subtle min-[390px]:block">
              {copy.header.tagline}
            </span>
          </div>
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <div className="inline-flex items-center rounded-[1rem] border border-line/70 bg-white/86 p-1 shadow-soft">
            {locales.map((targetLocale) => (
              <Link
                key={targetLocale}
                href={switchLocalePath(currentPath, targetLocale)}
                className={cn(
                  "rounded-[0.8rem] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] transition",
                  locale === targetLocale
                    ? "bg-[linear-gradient(135deg,_#3d61ee_0%,_#5a95ff_56%,_#61e7cc_100%)] !text-white [color:white] shadow-[0_12px_28px_rgba(61,97,238,0.24)]"
                    : "text-subtle hover:bg-page hover:text-ink",
                )}
                onClick={() => setIsOpen(false)}
              >
                {targetLocale.toUpperCase()}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls={panelId}
            aria-label={
              isOpen
                ? copy.header.closeNavigationLabel
                : copy.header.openNavigationLabel
            }
            onClick={() => setIsOpen((current) => !current)}
            className="relative inline-flex h-12 w-12 items-center justify-center rounded-[1.15rem] border border-white/70 bg-[linear-gradient(180deg,_rgba(255,255,255,0.96),_rgba(239,245,255,0.9))] text-ink shadow-soft transition hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_left,_rgba(90,149,255,0.16),_transparent_48%),radial-gradient(circle_at_bottom_right,_rgba(102,231,204,0.14),_transparent_44%)]" />
            {isOpen ? (
              <CloseIcon className="relative h-5 w-5" />
            ) : (
              <MenuIcon className="relative h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows,opacity,transform] duration-300 ease-out",
          isOpen
            ? "grid-rows-[1fr] pb-4 opacity-100"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="glass-card overflow-hidden p-2">
            <div className="border-b border-line/55 px-2.5 py-2.5">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-brand-700">
                {copy.header.mobileNavigationTitle}
              </p>
              <p className="mt-1 text-[0.78rem] leading-5 text-subtle">
                {copy.header.mobileNavigationDescription}
              </p>
            </div>

            <div className="mt-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center gap-3 rounded-[1rem] px-2.5 py-2.5 transition hover:bg-page/72"
                >
                  <span className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[linear-gradient(135deg,_#3d61ee_0%,_#5a95ff_56%,_#61e7cc_100%)] shadow-[0_6px_16px_rgba(61,97,238,0.24)]" />
                  <span className="min-w-0 flex-1 text-[0.98rem] font-semibold tracking-[-0.025em] text-ink">
                    {item.label}
                  </span>
                  <ArrowRightIcon className="h-4 w-4 shrink-0 text-subtle transition group-hover:translate-x-0.5 group-hover:text-brand-700" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
