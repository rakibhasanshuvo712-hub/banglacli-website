"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Copy, Check, Terminal, Layers, Sparkles } from "lucide-react";

export default function Hero() {
  const [activePM, setActivePM] = useState<"npm" | "npx" | "pnpm" | "bun">("npm");
  const [copied, setCopied] = useState(false);

  const pmCommands: Record<string, string> = {
    npm: "npm install -g banglacli",
    npx: "npx banglacli",
    pnpm: "pnpm add -g banglacli",
    bun: "bun add -d banglacli",
  };

  const copyCommand = () => {
    const text = pmCommands[activePM];
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative z-10">
      
      {/* Top Announcement Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full badge-neon text-xs sm:text-sm font-semibold mb-8 hover:scale-105 transition-all cursor-pointer">
        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span className="text-white">🇧🇩 The Trilingual AI Coding Agent</span>
        <span className="text-slate-500">•</span>
        <span className="text-emerald-400 font-mono">100% BYOK &amp; Serverless</span>
        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
      </div>

      {/* Monumental Headline */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-5xl mx-auto">
        Code Faster in <span className="shimmer-text">বাংলা, Banglish</span> &amp;{" "}
        <span className="text-white">English</span> Directly in Your Terminal.
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
        <strong>BanglaCLI</strong> is an open-source, serverless AI coding agent designed from the ground up for Bangladeshi and Bengali developers worldwide. Equipped with{" "}
        <span className="text-emerald-400 font-semibold">OpenCode-style Build &amp; Plan modes</span>, 4 autonomous file tools, and zero-cost free model integrations.
      </p>

      {/* Package Manager Box */}
      <div className="mt-10 max-w-2xl mx-auto">
        <div className="p-1 rounded-2xl bg-gradient-to-r from-emerald-500/40 via-cyan-500/30 to-violet-500/40 shadow-2xl shadow-emerald-950/60">
          <div className="bg-[#080c13] rounded-xl border border-white/10 p-2.5 sm:p-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* PM Switcher Tabs */}
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg w-full sm:w-auto justify-center">
              {(["npm", "npx", "pnpm", "bun"] as const).map((pm) => (
                <button
                  key={pm}
                  onClick={() => setActivePM(pm)}
                  className={`px-3 py-1 text-xs font-mono font-bold rounded transition-all ${
                    activePM === pm
                      ? "bg-emerald-400/20 text-emerald-400 border border-emerald-400/30"
                      : "text-slate-400 hover:text-white"
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
              className="btn-primary-neon px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 shrink-0 w-full sm:w-auto justify-center"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-black" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-black" />
                  <span>Copy</span>
                </>
              )}
            </button>

          </div>
        </div>
        <div className="mt-3 flex items-center justify-center gap-4 text-xs text-slate-400 font-mono">
          <span>✓ Node.js 18+</span>
          <span>•</span>
          <span>✓ Free Google Gemini &amp; OpenRouter</span>
          <span>•</span>
          <span>✓ Zero Cost</span>
        </div>
      </div>

      {/* Hero CTA Buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="#simulator"
          className="btn-primary-neon px-7 py-3.5 rounded-2xl text-base font-bold flex items-center gap-2.5 shadow-xl"
        >
          <Terminal className="w-5 h-5" />
          <span>Try Live Interactive Simulator</span>
        </Link>
        <Link
          href="#modes"
          className="btn-secondary-glass px-7 py-3.5 rounded-2xl text-base font-medium flex items-center gap-2.5"
        >
          <Layers className="w-5 h-5 text-emerald-400" />
          <span>Explore BUILD vs PLAN Modes</span>
        </Link>
      </div>

      {/* Metrics Row */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-10 border-t border-white/[0.08]">
        <div className="glass-card p-5 rounded-2xl text-center">
          <div className="text-3xl font-black text-white font-mono">100%</div>
          <div className="text-xs text-slate-400 mt-1 font-semibold uppercase tracking-wider">
            BYOK &amp; Serverless
          </div>
        </div>
        <div className="glass-card p-5 rounded-2xl text-center">
          <div className="text-3xl font-black text-emerald-400 font-mono">3 Languages</div>
          <div className="text-xs text-slate-400 mt-1 font-bengali font-semibold">
            বাংলা, Banglish, English
          </div>
        </div>
        <div className="glass-card p-5 rounded-2xl text-center">
          <div className="text-3xl font-black text-cyan-400 font-mono">2 Modes</div>
          <div className="text-xs text-slate-400 mt-1 font-semibold uppercase tracking-wider">
            ⚡ BUILD &amp; 📋 PLAN
          </div>
        </div>
        <div className="glass-card p-5 rounded-2xl text-center">
          <div className="text-3xl font-black text-amber-400 font-mono">0 BDT / $0</div>
          <div className="text-xs text-slate-400 mt-1 font-semibold uppercase tracking-wider">
            Free Tiers Included
          </div>
        </div>
      </div>

    </section>
  );
}
