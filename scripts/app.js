(function () {
  const DATA = window.SCHOLAR_DATA;
  const CHECKLIST_KEY = 'scholargrid_roadmap_progress';
  const SEM_FOCUS_KEY = 'scholargrid_sem_focus';
  const PINS_KEY = 'scholargrid_pins';
  const SEMESTERS = ['Sem I', 'Sem II', 'Sem III', 'Sem IV', 'Sem V', 'Sem VI'];

  // =========================================================================
  // Clean Modern SVG Icon System (No Emojis)
  // =========================================================================
  const SVG_ICONS = {
    home: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    notes: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>',
    'lab-manuals': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    'previous-papers': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
    'important-questions': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    'model-papers': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
    syllabus: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>',
    ebooks: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    'video-tutorials': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
    certifications: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
    'learning-platforms': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    roadmaps: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
    'ai-tools': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>',
    'placement-cell': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    'career-development': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 16.5-1.5 3 3-1.5"/><path d="m12 15-3-3a9 9 0 0 1 3-13 9 9 0 0 1 13 3 9 9 0 0 1-3 13l-3-3"/><path d="m9 12 2 2"/></svg>',
    'exam-announcements': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
    notices: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
    'sgpa-calculator': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>',
    'attendance-tracker': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    'resume-builder': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>',
    'mcq-quiz': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>'
  };

  function getIcon(key) {
    return SVG_ICONS[key] || SVG_ICONS['notes'];
  }


  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }

  function escHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getSemFocus() {
    try {
      const val = localStorage.getItem(SEM_FOCUS_KEY);
      return SEMESTERS.includes(val) ? val : 'All';
    } catch {
      return 'All';
    }
  }

  function setSemFocus(val) {
    const next = SEMESTERS.includes(val) ? val : 'All';
    try {
      localStorage.setItem(SEM_FOCUS_KEY, next);
    } catch {}
    return next;
  }

  function getPins() {
    try {
      const raw = JSON.parse(localStorage.getItem(PINS_KEY) || '[]');
      return Array.isArray(raw) ? raw : [];
    } catch {
      return [];
    }
  }

  function savePins(pins) {
    try {
      localStorage.setItem(PINS_KEY, JSON.stringify(pins));
    } catch {}
  }

  function isPinned(id) {
    return getPins().some((p) => p.id === id);
  }

  function togglePin(item) {
    const pins = getPins();
    const idx = pins.findIndex((p) => p.id === item.id);
    if (idx >= 0) {
      pins.splice(idx, 1);
    } else {
      pins.unshift(item);
    }
    savePins(pins);
    syncPinButtons();
    renderPinnedSection();
    renderDailyStreakWidget();
  }

  function syncPinButtons() {
    const pins = getPins();
    const pinnedSet = new Set(pins.map((p) => p.id));
    document.querySelectorAll('.pin-btn[data-pin-id]').forEach((btn) => {
      const active = pinnedSet.has(btn.dataset.pinId);
      btn.classList.toggle('pinned', active);
      btn.textContent = active ? '★' : '☆';
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      btn.title = active ? 'Remove from Pinned Notes' : 'Pin / Bookmark';
    });
  }

  function renderPinButton(id, title, url, meta) {
    const active = isPinned(id);
    return `<button type="button" class="pin-btn ${active ? 'pinned' : ''}" data-pin-id="${escHtml(id)}" data-pin-title="${escHtml(title)}" data-pin-url="${escHtml(url)}" data-pin-meta="${escHtml(meta)}" aria-pressed="${active ? 'true' : 'false'}" title="${active ? 'Remove from Pinned Notes' : 'Pin / Bookmark'}">${active ? '★' : '☆'}</button>`;
  }

  function renderPinnedSection() {
    const section = document.getElementById('pinnedSection');
    if (!section) return;
    const pins = getPins();
    if (!pins.length) {
      section.style.display = 'none';
      section.innerHTML = '';
      return;
    }
    section.style.display = 'block';
    section.innerHTML = `
      <div class="pinned-strip-card" style="background:#ffffff;border:1px solid var(--border);border-radius:14px;padding:12px 16px;margin-bottom:16px;box-shadow:0 1px 3px rgba(15,23,42,0.04);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="color:#d97706;font-size:0.95rem;">★</span>
            <span style="font-weight:700;font-size:0.88rem;color:var(--text);">Pinned Resources (${pins.length})</span>
          </div>
          <span style="font-size:0.75rem;color:var(--text-muted);">Quick-access bookmarks saved in browser</span>
        </div>
        <div class="pinned-horizontal-strip" style="display:flex;gap:10px;overflow-x:auto;padding-bottom:4px;scroll-snap-type:x mandatory;">
          ${pins.map((p) => `
            <div class="pinned-chip-card" style="display:inline-flex;align-items:center;gap:8px;background:#f8fafc;border:1px solid var(--border);border-radius:10px;padding:6px 10px;white-space:nowrap;flex-shrink:0;">
              <a href="${escHtml(p.url)}" style="display:inline-flex;align-items:center;gap:6px;text-decoration:none;color:var(--text);font-size:0.82rem;font-weight:600;">
                <span class="badge badge-subtle" style="font-size:0.7rem;padding:1px 5px;">${escHtml(p.meta || 'Resource')}</span>
                <span>${escHtml(p.title)}</span>
              </a>
              ${renderPinButton(p.id, p.title, p.url, p.meta || 'Pinned')}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

    function renderSidebar(activeModuleId) {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    const isDashboard = !activeModuleId;

    const navSections = [
      {
        title: 'Academics',
        moduleIds: ['notes', 'lab-manuals', 'previous-papers', 'important-questions', 'model-papers', 'syllabus', 'ebooks']
      },
      {
        title: 'Productivity Tools',
        moduleIds: ['sgpa-calculator', 'attendance-tracker', 'resume-builder', 'mcq-quiz']
      },
      {
        title: 'Career & Tech',
        moduleIds: ['roadmaps', 'certifications', 'ai-tools', 'learning-platforms', 'placement-cell', 'career-development', 'video-tutorials']
      },
      {
        title: 'University',
        moduleIds: ['exam-announcements', 'notices']
      }
    ];

    const moduleMap = {};
    DATA.modules.forEach(m => { moduleMap[m.id] = m; });

    sidebar.innerHTML = `
      <div class="sidebar-header">
        <a href="index.html" class="brand">
          <img src="assets/logo.jpg" alt="ScholarGrid" class="brand-logo-img" />
          <span class="brand-text-wrap">
            <span class="brand-name">${DATA.brand.name}</span>
            <span class="brand-sub">Academic Workspace</span>
          </span>
        </a>
      </div>
      <nav class="sidebar-nav" aria-label="Navigation">
        <div class="sidebar-section-label">Workspace</div>
        <a href="index.html" class="sidebar-link ${isDashboard ? 'active' : ''}">
          <span class="sidebar-link-icon">${getIcon('home')}</span>
          <span class="sidebar-link-text">Dashboard</span>
        </a>
        <a href="landing.html" class="sidebar-link">
          <span class="sidebar-link-icon">✨</span>
          <span class="sidebar-link-text">Overview &amp; Features</span>
        </a>

        ${navSections.map(sec => `
          <div class="sidebar-section-label">${sec.title}</div>
          ${sec.moduleIds.map(id => {
            const m = moduleMap[id];
            if (!m) return '';
            const isActive = activeModuleId === m.id;
            return `
              <a href="resource.html#${m.id}" class="sidebar-link ${isActive ? 'active' : ''}">
                <span class="sidebar-link-icon">${getIcon(m.id)}</span>
                <span class="sidebar-link-text">${m.title}</span>
              </a>
            `;
          }).join('')}
        `).join('')}
      </nav>
      <div class="sidebar-footer">
        <span style="font-size:0.75rem; color:var(--text-soft);">ScholarGrid • Open Access</span>
        <span class="badge badge-subtle" style="font-size:0.7rem;">${DATA.modules.length} Modules</span>
      </div>
    `;
  }

  function renderTopbar(title, showBackButton, onSemChange) {
    const topbar = document.getElementById('topbar');
    if (!topbar) return;

    const currentSem = getSemFocus();
    topbar.innerHTML = `
      <div class="topbar-left">
        <button id="sidebarToggle" class="sidebar-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">☰</button>
        <div class="topbar-title">${title}</div>
      </div>
      <div class="topbar-actions">
        <select id="semFocusSelect" class="sem-focus-select" aria-label="My Semester Focus">
          <option value="All" ${currentSem === 'All' ? 'selected' : ''}>All Semesters</option>
          ${SEMESTERS.map((s) => `<option value="${s}" ${currentSem === s ? 'selected' : ''}>My Semester: ${s}</option>`).join('')}
        </select>
        ${showBackButton ? '<a href="index.html" class="btn btn-outline btn-sm">← Dashboard</a>' : ''}
        <div id="topbarAuthSlot"></div>
      </div>
    `;

    const semSelect = document.getElementById('semFocusSelect');
    if (semSelect) {
      semSelect.addEventListener('change', (e) => {
        const nextSem = setSemFocus(e.target.value);
        if (typeof onSemChange === 'function') onSemChange(nextSem);
      });
    }

    initMobileSidebar();
    mountTopbarAuth(onSemChange);
  }

  function initMobileSidebar() {
    const appShell = document.getElementById('appShell');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const toggle = document.getElementById('sidebarToggle');
    if (!appShell || !sidebar || !overlay || !toggle) return;

    function setOpen(open) {
      appShell.classList.toggle('sidebar-open', open);
      sidebar.classList.toggle('open', open);
      overlay.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    toggle.addEventListener('click', () => {
      const isOpen = sidebar.classList.contains('open');
      setOpen(!isOpen);
    });

    overlay.addEventListener('click', () => setOpen(false));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        setOpen(false);
      }
    });
  }

  // ==========================================================================
  // Firebase Google Auth, User Pill & Cloud Sync Hooks
  // ==========================================================================

  function showToast(message, duration = 3500) {
    let toast = document.getElementById('syncToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'syncToast';
      toast.className = 'sync-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>${escHtml(message)}</span>`;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }


  // ==========================================================================
  // Firebase Setup & API Key Modal
  // ==========================================================================

  function openFirebaseSetupModal(onConnected) {
    let existing = document.getElementById('firebaseSetupModalOverlay');
    if (existing) existing.remove();

    const activeCfg = window.ScholarFirebase ? window.ScholarFirebase.auth.getActiveConfig() : {};
    const projectId = activeCfg.projectId || 'scholargrid-65385';
    const projectNumber = activeCfg.messagingSenderId || '572157940074';

    const overlay = document.createElement('div');
    overlay.id = 'firebaseSetupModalOverlay';
    overlay.className = 'onboarding-overlay';

    overlay.innerHTML = `
      <div class="onboarding-modal" style="max-width:540px;" role="dialog" aria-modal="true">
        <div class="onboarding-header">
          <div class="onboarding-top-bar">
            <span class="onboarding-step-badge" style="background:#e0e7ff;color:#4338ca;border-color:#c7d2fe;">Firebase Project Integration</span>
            <button type="button" id="closeFbSetupBtn" class="close-btn" aria-label="Close">&times;</button>
          </div>
          <h2 class="onboarding-title">Connect Project: ${escHtml(projectId)}</h2>
          <p class="onboarding-desc">
            Your Project ID (<strong>${escHtml(projectId)}</strong>) and Number (<strong>${escHtml(projectNumber)}</strong>) are configured. Enter your Web API Key from the Firebase Console to enable live Google Authentication.
          </p>
        </div>

        <div class="onboarding-body" style="gap:14px;">
          <div style="background:#f8fafc;border:1px solid var(--border);border-radius:12px;padding:12px 14px;font-size:0.84rem;line-height:1.45;">
            <strong>Where to find your Web API Key:</strong><br />
            1. Open <a href="https://console.firebase.google.com/project/${escHtml(projectId)}/settings/general" target="_blank" rel="noopener noreferrer" style="color:var(--primary);text-decoration:underline;">Firebase Console &rarr; Project Settings ↗</a><br />
            2. Under <em>"Your apps"</em>, click <strong>&lt;/&gt; (Web app)</strong> and register <code>ScholarGrid</code>.<br />
            3. Copy the <code>apiKey</code> and <code>appId</code> from the snippet below.
          </div>

          <div>
            <label style="font-weight:700;font-size:0.88rem;display:block;margin-bottom:6px;">
              Web API Key (apiKey) <span style="color:var(--danger);">*</span>
            </label>
            <input type="text" id="fbApiKeyInput" class="input" placeholder="AIzaSy..." value="${activeCfg.apiKey && !activeCfg.apiKey.includes('YOUR_API_KEY') ? escHtml(activeCfg.apiKey) : ''}" />
            <span style="font-size:0.75rem;color:var(--text-muted);margin-top:3px;display:block;">Found under Project Settings &rarr; Web API Key (starts with AIzaSy)</span>
          </div>

          <div>
            <label style="font-weight:700;font-size:0.88rem;display:block;margin-bottom:6px;">
              App ID (appId) <span style="color:var(--text-muted);font-weight:400;font-size:0.8rem;">(Optional)</span>
            </label>
            <input type="text" id="fbAppIdInput" class="input" placeholder="1:${escHtml(projectNumber)}:web:..." value="${activeCfg.appId && !activeCfg.appId.includes('YOUR_APP_ID') ? escHtml(activeCfg.appId) : ''}" />
          </div>

          <div style="border-top:1px dashed var(--border);padding-top:12px;">
            <label style="font-weight:700;font-size:0.84rem;display:block;margin-bottom:6px;color:var(--text-muted);">
              Or Paste Full Firebase Config Snippet:
            </label>
            <textarea id="fbPasteSnippet" class="input" rows="3" placeholder="const firebaseConfig = { apiKey: '...', ... };"></textarea>
          </div>

          <div id="fbSetupError" style="display:none;background:#fef2f2;border:1px solid #fecaca;color:#b91c1c;padding:8px 12px;border-radius:8px;font-size:0.82rem;"></div>
        </div>

        <div class="onboarding-footer" style="flex-wrap:wrap;gap:10px;">
          <button type="button" id="fbDemoModeBtn" class="btn btn-outline btn-sm" title="Test Google sign-in & onboarding immediately with simulated account">
            Continue in Demo / Test Mode ⚡
          </button>
          <button type="button" id="fbSaveConnectBtn" class="btn btn-primary">
            Save &amp; Connect Live Firebase 🚀
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('show'));

    const closeBtn = overlay.querySelector('#closeFbSetupBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        overlay.classList.remove('show');
        setTimeout(() => overlay.remove(), 250);
      });
    }

    const pasteArea = overlay.querySelector('#fbPasteSnippet');
    if (pasteArea) {
      pasteArea.addEventListener('input', () => {
        const val = pasteArea.value;
        const keyMatch = val.match(/apiKey\s*:\s*["']([^"']+)["']/);
        const appMatch = val.match(/appId\s*:\s*["']([^"']+)["']/);
        if (keyMatch && keyMatch[1]) {
          overlay.querySelector('#fbApiKeyInput').value = keyMatch[1];
        }
        if (appMatch && appMatch[1]) {
          overlay.querySelector('#fbAppIdInput').value = appMatch[1];
        }
      });
    }

    const demoBtn = overlay.querySelector('#fbDemoModeBtn');
    if (demoBtn) {
      demoBtn.addEventListener('click', () => {
        overlay.classList.remove('show');
        setTimeout(() => overlay.remove(), 250);
        showToast('Running in Demo Student Mode ⚡');
        const { user: signedUser, isNewUser } = window.ScholarFirebase.auth.signInWithDemo();
        const curProf = window.ScholarFirebase.auth.getUserProfile();
        if (isNewUser || !curProf) {
          openOnboardingModal(signedUser, false, () => {
            if (typeof onConnected === 'function') onConnected();
          });
        } else {
          applyPersonalization(curProf);
        }
      });
    }

    const saveBtn = overlay.querySelector('#fbSaveConnectBtn');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        const apiKey = overlay.querySelector('#fbApiKeyInput').value.trim();
        const appId = overlay.querySelector('#fbAppIdInput').value.trim() || `1:${projectNumber}:web:scholargrid`;
        const errEl = overlay.querySelector('#fbSetupError');

        if (!apiKey) {
          errEl.style.display = 'block';
          errEl.textContent = 'Please enter your Web API Key to connect live Firebase.';
          return;
        }

        const newConfig = {
          apiKey,
          authDomain: `${projectId}.firebaseapp.com`,
          projectId,
          storageBucket: `${projectId}.firebasestorage.app`,
          messagingSenderId: projectNumber,
          appId
        };

        try {
          window.ScholarFirebase.auth.saveCustomConfig(newConfig);
          overlay.classList.remove('show');
          setTimeout(() => overlay.remove(), 250);
        } catch (e) {
          errEl.style.display = 'block';
          errEl.textContent = e.message;
        }
      });
    }
  }

  function mountTopbarAuth(onSemChange) {
    const slot = document.getElementById('topbarAuthSlot');
    if (!slot) return;

    function renderAuthUI(user, profile) {
      if (!user) {
        slot.innerHTML = `
          <button id="googleSignInBtn" class="google-signin-btn" type="button" title="Sign in with Google">
            <svg class="google-icon" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span>Sign in with Google</span>
          </button>
        `;

        const btn = document.getElementById('googleSignInBtn');
        if (btn) {
          btn.addEventListener('click', async () => {
            if (!window.ScholarFirebase.auth.isConfigured()) {
              openFirebaseSetupModal();
              return;
            }
            try {
              btn.disabled = true;
              btn.innerHTML = '<span>Signing in...</span>';
              const { user: signedUser, isNewUser } = await window.ScholarFirebase.auth.signInWithGoogle();
              btn.disabled = false;
              const curProf = window.ScholarFirebase.auth.getUserProfile();
              if (isNewUser || !curProf) {
                openOnboardingModal(signedUser, false, () => {
                  if (typeof onSemChange === 'function') onSemChange(getSemFocus());
                });
              } else {
                applyPersonalization(curProf);
                showToast(`☁️ Welcome back, ${signedUser.displayName?.split(' ')[0] || 'Scholar'}! Workspace active.`);
                if (typeof onSemChange === 'function') onSemChange(getSemFocus());
              }
            } catch (err) {
              console.error('Sign-in failed:', err);
              btn.disabled = false;
              renderAuthUI(null, null);
              alert('Sign-in notice: ' + (err.message || 'Could not complete Google Sign-In'));
            }
          });
        }
      } else {
        const firstName = (user.displayName || 'Scholar').split(' ')[0];
        const initials = (user.displayName || 'S').substring(0, 2).toUpperCase();
        const sem = profile?.semester || getSemFocus();
        const isAdmin = window.ScholarFirebase?.auth?.isAdmin(user);

        slot.innerHTML = `
          <div class="user-pill-container" id="userPillContainer">
            <button type="button" id="userPillBtn" class="user-pill-btn" aria-haspopup="true" aria-expanded="false" title="Account settings & sync status">
              ${user.photoURL ? `<img class="user-avatar" src="${escHtml(user.photoURL)}" alt="Avatar" referrerpolicy="no-referrer" />` : `<div class="user-avatar-initials">${escHtml(initials)}</div>`}
              <span class="user-name">${escHtml(firstName)}</span>
              <span class="user-badge">${isAdmin ? '🛡️ Admin' : escHtml(sem !== 'All' ? sem : 'BCA')}</span>
              <span style="font-size:0.7rem;color:var(--text-muted);margin-left:2px;">▼</span>
            </button>
            <div class="user-dropdown-menu" id="userDropdownMenu" role="menu">
              <div class="user-dropdown-header">
                <div class="name">${escHtml(user.displayName || 'BCA Scholar')} ${isAdmin ? '<span class="badge badge-free" style="font-size:0.7rem;margin-left:4px;">Admin</span>' : ''}</div>
                <div class="email">${escHtml(user.email || '')}</div>
                <div class="meta-tag">🏛️ ${escHtml(profile?.college || 'Tumkur University')}</div>
              </div>
              ${isAdmin ? `
                <a href="admin.html" class="user-dropdown-item" style="color:var(--primary);font-weight:700;background:var(--primary-soft);border-radius:8px;margin-bottom:4px;">
                  <span>🛡️</span> Admin Console
                </a>
              ` : ''}
              <button type="button" class="user-dropdown-item" id="menuEditProfileBtn">
                <span>🎯</span> Edit Profile &amp; Goals
              </button>
              <button type="button" class="user-dropdown-item" id="menuSyncNowBtn">
                <span class="sync-status-indicator"></span> Sync Status (Cloud Active)
              </button>
              <button type="button" class="user-dropdown-item" id="menuConfigBtn">
                <span>⚙️</span> Firebase Config (scholargrid-65385)
              </button>
              <div class="user-dropdown-divider"></div>
              <button type="button" class="user-dropdown-item danger" id="menuSignOutBtn">
                <span>🚪</span> Sign Out
              </button>
            </div>
          </div>
        `;

        const pillBtn = document.getElementById('userPillBtn');
        const dropdown = document.getElementById('userDropdownMenu');
        const editBtn = document.getElementById('menuEditProfileBtn');
        const syncBtn = document.getElementById('menuSyncNowBtn');
        const signOutBtn = document.getElementById('menuSignOutBtn');

        if (pillBtn && dropdown) {
          pillBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dropdown.classList.contains('show');
            dropdown.classList.toggle('show', !isOpen);
            pillBtn.classList.toggle('active', !isOpen);
            pillBtn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
          });

          document.addEventListener('click', (e) => {
            if (!slot.contains(e.target)) {
              dropdown.classList.remove('show');
              pillBtn.classList.remove('active');
              pillBtn.setAttribute('aria-expanded', 'false');
            }
          });
        }

        if (editBtn) {
          editBtn.addEventListener('click', () => {
            dropdown.classList.remove('show');
            openOnboardingModal(user, true, () => {
              if (typeof onSemChange === 'function') onSemChange(getSemFocus());
            });
          });
        }

        if (syncBtn) {
          syncBtn.addEventListener('click', async () => {
            dropdown.classList.remove('show');
            showToast('☁️ Syncing local workspace with Cloud Firestore...');
            if (window.ScholarFirebase && window.ScholarFirebase.sync) {
              await window.ScholarFirebase.sync.syncLocalToCloud(user.uid);
              showToast('✓ Cloud Firestore sync complete!');
            }
          });
        }

        const configBtn = document.getElementById('menuConfigBtn');
        if (configBtn) {
          configBtn.addEventListener('click', () => {
            dropdown.classList.remove('show');
            openFirebaseSetupModal();
          });
        }

        if (signOutBtn) {
          signOutBtn.addEventListener('click', async () => {
            dropdown.classList.remove('show');
            if (window.ScholarFirebase && window.ScholarFirebase.auth) {
              await window.ScholarFirebase.auth.signOut();
              showToast('Logged out. Switched to local Guest Mode.');
              if (typeof onSemChange === 'function') onSemChange(getSemFocus());
            }
          });
        }
      }
    }

    if (window.ScholarFirebase && window.ScholarFirebase.auth) {
      window.ScholarFirebase.auth.onAuthStateChanged((user, profile) => {
        renderAuthUI(user, profile);
      });
    } else {
      renderAuthUI(null, null);
    }
  }

  // ==========================================================================
  // 3-Step First-Time Personalized Onboarding Questionnaire Modal
  // ==========================================================================

  function openOnboardingModal(user, isEditing = false, onComplete) {
    let existingModal = document.getElementById('onboardingModalOverlay');
    if (existingModal) existingModal.remove();

    const storedProfile = window.ScholarFirebase?.auth?.getUserProfile() || {};
    const answers = storedProfile.onboardingAnswers || {};

    function getCalculatedGradYear(sem) {
      if (sem === 'Sem I' || sem === 'Sem II') return '2028';
      if (sem === 'Sem III' || sem === 'Sem IV') return '2027';
      return '2026';
    }

    const state = {
      step: 1,
      // Step 1: Academic Track (MANDATORY 🔴)
      semester: storedProfile.semester || (getSemFocus() !== 'All' ? getSemFocus() : 'Sem III'),
      college: storedProfile.college || 'Tumkur University',
      graduationYear: answers.graduationYear || storedProfile.graduationYear || '',

      // Step 2: Personal & Social Details (OPTIONAL 🟢)
      phone: storedProfile.phone || answers.phone || '',
      linkedin: answers.linkedin || storedProfile.linkedin || '',
      github: answers.github || storedProfile.github || '',

      // Step 3: Career Path & Goal (MANDATORY 🔴)
      careerPath: storedProfile.careerPath || 'Campus Placements / Core Software Engineer',

      // Step 4: Academic Targets & Terms (MANDATORY 🔴 with Optional sub-fields)
      targetSGPA: storedProfile.targetSGPA || '8.0',
      minAttendanceGoal: String(storedProfile.minAttendanceGoal || '75'),
      termsAccepted: isEditing ? true : false,
      validationError: ''
    };

    const overlay = document.createElement('div');
    overlay.id = 'onboardingModalOverlay';
    overlay.className = 'onboarding-overlay';

    function renderModal() {
      const stepPct = Math.round((state.step / 4) * 100);
      const defaultGradYear = getCalculatedGradYear(state.semester);

      let stepHtml = '';

      // --- STEP 1: Academic Track (MANDATORY 🔴) ---
      if (state.step === 1) {
        stepHtml = `
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <label style="font-weight:700;font-size:0.9rem;">
                Select Current Semester <span style="color:var(--danger);">*</span>
              </label>
              <span style="font-size:0.75rem;color:var(--text-muted);">Required for Focus Mode</span>
            </div>
            <div class="onboarding-card-grid cols-3">
              ${SEMESTERS.map(s => `
                <div class="onboarding-option-card ${state.semester === s ? 'selected' : ''}" data-sem-choice="${s}">
                  <div class="onboarding-option-icon">🎓</div>
                  <div class="onboarding-option-content">
                    <strong>${s}</strong>
                    <span>NEP Course Track</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div style="margin-top:14px;">
            <label style="font-weight:700;font-size:0.9rem;display:block;margin-bottom:6px;">
              College / University Name <span style="color:var(--danger);">*</span>
            </label>
            <input type="text" id="obCollegeInput" class="input" list="collegeList" value="${escHtml(state.college)}" placeholder="e.g. Tumkur University, Seshadripuram College..." required />
            <datalist id="collegeList">
              <option value="Tumkur University, Tumakuru">
              <option value="Seshadripuram College, Bengaluru">
              <option value="Bangalore University, Bengaluru">
              <option value="Christ University, Bengaluru">
              <option value="Jain University, Bengaluru">
              <option value="St. Joseph's University, Bengaluru">
              <option value="Mount Carmel College, Bengaluru">
              <option value="Dayananda Sagar College, Bengaluru">
              <option value="BMS College of Commerce and Management">
            </datalist>
            <span style="font-size:0.76rem;color:var(--text-muted);margin-top:4px;display:block;">Required: Pre-fills your ATS Resume education details.</span>
          </div>

          <div style="margin-top:14px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
              <label style="font-weight:700;font-size:0.9rem;">
                Expected Graduation Year <span style="color:var(--text-muted);font-weight:400;font-size:0.8rem;">(Optional)</span>
              </label>
              <span style="font-size:0.75rem;color:var(--primary);font-weight:600;">Default: ${defaultGradYear}</span>
            </div>
            <input type="number" id="obGradYearInput" class="input" value="${escHtml(state.graduationYear)}" placeholder="e.g. ${defaultGradYear} (Auto-calculated if blank)" min="2024" max="2032" />
            <span style="font-size:0.76rem;color:var(--text-muted);margin-top:4px;display:block;">Leave blank to auto-calculate based on your semester.</span>
          </div>
        `;
      }

      // --- STEP 2: Personal & Social Details (OPTIONAL 🟢) ---
      else if (state.step === 2) {
        stepHtml = `
          <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:12px 14px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;gap:12px;">
            <div style="font-size:0.82rem;color:#166534;line-height:1.4;">
              <strong>🟢 This entire step is optional!</strong> You can fill these now to auto-populate your ATS Resume, or skip right ahead to your career goals.
            </div>
            <button type="button" id="obInlineSkipBtn" class="btn btn-outline btn-sm" style="background:#ffffff;white-space:nowrap;">Skip this Step →</button>
          </div>

          <div>
            <label style="font-weight:700;font-size:0.9rem;display:block;margin-bottom:6px;">
              Phone / WhatsApp Number <span style="color:var(--text-muted);font-weight:400;font-size:0.8rem;">(Optional)</span>
            </label>
            <input type="tel" id="obPhoneInput" class="input" value="${escHtml(state.phone)}" placeholder="+91 98765 43210 (Optional)" />
            <span style="font-size:0.76rem;color:var(--text-muted);margin-top:3px;display:block;">Included in ATS Resume header for recruiter callbacks.</span>
          </div>

          <div style="margin-top:14px;">
            <label style="font-weight:700;font-size:0.9rem;display:block;margin-bottom:6px;">
              LinkedIn Profile URL <span style="color:var(--text-muted);font-weight:400;font-size:0.8rem;">(Optional)</span>
            </label>
            <input type="url" id="obLinkedinInput" class="input" value="${escHtml(state.linkedin)}" placeholder="linkedin.com/in/username (Optional)" />
          </div>

          <div style="margin-top:14px;">
            <label style="font-weight:700;font-size:0.9rem;display:block;margin-bottom:6px;">
              GitHub Profile URL <span style="color:var(--text-muted);font-weight:400;font-size:0.8rem;">(Optional)</span>
            </label>
            <input type="url" id="obGithubInput" class="input" value="${escHtml(state.github)}" placeholder="github.com/username (Optional)" />
          </div>
        `;
      }

      // --- STEP 3: Career Path & Goal (MANDATORY 🔴) ---
      else if (state.step === 3) {
        const goals = [
          {
            id: 'Campus Placements / Core Software Engineer',
            icon: '🚀',
            title: 'Campus Placements & Core SDE',
            desc: 'Data Structures, Algorithms, Core Java/C++, DBMS, OS & Aptitude tests'
          },
          {
            id: 'Full-Stack Web Development',
            icon: '🌐',
            title: 'Full-Stack Web Development',
            desc: 'Modern JavaScript, React, Node.js, Express, PostgreSQL, REST APIs'
          },
          {
            id: 'AI, Python & Data Analytics',
            icon: '🤖',
            title: 'AI, Python & Data Analytics',
            desc: 'Python programming, Pandas, Machine Learning models & SQL analytics'
          },
          {
            id: 'Semester Exams & Academic Rank',
            icon: '🎓',
            title: 'Semester Exams & Academic Rank',
            desc: 'Maximum SGPA target, university question banks, and complete theory mastery'
          },
          {
            id: 'Higher Studies & MCA',
            icon: '📚',
            title: 'Higher Studies & MCA',
            desc: 'NIMCET, Karnataka PGCET, Discrete Math, Computer Basics & Logical Reasoning'
          }
        ];

        stepHtml = `
          <div>
            <label style="font-weight:700;font-size:0.9rem;display:block;margin-bottom:8px;">
              Choose Your Primary Focus Area <span style="color:var(--danger);">*</span>
            </label>
            <div class="onboarding-card-grid">
              ${goals.map(g => `
                <div class="onboarding-option-card ${state.careerPath === g.id ? 'selected' : ''}" data-goal-choice="${escHtml(g.id)}">
                  <div class="onboarding-option-icon">${g.icon}</div>
                  <div class="onboarding-option-content">
                    <strong>${g.title}</strong>
                    <span>${g.desc}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      // --- STEP 4: Academic Targets & Terms (MANDATORY 🔴 with Optional sub-fields) ---
      else if (state.step === 4) {
        const sgpaOptions = ['7.5', '8.0', '8.5', '9.0+'];
        stepHtml = `
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <label style="font-weight:700;font-size:0.9rem;">
                Target Semester SGPA <span style="color:var(--text-muted);font-weight:400;font-size:0.8rem;">(Optional — Default: 8.0)</span>
              </label>
            </div>
            <div class="onboarding-card-grid cols-2" style="grid-template-columns:repeat(4, 1fr);">
              ${sgpaOptions.map(sg => `
                <div class="onboarding-option-card ${state.targetSGPA === sg ? 'selected' : ''}" data-sgpa-choice="${sg}" style="text-align:center;justify-content:center;padding:12px 8px;">
                  <div class="onboarding-option-content">
                    <strong style="font-size:1.15rem;color:var(--primary);">${sg}</strong>
                    <span style="font-size:0.72rem;">${sg === '9.0+' ? 'Ranker' : sg === '8.5' ? 'Distinction' : sg === '8.0' ? 'Recommended' : 'First Class'}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div style="margin-top:14px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <label style="font-weight:700;font-size:0.9rem;">
                Minimum Attendance Target <span style="color:var(--text-muted);font-weight:400;font-size:0.8rem;">(Optional — Default: 75%)</span>
              </label>
            </div>
            <div class="onboarding-card-grid cols-2">
              <div class="onboarding-option-card ${state.minAttendanceGoal === '75' ? 'selected' : ''}" data-att-choice="75">
                <div class="onboarding-option-icon">⚠️</div>
                <div class="onboarding-option-content">
                  <strong>75% Mandatory</strong>
                  <span>Standard university minimum attendance threshold</span>
                </div>
              </div>
              <div class="onboarding-option-card ${state.minAttendanceGoal === '80' ? 'selected' : ''}" data-att-choice="80">
                <div class="onboarding-option-icon">🛡️</div>
                <div class="onboarding-option-content">
                  <strong>80% Safe Buffer</strong>
                  <span>Leaves a safety cushion for emergencies &amp; events</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Strictly Required Terms Agreement -->
          <div style="margin-top:18px;background:#f8fafc;border:1.5px solid ${state.termsAccepted ? 'var(--primary)' : 'var(--border)'};border-radius:12px;padding:14px 16px;transition:border-color 0.2s ease;">
            <label style="display:flex;align-items:flex-start;gap:12px;cursor:pointer;font-weight:600;font-size:0.88rem;color:var(--text);user-select:none;">
              <input type="checkbox" id="obTermsCheckbox" ${state.termsAccepted ? 'checked' : ''} style="margin-top:2px;width:18px;height:18px;accent-color:var(--primary);cursor:pointer;" />
              <div>
                <div>I agree to ScholarGrid's Terms of Service and Academic Privacy Policy <span style="color:var(--danger);font-weight:700;">*</span></div>
                <div style="font-size:0.78rem;color:var(--text-muted);font-weight:400;margin-top:3px;line-height:1.4;">
                  I confirm that I am a college student using ScholarGrid for academic learning, course material access, attendance tracking, and placement preparation.
                </div>
              </div>
            </label>
          </div>
        `;
      }

      const stepBadgeClass = state.step === 2 ? 'optional' : 'mandatory';
      const stepBadgeText = state.step === 2 ? 'Step 2 of 4 • Optional 🟢' : `Step ${state.step} of 4 • Required 🔴`;

      overlay.innerHTML = `
        <div class="onboarding-modal" role="dialog" aria-modal="true">
          <div class="onboarding-header">
            <div class="onboarding-top-bar">
              <span class="onboarding-step-badge ${stepBadgeClass}">${stepBadgeText}</span>
              <div style="display:flex;align-items:center;gap:10px;">
                ${state.step === 2 ? '<button type="button" id="obTopSkipBtn" class="onboarding-skip-link">Skip this step →</button>' : ''}
                ${isEditing ? '<button type="button" id="closeOnboardingBtn" class="close-btn" aria-label="Close">&times;</button>' : ''}
              </div>
            </div>
            <div class="onboarding-progress-track">
              <div class="onboarding-progress-fill" style="width:${stepPct}%;"></div>
            </div>
            <h2 class="onboarding-title">
              ${state.step === 1 ? 'Academic Track &amp; College' :
                state.step === 2 ? 'Personal &amp; Social Details' :
                state.step === 3 ? 'Career Path &amp; Domain Interest' :
                'Academic Targets &amp; Terms Agreement'}
            </h2>
            <p class="onboarding-desc">
              ${state.step === 1 ? 'Configure your current semester to unlock Focus Mode and set your college name.' :
                state.step === 2 ? 'Add your contact and social links to auto-fill your ATS resume (or skip to continue).' :
                state.step === 3 ? 'ScholarGrid will align your ATS resume templates and placement practice quizzes to this goal.' :
                'Set your benchmarks for attendance alerts, target grades, and accept the terms.'}
            </p>
            ${state.validationError ? `<div style="background:#fef2f2;border:1px solid #fecaca;color:#b91c1c;padding:8px 12px;border-radius:8px;font-size:0.82rem;margin-top:10px;">⚠️ ${escHtml(state.validationError)}</div>` : ''}
          </div>

          <div class="onboarding-body">
            ${stepHtml}
          </div>

          <div class="onboarding-footer">
            <div>
              ${state.step > 1 ? '<button type="button" id="obBackBtn" class="btn btn-outline btn-sm">← Back</button>' : ''}
            </div>
            <div style="display:flex;align-items:center;gap:8px;">
              ${state.step === 2 ? '<button type="button" id="obFooterSkipBtn" class="btn btn-outline btn-sm">Skip Step →</button>' : ''}
              <button type="button" id="obNextBtn" class="btn btn-primary" ${state.step === 4 && !state.termsAccepted ? 'disabled' : ''}>
                ${state.step < 4 ? 'Continue →' : (isEditing ? 'Save Changes ✓' : 'Complete Setup &amp; Launch Dashboard 🚀')}
              </button>
            </div>
          </div>
        </div>
      `;

      bindModalEvents();
    }

    function bindModalEvents() {
      // Step 1 choices
      overlay.querySelectorAll('[data-sem-choice]').forEach(el => {
        el.addEventListener('click', () => {
          state.semester = el.getAttribute('data-sem-choice');
          state.validationError = '';
          renderModal();
        });
      });

      const collegeInp = overlay.querySelector('#obCollegeInput');
      if (collegeInp) {
        collegeInp.addEventListener('input', (e) => {
          state.college = e.target.value;
          state.validationError = '';
        });
      }

      const gradYearInp = overlay.querySelector('#obGradYearInput');
      if (gradYearInp) {
        gradYearInp.addEventListener('input', (e) => {
          state.graduationYear = e.target.value;
        });
      }

      // Step 2 inputs & skip triggers
      const phoneInp = overlay.querySelector('#obPhoneInput');
      if (phoneInp) phoneInp.addEventListener('input', (e) => { state.phone = e.target.value; });

      const linkedinInp = overlay.querySelector('#obLinkedinInput');
      if (linkedinInp) linkedinInp.addEventListener('input', (e) => { state.linkedin = e.target.value; });

      const githubInp = overlay.querySelector('#obGithubInput');
      if (githubInp) githubInp.addEventListener('input', (e) => { state.github = e.target.value; });

      const skipHandler = () => {
        state.step = 3;
        state.validationError = '';
        renderModal();
      };
      const topSkipBtn = overlay.querySelector('#obTopSkipBtn');
      if (topSkipBtn) topSkipBtn.addEventListener('click', skipHandler);

      const inlineSkipBtn = overlay.querySelector('#obInlineSkipBtn');
      if (inlineSkipBtn) inlineSkipBtn.addEventListener('click', skipHandler);

      const footerSkipBtn = overlay.querySelector('#obFooterSkipBtn');
      if (footerSkipBtn) footerSkipBtn.addEventListener('click', skipHandler);

      // Step 3 choices
      overlay.querySelectorAll('[data-goal-choice]').forEach(el => {
        el.addEventListener('click', () => {
          state.careerPath = el.getAttribute('data-goal-choice');
          renderModal();
        });
      });

      // Step 4 choices
      overlay.querySelectorAll('[data-sgpa-choice]').forEach(el => {
        el.addEventListener('click', () => {
          state.targetSGPA = el.getAttribute('data-sgpa-choice');
          renderModal();
        });
      });

      overlay.querySelectorAll('[data-att-choice]').forEach(el => {
        el.addEventListener('click', () => {
          state.minAttendanceGoal = el.getAttribute('data-att-choice');
          renderModal();
        });
      });

      const termsCheckbox = overlay.querySelector('#obTermsCheckbox');
      if (termsCheckbox) {
        termsCheckbox.addEventListener('change', (e) => {
          state.termsAccepted = e.target.checked;
          const nextBtn = overlay.querySelector('#obNextBtn');
          if (nextBtn) nextBtn.disabled = !state.termsAccepted;
        });
      }

      const backBtn = overlay.querySelector('#obBackBtn');
      if (backBtn) {
        backBtn.addEventListener('click', () => {
          if (state.step > 1) {
            state.step -= 1;
            state.validationError = '';
            renderModal();
          }
        });
      }

      const closeBtn = overlay.querySelector('#closeOnboardingBtn');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          overlay.classList.remove('show');
          setTimeout(() => overlay.remove(), 250);
        });
      }

      const nextBtn = overlay.querySelector('#obNextBtn');
      if (nextBtn) {
        nextBtn.addEventListener('click', async () => {
          // Validation per step
          if (state.step === 1) {
            const collegeVal = collegeInp ? collegeInp.value.trim() : state.college.trim();
            if (!collegeVal) {
              state.validationError = 'Please enter your College or University name to continue.';
              renderModal();
              return;
            }
            state.college = collegeVal;
            state.validationError = '';
            state.step = 2;
            renderModal();
            return;
          }

          if (state.step === 2) {
            state.step = 3;
            state.validationError = '';
            renderModal();
            return;
          }

          if (state.step === 3) {
            state.step = 4;
            state.validationError = '';
            renderModal();
            return;
          }

          if (state.step === 4) {
            if (!state.termsAccepted) {
              state.validationError = 'You must agree to the Terms of Service to complete setup.';
              renderModal();
              return;
            }

            // Save & Launch Workspace!
            nextBtn.disabled = true;
            nextBtn.textContent = 'Personalizing...';

            const effectiveGradYear = (state.graduationYear || '').trim() || getCalculatedGradYear(state.semester);

            const userProfile = {
              userId: user.uid,
              uid: user.uid,
              fullName: user.displayName || 'BCA Scholar',
              displayName: user.displayName || 'Scholar',
              email: user.email || '',
              phone: (state.phone || '').trim(),
              linkedin: (state.linkedin || '').trim(),
              github: (state.github || '').trim(),
              semester: state.semester,
              college: state.college,
              graduationYear: effectiveGradYear,
              degree: 'Bachelor of Computer Applications (BCA)',
              careerPath: state.careerPath,
              targetSGPA: state.targetSGPA || '8.0',
              minAttendanceGoal: state.minAttendanceGoal || '75',
              termsAccepted: true
            };

            if (window.ScholarFirebase && window.ScholarFirebase.sync) {
              await window.ScholarFirebase.sync.saveUserProfile(user.uid, userProfile);
              await window.ScholarFirebase.sync.syncLocalToCloud(user.uid);
            }

            applyPersonalization(userProfile);

            overlay.classList.remove('show');
            setTimeout(() => overlay.remove(), 250);

            showToast(`🎉 Workspace Personalized for ${state.semester}! Cloud sync active.`);

            if (typeof onComplete === 'function') {
              onComplete(userProfile);
            }
          }
        });
      }
    }

    document.body.appendChild(overlay);
    renderModal();
    requestAnimationFrame(() => overlay.classList.add('show'));
  }

  // ==========================================================================
  // Dynamic Dashboard Personalization Engine
  // ==========================================================================

  function applyPersonalization(profile) {
    if (!profile) return;

    // 1. Automatic Focus Mode: Set selected semester
    if (profile.semester && SEMESTERS.includes(profile.semester)) {
      setSemFocus(profile.semester);
      const semSelect = document.getElementById('semFocusSelect');
      if (semSelect) semSelect.value = profile.semester;
    }

    // 2. Smart ATS Resume Pre-Fill
    try {
      const PRESETS = window.SCHOLAR_TOOLS_DATA?.resumePresets || {};
      let resume = null;
      try {
        const raw = localStorage.getItem('scholargrid_resume_v3');
        if (raw) resume = JSON.parse(raw);
      } catch {}

      if (!resume) {
        let chosen = 'core_fresher';
        const cp = (profile.careerPath || '').toLowerCase();
        if (cp.includes('full-stack') || cp.includes('web')) chosen = 'fullstack';
        else if (cp.includes('ai') || cp.includes('python') || cp.includes('data')) chosen = 'python_ai';
        resume = JSON.parse(JSON.stringify(PRESETS[chosen] || PRESETS.fullstack || {}));
      }

      if (profile.fullName && (!resume.fullName || resume.fullName === 'YOUR NAME' || resume.fullName === 'Mohit Gujjar')) {
        resume.fullName = profile.fullName;
      }
      if (profile.email && !resume.email) {
        resume.email = profile.email;
      }
      if (profile.phone && !resume.phone) {
        resume.phone = profile.phone;
      }
      if (profile.linkedin && !resume.linkedin) {
        resume.linkedin = profile.linkedin;
      }
      if (profile.github && !resume.github) {
        resume.github = profile.github;
      }

      if (resume.education && resume.education[0]) {
        if (profile.college && (!resume.education[0].institution || resume.education[0].institution === 'University Name')) {
          resume.education[0].institution = profile.college;
          resume.education[0].degree = 'Bachelor of Computer Applications (BCA)';
        }
        if (profile.graduationYear && !resume.education[0].year) {
          const startYear = Math.max(2020, Number(profile.graduationYear) - 3);
          resume.education[0].year = `${startYear} – ${profile.graduationYear}`;
        }
        if (profile.targetSGPA && (!resume.education[0].score || resume.education[0].score.includes('Target'))) {
          resume.education[0].score = `Target SGPA: ${profile.targetSGPA} / 10.0`;
        }
      }

      localStorage.setItem('scholargrid_resume_v3', JSON.stringify(resume));
    } catch (e) {
      console.warn('Resume prefill error:', e);
    }

    // 3. Attendance Tracker Goal
    try {
      let attState = null;
      const rawAtt = localStorage.getItem('scholargrid_attendance_v1');
      if (rawAtt) attState = JSON.parse(rawAtt);
      if (attState && typeof attState === 'object') {
        attState.minAttendanceGoal = Number(profile.minAttendanceGoal) || 75;
        localStorage.setItem('scholargrid_attendance_v1', JSON.stringify(attState));
      }
    } catch (e) {}
  }


  function renderFooter() {
    const footer = document.getElementById('footer');
    if (!footer) return;
    footer.innerHTML = `
      <div class="container footer-inner">
        <div><strong>${DATA.brand.name}</strong> — Modern Ad-Free Academic Workspace</div>
        <div class="footer-links">
          <a href="landing.html">✨ Features</a>
          <a href="index.html">Dashboard</a>
          <a href="resource.html#notes">Notes</a>
          <a href="resource.html#lab-manuals">Labs</a>
          <a href="resource.html#sgpa-calculator">SGPA Calc</a>
          <a href="resource.html#resume-builder">ATS Resume</a>
          <a href="resource.html#mcq-quiz">Quiz</a>
          <a href="resource.html#notices">Notices</a>
        </div>
      </div>
    `;
  }

  function mountHelpWidget() {
    if (document.getElementById('helpFab')) return;
    const fab = document.createElement('button');
    fab.id = 'helpFab';
    fab.className = 'help-fab';
    fab.type = 'button';
    fab.textContent = '💬 Need help?';

    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.id = 'helpModal';
    modal.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <h3>Student Support &amp; Contributions</h3>
          <button class="close-btn" type="button" data-close-modal="helpModal" aria-label="Close modal">&times;</button>
        </div>
        <p class="card-desc" style="margin-bottom:14px;">
          Request missing notes, suggest a video tutorial, or contribute study PDFs.
        </p>
        <form id="helpForm">
          <div class="form-group">
            <label for="helpTopic">Topic</label>
            <select id="helpTopic" required>
              <option value="notes">Missing Notes / Question Paper</option>
              <option value="ebook">Request E-Book</option>
              <option value="tutorial">Request Video Tutorial</option>
              <option value="contribute">Contribute Notes / PDFs</option>
            </select>
          </div>
          <div class="form-group">
            <label for="helpDetails">Details</label>
            <textarea id="helpDetails" rows="3" placeholder="Enter subject code, semester, or link..." required></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%;">Submit Request</button>
        </form>
        <div id="helpAlert" class="alert alert-success" style="margin-top:12px;">
          Request submitted! Thank you for helping improve ScholarGrid.
        </div>
      </div>
    `;
    document.body.appendChild(fab);
    document.body.appendChild(modal);

    fab.addEventListener('click', () => {
      document.getElementById('helpAlert').classList.remove('show');
      modal.classList.add('open');
    });
    modal.querySelector('[data-close-modal]').addEventListener('click', () => modal.classList.remove('open'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
    document.getElementById('helpForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const topicEl = document.getElementById('helpTopic');
      const detailsEl = document.getElementById('helpDetails');
      const topic = topicEl ? topicEl.value : 'General';
      const details = detailsEl ? detailsEl.value.trim() : '';
      const user = window.ScholarFirebase?.auth?.getCurrentUser();

      if (window.ScholarFirebase?.admin?.submitFeedback && details) {
        try {
          await window.ScholarFirebase.admin.submitFeedback({
            name: user?.displayName || 'Student User',
            email: user?.email || 'unregistered@student',
            category: topic === 'notes' ? 'Missing Notes' : (topic === 'ebook' ? 'E-Book Request' : (topic === 'tutorial' ? 'Video Tutorial' : 'Contribution')),
            subject: `Student Request (${topic})`,
            message: details
          });
        } catch (err) {
          console.warn('Feedback submit notice:', err);
        }
      }

      document.getElementById('helpAlert').classList.add('show');
      e.target.reset();
    });
  }

  // =========================================================================
  // Live Student Progress & Health Helpers (Attendance, SGPA, Streak)
  // =========================================================================

  function getLiveAttendanceData() {
    try {
      const raw = localStorage.getItem('scholargrid_attendance_data');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (typeof parsed === 'number') {
          const pct = Math.min(100, Math.max(0, parsed));
          const total = 50;
          const attended = Math.round(total * (pct / 100));
          const safe = pct >= 75;
          const buffer = safe ? Math.floor((attended - 0.75 * total) / 0.75) : 0;
          const needed = safe ? 0 : Math.ceil((0.75 * total - attended) / 0.25);
          return { pct, attended, total, buffer, needed, safe };
        }
        if (parsed && typeof parsed === 'object') {
          const pct = Number(parsed.pct ?? parsed.percentage ?? (parsed.total ? (parsed.attended / parsed.total) * 100 : 82));
          const attended = Number(parsed.attended ?? 41);
          const total = Number(parsed.total ?? 50);
          const safe = pct >= 75;
          const buffer = parsed.buffer !== undefined ? Number(parsed.buffer) : (safe ? Math.floor((attended - 0.75 * total) / 0.75) : 0);
          const needed = safe ? 0 : Math.ceil((0.75 * total - attended) / 0.25);
          return { pct, attended, total, buffer, needed, safe };
        }
      }
    } catch (e) {}

    // Fallback: Check scholargrid_attendance_v1 from tools
    try {
      const v1 = JSON.parse(localStorage.getItem('scholargrid_attendance_v1') || '{}');
      const sems = Object.keys(v1);
      if (sems.length > 0) {
        let sumAttended = 0;
        let sumTotal = 0;
        sems.forEach((sem) => {
          const subs = v1[sem] || {};
          Object.values(subs).forEach((rec) => {
            sumAttended += Math.max(0, Number(rec.attended) || 0);
            sumTotal += Math.max(0, Number(rec.total) || 0);
          });
        });
        if (sumTotal > 0) {
          const pct = (sumAttended / sumTotal) * 100;
          const safe = pct >= 75;
          const buffer = safe ? Math.floor((sumAttended - 0.75 * sumTotal) / 0.75) : 0;
          const needed = safe ? 0 : Math.ceil((0.75 * sumTotal - sumAttended) / 0.25);
          return { pct, attended: sumAttended, total: sumTotal, buffer, needed, safe };
        }
      }
    } catch (e) {}

    // Default: 82% safe buffer
    return { pct: 82.0, attended: 41, total: 50, buffer: 4, needed: 0, safe: true };
  }

  function getLiveSgpaData() {
    try {
      const raw = localStorage.getItem('scholargrid_sgpa_state');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (typeof parsed === 'number') {
          return { current: parsed, target: 8.5, credits: 24, grade: parsed >= 9 ? 'O' : parsed >= 8 ? 'A+' : 'A' };
        }
        if (parsed && typeof parsed === 'object') {
          const cur = Number(parsed.sgpa || parsed.current || 8.65);
          const tgt = Number(parsed.target || 8.5);
          const cred = Number(parsed.credits || 24);
          const gr = parsed.grade || (cur >= 9 ? 'O (Outstanding)' : cur >= 8 ? 'A+ (Excellent)' : 'A (Very Good)');
          return { current: cur, target: tgt, credits: cred, grade: gr };
        }
      }
    } catch (e) {}

    // Fallback: Check scholargrid_sgpa_v1
    try {
      const v1 = JSON.parse(localStorage.getItem('scholargrid_sgpa_v1') || '{}');
      const sems = Object.keys(v1);
      if (sems.length > 0) {
        const sem = sems[sems.length - 1];
        const semObj = v1[sem] || {};
        let totalPts = 0;
        let totalCreds = 0;
        const creditsMap = (window.SCHOLAR_TOOLS_DATA && window.SCHOLAR_TOOLS_DATA.semesterCredits) || {};
        const subList = creditsMap[sem] || [];
        subList.forEach((sub) => {
          const item = semObj[sub.code];
          if (item && item.gp !== undefined) {
            totalPts += Number(item.gp) * Number(sub.credits || 4);
            totalCreds += Number(sub.credits || 4);
          }
        });
        if (totalCreds > 0) {
          const calculated = Number((totalPts / totalCreds).toFixed(2));
          return {
            current: calculated,
            target: 8.5,
            credits: totalCreds,
            grade: calculated >= 9 ? 'O (Outstanding)' : calculated >= 8 ? 'A+ (Excellent)' : 'A (Very Good)'
          };
        }
      }
    } catch (e) {}

    // Default: Target 8.5, current 8.65
    return { current: 8.65, target: 8.5, credits: 24, grade: 'A+ (Excellent)' };
  }

  function getLiveStreakData() {
    try {
      const raw = localStorage.getItem('scholargrid_placement_streak');
      if (raw) {
        const parsed = JSON.parse(raw);
        const todayStr = new Date().toISOString().slice(0, 10);
        return {
          count: Number(parsed.count || 0),
          lastDate: parsed.lastDate || '',
          isDoneToday: parsed.lastDate === todayStr
        };
      }
    } catch (e) {}
    return { count: 3, lastDate: '', isDoneToday: false };
  }

  // =========================================================================
  // Live Student Widgets (Attendance, SGPA, Placement Streak)
  // =========================================================================

  function renderStudentWidgets() {
    const container = document.getElementById('studentWidgetsRow');
    if (!container) return;

    const att = getLiveAttendanceData();
    const sgpa = getLiveSgpaData();
    const streak = getLiveStreakData();

    // Circumference for r=24 is 2 * Math.PI * 24 ≈ 150.8
    const circ = 150.8;
    const attOffset = Math.max(0, circ - (circ * Math.min(100, att.pct)) / 100);
    const sgpaOffset = Math.max(0, circ - (circ * Math.min(10, sgpa.current)) / 10);
    const streakPct = streak.isDoneToday ? 100 : Math.min(100, Math.max(20, streak.count * 20));
    const streakOffset = Math.max(0, circ - (circ * streakPct) / 100);

    container.innerHTML = `
      <div class="student-widgets-grid">
        <!-- Widget 1: Attendance Health Meter (Emerald Accent) -->
        <div class="widget-card widget-attendance">
          <div class="widget-header">
            <div class="widget-header-content">
              <span class="widget-eyebrow">Statutory 75% Alert</span>
              <h3 class="widget-title">Attendance Health</h3>
            </div>
            <div class="widget-icon emerald" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
          </div>

          <div class="widget-radial-box">
            <div class="widget-radial-circle">
              <svg viewBox="0 0 58 58" aria-hidden="true">
                <circle class="widget-radial-bg" cx="29" cy="29" r="24"></circle>
                <circle class="widget-radial-bar emerald" cx="29" cy="29" r="24" stroke-dasharray="${circ}" stroke-dashoffset="${attOffset.toFixed(1)}"></circle>
              </svg>
              <div class="widget-radial-val">${att.pct.toFixed(0)}%</div>
            </div>
            <div class="widget-stat-group">
              <div class="widget-stat-row">
                <span class="widget-pill-badge ${att.safe ? 'safe' : 'warn'}">
                  ${att.safe ? '● Buffer Safe' : '▲ Low Buffer'}
                </span>
              </div>
              <div class="widget-stat-main">
                <span class="widget-stat-value" style="font-size:1.45rem;">${att.safe ? `+${att.buffer} Safe` : `${att.needed} Needed`}</span>
                <span class="widget-stat-unit">Classes</span>
              </div>
              <div class="widget-stat-label">${att.attended}/${att.total} Recorded Lectures</div>
            </div>
          </div>

          <div class="widget-meter-wrap">
            <div class="widget-meter-bar">
              <div class="widget-meter-fill emerald" style="width:${Math.min(100, att.pct)}%;"></div>
            </div>
            <div class="widget-meter-meta">
              <span>75% University Minimum</span>
              <span>${att.safe ? 'Safe Buffer' : 'Action Required'}</span>
            </div>
          </div>

          <div class="widget-actions">
            <a href="resource.html#attendance-tracker" class="widget-btn widget-btn-primary">
              <span>Track Attendance &amp; IA</span>
              <span aria-hidden="true">→</span>
            </a>
            <span class="widget-stat-label" style="font-size:0.75rem;">Sem Active</span>
          </div>
        </div>

        <!-- Widget 2: SGPA Target Tracker (Indigo Accent) -->
        <div class="widget-card widget-sgpa">
          <div class="widget-header">
            <div class="widget-header-content">
              <span class="widget-eyebrow">BCA NEP Framework</span>
              <h3 class="widget-title">SGPA Tracker</h3>
            </div>
            <div class="widget-icon indigo" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
            </div>
          </div>

          <div class="widget-radial-box">
            <div class="widget-radial-circle">
              <svg viewBox="0 0 58 58" aria-hidden="true">
                <circle class="widget-radial-bg" cx="29" cy="29" r="24"></circle>
                <circle class="widget-radial-bar indigo" cx="29" cy="29" r="24" stroke-dasharray="${circ}" stroke-dashoffset="${sgpaOffset.toFixed(1)}"></circle>
              </svg>
              <div class="widget-radial-val">${sgpa.current.toFixed(2)}</div>
            </div>
            <div class="widget-stat-group">
              <div class="widget-stat-row">
                <span class="widget-pill-badge info">
                  Target: ${sgpa.target.toFixed(1)} SGPA
                </span>
              </div>
              <div class="widget-stat-main">
                <span class="widget-stat-value" style="font-size:1.45rem;">${sgpa.grade}</span>
              </div>
              <div class="widget-stat-label">${sgpa.credits} Semester Credits Tracked</div>
            </div>
          </div>

          <div class="widget-meter-wrap">
            <div class="widget-meter-bar">
              <div class="widget-meter-fill indigo" style="width:${Math.min(100, (sgpa.current / 10) * 100)}%;"></div>
            </div>
            <div class="widget-meter-meta">
              <span>Scale: 10.0 Maximum</span>
              <span>${sgpa.current >= sgpa.target ? 'Target Met ★' : 'On Track'}</span>
            </div>
          </div>

          <div class="widget-actions">
            <a href="resource.html#sgpa-calculator" class="widget-btn widget-btn-primary">
              <span>Calculate &amp; Log Marks</span>
              <span aria-hidden="true">→</span>
            </a>
            <span class="widget-stat-label" style="font-size:0.75rem;">Instant Math</span>
          </div>
        </div>

        <!-- Widget 3: Daily Placement Streak (Amber Accent) -->
        <div class="widget-card widget-streak">
          <div class="widget-header">
            <div class="widget-header-content">
              <span class="widget-eyebrow">TCS NQT &amp; Infosys</span>
              <h3 class="widget-title">Placement Streak</h3>
            </div>
            <div class="widget-icon amber" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
            </div>
          </div>

          <div class="widget-radial-box">
            <div class="widget-radial-circle">
              <svg viewBox="0 0 58 58" aria-hidden="true">
                <circle class="widget-radial-bg" cx="29" cy="29" r="24"></circle>
                <circle class="widget-radial-bar amber" cx="29" cy="29" r="24" stroke-dasharray="${circ}" stroke-dashoffset="${streakOffset.toFixed(1)}"></circle>
              </svg>
              <div class="widget-radial-val">${streak.count}🔥</div>
            </div>
            <div class="widget-stat-group">
              <div class="widget-stat-row">
                <span class="widget-pill-badge streak">
                  ${streak.isDoneToday ? 'Completed Today ✅' : `Day ${streak.count} Streak`}
                </span>
              </div>
              <div class="widget-stat-main">
                <span class="widget-stat-value" style="font-size:1.45rem;">${streak.isDoneToday ? '5/5 Done' : 'Daily 5'}</span>
                <span class="widget-stat-unit">Today</span>
              </div>
              <div class="widget-stat-label">Core CS, DSA &amp; Aptitude</div>
            </div>
          </div>

          <div class="widget-meter-wrap">
            <div class="widget-meter-bar">
              <div class="widget-meter-fill amber" style="width:${streak.isDoneToday ? 100 : Math.min(100, Math.max(20, streak.count * 20))}%;"></div>
            </div>
            <div class="widget-meter-meta">
              <span>Placement Consistency</span>
              <span>${streak.isDoneToday ? 'Streak Active' : 'Ready'}</span>
            </div>
          </div>

          <div class="widget-actions">
            <a href="${streak.isDoneToday ? 'resource.html#mcq-quiz' : 'resource.html?daily=1#mcq-quiz'}" class="widget-btn widget-btn-primary">
              <span>${streak.isDoneToday ? 'Practice More MCQs' : '⚡ Start Daily 5'}</span>
              <span aria-hidden="true">→</span>
            </a>
            <span class="widget-stat-label" style="font-size:0.75rem;">5 Mins</span>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // Active Semester Course Hub: Enrolled Semester Subjects Grid
  // =========================================================================

  function renderSemesterCourseHub(activeSem) {
    const container = document.getElementById('semesterCoursesHub');
    if (!container) return;

    const savedFocus = getSemFocus();
    let sem = activeSem || savedFocus;
    if (sem === 'All' || !SEMESTERS.includes(sem)) {
      sem = savedFocus !== 'All' ? savedFocus : 'Sem I';
    }

    const notesList = (DATA.notesBySemester && DATA.notesBySemester[sem]) || [];
    const labsList = (DATA.labsBySemester && DATA.labsBySemester[sem]) || [];
    const papersList = (DATA.previousPapersBySemester && DATA.previousPapersBySemester[sem]) || [];
    const qbanksList = (DATA.importantQuestionsBySemester && DATA.importantQuestionsBySemester[sem]) || [];
    const modelList = (DATA.modelPapersBySemester && DATA.modelPapersBySemester[sem]) || [];

    // Combine courses into a unified list
    const courses = [];
    const seenCodes = new Set();

    // 1. Process theory notes subjects
    notesList.forEach((sub) => {
      const code = sub.code || 'BCA';
      seenCodes.add(code.toUpperCase());

      // Find matching lab manual
      let labPdf = '';
      const matchingLab = labsList.find((l) => {
        const lCode = (l.code || '').replace(/\D/g, '');
        const sCode = code.replace(/\D/g, '');
        return (lCode && sCode && lCode === sCode) || (l.name && sub.name && l.name.toLowerCase().includes(sub.name.toLowerCase().split(' ')[0]));
      });
      if (matchingLab && matchingLab.pdfs && matchingLab.pdfs[0]) {
        labPdf = matchingLab.pdfs[0].url;
      }

      // Find matching previous paper or question bank or model paper
      let qpPdf = '';
      const matchingPaper = papersList.find((p) => (p.code && p.code.includes(code)) || (p.name && sub.name && p.name.toLowerCase().includes(sub.name.toLowerCase().split(' ')[0])));
      if (matchingPaper && matchingPaper.pdfs && matchingPaper.pdfs[0]) {
        qpPdf = matchingPaper.pdfs[0].url;
      } else {
        const matchingQBank = qbanksList.find((q) => (q.code && q.code.includes(code)) || (q.name && sub.name && q.name.toLowerCase().includes(sub.name.toLowerCase().split(' ')[0])));
        if (matchingQBank && matchingQBank.pdfs && matchingQBank.pdfs[0]) {
          qpPdf = matchingQBank.pdfs[0].url;
        } else if (modelList && modelList[0] && modelList[0].pdfs && modelList[0].pdfs[0] && (modelList[0].name.toLowerCase().includes(sub.name.toLowerCase().split(' ')[0]))) {
          qpPdf = modelList[0].pdfs[0].url;
        }
      }

      const hasNotes = sub.pdfs && sub.pdfs.length > 0;
      const notesPdf = hasNotes ? sub.pdfs[0].url : '';
      const unitCount = sub.pdfs ? sub.pdfs.length : 0;

      courses.push({
        id: `course-${sem}-${code}`,
        code: code,
        name: sub.name,
        type: 'Theory Course',
        credits: code === 'AECC' ? '2 Credits' : '4 Credits',
        unitCount: unitCount,
        notesUrl: notesPdf || 'resource.html#notes',
        hasNotes: hasNotes,
        labUrl: labPdf || 'resource.html#lab-manuals',
        hasLab: !!labPdf,
        qpUrl: qpPdf || 'resource.html#previous-papers',
        hasQp: !!qpPdf
      });
    });

    // 2. Process any lab courses not yet covered
    labsList.forEach((lab) => {
      const code = lab.code || 'BCAP';
      if (!seenCodes.has(code.toUpperCase())) {
        seenCodes.add(code.toUpperCase());
        const hasLabPdf = lab.pdfs && lab.pdfs.length > 0;
        const labPdf = hasLabPdf ? lab.pdfs[0].url : '';

        // Check if matching Q-bank exists
        const matchingQBank = qbanksList.find((q) => q.code && q.code.includes(code));
        const qpPdf = matchingQBank && matchingQBank.pdfs && matchingQBank.pdfs[0] ? matchingQBank.pdfs[0].url : '';

        courses.push({
          id: `course-lab-${sem}-${code}`,
          code: code,
          name: lab.name,
          type: 'Practical Lab',
          credits: '2 Credits',
          unitCount: 0,
          notesUrl: 'resource.html#notes',
          hasNotes: false,
          labUrl: labPdf || 'resource.html#lab-manuals',
          hasLab: hasLabPdf,
          qpUrl: qpPdf || 'resource.html#previous-papers',
          hasQp: !!qpPdf
        });
      }
    });

    container.innerHTML = `
      <div class="section-header" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:16px;">
        <div>
          <div style="display:flex;align-items:center;gap:8px;">
            <h2 class="section-title" style="margin:0;">Enrolled Semester Courses</h2>
            <span class="badge" id="courseHubSemBadge" style="background:rgba(79,70,229,0.1);color:#4f46e5;font-weight:700;">${escHtml(sem)}</span>
          </div>
          <p class="section-subtitle" style="margin:4px 0 0;">
            1-click access to official unit notes, practical lab manuals, and university question papers
          </p>
        </div>

        <div class="segmented-control course-hub-sem-pills" role="tablist" aria-label="Course Hub Semester Filter">
          ${SEMESTERS.map((s) => `
            <button type="button" class="segment-btn ${s === sem ? 'active' : ''}" data-hub-sem="${escHtml(s)}">${escHtml(s)}</button>
          `).join('')}
        </div>
      </div>

      <div class="course-hub-grid">
        ${courses.map((c) => `
          <div class="course-card">
            <div class="course-card-top">
              <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                <span class="course-code-badge">${escHtml(c.code)}</span>
                <span class="credit-badge">${escHtml(c.credits)}</span>
              </div>
              ${renderPinButton(c.id, `${c.name} (${c.code})`, c.notesUrl, `${sem} • Course`)}
            </div>

            <div>
              <h3 class="course-title course-card-title">${escHtml(c.name)}</h3>
              <p class="course-desc course-card-desc">
                ${c.unitCount > 0 ? `${c.unitCount} Unit Lecture PDFs Available` : (c.type === 'Practical Lab' ? 'Official Laboratory Programs & Viva Manual' : 'Syllabus & Course Study Materials')}
              </p>
            </div>

            <div class="course-actions-row course-action-pills">
              <a href="${escHtml(c.notesUrl)}" class="course-action-pill ${c.hasNotes ? 'has-doc' : 'disabled'}" ${c.hasNotes ? '' : 'title="View notes in library"'}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
                <span>${c.hasNotes ? 'Unit Notes (PDF)' : 'Notes Library'}</span>
              </a>

              <a href="${escHtml(c.labUrl)}" class="course-action-pill ${c.hasLab ? 'has-doc' : 'disabled'}" ${c.hasLab ? '' : 'title="View lab manuals"'}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                <span>${c.hasLab ? 'Lab Manual' : 'Labs'}</span>
              </a>

              <a href="${escHtml(c.qpUrl)}" class="course-action-pill ${c.hasQp ? 'has-doc' : 'disabled'}" ${c.hasQp ? '' : 'title="View question papers"'}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                <span>${c.hasQp ? 'Model QP' : 'Question Bank'}</span>
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Connect pill switches inside the course hub
    container.querySelectorAll('[data-hub-sem]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextSem = btn.getAttribute('data-hub-sem');
        setSemFocus(nextSem);

        // Sync with Hero Pills
        const heroPills = document.getElementById('heroSemPills');
        if (heroPills) {
          heroPills.querySelectorAll('.segment-btn').forEach((b) => {
            b.classList.toggle('active', b.getAttribute('data-sem') === nextSem);
          });
        }
        const topSelect = document.getElementById('semFocusSelect');
        if (topSelect) topSelect.value = nextSem;
        const semBadge = document.getElementById('headerSemBadge');
        if (semBadge) semBadge.textContent = nextSem === 'All' ? 'All Semesters' : nextSem;

        renderSemesterCourseHub(nextSem);
      });
    });
  }

  // =========================================================================
  // Command Palette Spotlight Modal (⌘K / Ctrl+K / /)
  // =========================================================================

  function initCommandPalette() {
    const modal = document.getElementById('commandPaletteModal');
    const input = document.getElementById('cmdPaletteInput');
    const resultsContainer = document.getElementById('cmdPaletteResults');
    const triggerBar = document.getElementById('commandTriggerBar');
    const moduleSearch = document.getElementById('moduleSearch');
    if (!modal || !input || !resultsContainer) return;

    let itemsIndex = [];
    let activeFiltered = [];
    let selectedIndex = 0;

    function buildIndex() {
      if (itemsIndex.length > 0) return itemsIndex;
      const list = [];

      // 1. Productivity Tools
      list.push(
        {
          id: 'tool-mcq',
          title: 'Daily 5 Placement Challenge',
          desc: 'TCS NQT & Infosys recruitment pattern practice questions',
          category: 'Tools',
          badge: 'Daily Challenge',
          url: 'resource.html?daily=1#mcq-quiz',
          icon: 'mcq-quiz',
          keywords: 'daily streak mcq quiz placement test questions practice'
        },
        {
          id: 'tool-sgpa',
          title: 'SGPA & CGPA Calculator',
          desc: 'Instant university GPA calculator with pre-loaded BCA NEP credits',
          category: 'Tools',
          badge: 'Calculator',
          url: 'resource.html#sgpa-calculator',
          icon: 'sgpa-calculator',
          keywords: 'sgpa cgpa gpa calculator marks credits grades'
        },
        {
          id: 'tool-attendance',
          title: 'Attendance & 75% Safe Buffer Tracker',
          desc: 'Track statutory attendance, safe-to-miss lecture buffer & internal test marks',
          category: 'Tools',
          badge: 'Buffer Monitor',
          url: 'resource.html#attendance-tracker',
          icon: 'attendance-tracker',
          keywords: 'attendance 75 percent safe buffer classes present absent'
        },
        {
          id: 'tool-resume',
          title: 'ATS Resume Builder (Harvard Standard)',
          desc: 'Single-page technical resume builder with instant PDF export',
          category: 'Tools',
          badge: 'Resume',
          url: 'resource.html#resume-builder',
          icon: 'resume-builder',
          keywords: 'resume cv builder harvard ats job placement'
        }
      );

      // 2. All 20 Modules
      (DATA.modules || []).forEach((m) => {
        list.push({
          id: `mod-${m.id}`,
          title: m.title,
          desc: m.desc,
          category: 'Modules',
          badge: m.badge || 'Module',
          url: `resource.html#${m.id}`,
          icon: m.id,
          keywords: `${m.title} ${m.desc} ${m.badge} module`
        });
      });

      // 3. Semester Notes & PDFs
      const notesMap = DATA.notesBySemester || {};
      Object.keys(notesMap).forEach((sem) => {
        (notesMap[sem] || []).forEach((sub) => {
          if (sub.pdfs && sub.pdfs.length) {
            sub.pdfs.forEach((p) => {
              list.push({
                id: `pdf-${sem}-${sub.code}-${p.label}`,
                title: `${sub.name} — ${p.label}`,
                desc: `${sem} • ${sub.code} lecture notes PDF`,
                category: 'Notes (PDF)',
                badge: sem,
                url: p.url,
                icon: 'notes',
                isPdf: true,
                keywords: `${sem} ${sub.code} ${sub.name} ${p.label} notes pdf unit`
              });
            });
          } else {
            list.push({
              id: `sub-${sem}-${sub.code}`,
              title: `${sub.name} (${sub.code})`,
              desc: `${sem} syllabus & study materials`,
              category: 'Subjects',
              badge: sem,
              url: 'resource.html#notes',
              icon: 'notes',
              keywords: `${sem} ${sub.code} ${sub.name} notes subject`
            });
          }
        });
      });

      // 4. Lab Manuals
      const labsMap = DATA.labsBySemester || {};
      Object.keys(labsMap).forEach((sem) => {
        (labsMap[sem] || []).forEach((lab) => {
          const pdfUrl = lab.pdfs && lab.pdfs[0] ? lab.pdfs[0].url : '';
          list.push({
            id: `lab-${sem}-${lab.code}`,
            title: `${lab.name} (${lab.code})`,
            desc: `${sem} practical lab manual & programs`,
            category: 'Lab Manuals',
            badge: sem,
            url: pdfUrl || 'resource.html#lab-manuals',
            icon: 'lab-manuals',
            isPdf: !!pdfUrl,
            keywords: `${sem} ${lab.code} ${lab.name} lab manual practical viva`
          });
        });
      });

      // 5. Question Papers & Important Questions
      const papersMap = DATA.previousPapersBySemester || {};
      Object.keys(papersMap).forEach((sem) => {
        (papersMap[sem] || []).forEach((qp) => {
          if (qp.pdfs && qp.pdfs.length) {
            qp.pdfs.forEach((p) => {
              list.push({
                id: `qp-${sem}-${qp.code}-${p.label}`,
                title: `${qp.name} — ${p.label}`,
                desc: `${sem} university exam paper PDF`,
                category: 'Question Papers',
                badge: sem,
                url: p.url,
                icon: 'previous-papers',
                isPdf: true,
                keywords: `${sem} ${qp.code} ${qp.name} ${p.label} qp paper exam`
              });
            });
          }
        });
      });

      // 6. Roadmaps
      (DATA.roadmaps || []).forEach((rm) => {
        list.push({
          id: `rm-${rm.id}`,
          title: `${rm.title} Roadmap`,
          desc: `Interactive skills checklist: ${(rm.skills || []).slice(0, 3).join(', ')}...`,
          category: 'Career',
          badge: 'Roadmap',
          url: 'resource.html#roadmaps',
          icon: 'roadmaps',
          keywords: `${rm.title} roadmap skills career track`
        });
      });

      itemsIndex = list;
      return itemsIndex;
    }

    function openPalette() {
      buildIndex();
      modal.style.display = 'flex';
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      input.value = '';
      selectedIndex = 0;
      renderResults('');
      setTimeout(() => input.focus(), 50);
    }

    function closePalette() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      modal.style.display = 'none';
      document.body.style.overflow = '';
      if (moduleSearch) moduleSearch.blur();
    }

    function highlightText(text, query) {
      if (!query) return escHtml(text);
      const q = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${q})`, 'gi');
      return escHtml(text).replace(regex, '<mark style="background:rgba(79,70,229,0.15);color:#4338ca;padding:0 2px;border-radius:3px;">$1</mark>');
    }

    function renderResults(q) {
      const query = (q || '').trim().toLowerCase();
      const all = buildIndex();

      if (!query) {
        // Show top 8 quick recommendations
        activeFiltered = all.slice(0, 8);
      } else {
        const terms = query.split(/\s+/).filter(Boolean);
        activeFiltered = all.filter((item) => {
          const haystack = `${item.title} ${item.desc} ${item.category} ${item.badge} ${item.keywords}`.toLowerCase();
          return terms.every((t) => haystack.includes(t));
        }).slice(0, 16);
      }

      if (selectedIndex >= activeFiltered.length) {
        selectedIndex = Math.max(0, activeFiltered.length - 1);
      }

      if (!activeFiltered.length) {
        resultsContainer.innerHTML = `
          <div class="cmd-palette-empty">
            <div style="font-weight:600;margin-bottom:4px;">No matching results</div>
            <div style="font-size:0.82rem;">Try searching for "Notes", "DBMS", "SGPA", "Lab", or "Resume"</div>
          </div>
        `;
        return;
      }

      resultsContainer.innerHTML = activeFiltered.map((item, idx) => `
        <div class="cmd-palette-item ${idx === selectedIndex ? 'active' : ''}" data-cmd-index="${idx}" role="option" aria-selected="${idx === selectedIndex}">
          <div class="cmd-palette-item-left">
            <div class="cmd-palette-item-icon">${getIcon(item.icon || 'notes')}</div>
            <div style="min-width:0;">
              <span class="cmd-palette-item-title">${highlightText(item.title, query)}</span>
              <span class="cmd-palette-item-subtitle">${escHtml(item.desc)}</span>
            </div>
          </div>
          <span class="cmd-badge">${escHtml(item.badge || item.category)}</span>
        </div>
      `).join('');

      const activeEl = resultsContainer.querySelector('.cmd-palette-item.active');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }

    function selectItem(idx) {
      const item = activeFiltered[idx];
      if (!item) return;

      closePalette();

      if (item.isPdf || (item.url && /\.pdf($|\?|#)/i.test(item.url))) {
        const titleEl = document.getElementById('pdfModalTitle');
        const frame = document.getElementById('pdfViewerFrame');
        const downloadBtn = document.getElementById('pdfDownloadBtn');
        const pdfModal = document.getElementById('pdfViewerModal');
        if (pdfModal && frame && titleEl && downloadBtn) {
          titleEl.textContent = item.title;
          downloadBtn.setAttribute('href', item.url);
          const filename = decodeURIComponent(item.url.split('/').pop().split('?')[0] || 'document.pdf');
          downloadBtn.setAttribute('download', filename);
          frame.setAttribute('src', item.url);
          pdfModal.classList.add('open');
          return;
        }
      }

      window.location.href = item.url;
    }

    input.addEventListener('input', (e) => {
      selectedIndex = 0;
      renderResults(e.target.value);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (activeFiltered.length > 0) {
          selectedIndex = (selectedIndex + 1) % activeFiltered.length;
          renderResults(input.value);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (activeFiltered.length > 0) {
          selectedIndex = (selectedIndex - 1 + activeFiltered.length) % activeFiltered.length;
          renderResults(input.value);
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        selectItem(selectedIndex);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closePalette();
      }
    });

    resultsContainer.addEventListener('click', (e) => {
      const row = e.target.closest('.cmd-palette-item');
      if (row) {
        const idx = Number(row.getAttribute('data-cmd-index'));
        selectItem(idx);
      }
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closePalette();
      }
    });

    // Global Keydown Listeners for ⌘K / Ctrl+K / /
    document.addEventListener('keydown', (e) => {
      const isInput = ['input', 'textarea', 'select'].includes(document.activeElement?.tagName?.toLowerCase());
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openPalette();
      } else if (e.key === '/' && !isInput) {
        e.preventDefault();
        openPalette();
      } else if (e.key === 'Escape' && modal.classList.contains('open')) {
        closePalette();
      }
    });

    if (triggerBar) {
      triggerBar.addEventListener('click', (e) => {
        e.preventDefault();
        openPalette();
      });
    }

    if (moduleSearch) {
      moduleSearch.addEventListener('focus', (e) => {
        e.preventDefault();
        openPalette();
      });
    }
  }

  // =========================================================================
  // Workspace Dashboard Initialization
  // =========================================================================

  function initHomePage() {
    renderSidebar(null);
    renderTopbar('Dashboard', false, (sem) => {
      renderRecentUploads(sem);
      renderSemesterCourseHub(sem);
      const badgeEl = document.getElementById('headerSemBadge');
      if (badgeEl) badgeEl.textContent = sem === 'All' ? 'All Semesters' : sem;
      const semPills = document.getElementById('heroSemPills');
      if (semPills) {
        semPills.querySelectorAll('.segment-btn').forEach((b) => {
          b.classList.toggle('active', b.getAttribute('data-sem') === sem);
        });
      }
    });
    renderFooter();
    mountHelpWidget();
    renderPinnedSection();
    renderStudentWidgets();

    const focusSem = getSemFocus();
    renderSemesterCourseHub(focusSem);
    renderToolsBento();
    initCommandPalette();

    const grid = document.getElementById('modulesGrid');
    const searchInput = document.getElementById('moduleSearch');
    const noticesList = document.getElementById('noticesList');
    const uploadsList = document.getElementById('uploadsList');
    const semBadge = document.getElementById('headerSemBadge');

    if (semBadge) semBadge.textContent = focusSem === 'All' ? 'All Semesters' : focusSem;

    // 4 Core Productivity Tools Bento Showcase
    function renderToolsBento() {
      const bentoEl = document.getElementById('toolsBentoGrid');
      if (!bentoEl) return;

      const streakKey = 'scholargrid_placement_streak';
      let streakData = { count: 0, lastDate: '' };
      try {
        streakData = JSON.parse(localStorage.getItem(streakKey) || '{"count":0,"lastDate":""}');
      } catch (e) {}
      const todayStr = new Date().toISOString().slice(0, 10);
      const isDoneToday = streakData.lastDate === todayStr;
      const streakCount = streakData.count || 0;

      const tools = [
        {
          id: 'mcq-quiz',
          title: 'Placement MCQ Engine',
          badge: isDoneToday ? `🔥 Day ${streakCount} Done` : (streakCount > 0 ? `🔥 Day ${streakCount} Streak` : 'Daily 5 Practice'),
          desc: 'Timed TCS NQT &amp; Infosys recruitment mock tests with GATE-style question palette &amp; instant feedback.',
          action: isDoneToday ? 'Practice More Questions →' : 'Start Daily 5 Questions →',
          param: isDoneToday ? '' : '?daily=1'
        },
        {
          id: 'sgpa-calculator',
          title: 'SGPA &amp; CGPA Calculator',
          badge: 'Instant Math',
          desc: 'Pre-loaded BCA credits with internal marks entry, grade point estimation, and Firestore cloud sync.',
          action: 'Calculate SGPA →',
          param: ''
        },
        {
          id: 'attendance-tracker',
          title: 'Attendance &amp; IA Tracker',
          badge: '75% Statutory Alert',
          desc: 'Track subject attendance, calculate safe-to-miss lecture buffer, and log internal test assessments.',
          action: 'Track Attendance →',
          param: ''
        },
        {
          id: 'resume-builder',
          title: 'ATS Resume Builder',
          badge: 'Harvard Standard',
          desc: 'Single-page technical resume builder with pre-configured BCA project templates and instant PDF print.',
          action: 'Build Resume →',
          param: ''
        }
      ];

      bentoEl.innerHTML = tools.map((t) => `
        <a href="resource.html#${t.id}${t.param}" class="tool-bento-card">
          <div>
            <div class="tool-bento-top">
              <div class="tool-bento-icon">${getIcon(t.id)}</div>
              <span class="badge badge-subtle">${t.badge}</span>
            </div>
            <div class="tool-bento-title" style="margin-top:12px;">${t.title}</div>
            <div class="tool-bento-desc">${t.desc}</div>
          </div>
          <div class="tool-bento-footer">
            <span>${t.action}</span>
          </div>
        </a>
      `).join('');
    }

    const categoryModuleMap = {
      academics: ['notes', 'lab-manuals', 'previous-papers', 'important-questions', 'model-papers', 'syllabus', 'ebooks'],
      tools: ['sgpa-calculator', 'attendance-tracker', 'resume-builder', 'mcq-quiz'],
      career: ['roadmaps', 'certifications', 'ai-tools', 'learning-platforms', 'placement-cell', 'career-development', 'video-tutorials'],
      campus: ['exam-announcements', 'notices']
    };

    let activeCategoryTab = 'all';

    function renderModules(filter = '', catTab = 'all') {
      if (!grid) return;
      const q = filter.trim().toLowerCase();
      let items = DATA.modules;

      if (catTab && catTab !== 'all' && categoryModuleMap[catTab]) {
        const allowed = new Set(categoryModuleMap[catTab]);
        items = items.filter((m) => allowed.has(m.id));
      }

      if (q) {
        items = items.filter(
          (m) => m.title.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q) || m.badge.toLowerCase().includes(q)
        );
      }

      if (!items.length) {
        grid.innerHTML = `
          <div class="card" style="grid-column:1 / -1; padding:32px; text-align:center;">
            <div class="card-title">No matching modules</div>
            <div class="card-desc">Try clearing the search or switching category tabs.</div>
          </div>
        `;
        return;
      }

      const userProfile = window.ScholarFirebase?.auth?.getUserProfile();
      grid.innerHTML = items.map((m) => {
        let isRec = false;
        if (userProfile && userProfile.careerPath) {
          const cp = userProfile.careerPath.toLowerCase();
          if (m.id === 'mcq-quiz' && (cp.includes('placement') || cp.includes('core') || cp.includes('higher'))) {
            isRec = true;
          } else if (m.id === 'resume-builder' && (cp.includes('full-stack') || cp.includes('placement') || cp.includes('ai'))) {
            isRec = true;
          } else if (m.id === 'sgpa-calculator' && cp.includes('rank')) {
            isRec = true;
          }
        }
        return `
          <a href="resource.html#${m.id}" class="card card-interactive">
            ${isRec ? '<div class="recommended-badge">★ Recommended for You</div>' : ''}
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="card-icon">${getIcon(m.id)}</span>
              <span class="badge badge-subtle">${m.badge}</span>
            </div>
            <div class="card-title">${m.title}</div>
            <div class="card-desc">${m.desc}</div>
            <div class="card-meta"><span>Open module →</span></div>
          </a>
        `;
      }).join('');
    }

    function renderRecentUploads(semFilter) {
      if (!uploadsList) return;
      const sem = semFilter || getSemFocus();
      const items = sem === 'All'
        ? DATA.recentUploads
        : DATA.recentUploads.filter((u) => u.semester === sem);

      if (!items.length) {
        uploadsList.innerHTML = `
          <div class="card" style="grid-column:1 / -1; padding:24px; text-align:center;">
            <div class="card-title">No recent uploads for ${escHtml(sem)}</div>
            <div class="card-desc">Switch "My Semester" to All Semesters or open Notes Library to browse all units.</div>
          </div>
        `;
        return;
      }

      uploadsList.innerHTML = items.map((u) => `
        <a href="${u.url}" target="_blank" rel="noopener noreferrer" class="card card-interactive">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
              <span class="badge badge-subtle">${u.semester}</span>
              <span class="badge badge-subtle" style="color:var(--primary);">${u.tag}</span>
            </div>
            ${renderPinButton(u.url, u.title, u.url, `${u.semester} • ${u.tag}`)}
          </div>
          <div class="card-title">${u.title}</div>
          <div class="card-meta"><span>Open PDF ↗</span></div>
        </a>
      `).join('');
    }

    // Hero Semester Pills Switching
    const semPills = document.getElementById('heroSemPills');
    if (semPills) {
      semPills.querySelectorAll('.segment-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-sem') === focusSem);
        btn.addEventListener('click', () => {
          const chosen = btn.getAttribute('data-sem');
          setSemFocus(chosen);
          semPills.querySelectorAll('.segment-btn').forEach((b) => b.classList.toggle('active', b === btn));
          const topSelect = document.getElementById('semFocusSelect');
          if (topSelect) topSelect.value = chosen;
          if (semBadge) semBadge.textContent = chosen === 'All' ? 'All Semesters' : chosen;
          renderRecentUploads(chosen);
          renderSemesterCourseHub(chosen);
        });
      });
    }

    // Quick Filter Chips Handling
    const quickChips = document.getElementById('quickFilterChips');
    if (quickChips) {
      quickChips.querySelectorAll('.quick-chip').forEach((chip) => {
        chip.addEventListener('click', () => {
          quickChips.querySelectorAll('.quick-chip').forEach((c) => c.classList.remove('active'));
          chip.classList.add('active');
          const type = chip.getAttribute('data-chip');
          if (type === 'all') {
            activeCategoryTab = 'all';
            syncCatNav('all');
            renderModules('', 'all');
          } else if (type === 'notes') {
            activeCategoryTab = 'academics';
            syncCatNav('academics');
            renderModules('notes', 'academics');
            const hub = document.getElementById('semesterCoursesHub');
            if (hub) hub.scrollIntoView({ behavior: 'smooth' });
          } else if (type === 'labs') {
            activeCategoryTab = 'academics';
            syncCatNav('academics');
            renderModules('lab', 'academics');
            const hub = document.getElementById('semesterCoursesHub');
            if (hub) hub.scrollIntoView({ behavior: 'smooth' });
          } else if (type === 'papers') {
            activeCategoryTab = 'academics';
            syncCatNav('academics');
            renderModules('paper', 'academics');
            const hub = document.getElementById('semesterCoursesHub');
            if (hub) hub.scrollIntoView({ behavior: 'smooth' });
          } else if (type === 'sgpa') {
            window.location.href = 'resource.html#sgpa-calculator';
          } else if (type === 'attendance') {
            window.location.href = 'resource.html#attendance-tracker';
          } else if (type === 'streak') {
            window.location.href = 'resource.html?daily=1#mcq-quiz';
          }
        });
      });
    }

    function syncCatNav(tabKey) {
      const catTabs = document.getElementById('categoryTabsNav');
      if (catTabs) {
        catTabs.querySelectorAll('.segment-btn').forEach((btn) => {
          btn.classList.toggle('active', btn.getAttribute('data-cat-tab') === tabKey);
        });
      }
    }

    // Category Tabs Pill Navigation
    const catTabs = document.getElementById('categoryTabsNav');
    if (catTabs) {
      catTabs.querySelectorAll('.segment-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          catTabs.querySelectorAll('.segment-btn').forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          activeCategoryTab = btn.getAttribute('data-cat-tab');
          renderModules(searchInput?.value || '', activeCategoryTab);
        });
      });
    }

    renderModules();

    if (noticesList) {
      async function renderNoticesWithAdminAnnouncements() {
        let broadcastAnnouncements = [];
        if (window.ScholarFirebase?.admin?.getAnnouncements) {
          try {
            broadcastAnnouncements = await window.ScholarFirebase.admin.getAnnouncements();
          } catch {}
        }

        const customNotices = (broadcastAnnouncements || []).map((ann) => ({
          title: ann.title,
          summary: ann.body,
          tag: ann.tag || 'Notice',
          date: ann.createdAt ? new Date(ann.createdAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }) : 'Today',
          url: 'resource.html#notices',
          urgent: !!ann.urgent
        }));

        const mergedNotices = [...customNotices, ...DATA.noticesFeed];

        noticesList.innerHTML = mergedNotices.map((n) => `
          <a href="${n.url}" ${n.url.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} class="card card-interactive" ${n.urgent ? 'style="border-left:4px solid var(--danger);background:rgba(220,38,38,0.02);"' : ''}>
            <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
              <span class="badge ${n.urgent ? 'badge-paid' : 'badge-subtle'}" style="font-weight:700;">${n.tag}</span>
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:0.75rem;color:var(--text-muted);">${n.date}</span>
                ${renderPinButton(n.url, n.title, n.url, n.tag)}
              </div>
            </div>
            <div class="card-title">${n.title}</div>
            <div class="card-desc">${n.summary}</div>
            <div class="card-meta"><span>Open Notice ↗</span></div>
          </a>
        `).join('');
      }
      renderNoticesWithAdminAnnouncements();
    }

    renderRecentUploads(focusSem);

    // Dynamic Reactive Event Listeners for Live Widgets
    window.addEventListener('scholargrid:attendance-updated', renderStudentWidgets);
    window.addEventListener('scholargrid:sgpa-updated', renderStudentWidgets);
    window.addEventListener('scholargrid:streak-updated', () => {
      renderStudentWidgets();
      renderToolsBento();
    });
    window.addEventListener('storage', () => {
      renderStudentWidgets();
      renderPinnedSection();
    });
  }


    function initResourcePage() {
    const params = new URLSearchParams(window.location.search);
    const rawHash = window.location.hash.replace(/^#/, '');
    const hashId = rawHash.split('?')[0].split('&')[0];
    const moduleId = hashId || params.get('module') || 'notes';
    const mod = DATA.modules.find((m) => m.id === moduleId) || DATA.modules[0];
    document.title = `${mod.title} — ${DATA.brand.name}`;

    renderSidebar(mod.id);
    renderTopbar(`<span style="display:inline-flex;align-items:center;gap:8px;">${getIcon(mod.id)} <span>${mod.title}</span></span>`, true, (sem) => {
      const semMap = {
        'notes': DATA.notesBySemester,
        'lab-manuals': DATA.labsBySemester,
        'previous-papers': DATA.previousPapersBySemester,
        'important-questions': DATA.importantQuestionsBySemester,
        'model-papers': DATA.modelPapersBySemester
      };
      if (semMap[mod.id]) {
        const content = document.getElementById('moduleContent');
        const nextSem = sem !== 'All' ? sem : (mod.id === 'model-papers' ? 'Sem V' : 'Sem I');
        renderSemesterPdfs(content, semMap[mod.id], nextSem, mod);
      }
    });
    renderFooter();
    mountHelpWidget();

    document.getElementById('moduleHeader').innerHTML = `
      <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;">
        <span class="card-icon" style="width:48px;height:48px;">${getIcon(mod.id)}</span>
        <div>
          <span class="badge badge-subtle">${mod.badge}</span>
          <h1 style="margin-top:4px;">${mod.title}</h1>
          <p class="section-subtitle">${mod.desc}</p>
        </div>
      </div>
      <a href="index.html" class="btn btn-outline btn-sm">← Back to Dashboard</a>
    `;

    const content = document.getElementById('moduleContent');
    const semMap = {
      'notes': DATA.notesBySemester,
      'lab-manuals': DATA.labsBySemester,
      'previous-papers': DATA.previousPapersBySemester,
      'important-questions': DATA.importantQuestionsBySemester,
      'model-papers': DATA.modelPapersBySemester
    };

    const TOOLS = window.SCHOLAR_TOOLS || {};

    if (semMap[mod.id]) {
      const focusSem = getSemFocus();
      const defaultSem = focusSem !== 'All' ? focusSem : (mod.id === 'model-papers' ? 'Sem V' : 'Sem I');
      renderSemesterPdfs(content, semMap[mod.id], defaultSem, mod);
    } else if (mod.id === 'ai-tools') {
      renderAITools(content);
    } else if (mod.id === 'roadmaps') {
      renderRoadmaps(content);
    } else if (mod.id === 'video-tutorials') {
      renderVideos(content);
    } else if (mod.id === 'placement-cell') {
      renderPlacement(content);
    } else if (mod.id === 'sgpa-calculator' && TOOLS.renderSgpaCalculator) {
      TOOLS.renderSgpaCalculator(content);
    } else if (mod.id === 'attendance-tracker' && TOOLS.renderAttendanceTracker) {
      TOOLS.renderAttendanceTracker(content);
    } else if (mod.id === 'resume-builder' && TOOLS.renderResumeBuilder) {
      TOOLS.renderResumeBuilder(content);
    } else if (mod.id === 'mcq-quiz' && TOOLS.renderMcqQuiz) {
      TOOLS.renderMcqQuiz(content);
    } else {
      renderCardDirectory(content, mod.id);
    }
  }

  function renderSemesterPdfs(container, bySem, defaultSem, mod) {
    let activeSem = SEMESTERS.includes(defaultSem) ? defaultSem : 'Sem I';

    function draw() {
      const items = bySem[activeSem] || [];
      container.innerHTML = `
        <div class="tabs">
          ${SEMESTERS.map((s) => `<button type="button" class="tab-btn ${s === activeSem ? 'active' : ''}" data-sem="${s}">${s}</button>`).join('')}
        </div>
        <div class="grid grid-2">
          ${items.map((sub) => {
            const subId = `sub:${mod.id}:${activeSem}:${sub.code}`;
            const subUrl = `resource.html#${mod.id}`;
            return `
            <div class="card">
              <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
                <span class="badge">${sub.code}</span>
                <div style="display:flex;align-items:center;gap:8px;">
                  <span style="font-size:0.8rem;color:var(--text-muted);">${activeSem}</span>
                  ${renderPinButton(subId, `${sub.name} (${sub.code})`, subUrl, `${activeSem} • ${mod.title}`)}
                </div>
              </div>
              <div class="card-title">${sub.name}</div>
              ${sub.pdfs && sub.pdfs.length ? `
                <div class="pdf-chips">
                  ${sub.pdfs.map((p) => `
                    <span style="display:inline-flex;align-items:center;gap:4px;">
                      <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="pdf-chip">📄 ${p.label} ↗</a>
                      ${renderPinButton(p.url, `${sub.name} — ${p.label}`, p.url, `${activeSem} • ${sub.code}`)}
                    </span>
                  `).join('')}
                </div>
              ` : `
                <div class="card-desc">${sub.status || 'Uploaded Soon'}</div>
              `}
            </div>
          `;
          }).join('')}
        </div>
      `;
      container.querySelectorAll('[data-sem]').forEach((btn) => {
        btn.addEventListener('click', () => { activeSem = btn.dataset.sem; draw(); });
      });
    }
    draw();
  }

  function renderAITools(container) {
    const categories = ['All', ...new Set(DATA.aiTools.map((t) => t.category))];
    let activeCat = 'All';
    let query = '';

    container.innerHTML = `
      <div style="margin-bottom:16px;max-width:420px;">
        <input id="aiSearch" class="input" type="search" placeholder="Search 68 AI tools (e.g. Cursor, Gemini, Perplexity)..." />
      </div>
      <div id="aiTabs" class="tabs"></div>
      <div id="aiGrid" class="grid grid-3"></div>
    `;

    function draw() {
      document.getElementById('aiTabs').innerHTML = categories
        .map((c) => `<button type="button" class="tab-btn ${c === activeCat ? 'active' : ''}" data-cat="${c}">${c}</button>`)
        .join('');

      const q = query.trim().toLowerCase();
      const list = DATA.aiTools.filter((t) =>
        (activeCat === 'All' || t.category === activeCat) &&
        (!q || t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || t.category.toLowerCase().includes(q))
      );

      document.getElementById('aiGrid').innerHTML = list.map((t) => {
        const pClass = t.pricing === 'Free' ? 'badge-free' : t.pricing === 'Paid' ? 'badge-paid' : 'badge-freemium';
        return `
          <a href="${t.url}" target="_blank" rel="noopener noreferrer" class="card card-interactive">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="badge">${t.category}</span>
              <span class="badge ${pClass}">${t.pricing}</span>
            </div>
            <div class="card-title">${t.name}</div>
            <div class="card-desc">${t.desc}</div>
            <div class="card-meta"><span>Open tool ↗</span></div>
          </a>
        `;
      }).join('');

      document.querySelectorAll('#aiTabs [data-cat]').forEach((btn) => {
        btn.addEventListener('click', () => { activeCat = btn.dataset.cat; draw(); });
      });
    }

    document.getElementById('aiSearch').addEventListener('input', (e) => { query = e.target.value; draw(); });
    draw();
  }

  function renderRoadmaps(container) {
    let saved = {};
    try {
      saved = JSON.parse(localStorage.getItem(CHECKLIST_KEY) || '{}');
    } catch {
      saved = {};
    }
    container.innerHTML = `
      <div class="grid grid-2">
        ${DATA.roadmaps.map((rm) => `
          <div class="card">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
              <div class="card-title">${rm.title}</div>
              <a href="${rm.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">roadmap.sh ↗</a>
            </div>
            <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px;">
              ${rm.skills.map((skill, idx) => {
                const key = `${rm.id}_${idx}`;
                return `
                  <label class="checklist-item">
                    <input type="checkbox" data-rm-key="${key}" ${saved[key] ? 'checked' : ''} />
                    <span>${skill}</span>
                  </label>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
    container.querySelectorAll('[data-rm-key]').forEach((cb) => {
      cb.addEventListener('change', () => {
        saved[cb.dataset.rmKey] = cb.checked;
        try {
          localStorage.setItem(CHECKLIST_KEY, JSON.stringify(saved));
        } catch {}
      });
    });
  }

  function renderVideos(container) {
    container.innerHTML = `
      <div class="card" style="margin-bottom:20px;">
        <div class="card-title">Instant YouTube Subject Search</div>
        <div class="search-bar" style="max-width:100%;margin-top:8px;">
          <input id="ytQuery" class="input" placeholder="Search topic (e.g. DBMS Normalization, Python OOP, OS Deadlocks)..." />
          <button id="ytSearchBtn" type="button" class="btn btn-primary">Search YouTube</button>
        </div>
        <div class="pdf-chips" style="margin-top:14px;">
          ${DATA.videoSubjects.map((s) => `<a href="${s.url}" target="_blank" rel="noopener noreferrer" class="pdf-chip">▶ ${s.name} ↗</a>`).join('')}
        </div>
      </div>
      <h3 class="section-title" style="margin-bottom:14px;">Recommended YouTube Channels</h3>
      <div class="grid grid-3">
        ${DATA.videoChannels.map((ch) => `
          <a href="${ch.url}" target="_blank" rel="noopener noreferrer" class="card card-interactive">
            <div class="card-title">${ch.name}</div>
            <div class="card-desc">${ch.focus}</div>
            <div class="card-meta"><span>Open Channel ↗</span></div>
          </a>
        `).join('')}
      </div>
    `;
    document.getElementById('ytSearchBtn').addEventListener('click', () => {
      const q = document.getElementById('ytQuery').value.trim() || 'BCA Computer Science';
      window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`, '_blank', 'noopener');
    });
  }

  function renderPlacement(container) {
    container.innerHTML = `
      <div class="alert alert-success show" style="margin-bottom:18px;">
        Active Drives Status: No active placement drives posted right now. Use the roadmap below to prepare.
      </div>
      <div class="card" style="margin-bottom:20px;">
        <div class="card-title">6-Step Placement Preparation Roadmap</div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px;">
          ${DATA.placementSteps.map((step) => `<div class="checklist-item"><span>${step}</span></div>`).join('')}
        </div>
      </div>
      <div class="grid grid-3">
        ${DATA.careerGuides.slice(0, 3).map((g) => `
          <div class="card">
            <span class="badge" style="width:fit-content;">${g.badge}</span>
            <div class="card-title">${g.title}</div>
            <div class="card-desc">${g.desc}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  
  // =========================================================================
  // Daily 5 Placement Streak Widget
  // =========================================================================
  function renderDailyStreakWidget() {
    const container = document.getElementById('dailyStreakWidgetSection');
    if (!container) return;

    const streakKey = 'scholargrid_placement_streak';
    let streakData = { count: 0, lastDate: '' };
    try {
      streakData = JSON.parse(localStorage.getItem(streakKey) || '{"count":0,"lastDate":""}');
    } catch (e) {}

    const todayStr = new Date().toISOString().slice(0, 10);
    const isDoneToday = streakData.lastDate === todayStr;
    const count = streakData.count || 0;

    if (isDoneToday) {
      container.innerHTML = `
        <div class="card" style="padding:18px 24px; background:linear-gradient(135deg, rgba(5,150,105,0.06), rgba(79,70,229,0.06)); border:1px solid rgba(5,150,105,0.3); border-radius:18px;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
            <div style="display:flex; align-items:center; gap:16px;">
              <div style="width:48px; height:48px; border-radius:14px; background:rgba(5,150,105,0.15); display:grid; place-items:center; font-size:1.6rem;">
                🔥
              </div>
              <div>
                <div style="display:flex; align-items:center; gap:8px;">
                  <span class="badge badge-free" style="font-weight:700;">Day ${count} Placement Streak!</span>
                  <span style="font-size:0.85rem; font-weight:600; color:var(--success);">✅ Today's Challenge Completed</span>
                </div>
                <h3 style="margin:4px 0 2px; font-size:1.15rem; color:var(--text);">Daily 5 Placement Challenge</h3>
                <p style="margin:0; font-size:0.85rem; color:var(--text-muted);">
                  Awesome consistency! You solved today's placement questions. Return tomorrow to maintain your placement streak.
                </p>
              </div>
            </div>
            <div style="display:flex; gap:10px; flex-wrap:wrap;">
              <a href="resource.html#mcq-quiz" class="btn btn-outline btn-sm">↻ Practice More MCQs</a>
              <a href="resource.html#mcq-quiz" class="btn btn-primary btn-sm">⚡ Practice Placement MCQs</a>
            </div>
          </div>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="card" style="padding:18px 24px; background:linear-gradient(135deg, rgba(79,70,229,0.06), rgba(2,132,199,0.06)); border:1px solid var(--border-strong); border-radius:18px; box-shadow:var(--shadow-glow);">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
            <div style="display:flex; align-items:center; gap:16px;">
              <div style="width:48px; height:48px; border-radius:14px; background:rgba(79,70,229,0.12); display:grid; place-items:center; font-size:1.6rem;">
                ⚡
              </div>
              <div>
                <div style="display:flex; align-items:center; gap:8px;">
                  <span class="badge" style="background:rgba(234,88,12,0.12); color:#c2410c; font-weight:700; border:1px solid rgba(234,88,12,0.3);">
                    🔥 ${count > 0 ? `Day ${count} Streak!` : 'Start Day 1 Streak'}
                  </span>
                  <span style="font-size:0.82rem; color:var(--text-muted); font-weight:500;">TCS NQT &amp; Infosys Pattern</span>
                </div>
                <h3 style="margin:4px 0 2px; font-size:1.15rem; color:var(--text);">Today's "Daily 5" Placement Challenge</h3>
                <p style="margin:0; font-size:0.85rem; color:var(--text-muted);">
                  Solve 5 high-yield campus placement questions (DSA, OOPs, Code Output &amp; Aptitude) to build your placement reflex in 5 minutes.
                </p>
              </div>
            </div>
            <a href="resource.html?daily=1#mcq-quiz" class="btn btn-primary" style="padding:10px 20px; font-weight:700; display:inline-flex; align-items:center; gap:8px;">
              ⚡ Solve Today's 5 Questions →
            </a>
          </div>
        </div>
      `;
    }
  }
  window.addEventListener('scholargrid:streak-updated', renderDailyStreakWidget);

function renderCardDirectory(container, modId) {
    const map = {
      'syllabus': DATA.syllabus,
      'ebooks': DATA.ebooks,
      'certifications': DATA.certifications,
      'learning-platforms': DATA.learningPlatforms,
      'career-development': DATA.careerGuides,
      'exam-announcements': DATA.examAnnouncements,
      'notices': DATA.notices
    };
    const items = map[modId] || [];
    container.innerHTML = `
      <div class="grid grid-3">
        ${items.map((item) => {
          const tag = item.url ? 'a' : 'div';
          const attrs = item.url ? `href="${item.url}" target="_blank" rel="noopener noreferrer" class="card card-interactive"` : 'class="card"';
          return `
            <${tag} ${attrs}>
              <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
                <span class="badge" style="width:fit-content;">${item.badge || 'Resource'}</span>
                ${item.url ? renderPinButton(item.url, item.title, item.url, item.badge || modId) : ''}
              </div>
              <div class="card-title">${item.title}</div>
              <div class="card-desc">${item.desc}</div>
              ${item.url ? '<div class="card-meta"><span>Open resource ↗</span></div>' : ''}
            </${tag}>
          `;
        }).join('')}
      </div>
    `;
  }

  function mountPdfViewer() {
    if (document.getElementById('pdfViewerModal')) return;

    const modal = document.createElement('div');
    modal.id = 'pdfViewerModal';
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
      <div class="modal pdf-modal" role="dialog" aria-modal="true" aria-labelledby="pdfModalTitle">
        <div class="pdf-modal-header">
          <h3 id="pdfModalTitle" style="margin:0;font-size:1rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">Document Viewer</h3>
          <div class="pdf-modal-actions">
            <a id="pdfDownloadBtn" class="btn btn-primary btn-sm" href="#" download>⬇ Download PDF</a>
            <button id="pdfCloseBtn" type="button" class="close-btn" aria-label="Close PDF viewer">&times;</button>
          </div>
        </div>
        <div class="pdf-frame-wrap">
          <iframe id="pdfViewerFrame" class="pdf-frame" title="PDF Document Viewer" src="about:blank"></iframe>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const frame = document.getElementById('pdfViewerFrame');
    const titleEl = document.getElementById('pdfModalTitle');
    const downloadBtn = document.getElementById('pdfDownloadBtn');
    const closeBtn = document.getElementById('pdfCloseBtn');

    function openPdfModal(url, title) {
      titleEl.textContent = title || 'Document Viewer';
      downloadBtn.setAttribute('href', url);
      const filename = decodeURIComponent(url.split('/').pop().split('?')[0] || 'document.pdf');
      downloadBtn.setAttribute('download', filename);
      frame.setAttribute('src', url);
      modal.classList.add('open');
    }

    function closePdfModal() {
      modal.classList.remove('open');
      frame.setAttribute('src', 'about:blank');
    }

    closeBtn.addEventListener('click', closePdfModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closePdfModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closePdfModal();
      }
    });

    document.addEventListener('click', (e) => {
      const pinBtn = e.target.closest('.pin-btn[data-pin-id]');
      if (pinBtn) {
        e.preventDefault();
        e.stopPropagation();
        togglePin({
          id: pinBtn.dataset.pinId,
          title: pinBtn.dataset.pinTitle,
          url: pinBtn.dataset.pinUrl,
          meta: pinBtn.dataset.pinMeta
        });
        return;
      }

      const link = e.target.closest('a[href]');
      if (!link || link.hasAttribute('download')) return;
      const href = link.getAttribute('href') || '';
      const isLocalPdf = href.includes('UPLOADS_PDFS_ALL/') || /\.pdf($|\?|#)/i.test(href);
      if (!isLocalPdf) return;

      e.preventDefault();
      const card = link.closest('.card, .course-card');
      const cardTitle = card ? (card.querySelector('.card-title, .course-card-title')?.textContent?.trim()) : '';
      const linkText = link.textContent.replace(/[📄↗]/g, '').trim();
      const title = cardTitle && linkText && cardTitle !== linkText
        ? `${cardTitle} — ${linkText}`
        : (cardTitle || linkText || 'PDF Document');
      openPdfModal(href, title);
    });
  }

  window.addEventListener('hashchange', () => {
    if (document.body.dataset.page === 'resource') {
      initResourcePage();
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    mountPdfViewer();
    const page = document.body.dataset.page;
    if (page === 'home') {
      initHomePage();
    } else if (page === 'resource') {
      initResourcePage();
    }
  });
})();
