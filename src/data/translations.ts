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
      badge: "BanglaCLI v2.0 Released • The Trilingual AI Coding Agent from Bangladesh",
      titlePart1: "Code Faster in ",
      titleBn: "বাংলা",
      titlePart2: ", ",
      titleBanglish: "Banglish",
      titlePart3: " & ",
      titleEn: "English",
      titleEnd: " Directly in Your Terminal.",
      subtitle:
        "BanglaCLI 2.0 is an open-source, serverless AI coding agent designed from the ground up for Bengali developers in Bangladesh and worldwide. Equipped with OpenCode-style 3 Modes (Build, Plan & Chat), 7 autonomous tools (including fast codebase grep, wildcard search & web docs ingestion), system doctor, live token savings metrics, and zero-cost free model integrations.",
      trySimulator: "Try Live Terminal Simulator",
      exploreModes: "Explore 3 Modes (BUILD, PLAN, CHAT)",
      metricByok: "100%",
      metricByokLabel: "BYOK & Serverless",
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
      card3Tag: "Privacy First",
      card3Title: "100% BYOK & Serverless",
      card3Desc:
        "Zero middleman backend and zero tracking. Your API keys are encrypted locally on your operating system via conf. All requests travel directly to the provider.",
      card4Tag: "Autonomous Engine",
      card4Title: "7 Autonomous Native Tools",
      card4Desc:
        "Equipped with list_files, read_file, write_file, run_command, grep_search, find_files, and fetch_url to construct full-stack applications end-to-end safely.",
      card5Tag: "Zero Damage",
      card5Title: "Zero-Damage Safety Guardrails",
      card5Desc:
        "Never worry about accidental file destruction. Before writing files or executing shell commands, BanglaCLI pauses for explicit confirmation [Y/n/a] with /diff and /undo support.",
      card6Tag: "Realtime UX",
      card6Title: "System Doctor & Token Savings",
      card6Desc:
        "Run 'banglacli doctor' for automated runtime & key health diagnostics. Track real-time token counts and live dollars saved vs GPT-4/Opus with 'banglacli stats'.",
    },
    architecture: {
      badge: "System Architecture",
      heading: "How BanglaCLI Works Under the Hood",
      subheading:
        "A lightweight, reactive agent loop that converts natural language into verified filesystem and terminal actions.",
      step1Title: "Trilingual Prompt Ingestion",
      step1Desc:
        "Accepts prompts in বাংলা script, phonetic Banglish, or English. Normalizes intent and identifies code actions.",
      step2Title: "3-Mode Context Controller",
      step2Desc:
        "Injects system instructions, git status, and project file tree into the conversation context while enforcing BUILD, PLAN, or CHAT mode guardrails.",
      step3Title: "Model Inference (BYOK)",
      step3Desc:
        "Dispatches streaming requests directly to Google Gemini 2.0 Flash, OpenRouter, or Groq with zero intermediary proxy servers.",
      step4Title: "Guarded Tool Execution",
      step4Desc:
        "Parses function calls and prompts developer approval [Y/n/a] before modifying disk files or running terminal scripts.",
      toolsTitle: "Autonomous Native Tools Matrix",
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
      badge: "বাংলাসিএলআই ২.০ রিলিজড • বাংলাদেশ থেকে তৈরি ত্রিভাষিক এআই কোডিং এজেন্ট",
      titlePart1: "কোডিং করুন দ্রুত গতিতে ",
      titleBn: "বাংলা",
      titlePart2: ", ",
      titleBanglish: "বাংলিশ",
      titlePart3: " ও ",
      titleEn: "ইংরেজি",
      titleEnd: " ভাষায় আপনার নিজস্ব টার্মিনালে।",
      subtitle:
        "বাংলাসিএলআই ২.০ (BanglaCLI 2.0) হলো বাংলাদেশ এবং বিশ্বজুড়ে বাংলাভাষী ডেভেলপারদের জন্য তৈরি ওপেন-সোর্স, সার্ভারলেস এআই কোডিং এজেন্ট। এতে রয়েছে ওপেনকোড-স্টাইলের ৩টি মোড (বিল্ড, প্ল্যান ও চ্যাট), ৭টি স্বয়ংক্রিয় টুলস (কোডবেস গ্রেপ সার্চ, ওয়াইল্ডকার্ড ফাইল সার্চ ও ওয়েব ডকস স্ক্র্যাপিং), সিস্টেম ডক্টর এবং লাইভ টোকেন সেভিংস ট্র্যাকার।",
      trySimulator: "লাইভ টার্মিনাল সিমুলেটর ট্রাই করুন",
      exploreModes: "৩টি মোড (বিল্ড, প্ল্যান ও চ্যাট) জানুন",
      metricByok: "১০০%",
      metricByokLabel: "বিওয়াইওকে ও সার্ভারলেস",
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
      card3Tag: "নিরাপত্তা ও প্রাইভেসি",
      card3Title: "১০০% নিজস্ব কি ও সার্ভারলেস",
      card3Desc:
        "মাঝখানে কোনো প্রক্সি বা ট্র্যাকিং সার্ভার নেই। আপনার এপিআই কি সরাসরি আপনার কম্পিউটারে এনক্রিপ্ট থাকে এবং সরাসরি প্রোভাইডারের কাছে যায়।",
      card4Tag: "স্বয়ংক্রিয় ইঞ্জিন",
      card4Title: "৭টি অটোনোমাস নেটিভ টুলস",
      card4Desc:
        "ফুল-স্ট্যাক প্রোজেক্ট তৈরিতে রয়েছে list_files, read_file, write_file, run_command এবং নতুন grep_search, find_files ও fetch_url এর মতো শক্তিশালী সুরক্ষিত টুলস।",
      card5Tag: "জিরো ড্যামেজ",
      card5Title: "নিরাপদ কনফার্মেশন গার্ডরেইল",
      card5Desc:
        "কোনো ফাইল ভুলবশত ডিলিট বা ওভাররাইটের ভয় নেই। প্রতিবার ফাইল সেভ বা কমান্ড চালানোর আগে অনুমতি [Y/n/a] নেওয়া হয়, সাথে রয়েছে /diff ও /undo।",
      card6Tag: "রিয়েলটাইম অভিজ্ঞতা",
      card6Title: "সিস্টেম ডক্টর ও টোকেন সেভিংস",
      card6Desc:
        "রান করুন 'banglacli doctor' স্বয়ংক্রিয় ডায়াগনস্টিক পরীক্ষার জন্য। এবং 'banglacli stats' দিয়ে লাইভ টোকেন ও কমার্শিয়াল মডেলের তুলনায় কত ডলার সাশ্রয় হলো তা দেখুন।",
    },
    architecture: {
      badge: "সিস্টেম আর্কিটেকচার",
      heading: "বাংলাসিএলআই যেভাবে কাজ করে",
      subheading:
        "একটি আধুনিক রিঅ্যাক্টিভ এজেন্ট লুপ যা আপনার মুখের ভাষাকে যাচাইকৃত ফাইল ও টার্মিনাল অ্যাকশনে রূপান্তর করে।",
      step1Title: "ত্রিভাষিক প্রম্পট ইনপুট",
      step1Desc:
        "বাংলা লিপি, বাংলিশ রোমান হরফ বা ইংরেজি প্রম্পট গ্রহণ করে উদ্দেশ্য ও কোডিং অ্যাকশন শনাক্ত করে।",
      step2Title: "৩-মোড কনটেক্সট কন্ট্রোলার",
      step2Desc:
        "সিস্টেম নির্দেশাবলী, গিট স্ট্যাটাস ও ডিরেক্টরি ট্রি লোড করে এবং বিল্ড, প্ল্যান বা চ্যাট মোডের নিয়ম কঠোরভাবে মেনে চলে।",
      step3Title: "এআই মডেল ইনফারেন্স (BYOK)",
      step3Desc:
        "গুগল জেমিনি ২.০ ফ্ল্যাশ, ওপেনরাউটার বা গ্রোক ক্লাউডে সরাসরি কল পাঠায়—কোনো থার্ড-পার্টি ইন্টারমিডিয়ারি ছাড়া।",
      step4Title: "সুরক্ষিত টুল এক্সিকিউশন",
      step4Desc:
        "ফাইল সিস্টেমে লেখার পূর্বে ডেভেলপার কনফার্মেশন [Y/n/a] গ্রহণ করে এবং কমান্ড এক্সিকিউট করে।",
      toolsTitle: "নেটিভ টুলস ম্যাট্রিক্স",
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
      badge: "BanglaCLI v2.0 Released • Bangladesh er Trilingual AI Coding Agent",
      titlePart1: "Fast Code Korun ",
      titleBn: "বাংলা",
      titlePart2: ", ",
      titleBanglish: "Banglish",
      titlePart3: " o ",
      titleEn: "English",
      titleEnd: " e Nijer Terminal er Bhetor.",
      subtitle:
        "BanglaCLI 2.0 holo Bangladesh o shob bangali developer der jonno open-source, serverless AI coding agent. OpenCode-style 3 Modes (Build, Plan & Chat), 7-ti auto tools (codebase grep search, wildcard search o web docs ingestion), system doctor ebong live token savings tracker shoh.",
      trySimulator: "Live Terminal Simulator Try Korun",
      exploreModes: "3 Modes (BUILD, PLAN, CHAT) Dekhun",
      metricByok: "100%",
      metricByokLabel: "BYOK & Serverless",
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
      card3Tag: "Privacy First",
      card3Title: "100% BYOK & Serverless",
      card3Desc:
        "Majhe kono middleman tracking server nei. Apnar key local system e conf diye encrypted thake ebong direct provider e connection hoy.",
      card4Tag: "Autonomous Engine",
      card4Title: "7-ti Native Tools",
      card4Desc:
        "Full-stack apps bananor jonno ache list_files, read_file, write_file, run_command ebong notun grep_search, find_files o fetch_url er moto 7-ti tools.",
      card5Tag: "Zero Damage",
      card5Title: "Safety Confirmation Guardrails",
      card5Desc:
        "Bhul file overwrite er bhoi nei. File save ba shell commands chalanor aage BanglaCLI explicit confirmation [Y/n/a] ney, sathe ache /diff o /undo.",
      card6Tag: "Realtime UX",
      card6Title: "System Doctor o Token Savings",
      card6Desc:
        "Automated diagnostic er jonno 'banglacli doctor' run korun. Ar 'banglacli stats' diye live token usage o dollars saved track korun.",
    },
    architecture: {
      badge: "System Architecture",
      heading: "BanglaCLI Kibhabe Kaaj Kore",
      subheading:
        "Lightweight reactive agent loop ja apnar natural prompt ke verified filesystem ebong terminal actions e rupantor kore.",
      step1Title: "Trilingual Input Processing",
      step1Desc:
        "Bangla lipi, Banglish ba English prompts grohon kore actual intention ar coding tools identify kore.",
      step2Title: "3-Mode Context Controller",
      step2Desc:
        "System prompt, git status o file tree load kore BUILD, PLAN o CHAT rules apply kore.",
      step3Title: "Direct AI Inference (BYOK)",
      step3Desc:
        "Google Gemini 2.0 Flash, OpenRouter ba Groq e direct requests pathay zero intermediary latency te.",
      step4Title: "Guarded Tool Execution",
      step4Desc:
        "File write ba command execute er aage developer confirmation [Y/n/a] niye tarpor execute kore.",
      toolsTitle: "Native Tools Matrix",
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
