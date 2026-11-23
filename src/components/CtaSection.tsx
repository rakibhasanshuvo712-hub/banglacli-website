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
      <div className="rainbow-border-box rounded-3xl p-[2.5px] shadow-2xl shadow-slate-200/80">
        <div className="bg-white p-8 sm:p-16 rounded-[22px] text-center relative overflow-hidden border border-slate-100">
          
          {/* Subtle multi-colored background ambient auras */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-rose-500/10 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-emerald-500/10 blur-[80px] pointer-events-none" />
          
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-200 bg-rose-50 text-rose-700 text-xs font-mono font-bold uppercase tracking-wider mb-6 shadow-xs">
              <span>🚀 100% Free &amp; Open Source</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Ready to Build Next-Gen Software in{" "}
              <span className="bg-gradient-to-r from-rose-600 via-amber-600 to-emerald-600 bg-clip-text text-transparent">
                বাংলা &amp; English
              </span>
              ?
            </h2>
            <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Supercharge your terminal workflow with multi-model intelligence, autonomous file management, and zero subscription fees.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={copy}
                className="btn-aurora-glow px-8 py-4 rounded-2xl text-base font-extrabold flex items-center gap-3 text-white shadow-xl shadow-rose-500/35 hover:scale-105 active:scale-95 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 text-white" />
                    <span>Copied Command!</span>
                  </>
                ) : (
                  <>
                    <Terminal className="w-5 h-5 text-white" />
                    <span>npm install -g banglacli</span>
                  </>
                )}
              </button>
              <a
                href="https://github.com/rakibhasanshuvo712-hub/banglacli-website"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-porcelain px-8 py-4 rounded-2xl text-base font-bold flex items-center gap-3 text-slate-800 border-2 border-slate-200 hover:border-slate-300 shadow-sm hover:scale-105 active:scale-95 transition-all"
              >
                <GitHubIcon className="w-5 h-5 text-slate-900" />
                <span>Star on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
