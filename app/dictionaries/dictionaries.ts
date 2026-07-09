import type { Locale } from "../site-config";

const dictionaries = {
  en: require("./en"),
  ru: require("./ru"),
};

export const getDictionary = (locale: Locale) => dictionaries[locale].dict;

export type Dictionary = ReturnType<typeof getDictionary>;
