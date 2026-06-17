import { SITE_LOCALE, type Locale } from "../site-config";

const dictionaries = {
  en: require("./en"),
  ru: require("./ru"),
};

const getDictionary = (locale: Locale) => dictionaries[locale].dict;

// The locale is fixed at build time (one static build per domain), so callers
// don't need to pass it. See app/site-config.ts.
export const getLocalizations = () => getDictionary(SITE_LOCALE);
