const dictionaries = {
  en: require("./en"),
  ru: require("./ru"),
};

const getDictionary = (locale: "en" | "ru") => dictionaries[locale].dict;
const getCurrentLocale = () => {
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "cyberbush.tech";
  if (hostname === "localhost") {
    return "ru";
  }
  return hostname.endsWith(".ru") ? "ru" : "en";
};

export const getLocalizations = () => getDictionary(getCurrentLocale());
