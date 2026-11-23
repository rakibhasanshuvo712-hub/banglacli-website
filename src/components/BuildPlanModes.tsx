"use client";

import React from "react";
import { CheckCircle, ShieldAlert } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function BuildPlanModes() {
  const { t } = useApp();

  return (
    <section id="modes" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="glass-panel p-8 sm:p-14 rounded-3xl relative overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-300 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs">
            <span>{t.modes.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
            {t.modes.heading}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base">
            {t.modes.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mode 1: BUILD MODE */}
          <div className="glass-card glow-card-emerald p-7 sm:p-9 rounded-2xl border-emerald-300/90 dark:border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-500/[0.03] relative overflow-hidden shadow-sm hover:shadow-lg">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-mono font-extrabold text-xs uppercase rounded-bl-xl shadow-xs">
              {t.modes.buildTag}
            </div>
            <div className="flex items-center gap-3.5 mb-5">
              <span className="text-4xl">⚡</span>
              <div>
                <h3 className="text-2xl font-bold text-slate-950 dark:text-white">{t.modes.buildTitle}</h3>
                <p className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold">Command: /build or /mode</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
              {t.modes.buildDesc}
            </p>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span><code className="text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/20 px-1 py-0.5 rounded font-semibold">write_file</code>: Creates &amp; updates files and nested directories</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span><code className="text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/20 px-1 py-0.5 rounded font-semibold">run_command</code>: Runs terminal commands (npm, git, test scripts)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Interactive confirmation with <code className="text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-500/20 px-1 py-0.5 rounded">[a]</code> session approval</span>
              </li>
            </ul>
          </div>

          {/* Mode 2: PLAN MODE */}
          <div className="glass-card glow-card-cyan p-7 sm:p-9 rounded-2xl border-cyan-300/90 dark:border-cyan-500/40 bg-cyan-50/20 dark:bg-cyan-500/[0.03] relative overflow-hidden shadow-sm hover:shadow-lg">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-mono font-extrabold text-xs uppercase rounded-bl-xl shadow-xs">
              {t.modes.planTag}
            </div>
            <div className="flex items-center gap-3.5 mb-5">
              <span className="text-4xl">📋</span>
              <div>
                <h3 className="text-2xl font-bold text-slate-950 dark:text-white">{t.modes.planTitle}</h3>
                <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold">Command: /plan or /mode</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
              {t.modes.planDesc}
            </p>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span><code className="text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/20 px-1 py-0.5 rounded font-semibold">list_files</code> &amp; <code className="text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/20 px-1 py-0.5 rounded font-semibold">read_file</code> enabled for deep exploration</span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldAlert className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
                <span><code className="text-slate-500 dark:text-slate-400">write_file</code> and <code className="text-slate-500 dark:text-slate-400">run_command</code> strictly disabled</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>Drafts architectural roadmaps and migration plans</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
