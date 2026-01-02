import type { Metadata } from "next";

import config from "@/config";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
      </body>
    </html>
  );
}
