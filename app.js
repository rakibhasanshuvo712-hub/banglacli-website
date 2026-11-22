/**
 * BanglaCLI Official Website Interactive Engine
 * Author: Rakib Hasan Shuvo
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Initialize Canvas Starfield Background
  initStarfield();

  // Initialize Terminal with default Bangla scenario
  runTerminalScenario('bangla');

  // Setup Terminal Enter Key handler
  const termInput = document.getElementById('term-user-input');
  if (termInput) {
    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        submitCustomPrompt();
      }
    });
  }

  // FAQ Accordion Setup
  setupFAQ();
});

// ==========================================
// STARFIELD CANVAS BACKGROUND
// ==========================================
function initStarfield() {
  const canvas = document.getElementById('star-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const numStars = Math.min(65, Math.floor((width * height) / 18000));
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.7 + 0.3
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];
      star.x += star.vx;
      star.y += star.vy;

      if (star.x < 0) star.x = width;
      if (star.x > width) star.x = 0;
      if (star.y < 0) star.y = height;
      if (star.y > height) star.y = 0;

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 229, 153, ${star.alpha * 0.6})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#00e599';
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// ==========================================
// PACKAGE MANAGER SWITCHER
// ==========================================
let activePM = 'npm';
const pmCommands = {
  npm: 'npm install -g banglacli',
  npx: 'npx banglacli',
  pnpm: 'pnpm add -g banglacli',
  bun: 'bun add -d banglacli'
};

function switchPackageManager(pm) {
  activePM = pm;
  const pms = ['npm', 'npx', 'pnpm', 'bun'];
  
  pms.forEach(p => {
    const btn = document.getElementById(`pm-${p}`);
    if (btn) {
      if (p === pm) {
        btn.className = 'px-2.5 py-1 text-xs font-mono font-bold rounded bg-emerald-400/20 text-emerald-400 border border-emerald-400/30 transition-all';
      } else {
        btn.className = 'px-2.5 py-1 text-xs font-mono font-medium rounded text-slate-400 hover:text-white transition-all';
      }
    }
  });

  const display = document.getElementById('pm-command-display');
  if (display) {
    display.textContent = pmCommands[pm] || pmCommands.npm;
  }
}

function copyActiveCommand() {
  const text = pmCommands[activePM] || pmCommands.npm;
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied "${text}" to clipboard!`);
    const copyText = document.getElementById('hero-copy-text');
    if (copyText) {
      copyText.textContent = 'Copied!';
      setTimeout(() => {
        copyText.textContent = 'Copy';
      }, 2000);
    }
  });
}

function copySnippet(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied "${text}" to clipboard!`);
  });
}

// Toast Notification
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 2800);
}

// ==========================================
// TERMINAL SIMULATOR LOGIC
// ==========================================
let currentTerminalMode = 'BUILD';
let currentTerminalModel = 'gemini-2.0-flash';
let terminalTimeoutIds = [];

const scenarios = {
  bangla: {
    mode: 'BUILD',
    model: 'gemini-2.0-flash',
    prompt: 'একটি Express.js REST API বানাও JWT auth সহ',
    steps: [
      { type: 'user', text: 'একটি Express.js REST API বানাও JWT auth সহ' },
      { type: 'ai-thought', text: '🔍 বর্তমান প্রোজেক্ট ডিরেক্টরি এবং কনফিগ খতিয়ে দেখছি...' },
      { type: 'tool-call', name: 'list_files', arg: '.' },
      { type: 'tool-result', text: '✓ ফাইল তালিকা পাওয়া গেছে (package.json, src/index.ts)' },
      { type: 'tool-call', name: 'write_file', arg: 'src/routes/auth.js' },
      { type: 'confirm', text: 'src/routes/auth.js ফাইলটি কি তৈরি বা আপডেট করবেন? [Y/n/a]: Y' },
      { type: 'tool-result', text: '✓ src/routes/auth.js সফলভাবে সেভ করা হয়েছে (Register & Login with JWT + bcrypt).' },
      { type: 'tool-call', name: 'run_command', arg: 'npm install jsonwebtoken bcryptjs' },
      { type: 'confirm', text: "Execute terminal command 'npm install jsonwebtoken bcryptjs'? [Y/n/a]: Y" },
      { type: 'tool-result', text: '✓ Dependencies successfully installed (+2 packages in 1.1s)' },
      { type: 'ai-final', text: '✅ চমৎকার! আপনার Express REST API এর JWT Authentication সফলভাবে ইমপ্লিমেন্ট করা হয়েছে।\n- 📁 Route: `src/routes/auth.js`\n- 🔐 Endpoints: `POST /api/auth/register`, `POST /api/auth/login`\n- 🚀 আপনি `node src/index.js` দিয়ে সার্ভার রান করে টেস্ট করতে পারেন।' }
    ]
  },
  banglish: {
    mode: 'BUILD',
    model: 'openrouter/free',
    prompt: 'Ekta React counter app banaye dao Tailwind CSS diye',
    steps: [
      { type: 'user', text: 'Ekta React counter app banaye dao Tailwind CSS diye' },
      { type: 'ai-thought', text: '⚡ React component and Tailwind classes setup shuru korchi...' },
      { type: 'tool-call', name: 'write_file', arg: 'src/Counter.jsx' },
      { type: 'confirm', text: "Allow write to 'src/Counter.jsx'? [Y/n/a]: Y" },
      { type: 'tool-result', text: '✓ src/Counter.jsx created with state hooks and smooth Tailwind animations.' },
      { type: 'ai-final', text: 'Done! React Counter component ready kora hoyeche with Increment, Decrement & Reset buttons. Tailwind CSS styled and fully responsive! 🚀' }
    ]
  },
  english: {
    mode: 'BUILD',
    model: 'gemini-2.0-flash',
    prompt: 'Create a rate-limiting middleware using Redis and Express',
    steps: [
      { type: 'user', text: 'Create a rate-limiting middleware using Redis and Express' },
      { type: 'ai-thought', text: 'Designing sliding-window rate limiter with ioredis...' },
      { type: 'tool-call', name: 'write_file', arg: 'src/middleware/rateLimiter.ts' },
      { type: 'confirm', text: "Allow write to 'src/middleware/rateLimiter.ts'? [Y/n/a]: a" },
      { type: 'tool-result', text: '✓ src/middleware/rateLimiter.ts written with sliding-window algorithm (100 req/min).' },
      { type: 'tool-call', name: 'run_command', arg: 'npm test -- --grep "rateLimiter"' },
      { type: 'tool-result', text: '✓ Tests passed: 4 passed, 0 failed' },
      { type: 'ai-final', text: 'Rate limiter middleware is in place and verified with test suite. 100 req/min threshold configured with custom 429 Retry-After headers.' }
    ]
  },
  plan: {
    mode: 'PLAN',
    model: 'gemini-2.0-flash',
    prompt: '/plan Analyze existing architecture and prepare TypeScript migration roadmap',
    steps: [
      { type: 'user', text: '/plan Analyze existing architecture and prepare TypeScript migration roadmap' },
      { type: 'mode-switch', text: '📋 PLAN MODE ACTIVATED (Senior Architect - Safe Read-Only Mode)' },
      { type: 'ai-thought', text: 'Auditing codebase hierarchy and dependencies in read-only mode...' },
      { type: 'tool-call', name: 'list_files', arg: '.' },
      { type: 'tool-result', text: 'Found 14 JavaScript files across src/routes, src/models, src/utils' },
      { type: 'tool-call', name: 'read_file', arg: 'package.json' },
      { type: 'tool-result', text: 'Inspected package.json: Node 18, CommonJS module type detected' },
      { type: 'ai-final', text: '📋 MIGRATION BLUEPRINT (Architect Review):\n1. Phase 1: Initialize tsconfig.json with strict typechecking enabled.\n2. Phase 2: Install devDependencies (@types/node, @types/express, typescript, tsx).\n3. Phase 3: Migrate utility files first (src/utils/*.ts) to establish foundational types.\n4. Phase 4: Convert route handlers and add Express Request/Response typing.\n\nType `/build` when ready to let BanglaCLI execute this migration automatically!' }
    ]
  }
};

function clearTerminalLog() {
  terminalTimeoutIds.forEach(id => clearTimeout(id));
  terminalTimeoutIds = [];
  const viewport = document.getElementById('terminal-viewport');
  if (viewport) {
    viewport.innerHTML = '';
  }
}

function updateTerminalPill(mode, model) {
  currentTerminalMode = mode;
  if (model) currentTerminalModel = model;

  const modeIcon = document.getElementById('term-mode-icon');
  const modeLabel = document.getElementById('term-mode-label');
  const modePill = document.getElementById('term-mode-pill');
  const modelName = document.getElementById('term-model-name');

  if (mode === 'PLAN') {
    if (modeIcon) modeIcon.textContent = '📋';
    if (modeLabel) modeLabel.textContent = 'PLAN MODE';
    if (modePill) modePill.className = 'px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center gap-1.5';
  } else {
    if (modeIcon) modeIcon.textContent = '⚡';
    if (modeLabel) modeLabel.textContent = 'BUILD MODE';
    if (modePill) modePill.className = 'px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5';
  }

  if (modelName) {
    modelName.textContent = currentTerminalModel;
  }
}

function runTerminalScenario(scenarioKey) {
  clearTerminalLog();

  document.querySelectorAll('.scenario-pill').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-scenario-${scenarioKey}`);
  if (activeBtn) activeBtn.classList.add('active');

  const scenario = scenarios[scenarioKey];
  if (!scenario) return;

  updateTerminalPill(scenario.mode, scenario.model);

  const viewport = document.getElementById('terminal-viewport');
  let delay = 100;

  scenario.steps.forEach((step) => {
    const timeoutId = setTimeout(() => {
      appendTerminalStep(viewport, step);
      viewport.scrollTop = viewport.scrollHeight;
    }, delay);
    terminalTimeoutIds.push(timeoutId);
    delay += (step.type === 'ai-final' ? 550 : 400);
  });
}

function appendTerminalStep(viewport, step) {
  const line = document.createElement('div');
  line.className = 'term-line';

  switch (step.type) {
    case 'user':
      line.innerHTML = `<span class="text-emerald-400 font-bold select-none font-mono">banglacli &gt;</span> <span class="text-white font-semibold">${escapeHtml(step.text)}</span>`;
      break;

    case 'mode-switch':
      line.innerHTML = `<div class="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-xs">${escapeHtml(step.text)}</div>`;
      break;

    case 'ai-thought':
      line.innerHTML = `<span class="text-slate-400 italic text-xs">${escapeHtml(step.text)}</span>`;
      break;

    case 'tool-call':
      line.innerHTML = `<span class="term-badge term-badge-tool">[TOOL]</span> <span class="text-purple-300 font-bold font-mono">${escapeHtml(step.name)}</span>(<span class="text-amber-300">${escapeHtml(step.arg)}</span>)`;
      break;

    case 'confirm':
      line.innerHTML = `<span class="term-badge term-badge-confirm">[CONFIRM]</span> <span class="text-red-300 font-semibold">${escapeHtml(step.text)}</span>`;
      break;

    case 'tool-result':
      line.innerHTML = `<span class="text-emerald-400 text-xs ml-4 font-mono">${escapeHtml(step.text)}</span>`;
      break;

    case 'ai-final':
      const formatted = escapeHtml(step.text).replace(/\n/g, '<br/>');
      line.innerHTML = `<div class="p-4 mt-2 rounded-2xl bg-white/[0.04] border border-white/10 text-slate-200 leading-relaxed text-xs sm:text-sm font-sans shadow-lg">${formatted}</div>`;
      break;
  }

  viewport.appendChild(line);
}

function submitCustomPrompt() {
  const input = document.getElementById('term-user-input');
  if (!input || !input.value.trim()) return;

  const raw = input.value.trim();
  input.value = '';

  const viewport = document.getElementById('terminal-viewport');

  // Print user prompt
  const userLine = document.createElement('div');
  userLine.className = 'term-line';
  userLine.innerHTML = `<span class="text-emerald-400 font-bold select-none font-mono">banglacli &gt;</span> <span class="text-white font-semibold">${escapeHtml(raw)}</span>`;
  viewport.appendChild(userLine);

  // Command handlers
  if (raw === '/plan') {
    updateTerminalPill('PLAN');
    const msg = document.createElement('div');
    msg.className = 'term-line text-cyan-400 font-bold text-xs';
    msg.textContent = 'Switched to 📋 PLAN MODE (Read-only architectural analysis enabled).';
    viewport.appendChild(msg);
    viewport.scrollTop = viewport.scrollHeight;
    return;
  }

  if (raw === '/build') {
    updateTerminalPill('BUILD');
    const msg = document.createElement('div');
    msg.className = 'term-line text-emerald-400 font-bold text-xs';
    msg.textContent = 'Switched to ⚡ BUILD MODE (Autonomous file creation & command execution enabled).';
    viewport.appendChild(msg);
    viewport.scrollTop = viewport.scrollHeight;
    return;
  }

  if (raw === '/mode') {
    const nextMode = currentTerminalMode === 'BUILD' ? 'PLAN' : 'BUILD';
    updateTerminalPill(nextMode);
    const msg = document.createElement('div');
    msg.className = `term-line font-bold text-xs ${nextMode === 'PLAN' ? 'text-cyan-400' : 'text-emerald-400'}`;
    msg.textContent = `Active mode is now: ${nextMode === 'PLAN' ? '📋 PLAN MODE (Read-Only)' : '⚡ BUILD MODE (Full Agent)'}`;
    viewport.appendChild(msg);
    viewport.scrollTop = viewport.scrollHeight;
    return;
  }

  if (raw === '/model') {
    const models = ['gemini-2.0-flash', 'openrouter/free', 'particle-1:free', 'groq/llama-3.3-70b'];
    const currentIdx = models.indexOf(currentTerminalModel);
    const nextModel = models[(currentIdx + 1) % models.length];
    updateTerminalPill(currentTerminalMode, nextModel);
    const msg = document.createElement('div');
    msg.className = 'term-line text-purple-400 font-bold text-xs';
    msg.textContent = `Switched model to: 🤖 ${nextModel}`;
    viewport.appendChild(msg);
    viewport.scrollTop = viewport.scrollHeight;
    return;
  }

  if (raw === '/help') {
    const help = document.createElement('div');
    help.className = 'term-line p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-slate-300 space-y-1.5';
    help.innerHTML = `
      <div class="text-emerald-400 font-bold mb-1">BanglaCLI Slash Commands:</div>
      <div><span class="text-cyan-400 font-mono font-bold">/mode</span> — Toggle between BUILD and PLAN modes</div>
      <div><span class="text-cyan-400 font-mono font-bold">/plan</span> — Activate safe read-only architect mode</div>
      <div><span class="text-cyan-400 font-mono font-bold">/build</span> — Activate autonomous builder mode</div>
      <div><span class="text-cyan-400 font-mono font-bold">/model</span> — Switch active AI model</div>
      <div><span class="text-cyan-400 font-mono font-bold">/clear</span> — Clear terminal output</div>
    `;
    viewport.appendChild(help);
    viewport.scrollTop = viewport.scrollHeight;
    return;
  }

  if (raw === '/clear' || raw === 'clear') {
    clearTerminalLog();
    return;
  }

  // Generic custom prompt simulator
  const thinking = document.createElement('div');
  thinking.className = 'term-line text-slate-400 italic text-xs';
  thinking.textContent = `Processing prompt in ${currentTerminalMode} mode using ${currentTerminalModel}...`;
  viewport.appendChild(thinking);

  setTimeout(() => {
    const aiResp = document.createElement('div');
    aiResp.className = 'term-line p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-slate-200 text-xs sm:text-sm font-sans shadow-lg';
    aiResp.innerHTML = `
      <div class="font-bold text-emerald-400 mb-1">BanglaCLI (${currentTerminalMode} Mode):</div>
      <p>আপনার নির্দেশনা গ্রহণ করা হয়েছে: <em>"${escapeHtml(raw)}"</em></p>
      <p class="mt-2 text-slate-400">প্রোজেক্টের রুট ডিরেক্টরি এবং ডিপেন্ডেন্সি এনালাইসিস করে যথাযথ ফাইল এবং কমান্ড তৈরি করা হবে। বাস্তব টার্মিনালে রান করতে <code>npx banglacli</code> টাইপ করুন।</p>
    `;
    viewport.appendChild(aiResp);
    viewport.scrollTop = viewport.scrollHeight;
  }, 500);
}

function executeQuickCommand(cmd) {
  const input = document.getElementById('term-user-input');
  if (input) {
    input.value = cmd;
    submitCustomPrompt();
  }
}

function escapeHtml(string) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return String(string).replace(/[&<>"']/g, function(m) { return map[m]; });
}

// ==========================================
// FAQ ACCORDION SETUP
// ==========================================
function setupFAQ() {
  const toggles = document.querySelectorAll('.faq-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const card = toggle.closest('.faq-card');
      const answer = card.querySelector('.faq-answer');
      const icon = toggle.querySelector('.faq-icon');

      const isHidden = answer.classList.contains('hidden');

      // Close all others
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
      document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('open'));

      if (isHidden) {
        answer.classList.remove('hidden');
        icon.classList.add('open');
      }
    });
  });
}
