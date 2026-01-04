import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agentic Systems | Sovereign AI Architecture",
  description: "Build your own autonomous AI workforce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 🚗 DRIVER.JS CSS */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/driver.js@1.0.1/dist/driver.css" />
      </head>
      <body className={`${inter.className} bg-slate-950 text-white selection:bg-blue-500/30`}>
        {children}

        {/* 🚗 THE TOUR LOGIC & GLOBAL WIDGET */}
        {/* 🚗 THE TOUR LOGIC & GLOBAL WIDGET */}
        {/* SiteTour removed to prevent duplicate widget with missing props. It is handled in page.tsx */}

        {/* 🚗 DRIVER.JS SCRIPT */}
        <script src="https://cdn.jsdelivr.net/npm/driver.js@1.0.1/dist/driver.js.iife.js" defer></script>
      </body>
    </html>
  );
}