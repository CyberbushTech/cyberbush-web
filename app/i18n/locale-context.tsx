"use client";
import { createContext, useContext } from "react";
import type { Locale } from "../site-config";
import type { Dictionary } from "../dictionaries/dictionaries";

type LocaleContextValue = {
  locale: Locale;
  dict: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, dict }}>
      {children}
    </LocaleContext.Provider>
  );
}

function useLocaleContext(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocalizations must be used within a LocaleProvider");
  }
  return ctx;
}

/** Returns the active locale's dictionary. Drop-in replacement for the old getLocalizations(). */
export const useLocalizations = (): Dictionary => useLocaleContext().dict;

/** Returns the active locale code ("en" | "ru"). */
export const useLocale = (): Locale => useLocaleContext().locale;

/** Prefixes an app-internal path with the active locale, e.g. localePath("/condor", "ru") -> "/ru/condor". */
export function localePath(path: string, locale: Locale): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean === "/" ? "" : clean}`;
}
