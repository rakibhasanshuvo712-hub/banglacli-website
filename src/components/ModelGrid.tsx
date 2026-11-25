"use client";

import React from "react";
import { Zap, ExternalLink } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function ModelGrid() {
  const { t } = useApp();

  return (
    <section id="providers" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-500/30 bg-violet-50 dark:bg-violet-500/10 text-violet-800 dark:text-violet-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Zap className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>{t.models.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
          {t.models.heading}
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
          {t.models.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Google Gemini in Emerald Jade */}
        <div className="glass-card glow-card-emerald p-7 rounded-3xl flex flex-col justify-between border-slate-200 dark:border-emerald-500/30 shadow-sm hover:shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-bold border border-emerald-200 dark:border-emerald-500/30">
                Recommended
              </span>
              <span className="text-xs text-emerald-700 dark:text-emerald-400 font-mono font-bold">15 RPM Free</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-2">Google Gemini</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-5 leading-relaxed">
              Official SDK integration with Google&apos;s latest Gemini models featuring up to 1M token context windows. <strong className="text-emerald-700 dark:text-emerald-400">Zero-Key Starter available via Pollinations.ai</strong> — no API key needed.
            </p>
            <div className="space-y-2 font-mono text-xs text-slate-800 dark:text-slate-200 mb-6">
              <div className="bg-slate-50 dark:bg-black/50 p-3 rounded-xl border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-between">
                <span className="font-semibold">gemini-2.0-flash</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-100/60 dark:bg-emerald-500/20 px-2 py-0.5 rounded">Default</span>
              </div>
              <div className="bg-slate-50 dark:bg-black/50 p-3 rounded-xl border border-slate-200 dark:border-white/5 flex items-center justify-between">
                <span>gemini-1.5-flash</span>
                <span className="text-slate-500 font-medium">High speed</span>
              </div>
              <div className="bg-slate-50 dark:bg-black/50 p-3 rounded-xl border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-between">
                <span className="font-semibold">gemini-3.8-flash</span>
                <span className="text-cyan-700 dark:text-cyan-400 font-bold bg-cyan-100/60 dark:bg-cyan-500/20 px-2 py-0.5 rounded">Next-gen</span>
              </div>
            </div>
          </div>
          <a
            href="https://aistudio.google.com/apikey"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-emerald-glow w-full py-3.5 rounded-xl text-white font-extrabold text-center text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-500/25 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <span>Get Free Key (Google AI Studio)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* OpenRouter Free in Royal Violet */}
        <div className="glass-card glow-card-violet p-7 rounded-3xl flex flex-col justify-between border-slate-200 dark:border-violet-500/30 shadow-sm hover:shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 text-xs font-mono font-bold border border-violet-200 dark:border-violet-500/30">
                Multi-Model
              </span>
              <span className="text-xs text-violet-700 dark:text-violet-400 font-mono font-bold">Zero Downtime</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-2">OpenRouter Free Tier</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-5 leading-relaxed">
              Auto-routing free model aggregator with <strong className="text-violet-700 dark:text-violet-300">Dynamic Free Model Explorer</strong> — Particle-1, Nemotron, Gemma 4, and ERNIE models with Auto-Cascade for zero downtime.
            </p>
            <div className="space-y-2 font-mono text-xs text-slate-800 dark:text-slate-200 mb-6">
              <div className="bg-slate-50 dark:bg-black/50 p-3 rounded-xl border border-violet-200 dark:border-violet-500/20 flex items-center justify-between">
                <span className="font-semibold">openrouter/free</span>
                <span className="text-violet-700 dark:text-violet-400 font-bold bg-violet-100/60 dark:bg-violet-500/20 px-2 py-0.5 rounded">Auto Route</span>
              </div>
              <div className="bg-slate-50 dark:bg-black/50 p-3 rounded-xl border border-slate-200 dark:border-white/5 flex items-center justify-between">
                <span>particle-1:free</span>
                <span className="text-slate-500 font-medium">1M Context</span>
              </div>
              <div className="bg-slate-50 dark:bg-black/50 p-3 rounded-xl border border-fuchsia-200 dark:border-fuchsia-500/20 flex items-center justify-between">
                <span className="font-semibold">gemma-4-31b-it:free</span>
                <span className="text-fuchsia-700 dark:text-fuchsia-400 font-bold bg-fuchsia-100/60 dark:bg-fuchsia-500/20 px-2 py-0.5 rounded">Reasoning</span>
              </div>
            </div>
          </div>
          <a
            href="https://openrouter.ai/keys"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-violet-glow w-full py-3.5 rounded-xl text-white font-extrabold text-center text-xs flex items-center justify-center gap-2 shadow-md shadow-violet-500/25 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <span>Get Free Key (OpenRouter)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Custom / Groq / Ollama in Solar Amber */}
        <div className="glass-card glow-card-amber p-7 rounded-3xl flex flex-col justify-between border-slate-200 dark:border-amber-500/30 shadow-sm hover:shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-500/15 text-amber-800 dark:text-amber-300 text-xs font-mono font-bold border border-amber-200 dark:border-amber-500/30">
                Custom / Offline
              </span>
              <span className="text-xs text-amber-800 dark:text-amber-400 font-mono font-bold">100% Private</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-2">Groq, DeepSeek &amp; Ollama</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-5 leading-relaxed">
              Point BanglaCLI to any OpenAI-compatible API or run local models completely offline via Ollama. <strong className="text-amber-700 dark:text-amber-300">Auto-discovered on startup</strong> — no config needed.
            </p>
            <div className="space-y-2 font-mono text-xs text-slate-800 dark:text-slate-200 mb-6">
              <div className="bg-slate-50 dark:bg-black/50 p-3 rounded-xl border border-amber-200 dark:border-amber-500/20 flex items-center justify-between">
                <span className="font-semibold">Groq (Llama 3.3 70B)</span>
                <span className="text-amber-700 dark:text-amber-400 font-bold bg-amber-100/60 dark:bg-amber-500/20 px-2 py-0.5 rounded">500+ T/s</span>
              </div>
              <div className="bg-slate-50 dark:bg-black/50 p-3 rounded-xl border border-slate-200 dark:border-white/5 flex items-center justify-between">
                <span>Ollama Local</span>
                <span className="text-rose-700 dark:text-rose-400 font-bold bg-rose-100/60 dark:bg-rose-500/20 px-2 py-0.5 rounded">Offline</span>
              </div>
              <div className="bg-slate-50 dark:bg-black/50 p-3 rounded-xl border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-between">
                <span>DeepSeek Chat</span>
                <span className="text-cyan-700 dark:text-cyan-400 font-bold bg-cyan-100/60 dark:bg-cyan-500/20 px-2 py-0.5 rounded">API</span>
              </div>
            </div>
          </div>
          <a
            href="https://console.groq.com/keys"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber-glow w-full py-3.5 rounded-xl text-white font-extrabold text-center text-xs flex items-center justify-center gap-2 shadow-md shadow-amber-500/25 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <span>Get Free Key (Groq Cloud)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
