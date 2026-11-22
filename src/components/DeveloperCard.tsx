import React from "react";
import Image from "next/image";
import { Code2, Mail, Trophy, Zap, Star } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function DeveloperCard() {
  return (
    <section id="developer" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="glass-panel p-8 sm:p-14 rounded-3xl relative overflow-hidden border border-white/10 shadow-2xl">
        
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-12 lg:gap-16">
          
          {/* Developer Bio & Details */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-neon text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Code2 className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>Architect &amp; Creator</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Rakib Hasan Shuvo
            </h2>
            
            <p className="bg-gradient-to-r from-amber-200 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent font-bold text-lg sm:text-xl mt-2">
              Full-Stack Web Developer (Next.js &amp; MERN Stack)
            </p>
            
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl">
              Based in Savar, Dhaka, Bangladesh. Rakib architected and created <strong>BanglaCLI</strong> to bring state-of-the-art autonomous AI agent workflows to Bengali developers worldwide — combining natural language comprehension, dual OpenCode Build/Plan modes, and free API access in your terminal.
            </p>

            {/* Metric counters like in Portfolio2 */}
            <div className="mt-7 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
              <div className="glass rounded-2xl px-4 py-3 text-center">
                <p className="bg-gradient-to-r from-amber-200 to-fuchsia-300 bg-clip-text text-2xl font-black text-transparent">
                  100%
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                  BYOK &amp; Free
                </p>
              </div>
              <div className="glass rounded-2xl px-4 py-3 text-center">
                <p className="bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-2xl font-black text-transparent">
                  3 in 1
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                  Trilingual
                </p>
              </div>
              <div className="glass rounded-2xl px-4 py-3 text-center">
                <p className="bg-gradient-to-r from-fuchsia-400 to-violet-300 bg-clip-text text-2xl font-black text-transparent">
                  MIT
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                  Open Source
                </p>
              </div>
            </div>

            {/* Skill Tags */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              {["Next.js 15", "React 19", "TypeScript", "Node.js", "AI Agent Loop", "Tailwind CSS", "MERN Stack"].map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-slate-200">
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
                className="btn-secondary-glass px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 hover:border-violet-500/50"
              >
                <GitHubIcon className="w-4 h-4 text-white" />
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rakib-hasan-shuvo-7110ba407?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#0077b5]/20 hover:bg-[#0077b5]/35 text-sky-300 border border-[#0077b5]/40 text-sm font-semibold flex items-center gap-2 transition-all hover:scale-105"
              >
                <LinkedInIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="mailto:rakibhasanshuvo712@gmail.com"
                className="px-5 py-2.5 rounded-xl bg-fuchsia-500/10 hover:bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30 text-sm font-semibold flex items-center gap-2 transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                <span>rakibhasanshuvo712@gmail.com</span>
              </a>
            </div>

          </div>

          {/* Photo Showcase from Portfolio2 (Upright & Stationary Photo with Blurred Conic Aura behind it) */}
          <div className="relative mx-auto w-full max-w-sm order-1 lg:order-2">
            {/* Spinning conic halo behind photo */}
            <div className="ring-conic animate-spin-slow absolute -inset-3 rounded-[2.5rem] opacity-75 blur-[8px]" />
            <div className="absolute -inset-3 rounded-[2.5rem] bg-[#06040f]" style={{ inset: "2px" }} />
            
            {/* Upright, Non-Rotating Photo Frame */}
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/20 shadow-2xl bg-[#06040f]">
              <Image
                src="https://github.com/rakibhasanshuvo712-hub.png"
                alt="Rakib Hasan Shuvo"
                width={400}
                height={460}
                className="h-[26rem] sm:h-[30rem] w-full object-cover object-top"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06040f] via-[#06040f]/20 to-transparent" />
              
              {/* Bottom Glass Overlay Card */}
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-black/60 p-4 backdrop-blur-xl">
                <p className="text-base font-extrabold text-white">Rakib Hasan Shuvo</p>
                <p className="bg-gradient-to-r from-amber-200 to-cyan-300 bg-clip-text text-xs font-semibold text-transparent">
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
              className="glass animate-floaty absolute -left-6 top-8 flex items-center gap-2 rounded-2xl px-3.5 py-2 text-xs font-bold text-white shadow-xl"
              style={{ animationDelay: "-2s" }}
            >
              <span className="rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 p-1.5 text-slate-950">
                <Trophy size={14} />
              </span>
              <span>BanglaCLI • v1.2.0</span>
            </div>

            <div
              className="glass animate-floaty absolute -right-4 top-1/2 flex items-center gap-2 rounded-2xl px-3.5 py-2 text-xs font-bold text-white shadow-xl"
              style={{ animationDelay: "-3.5s" }}
            >
              <span className="rounded-lg bg-gradient-to-r from-fuchsia-500 to-violet-500 p-1.5 text-white">
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
