import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import "../globals.scss";
import { GoogleAnalytics } from "@next/third-parties/google";
import { notFound } from "next/navigation";
import {
  LOCALES,
  SITE_ORIGIN,
  isLocale,
  type Locale,
} from "../site-config";
import { getDictionary } from "../dictionaries/dictionaries";
import { LocaleProvider } from "../i18n/locale-context";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ru: "/ru",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const dict = getDictionary(lang);

  return (
    <html lang={lang}>
      <body>
        <LocaleProvider locale={lang} dict={dict}>
          {children}
        </LocaleProvider>
        <GoogleAnalytics gaId="G-71XESJX2YN" />
      </body>
    </html>
  );
}
