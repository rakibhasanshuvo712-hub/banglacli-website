import React from "react";
import { Zap, ExternalLink } from "lucide-react";

export default function ModelGrid() {
  return (
    <section id="providers" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-neon text-xs font-mono font-bold uppercase tracking-wider mb-3">
          <Zap className="w-3.5 h-3.5" />
          <span>Zero-Cost Models</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Connect to 100% Free Coding Models
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          No credit card required. BanglaCLI connects directly to the world&apos;s most generous free AI APIs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Google Gemini */}
        <div className="glass-card p-7 rounded-3xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-mono font-bold">Recommended</span>
              <span className="text-xs text-slate-400 font-mono">15 RPM Free</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Google Gemini</h3>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              Native integration with Google&apos;s latest Gemini models featuring up to 1M token context windows.
            </p>
            <div className="space-y-2 font-mono text-xs text-slate-300 mb-6">
              <div className="bg-black/40 p-2.5 rounded-lg border border-white/5 flex items-center justify-between">
                <span>gemini-2.0-flash</span>
                <span className="text-emerald-400 font-bold">Default</span>
              </div>
              <div className="bg-black/40 p-2.5 rounded-lg border border-white/5 flex items-center justify-between">
                <span>gemini-1.5-flash</span>
                <span className="text-slate-400">High speed</span>
              </div>
              <div className="bg-black/40 p-2.5 rounded-lg border border-white/5 flex items-center justify-between">
                <span>gemini-3.8-flash</span>
                <span className="text-cyan-400 font-bold">Next-gen</span>
              </div>
            </div>
          </div>
          <a
            href="https://aistudio.google.com/apikey"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-neon py-2.5 rounded-xl text-center text-xs font-bold flex items-center justify-center gap-2"
          >
            <span>Get Free Key (Google AI Studio)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* OpenRouter Free */}
        <div className="glass-card p-7 rounded-3xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-mono font-bold">Multi-Model</span>
              <span className="text-xs text-slate-400 font-mono">Zero Downtime</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">OpenRouter Free Tier</h3>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              Auto-routing free model aggregator with Particle-1, Nemotron, Gemma 4, and ERNIE models.
            </p>
            <div className="space-y-2 font-mono text-xs text-slate-300 mb-6">
              <div className="bg-black/40 p-2.5 rounded-lg border border-white/5 flex items-center justify-between">
                <span>openrouter/free</span>
                <span className="text-cyan-400 font-bold">Auto Route</span>
              </div>
              <div className="bg-black/40 p-2.5 rounded-lg border border-white/5 flex items-center justify-between">
                <span>particle-1:free</span>
                <span className="text-slate-400">1M Context</span>
              </div>
              <div className="bg-black/40 p-2.5 rounded-lg border border-white/5 flex items-center justify-between">
                <span>gemma-4-31b-it:free</span>
                <span className="text-violet-400 font-bold">Reasoning</span>
              </div>
            </div>
          </div>
          <a
            href="https://openrouter.ai/keys"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-glass py-2.5 rounded-xl text-center text-xs font-bold flex items-center justify-center gap-2 hover:text-cyan-400"
          >
            <span>Get Free Key (OpenRouter)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Custom / Groq / Ollama */}
        <div className="glass-card p-7 rounded-3xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-full bg-violet-400/10 text-violet-400 text-xs font-mono font-bold">Custom / Offline</span>
              <span className="text-xs text-slate-400 font-mono">100% Private</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Groq, DeepSeek &amp; Ollama</h3>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              Point BanglaCLI to any OpenAI-compatible API or run local models completely offline via Ollama.
            </p>
            <div className="space-y-2 font-mono text-xs text-slate-300 mb-6">
              <div className="bg-black/40 p-2.5 rounded-lg border border-white/5 flex items-center justify-between">
                <span>Groq (Llama 3.3 70B)</span>
                <span className="text-purple-400 font-bold">500+ T/s</span>
              </div>
              <div className="bg-black/40 p-2.5 rounded-lg border border-white/5 flex items-center justify-between">
                <span>Ollama Local</span>
                <span className="text-amber-400 font-bold">Offline</span>
              </div>
              <div className="bg-black/40 p-2.5 rounded-lg border border-white/5 flex items-center justify-between">
                <span>DeepSeek Chat</span>
                <span className="text-blue-400 font-bold">API</span>
              </div>
            </div>
          </div>
          <a
            href="https://console.groq.com/keys"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-glass py-2.5 rounded-xl text-center text-xs font-bold flex items-center justify-center gap-2 hover:text-purple-400"
          >
            <span>Get Free Key (Groq Cloud)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
