import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import config from "@/config";

import "./globals.css";

export const metadata: Metadata = {
  title: config.appName,
  description: "Car rental services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
