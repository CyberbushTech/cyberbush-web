const dictionaries = {
  en: require("./en"),
  ru: require("./ru"),
};

const getDictionary = (locale: "en" | "ru") => dictionaries[locale].dict;
const getCurrentLocale = () => {
  const hostname =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "cyberbush.tech";
  if (hostname === "localhost") {
    return "ru";
  }
  return hostname.endsWith(".ru") ? "ru" : "en";
};

export const getLocalizations = () => getDictionary(getCurrentLocale());
