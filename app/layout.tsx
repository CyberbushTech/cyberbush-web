import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import "./globals.scss";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SITE_LOCALE, SITES } from "./site-config";
import { getLocalizations } from "./dictionaries/dictionaries";

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

const dict = getLocalizations();

export const metadata: Metadata = {
  metadataBase: new URL(SITES[SITE_LOCALE].origin),
  title: dict.meta.title,
  description: dict.meta.description,
  alternates: {
    canonical: "/",
    languages: {
      en: SITES.en.origin,
      ru: SITES.ru.origin,
    },
  },
  icons: {
    icon: ["/icon.png"],
    apple: ["/icon-apple.png"],
    shortcut: ["/icon-apple.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={SITE_LOCALE}>
      <body>
        {children}
        <GoogleAnalytics gaId="G-71XESJX2YN" />
      </body>
    </html>
  );
}
