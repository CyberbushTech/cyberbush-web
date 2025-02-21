const dictionaries = {
  en: require("./en"),
  ru: require("./ru"),
};

const getDictionary = (locale: "en" | "ru") => dictionaries[locale].dict;

export const getLocalizations = () => getDictionary("en");
