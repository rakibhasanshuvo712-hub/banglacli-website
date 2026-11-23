"use client";

import React from "react";
import { Cpu, FileCode2, Terminal, ShieldCheck, Database, ArrowRight, Check } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function ArchitectureSection() {
  const { t } = useApp();

  const pipeline = [
    {
      num: "01",
      icon: <span className="text-2xl">🇧🇩</span>,
      title: t.architecture.step1Title,
      desc: t.architecture.step1Desc,
      tag: "Trilingual Engine",
      color: "border-rose-400/40 text-rose-500 bg-rose-500/10",
    },
    {
      num: "02",
      icon: <Cpu className="w-6 h-6 text-amber-500" />,
      title: t.architecture.step2Title,
      desc: t.architecture.step2Desc,
      tag: "3-Mode Controller",
      color: "border-amber-400/40 text-amber-500 bg-amber-500/10",
    },
    {
      num: "03",
      icon: <Database className="w-6 h-6 text-emerald-500" />,
      title: t.architecture.step3Title,
      desc: t.architecture.step3Desc,
      tag: "Zero Middleman",
      color: "border-emerald-400/40 text-emerald-500 bg-emerald-500/10",
    },
    {
      num: "04",
      icon: <ShieldCheck className="w-6 h-6 text-cyan-500" />,
      title: t.architecture.step4Title,
      desc: t.architecture.step4Desc,
      tag: "Safety Guardrails",
      color: "border-cyan-400/40 text-cyan-500 bg-cyan-500/10",
    },
  ];

  const tools = [
    {
      name: "write_file",
      capability: "File Creation & Overwrite",
      guard: "Requires [Y/n/a] Confirmation",
      buildMode: "Active",
      planMode: "Disabled",
      chatMode: "Disabled",
    },
    {
      name: "read_file",
      capability: "Targeted File Inspection",
      guard: "Read-only / Safe",
      buildMode: "Active",
      planMode: "Active",
      chatMode: "Active",
    },
    {
      name: "list_files",
      capability: "Recursive Directory Scans",
      guard: "Ignores node_modules, .git",
      buildMode: "Active",
      planMode: "Active",
      chatMode: "Active",
    },
    {
      name: "run_command",
      capability: "Terminal Command Execution",
      guard: "Requires [Y/n/a] Confirmation",
      buildMode: "Active",
      planMode: "Disabled",
      chatMode: "Disabled",
    },
  ];

  const envs = [
    {
      var: "GEMINI_API_KEY",
      provider: "Google AI Studio",
      quota: "15 RPM Free (1M Context)",
      desc: "Default zero-cost AI provider for high-reasoning coding models.",
    },
    {
      var: "OPENROUTER_API_KEY",
      provider: "OpenRouter Gateway",
      quota: "Unlimited Free Tier Access",
      desc: "Auto-routes between free Particle-1, Gemma, and DeepSeek variants.",
    },
    {
      var: "GROQ_API_KEY",
      provider: "Groq Cloud LPU",
      quota: "500+ Tokens/Sec",
      desc: "Extreme low-latency inference for Llama 3.3 70B models.",
    },
    {
      var: "OPENAI_BASE_URL",
      provider: "Ollama / Local Server",
      quota: "100% Offline / Air-Gapped",
      desc: "Connect local models running at http://localhost:11434/v1.",
    },
  ];

  return (
    <section id="architecture" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-500/30 bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Cpu className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>{t.architecture.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
          {t.architecture.heading}
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
          {t.architecture.subheading}
        </p>
      </div>

      {/* 4-Step Architecture Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {pipeline.map((item, idx) => (
          <div
            key={idx}
            className="glass-card p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between border-slate-200 dark:border-white/10"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-black text-slate-400 dark:text-slate-500">
                  {item.num}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${item.color}`}>
                  {item.tag}
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-4 shadow-xs">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
            {idx < 3 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-700 pointer-events-none z-10">
                <ArrowRight className="w-6 h-6" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tools Matrix & Environment Variables Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Tools Matrix */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg">
          <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-4 flex items-center gap-2">
            <FileCode2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>{t.architecture.toolsTitle}</span>
          </h3>
          <div className="overflow-x-auto -webkit-overflow-scrolling-touch pb-2">
            <table className="w-full min-w-[480px] text-left font-mono text-xs">
              <thead className="bg-slate-100/70 dark:bg-white/5 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-white/10">
                <tr>
                  <th className="p-3">Tool</th>
                  <th className="p-3">Capability</th>
                  <th className="p-3">BUILD</th>
                  <th className="p-3">PLAN</th>
                  <th className="p-3">CHAT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                {tools.map((tItem, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-white/[0.02]">
                    <td className="p-3 font-bold text-emerald-700 dark:text-emerald-400">{tItem.name}</td>
                    <td className="p-3 text-[11px] font-sans">{tItem.capability}</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">✓ Active</td>
                    <td className="p-3 font-bold">
                      {tItem.planMode === "Active" ? (
                        <span className="text-cyan-600 dark:text-cyan-400">✓ Active</span>
                      ) : (
                        <span className="text-rose-500 dark:text-rose-400">✗ Locked</span>
                      )}
                    </td>
                    <td className="p-3 font-bold">
                      {tItem.chatMode === "Active" ? (
                        <span className="text-violet-600 dark:text-violet-400">✓ Active</span>
                      ) : (
                        <span className="text-rose-500 dark:text-rose-400">✗ Locked</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Environment Variables */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg">
          <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-4 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <span>{t.architecture.envTitle}</span>
          </h3>
          <div className="space-y-3 font-mono text-xs">
            {envs.map((env, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">{env.var}</span>
                  <span className="text-[10px] bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                    {env.quota}
                  </span>
                </div>
                <div className="text-slate-700 dark:text-slate-300 text-[11px] font-sans">
                  <strong>{env.provider}:</strong> {env.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
