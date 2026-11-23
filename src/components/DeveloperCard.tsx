import React from "react";
import Image from "next/image";
import { Code2, Mail, Trophy, Zap } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function DeveloperCard() {
  return (
    <section id="developer" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="glass-panel p-8 sm:p-14 rounded-3xl relative overflow-hidden border border-slate-200 shadow-2xl bg-white">
        
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-12 lg:gap-16">
          
          {/* Developer Bio & Details */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rose-200 bg-rose-50 text-rose-700 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Code2 className="w-3.5 h-3.5 text-rose-600" />
              <span>Architect &amp; Creator</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Rakib Hasan Shuvo
            </h2>
            
            <p className="bg-gradient-to-r from-amber-600 via-rose-600 to-cyan-600 bg-clip-text text-transparent font-extrabold text-lg sm:text-xl mt-2">
              Full-Stack Web Developer (Next.js &amp; MERN Stack)
            </p>
            
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl">
              Based in Savar, Dhaka, Bangladesh. Rakib architected and created <strong className="text-slate-900">BanglaCLI</strong> to bring state-of-the-art autonomous AI agent workflows to Bengali developers worldwide — combining natural language comprehension, dual OpenCode Build/Plan modes, and free API access in your terminal.
            </p>

            {/* Metric counters */}
            <div className="mt-7 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-center shadow-xs">
                <p className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-2xl font-black text-transparent">
                  100%
                </p>
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  BYOK &amp; Free
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-center shadow-xs">
                <p className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-2xl font-black text-transparent">
                  3 in 1
                </p>
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  Trilingual
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-center shadow-xs">
                <p className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-2xl font-black text-transparent">
                  MIT
                </p>
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  Open Source
                </p>
              </div>
            </div>

            {/* Skill Tags */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              {["Next.js 15", "React 19", "TypeScript", "Node.js", "AI Agent Loop", "Tailwind CSS", "MERN Stack"].map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full border border-slate-200 bg-slate-100 text-xs font-semibold text-slate-700">
                  {skill}
                </span>
              ))}
            </div>

            {/* Social and Contact Links */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="https://github.com/rakibhasanshuvo712-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-porcelain px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 border-slate-200 text-slate-900 shadow-sm hover:scale-105 transition-all"
              >
                <GitHubIcon className="w-4 h-4 text-slate-900" />
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rakib-hasan-shuvo-7110ba407?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#0077b5] text-white hover:bg-[#006097] text-sm font-bold flex items-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <LinkedInIcon className="w-4 h-4 text-white" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="mailto:rakibhasanshuvo712@gmail.com"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white text-sm font-bold flex items-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Email Rakib</span>
              </a>
            </div>

          </div>

          {/* Photo Showcase (Upright & Stationary Photo with Blurred Conic Aura behind it) */}
          <div className="relative mx-auto w-full max-w-sm order-1 lg:order-2">
            {/* Spinning conic halo behind photo */}
            <div className="ring-conic animate-spin-slow absolute -inset-3 rounded-[2.5rem] opacity-75 blur-[8px]" />
            <div className="absolute -inset-3 rounded-[2.5rem] bg-white" style={{ inset: "2px" }} />
            
            {/* Upright, Non-Rotating Photo Frame */}
            <div className="relative overflow-hidden rounded-[2.2rem] border-2 border-slate-200 shadow-2xl bg-slate-950">
              <Image
                src="https://github.com/rakibhasanshuvo712-hub.png"
                alt="Rakib Hasan Shuvo"
                width={400}
                height={460}
                className="h-[26rem] sm:h-[30rem] w-full object-cover object-top"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Bottom Glass Overlay Card */}
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-slate-900/80 p-4 backdrop-blur-xl text-white">
                <p className="text-base font-extrabold text-white">Rakib Hasan Shuvo</p>
                <p className="bg-gradient-to-r from-amber-300 to-cyan-300 bg-clip-text text-xs font-semibold text-transparent">
                  Creator &amp; Full-Stack Architect • BanglaCLI
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-300">
                  <span>📍</span>
                  <span>Savar, Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div
              className="bg-white/95 border border-slate-200 animate-floaty absolute -left-6 top-8 flex items-center gap-2 rounded-2xl px-3.5 py-2 text-xs font-bold text-slate-900 shadow-xl"
              style={{ animationDelay: "-2s" }}
            >
              <span className="rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 p-1.5 text-white">
                <Trophy size={14} />
              </span>
              <span>BanglaCLI • v1.2.0</span>
            </div>

            <div
              className="bg-white/95 border border-slate-200 animate-floaty absolute -right-4 top-1/2 flex items-center gap-2 rounded-2xl px-3.5 py-2 text-xs font-bold text-slate-900 shadow-xl"
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
