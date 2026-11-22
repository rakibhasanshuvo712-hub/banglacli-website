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
        
        <div className="glass-card p-7 rounded-3xl relative">
          <div className="w-10 h-10 rounded-2xl bg-emerald-400 text-black font-extrabold font-mono text-base flex items-center justify-center mb-5 shadow-lg shadow-emerald-400/20">
            1
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Install Globally</h3>
          <p className="text-slate-400 text-sm mb-5 leading-relaxed">
            Install banglacli globally using npm to access the command anywhere in your terminal.
          </p>
          <div className="bg-black/50 p-3.5 rounded-xl border border-white/5 font-mono text-xs text-emerald-400 flex items-center justify-between">
            <span>npm install -g banglacli</span>
            <button
              onClick={() => copy("npm install -g banglacli")}
              className="text-slate-400 hover:text-white"
              title="Copy"
            >
              {copiedCmd === "npm install -g banglacli" ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        <div className="glass-card p-7 rounded-3xl relative">
          <div className="w-10 h-10 rounded-2xl bg-cyan-400 text-black font-extrabold font-mono text-base flex items-center justify-center mb-5 shadow-lg shadow-cyan-400/20">
            2
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Run Onboarding Setup</h3>
          <p className="text-slate-400 text-sm mb-5 leading-relaxed">
            Type <code className="text-white">banglacli</code>. The interactive prompt guides you to choose a free AI provider and save your key.
          </p>
          <div className="bg-black/50 p-3.5 rounded-xl border border-white/5 font-mono text-xs text-cyan-400 flex items-center justify-between">
            <span>banglacli</span>
            <button
              onClick={() => copy("banglacli")}
              className="text-slate-400 hover:text-white"
              title="Copy"
            >
              {copiedCmd === "banglacli" ? (
                <Check className="w-3.5 h-3.5 text-cyan-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        <div className="glass-card p-7 rounded-3xl relative">
          <div className="w-10 h-10 rounded-2xl bg-violet-400 text-black font-extrabold font-mono text-base flex items-center justify-center mb-5 shadow-lg shadow-violet-400/20">
            3
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Speak &amp; Build</h3>
          <p className="text-slate-400 text-sm mb-5 leading-relaxed">
            Type your prompt in Bangla, Banglish, or English. Confirm tool actions and watch your software materialize!
          </p>
          <div className="bg-black/50 p-3.5 rounded-xl border border-white/5 font-mono text-xs text-violet-300 font-bengali">
            <span>&gt; একটি Todo App বানাও React দিয়ে</span>
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
              <tr>
                <td className="p-4 text-emerald-400 font-bold">banglacli</td>
                <td className="p-4 text-slate-400">Terminal CLI</td>
                <td className="p-4">Starts the trilingual interactive coding session.</td>
              </tr>
              <tr>
                <td className="p-4 text-emerald-400 font-bold">banglacli config</td>
                <td className="p-4 text-slate-400">Terminal CLI</td>
                <td className="p-4">Runs the interactive setup wizard to select provider &amp; key.</td>
              </tr>
              <tr>
                <td className="p-4 text-emerald-400 font-bold">banglacli list-models</td>
                <td className="p-4 text-slate-400">Terminal CLI</td>
                <td className="p-4">Displays free Gemini &amp; OpenRouter models with token context limits.</td>
              </tr>
              <tr>
                <td className="p-4 text-cyan-400 font-bold">/mode, /plan, /build</td>
                <td className="p-4 text-slate-400">Chat Slash Command</td>
                <td className="p-4">Switches between autonomous BUILD mode and read-only PLAN mode.</td>
              </tr>
              <tr>
                <td className="p-4 text-cyan-400 font-bold">/model</td>
                <td className="p-4 text-slate-400">Chat Slash Command</td>
                <td className="p-4">Interactive menu to switch the active AI model on the fly.</td>
              </tr>
              <tr>
                <td className="p-4 text-cyan-400 font-bold">/clear</td>
                <td className="p-4 text-slate-400">Chat Slash Command</td>
                <td className="p-4">Clears the conversation context window and terminal screen.</td>
              </tr>
              <tr>
                <td className="p-4 text-cyan-400 font-bold">/exit, /quit</td>
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
