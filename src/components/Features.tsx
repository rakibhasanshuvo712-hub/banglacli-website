import React from "react";
import { Layers, Key, Wrench, ShieldCheck, Sliders, Cpu } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-200 bg-cyan-50 text-cyan-800 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Cpu className="w-3.5 h-3.5 text-cyan-600" />
          <span>Autonomous Superpowers</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Engineered for Bengali Developers Worldwide
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg">
          No rigid syntax or robotic translation. BanglaCLI speaks your everyday programming dialect — technical terms, Banglish phonetics, and clean English specifications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Feature 1: Crimson / Coral */}
        <div className="glass-card glow-card-coral p-7 sm:p-8 rounded-3xl group border-slate-200 bg-white relative overflow-hidden shadow-sm hover:shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-100 to-red-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
            <span className="text-2xl">🇧🇩</span>
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-600 block mb-1">
            Trilingual Core
          </span>
          <h3 className="text-xl font-bold text-slate-950 mb-2.5">
            Native Trilingual Comprehension
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-5">
            Type naturally in proper বাংলা (<span className="font-bengali text-rose-700 font-semibold">&quot;একটি auth middleware বানাও&quot;</span>), Banglish (<span className="text-amber-700 font-semibold">&quot;ekta mongo schema banai daw&quot;</span>), or English. BanglaCLI responds in the same language.
          </p>
          <div className="bg-slate-50 rounded-xl p-3 font-mono text-xs text-rose-800 border border-rose-200">
            <span className="text-rose-600 font-bold">&gt;</span> <span className="font-bengali">&quot;React-এ একটা ড্রপডাউন মেনু বানাও&quot;</span>
          </div>
        </div>

        {/* Feature 2: Emerald / Mint */}
        <div className="glass-card glow-card-emerald p-7 sm:p-8 rounded-3xl group border-slate-200 bg-white relative overflow-hidden shadow-sm hover:shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
            <Layers className="w-7 h-7 text-emerald-600" />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-1">
            Dual Architecture
          </span>
          <h3 className="text-xl font-bold text-slate-950 mb-2.5">
            OpenCode Dual Modes
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-5">
            Switch effortlessly between <strong className="text-emerald-700">⚡ BUILD Mode</strong> (creates files, installs packages, runs tests) and <strong className="text-teal-700">📋 PLAN Mode</strong> (read-only architectural audit without editing files).
          </p>
          <div className="bg-slate-50 rounded-xl p-3 font-mono text-xs text-emerald-800 border border-emerald-200 flex items-center justify-between">
            <span className="text-emerald-600 font-bold">/plan</span>
            <span className="text-slate-500">Safe Read-Only Audit</span>
          </div>
        </div>

        {/* Feature 3: Solar Amber / Gold */}
        <div className="glass-card glow-card-amber p-7 sm:p-8 rounded-3xl group border-slate-200 bg-white relative overflow-hidden shadow-sm hover:shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
            <Key className="w-7 h-7 text-amber-600" />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-600 block mb-1">
            Privacy First
          </span>
          <h3 className="text-xl font-bold text-slate-950 mb-2.5">
            100% BYOK &amp; Serverless
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-5">
            Zero middleman backend and zero tracking. Your API keys are encrypted locally on your operating system via <code className="text-amber-800 bg-amber-50 px-1 py-0.5 rounded">conf</code>. All requests travel directly to the provider.
          </p>
          <div className="bg-slate-50 rounded-xl p-3 font-mono text-xs text-amber-800 border border-amber-200">
            <span>🔒 Direct Client-to-API • 0 Telemetry</span>
          </div>
        </div>

        {/* Feature 4: Electric Cyan / Cerulean */}
        <div className="glass-card glow-card-cyan p-7 sm:p-8 rounded-3xl group border-slate-200 bg-white relative overflow-hidden shadow-sm hover:shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
            <Wrench className="w-7 h-7 text-cyan-600" />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-600 block mb-1">
            Autonomous Engine
          </span>
          <h3 className="text-xl font-bold text-slate-950 mb-2.5">
            4 Autonomous Native Tools
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-5">
            Equipped with <code className="text-cyan-800 bg-cyan-50 px-1 py-0.5 rounded">list_files</code>, <code className="text-cyan-800 bg-cyan-50 px-1 py-0.5 rounded">read_file</code>, <code className="text-cyan-800 bg-cyan-50 px-1 py-0.5 rounded">write_file</code>, and <code className="text-cyan-800 bg-cyan-50 px-1 py-0.5 rounded">run_command</code> to construct whole applications end-to-end.
          </p>
          <div className="bg-slate-50 rounded-xl p-3 font-mono text-xs text-cyan-800 border border-cyan-200">
            <span>🛠️ Complete Full-Stack Scaffolding</span>
          </div>
        </div>

        {/* Feature 5: Hot Coral / Fuchsia */}
        <div className="glass-card glow-card-fuchsia p-7 sm:p-8 rounded-3xl group border-slate-200 bg-white relative overflow-hidden shadow-sm hover:shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-50 border border-pink-200 flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
            <ShieldCheck className="w-7 h-7 text-pink-600" />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-pink-600 block mb-1">
            Zero Damage
          </span>
          <h3 className="text-xl font-bold text-slate-950 mb-2.5">
            Zero-Damage Safety Guardrails
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-5">
            Never worry about accidental file destruction. Before writing files or executing shell commands, BanglaCLI pauses for explicit user confirmation <code className="text-pink-800 bg-pink-50 px-1 py-0.5 rounded">[Y/n/a]</code>.
          </p>
          <div className="bg-slate-50 rounded-xl p-3 font-mono text-xs text-pink-800 border border-pink-200">
            <span>[CONFIRM] Execute &apos;npm install&apos; [Y/n/a]:</span>
          </div>
        </div>

        {/* Feature 6: Royal Violet / Purple */}
        <div className="glass-card glow-card-violet p-7 sm:p-8 rounded-3xl group border-slate-200 bg-white relative overflow-hidden shadow-sm hover:shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-50 border border-violet-200 flex items-center justify-center text-violet-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
            <Sliders className="w-7 h-7 text-violet-600" />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-violet-600 block mb-1">
            Realtime UX
          </span>
          <h3 className="text-xl font-bold text-slate-950 mb-2.5">
            Live Status Bar &amp; Commands
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-5">
            Always view your active mode, model, and provider directly above the prompt. Switch models instantly with <code className="text-violet-800 bg-violet-50 px-1 py-0.5 rounded">/model</code> and reconfigure keys with <code className="text-violet-800 bg-violet-50 px-1 py-0.5 rounded">/config</code>.
          </p>
          <div className="bg-slate-50 rounded-xl p-3 font-mono text-xs text-violet-800 border border-violet-200">
            <span>[⚡ BUILD MODE] [🤖 openrouter/free]</span>
          </div>
        </div>

      </div>

    </section>
  );
}
