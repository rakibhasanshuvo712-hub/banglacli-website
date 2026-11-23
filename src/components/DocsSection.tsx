"use client";

import React, { useState } from "react";
import { BookOpen, Copy, Check, Terminal } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function DocsSection() {
  const { t } = useApp();
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <section id="quickstart" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-200 dark:border-rose-500/30 bg-rose-50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs">
          <BookOpen className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
          <span>{t.docs.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
          {t.docs.heading}
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
          {t.docs.subheading}
        </p>
      </div>

      {/* 3 Quick Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        
        {/* Step 1: Coral/Rose */}
        <div className="glass-card glow-card-coral p-7 rounded-3xl relative border border-slate-200 dark:border-rose-500/20 shadow-sm hover:shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-500 text-white font-black font-mono text-lg flex items-center justify-center mb-5 shadow-md shadow-rose-500/25">
            1
          </div>
          <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2">{t.docs.step1Title}</h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-5 leading-relaxed">
            {t.docs.step1Desc}
          </p>
          <div className="bg-slate-50 dark:bg-black/50 p-3.5 rounded-xl border border-rose-200 dark:border-rose-500/30 font-mono text-xs text-rose-900 dark:text-rose-300 flex items-center justify-between">
            <span className="font-bold text-rose-600 dark:text-rose-400">npm install -g banglacli</span>
            <button
              onClick={() => copy("npm install -g banglacli")}
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-1"
              title="Copy"
            >
              {copiedCmd === "npm install -g banglacli" ? (
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Step 2: Solar Amber/Gold */}
        <div className="glass-card glow-card-amber p-7 rounded-3xl relative border border-slate-200 dark:border-amber-500/20 shadow-sm hover:shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-emerald-500 text-slate-950 font-black font-mono text-lg flex items-center justify-center mb-5 shadow-md shadow-amber-500/25">
            2
          </div>
          <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2">{t.docs.step2Title}</h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-5 leading-relaxed">
            {t.docs.step2Desc}
          </p>
          <div className="bg-slate-50 dark:bg-black/50 p-3.5 rounded-xl border border-amber-200 dark:border-amber-500/30 font-mono text-xs text-amber-900 dark:text-amber-300 flex items-center justify-between">
            <span className="font-bold text-amber-600 dark:text-amber-400">banglacli</span>
            <button
              onClick={() => copy("banglacli")}
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-1"
              title="Copy"
            >
              {copiedCmd === "banglacli" ? (
                <Check className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Step 3: Spring Jade/Emerald */}
        <div className="glass-card glow-card-emerald p-7 rounded-3xl relative border border-slate-200 dark:border-emerald-500/20 shadow-sm hover:shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white font-black font-mono text-lg flex items-center justify-center mb-5 shadow-md shadow-emerald-500/25">
            3
          </div>
          <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2">{t.docs.step3Title}</h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-5 leading-relaxed">
            {t.docs.step3Desc}
          </p>
          <div className="bg-slate-50 dark:bg-black/50 p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-500/30 font-mono text-xs text-emerald-900 dark:text-emerald-300 font-bengali">
            <span className="font-bold text-emerald-600 dark:text-emerald-400">&gt; একটি Todo App বানাও React দিয়ে</span>
          </div>
        </div>

      </div>

      {/* Command Table */}
      <div className="glass-panel rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl">
        <div className="p-6 border-b border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.02] flex items-center justify-between">
          <h3 className="font-bold text-slate-950 dark:text-white text-lg flex items-center gap-2.5">
            <Terminal className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>Command &amp; Slash Command Reference</span>
          </h3>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono font-bold bg-slate-200/60 dark:bg-white/10 px-2.5 py-1 rounded-full">v1.2.0</span>
        </div>
        <div className="overflow-x-auto -webkit-overflow-scrolling-touch pb-2">
          <table className="w-full min-w-[500px] text-left font-mono text-xs sm:text-sm">
            <thead className="bg-slate-50 dark:bg-white/[0.02] text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-white/5 font-semibold">
              <tr>
                <th className="p-4">Command</th>
                <th className="p-4">Type</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
              <tr className="hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-emerald-700 dark:text-emerald-400 font-bold">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30">banglacli</span>
                </td>
                <td className="p-4 text-slate-500 dark:text-slate-400 font-medium">Terminal CLI</td>
                <td className="p-4">Starts the trilingual interactive coding session.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-amber-700 dark:text-amber-400 font-bold">
                  <span className="px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30">banglacli config</span>
                </td>
                <td className="p-4 text-slate-500 dark:text-slate-400 font-medium">Terminal CLI</td>
                <td className="p-4">Runs the interactive setup wizard to select provider &amp; key.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-cyan-700 dark:text-cyan-400 font-bold">
                  <span className="px-2.5 py-1 rounded-md bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30">banglacli list-models</span>
                </td>
                <td className="p-4 text-slate-500 dark:text-slate-400 font-medium">Terminal CLI</td>
                <td className="p-4">Displays free Gemini &amp; OpenRouter models with token context limits.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-fuchsia-700 dark:text-fuchsia-400 font-bold">
                  <span className="px-2.5 py-1 rounded-md bg-fuchsia-50 dark:bg-fuchsia-500/10 border border-fuchsia-200 dark:border-fuchsia-500/30">/mode, /build, /plan, /chat</span>
                </td>
                <td className="p-4 text-slate-500 dark:text-slate-400 font-medium">Chat Slash Command</td>
                <td className="p-4">Cycles or switches directly between 3 Modes: BUILD, PLAN, and CHAT.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-violet-700 dark:text-violet-400 font-bold">
                  <span className="px-2.5 py-1 rounded-md bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/30">/model</span>
                </td>
                <td className="p-4 text-slate-500 dark:text-slate-400 font-medium">Chat Slash Command</td>
                <td className="p-4">Interactive menu to switch the active AI model on the fly.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-rose-700 dark:text-rose-400 font-bold">
                  <span className="px-2.5 py-1 rounded-md bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30">/clear</span>
                </td>
                <td className="p-4 text-slate-500 dark:text-slate-400 font-medium">Chat Slash Command</td>
                <td className="p-4">Clears the conversation context window and terminal screen.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-orange-700 dark:text-orange-400 font-bold">
                  <span className="px-2.5 py-1 rounded-md bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/30">/exit, /quit</span>
                </td>
                <td className="p-4 text-slate-500 dark:text-slate-400 font-medium">Chat Slash Command</td>
                <td className="p-4">Safely terminates the session and returns to normal terminal.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
