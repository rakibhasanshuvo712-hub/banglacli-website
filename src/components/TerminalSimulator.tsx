"use client";

import React, { useState, useEffect, useRef } from "react";
import { Send, Play, Terminal } from "lucide-react";

interface Step {
  type: "user" | "mode-switch" | "ai-thought" | "tool-call" | "confirm" | "tool-result" | "ai-final";
  text?: string;
  name?: string;
  arg?: string;
}

interface Scenario {
  mode: "BUILD" | "PLAN";
  model: string;
  steps: Step[];
}

export default function TerminalSimulator() {
  const [activeScenario, setActiveScenario] = useState<"bangla" | "banglish" | "english" | "plan">("bangla");
  const [currentMode, setCurrentMode] = useState<"BUILD" | "PLAN">("BUILD");
  const [currentModel, setCurrentModel] = useState("gemini-2.0-flash");
  const [lines, setLines] = useState<Step[]>([]);
  const [inputValue, setInputValue] = useState("");
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const timeoutIdsRef = useRef<NodeJS.Timeout[]>([]);

  const scenarios: Record<string, Scenario> = {
    bangla: {
      mode: "BUILD",
      model: "gemini-2.0-flash",
      steps: [
        { type: "user", text: "একটি Express.js REST API বানাও JWT auth সহ" },
        { type: "ai-thought", text: "🔍 বর্তমান প্রোজেক্ট ডিরেক্টরি এবং কনফিগ খতিয়ে দেখছি..." },
        { type: "tool-call", name: "list_files", arg: "." },
        { type: "tool-result", text: "✓ ফাইল তালিকা পাওয়া গেছে (package.json, src/index.ts)" },
        { type: "tool-call", name: "write_file", arg: "src/routes/auth.js" },
        { type: "confirm", text: "src/routes/auth.js ফাইলটি কি তৈরি বা আপডেট করবেন? [Y/n/a]: Y" },
        { type: "tool-result", text: "✓ src/routes/auth.js সফলভাবে সেভ করা হয়েছে (Register & Login with JWT + bcrypt)." },
        { type: "tool-call", name: "run_command", arg: "npm install jsonwebtoken bcryptjs" },
        { type: "confirm", text: "Execute terminal command 'npm install jsonwebtoken bcryptjs'? [Y/n/a]: Y" },
        { type: "tool-result", text: "✓ Dependencies successfully installed (+2 packages in 1.1s)" },
        { type: "ai-final", text: "✅ চমৎকার! আপনার Express REST API এর JWT Authentication সফলভাবে ইমপ্লিমেন্ট করা হয়েছে।\n- 📁 Route: src/routes/auth.js\n- 🔐 Endpoints: POST /api/auth/register, POST /api/auth/login\n- 🚀 আপনি 'node src/index.js' দিয়ে সার্ভার রান করে টেস্ট করতে পারেন।" }
      ]
    },
    banglish: {
      mode: "BUILD",
      model: "openrouter/free",
      steps: [
        { type: "user", text: "Ekta React counter app banaye dao Tailwind CSS diye" },
        { type: "ai-thought", text: "⚡ React component and Tailwind classes setup shuru korchi..." },
        { type: "tool-call", name: "write_file", arg: "src/Counter.jsx" },
        { type: "confirm", text: "Allow write to 'src/Counter.jsx'? [Y/n/a]: Y" },
        { type: "tool-result", text: "✓ src/Counter.jsx created with state hooks and smooth Tailwind animations." },
        { type: "ai-final", text: "Done! React Counter component ready kora hoyeche with Increment, Decrement & Reset buttons. Tailwind CSS styled and fully responsive! 🚀" }
      ]
    },
    english: {
      mode: "BUILD",
      model: "gemini-2.0-flash",
      steps: [
        { type: "user", text: "Create a rate-limiting middleware using Redis and Express" },
        { type: "ai-thought", text: "Designing sliding-window rate limiter with ioredis..." },
        { type: "tool-call", name: "write_file", arg: "src/middleware/rateLimiter.ts" },
        { type: "confirm", text: "Allow write to 'src/middleware/rateLimiter.ts'? [Y/n/a]: a" },
        { type: "tool-result", text: "✓ src/middleware/rateLimiter.ts written with sliding-window algorithm (100 req/min)." },
        { type: "tool-call", name: "run_command", arg: 'npm test -- --grep "rateLimiter"' },
        { type: "tool-result", text: "✓ Tests passed: 4 passed, 0 failed" },
        { type: "ai-final", text: "Rate limiter middleware is in place and verified with test suite. 100 req/min threshold configured with custom 429 Retry-After headers." }
      ]
    },
    plan: {
      mode: "PLAN",
      model: "gemini-2.0-flash",
      steps: [
        { type: "user", text: "/plan Analyze existing architecture and prepare TypeScript migration roadmap" },
        { type: "mode-switch", text: "📋 PLAN MODE ACTIVATED (Senior Architect - Safe Read-Only Mode)" },
        { type: "ai-thought", text: "Auditing codebase hierarchy and dependencies in read-only mode..." },
        { type: "tool-call", name: "list_files", arg: "." },
        { type: "tool-result", text: "Found 14 JavaScript files across src/routes, src/models, src/utils" },
        { type: "tool-call", name: "read_file", arg: "package.json" },
        { type: "tool-result", text: "Inspected package.json: Node 18, CommonJS module type detected" },
        { type: "ai-final", text: "📋 MIGRATION BLUEPRINT (Architect Review):\n1. Phase 1: Initialize tsconfig.json with strict typechecking enabled.\n2. Phase 2: Install devDependencies (@types/node, @types/express, typescript, tsx).\n3. Phase 3: Migrate utility files first (src/utils/*.ts) to establish foundational types.\n4. Phase 4: Convert route handlers and add Express Request/Response typing.\n\nType `/build` when ready to let BanglaCLI execute this migration automatically!" }
      ]
    }
  };

  const startScenario = (key: "bangla" | "banglish" | "english" | "plan") => {
    timeoutIdsRef.current.forEach((id) => clearTimeout(id));
    timeoutIdsRef.current = [];
    setLines([]);
    setActiveScenario(key);

    const sc = scenarios[key];
    setCurrentMode(sc.mode);
    setCurrentModel(sc.model);

    let delay = 100;
    sc.steps.forEach((step) => {
      const id = setTimeout(() => {
        setLines((prev) => [...prev, step]);
      }, delay);
      timeoutIdsRef.current.push(id);
      delay += step.type === "ai-final" ? 550 : 380;
    });
  };

  useEffect(() => {
    startScenario("bangla");
    return () => {
      timeoutIdsRef.current.forEach((id) => clearTimeout(id));
    };
  }, []);

  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
    }
  }, [lines]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const raw = inputValue.trim();
    setInputValue("");

    setLines((prev) => [...prev, { type: "user", text: raw }]);

    if (raw === "/plan") {
      setCurrentMode("PLAN");
      setLines((prev) => [
        ...prev,
        { type: "mode-switch", text: "📋 Switched to PLAN MODE (Read-only architectural analysis enabled)." },
      ]);
      return;
    }

    if (raw === "/build") {
      setCurrentMode("BUILD");
      setLines((prev) => [
        ...prev,
        { type: "mode-switch", text: "⚡ Switched to BUILD MODE (Autonomous file creation & command execution enabled)." },
      ]);
      return;
    }

    if (raw === "/mode") {
      const next = currentMode === "BUILD" ? "PLAN" : "BUILD";
      setCurrentMode(next);
      setLines((prev) => [
        ...prev,
        {
          type: "mode-switch",
          text: `Active mode is now: ${next === "PLAN" ? "📋 PLAN MODE (Read-Only)" : "⚡ BUILD MODE (Full Agent)"}`,
        },
      ]);
      return;
    }

    if (raw === "/model") {
      const models = ["gemini-2.0-flash", "openrouter/free", "particle-1:free", "groq/llama-3.3-70b"];
      const next = models[(models.indexOf(currentModel) + 1) % models.length];
      setCurrentModel(next);
      setLines((prev) => [
        ...prev,
        { type: "ai-thought", text: `Switched model to: 🤖 ${next}` },
      ]);
      return;
    }

    if (raw === "/help") {
      setLines((prev) => [
        ...prev,
        {
          type: "ai-final",
          text: "BanglaCLI Slash Commands:\n/mode - Toggle between BUILD and PLAN modes\n/plan - Activate safe read-only architect mode\n/build - Activate autonomous builder mode\n/model - Switch active AI model\n/clear - Clear terminal output",
        },
      ]);
      return;
    }

    if (raw === "/clear" || raw === "clear") {
      setLines([]);
      return;
    }

    // Generic prompt response
    setLines((prev) => [
      ...prev,
      { type: "ai-thought", text: `Processing prompt in ${currentMode} mode using ${currentModel}...` },
    ]);

    setTimeout(() => {
      setLines((prev) => [
        ...prev,
        {
          type: "ai-final",
          text: `BanglaCLI (${currentMode} Mode):\nআপনার নির্দেশনা গ্রহণ করা হয়েছে: "${raw}"\nপ্রোজেক্টের রুট ডিরেক্টরি এবং ডিপেন্ডেন্সি এনালাইসিস করে যথাযথ ফাইল এবং কমান্ড তৈরি করা হবে। বাস্তব টার্মিনালে রান করতে 'npx banglacli' টাইপ করুন।`,
        },
      ]);
    }, 450);
  };

  return (
    <section id="simulator" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-neon text-xs font-mono font-bold uppercase tracking-wider mb-3">
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Interactive Terminal Playground</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Test BanglaCLI Directly in Your Browser
        </h2>
        <p className="mt-3 text-slate-400 text-base">
          Click any preset scenario below to experience how BanglaCLI understands natural language prompts, verifies safety with <code className="text-red-400">[Y/n/a]</code>, and creates production-ready code.
        </p>
      </div>

      {/* Preset Scenario Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6 max-w-4xl mx-auto">
        <button
          onClick={() => startScenario("bangla")}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
            activeScenario === "bangla"
              ? "bg-emerald-400/20 text-emerald-400 border border-emerald-400/40 shadow-lg shadow-emerald-400/20"
              : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
          }`}
        >
          <span className="text-base">🇧🇩</span>
          <span className="font-bengali">বাংলা: Express REST API (JWT)</span>
        </button>
        <button
          onClick={() => startScenario("banglish")}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
            activeScenario === "banglish"
              ? "bg-emerald-400/20 text-emerald-400 border border-emerald-400/40 shadow-lg shadow-emerald-400/20"
              : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
          }`}
        >
          <span className="text-base">🔤</span>
          <span>Banglish: React Counter App</span>
        </button>
        <button
          onClick={() => startScenario("english")}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
            activeScenario === "english"
              ? "bg-emerald-400/20 text-emerald-400 border border-emerald-400/40 shadow-lg shadow-emerald-400/20"
              : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
          }`}
        >
          <span className="text-base">🇬🇧</span>
          <span>English: Rate Limiter Middleware</span>
        </button>
        <button
          onClick={() => startScenario("plan")}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
            activeScenario === "plan"
              ? "bg-cyan-400/20 text-cyan-400 border border-cyan-400/40 shadow-lg shadow-cyan-400/20"
              : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
          }`}
        >
          <span className="text-base">📋</span>
          <span>PLAN Mode: Architecture Audit</span>
        </button>
      </div>

      {/* Titanium Terminal Window */}
      <div className="terminal-window max-w-4xl mx-auto">
        
        {/* Titlebar */}
        <div className="terminal-titlebar select-none">
          <div className="flex items-center gap-2.5">
            <span className="traffic-light light-red"></span>
            <span className="traffic-light light-yellow"></span>
            <span className="traffic-light light-green"></span>
            <span className="ml-2 text-slate-400 text-xs font-mono font-medium hidden sm:inline">
              banglacli terminal ~ (interactive)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div
              className={`px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                currentMode === "PLAN"
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                  : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
              }`}
            >
              <span>{currentMode === "PLAN" ? "📋" : "⚡"}</span>
              <span>{currentMode} MODE</span>
            </div>
            <div className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10 hidden sm:flex items-center gap-1.5">
              <span>🤖</span>
              <span>{currentModel}</span>
            </div>
            <button
              onClick={() => setLines([])}
              className="text-slate-400 hover:text-white text-xs px-2.5 py-1 rounded-md hover:bg-white/10 transition-colors"
              title="Clear Screen"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Output Viewport */}
        <div
          ref={viewportRef}
          className="p-5 sm:p-7 min-h-[440px] max-h-[520px] overflow-y-auto space-y-3 font-mono text-xs sm:text-sm leading-relaxed"
          style={{ background: "radial-gradient(circle at 50% 0%, #0d121c 0%, #080c13 100%)" }}
        >
          {lines.map((step, idx) => (
            <div key={idx} className="animate-fadeIn">
              {step.type === "user" && (
                <div>
                  <span className="text-emerald-400 font-bold select-none">banglacli &gt;</span>{" "}
                  <span className="text-white font-semibold">{step.text}</span>
                </div>
              )}
              {step.type === "mode-switch" && (
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-xs">
                  {step.text}
                </div>
              )}
              {step.type === "ai-thought" && (
                <div className="text-slate-400 italic text-xs">{step.text}</div>
              )}
              {step.type === "tool-call" && (
                <div>
                  <span className="term-badge term-badge-tool">[TOOL]</span>
                  <span className="text-purple-300 font-bold">{step.name}</span>(
                  <span className="text-amber-300">{step.arg}</span>)
                </div>
              )}
              {step.type === "confirm" && (
                <div>
                  <span className="term-badge term-badge-confirm">[CONFIRM]</span>
                  <span className="text-red-300 font-semibold">{step.text}</span>
                </div>
              )}
              {step.type === "tool-result" && (
                <div className="text-emerald-400 text-xs ml-4">{step.text}</div>
              )}
              {step.type === "ai-final" && (
                <div className="p-4 mt-2 rounded-2xl bg-white/[0.04] border border-white/10 text-slate-200 leading-relaxed font-sans shadow-lg whitespace-pre-line">
                  {step.text}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSubmit} className="bg-[#0b1019] border-t border-white/10 p-3 sm:p-4 flex items-center gap-3">
          <span className="text-emerald-400 font-bold select-none text-sm font-mono">banglacli &gt;</span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a command (/plan, /build, /model, /help) or prompt in বাংলা / Banglish / English..."
            className="w-full bg-transparent border-0 text-white placeholder-slate-500 focus:outline-none focus:ring-0 text-xs sm:text-sm font-mono"
            autoComplete="off"
            spellCheck="false"
          />
          <button
            type="submit"
            className="btn-primary-neon px-4 py-2 rounded-lg text-xs font-bold shrink-0 flex items-center gap-1.5 transition-all"
          >
            <span>Send</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Shortcut Footer */}
        <div className="bg-[#06090e] px-4 py-2 border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-3">
            <span>Quick Commands:</span>
            <button type="button" onClick={() => { setInputValue("/plan"); }} className="text-cyan-400 hover:underline">/plan</button>
            <button type="button" onClick={() => { setInputValue("/build"); }} className="text-emerald-400 hover:underline">/build</button>
            <button type="button" onClick={() => { setInputValue("/mode"); }} className="text-amber-400 hover:underline">/mode</button>
            <button type="button" onClick={() => { setInputValue("/model"); }} className="text-violet-400 hover:underline">/model</button>
            <button type="button" onClick={() => { setInputValue("/help"); }} className="text-slate-300 hover:underline">/help</button>
          </div>
          <span className="text-slate-600">Press Enter to execute</span>
        </div>

      </div>

    </section>
  );
}
