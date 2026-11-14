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
      grid.innerHTML = items.map((m) => `
        <a href="resource.html#${m.id}" class="card card-interactive">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span class="card-icon">${m.icon}</span>
            <span class="badge">${m.badge}</span>
          </div>
          <div class="card-title">${m.title}</div>
          <div class="card-desc">${m.desc}</div>
          <div class="card-meta"><span>Open module →</span></div>
        </a>
      `).join('');
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
