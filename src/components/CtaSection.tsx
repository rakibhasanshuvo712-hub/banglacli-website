"use client";

import React, { useState } from "react";
import { Terminal, Check } from "lucide-react";
import { GitHubIcon } from "./Icons";

export default function CtaSection() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("npm install -g banglacli");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="rainbow-border-box rounded-3xl p-[2px]">
        <div className="bg-[#060411]/90 backdrop-blur-2xl p-8 sm:p-16 rounded-3xl text-center relative overflow-hidden">
          
          {/* Subtle multi-colored background orbs */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-rose-500/20 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-emerald-500/20 blur-[80px] pointer-events-none" />
          
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-neon text-xs font-mono font-bold uppercase tracking-wider mb-6">
              <span>🚀 100% Free &amp; Open Source</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Build Next-Gen Software in{" "}
              <span className="bg-gradient-to-r from-[#ff3366] via-[#ff9900] to-[#00f59b] bg-clip-text text-transparent">
                বাংলা &amp; English
              </span>
              ?
            </h2>
            <p className="mt-5 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Supercharge your terminal workflow with multi-model intelligence, autonomous file management, and zero subscription fees.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={copy}
                className="btn-prismatic px-8 py-4 rounded-2xl text-base font-extrabold flex items-center gap-3 text-slate-950 shadow-xl shadow-rose-500/20 transition-transform hover:scale-105 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 text-slate-950" />
                    <span>Copied Command!</span>
                  </>
                ) : (
                  <>
                    <Terminal className="w-5 h-5" />
                    <span>npm install -g banglacli</span>
                  </>
                )}
              </button>
              <a
                href="https://github.com/rakibhasanshuvo712-hub/banglacli-website"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-glass px-8 py-4 rounded-2xl text-base font-semibold flex items-center gap-3 text-white border border-white/15 hover:border-emerald-500/50 hover:bg-white/10 transition-all hover:scale-105"
              >
                <GitHubIcon className="w-5 h-5 text-white" />
                <span>Star on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
