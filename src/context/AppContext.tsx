"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, TranslationDictionary, translations } from "@/data/translations";

interface AppContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read stored theme
    const storedTheme = localStorage.getItem("banglacli_theme") as "light" | "dark" | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Read stored language
    const storedLang = localStorage.getItem("banglacli_lang") as Language | null;
    if (storedLang && ["en", "bn", "banglish"].includes(storedLang)) {
      setLanguageState(storedLang);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("banglacli_theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("banglacli_lang", lang);
  };

  const currentTranslations = translations[language] || translations.en;

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        language,
        setLanguage,
        t: currentTranslations,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
