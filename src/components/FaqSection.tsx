"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function FaqSection() {
  const { t, language } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqsByLang = {
    en: [
      {
        q: "Is BanglaCLI really 100% free to use?",
        a: "Yes! BanglaCLI itself is completely free and open-source under the MIT license. It connects directly to free tiers: Google AI Studio provides 15 requests per minute with 1M tokens free of charge for models like gemini-2.0-flash. OpenRouter also offers a rich catalog of free coding models.",
        accent: "border-rose-300 dark:border-rose-500/40 shadow-rose-500/10",
        indicator: "text-rose-600 dark:text-rose-400",
      },
      {
        q: "How does BYOK work? Are my API keys safe in Bangladesh or anywhere?",
        a: "BYOK stands for Bring Your Own Key. BanglaCLI is 100% serverless: there are zero middleman proxy servers. Your keys are saved directly on your local machine using the encrypted config store (conf) in your user home directory. All requests travel directly from your terminal to Google or OpenRouter.",
        accent: "border-amber-300 dark:border-amber-500/40 shadow-amber-500/10",
        indicator: "text-amber-600 dark:text-amber-400",
      },
      {
        q: "Can I switch between BUILD mode and PLAN mode during a session?",
        a: "Yes! Simply type /plan to activate read-only mode, or /build to return to autonomous creation mode. You can also type /mode to toggle between them. The live status bar above the prompt updates immediately.",
        accent: "border-emerald-300 dark:border-emerald-500/40 shadow-emerald-500/10",
        indicator: "text-emerald-600 dark:text-emerald-400",
      },
      {
        q: "What happens if the AI attempts to overwrite my existing files?",
        a: "BanglaCLI has built-in safety guardrails. Before executing any write_file or run_command, it displays the proposed action and halts for user confirmation [Y/n]. You can approve individual actions or type 'a' (Yes to all) to auto-approve actions for that specific session.",
        accent: "border-cyan-300 dark:border-cyan-500/40 shadow-cyan-500/10",
        indicator: "text-cyan-600 dark:text-cyan-400",
      },
      {
        q: "Can it run completely offline with local models in Bangladesh?",
        a: "Yes. By choosing the 'Custom OpenAI-Compatible' provider in banglacli config, you can point the base URL to your local Ollama server (e.g. http://localhost:11434/v1) and run models completely air-gapped without internet access.",
        accent: "border-violet-300 dark:border-violet-500/40 shadow-violet-500/10",
        indicator: "text-violet-600 dark:text-violet-400",
      },
    ],
    bn: [
      {
        q: "বাংলাসিএলআই কি আসলেই ১০০% ফ্রি?",
        a: "হ্যাঁ! বাংলাসিএলআই এমআইটি লাইসেন্সে সম্পূর্ণ ফ্রি ও উন্মুক্ত। এটি গুগল এআই স্টুডিওর ফ্রি টিয়ার (মিনিটে ১৫টি রিকোয়েস্ট ও ১ মিলিয়ন কনটেক্সট) এবং ওপেনরাউটারের ফ্রি মডেলগুলোর সাথে বিনামূল্যে যুক্ত হয়।",
        accent: "border-rose-300 dark:border-rose-500/40 shadow-rose-500/10",
        indicator: "text-rose-600 dark:text-rose-400",
      },
      {
        q: "BYOK কী এবং আমার এপিআই কি কতটা নিরাপদ?",
        a: "BYOK মানে Bring Your Own Key। বাংলাসিএলআই ১০০% সার্ভারলেস। কোনো ট্র্যাকিং বা মধ্যবর্তী সার্ভার নেই। আপনার এপিআই কি আপনার নিজস্ব পিসিতে কনফিগ স্টোরে সুরক্ষিতভাবে এনক্রিপ্ট থাকে।",
        accent: "border-amber-300 dark:border-amber-500/40 shadow-amber-500/10",
        indicator: "text-amber-600 dark:text-amber-400",
      },
      {
        q: "সেশন চলাকালে কি বিল্ড ও প্ল্যান মোড বদলানো যায়?",
        a: "অবশ্যই! /plan লিখলে রিড-অনলি প্ল্যান মোড চালু হয় এবং /build লিখলে সরাসরি স্বয়ংক্রিয় বিল্ডার মোড অন হয়। /mode লিখলেও সহজে সুইচ করা যায়।",
        accent: "border-emerald-300 dark:border-emerald-500/40 shadow-emerald-500/10",
        indicator: "text-emerald-600 dark:text-emerald-400",
      },
      {
        q: "এআই কি আমার ফাইল ভুলবশত পরিবর্তন করতে পারে?",
        a: "না, বাংলাসিএলআই-তে রয়েছে সেফটি গার্ডরেইল। যেকোনো write_file বা run_command চালানোর আগে এটি নিশ্চিতকরণ [Y/n/a] চায়। আপনি অনুমতি দিলেই কেবল ফাইল সেভ বা কমান্ড এক্সিকিউট হয়।",
        accent: "border-cyan-300 dark:border-cyan-500/40 shadow-cyan-500/10",
        indicator: "text-cyan-600 dark:text-cyan-400",
      },
      {
        q: "ইন্টারনেট ছাড়া লোকাল মডেলে কি চালানো সম্ভব?",
        a: "হ্যাঁ, banglacli config দিয়ে Ollama-এর লোকাল ইউআরএল (http://localhost:11434/v1) ধরিয়ে দিলে অফলাইনে সম্পূর্ণ ইন্টারনেট ছাড়াই কোডিং করা যায়।",
        accent: "border-violet-300 dark:border-violet-500/40 shadow-violet-500/10",
        indicator: "text-violet-600 dark:text-violet-400",
      },
    ],
    banglish: [
      {
        q: "BanglaCLI ki shotti 100% free?",
        a: "Haa! BanglaCLI pura open-source MIT licensed. Google AI Studio r 15 RPM free tier ebong OpenRouter er free catalog e direct access paben.",
        accent: "border-rose-300 dark:border-rose-500/40 shadow-rose-500/10",
        indicator: "text-rose-600 dark:text-rose-400",
      },
      {
        q: "BYOK ki ebong amar API key kotoita safe?",
        a: "BYOK mane Bring Your Own Key. BanglaCLI 100% serverless, kono middleman server nei. Key local operating system e encrypted thake.",
        accent: "border-amber-300 dark:border-amber-500/40 shadow-amber-500/10",
        indicator: "text-amber-600 dark:text-amber-400",
      },
      {
        q: "Session e BUILD o PLAN mode switch kora jay?",
        a: "Haa! Shudhu /plan type korle safe read-only hoy, ar /build dile autonomous builder active hoy. /mode diyeo toggle kora jay.",
        accent: "border-emerald-300 dark:border-emerald-500/40 shadow-emerald-500/10",
        indicator: "text-emerald-600 dark:text-emerald-400",
      },
      {
        q: "File overwrite er safety kemon?",
        a: "Full safety ache. Kono file write ba shell command er age BanglaCLI explicit [Y/n/a] confirmation ney.",
        accent: "border-cyan-300 dark:border-cyan-500/40 shadow-cyan-500/10",
        indicator: "text-cyan-600 dark:text-cyan-400",
      },
      {
        q: "Offline local model e cholbe?",
        a: "Haa, Ollama local server (http://localhost:11434/v1) connect kore air-gapped bhabeo BanglaCLI chalano jay.",
        accent: "border-violet-300 dark:border-violet-500/40 shadow-violet-500/10",
        indicator: "text-violet-600 dark:text-violet-400",
      },
    ],
  };

  const currentFaqs = faqsByLang[language] || faqsByLang.en;

  return (
    <section id="faq" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-200 dark:border-cyan-500/30 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>{t.faq.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
          {t.faq.heading}
        </h2>
      </div>

      <div className="space-y-4">
        {currentFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`bg-white dark:bg-white/5 rounded-2xl overflow-hidden transition-all duration-300 border shadow-xs ${
                isOpen ? `${faq.accent} shadow-md` : "border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-950 dark:text-white text-base sm:text-lg focus:outline-none"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isOpen ? `rotate-180 ${faq.indicator}` : "text-slate-400"
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
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
