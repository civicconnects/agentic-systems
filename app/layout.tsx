import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// We import the Chat component here
import GlobalChat from '@/components/layout/GlobalChat';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agentic Systems | AI Automation & Voice Agents",
  description: "Dallas-based AI Agency. We replace busy work with intelligent agents using N8N, Autogen, and Voice AI.",
  keywords: ["AI Agency", "N8N Automation", "Voice Agents", "Dallas AI", "Business Automation"],
  openGraph: {
    title: "Agentic Systems | Replace Busy Work with AI",
    description: "Scale your business without increasing headcount. Deploy autonomous AI departments and voice agents today.",
    url: "https://ai-hub.agency",
    siteName: "Agentic Systems",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Systems | AI Automation",
    description: "Scale your business without increasing headcount. Deploy autonomous AI departments today.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased selection:bg-blue-500/30`}>
        {/* The main content of the website */}
        {children}
        
        {/* The Chat Widget sits on top of everything */}
        <GlobalChat />
      </body>
    </html>
  );
}