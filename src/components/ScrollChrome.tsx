"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollChrome() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Progress Bar from Portfolio2 */}
      <div className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-amber-300 via-fuchsia-500 to-cyan-400 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Back to top button */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-[70] rounded-2xl p-3.5 bg-white text-slate-900 shadow-xl transition-all hover:scale-110 active:scale-95 border border-slate-200 hover:border-slate-300"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-rose-600" />
        </button>
      )}
    </>
  );
}
