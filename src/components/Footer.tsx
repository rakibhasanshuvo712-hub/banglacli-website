import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#030508] text-slate-600 dark:text-slate-400 py-12 px-4 sm:px-6 lg:px-8 relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-emerald-400/20 border border-slate-800 dark:border-emerald-400/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm shadow-xs">
            &gt;_
          </div>
          <div>
            <span className="text-slate-950 dark:text-white font-bold text-sm">BanglaCLI</span>
            <span className="text-slate-500 text-xs ml-2 font-mono font-semibold">MIT License</span>
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 text-center">
          Designed &amp; Developed with ❤️ by{" "}
          <a
            href="https://github.com/rakibhasanshuvo712-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-950 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 underline decoration-emerald-500/50 font-bold transition-colors"
          >
            Rakib Hasan Shuvo
          </a>{" "}
          in Savar, Dhaka, Bangladesh 🇧🇩
        </p>

        <div className="flex items-center gap-5 text-xs font-semibold">
          <a
            href="https://github.com/rakibhasanshuvo712-hub/banglacli-website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
          >
            GitHub Repository
          </a>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <a
            href="https://www.linkedin.com/in/rakib-hasan-shuvo-7110ba407?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <a
            href="mailto:rakibhasanshuvo712@gmail.com"
            className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
}
