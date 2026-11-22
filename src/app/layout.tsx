import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollChrome from "@/components/ScrollChrome";

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
      <body className="grain min-h-screen font-sans text-slate-100 antialiased selection:bg-purple-300 selection:text-purple-950">
        {/* Ambient Aurora Background from Portfolio2 */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="bg-grid absolute inset-0" />
          <div className="animate-aurora absolute -top-40 left-[8%] h-[36rem] w-[36rem] rounded-full bg-violet-600/25 blur-[130px]" />
          <div
            className="animate-aurora absolute top-[12%] right-[4%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-[130px]"
            style={{ animationDelay: "-4s" }}
          />
          <div
            className="animate-aurora absolute bottom-[-10%] left-[28%] h-[32rem] w-[38rem] rounded-full bg-fuchsia-600/20 blur-[140px]"
            style={{ animationDelay: "-8s" }}
          />
          <div
            className="animate-aurora absolute top-[55%] left-[-5%] h-[26rem] w-[26rem] rounded-full bg-emerald-500/15 blur-[130px]"
            style={{ animationDelay: "-6s" }}
          />
        </div>

        {/* Stardust constellation links */}
        <BackgroundCanvas />

        {/* Top Scroll Progress & Back to Top */}
        <ScrollChrome />

        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
