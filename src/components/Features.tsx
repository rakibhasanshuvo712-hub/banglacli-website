import React from "react";
import { Layers, Key, Wrench, ShieldCheck, Sliders, Cpu } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-neon text-xs font-mono font-bold uppercase tracking-wider mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>Autonomous Superpowers</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Engineered for Bengali Developers Worldwide
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          No rigid syntax. BanglaCLI is tuned to understand technical colloquialisms, Banglish phonetics, and complex full-stack requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Feature 1 */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl group">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
            <span className="text-2xl">🇧🇩</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2.5">Native Trilingual Comprehension</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Type naturally in proper বাংলা (<span className="font-bengali text-emerald-300">&quot;একটি auth middleware বানাও&quot;</span>), Banglish (<span className="text-emerald-300">&quot;ekta mongo schema banai daw&quot;</span>), or English. BanglaCLI responds in the same language.
          </p>
          <div className="bg-black/50 rounded-xl p-3 font-mono text-xs text-slate-300 border border-white/5">
            <span className="text-emerald-400 font-bold">&gt;</span> <span className="font-bengali">&quot;React-এ একটা ড্রপডাউন মেনু বানাও&quot;</span>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl group">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
            <Layers className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2.5">OpenCode Dual Modes</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Switch effortlessly between <strong className="text-emerald-400">⚡ BUILD Mode</strong> (creates files, installs packages, runs tests) and <strong className="text-cyan-400">📋 PLAN Mode</strong> (read-only architectural audit without editing files).
          </p>
          <div className="bg-black/50 rounded-xl p-3 font-mono text-xs text-slate-300 border border-white/5 flex items-center justify-between">
            <span className="text-cyan-400 font-bold">/plan</span>
            <span className="text-slate-500">Read-Only Architectural Audit</span>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl group">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
            <Key className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2.5">100% BYOK &amp; Serverless</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            No middleman backend and zero tracking. Your API keys are encrypted locally on your operating system via <code className="text-amber-300">conf</code>. All requests travel directly to the provider.
          </p>
          <div className="bg-black/50 rounded-xl p-3 font-mono text-xs text-amber-300 border border-white/5">
            <span>🔒 Direct Client-to-API • 0 Telemetry</span>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl group">
          <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform">
            <Wrench className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2.5">4 Autonomous Native Tools</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Equipped with <code className="text-violet-300">list_files</code>, <code className="text-violet-300">read_file</code>, <code className="text-violet-300">write_file</code>, and <code className="text-violet-300">run_command</code> to construct whole applications end-to-end.
          </p>
          <div className="bg-black/50 rounded-xl p-3 font-mono text-xs text-violet-300 border border-white/5">
            <span>🛠️ Complete Full-Stack Scaffolding</span>
          </div>
        </div>

        {/* Feature 5 */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl group">
          <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2.5">Zero-Damage Safety Guardrails</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Never worry about accidental file destruction. Before writing files or executing shell commands, BanglaCLI pauses for explicit user confirmation <code className="text-red-300">[Y/n/a]</code>.
          </p>
          <div className="bg-black/50 rounded-xl p-3 font-mono text-xs text-slate-400 border border-white/5">
            <span>[CONFIRM] Execute &apos;npm install&apos; [Y/n/a]:</span>
          </div>
        </div>

        {/* Feature 6 */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl group">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
            <Sliders className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2.5">Live Status Bar &amp; Commands</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Always view your active mode, model, and provider directly above the prompt. Switch models instantly with <code className="text-emerald-300">/model</code> and reconfigure keys with <code className="text-emerald-300">/config</code>.
          </p>
          <div className="bg-black/50 rounded-xl p-3 font-mono text-xs text-emerald-400 border border-white/5">
            <span>[⚡ BUILD MODE] [🤖 openrouter/free]</span>
          </div>
        </div>

      </div>

    </section>
  );
}
