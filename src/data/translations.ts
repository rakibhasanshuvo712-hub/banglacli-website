export type Language = "en" | "bn" | "banglish";

export interface TranslationDictionary {
  nav: {
    simulator: string;
    features: string;
    architecture: string;
    modes: string;
    models: string;
    docs: string;
    creator: string;
    faq: string;
    installCli: string;
    github: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleBn: string;
    titlePart2: string;
    titleBanglish: string;
    titlePart3: string;
    titleEn: string;
    titleEnd: string;
    subtitle: string;
    trySimulator: string;
    exploreModes: string;
    metricByok: string;
    metricByokLabel: string;
    metricLang: string;
    metricLangLabel: string;
    metricModes: string;
    metricModesLabel: string;
    metricCost: string;
    metricCostLabel: string;
    copyCmd: string;
    copied: string;
  };
  features: {
    badge: string;
    heading: string;
    subheading: string;
    card1Tag: string;
    card1Title: string;
    card1Desc: string;
    card2Tag: string;
    card2Title: string;
    card2Desc: string;
    card3Tag: string;
    card3Title: string;
    card3Desc: string;
    card4Tag: string;
    card4Title: string;
    card4Desc: string;
    card5Tag: string;
    card5Title: string;
    card5Desc: string;
    card6Tag: string;
    card6Title: string;
    card6Desc: string;
  };
  architecture: {
    badge: string;
    heading: string;
    subheading: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    toolsTitle: string;
    envTitle: string;
  };
  modes: {
    badge: string;
    heading: string;
    subheading: string;
    buildTitle: string;
    buildTag: string;
    buildDesc: string;
    planTitle: string;
    planTag: string;
    planDesc: string;
    chatTitle: string;
    chatTag: string;
    chatDesc: string;
  };
  models: {
    badge: string;
    heading: string;
    subheading: string;
  };
  docs: {
    badge: string;
    heading: string;
    subheading: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  developer: {
    badge: string;
    role: string;
    bio: string;
    location: string;
  };
  faq: {
    badge: string;
    heading: string;
  };
  cta: {
    badge: string;
    heading: string;
    subheading: string;
    button: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      simulator: "Live Simulator",
      features: "Features",
      architecture: "Architecture",
      modes: "3 Modes",
      models: "AI Models",
      docs: "Docs",
      creator: "Creator",
      faq: "FAQ",
      installCli: "Install CLI",
      github: "GitHub",
    },
    hero: {
      badge: "BanglaCLI v4.2.7 Released • The Trilingual AI Coding Agent from Bangladesh",
      titlePart1: "Code Faster in ",
      titleBn: "বাংলা",
      titlePart2: ", ",
      titleBanglish: "Banglish",
      titlePart3: " & ",
      titleEn: "English",
      titleEnd: " Directly in Your Terminal.",
      subtitle:
        "BanglaCLI 4.2.7 is an autonomous, serverless terminal AI coding agent from Bangladesh. Powered by Zero-Key Starter AI, Dynamic Free Model Explorer & Auto-Cascade, Multimodal Vision (/image), Multi-Agent WebSocket Mesh, OpenCode-style 3 Modes (Build, Plan & Chat), and 12 autonomous native tools.",
      trySimulator: "Try Live Terminal Simulator",
      exploreModes: "Explore 3 Modes (BUILD, PLAN, CHAT)",
      metricByok: "100%",
      metricByokLabel: "BYOK & Zero-Key Start",
      metricLang: "3 Languages",
      metricLangLabel: "বাংলা, Banglish, English",
      metricModes: "3 Modes",
      metricModesLabel: "BUILD, PLAN & CHAT",
      metricCost: "0 Taka / $0",
      metricCostLabel: "Free Tiers in Bangladesh",
      copyCmd: "Copy Command",
      copied: "Copied!",
    },
    features: {
      badge: "Autonomous Superpowers",
      heading: "Engineered for Developers in Bangladesh & Beyond",
      subheading:
        "No rigid syntax or robotic translation. BanglaCLI speaks your everyday programming dialect — technical terms, Banglish phonetics, and clean English specifications.",
      card1Tag: "Trilingual Core",
      card1Title: "Native Trilingual Comprehension",
      card1Desc:
        "Type naturally in proper বাংলা ('একটি auth middleware বানাও'), Banglish ('ekta mongo schema banai daw'), or English. BanglaCLI responds in the same language.",
      card2Tag: "3 Architecture Modes",
      card2Title: "OpenCode 3 Modes",
      card2Desc:
        "Switch effortlessly between ⚡ BUILD Mode (creates files, runs tests), 📋 PLAN Mode (read-only architectural audit), and 💬 CHAT Mode (conversational Q&A & code explanations).",
      card3Tag: "Zero Friction & Privacy",
      card3Title: "Zero-Key Starter AI & BYOK",
      card3Desc:
        "Instant startup with zero required API keys, plus auto-discovery for local .env keys and Ollama models. Your keys remain encrypted locally via conf.",
      card4Tag: "Autonomous Engine",
      card4Title: "12 Autonomous Native Tools",
      card4Desc:
        "Equipped with list_files, read_file, write_file, edit_file, run_command, grep_search, find_files, fetch_url, web_search, and cross-instance mesh tools.",
      card5Tag: "Zero Damage & Multimodal",
      card5Title: "Safety Guardrails & Vision (/image)",
      card5Desc:
        "Never worry about accidental file destruction with [Y/n/a] confirmations and /undo. Paste screenshots or UI mockups via /image for instant multimodal analysis.",
      card6Tag: "Infinite Cascade & Mesh",
      card6Title: "Free Model Explorer & Mesh Network",
      card6Desc:
        "Dynamic free model explorer with zero-downtime auto-cascade. Multi-agent WebSocket mesh lets multiple terminal windows collaborate on shared codebases.",
    },
    architecture: {
      badge: "System Architecture",
      heading: "How BanglaCLI Works Under the Hood",
      subheading:
        "A lightweight, reactive agent loop that converts natural language into verified filesystem, web ingestion, and terminal actions.",
      step1Title: "Trilingual Prompt & Image Ingestion",
      step1Desc:
        "Accepts prompts in বাংলা script, phonetic Banglish, English, or screenshots via /image. Normalizes intent and identifies code actions.",
      step2Title: "3-Mode Context Controller",
      step2Desc:
        "Injects system instructions, git status, and project file tree into the conversation context while enforcing BUILD, PLAN, or CHAT mode guardrails.",
      step3Title: "Zero-Key AI & Model Inference",
      step3Desc:
        "Connects via Zero-Key starter models, Google Gemini, OpenRouter free cascade, or local Ollama with zero intermediary proxy servers.",
      step4Title: "Guarded 12-Tool & Mesh Execution",
      step4Desc:
        "Executes filesystem changes, grep searches, web ingestion, or cross-instance mesh RPCs with interactive developer approval [Y/n/a].",
      toolsTitle: "12 Autonomous Native Tools Matrix",
      envTitle: "Supported Environment Variables",
    },
    modes: {
      badge: "Triple Mode Architecture",
      heading: "BUILD, PLAN & CHAT Modes",
      subheading:
        "Inspired by OpenCode, BanglaCLI lets you choose between autonomous hands-on building, safe senior architectural reviews, and interactive conversational guidance.",
      buildTitle: "BUILD Mode",
      buildTag: "Autonomous Agent",
      buildDesc:
        "Full autonomous developer. Capable of creating files, refactoring legacy functions, running shell scripts, and building projects from scratch.",
      planTitle: "PLAN Mode",
      planTag: "Safe Architect",
      planDesc:
        "Read-only Senior Software Architect. Safely audits directory structures, reads code, and formulates step-by-step blueprints without altering files.",
      chatTitle: "CHAT Mode",
      chatTag: "Interactive Q&A",
      chatDesc:
        "Conversational software assistant. Explains complex algorithms, answers architecture questions, and generates code snippets without touching your disk.",
    },
    models: {
      badge: "Zero-Cost AI Providers",
      heading: "Connect to 100% Free Coding Models",
      subheading:
        "No credit card required. BanglaCLI connects directly to the world's most generous free AI APIs.",
    },
    docs: {
      badge: "Documentation",
      heading: "Up and Running in 30 Seconds",
      subheading:
        "The interactive setup wizard walks you through provider selection and saves your key automatically.",
      step1Title: "Install Globally",
      step1Desc:
        "Install banglacli globally using npm to access the command anywhere in your terminal.",
      step2Title: "Run Onboarding Setup",
      step2Desc:
        "Type banglacli. The interactive prompt guides you to choose a free AI provider and save your key.",
      step3Title: "Speak & Build",
      step3Desc:
        "Type your prompt in বাংলা, Banglish, or English. Confirm tool actions and watch your software materialize!",
    },
    developer: {
      badge: "Architect & Creator",
      role: "Full-Stack Web Developer (Next.js & MERN Stack)",
      bio: "Based in Savar, Dhaka, Bangladesh. Rakib architected and created BanglaCLI to bring state-of-the-art autonomous AI agent workflows to Bengali developers worldwide — combining natural language comprehension, OpenCode-style 3 Modes, and free API access in your terminal.",
      location: "Savar, Dhaka, Bangladesh",
    },
    faq: {
      badge: "Frequently Asked Questions",
      heading: "Got Questions? We Have Answers.",
    },
    cta: {
      badge: "100% Free & Open Source",
      heading: "Ready to Build Next-Gen Software in বাংলা & English?",
      subheading:
        "Supercharge your terminal workflow with multi-model intelligence, autonomous file management, and zero subscription fees.",
      button: "npm install -g banglacli",
    },
  },
  bn: {
    nav: {
      simulator: "লাইভ সিমুলেটর",
      features: "ফিচারসমূহ",
      architecture: "আর্কিটেকচার",
      modes: "৩টি মোড",
      models: "এআই মডেল",
      docs: "ডকুমেন্টেশন",
      creator: "ডেভেলপার",
      faq: "প্রশ্নোত্তর",
      installCli: "সিএলআই ইনস্টল",
      github: "গিটহাব",
    },
    hero: {
      badge: "বাংলাসিএলআই ৪.২.৭ রিলিজড • বাংলাদেশ থেকে তৈরি ত্রিভাষিক এআই কোডিং এজেন্ট",
      titlePart1: "কোডিং করুন দ্রুত গতিতে ",
      titleBn: "বাংলা",
      titlePart2: ", ",
      titleBanglish: "বাংলিশ",
      titlePart3: " ও ",
      titleEn: "ইংরেজি",
      titleEnd: " ভাষায় আপনার নিজস্ব টার্মিনালে।",
      subtitle:
        "বাংলাসিএলআই ৪.২.৭ (BanglaCLI 4.2.7) হলো বাংলাদেশ এবং বিশ্বজুড়ে বাংলাভাষী ডেভেলপারদের জন্য আধুনিক টার্মিনাল এআই কোডিং এজেন্ট। এতে রয়েছে জিরো-কি স্টার্টার এআই, ফ্রি মডেল এক্সপ্লোরার ও অটো-ক্যাসকেড, মাল্টিমোডাল ভিশন (/image), মাল্টি-এজেন্ট মেশ নেটওয়ার্ক, ওপেনকোড-স্টাইলের ৩টি মোড (বিল্ড, প্ল্যান ও চ্যাট) এবং ১২টি স্বয়ংক্রিয় টুলস।",
      trySimulator: "লাইভ টার্মিনাল সিমুলেটর ট্রাই করুন",
      exploreModes: "৩টি মোড (বিল্ড, প্ল্যান ও চ্যাট) জানুন",
      metricByok: "১০০%",
      metricByokLabel: "বিওয়াইওকে ও জিরো-কি স্টার্ট",
      metricLang: "৩টি ভাষা",
      metricLangLabel: "বাংলা, বাংলিশ ও ইংরেজি",
      metricModes: "৩টি মোড",
      metricModesLabel: "বিল্ড, প্ল্যান ও চ্যাট",
      metricCost: "০ টাকা / $০",
      metricCostLabel: "বাংলাদেশে সম্পূর্ণ ফ্রি",
      copyCmd: "কমান্ড কপি করুন",
      copied: "কপি সম্পন্ন!",
    },
    features: {
      badge: "স্বয়ংক্রিয় পাওয়ার",
      heading: "বাংলাদেশ ও বিশ্বের বাংলাভাষী ডেভেলপারদের জন্য নিবেদিত",
      subheading:
        "কোনো রোবোটিক অনুবাদ নয়। আপনি যেভাবে কথা বলেন, টেকনিক্যাল শব্দ এবং বাংলা বর্ণ বা বাংলিশ ফোনেটিক্স—সবকিছু নির্ভুলভাবে বোঝে বাংলাসিএলআই।",
      card1Tag: "ত্রিভাষিক ইঞ্জিন",
      card1Title: "ন্যাচারাল ত্রিভাষিক অনুধাবন",
      card1Desc:
        "স্বাভাবিকভাবে লিখুন খাঁটি বাংলায় ('একটি auth middleware বানাও'), বাংলিশে ('ekta mongo schema banai daw') বা ইংরেজিতে। বাংলাসিএলআই উত্তর দেবে একই ভাষায়।",
      card2Tag: "৩টি মোড আর্কিটেকচার",
      card2Title: "ওপেনকোড ৩টি মোড",
      card2Desc:
        "সহজেই সুইচ করুন বিল্ড মোড (ফাইল তৈরি ও প্যাকেজ ইনস্টল), প্ল্যান মোড (নিরাপদ আর্কিটেকচার অডিট) এবং চ্যাট মোডের (এআই প্রশ্নোত্তর ও কোড ব্যাখ্যা) মধ্যে।",
      card3Tag: "জিরো ফ্র্রিকশন ও প্রাইভেসি",
      card3Title: "জিরো-কি স্টার্টার এআই ও বিওয়াইওকে",
      card3Desc:
        "কোনো এপিআই কি ছাড়াও তাৎক্ষণিক কোডিং শুরু করুন, সাথে রয়েছে লোকাল .env কি ও ওলামা (Ollama) অটো-ডিসকভারি। আপনার কি লোকালি সম্পূর্ণ সুরক্ষিত থাকে।",
      card4Tag: "স্বয়ংক্রিয় ইঞ্জিন",
      card4Title: "১২টি অটোনোমাস নেটিভ টুলস",
      card4Desc:
        "ফুল-স্ট্যাক প্রোজেক্ট তৈরিতে রয়েছে list_files, read_file, write_file, edit_file, run_command, grep_search, find_files, fetch_url, web_search এবং ক্রস-টার্মিনাল মেশ টুলস।",
      card5Tag: "জিরো ড্যামেজ ও মাল্টিমোডাল",
      card5Title: "নিরাপদ গার্ডরেইল ও ভিশন (/image)",
      card5Desc:
        "কোনো ফাইল ভুলবশত মুছে যাওয়ার ভয় নেই [Y/n/a] ও /undo এর কল্যাণে। /image কমান্ড দিয়ে সরাসরি স্ক্রিনশট বা ইউআই মকআপ পেস্ট করে এনালাইসিস করুন।",
      card6Tag: "ইনফিনিট ক্যাসকেড ও মেশ",
      card6Title: "ফ্রি মডেল এক্সপ্লোরার ও মেশ নেটওয়ার্ক",
      card6Desc:
        "ডায়নামিক ফ্রি মডেল এক্সপ্লোরার কোনো ডাউনটাইম ছাড়াই ফ্রি মডেলে অটো-ক্যাসকেড করে। আর লোকাল মেশ নেটওয়ার্ক একাধিক টার্মিনাল উইন্ডোকে একসাথে যুক্ত করে।",
    },
    architecture: {
      badge: "সিস্টেম আর্কিটেকচার",
      heading: "বাংলাসিএলআই যেভাবে কাজ করে",
      subheading:
        "একটি আধুনিক রিঅ্যাক্টিভ এজেন্ট লুপ যা আপনার মুখের ভাষাকে যাচাইকৃত ফাইল ও টার্মিনাল অ্যাকশনে রূপান্তর করে।",
      step1Title: "ত্রিভাষিক প্রম্পট ও ইমেজ ইনপুট",
      step1Desc:
        "বাংলা লিপি, বাংলিশ, ইংরেজি প্রম্পট কিংবা /image দিয়ে স্ক্রিনশট গ্রহণ করে উদ্দেশ্য ও কোডিং অ্যাকশন শনাক্ত করে।",
      step2Title: "৩-মোড কনটেক্সট কন্ট্রোলার",
      step2Desc:
        "সিস্টেম নির্দেশাবলী, গিট স্ট্যাটাস ও ডিরেক্টরি ট্রি লোড করে এবং বিল্ড, প্ল্যান বা চ্যাট মোডের নিয়ম কঠোরভাবে মেনে চলে।",
      step3Title: "জিরো-কি এআই ও মডেল ইনফারেন্স",
      step3Desc:
        "জিরো-কি স্টার্টার মডেল, গুগল জেমিনি, ওপেনরাউটার ফ্রি ক্যাসকেড বা লোকাল ওলামায় সরাসরি কল পাঠায়—কোনো ইন্টারমিডিয়ারি ছাড়া।",
      step4Title: "সুরক্ষিত ১২-টুল ও মেশ এক্সিকিউশন",
      step4Desc:
        "ফাইল সিস্টেমে লেখার পূর্বে ডেভেলপার কনফার্মেশন [Y/n/a] গ্রহণ করে এবং কমান্ড ও মেশ আরপিসি এক্সিকিউট করে।",
      toolsTitle: "১২টি নেটিভ টুলস ম্যাট্রিক্স",
      envTitle: "সাপোর্টেড এনভায়রনমেন্ট ভেরিয়েবল",
    },
    modes: {
      badge: "৩টি মোড আর্কিটেকচার",
      heading: "বিল্ড, প্ল্যান ও চ্যাট মোড",
      subheading:
        "ওপেনকোড দ্বারা অনুপ্রাণিত হয়ে বাংলাসিএলআই আপনাকে দিচ্ছে কোড তৈরি, স্থাপত্য পর্যালোচনা এবং ইন্টার‍্যাক্টিভ চ্যাটের সম্পূর্ণ স্বাধীনতা।",
      buildTitle: "বিল্ড মোড (BUILD)",
      buildTag: "স্বয়ংক্রিয় এজেন্ট",
      buildDesc:
        "পূর্ণ স্বয়ংক্রিয় ডেভেলপার। ফাইল তৈরি, কোড রিফ্যাক্টরিং, প্যাকেজ ইনস্টলেশন এবং সম্পূর্ণ প্রোজেক্ট টার্মিনালে দাঁড় করাতে সক্ষম।",
      planTitle: "প্ল্যান মোড (PLAN)",
      planTag: "নিরাপদ আর্কিটেক্ট",
      planDesc:
        "রিড-অনলি সল্যুশন আর্কিটেক্ট। ফাইল এডিট না করে কোডবেস পরীক্ষা করে এবং ধাপে ধাপে পরিকল্পনা ও ব্লুপ্রিন্ট তৈরি করে।",
      chatTitle: "চ্যাট মোড (CHAT)",
      chatTag: "ইন্টারেক্টিভ চ্যাট",
      chatDesc:
        "কথোপকথনের মাধ্যমে সমস্যা সমাধান। জটিল অ্যালগরিদম ব্যাখ্যা করা, পরামর্শ দেওয়া এবং ফাইল পরিবর্তন ছাড়া কোড স্নিপেট তৈরি করে।",
    },
    models: {
      badge: "বিনামূল্যের এআই মডেল",
      heading: "১০০% ফ্রি কোডিং এআই মডেল কানেক্ট করুন",
      subheading:
        "কোনো ক্রেডিট কার্ডের প্রয়োজন নেই। বিশ্বের শীর্ষ ফ্রি টিয়ার এপিআই-এর সাথে সরাসরি যুক্ত হয় বাংলাসিএলআই।",
    },
    docs: {
      badge: "ডকুমেন্টেশন",
      heading: "মাত্র ৩০ সেকেন্ডে শুরু করুন",
      subheading:
        "ইন্টারেক্টিভ সেটআপ উইজার্ড আপনাকে প্রোভাইডার নির্বাচন ও এপিআই কি সেভ করতে ধাপে ধাপে সাহায্য করবে।",
      step1Title: "গ্লোবালি ইনস্টল করুন",
      step1Desc: "npm দিয়ে গ্লোবালি banglacli ইনস্টল করুন যাতে টার্মিনালে যেকোনো স্থান থেকে চালাতে পারেন।",
      step2Title: "অনবোর্ডিং সেটআপ রান করুন",
      step2Desc: "টার্মিনালে banglacli লিখুন। সেটআপ প্রম্পট দেখে আপনার পছন্দের ফ্রি প্রোভাইডার বেছে নিন।",
      step3Title: "কথা বলুন এবং বানান",
      step3Desc: "বাংলা, বাংলিশ বা ইংরেজিতে নির্দেশনা দিন। কনফার্মেশন দিন এবং চোখের সামনে কোড তৈরি দেখুন!",
    },
    developer: {
      badge: "আর্কিটেক্ট ও ক্রিয়েটর",
      role: "ফুল-স্ট্যাক ওয়েব ডেভেলপার (Next.js ও MERN স্ট্যাক)",
      bio: "সাভার, ঢাকা, বাংলাদেশ-এ বসবাসরত। রাকিব হাসান শুভ বাংলাভাষী ডেভেলপারদের জন্য বাংলাসিএলআই আর্কিটেক্ট ও তৈরি করেছেন—যা টার্মিনাল থেকেই এআই এজেন্টের আধুনিক ৩টি মোড এবং সম্পূর্ণ ফ্রি এপিআই ব্যবহারের সুযোগ দেয়।",
      location: "সাভার, ঢাকা, বাংলাদেশ",
    },
    faq: {
      badge: "সাধারণ প্রশ্নাবলী",
      heading: "আপনার প্রশ্নের সহজ উত্তর",
    },
    cta: {
      badge: "১০০% ফ্রি ও ওপেন সোর্স",
      heading: "বাংলা ও ইংরেজিতে আধুনিক সফটওয়্যার তৈরি করতে প্রস্তুত?",
      subheading:
        "সাবস্ক্রিপশন ফি ছাড়াই ফ্রি এআই মডেল ও স্বয়ংক্রিয় ফাইল ম্যানেজমেন্টের শক্তি নিন আপনার টার্মিনালে।",
      button: "npm install -g banglacli",
    },
  },
  banglish: {
    nav: {
      simulator: "Live Simulator",
      features: "Features",
      architecture: "Architecture",
      modes: "3 Modes",
      models: "AI Models",
      docs: "Docs",
      creator: "Developer",
      faq: "FAQ",
      installCli: "CLI Install",
      github: "GitHub",
    },
    hero: {
      badge: "BanglaCLI v4.2.7 Released • Bangladesh er Trilingual AI Coding Agent",
      titlePart1: "Fast Code Korun ",
      titleBn: "বাংলা",
      titlePart2: ", ",
      titleBanglish: "Banglish",
      titlePart3: " o ",
      titleEn: "English",
      titleEnd: " e Nijer Terminal er Bhetor.",
      subtitle:
        "BanglaCLI 4.2.7 holo Bangladesh o shob developers der jonno modern terminal AI coding agent. Zero-Key Starter AI, Dynamic Free Model Explorer o Auto-Cascade, Multimodal Vision (/image), Multi-Agent WebSocket Mesh, OpenCode-style 3 Modes (Build, Plan & Chat) ebong 12-ti autonomous native tools shoh.",
      trySimulator: "Live Terminal Simulator Try Korun",
      exploreModes: "3 Modes (BUILD, PLAN, CHAT) Dekhun",
      metricByok: "100%",
      metricByokLabel: "BYOK & Zero-Key Start",
      metricLang: "3 Languages",
      metricLangLabel: "বাংলা, Banglish, English",
      metricModes: "3 Modes",
      metricModesLabel: "BUILD, PLAN & CHAT",
      metricCost: "0 Taka / $0",
      metricCostLabel: "Free Tiers in Bangladesh",
      copyCmd: "Command Copy Korun",
      copied: "Copy Done!",
    },
    features: {
      badge: "Autonomous Superpowers",
      heading: "Bangladesh o Global Devs der Jonno Toiri",
      subheading:
        "Kono kothin syntax lagbe na. Regular kothar moto Banglish, Bangla ba English spec dilei BanglaCLI shob bujhe code banabe.",
      card1Tag: "Trilingual Core",
      card1Title: "Native Trilingual Comprehension",
      card1Desc:
        "Likhun Bangla te ('একটি auth middleware বানাও'), Banglish e ('ekta mongo schema banai daw') ba English e. BanglaCLI shei bhabei reply korbe.",
      card2Tag: "3 Architecture Modes",
      card2Title: "OpenCode 3 Modes",
      card2Desc:
        "Easily switch korun ⚡ BUILD Mode (files create, packages install), 📋 PLAN Mode (read-only safe audit) ebong 💬 CHAT Mode (conversational Q&A & code explanations) er moddhe.",
      card3Tag: "Zero Friction & Privacy",
      card3Title: "Zero-Key Starter AI o BYOK",
      card3Desc:
        "Kono API key charao instant coding shuru korun, sathe ache local .env keys o Ollama auto-discovery. Nijer keys local system e conf diye safe thake.",
      card4Tag: "Autonomous Engine",
      card4Title: "12-ti Native Tools",
      card4Desc:
        "Full-stack apps bananor jonno ache list_files, read_file, write_file, edit_file, run_command, grep_search, find_files, fetch_url, web_search o cross-terminal mesh tools.",
      card5Tag: "Zero Damage o Multimodal",
      card5Title: "Safety Guardrails o Vision (/image)",
      card5Desc:
        "Bhul file overwrite er bhoi nei [Y/n/a] o /undo thakay. /image command diye screenshot ba UI mockups paste kore instant visual coding analysis korun.",
      card6Tag: "Infinite Cascade o Mesh",
      card6Title: "Free Model Explorer o Mesh Network",
      card6Desc:
        "Dynamic free model explorer zero-downtime auto-cascade kore. Ar local WebSocket mesh diye ekadhik terminal windows eksathe collaborate kore.",
    },
    architecture: {
      badge: "System Architecture",
      heading: "BanglaCLI Kibhabe Kaaj Kore",
      subheading:
        "Lightweight reactive agent loop ja apnar natural prompt ke verified filesystem ebong terminal actions e rupantor kore.",
      step1Title: "Trilingual Input & Image Processing",
      step1Desc:
        "Bangla lipi, Banglish, English prompts ba /image diye screenshot grohon kore actual intention ar coding tools identify kore.",
      step2Title: "3-Mode Context Controller",
      step2Desc:
        "System prompt, git status o file tree load kore BUILD, PLAN o CHAT rules apply kore.",
      step3Title: "Zero-Key AI & Model Inference",
      step3Desc:
        "Zero-Key starter models, Google Gemini, OpenRouter free cascade ba local Ollama te direct connection kore zero intermediary chara.",
      step4Title: "Guarded 12-Tool & Mesh Execution",
      step4Desc:
        "File write ba mesh RPC execution er aage developer confirmation [Y/n/a] niye tarpor execute kore.",
      toolsTitle: "12-ti Native Tools Matrix",
      envTitle: "Supported Env Variables",
    },
    modes: {
      badge: "3 Modes Architecture",
      heading: "BUILD, PLAN o CHAT Modes",
      subheading:
        "OpenCode theke inspired hoye BanglaCLI apnake hands-on builder, safe senior architect ebong interactive chat assistant er complete choice dey.",
      buildTitle: "BUILD Mode",
      buildTag: "Autonomous Agent",
      buildDesc:
        "Full autonomous developer. Files banano, legacy code refactor kora, terminal tests run kora ebong notun project scratch theke build kore.",
      planTitle: "PLAN Mode",
      planTag: "Safe Architect",
      planDesc:
        "Read-only Senior Software Architect. Kono file touch na kore pura directory audit kore ebong step-by-step blueprints formulate kore.",
      chatTitle: "CHAT Mode",
      chatTag: "Interactive Q&A",
      chatDesc:
        "Conversational assistant. Code explain kora, queries answer kora ebong disk change chara code snippets toiri kore.",
    },
    models: {
      badge: "Zero-Cost AI Providers",
      heading: "100% Free Coding Models Connect Korun",
      subheading:
        "Kono credit card lagbe na. Top free AI APIs er sathe directly connect hoy BanglaCLI.",
    },
    docs: {
      badge: "Documentation",
      heading: "Matro 30 Second e Shuru Korun",
      subheading:
        "Interactive setup wizard apnake provider choose ebong key save korte step-by-step help korbe.",
      step1Title: "Globally Install Korun",
      step1Desc: "npm diye globally banglacli install korun jate terminal er je kono folder theke run kora jay.",
      step2Title: "Onboarding Setup Run Korun",
      step2Desc: "Type korun banglacli. Interactive prompt dekhe free provider select korun ebong key din.",
      step3Title: "Bolen & Banan",
      step3Desc: "Bangla, Banglish ba English e prompt din. Confirmation approve korun ebong software toiri hote dekhun!",
    },
    developer: {
      badge: "Architect & Creator",
      role: "Full-Stack Web Developer (Next.js & MERN Stack)",
      bio: "Savar, Dhaka, Bangladesh er basinda. Rakib Hasan Shuvo BanglaCLI architect o create korechen bangali developers der terminal e powerful AI agent workflows, 3-ti Modes o free model access dite.",
      location: "Savar, Dhaka, Bangladesh",
    },
    faq: {
      badge: "Frequently Asked Questions",
      heading: "Frequently Asked Questions",
    },
    cta: {
      badge: "100% Free & Open Source",
      heading: "Bangla o English e Software Build Korte Ready?",
      subheading:
        "Zero subscription fee te multi-model intelligence o auto file tools use korun apnar terminal e.",
      button: "npm install -g banglacli",
    },
  },
};
