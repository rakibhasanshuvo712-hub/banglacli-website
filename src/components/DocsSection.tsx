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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-200 bg-rose-50 text-rose-800 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs">
          <BookOpen className="w-3.5 h-3.5 text-rose-600" />
          <span>Documentation</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Up and Running in 30 Seconds
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg">
          The interactive setup wizard walks you through provider selection and saves your key automatically.
        </p>
      </div>

      {/* 3 Quick Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        
        {/* Step 1: Coral/Rose */}
        <div className="glass-card glow-card-coral p-7 rounded-3xl relative border border-slate-200 bg-white shadow-sm hover:shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-500 text-white font-black font-mono text-lg flex items-center justify-center mb-5 shadow-md shadow-rose-500/25">
            1
          </div>
          <h3 className="text-xl font-bold text-slate-950 mb-2">Install Globally</h3>
          <p className="text-slate-600 text-sm mb-5 leading-relaxed">
            Install banglacli globally using npm to access the command anywhere in your terminal.
          </p>
          <div className="bg-slate-50 p-3.5 rounded-xl border border-rose-200 font-mono text-xs text-rose-900 flex items-center justify-between">
            <span className="font-bold">npm install -g banglacli</span>
            <button
              onClick={() => copy("npm install -g banglacli")}
              className="text-slate-500 hover:text-slate-900 transition-colors p-1"
              title="Copy"
            >
              {copiedCmd === "npm install -g banglacli" ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Step 2: Solar Amber/Gold */}
        <div className="glass-card glow-card-amber p-7 rounded-3xl relative border border-slate-200 bg-white shadow-sm hover:shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-emerald-500 text-slate-950 font-black font-mono text-lg flex items-center justify-center mb-5 shadow-md shadow-amber-500/25">
            2
          </div>
          <h3 className="text-xl font-bold text-slate-950 mb-2">Run Onboarding Setup</h3>
          <p className="text-slate-600 text-sm mb-5 leading-relaxed">
            Type <code className="text-amber-800 font-mono bg-amber-50 px-1.5 py-0.5 rounded font-bold">banglacli</code>. The interactive prompt guides you to choose a free AI provider and save your key.
          </p>
          <div className="bg-slate-50 p-3.5 rounded-xl border border-amber-200 font-mono text-xs text-amber-900 flex items-center justify-between">
            <span className="font-bold">banglacli</span>
            <button
              onClick={() => copy("banglacli")}
              className="text-slate-500 hover:text-slate-900 transition-colors p-1"
              title="Copy"
            >
              {copiedCmd === "banglacli" ? (
                <Check className="w-4 h-4 text-amber-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Step 3: Spring Jade/Emerald */}
        <div className="glass-card glow-card-emerald p-7 rounded-3xl relative border border-slate-200 bg-white shadow-sm hover:shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white font-black font-mono text-lg flex items-center justify-center mb-5 shadow-md shadow-emerald-500/25">
            3
          </div>
          <h3 className="text-xl font-bold text-slate-950 mb-2">Speak &amp; Build</h3>
          <p className="text-slate-600 text-sm mb-5 leading-relaxed">
            Type your prompt in Bangla, Banglish, or English. Confirm tool actions and watch your software materialize!
          </p>
          <div className="bg-slate-50 p-3.5 rounded-xl border border-emerald-200 font-mono text-xs text-emerald-900 font-bengali">
            <span className="font-bold">&gt; একটি Todo App বানাও React দিয়ে</span>
          </div>
        </div>

      </div>

      {/* Command Table */}
      <div className="glass-panel rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
        <div className="p-6 border-b border-slate-200 bg-slate-50/70 flex items-center justify-between">
          <h3 className="font-bold text-slate-950 text-lg flex items-center gap-2.5">
            <Terminal className="w-5 h-5 text-emerald-600" />
            <span>Command &amp; Slash Command Reference</span>
          </h3>
          <span className="text-xs text-slate-500 font-mono font-bold bg-slate-200/60 px-2.5 py-1 rounded-full">v1.2.0</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-600 border-b border-slate-200 font-semibold">
              <tr>
                <th className="p-4">Command</th>
                <th className="p-4">Type</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-4 text-emerald-700 font-bold">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200">banglacli</span>
                </td>
                <td className="p-4 text-slate-500 font-medium">Terminal CLI</td>
                <td className="p-4">Starts the trilingual interactive coding session.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-4 text-amber-700 font-bold">
                  <span className="px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200">banglacli config</span>
                </td>
                <td className="p-4 text-slate-500 font-medium">Terminal CLI</td>
                <td className="p-4">Runs the interactive setup wizard to select provider &amp; key.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-4 text-cyan-700 font-bold">
                  <span className="px-2.5 py-1 rounded-md bg-cyan-50 border border-cyan-200">banglacli list-models</span>
                </td>
                <td className="p-4 text-slate-500 font-medium">Terminal CLI</td>
                <td className="p-4">Displays free Gemini &amp; OpenRouter models with token context limits.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-4 text-fuchsia-700 font-bold">
                  <span className="px-2.5 py-1 rounded-md bg-fuchsia-50 border border-fuchsia-200">/mode, /plan, /build</span>
                </td>
                <td className="p-4 text-slate-500 font-medium">Chat Slash Command</td>
                <td className="p-4">Switches between autonomous BUILD mode and read-only PLAN mode.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-4 text-violet-700 font-bold">
                  <span className="px-2.5 py-1 rounded-md bg-violet-50 border border-violet-200">/model</span>
                </td>
                <td className="p-4 text-slate-500 font-medium">Chat Slash Command</td>
                <td className="p-4">Interactive menu to switch the active AI model on the fly.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-4 text-rose-700 font-bold">
                  <span className="px-2.5 py-1 rounded-md bg-rose-50 border border-rose-200">/clear</span>
                </td>
                <td className="p-4 text-slate-500 font-medium">Chat Slash Command</td>
                <td className="p-4">Clears the conversation context window and terminal screen.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-4 text-orange-700 font-bold">
                  <span className="px-2.5 py-1 rounded-md bg-orange-50 border border-orange-200">/exit, /quit</span>
                </td>
                <td className="p-4 text-slate-500 font-medium">Chat Slash Command</td>
                <td className="p-4">Safely terminates the session and returns to normal terminal.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
