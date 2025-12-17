import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ui/ChatWidget"; // <--- 1. Import it

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agentic Systems | AI Automation & Voice Agents",
  description: "Dallas-based AI Agency specializing in N8N workflows, Autogen autonomous agents, and outbound voice AI. Serving clients globally from Texas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased`}>
        {children}
        <ChatWidget /> {/* <--- 2. Place it here */}
      </body>
    </html>
  );
}