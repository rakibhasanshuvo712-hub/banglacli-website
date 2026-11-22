import React from "react";
import { CheckCircle, ShieldAlert } from "lucide-react";

export default function BuildPlanModes() {
  return (
    <section id="modes" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="glass-panel p-8 sm:p-14 rounded-3xl relative overflow-hidden">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-neon text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>Dual Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            BUILD Mode vs PLAN Mode
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Inspired by OpenCode, BanglaCLI lets you choose between autonomous hands-on building and safe senior architectural reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mode 1: BUILD MODE */}
          <div className="glass-card p-7 sm:p-9 rounded-2xl border-emerald-500/40 relative">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-400 text-black font-mono font-extrabold text-xs uppercase rounded-bl-xl">
              Default Mode
            </div>
            <div className="flex items-center gap-3.5 mb-5">
              <span className="text-3xl">⚡</span>
              <div>
                <h3 className="text-2xl font-bold text-white">BUILD Mode</h3>
                <p className="text-xs font-mono text-emerald-400">Command: /build or /mode</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Full autonomous developer. Capable of creating files, refactoring legacy functions, running shell scripts, and building projects.
            </p>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><code className="text-white">write_file</code>: Creates &amp; updates files and directories</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><code className="text-white">run_command</code>: Runs terminal commands (npm, git, test)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Interactive confirmation with <code className="text-emerald-400">[a]</code> session approval</span>
              </li>
            </ul>
          </div>

          {/* Mode 2: PLAN MODE */}
          <div className="glass-card p-7 sm:p-9 rounded-2xl border-cyan-500/40 relative">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-cyan-400 text-black font-mono font-extrabold text-xs uppercase rounded-bl-xl">
              Safe Architect
            </div>
            <div className="flex items-center gap-3.5 mb-5">
              <span className="text-3xl">📋</span>
              <div>
                <h3 className="text-2xl font-bold text-white">PLAN Mode</h3>
                <p className="text-xs font-mono text-cyan-400">Command: /plan or /mode</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Read-only Senior Software Architect. Safely audits directory structures, reads code, and formulates step-by-step blueprints without altering files.
            </p>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span><code className="text-white">list_files</code> &amp; <code className="text-white">read_file</code> enabled for exploration</span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                <span><code className="text-slate-400">write_file</code> and <code className="text-slate-400">run_command</code> strictly disabled</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Drafts architectural roadmaps and migration plans</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
