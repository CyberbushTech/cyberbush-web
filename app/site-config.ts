// Single source of truth for the build-time locale and per-language domains.
//
// The site is deployed once per language: each domain is a separate static
// build selected by NEXT_PUBLIC_SITE_LOCALE at build time (set in CI).
//   - cyberbush.tech -> English  (NEXT_PUBLIC_SITE_LOCALE=en)
//   - cyberbush.ru   -> Russian  (NEXT_PUBLIC_SITE_LOCALE=ru)

export type Locale = "en" | "ru";

export const LOCALES: Locale[] = ["en", "ru"];

export const DEFAULT_LOCALE: Locale = "en";

export const SITE_LOCALE: Locale =
  (process.env.NEXT_PUBLIC_SITE_LOCALE as Locale) || DEFAULT_LOCALE;

export const SITES: Record<Locale, { origin: string; label: string }> = {
  en: { origin: "https://cyberbush.tech", label: "EN" },
  ru: { origin: "https://cyberbush.ru", label: "RU" },
};
