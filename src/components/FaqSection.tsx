"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is BanglaCLI really 100% free to use?",
      a: "Yes! BanglaCLI itself is completely free and open-source under the MIT license. It connects directly to free tiers: Google AI Studio provides 15 requests per minute with 1M tokens free of charge for models like gemini-2.0-flash. OpenRouter also offers a rich catalog of free coding models.",
    },
    {
      q: "How does BYOK work? Are my API keys safe?",
      a: "BYOK stands for Bring Your Own Key. BanglaCLI is 100% serverless: there are zero middleman proxy servers. Your keys are saved directly on your local machine using the encrypted config store (conf) in your user home directory. All requests travel directly from your terminal to Google or OpenRouter.",
    },
    {
      q: "Can I switch between BUILD mode and PLAN mode during a session?",
      a: "Yes! Simply type /plan to activate read-only mode, or /build to return to autonomous creation mode. You can also type /mode to toggle between them. The live status bar above the prompt updates immediately.",
    },
    {
      q: "What happens if the AI attempts to overwrite my existing files?",
      a: "BanglaCLI has built-in safety guardrails. Before executing any write_file or run_command, it displays the proposed action and halts for user confirmation [Y/n]. You can approve individual actions or type 'a' (Yes to all) to auto-approve actions for that specific session.",
    },
    {
      q: "Can it run completely offline with local models?",
      a: "Yes. By choosing the 'Custom OpenAI-Compatible' provider in banglacli config, you can point the base URL to your local Ollama server (e.g. http://localhost:11434/v1) and run models completely air-gapped without internet access.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-neon text-xs font-mono font-bold uppercase tracking-wider mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Got Questions? We Have Answers.
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="glass-card rounded-2xl overflow-hidden transition-all">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg focus:outline-none"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-emerald-400" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
