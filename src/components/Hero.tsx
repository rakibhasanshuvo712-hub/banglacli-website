"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Copy, Check, Terminal, Layers, Sparkles } from "lucide-react";

const techMarquee = [
  { label: "বাংলা লিপি (Bangla Native)", color: "from-rose-500 to-red-500" },
  { label: "Banglish Phonetic AI", color: "from-amber-400 to-orange-500" },
  { label: "English Engineering Prompts", color: "from-cyan-400 to-blue-500" },
  { label: "Google Gemini 2.0 Flash (Free)", color: "from-emerald-400 to-teal-500" },
  { label: "OpenRouter Multi-Model Gateway", color: "from-violet-500 to-purple-600" },
  { label: "Groq Cloud Llama 3.3 (500 T/s)", color: "from-pink-500 to-rose-500" },
  { label: "Ollama 100% Offline Local", color: "from-yellow-400 to-amber-500" },
  { label: "100% BYOK & Zero Middleman", color: "from-teal-400 to-emerald-500" },
  { label: "OpenCode Dual Modes (BUILD / PLAN)", color: "from-indigo-400 to-cyan-400" },
  { label: "TypeScript & Node.js 18+", color: "from-blue-400 to-indigo-500" },
  { label: "Zero Cost & Privacy First", color: "from-emerald-300 to-lime-400" },
  { label: "Next.js 15 & React 19 Web", color: "from-fuchsia-400 to-pink-500" },
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
    npm: "bg-rose-500/20 text-rose-300 border-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.3)]",
    npx: "bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.3)]",
    pnpm: "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]",
    bun: "bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]",
  };

  const copyCommand = () => {
    const text = pmCommands[activePM];
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="pt-20 pb-12 md:pt-32 md:pb-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Multi-Color Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-rose-500/30 bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-emerald-500/10 text-xs sm:text-sm font-semibold mb-8 hover:scale-105 transition-all shadow-lg shadow-rose-950/30 cursor-pointer">
          <span className="flex h-2.5 w-2.5 rounded-full bg-rose-500 animate-ping"></span>
          <span className="text-white font-medium">🇧🇩 The Trilingual AI Coding Agent</span>
          <span className="text-slate-500">•</span>
          <span className="bg-gradient-to-r from-amber-300 to-emerald-300 bg-clip-text text-transparent font-mono font-bold">
            100% BYOK &amp; Serverless
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        </div>

        {/* Monumental Headline with Distinct Colors for each language */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] max-w-5xl mx-auto">
          Code Faster in{" "}
          <span className="text-gradient-coral-gold font-bengali">বাংলা</span>,{" "}
          <span className="text-gradient-emerald-cyan">Banglish</span> &amp;{" "}
          <span className="text-gradient-violet-rose">English</span>{" "}
          Directly in Your Terminal.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          <strong>BanglaCLI</strong> is an open-source, serverless AI coding agent designed from the ground up for Bengali developers worldwide. Equipped with{" "}
          <span className="text-emerald-400 font-semibold">OpenCode-style Build &amp; Plan modes</span>, 4 autonomous file tools, and zero-cost free model integrations.
        </p>

        {/* Rainbow Border Install Box */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="rainbow-border-box shadow-2xl shadow-rose-950/40">
            <div className="bg-[#080d1a] rounded-[18px] p-2.5 sm:p-3 flex flex-col sm:flex-row items-center justify-between gap-3">
              
              {/* PM Switcher Tabs in Unique Colors */}
              <div className="flex items-center gap-1.5 bg-black/50 p-1.5 rounded-xl w-full sm:w-auto justify-center border border-white/5">
                {(["npm", "npx", "pnpm", "bun"] as const).map((pm) => (
                  <button
                    key={pm}
                    onClick={() => setActivePM(pm)}
                    className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all border ${
                      activePM === pm
                        ? pmStyles[pm]
                        : "text-slate-400 hover:text-white border-transparent"
                    }`}
                  >
                    {pm}
                  </button>
                ))}
              </div>

              {/* Command Text */}
              <div className="flex items-center gap-2 font-mono text-sm text-slate-200 overflow-x-auto py-1 px-2 w-full sm:w-auto">
                <span className="text-emerald-400 select-none font-bold">$</span>
                <span className="text-white font-semibold whitespace-nowrap">
                  {pmCommands[activePM]}
                </span>
              </div>

              {/* Copy Button */}
              <button
                onClick={copyCommand}
                className="btn-prism px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shrink-0 w-full sm:w-auto justify-center shadow-lg"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>

            </div>
          </div>
          
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <span className="text-emerald-400">● Node.js 18+</span>
            <span className="text-slate-600">•</span>
            <span className="text-amber-400">● Free Google Gemini</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400">● OpenRouter Free Tier</span>
            <span className="text-slate-600">•</span>
            <span className="text-rose-400">● 100% BYOK</span>
          </div>
        </div>

        {/* Hero CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#simulator"
            className="btn-prism px-8 py-4 rounded-2xl text-base font-bold flex items-center gap-2.5 shadow-xl shadow-emerald-950/40"
          >
            <Terminal className="w-5 h-5" />
            <span>Try Live Terminal Simulator</span>
          </Link>
          <Link
            href="#modes"
            className="btn-glass px-8 py-4 rounded-2xl text-base font-medium flex items-center gap-2.5 hover:border-violet-500/40"
          >
            <Layers className="w-5 h-5 text-cyan-400" />
            <span>Explore BUILD vs PLAN Modes</span>
          </Link>
        </div>

        {/* Metrics Row in 4 Unique Colors */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-10 border-t border-white/[0.08]">
          <div className="glass-card p-5 rounded-2xl text-center border-rose-500/20 bg-rose-500/[0.03] hover:border-rose-500/50 transition-all">
            <div className="text-3xl font-black text-rose-400 font-mono">100%</div>
            <div className="text-xs text-rose-200/80 mt-1 font-semibold uppercase tracking-wider">
              BYOK &amp; Serverless
            </div>
          </div>
          <div className="glass-card p-5 rounded-2xl text-center border-emerald-500/20 bg-emerald-500/[0.03] hover:border-emerald-500/50 transition-all">
            <div className="text-3xl font-black text-emerald-400 font-mono">3 Languages</div>
            <div className="text-xs text-emerald-200/80 mt-1 font-bengali font-semibold">
              বাংলা, Banglish, English
            </div>
          </div>
          <div className="glass-card p-5 rounded-2xl text-center border-cyan-500/20 bg-cyan-500/[0.03] hover:border-cyan-500/50 transition-all">
            <div className="text-3xl font-black text-cyan-400 font-mono">2 Modes</div>
            <div className="text-xs text-cyan-200/80 mt-1 font-semibold uppercase tracking-wider">
              ⚡ BUILD &amp; 📋 PLAN
            </div>
          </div>
          <div className="glass-card p-5 rounded-2xl text-center border-amber-500/20 bg-amber-500/[0.03] hover:border-amber-500/50 transition-all">
            <div className="text-3xl font-black text-amber-400 font-mono">0 BDT / $0</div>
            <div className="text-xs text-amber-200/80 mt-1 font-semibold uppercase tracking-wider">
              Free Tiers Included
            </div>
          </div>
        </div>

      </div>

      {/* Infinite Multi-Color Tech Marquee */}
      <div className="mt-16 overflow-hidden border-y border-white/10 bg-black/40 py-4 backdrop-blur-md">
        <div className="animate-marquee flex w-max gap-4">
          {[...techMarquee, ...techMarquee].map((m, i) => (
            <span
              key={i}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs sm:text-sm font-semibold text-slate-200 whitespace-nowrap shadow-sm hover:border-white/20 transition-all"
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
