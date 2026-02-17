import { Slide, ToastContainer } from "react-toastify";
import type { Metadata } from "next";

import config from "@/config";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(config.apiUrl),
  title: {
    default: `${config.appName} | Rent, Buy & Service Cars`,
    template: `%s | ${config.appName}`,
  },
  description:
    "Rent cars, buy quality vehicles, or book professional car servicing. Affordable prices and trusted service.",
  keywords: [
    "car rental",
    "rent a car",
    "buy car",
    "used cars",
    "car servicing",
    "vehicle service",
    "car dealership",
  ],
  authors: [{ name: config.appName }],
  creator: config.appName,
  publisher: config.appName,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: config.apiUrl,
    siteName: config.appName,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: config.appName,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem("aspire-theme");
                  
                  if (theme === "dark") {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-light dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-500">
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        <ToastContainer
          autoClose={2500}
          position="top-center"
          transition={Slide}
        />
      </body>
    </html>
  );
}
