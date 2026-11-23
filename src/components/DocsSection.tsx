"use client";

import React, { useState } from "react";
import { BookOpen, Copy, Check, Terminal } from "lucide-react";

export default function DocsSection() {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <section id="quickstart" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-neon text-xs font-mono font-bold uppercase tracking-wider mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Documentation</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Up and Running in 30 Seconds
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          The interactive setup wizard walks you through provider selection and saves your key automatically.
        </p>
      </div>

      {/* 3 Quick Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        
        {/* Step 1: Coral/Rose */}
        <div className="glass-card glow-card-coral p-7 rounded-3xl relative border border-rose-500/20 bg-gradient-to-b from-rose-950/20 to-transparent">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-400 text-slate-950 font-black font-mono text-lg flex items-center justify-center mb-5 shadow-lg shadow-rose-500/30">
            1
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Install Globally</h3>
          <p className="text-slate-300 text-sm mb-5 leading-relaxed">
            Install banglacli globally using npm to access the command anywhere in your terminal.
          </p>
          <div className="bg-black/60 p-3.5 rounded-xl border border-rose-500/30 font-mono text-xs text-rose-300 flex items-center justify-between">
            <span className="text-rose-400">npm install -g banglacli</span>
            <button
              onClick={() => copy("npm install -g banglacli")}
              className="text-slate-400 hover:text-white transition-colors"
              title="Copy"
            >
              {copiedCmd === "npm install -g banglacli" ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Step 2: Solar Amber/Gold */}
        <div className="glass-card glow-card-amber p-7 rounded-3xl relative border border-amber-500/20 bg-gradient-to-b from-amber-950/20 to-transparent">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-emerald-400 text-slate-950 font-black font-mono text-lg flex items-center justify-center mb-5 shadow-lg shadow-amber-500/30">
            2
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Run Onboarding Setup</h3>
          <p className="text-slate-300 text-sm mb-5 leading-relaxed">
            Type <code className="text-amber-300 font-mono bg-amber-400/10 px-1.5 py-0.5 rounded">banglacli</code>. The interactive prompt guides you to choose a free AI provider and save your key.
          </p>
          <div className="bg-black/60 p-3.5 rounded-xl border border-amber-500/30 font-mono text-xs text-amber-300 flex items-center justify-between">
            <span className="text-amber-400">banglacli</span>
            <button
              onClick={() => copy("banglacli")}
              className="text-slate-400 hover:text-white transition-colors"
              title="Copy"
            >
              {copiedCmd === "banglacli" ? (
                <Check className="w-4 h-4 text-amber-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Step 3: Spring Jade/Emerald */}
        <div className="glass-card glow-card-emerald p-7 rounded-3xl relative border border-emerald-500/20 bg-gradient-to-b from-emerald-950/20 to-transparent">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 text-slate-950 font-black font-mono text-lg flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/30">
            3
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Speak &amp; Build</h3>
          <p className="text-slate-300 text-sm mb-5 leading-relaxed">
            Type your prompt in Bangla, Banglish, or English. Confirm tool actions and watch your software materialize!
          </p>
          <div className="bg-black/60 p-3.5 rounded-xl border border-emerald-500/30 font-mono text-xs text-emerald-300 font-bengali">
            <span className="text-emerald-400">&gt; একটি Todo App বানাও React দিয়ে</span>
          </div>
        </div>

      </div>

      {/* Command Table */}
      <div className="glass-panel rounded-3xl overflow-hidden border border-white/10">
        <div className="p-6 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
          <h3 className="font-bold text-white text-lg flex items-center gap-2.5">
            <Terminal className="w-5 h-5 text-emerald-400" />
            <span>Command &amp; Slash Command Reference</span>
          </h3>
          <span className="text-xs text-slate-400 font-mono">banglacli CLI v1.2.0</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs sm:text-sm">
            <thead className="bg-white/[0.02] text-slate-400 border-b border-white/5">
              <tr>
                <th className="p-4">Command</th>
                <th className="p-4">Type</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-emerald-400 font-bold">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30">banglacli</span>
                </td>
                <td className="p-4 text-slate-400">Terminal CLI</td>
                <td className="p-4">Starts the trilingual interactive coding session.</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-amber-400 font-bold">
                  <span className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30">banglacli config</span>
                </td>
                <td className="p-4 text-slate-400">Terminal CLI</td>
                <td className="p-4">Runs the interactive setup wizard to select provider &amp; key.</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-cyan-400 font-bold">
                  <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30">banglacli list-models</span>
                </td>
                <td className="p-4 text-slate-400">Terminal CLI</td>
                <td className="p-4">Displays free Gemini &amp; OpenRouter models with token context limits.</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-fuchsia-400 font-bold">
                  <span className="px-2 py-0.5 rounded-md bg-fuchsia-500/10 border border-fuchsia-500/30">/mode, /plan, /build</span>
                </td>
                <td className="p-4 text-slate-400">Chat Slash Command</td>
                <td className="p-4">Switches between autonomous BUILD mode and read-only PLAN mode.</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-violet-400 font-bold">
                  <span className="px-2 py-0.5 rounded-md bg-violet-500/10 border border-violet-500/30">/model</span>
                </td>
                <td className="p-4 text-slate-400">Chat Slash Command</td>
                <td className="p-4">Interactive menu to switch the active AI model on the fly.</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-rose-400 font-bold">
                  <span className="px-2 py-0.5 rounded-md bg-rose-500/10 border border-rose-500/30">/clear</span>
                </td>
                <td className="p-4 text-slate-400">Chat Slash Command</td>
                <td className="p-4">Clears the conversation context window and terminal screen.</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-orange-400 font-bold">
                  <span className="px-2 py-0.5 rounded-md bg-orange-500/10 border border-orange-500/30">/exit, /quit</span>
                </td>
                <td className="p-4 text-slate-400">Chat Slash Command</td>
                <td className="p-4">Safely terminates the session and returns to normal terminal.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
