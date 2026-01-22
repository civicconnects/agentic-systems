import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
      <body className={`${inter.className} bg-slate-950 text-white selection:bg-blue-500/30`} suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JPGPTNHVLF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JPGPTNHVLF');
          `}
        </Script>
        <Script id="apollo-tracing" strategy="afterInteractive">
          {`
            function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
            o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
            o.onload=function(){window.trackingFunctions.onLoad({appId:"69729e655f3b390015abd555"})},
            document.head.appendChild(o)}initApollo();
          `}
        </Script>
        {children}

        {/* 🚗 THE TOUR LOGIC & GLOBAL WIDGET */}

        {/* SiteTour removed to prevent duplicate widget with missing props. It is handled in page.tsx */}

        {/* 🚗 DRIVER.JS SCRIPT */}
        <script src="https://cdn.jsdelivr.net/npm/driver.js@1.0.1/dist/driver.js.iife.js" defer></script>
      </body>
    </html>
  );
}