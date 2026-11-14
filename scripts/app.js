(function () {
  const DATA = window.SCHOLAR_DATA;
  const CHECKLIST_KEY = 'scholargrid_roadmap_progress';
  const SEM_FOCUS_KEY = 'scholargrid_sem_focus';
  const PINS_KEY = 'scholargrid_pins';
  const SEMESTERS = ['Sem I', 'Sem II', 'Sem III', 'Sem IV', 'Sem V', 'Sem VI'];

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
    section.style.display = '';
    section.innerHTML = `
      <div class="section-header">
        <div>
          <h2 class="section-title">★ Pinned &amp; Favorite Notes</h2>
          <p class="section-subtitle">Quick access to your bookmarked PDFs and subjects</p>
        </div>
      </div>
      <div class="pinned-grid">
        ${pins.map((p) => `
          <a href="${escHtml(p.url)}" class="card card-interactive">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
              <span class="badge badge-new">${escHtml(p.meta || 'Pinned')}</span>
              ${renderPinButton(p.id, p.title, p.url, p.meta || 'Pinned')}
            </div>
            <div class="card-title">${escHtml(p.title)}</div>
            <div class="card-meta"><span>Open resource ↗</span></div>
          </a>
        `).join('')}
      </div>
    `;
  }

  function renderSidebar(activeModuleId) {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    const isDashboard = !activeModuleId;

    sidebar.innerHTML = `
      <div class="sidebar-header">
        <a href="index.html" class="brand">
          <img src="assets/logo.jpg" alt="ScholarGrid" class="brand-logo-img" />
          <span class="brand-text-wrap">
            <span class="brand-name">${DATA.brand.name}</span>
            <span class="brand-sub">Academic Companion</span>
          </span>
        </a>
      </div>
      <nav class="sidebar-nav" aria-label="Modules">
        <div class="sidebar-section-label">Workspace</div>
        <a href="index.html" class="sidebar-link ${isDashboard ? 'active' : ''}">
          <span class="sidebar-link-icon">🏠</span>
          <span class="sidebar-link-text">Dashboard</span>
        </a>
        <div class="sidebar-section-label">All ${DATA.modules.length} Modules</div>
        ${DATA.modules.map((m) => `
          <a href="resource.html#${m.id}" class="sidebar-link ${activeModuleId === m.id ? 'active' : ''}">
            <span class="sidebar-link-icon">${m.icon}</span>
            <span class="sidebar-link-text">${m.title}</span>
          </a>
        `).join('')}
      </nav>
      <div class="sidebar-footer">
        <span>Zero Ads • Open Access</span>
        <span class="badge badge-free">${DATA.modules.length} Modules</span>
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

        slot.innerHTML = `
          <div class="user-pill-container" id="userPillContainer">
            <button type="button" id="userPillBtn" class="user-pill-btn" aria-haspopup="true" aria-expanded="false" title="Account settings & sync status">
              ${user.photoURL ? `<img class="user-avatar" src="${escHtml(user.photoURL)}" alt="Avatar" referrerpolicy="no-referrer" />` : `<div class="user-avatar-initials">${escHtml(initials)}</div>`}
              <span class="user-name">${escHtml(firstName)}</span>
              <span class="user-badge">${escHtml(sem !== 'All' ? sem : 'BCA')}</span>
              <span style="font-size:0.7rem;color:var(--text-muted);margin-left:2px;">▼</span>
            </button>
            <div class="user-dropdown-menu" id="userDropdownMenu" role="menu">
              <div class="user-dropdown-header">
                <div class="name">${escHtml(user.displayName || 'BCA Scholar')}</div>
                <div class="email">${escHtml(user.email || '')}</div>
                <div class="meta-tag">🏛️ ${escHtml(profile?.college || 'Tumkur University')}</div>
              </div>
              <button type="button" class="user-dropdown-item" id="menuEditProfileBtn">
                <span>🎯</span> Edit Profile &amp; Goals
              </button>
              <button type="button" class="user-dropdown-item" id="menuSyncNowBtn">
                <span class="sync-status-indicator"></span> Sync Status (Cloud Active)
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
    document.getElementById('helpForm').addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('helpAlert').classList.add('show');
      e.target.reset();
    });
  }

  function initHomePage() {
    renderSidebar(null);
    renderTopbar('Dashboard', false, (sem) => {
      renderRecentUploads(sem);
    });
    renderFooter();
    mountHelpWidget();
    renderPinnedSection();

    const grid = document.getElementById('modulesGrid');
    const searchInput = document.getElementById('moduleSearch');
    const noticesList = document.getElementById('noticesList');
    const uploadsList = document.getElementById('uploadsList');

    function renderModules(filter = '') {
      const q = filter.trim().toLowerCase();
      const items = DATA.modules.filter(
        (m) => m.title.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q) || m.badge.toLowerCase().includes(q)
      );
      if (!items.length) {
        grid.innerHTML = `
          <div class="card" style="grid-column:1 / -1;">
            <div class="card-title">No matching modules</div>
            <div class="card-desc">Try searching for "Notes", "SGPA", "Quiz", "AI", "Lab", or clear the filter.</div>
          </div>
        `;
        return;
      }
      const userProfile = window.ScholarFirebase?.auth?.getUserProfile();
      grid.innerHTML = items.map((m) => {
        let isRec = false;
        if (userProfile && userProfile.careerPath) {
          const cp = userProfile.careerPath.toLowerCase();
          if (m.id === 'placement-quizzes' && (cp.includes('placement') || cp.includes('core') || cp.includes('higher'))) {
            isRec = true;
          } else if (m.id === 'ats-resume' && (cp.includes('full-stack') || cp.includes('placement') || cp.includes('ai'))) {
            isRec = true;
          } else if (m.id === 'sgpa-calculator' && cp.includes('rank')) {
            isRec = true;
          }
        }
        return `
          <a href="resource.html#${m.id}" class="card card-interactive">
            ${isRec ? '<div class="recommended-badge">★ Recommended for Your Goal</div>' : ''}
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="card-icon">${m.icon}</span>
              <span class="badge">${m.badge}</span>
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
          <div class="card" style="grid-column:1 / -1;">
            <div class="card-title">No recent uploads for ${escHtml(sem)}</div>
            <div class="card-desc">Switch "My Semester" in the topbar to All Semesters or open Notes Library to browse all units.</div>
          </div>
        `;
        return;
      }

      uploadsList.innerHTML = items.map((u) => `
        <a href="${u.url}" target="_blank" rel="noopener noreferrer" class="card card-interactive">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
              <span class="badge">${u.semester}</span>
              <span class="badge badge-free">${u.tag}</span>
            </div>
            ${renderPinButton(u.url, u.title, u.url, `${u.semester} • ${u.tag}`)}
          </div>
          <div class="card-title">${u.title}</div>
          <div class="card-meta"><span>Open PDF ↗</span></div>
        </a>
      `).join('');
    }

    renderModules();
    if (searchInput) searchInput.addEventListener('input', (e) => renderModules(e.target.value));

    if (noticesList) {
      noticesList.innerHTML = DATA.noticesFeed.map((n) => `
        <a href="${n.url}" target="_blank" rel="noopener noreferrer" class="card card-interactive">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
            <span class="badge badge-new">${n.tag}</span>
            <div style="display:flex;align-items:center;gap:8px;">
              <span style="font-size:0.78rem;color:var(--text-muted);">${n.date}</span>
              ${renderPinButton(n.url, n.title, n.url, n.tag)}
            </div>
          </div>
          <div class="card-title">${n.title}</div>
          <div class="card-desc">${n.summary}</div>
          <div class="card-meta"><span>Open PDF ↗</span></div>
        </a>
      `).join('');
    }

    renderRecentUploads(getSemFocus());
  }

  function initResourcePage() {
    const params = new URLSearchParams(window.location.search);
    const hashId = window.location.hash.replace(/^#/, '');
    const moduleId = hashId || params.get('module') || 'notes';
    const mod = DATA.modules.find((m) => m.id === moduleId) || DATA.modules[0];
    document.title = `${mod.title} — ${DATA.brand.name}`;

    renderSidebar(mod.id);
    renderTopbar(`${mod.icon} ${mod.title}`, true, (sem) => {
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
        <span class="card-icon" style="width:52px;height:52px;font-size:1.5rem;">${mod.icon}</span>
        <div>
          <span class="badge">${mod.badge}</span>
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
              <a href="resource.html#placement-cell" class="btn btn-primary btn-sm">💼 Placement Cell</a>
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
            <a href="resource.html#mcq-quiz?daily=1" class="btn btn-primary" style="padding:10px 20px; font-weight:700; display:inline-flex; align-items:center; gap:8px;">
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
      const card = link.closest('.card');
      const cardTitle = card ? card.querySelector('.card-title')?.textContent?.trim() : '';
      const linkText = link.textContent.replace(/[📄↗]/g, '').trim();
      const title = cardTitle && linkText && cardTitle !== linkText
        ? `${cardTitle} — ${linkText}`
        : (cardTitle || linkText || 'PDF Document');
      openPdfModal(href, title);
    });
  }

  function initSplashScreen() {
    const splash = document.getElementById('splashScreen');
    if (!splash) return;

    // Check if splash was already dismissed in this browser session
    const shown = sessionStorage.getItem('scholargrid_splash_shown');
    if (shown) {
      splash.remove();
      return;
    }

    const dismiss = () => {
      if (!splash.parentElement) return;
      splash.classList.add('fade-out');
      sessionStorage.setItem('scholargrid_splash_shown', 'true');
      setTimeout(() => {
        if (splash.parentElement) splash.remove();
      }, 520);
    };

    // Auto dismiss after 1.8s
    const timer = setTimeout(dismiss, 1800);

    // Immediate dismiss on click or skip button
    splash.addEventListener('click', () => {
      clearTimeout(timer);
      dismiss();
    });

    const skipBtn = document.getElementById('skipSplashBtn');
    if (skipBtn) {
      skipBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        clearTimeout(timer);
        dismiss();
      });
    }
  }

  window.addEventListener('hashchange', () => {
    if (document.body.dataset.page === 'resource') {
      initResourcePage();
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    initSplashScreen();
    mountPdfViewer();
    const page = document.body.dataset.page;
    if (page === 'home') {
      initHomePage();
    } else if (page === 'resource') {
      initResourcePage();
    }
  });
})();
