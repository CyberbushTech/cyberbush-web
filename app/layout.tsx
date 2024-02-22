import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import "./globals.scss";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

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

export const metadata: Metadata = {
  title: "Cyberbush",
  description:
    "AI-controlled aircrafts producer for air taxi, entertainment and delivery",
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
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-71XESJX2YN" />
      </body>
    </html>
  );
}
