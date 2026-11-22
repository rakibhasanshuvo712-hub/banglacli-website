import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import BackgroundCanvas from "@/components/BackgroundCanvas";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  variable: "--font-hind",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BanglaCLI — The Trilingual AI Coding Agent in Your Terminal (Bangla, Banglish & English)",
  description:
    "BanglaCLI is an autonomous, lightweight BYOK AI coding agent CLI fluent in Bangla, Banglish, and English. Features OpenCode-style Build & Plan modes, 4 autonomous tools, and 100% free tier AI support.",
  keywords: [
    "BanglaCLI",
    "banglacli",
    "AI coding agent",
    "Bangla AI",
    "Banglish AI",
    "BYOK AI",
    "terminal agent",
    "Node.js CLI",
    "Rakib Hasan Shuvo",
    "Gemini AI",
    "OpenRouter",
  ],
  authors: [{ name: "Rakib Hasan Shuvo", url: "https://github.com/rakibhasanshuvo712-hub" }],
  openGraph: {
    title: "BanglaCLI — The Trilingual AI Coding Agent in Your Terminal",
    description:
      "Code faster in বাংলা, Banglish & English directly in your terminal. 100% BYOK & Serverless with OpenCode-style Build & Plan modes.",
    url: "https://banglacli-website.vercel.app",
    siteName: "BanglaCLI",
    images: [
      {
        url: "https://github.com/rakibhasanshuvo712-hub.png",
        width: 800,
        height: 800,
        alt: "BanglaCLI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${hindSiliguri.variable} scroll-smooth`}
    >
      <body className="bg-[#04060a] text-slate-100 antialiased selection:bg-emerald-400 selection:text-black">
        {/* Dynamic Cyber-Grid & Aurora Mesh */}
        <div className="cyber-grid-bg"></div>
        <div className="aurora-beam aurora-1"></div>
        <div className="aurora-beam aurora-2"></div>
        <div className="aurora-beam aurora-3"></div>
        <BackgroundCanvas />

        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
