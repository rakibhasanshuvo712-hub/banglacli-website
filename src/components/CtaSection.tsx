"use client";

import React, { useState } from "react";
import { Terminal, Check } from "lucide-react";
import { GitHubIcon } from "./Icons";
import { useApp } from "@/context/AppContext";

export default function CtaSection() {
  const { t } = useApp();
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("npm install -g banglacli");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="rainbow-border-box rounded-3xl p-[2.5px] shadow-2xl shadow-slate-200/80 dark:shadow-rose-950/40">
        <div className="bg-white dark:bg-[#060411]/95 p-8 sm:p-16 rounded-[22px] text-center relative overflow-hidden border border-slate-100 dark:border-white/5">
          
          {/* Subtle multi-colored background ambient auras */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-rose-500/10 dark:bg-rose-500/20 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 blur-[80px] pointer-events-none" />
          
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-200 dark:border-rose-500/30 bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 text-xs font-mono font-bold uppercase tracking-wider mb-6 shadow-xs">
              <span>🚀 {t.cta.badge}</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight">
              {t.cta.heading}
            </h2>
            <p className="mt-5 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {t.cta.subheading}
            </p>
            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto">
              <button
                onClick={copy}
                className="w-full sm:w-auto btn-aurora-glow px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-extrabold flex items-center justify-center gap-3 text-white shadow-xl shadow-rose-500/35 hover:scale-105 active:scale-95 transition-all text-center"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 text-white" />
                    <span>Copied Command!</span>
                  </>
                ) : (
                  <>
                    <Terminal className="w-5 h-5 text-white" />
                    <span>{t.cta.button}</span>
                  </>
                )}
              </button>
              <a
                href="https://github.com/rakibhasanshuvo712-hub/banglacli-website"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-porcelain px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold flex items-center justify-center gap-3 border-2 border-slate-200 dark:border-white/10 hover:border-slate-300 shadow-sm hover:scale-105 active:scale-95 transition-all text-center"
              >
                <GitHubIcon className="w-5 h-5 text-slate-900 dark:text-white" />
                <span>Star on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
