"use client";

import React from "react";
import { Layers, Key, Wrench, ShieldCheck, Sliders, Cpu } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Features() {
  const { t } = useApp();

  return (
    <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-200 dark:border-cyan-500/30 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Cpu className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>{t.features.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
          {t.features.heading}
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
          {t.features.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Feature 1: Crimson / Coral */}
        <div className="glass-card glow-card-coral p-7 sm:p-8 rounded-3xl group border-slate-200 dark:border-rose-500/25 relative overflow-hidden shadow-sm hover:shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-100 to-red-50 dark:from-rose-500/20 dark:to-red-500/10 border border-rose-200 dark:border-rose-500/30 flex items-center justify-center text-rose-600 dark:text-rose-400 mb-6 group-hover:scale-110 transition-transform shadow-sm">
            <span className="text-2xl">🇧🇩</span>
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block mb-1">
            {t.features.card1Tag}
          </span>
          <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2.5">
            {t.features.card1Title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
            {t.features.card1Desc}
          </p>
          <div className="bg-slate-50 dark:bg-black/50 rounded-xl p-3 font-mono text-xs text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-500/20">
            <span className="text-rose-600 dark:text-rose-400 font-bold">&gt;</span> <span className="font-bengali">&quot;React-এ একটা ড্রপডাউন মেনু বানাও&quot;</span>
          </div>
        </div>

        {/* Feature 2: Emerald / Mint */}
        <div className="glass-card glow-card-emerald p-7 sm:p-8 rounded-3xl group border-slate-200 dark:border-emerald-500/25 relative overflow-hidden shadow-sm hover:shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-50 dark:from-emerald-500/20 dark:to-teal-500/10 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform shadow-sm">
            <Layers className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
            {t.features.card2Tag}
          </span>
          <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2.5">
            {t.features.card2Title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
            {t.features.card2Desc}
          </p>
          <div className="bg-slate-50 dark:bg-black/50 rounded-xl p-3 font-mono text-xs text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-between">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">/plan</span>
            <span className="text-slate-500 dark:text-slate-400">Safe Read-Only Audit</span>
          </div>
        </div>

        {/* Feature 3: Solar Amber / Gold */}
        <div className="glass-card glow-card-amber p-7 sm:p-8 rounded-3xl group border-slate-200 dark:border-amber-500/25 relative overflow-hidden shadow-sm hover:shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-50 dark:from-amber-500/20 dark:to-orange-500/10 border border-amber-200 dark:border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6 group-hover:scale-110 transition-transform shadow-sm">
            <Key className="w-7 h-7 text-amber-600 dark:text-amber-400" />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-1">
            {t.features.card3Tag}
          </span>
          <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2.5">
            {t.features.card3Title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
            {t.features.card3Desc}
          </p>
          <div className="bg-slate-50 dark:bg-black/50 rounded-xl p-3 font-mono text-xs text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-500/20">
            <span>⚡ Instant Zero-Key Start • Local .env / Ollama</span>
          </div>
        </div>

        {/* Feature 4: Electric Cyan / Cerulean */}
        <div className="glass-card glow-card-cyan p-7 sm:p-8 rounded-3xl group border-slate-200 dark:border-cyan-500/25 relative overflow-hidden shadow-sm hover:shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-50 dark:from-cyan-500/20 dark:to-blue-500/10 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 group-hover:scale-110 transition-transform shadow-sm">
            <Wrench className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 block mb-1">
            {t.features.card4Tag}
          </span>
          <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2.5">
            {t.features.card4Title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
            {t.features.card4Desc}
          </p>
          <div className="bg-slate-50 dark:bg-black/50 rounded-xl p-3 font-mono text-xs text-cyan-800 dark:text-cyan-200 border border-cyan-200 dark:border-cyan-500/20">
            <span>🛠️ 12 Native Tools + Local Mesh RPC</span>
          </div>
        </div>

        {/* Feature 5: Hot Coral / Fuchsia */}
        <div className="glass-card glow-card-fuchsia p-7 sm:p-8 rounded-3xl group border-slate-200 dark:border-pink-500/25 relative overflow-hidden shadow-sm hover:shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-50 dark:from-pink-500/20 dark:to-rose-500/10 border border-pink-200 dark:border-pink-500/30 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-6 group-hover:scale-110 transition-transform shadow-sm">
            <ShieldCheck className="w-7 h-7 text-pink-600 dark:text-pink-400" />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 block mb-1">
            {t.features.card5Tag}
          </span>
          <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2.5">
            {t.features.card5Title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
            {t.features.card5Desc}
          </p>
          <div className="bg-slate-50 dark:bg-black/50 rounded-xl p-3 font-mono text-xs text-pink-800 dark:text-pink-200 border border-pink-200 dark:border-pink-500/20">
            <span>📸 /image Vision Analysis • /undo Rollback</span>
          </div>
        </div>

        {/* Feature 6: Royal Violet / Purple */}
        <div className="glass-card glow-card-violet p-7 sm:p-8 rounded-3xl group border-slate-200 dark:border-violet-500/25 relative overflow-hidden shadow-sm hover:shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-50 dark:from-violet-500/20 dark:to-purple-500/10 border border-violet-200 dark:border-violet-500/30 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-6 group-hover:scale-110 transition-transform shadow-sm">
            <Sliders className="w-7 h-7 text-violet-600 dark:text-violet-400" />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 block mb-1">
            {t.features.card6Tag}
          </span>
          <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2.5">
            {t.features.card6Title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
            {t.features.card6Desc}
          </p>
          <div className="bg-slate-50 dark:bg-black/50 rounded-xl p-3 font-mono text-xs text-violet-800 dark:text-violet-200 border border-violet-200 dark:border-violet-500/20">
            <span>🔄 Auto-Cascade Active • 🌐 Local Mesh WS</span>
          </div>
        </div>

      </div>

    </section>
  );
}
