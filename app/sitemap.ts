import type { MetadataRoute } from "next";
import { LOCALES, SITE_ORIGIN } from "./site-config";

export const dynamic = "force-static";

const PATHS = ["", "/fortuna", "/condor", "/beetle", "/technology"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const lang of LOCALES) {
    for (const path of PATHS) {
      entries.push({
        url: `${SITE_ORIGIN}/${lang}${path}`,
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${SITE_ORIGIN}/en${path}`,
            ru: `${SITE_ORIGIN}/ru${path}`,
          },
        },
      });
    }
  }
  return entries;
}
