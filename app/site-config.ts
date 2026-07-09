// Single-domain bilingual site (cyberbush.info) with /en and /ru sub-paths.

export type Locale = "en" | "ru";

export const LOCALES: Locale[] = ["en", "ru"];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
};

export const SITE_ORIGIN = "https://cyberbush.info";

export const isLocale = (value: string): value is Locale =>
  (LOCALES as string[]).includes(value);
