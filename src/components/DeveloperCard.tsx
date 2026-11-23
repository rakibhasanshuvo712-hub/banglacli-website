"use client";

import React from "react";
import Image from "next/image";
import { Code2, Mail, Trophy, Zap, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { useApp } from "@/context/AppContext";

export default function DeveloperCard() {
  const { t } = useApp();

  return (
    <section id="developer" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="glass-panel p-5 sm:p-10 lg:p-14 rounded-3xl relative overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
        
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-12 lg:gap-16">
          
          {/* Developer Bio & Details */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rose-200 dark:border-rose-500/30 bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Code2 className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
              <span>{t.developer.badge}</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
              Rakib Hasan Shuvo
            </h2>
            
            <p className="bg-gradient-to-r from-amber-600 via-rose-600 to-cyan-600 dark:from-amber-400 dark:via-fuchsia-400 dark:to-cyan-300 bg-clip-text text-transparent font-extrabold text-lg sm:text-xl mt-2">
              {t.developer.role}
            </p>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl">
              {t.developer.bio}
            </p>

            {/* Metric counters */}
            <div className="mt-7 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
              <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-3 text-center shadow-xs">
                <p className="bg-gradient-to-r from-amber-600 to-rose-600 dark:from-amber-300 dark:to-rose-400 bg-clip-text text-2xl font-black text-transparent">
                  100%
                </p>
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  BYOK &amp; Free
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-3 text-center shadow-xs">
                <p className="bg-gradient-to-r from-cyan-600 to-emerald-600 dark:from-cyan-300 dark:to-emerald-400 bg-clip-text text-2xl font-black text-transparent">
                  3 in 1
                </p>
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Trilingual
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-3 text-center shadow-xs">
                <p className="bg-gradient-to-r from-violet-600 to-pink-600 dark:from-violet-400 dark:to-pink-300 bg-clip-text text-2xl font-black text-transparent">
                  MIT
                </p>
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Open Source
                </p>
              </div>
            </div>

            {/* Skill Tags */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              {["Next.js 15", "React 19", "TypeScript", "Node.js", "AI Agent Loop", "Tailwind CSS", "MERN Stack"].map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {skill}
                </span>
              ))}
            </div>

            {/* Social and Contact Links */}
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 w-full">
              <a
                href="https://github.com/rakibhasanshuvo712-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-porcelain px-5 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 border-slate-200 dark:border-white/10 shadow-sm hover:scale-105 transition-all text-center"
              >
                <GitHubIcon className="w-4 h-4 text-slate-900 dark:text-white" />
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rakib-hasan-shuvo-7110ba407?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#0077b5] text-white hover:bg-[#006097] text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95 text-center"
              >
                <LinkedInIcon className="w-4 h-4 text-white" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="mailto:rakibhasanshuvo712@gmail.com"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95 text-center"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Email Rakib</span>
              </a>
            </div>

          </div>

          {/* Photo Showcase with User-Uploaded Portrait */}
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm order-1 lg:order-2">
            {/* Spinning conic halo behind photo */}
            <div className="ring-conic animate-spin-slow absolute -inset-2.5 rounded-[2.5rem] opacity-75 blur-[8px]" />
            <div className="absolute -inset-2.5 rounded-[2.5rem] bg-white dark:bg-[#06040f]" style={{ inset: "2px" }} />
            
            {/* Upright, Stationary Photo Frame with user's uploaded photo */}
            <div className="relative overflow-hidden rounded-[2.2rem] border-2 border-slate-200 dark:border-white/20 shadow-2xl bg-slate-950">
              <Image
                src="/rakib-profile.jpg"
                alt="Rakib Hasan Shuvo"
                width={500}
                height={600}
                className="h-[22rem] sm:h-[28rem] lg:h-[30rem] w-full object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Bottom Glass Overlay Card */}
              <div className="absolute inset-x-3.5 bottom-3.5 sm:inset-x-4 sm:bottom-4 rounded-2xl border border-white/20 bg-slate-900/85 p-3.5 sm:p-4 backdrop-blur-xl text-white shadow-lg">
                <p className="text-base font-extrabold text-white">Rakib Hasan Shuvo</p>
                <p className="bg-gradient-to-r from-amber-300 to-cyan-300 bg-clip-text text-xs font-semibold text-transparent">
                  Creator &amp; Full-Stack Architect • BanglaCLI
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{t.developer.location}</span>
                </div>
              </div>
            </div>

            {/* Floating Badges (hidden on narrow screens to prevent horizontal overflow) */}
            <div
              className="hidden sm:flex bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 animate-floaty absolute -left-6 top-8 items-center gap-2 rounded-2xl px-3.5 py-2 text-xs font-bold text-slate-900 dark:text-white shadow-xl"
              style={{ animationDelay: "-2s" }}
            >
              <span className="rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 p-1.5 text-white">
                <Trophy size={14} />
              </span>
              <span>BanglaCLI • v2.0.0</span>
            </div>

            <div
              className="hidden sm:flex bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 animate-floaty absolute -right-4 top-1/2 items-center gap-2 rounded-2xl px-3.5 py-2 text-xs font-bold text-slate-900 dark:text-white shadow-xl"
              style={{ animationDelay: "-3.5s" }}
            >
              <span className="rounded-lg bg-gradient-to-r from-rose-500 to-violet-500 p-1.5 text-white">
                <Zap size={14} />
              </span>
              <span>Next.js + AI</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
