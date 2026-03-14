export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeMeta = {
  es: {
    label: "Español",
    htmlLang: "es",
    ogLocale: "es_ES",
  },
  en: {
    label: "English",
    htmlLang: "en",
    ogLocale: "en_US",
  },
} as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function stripLocalePrefix(pathname: string) {
  if (pathname === "/en") {
    return "/";
  }

  if (pathname.startsWith("/en/")) {
    return pathname.slice(3);
  }

  return pathname;
}

export function localizedPath(locale: Locale, path: string) {
  const normalized = path === "" ? "/" : path;

  if (locale === "es") {
    return normalized;
  }

  return normalized === "/" ? "/en" : `/en${normalized}`;
}

export function localizedHashPath(locale: Locale, hash: string) {
  return `${localizedPath(locale, "/")}#${hash}`;
}

export function switchLocalePath(currentPath: string, locale: Locale) {
  return localizedPath(locale, stripLocalePrefix(currentPath));
}
