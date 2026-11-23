"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, Menu, X, Sun, Moon, Globe } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { useApp } from "@/context/AppContext";
import { Language } from "@/data/translations";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, language, setLanguage, t } = useApp();

  const languages: { id: Language; label: string }[] = [
    { id: "en", label: "EN" },
    { id: "bn", label: "বাং" },
    { id: "banglish", label: "Banglish" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/85 dark:bg-[#070a14]/85 border-b border-slate-200/80 dark:border-white/[0.08] transition-all shadow-[0_2px_12px_rgba(15,23,42,0.03)] dark:shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-500 via-amber-500 to-emerald-500 p-0.5 shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0d111c] rounded-[14px] flex items-center justify-center relative overflow-hidden">
              <span className="absolute w-4 h-4 rounded-full bg-rose-500 -top-1.5 -right-1.5 blur-[1px]"></span>
              <span className="font-mono font-extrabold text-emerald-400 text-lg tracking-tighter">&gt;_</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-black text-xl text-slate-950 dark:text-white tracking-tight">
                Bangla<span className="text-emerald-600 dark:text-emerald-400">CLI</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold tracking-wider rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                v1.2.0
              </span>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 -mt-0.5 font-bengali font-semibold">
              বাংলা কোডিং এজেন্ট • বাংলাদেশ
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
          <Link href="#simulator" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{t.nav.simulator}</span>
          </Link>
          <Link href="#features" className="hover:text-slate-950 dark:hover:text-white transition-colors">
            {t.nav.features}
          </Link>
          <Link href="#architecture" className="hover:text-slate-950 dark:hover:text-white transition-colors">
            {t.nav.architecture}
          </Link>
          <Link href="#modes" className="hover:text-slate-950 dark:hover:text-white transition-colors">
            {t.nav.modes}
          </Link>
          <Link href="#providers" className="hover:text-slate-950 dark:hover:text-white transition-colors">
            {t.nav.models}
          </Link>
          <Link href="#quickstart" className="hover:text-slate-950 dark:hover:text-white transition-colors">
            {t.nav.docs}
          </Link>
          <Link href="#developer" className="hover:text-slate-950 dark:hover:text-white transition-colors">
            {t.nav.creator}
          </Link>
          <Link href="#faq" className="hover:text-slate-950 dark:hover:text-white transition-colors">
            {t.nav.faq}
          </Link>
        </nav>

        {/* Action Controls & Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          
          {/* 3-Language Switcher */}
          <div className="flex items-center bg-slate-100 dark:bg-white/10 p-1 rounded-xl border border-slate-200/80 dark:border-white/10 text-xs font-bold font-mono">
            {languages.map((l) => (
              <button
                key={l.id}
                onClick={() => setLanguage(l.id)}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  language === l.id
                    ? "bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-xs font-black"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle (Dark / Light) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-amber-400 hover:scale-105 active:scale-95 transition-all shadow-xs"
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4 text-slate-700" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>

          {/* GitHub Star */}
          <a
            href="https://github.com/rakibhasanshuvo712-hub/banglacli-website"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-porcelain px-3.5 py-2 rounded-xl flex items-center gap-2 text-xs font-bold border border-slate-200 dark:border-white/10"
          >
            <GitHubIcon className="w-4 h-4 text-slate-900 dark:text-white" />
            <span className="hidden md:inline">Star</span>
          </a>

          {/* Install CLI */}
          <a
            href="#quickstart"
            className="btn-aurora-glow px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-2 text-white shadow-md shadow-rose-500/30 hover:scale-105 active:scale-95 transition-all"
          >
            <Terminal className="w-4 h-4 text-white" />
            <span>{t.nav.installCli}</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-amber-400"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4 text-slate-700" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-white/10 bg-white/98 dark:bg-[#070a14]/98 backdrop-blur-2xl px-6 py-6 space-y-4 shadow-xl">
          
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> Language:
            </span>
            <div className="flex gap-1">
              {languages.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setLanguage(l.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    language === l.id
                      ? "bg-rose-500 text-white shadow-xs"
                      : "text-slate-700 dark:text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <Link
            href="#simulator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 dark:text-slate-200 hover:text-emerald-600 font-semibold py-1"
          >
            ⚡ {t.nav.simulator}
          </Link>
          <Link
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 dark:text-slate-200 hover:text-emerald-600 font-semibold py-1"
          >
            ✨ {t.nav.features}
          </Link>
          <Link
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 dark:text-slate-200 hover:text-emerald-600 font-semibold py-1"
          >
            🧠 {t.nav.architecture}
          </Link>
          <Link
            href="#modes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 dark:text-slate-200 hover:text-emerald-600 font-semibold py-1"
          >
            📋 {t.nav.modes}
          </Link>
          <Link
            href="#providers"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 dark:text-slate-200 hover:text-emerald-600 font-semibold py-1"
          >
            🤖 {t.nav.models}
          </Link>
          <Link
            href="#quickstart"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 dark:text-slate-200 hover:text-emerald-600 font-semibold py-1"
          >
            🚀 {t.nav.docs}
          </Link>
          <Link
            href="#developer"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 dark:text-slate-200 hover:text-emerald-600 font-semibold py-1"
          >
            👨‍💻 {t.nav.creator}
          </Link>
          <Link
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 dark:text-slate-200 hover:text-emerald-600 font-semibold py-1"
          >
            ❓ {t.nav.faq}
          </Link>
          <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2.5">
            <a
              href="https://github.com/rakibhasanshuvo712-hub/banglacli-website"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-center text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 flex items-center justify-center gap-2 font-semibold"
            >
              <GitHubIcon className="w-4 h-4 text-slate-900 dark:text-white" /> GitHub Repository
            </a>
            <a
              href="https://www.linkedin.com/in/rakib-hasan-shuvo-7110ba407?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-[#0077b5] text-center text-white flex items-center justify-center gap-2 font-semibold shadow-sm"
            >
              <LinkedInIcon className="w-4 h-4 text-white" /> Connect on LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
