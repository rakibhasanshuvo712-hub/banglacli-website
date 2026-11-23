"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Copy, Check, Terminal, Layers, Sparkles } from "lucide-react";

const techMarquee = [
  { label: "বাংলা লিপি (Bangla Native)", color: "from-rose-500 to-red-500" },
  { label: "Banglish Phonetic AI", color: "from-amber-500 to-orange-500" },
  { label: "English Engineering Prompts", color: "from-cyan-500 to-blue-500" },
  { label: "Google Gemini 2.0 Flash (Free)", color: "from-emerald-500 to-teal-500" },
  { label: "OpenRouter Multi-Model Gateway", color: "from-violet-500 to-purple-600" },
  { label: "Groq Cloud Llama 3.3 (500 T/s)", color: "from-pink-500 to-rose-500" },
  { label: "Ollama 100% Offline Local", color: "from-yellow-500 to-amber-500" },
  { label: "100% BYOK & Zero Middleman", color: "from-teal-500 to-emerald-600" },
  { label: "OpenCode Dual Modes (BUILD / PLAN)", color: "from-indigo-500 to-cyan-500" },
  { label: "TypeScript & Node.js 18+", color: "from-blue-500 to-indigo-600" },
  { label: "Zero Cost & Privacy First", color: "from-emerald-400 to-teal-500" },
  { label: "Next.js 15 & React 19 Web", color: "from-fuchsia-500 to-pink-500" },
];

export default function Hero() {
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
        <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-rose-200/90 bg-gradient-to-r from-rose-50 via-amber-50 to-emerald-50 text-xs sm:text-sm font-semibold mb-8 hover:scale-105 transition-all shadow-sm shadow-slate-200/60 cursor-pointer">
          <span className="flex h-2.5 w-2.5 rounded-full bg-rose-500 animate-ping"></span>
          <span className="text-slate-800 font-semibold">🇧🇩 The Trilingual AI Coding Agent</span>
          <span className="text-slate-300">•</span>
          <span className="bg-gradient-to-r from-amber-600 to-emerald-600 bg-clip-text text-transparent font-mono font-bold">
            100% BYOK &amp; Serverless
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
        </div>

        {/* Monumental Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-[1.08] max-w-5xl mx-auto">
          Code Faster in{" "}
          <span className="text-gradient-coral-gold font-bengali">বাংলা</span>,{" "}
          <span className="text-gradient-emerald-cyan">Banglish</span> &amp;{" "}
          <span className="text-gradient-violet-rose">English</span>{" "}
          Directly in Your Terminal.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          <strong className="text-slate-900">BanglaCLI</strong> is an open-source, serverless AI coding agent designed from the ground up for Bengali developers worldwide. Equipped with{" "}
          <span className="text-emerald-600 font-bold">OpenCode-style Build &amp; Plan modes</span>, 4 autonomous file tools, and zero-cost free model integrations.
        </p>

        {/* Rainbow Border Install Box */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="rainbow-border-box shadow-xl shadow-slate-200/60">
            <div className="bg-white rounded-[21px] p-2.5 sm:p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 border border-slate-100">
              
              {/* PM Switcher Tabs in Vibrant Colors */}
              <div className="flex items-center gap-1.5 bg-slate-100/90 p-1.5 rounded-xl w-full sm:w-auto justify-center border border-slate-200/80">
                {(["npm", "npx", "pnpm", "bun"] as const).map((pm) => (
                  <button
                    key={pm}
                    onClick={() => setActivePM(pm)}
                    className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all border ${
                      activePM === pm
                        ? pmStyles[pm]
                        : "text-slate-600 hover:text-slate-950 bg-transparent border-transparent"
                    }`}
                  >
                    {pm}
                  </button>
                ))}
              </div>

              {/* Command Text */}
              <div className="flex items-center gap-2 font-mono text-sm text-slate-800 overflow-x-auto py-1 px-2 w-full sm:w-auto">
                <span className="text-emerald-600 select-none font-extrabold">$</span>
                <span className="text-slate-900 font-bold whitespace-nowrap">
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
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-white" />
                    <span>Copy Command</span>
                  </>
                )}
              </button>

            </div>
          </div>
          
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-3 text-xs font-mono font-semibold">
            <span className="text-emerald-700">● Node.js 18+</span>
            <span className="text-slate-300">•</span>
            <span className="text-amber-700">● Free Google Gemini</span>
            <span className="text-slate-300">•</span>
            <span className="text-cyan-700">● OpenRouter Free Tier</span>
            <span className="text-slate-300">•</span>
            <span className="text-rose-700">● 100% BYOK</span>
          </div>
        </div>

        {/* Hero CTA Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#simulator"
            className="btn-aurora-glow px-8 py-4 rounded-2xl text-base font-extrabold flex items-center gap-3 shadow-xl shadow-rose-500/25 hover:scale-105 active:scale-95 transition-all"
          >
            <Terminal className="w-5 h-5 text-white" />
            <span>Try Live Terminal Simulator</span>
          </Link>
          <Link
            href="#modes"
            className="btn-porcelain px-8 py-4 rounded-2xl text-base font-bold flex items-center gap-3 border-2 border-slate-200 hover:border-slate-300 text-slate-800 shadow-sm hover:scale-105 active:scale-95 transition-all"
          >
            <Layers className="w-5 h-5 text-cyan-600" />
            <span>Explore BUILD vs PLAN Modes</span>
          </Link>
        </div>

        {/* Metrics Row in 4 Unique Colors */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-10 border-t border-slate-200">
          <div className="glass-card p-5 rounded-2xl text-center border-rose-200/80 bg-rose-50/30 hover:border-rose-400 transition-all">
            <div className="text-3xl font-black text-rose-600 font-mono">100%</div>
            <div className="text-xs text-rose-800 mt-1 font-bold uppercase tracking-wider">
              BYOK &amp; Serverless
            </div>
          </div>
          <div className="glass-card p-5 rounded-2xl text-center border-emerald-200/80 bg-emerald-50/30 hover:border-emerald-400 transition-all">
            <div className="text-3xl font-black text-emerald-600 font-mono">3 Languages</div>
            <div className="text-xs text-emerald-800 mt-1 font-bengali font-bold">
              বাংলা, Banglish, English
            </div>
          </div>
          <div className="glass-card p-5 rounded-2xl text-center border-cyan-200/80 bg-cyan-50/30 hover:border-cyan-400 transition-all">
            <div className="text-3xl font-black text-cyan-600 font-mono">2 Modes</div>
            <div className="text-xs text-cyan-800 mt-1 font-bold uppercase tracking-wider">
              ⚡ BUILD &amp; 📋 PLAN
            </div>
          </div>
          <div className="glass-card p-5 rounded-2xl text-center border-amber-200/80 bg-amber-50/30 hover:border-amber-400 transition-all">
            <div className="text-3xl font-black text-amber-600 font-mono">0 BDT / $0</div>
            <div className="text-xs text-amber-800 mt-1 font-bold uppercase tracking-wider">
              Free Tiers Included
            </div>
          </div>
        </div>

      </div>

      {/* Infinite Multi-Color Tech Marquee */}
      <div className="mt-16 overflow-hidden border-y border-slate-200 bg-slate-50/70 py-4 backdrop-blur-md">
        <div className="animate-marquee flex w-max gap-4">
          {[...techMarquee, ...techMarquee].map((m, i) => (
            <span
              key={i}
              className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2 text-xs sm:text-sm font-semibold text-slate-700 whitespace-nowrap shadow-xs hover:border-slate-300 transition-all"
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
