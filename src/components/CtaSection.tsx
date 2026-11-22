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
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="glass-panel p-8 sm:p-14 rounded-3xl text-center relative overflow-hidden border border-emerald-500/30">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Build Next-Gen Software in বাংলা?
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Download BanglaCLI today and supercharge your coding workflow in your native language.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={copy}
              className="btn-primary-neon px-7 py-3.5 rounded-2xl text-base font-bold flex items-center gap-2.5"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-black" />
                  <span>Copied to Clipboard!</span>
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
              className="btn-secondary-glass px-7 py-3.5 rounded-2xl text-base font-semibold flex items-center gap-2.5"
            >
              <GitHubIcon className="w-5 h-5 text-white" />
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
