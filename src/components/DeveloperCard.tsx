import React from "react";
import Image from "next/image";
import { Code2, Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function DeveloperCard() {
  return (
    <section id="developer" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="glass-panel p-8 sm:p-14 rounded-3xl relative overflow-hidden border border-white/10 shadow-2xl">
        
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          
          {/* Avatar with Conic Glow Ring from Portfolio2 */}
          <div className="relative shrink-0">
            <div className="avatar-glow-ring w-44 h-44 sm:w-52 sm:h-52 relative">
              <div className="avatar-inner">
                <Image
                  src="https://github.com/rakibhasanshuvo712-hub.png"
                  alt="Rakib Hasan Shuvo"
                  width={208}
                  height={208}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
            <div className="absolute -bottom-3 -right-2 px-3.5 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-extrabold font-mono text-xs rounded-full shadow-xl border border-white/20 flex items-center gap-1.5">
              <span>🇧🇩</span> Savar, Dhaka
            </div>
          </div>

          {/* Developer Info */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-neon text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Code2 className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>Architect &amp; Creator</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Rakib Hasan Shuvo
            </h2>
            <p className="bg-gradient-to-r from-amber-200 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent font-bold text-lg sm:text-xl mt-1.5">
              Full-Stack Web Developer (Next.js &amp; MERN Stack)
            </p>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl">
              Based in Savar, Dhaka, Bangladesh. Rakib built <strong>BanglaCLI</strong> to empower the Bangladeshi developer community with autonomous AI agent capabilities — making world-class terminal AI tooling accessible, affordable, and natively fluent in Bangla for everyone.
            </p>

            {/* Skill Tags */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                Next.js 15 &amp; React 19
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                TypeScript &amp; Node.js
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                MERN Stack
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                AI Agent Architecture
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                CLI Tooling
              </span>
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

        </div>

      </div>
    </section>
  );
}
