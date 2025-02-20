import { useRouter } from "next/router";

const dictionaries = {
  en: require("./en"),
  ru: require("./ru"),
};

const getDictionary = (locale: "en" | "ru") => dictionaries[locale].dict;
const getCurrentLocale = (hostname: string) => {
  if (hostname === "localhost") {
    return "ru";
  }
  return hostname.endsWith(".ru") ? "ru" : "en";
};

export const getLocalizations = () => {
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "cyberbush.tech";
  return getDictionary(hostname.endsWith("ru") ? "ru" : "en");
};
