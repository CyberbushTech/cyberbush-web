import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import "./globals.scss";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      </body>
    </html>
  );
}
