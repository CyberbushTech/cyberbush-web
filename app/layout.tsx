import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import "./globals.scss";
import FullscreenLoader from "./components/common/fullscreen-loader";

const lato = Lato({
  weight: "400",
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
      <body>{children}</body>
    </html>
  );
}
