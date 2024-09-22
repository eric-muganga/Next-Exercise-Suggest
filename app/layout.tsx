import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Jura } from "next/font/google";

import "./globals.css";

const jura = Jura({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jura",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Exercise Suggest",
  description: "Find Your Perfect Workout Based on Your Mood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jura.className}>{children}</body>
    </html>
  );
}
