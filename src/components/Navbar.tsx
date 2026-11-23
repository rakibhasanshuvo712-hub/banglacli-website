"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, Menu, X } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#04060a]/80 border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 p-0.5 shadow-xl shadow-emerald-500/25 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#080c13] rounded-[14px] flex items-center justify-center relative overflow-hidden">
              <span className="absolute w-5 h-5 rounded-full bg-red-600/90 -top-1.5 -right-1.5 blur-[1px]"></span>
              <span className="font-mono font-extrabold text-emerald-400 text-lg tracking-tighter">&gt;_</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-black text-xl text-white tracking-tight">
                Bangla<span className="text-emerald-400">CLI</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold tracking-wider rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/30">
                v1.2.0
              </span>
            </div>
            <span className="text-[11px] text-slate-400 -mt-0.5 font-bengali font-medium">
              বাংলা কোডিং এজেন্ট • ওপেনসোর্স
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="#simulator" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live Simulator</span>
          </Link>
          <Link href="#features" className="hover:text-emerald-400 transition-colors">
            Features
          </Link>
          <Link href="#modes" className="hover:text-emerald-400 transition-colors">
            Build &amp; Plan
          </Link>
          <Link href="#providers" className="hover:text-emerald-400 transition-colors">
            Free AI Models
          </Link>
          <Link href="#quickstart" className="hover:text-emerald-400 transition-colors">
            Docs
          </Link>
          <Link href="#developer" className="hover:text-emerald-400 transition-colors">
            Creator
          </Link>
          <Link href="#faq" className="hover:text-emerald-400 transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/rakibhasanshuvo712-hub/banglacli-website"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-glass px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium border border-white/10 hover:border-emerald-500/40"
          >
            <GitHubIcon className="w-4 h-4 text-white" />
            <span>GitHub</span>
            <span className="bg-emerald-500/10 px-2 py-0.5 rounded text-[11px] text-emerald-400 font-mono border border-emerald-500/20">
              ★ Star
            </span>
          </a>
          <a
            href="#quickstart"
            className="btn-prismatic px-4 py-2 rounded-xl text-sm font-black flex items-center gap-2 text-slate-950 shadow-md shadow-rose-500/20 transition-transform hover:scale-105"
          >
            <Terminal className="w-4 h-4" />
            <span>Install CLI</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#04060a]/95 backdrop-blur-2xl px-6 py-6 space-y-4">
          <Link
            href="#simulator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-emerald-400 font-medium py-1"
          >
            ⚡ Live Terminal Simulator
          </Link>
          <Link
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-emerald-400 font-medium py-1"
          >
            ✨ Features
          </Link>
          <Link
            href="#modes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-emerald-400 font-medium py-1"
          >
            📋 Build &amp; Plan Modes
          </Link>
          <Link
            href="#providers"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-emerald-400 font-medium py-1"
          >
            🤖 Free AI Models
          </Link>
          <Link
            href="#quickstart"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-emerald-400 font-medium py-1"
          >
            🚀 Quickstart Guide
          </Link>
          <Link
            href="#developer"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-emerald-400 font-medium py-1"
          >
            👨‍💻 Developer: Rakib Hasan Shuvo
          </Link>
          <Link
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-emerald-400 font-medium py-1"
          >
            ❓ FAQ
          </Link>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="https://github.com/rakibhasanshuvo712-hub/banglacli-website"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-white/5 text-center text-slate-200 border border-white/10 flex items-center justify-center gap-2 font-medium"
            >
              <GitHubIcon className="w-4 h-4 text-white" /> GitHub Repository
            </a>
            <a
              href="https://www.linkedin.com/in/rakib-hasan-shuvo-7110ba407?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-blue-600/20 text-center text-blue-300 border border-blue-500/30 flex items-center justify-center gap-2 font-medium"
            >
              <LinkedInIcon className="w-4 h-4 text-sky-400" /> Connect on LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
