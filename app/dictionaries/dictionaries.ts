const dictionaries = {
  en: require("./en"),
  ru: require("./ru"),
};

const getDictionary = (locale: "en" | "ru") => dictionaries[locale].dict;
const getCurrentLocale = () => {
  return process.env.CYBER_LOCALE == "ru" ? "ru" : "en";
};

export const getLocalizations = () => getDictionary(getCurrentLocale());
