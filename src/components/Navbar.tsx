"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, Menu, X } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/85 border-b border-slate-200/80 transition-all shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
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
              <span className="font-black text-xl text-slate-900 tracking-tight">
                Bangla<span className="text-emerald-600">CLI</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold tracking-wider rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                v1.2.0
              </span>
            </div>
            <span className="text-[11px] text-slate-500 -mt-0.5 font-bengali font-semibold">
              বাংলা কোডিং এজেন্ট • ওপেনসোর্স
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <Link href="#simulator" className="hover:text-emerald-600 transition-colors flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Live Simulator</span>
          </Link>
          <Link href="#features" className="hover:text-slate-950 transition-colors">
            Features
          </Link>
          <Link href="#modes" className="hover:text-slate-950 transition-colors">
            Build &amp; Plan
          </Link>
          <Link href="#providers" className="hover:text-slate-950 transition-colors">
            Free AI Models
          </Link>
          <Link href="#quickstart" className="hover:text-slate-950 transition-colors">
            Docs
          </Link>
          <Link href="#developer" className="hover:text-slate-950 transition-colors">
            Creator
          </Link>
          <Link href="#faq" className="hover:text-slate-950 transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/rakibhasanshuvo712-hub/banglacli-website"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-porcelain px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-semibold border border-slate-200 text-slate-800 hover:border-slate-300"
          >
            <GitHubIcon className="w-4 h-4 text-slate-900" />
            <span>GitHub</span>
            <span className="bg-amber-50 px-2 py-0.5 rounded text-[11px] text-amber-700 font-mono font-bold border border-amber-200">
              ★ Star
            </span>
          </a>
          <a
            href="#quickstart"
            className="btn-aurora-glow px-4.5 py-2 rounded-xl text-sm font-extrabold flex items-center gap-2 text-white shadow-md shadow-rose-500/30 hover:scale-105 active:scale-95 transition-all"
          >
            <Terminal className="w-4 h-4 text-white" />
            <span>Install CLI</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-2xl px-6 py-6 space-y-4 shadow-xl">
          <Link
            href="#simulator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-emerald-600 font-semibold py-1"
          >
            ⚡ Live Terminal Simulator
          </Link>
          <Link
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-emerald-600 font-semibold py-1"
          >
            ✨ Features
          </Link>
          <Link
            href="#modes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-emerald-600 font-semibold py-1"
          >
            📋 Build &amp; Plan Modes
          </Link>
          <Link
            href="#providers"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-emerald-600 font-semibold py-1"
          >
            🤖 Free AI Models
          </Link>
          <Link
            href="#quickstart"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-emerald-600 font-semibold py-1"
          >
            🚀 Quickstart Guide
          </Link>
          <Link
            href="#developer"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-emerald-600 font-semibold py-1"
          >
            👨‍💻 Developer: Rakib Hasan Shuvo
          </Link>
          <Link
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-emerald-600 font-semibold py-1"
          >
            ❓ FAQ
          </Link>
          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
            <a
              href="https://github.com/rakibhasanshuvo712-hub/banglacli-website"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-slate-100 text-center text-slate-800 border border-slate-200 flex items-center justify-center gap-2 font-semibold"
            >
              <GitHubIcon className="w-4 h-4 text-slate-900" /> GitHub Repository
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
