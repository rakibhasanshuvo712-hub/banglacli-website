"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Copy, Check, Terminal, Layers, Sparkles } from "lucide-react";
import { useApp } from "@/context/AppContext";

const techMarquee = [
  { label: "বাংলা লিপি (Bangla Native)", color: "from-rose-500 to-red-500" },
  { label: "Banglish Phonetic AI", color: "from-amber-500 to-orange-500" },
  { label: "English Engineering Prompts", color: "from-cyan-500 to-blue-500" },
  { label: "Google Gemini 2.0 Flash (Free)", color: "from-emerald-500 to-teal-500" },
  { label: "OpenRouter Multi-Model Gateway", color: "from-violet-500 to-purple-600" },
  { label: "Groq Cloud Llama 3.3 (500 T/s)", color: "from-pink-500 to-rose-500" },
  { label: "Ollama 100% Offline Local", color: "from-yellow-500 to-amber-500" },
  { label: "100% BYOK & Zero Middleman", color: "from-teal-500 to-emerald-600" },
  { label: "3 Modes Architecture (BUILD / PLAN / CHAT)", color: "from-indigo-500 to-cyan-500" },
  { label: "TypeScript & Node.js 18+", color: "from-blue-500 to-indigo-600" },
  { label: "Zero Cost & Privacy First", color: "from-emerald-400 to-teal-500" },
  { label: "Made in Bangladesh", color: "from-red-500 to-emerald-600" },
];

export default function Hero() {
  const { t } = useApp();
  const [activePM, setActivePM] = useState<"npm" | "npx" | "pnpm" | "bun">("npm");
  const [copied, setCopied] = useState(false);

  const pmCommands: Record<string, string> = {
    npm: "npm install -g banglacli",
    npx: "npx banglacli",
    pnpm: "pnpm add -g banglacli",
    bun: "bun add -d banglacli",
  };

  const pmStyles = {
    npm: "bg-rose-500 text-white border-rose-500 shadow-sm shadow-rose-500/40",
    npx: "bg-amber-500 text-slate-950 border-amber-500 shadow-sm shadow-amber-500/40",
    pnpm: "bg-emerald-600 text-white border-emerald-600 shadow-sm shadow-emerald-600/40",
    bun: "bg-cyan-600 text-white border-cyan-600 shadow-sm shadow-cyan-600/40",
  };

  const copyCommand = () => {
    const text = pmCommands[activePM];
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="pt-16 pb-12 md:pt-28 md:pb-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Multi-Color Badge */}
        <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-rose-200/90 dark:border-rose-500/30 bg-gradient-to-r from-rose-50 via-amber-50 to-emerald-50 dark:from-rose-500/10 dark:via-amber-500/10 dark:to-emerald-500/10 text-xs sm:text-sm font-semibold mb-8 hover:scale-105 transition-all shadow-sm shadow-slate-200/60 dark:shadow-none cursor-pointer">
          <span className="flex h-2.5 w-2.5 rounded-full bg-rose-500 animate-ping"></span>
          <span className="text-slate-800 dark:text-slate-200 font-semibold">{t.hero.badge}</span>
          <span className="text-slate-300 dark:text-slate-600">•</span>
          <span className="bg-gradient-to-r from-amber-600 to-emerald-600 dark:from-amber-400 dark:to-emerald-400 bg-clip-text text-transparent font-mono font-bold">
            100% BYOK
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
        </div>

        {/* Monumental Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.12] sm:leading-[1.08] max-w-5xl mx-auto">
          {t.hero.titlePart1}
          <span className="text-gradient-coral-gold font-bengali">{t.hero.titleBn}</span>
          {t.hero.titlePart2}
          <span className="text-gradient-emerald-cyan">{t.hero.titleBanglish}</span>
          {t.hero.titlePart3}
          <span className="text-gradient-violet-rose">{t.hero.titleEn}</span>
          {t.hero.titleEnd}
        </h1>

        {/* Subtitle */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-2">
          {t.hero.subtitle}
        </p>

        {/* Rainbow Border Install Box */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="rainbow-border-box shadow-xl shadow-slate-200/60 dark:shadow-rose-950/40">
            <div className="bg-white dark:bg-[#080d1a] rounded-[21px] p-2.5 sm:p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 border border-slate-100 dark:border-white/5">
              
              {/* PM Switcher Tabs */}
              <div className="flex items-center gap-1.5 bg-slate-100/90 dark:bg-black/50 p-1.5 rounded-xl w-full sm:w-auto justify-center border border-slate-200/80 dark:border-white/5">
                {(["npm", "npx", "pnpm", "bun"] as const).map((pm) => (
                  <button
                    key={pm}
                    onClick={() => setActivePM(pm)}
                    className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all border ${
                      activePM === pm
                        ? pmStyles[pm]
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white bg-transparent border-transparent"
                    }`}
                  >
                    {pm}
                  </button>
                ))}
              </div>

              {/* Command Text */}
              <div className="flex items-center gap-2 font-mono text-sm text-slate-800 dark:text-slate-200 overflow-x-auto py-1 px-2 w-full sm:w-auto">
                <span className="text-emerald-600 dark:text-emerald-400 select-none font-extrabold">$</span>
                <span className="text-slate-900 dark:text-white font-bold whitespace-nowrap">
                  {pmCommands[activePM]}
                </span>
              </div>

              {/* Copy Button */}
              <button
                onClick={copyCommand}
                className="btn-emerald-glow px-5 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 shrink-0 w-full sm:w-auto justify-center shadow-md transition-all active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>{t.hero.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-white" />
                    <span>{t.hero.copyCmd}</span>
                  </>
                )}
              </button>

            </div>
          </div>
          
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-3 text-xs font-mono font-semibold">
            <span className="text-emerald-700 dark:text-emerald-400">● Node.js 18+</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-amber-700 dark:text-amber-400">● Free Google Gemini</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-cyan-700 dark:text-cyan-400">● OpenRouter Free Tier</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-rose-700 dark:text-rose-400">● 100% BYOK</span>
          </div>
        </div>

        {/* Hero CTA Buttons */}
        <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <Link
            href="#simulator"
            className="w-full sm:w-auto btn-aurora-glow px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-extrabold flex items-center justify-center gap-3 shadow-xl shadow-rose-500/25 hover:scale-105 active:scale-95 transition-all text-center"
          >
            <Terminal className="w-5 h-5 text-white" />
            <span>{t.hero.trySimulator}</span>
          </Link>
          <Link
            href="#modes"
            className="w-full sm:w-auto btn-porcelain px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold flex items-center justify-center gap-3 border-2 border-slate-200 dark:border-white/10 hover:border-slate-300 shadow-sm hover:scale-105 active:scale-95 transition-all text-center"
          >
            <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <span>{t.hero.exploreModes}</span>
          </Link>
        </div>

        {/* Metrics Row in 4 Unique Colors */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto pt-8 sm:pt-10 border-t border-slate-200 dark:border-white/10">
          <div className="glass-card p-4 sm:p-5 rounded-2xl text-center border-rose-200/80 dark:border-rose-500/20 bg-rose-50/30 dark:bg-rose-500/[0.03] hover:border-rose-400 transition-all">
            <div className="text-2xl sm:text-3xl font-black text-rose-600 dark:text-rose-400 font-mono">{t.hero.metricByok}</div>
            <div className="text-[10px] sm:text-xs text-rose-800 dark:text-rose-200/80 mt-1 font-bold uppercase tracking-wider">
              {t.hero.metricByokLabel}
            </div>
          </div>
          <div className="glass-card p-4 sm:p-5 rounded-2xl text-center border-emerald-200/80 dark:border-emerald-500/20 bg-emerald-50/30 dark:bg-emerald-500/[0.03] hover:border-emerald-400 transition-all">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono">{t.hero.metricLang}</div>
            <div className="text-[10px] sm:text-xs text-emerald-800 dark:text-emerald-200/80 mt-1 font-bengali font-bold">
              {t.hero.metricLangLabel}
            </div>
          </div>
          <div className="glass-card p-4 sm:p-5 rounded-2xl text-center border-cyan-200/80 dark:border-cyan-500/20 bg-cyan-50/30 dark:bg-cyan-500/[0.03] hover:border-cyan-400 transition-all">
            <div className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 font-mono">{t.hero.metricModes}</div>
            <div className="text-[10px] sm:text-xs text-cyan-800 dark:text-cyan-200/80 mt-1 font-bold uppercase tracking-wider">
              {t.hero.metricModesLabel}
            </div>
          </div>
          <div className="glass-card p-4 sm:p-5 rounded-2xl text-center border-amber-200/80 dark:border-amber-500/20 bg-amber-50/30 dark:bg-amber-500/[0.03] hover:border-amber-400 transition-all">
            <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 font-mono">{t.hero.metricCost}</div>
            <div className="text-[10px] sm:text-xs text-amber-800 dark:text-amber-200/80 mt-1 font-bold uppercase tracking-wider">
              {t.hero.metricCostLabel}
            </div>
          </div>
        </div>

      </div>

      {/* Infinite Tech Marquee */}
      <div className="mt-16 overflow-hidden border-y border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-black/40 py-4 backdrop-blur-md">
        <div className="animate-marquee flex w-max gap-4">
          {[...techMarquee, ...techMarquee].map((m, i) => (
            <span
              key={i}
              className="flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-5 py-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap shadow-xs hover:border-slate-300 dark:hover:border-white/20 transition-all"
            >
              <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${m.color}`} />
              <span>{m.label}</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
