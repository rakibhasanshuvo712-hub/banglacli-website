import React from "react";
import { Layers, Key, Wrench, ShieldCheck, Sliders, Cpu } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-lg shadow-cyan-950/30">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>Autonomous Superpowers</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Engineered for Bengali Developers Worldwide
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          No rigid syntax or robotic translation. BanglaCLI speaks your everyday programming dialect — technical terms, Banglish phonetics, and clean English specifications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Feature 1: Crimson / Coral */}
        <div className="glass-card glow-card-coral p-7 sm:p-8 rounded-3xl group border-rose-500/25 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-red-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-rose-950/50">
            <span className="text-2xl">🇧🇩</span>
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-400 block mb-1">
            Trilingual Core
          </span>
          <h3 className="text-xl font-bold text-white mb-2.5">
            Native Trilingual Comprehension
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-5">
            Type naturally in proper বাংলা (<span className="font-bengali text-rose-300 font-semibold">&quot;একটি auth middleware বানাও&quot;</span>), Banglish (<span className="text-amber-300 font-semibold">&quot;ekta mongo schema banai daw&quot;</span>), or English. BanglaCLI responds in the same language.
          </p>
          <div className="bg-black/50 rounded-xl p-3 font-mono text-xs text-rose-200 border border-rose-500/20">
            <span className="text-rose-400 font-bold">&gt;</span> <span className="font-bengali">&quot;React-এ একটা ড্রপডাউন মেনু বানাও&quot;</span>
          </div>
        </div>

        {/* Feature 2: Emerald / Mint */}
        <div className="glass-card glow-card-emerald p-7 sm:p-8 rounded-3xl group border-emerald-500/25 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-950/50">
            <Layers className="w-7 h-7 text-emerald-400" />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-1">
            Dual Architecture
          </span>
          <h3 className="text-xl font-bold text-white mb-2.5">
            OpenCode Dual Modes
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-5">
            Switch effortlessly between <strong className="text-emerald-300">⚡ BUILD Mode</strong> (creates files, installs packages, runs tests) and <strong className="text-teal-300">📋 PLAN Mode</strong> (read-only architectural audit without editing files).
          </p>
          <div className="bg-black/50 rounded-xl p-3 font-mono text-xs text-emerald-200 border border-emerald-500/20 flex items-center justify-between">
            <span className="text-emerald-400 font-bold">/plan</span>
            <span className="text-slate-400">Safe Read-Only Architectural Audit</span>
          </div>
        </div>

        {/* Feature 3: Solar Amber / Gold */}
        <div className="glass-card glow-card-amber p-7 sm:p-8 rounded-3xl group border-amber-500/25 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-amber-950/50">
            <Key className="w-7 h-7 text-amber-400" />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 block mb-1">
            Privacy First
          </span>
          <h3 className="text-xl font-bold text-white mb-2.5">
            100% BYOK &amp; Serverless
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-5">
            Zero middleman backend and zero tracking. Your API keys are encrypted locally on your operating system via <code className="text-amber-300">conf</code>. All requests travel directly to the provider.
          </p>
          <div className="bg-black/50 rounded-xl p-3 font-mono text-xs text-amber-200 border border-amber-500/20">
            <span>🔒 Direct Client-to-API • 0 Telemetry</span>
          </div>
        </div>

        {/* Feature 4: Electric Cyan / Cerulean */}
        <div className="glass-card glow-card-cyan p-7 sm:p-8 rounded-3xl group border-cyan-500/25 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-950/50">
            <Wrench className="w-7 h-7 text-cyan-400" />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 block mb-1">
            Autonomous Engine
          </span>
          <h3 className="text-xl font-bold text-white mb-2.5">
            4 Autonomous Native Tools
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-5">
            Equipped with <code className="text-cyan-300">list_files</code>, <code className="text-cyan-300">read_file</code>, <code className="text-cyan-300">write_file</code>, and <code className="text-cyan-300">run_command</code> to construct whole applications end-to-end.
          </p>
          <div className="bg-black/50 rounded-xl p-3 font-mono text-xs text-cyan-200 border border-cyan-500/20">
            <span>🛠️ Complete Full-Stack Scaffolding</span>
          </div>
        </div>

        {/* Feature 5: Hot Coral / Fuchsia */}
        <div className="glass-card glow-card-fuchsia p-7 sm:p-8 rounded-3xl group border-pink-500/25 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-rose-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-pink-950/50">
            <ShieldCheck className="w-7 h-7 text-pink-400" />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-pink-400 block mb-1">
            Zero Damage
          </span>
          <h3 className="text-xl font-bold text-white mb-2.5">
            Zero-Damage Safety Guardrails
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-5">
            Never worry about accidental file destruction. Before writing files or executing shell commands, BanglaCLI pauses for explicit user confirmation <code className="text-pink-300">[Y/n/a]</code>.
          </p>
          <div className="bg-black/50 rounded-xl p-3 font-mono text-xs text-pink-200 border border-pink-500/20">
            <span>[CONFIRM] Execute &apos;npm install&apos; [Y/n/a]:</span>
          </div>
        </div>

        {/* Feature 6: Royal Violet / Purple */}
        <div className="glass-card glow-card-violet p-7 sm:p-8 rounded-3xl group border-violet-500/25 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-violet-950/50">
            <Sliders className="w-7 h-7 text-violet-400" />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-violet-400 block mb-1">
            Realtime UX
          </span>
          <h3 className="text-xl font-bold text-white mb-2.5">
            Live Status Bar &amp; Commands
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-5">
            Always view your active mode, model, and provider directly above the prompt. Switch models instantly with <code className="text-violet-300">/model</code> and reconfigure keys with <code className="text-violet-300">/config</code>.
          </p>
          <div className="bg-black/50 rounded-xl p-3 font-mono text-xs text-violet-200 border border-violet-500/20">
            <span>[⚡ BUILD MODE] [🤖 openrouter/free]</span>
          </div>
        </div>

      </div>

    </section>
  );
}
