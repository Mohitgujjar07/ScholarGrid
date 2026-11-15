(function () {
  const DATA = window.SCHOLAR_TOOLS_DATA || {};

  const SGPA_STORAGE_KEY = 'scholargrid_sgpa_v1';
  const ATTENDANCE_STORAGE_KEY = 'scholargrid_attendance_v1';
  const RESUME_STORAGE_KEY = 'scholargrid_resume_v3';

  // Crisp modern inline SVG icon system for tools (replaces raw emojis)
  const TOOL_ICONS = {
    check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;display:inline-block;"><polyline points="20 6 9 17 4 12"/></svg>',
    cross: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;display:inline-block;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    lightbulb: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;display:inline-block;"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
    download: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;display:inline-block;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    upload: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;display:inline-block;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
    print: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;display:inline-block;"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>',
    target: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;display:inline-block;"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    clock: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;display:inline-block;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    alert: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;display:inline-block;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
    refresh: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;display:inline-block;"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>',
    book: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;display:inline-block;"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>',
    star: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" style="vertical-align:-1px;display:inline-block;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    starOutline: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-1px;display:inline-block;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    zap: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;display:inline-block;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    plus: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;display:inline-block;"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'
  };

  const GRADE_SCALE = [
    { label: 'O (Outstanding — 10)', gp: 10 },
    { label: 'A+ (Excellent — 9)', gp: 9 },
    { label: 'A (Very Good — 8)', gp: 8 },
    { label: 'B+ (Good — 7)', gp: 7 },
    { label: 'B (Above Average — 6)', gp: 6 },
    { label: 'C (Average — 5)', gp: 5 },
    { label: 'P (Pass — 4)', gp: 4 },
    { label: 'F (Fail — 0)', gp: 0 }
  ];

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function loadJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function saveJson(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      if (window.ScholarFirebase && window.ScholarFirebase.auth && window.ScholarFirebase.sync) {
        const user = window.ScholarFirebase.auth.getCurrentUser();
        if (user && user.uid) {
          if (key === RESUME_STORAGE_KEY) {
            window.ScholarFirebase.sync.saveSection(user.uid, 'resume', value);
          } else if (key === ATTENDANCE_STORAGE_KEY) {
            window.ScholarFirebase.sync.saveSection(user.uid, 'attendance', value);
          } else if (key === SGPA_STORAGE_KEY) {
            window.ScholarFirebase.sync.saveSection(user.uid, 'sgpa_calculator', value);
          }
        }
      }
    } catch (e) {}
  }

  function getActiveSemesterDefault(semList) {
    try {
      const saved = localStorage.getItem('scholargrid_sem_focus');
      if (saved && semList.includes(saved)) return saved;
    } catch {}
    return semList[0] || 'Sem I';
  }

  /* ==========================================================================
     1. SGPA & CGPA Calculator
     ========================================================================== */
  function renderSgpaCalculator(container) {
    if (!container) return;
    const creditsMap = DATA.semesterCredits || {};
    const semesters = Object.keys(creditsMap);
    if (!semesters.length) {
      container.innerHTML = '<div class="card">No semester credit data found.</div>';
      return;
    }

    let state = loadJson(SGPA_STORAGE_KEY, null);
    if (!state) {
      const altState = loadJson('scholargrid_sgpa_state', null);
      state = (altState && altState.state) ? altState.state : {};
    }
    let activeSem = getActiveSemesterDefault(semesters);

    function ensureSemState(sem) {
      if (!state[sem]) state[sem] = {};
      (creditsMap[sem] || []).forEach((sub) => {
        if (!state[sem][sub.code]) {
          state[sem][sub.code] = { ia: 32, gp: 9 };
        }
      });
    }

    function computeSemStats(sem) {
      ensureSemState(sem);
      const subjects = creditsMap[sem] || [];
      let totalCredits = 0;
      let weightedPoints = 0;
      subjects.forEach((sub) => {
        const entry = state[sem][sub.code];
        const gp = Number(entry.gp) || 0;
        totalCredits += sub.credits;
        weightedPoints += sub.credits * gp;
      });
      const sgpa = totalCredits > 0 ? weightedPoints / totalCredits : 0;
      return { totalCredits, weightedPoints, sgpa };
    }

    function computeCgpa() {
      let totalCredits = 0;
      let totalPoints = 0;
      semesters.forEach((sem) => {
        if (!state[sem]) return;
        const stats = computeSemStats(sem);
        totalCredits += stats.totalCredits;
        totalPoints += stats.weightedPoints;
      });
      return {
        totalCredits,
        cgpa: totalCredits > 0 ? totalPoints / totalCredits : 0,
        semCount: Object.keys(state).filter((s) => semesters.includes(s)).length
      };
    }

    function dispatchSgpaUpdate() {
      const s = computeSemStats(activeSem);
      const c = computeCgpa();
      const payload = {
        sgpa: Number(s.sgpa.toFixed(2)),
        cgpa: Number(c.cgpa.toFixed(2)),
        activeSem,
        totalCredits: s.totalCredits,
        percentage: Number((s.sgpa * 9.5).toFixed(1)),
        state
      };
      try {
        localStorage.setItem('scholargrid_sgpa_state', JSON.stringify(payload));
      } catch (e) {}
      window.dispatchEvent(new CustomEvent('scholargrid:sgpa-updated', { detail: payload }));
    }

    function render() {
      ensureSemState(activeSem);
      saveJson(SGPA_STORAGE_KEY, state);
      dispatchSgpaUpdate();

      const subjects = creditsMap[activeSem] || [];
      const semStats = computeSemStats(activeSem);
      const cgpaStats = computeCgpa();

      container.innerHTML = `
        <div class="tabs" role="tablist" aria-label="Semesters">
          ${semesters.map((sem) => `
            <button type="button" class="tab-btn ${sem === activeSem ? 'active' : ''}" data-sem="${esc(sem)}">${esc(sem)}</button>
          `).join('')}
        </div>

        <div class="stats-row" style="margin-top:0; margin-bottom:16px;">
          <div class="stat-box">
            <div class="stat-val" id="sgpaVal">${semStats.sgpa.toFixed(2)}</div>
            <div class="stat-label">${esc(activeSem)} SGPA (${semStats.totalCredits} Credits)</div>
          </div>
          <div class="stat-box">
            <div class="stat-val" id="cgpaVal">${cgpaStats.cgpa.toFixed(2)}</div>
            <div class="stat-label">Cumulative CGPA (${cgpaStats.semCount} Sem${cgpaStats.semCount === 1 ? '' : 's'} Saved)</div>
          </div>
          <div class="stat-box">
            <div class="stat-val" id="pctVal">${(semStats.sgpa * 9.5).toFixed(1)}%</div>
            <div class="stat-label">Approx. Percentage (SGPA × 9.5)</div>
          </div>
        </div>

        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div>
              <div class="card-title">${esc(activeSem)} — Subjects, Internal Marks &amp; Theory Grade</div>
              <div class="card-desc">Adjust your IA marks (0–40) and expected/final grade per subject. Saved automatically.</div>
            </div>
            <button type="button" class="btn btn-outline btn-sm" id="sgpaResetBtn">Reset ${esc(activeSem)}</button>
          </div>

          <div style="overflow-x:auto;">
            <table class="calc-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Subject</th>
                  <th>Credits</th>
                  <th>IA Marks (0–40)</th>
                  <th>Theory Grade</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                ${subjects.map((sub) => {
                  const entry = state[activeSem][sub.code];
                  const pts = sub.credits * (Number(entry.gp) || 0);
                  return `
                    <tr>
                      <td><strong>${esc(sub.code)}</strong></td>
                      <td>${esc(sub.name)}</td>
                      <td><span class="badge">${sub.credits}</span></td>
                      <td style="min-width:110px;">
                        <input type="number" class="input sgpa-ia" data-code="${esc(sub.code)}" min="0" max="40" value="${Number(entry.ia)}" style="padding:6px 10px;" />
                      </td>
                      <td style="min-width:190px;">
                        <select class="input sgpa-grade" data-code="${esc(sub.code)}" style="padding:6px 10px;">
                          ${GRADE_SCALE.map((g) => `<option value="${g.gp}" ${Number(entry.gp) === g.gp ? 'selected' : ''}>${esc(g.label)}</option>`).join('')}
                        </select>
                      </td>
                      <td><strong class="sgpa-pts" data-code="${esc(sub.code)}">${pts}</strong></td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

      container.querySelectorAll('.tab-btn[data-sem]').forEach((btn) => {
        btn.addEventListener('click', () => {
          activeSem = btn.getAttribute('data-sem');
          render();
        });
      });

      function updateSummary() {
        saveJson(SGPA_STORAGE_KEY, state);
        const s = computeSemStats(activeSem);
        const c = computeCgpa();
        const sgpaEl = container.querySelector('#sgpaVal');
        const cgpaEl = container.querySelector('#cgpaVal');
        const pctEl = container.querySelector('#pctVal');
        if (sgpaEl) sgpaEl.textContent = s.sgpa.toFixed(2);
        if (cgpaEl) cgpaEl.textContent = c.cgpa.toFixed(2);
        if (pctEl) pctEl.textContent = (s.sgpa * 9.5).toFixed(1) + '%';
        dispatchSgpaUpdate();
      }

      container.querySelectorAll('.sgpa-ia').forEach((input) => {
        input.addEventListener('input', () => {
          const code = input.getAttribute('data-code');
          const val = Math.max(0, Math.min(40, Number(input.value) || 0));
          state[activeSem][code].ia = val;
          updateSummary();
        });
      });

      container.querySelectorAll('.sgpa-grade').forEach((sel) => {
        sel.addEventListener('change', () => {
          const code = sel.getAttribute('data-code');
          const gp = Number(sel.value) || 0;
          state[activeSem][code].gp = gp;
          const sub = subjects.find((x) => x.code === code);
          const ptsEl = container.querySelector(`.sgpa-pts[data-code="${CSS.escape(code)}"]`);
          if (ptsEl && sub) ptsEl.textContent = String(sub.credits * gp);
          updateSummary();
        });
      });

      const resetBtn = container.querySelector('#sgpaResetBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          delete state[activeSem];
          render();
        });
      }
    }

    render();
  }

  /* ==========================================================================
     2. 75% Attendance & IA Marks Tracker
     ========================================================================== */
  function renderAttendanceTracker(container) {
    if (!container) return;
    const creditsMap = DATA.semesterCredits || {};
    const semesters = Object.keys(creditsMap);
    if (!semesters.length) {
      container.innerHTML = '<div class="card">No semester subjects found.</div>';
      return;
    }

    let state = loadJson(ATTENDANCE_STORAGE_KEY, null);
    if (!state) {
      const altState = loadJson('scholargrid_attendance_data', null);
      state = (altState && altState.state) ? altState.state : {};
    }
    let activeSem = getActiveSemesterDefault(semesters);

    function ensureSem(sem) {
      if (!state[sem]) state[sem] = {};
      (creditsMap[sem] || []).forEach((sub) => {
        if (!state[sem][sub.code]) {
          state[sem][sub.code] = { attended: 18, total: 22, ia: 30 };
        }
      });
    }

    function getAttendanceGoal() {
      try {
        const raw = localStorage.getItem('scholargrid_user_profile');
        if (raw) {
          const p = JSON.parse(raw);
          if (p && p.minAttendanceGoal) return Number(p.minAttendanceGoal);
        }
      } catch {}
      return 75;
    }

    function calcStatus(attended, total) {
      const a = Math.max(0, Number(attended) || 0);
      const t = Math.max(0, Number(total) || 0);
      const goal = getAttendanceGoal();
      const ratio = goal / 100;
      if (t === 0) {
        return { pct: 100, safe: true, text: 'No classes logged yet' };
      }
      const pct = (a / t) * 100;
      if (pct >= goal) {
        const canMiss = Math.floor(a / ratio - t);
        return {
          pct,
          safe: true,
          text: canMiss > 0 ? `Safe to miss ${canMiss} class${canMiss === 1 ? '' : 'es'}` : `On the ${goal}% boundary — attend next class`
        };
      }
      const needed = Math.max(1, Math.ceil((ratio * t - a) / (1 - ratio)));
      return {
        pct,
        safe: false,
        text: `Attend next ${needed} class${needed === 1 ? '' : 'es'} for ${goal}%`
      };
    }

    function dispatchAttendance() {
      const subjects = creditsMap[activeSem] || [];
      let sumAttended = 0;
      let sumTotal = 0;
      subjects.forEach((sub) => {
        const rec = state[activeSem]?.[sub.code] || { attended: 0, total: 0 };
        sumAttended += Math.max(0, Number(rec.attended) || 0);
        sumTotal += Math.max(0, Number(rec.total) || 0);
      });
      const goal = getAttendanceGoal();
      const overall = calcStatus(sumAttended, sumTotal);
      const payload = {
        attended: sumAttended,
        total: sumTotal,
        percentage: Number(overall.pct.toFixed(1)),
        safe: overall.safe,
        text: overall.text,
        goal,
        activeSem,
        state
      };
      try {
        localStorage.setItem('scholargrid_attendance_data', JSON.stringify(payload));
      } catch (e) {}
      window.dispatchEvent(new CustomEvent('scholargrid:attendance-updated', { detail: payload }));
    }

    function render() {
      ensureSem(activeSem);
      saveJson(ATTENDANCE_STORAGE_KEY, state);
      dispatchAttendance();

      const subjects = creditsMap[activeSem] || [];
      let sumAttended = 0;
      let sumTotal = 0;
      subjects.forEach((sub) => {
        const rec = state[activeSem][sub.code];
        sumAttended += Math.max(0, Number(rec.attended) || 0);
        sumTotal += Math.max(0, Number(rec.total) || 0);
      });
      const overall = calcStatus(sumAttended, sumTotal);

      container.innerHTML = `
        <div class="tabs" role="tablist" aria-label="Semesters">
          ${semesters.map((sem) => `
            <button type="button" class="tab-btn ${sem === activeSem ? 'active' : ''}" data-sem="${esc(sem)}">${esc(sem)}</button>
          `).join('')}
        </div>

        <div class="stats-row" style="margin-top:0; margin-bottom:16px;">
          <div class="stat-box">
            <div class="stat-val">${overall.pct.toFixed(1)}%</div>
            <div class="stat-label">${esc(activeSem)} Overall Attendance (${sumAttended}/${sumTotal})</div>
          </div>
          <div class="stat-box">
            <div class="stat-val" style="font-size:1.05rem;">
              <span class="${overall.safe ? 'status-safe' : 'status-warn'}">
                ${overall.safe ? TOOL_ICONS.check : TOOL_ICONS.alert} ${esc(overall.text)}
              </span>
            </div>
            <div class="stat-label">75% Mandatory University Threshold</div>
          </div>
        </div>

        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div>
              <div class="card-title">${esc(activeSem)} — Subject Attendance &amp; IA Tracker</div>
              <div class="card-desc">Use +Present / +Absent for daily tracking or edit numbers directly. Persisted in browser storage.</div>
            </div>
            <button type="button" class="btn btn-outline btn-sm" id="attResetBtn">Reset ${esc(activeSem)}</button>
          </div>

          <div style="overflow-x:auto;">
            <table class="calc-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Attended</th>
                  <th>Total</th>
                  <th>Quick Mark</th>
                  <th>%</th>
                  <th>75% Status</th>
                  <th>IA (0–40)</th>
                </tr>
              </thead>
              <tbody>
                ${subjects.map((sub) => {
                  const rec = state[activeSem][sub.code];
                  const st = calcStatus(rec.attended, rec.total);
                  return `
                    <tr>
                      <td>
                        <strong>${esc(sub.code)}</strong><br/>
                        <span style="font-size:0.82rem; color:var(--text-muted);">${esc(sub.name)}</span>
                      </td>
                      <td style="width:86px;">
                        <input type="number" class="input att-attended" data-code="${esc(sub.code)}" min="0" value="${Number(rec.attended)}" style="padding:6px 8px;" />
                      </td>
                      <td style="width:86px;">
                        <input type="number" class="input att-total" data-code="${esc(sub.code)}" min="0" value="${Number(rec.total)}" style="padding:6px 8px;" />
                      </td>
                      <td style="white-space:nowrap;">
                        <button type="button" class="btn btn-outline btn-sm att-present" data-code="${esc(sub.code)}" title="Mark 1 class attended" style="padding:4px 9px;font-weight:700;color:var(--success);border-color:rgba(5,150,105,0.3);background:rgba(5,150,105,0.05);">+P</button>
                        <button type="button" class="btn btn-outline btn-sm att-absent" data-code="${esc(sub.code)}" title="Mark 1 class missed" style="padding:4px 9px;font-weight:700;color:var(--danger);border-color:rgba(220,38,38,0.3);background:rgba(220,38,38,0.05);">+A</button>
                      </td>
                      <td><strong>${st.pct.toFixed(1)}%</strong></td>
                      <td>
                        <span class="${st.safe ? 'status-safe' : 'status-warn'}">
                          ${st.safe ? TOOL_ICONS.check : TOOL_ICONS.alert} ${esc(st.text)}
                        </span>
                      </td>
                      <td style="width:82px;">
                        <input type="number" class="input att-ia" data-code="${esc(sub.code)}" min="0" max="40" value="${Number(rec.ia)}" style="padding:6px 8px;" />
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

      container.querySelectorAll('.tab-btn[data-sem]').forEach((btn) => {
        btn.addEventListener('click', () => {
          activeSem = btn.getAttribute('data-sem');
          render();
        });
      });

      container.querySelectorAll('.att-attended').forEach((inp) => {
        inp.addEventListener('change', () => {
          const code = inp.getAttribute('data-code');
          const att = Math.max(0, Number(inp.value) || 0);
          state[activeSem][code].attended = att;
          if (state[activeSem][code].total < att) state[activeSem][code].total = att;
          render();
        });
      });

      container.querySelectorAll('.att-total').forEach((inp) => {
        inp.addEventListener('change', () => {
          const code = inp.getAttribute('data-code');
          const tot = Math.max(0, Number(inp.value) || 0);
          state[activeSem][code].total = tot;
          if (state[activeSem][code].attended > tot) state[activeSem][code].attended = tot;
          render();
        });
      });

      container.querySelectorAll('.att-present').forEach((btn) => {
        btn.addEventListener('click', () => {
          const code = btn.getAttribute('data-code');
          state[activeSem][code].attended += 1;
          state[activeSem][code].total += 1;
          render();
        });
      });

      container.querySelectorAll('.att-absent').forEach((btn) => {
        btn.addEventListener('click', () => {
          const code = btn.getAttribute('data-code');
          state[activeSem][code].total += 1;
          render();
        });
      });

      container.querySelectorAll('.att-ia').forEach((inp) => {
        inp.addEventListener('input', () => {
          const code = inp.getAttribute('data-code');
          state[activeSem][code].ia = Math.max(0, Math.min(40, Number(inp.value) || 0));
          saveJson(ATTENDANCE_STORAGE_KEY, state);
          dispatchAttendance();
        });
      });

      const resetBtn = container.querySelector('#attResetBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          delete state[activeSem];
          render();
        });
      }
    }

    render();
  }

  /* ==========================================================================
     3. Advanced Single-Page ATS Resume Builder (Harvard / Tech Standard)
     ========================================================================== */
  function renderResumeBuilder(container) {
    if (!container) return;

    const PRESETS = window.SCHOLAR_TOOLS_DATA?.resumePresets || {};
    let resume = loadJson(RESUME_STORAGE_KEY, null);
    let userProfile = null;
    try {
      const rawProf = localStorage.getItem('scholargrid_user_profile');
      if (rawProf) userProfile = JSON.parse(rawProf);
    } catch {}

    if (!resume) {
      let chosenPreset = 'fullstack';
      if (userProfile && userProfile.careerPath) {
        const cp = userProfile.careerPath.toLowerCase();
        if (cp.includes('ai') || cp.includes('python') || cp.includes('data')) {
          chosenPreset = 'python_ai';
        } else if (cp.includes('placement') || cp.includes('core') || cp.includes('higher') || cp.includes('rank')) {
          chosenPreset = 'core_fresher';
        }
      }
      resume = JSON.parse(JSON.stringify(PRESETS[chosenPreset] || PRESETS.fullstack || {}));
    }

    // Auto-populate user contact & education if present in profile and resume fields are default
    if (userProfile) {
      if ((!resume.fullName || resume.fullName === 'YOUR NAME' || resume.fullName === 'Mohit Gujjar') && (userProfile.fullName || userProfile.displayName)) {
        resume.fullName = userProfile.fullName || userProfile.displayName;
      }
      if (!resume.email && userProfile.email) {
        resume.email = userProfile.email;
      }
      if (userProfile.phone && (!resume.phone || resume.phone.startsWith('+91 98765'))) {
        resume.phone = userProfile.phone;
      }
      if (userProfile.linkedin && (!resume.linkedin || resume.linkedin.includes('username'))) {
        resume.linkedin = userProfile.linkedin;
      }
      if (userProfile.github && (!resume.github || resume.github.includes('username'))) {
        resume.github = userProfile.github;
      }
      if (userProfile.college && resume.education && resume.education[0]) {
        if (!resume.education[0].institution || resume.education[0].institution === 'University Name' || resume.education[0].institution === 'Tumkur University') {
          resume.education[0].institution = userProfile.college;
        }
        if (userProfile.graduationYear && (!resume.education[0].year || resume.education[0].year.includes('2026'))) {
          const startYr = Math.max(2020, Number(userProfile.graduationYear) - 3);
          resume.education[0].year = `${startYr} – ${userProfile.graduationYear}`;
        }
      }
    }

    // Ensure array structures
    if (!Array.isArray(resume.education)) resume.education = [];
    if (!Array.isArray(resume.projects)) resume.projects = [];
    if (!Array.isArray(resume.experience)) resume.experience = [];
    if (!Array.isArray(resume.certifications)) {
      if (typeof resume.certifications === 'string') {
        resume.certifications = resume.certifications.split('\n').filter(Boolean);
      } else {
        resume.certifications = [];
      }
    }
    if (!resume.skills || typeof resume.skills !== 'object') {
      resume.skills = { languages: '', frameworks: '', databases: '', tools: '', concepts: '' };
    }

    function computeAtsScore() {
      let score = 0;
      const tips = [];

      // Contact info
      if (resume.fullName && resume.fullName.trim().length >= 2) score += 10;
      else tips.push('Add your full name');

      if (resume.email && resume.email.includes('@')) score += 10;
      else tips.push('Add a valid professional email');

      if (resume.phone && resume.phone.trim().length >= 8) score += 10;
      else tips.push('Add a phone number');

      if (resume.linkedin || resume.github) score += 10;
      else tips.push('Add LinkedIn or GitHub profile link');

      // Summary
      const summaryWords = (resume.summary || '').trim().split(/\s+/).filter(Boolean).length;
      if (summaryWords >= 20 && summaryWords <= 85) {
        score += 15;
      } else if (summaryWords > 0) {
        score += 8;
        tips.push('Keep professional summary between 30–80 words');
      } else {
        tips.push('Add a concise 2–3 sentence professional summary');
      }

      // Education
      if (resume.education.length > 0 && resume.education[0].degree) score += 10;
      else tips.push('Add education details with degree and institution');

      // Skills
      const hasSkills = Object.values(resume.skills || {}).some(s => (s || '').trim().length > 3);
      if (hasSkills) score += 10;
      else tips.push('Categorize your core technical skills');

      // Projects
      if (resume.projects.length >= 2) {
        score += 15;
      } else if (resume.projects.length === 1) {
        score += 8;
        tips.push('Include at least 2 technical projects with tech stacks');
      } else {
        tips.push('Add your academic or personal programming projects');
      }

      // Action verbs check
      const allBullets = [
        ...resume.projects.flatMap(p => p.bullets || []),
        ...resume.experience.flatMap(e => e.bullets || [])
      ].join(' ');

      const actionVerbs = /\b(Built|Developed|Architected|Engineered|Designed|Implemented|Created|Optimized|Automated|Integrated|Deployed|Formulated|Spearheaded|Refactored)\b/i;
      if (actionVerbs.test(allBullets)) {
        score += 5;
      } else {
        tips.push('Start project & experience bullets with strong action verbs (Built, Engineered, Developed)');
      }

      // Quantified metrics
      const metrics = /[0-9]+%|[0-9]+\+?|\$[0-9]+|[0-9]+\s*(ms|sec|users|queries|records)/i;
      if (metrics.test(allBullets)) {
        score += 5;
      } else {
        tips.push('Quantify accomplishments with numbers, percentages, or metrics (e.g. 35% faster, 2,000+ users)');
      }

      return { score: Math.min(score, 100), tips };
    }

    function cleanUrl(u) {
      if (!u) return '#';
      if (/^https?:\/\//i.test(u)) return u;
      return 'https://' + u;
    }

    function renderPreviewHtml() {
      const r = resume;
      const contacts = [
        r.location ? `<span>${esc(r.location)}</span>` : '',
        r.phone ? `<span>${esc(r.phone)}</span>` : '',
        r.email ? `<a href="mailto:${esc(r.email)}" class="rp-link">${esc(r.email)}</a>` : '',
        r.linkedin ? `<a href="${cleanUrl(r.linkedin)}" target="_blank" rel="noopener" class="rp-link">${esc(r.linkedin)}</a>` : '',
        r.github ? `<a href="${cleanUrl(r.github)}" target="_blank" rel="noopener" class="rp-link">${esc(r.github)}</a>` : '',
        r.portfolio ? `<a href="${cleanUrl(r.portfolio)}" target="_blank" rel="noopener" class="rp-link">${esc(r.portfolio)}</a>` : ''
      ].filter(Boolean);

      return `
        <div class="resume-paper" id="resumePaper">
          <!-- Header -->
          <header class="rp-header">
            <h1 class="rp-name">${esc(r.fullName || 'YOUR NAME')}</h1>
            ${r.title ? `<div class="rp-title">${esc(r.title)}</div>` : ''}
            <div class="rp-contact">${contacts.join(' <span class="rp-sep">•</span> ')}</div>
          </header>

          <!-- Summary -->
          ${r.summary ? `
            <section class="rp-section">
              <h2 class="rp-section-title">PROFESSIONAL SUMMARY</h2>
              <p class="rp-summary-text">${esc(r.summary)}</p>
            </section>
          ` : ''}

          <!-- Education -->
          ${r.education && r.education.length ? `
            <section class="rp-section">
              <h2 class="rp-section-title">EDUCATION</h2>
              ${r.education.map(edu => `
                <div class="rp-item">
                  <div class="rp-item-row">
                    <span class="rp-bold">${esc(edu.institution || 'University Name')}</span>
                    <span class="rp-right">${esc(edu.location || '')}</span>
                  </div>
                  <div class="rp-item-row">
                    <span class="rp-sub">${esc(edu.degree || 'Degree')}${edu.score ? ` — <strong>${esc(edu.score)}</strong>` : ''}</span>
                    <span class="rp-right">${esc(edu.year || '')}</span>
                  </div>
                  ${edu.coursework ? `<div class="rp-coursework"><strong>Relevant Coursework:</strong> ${esc(edu.coursework)}</div>` : ''}
                </div>
              `).join('')}
            </section>
          ` : ''}

          <!-- Technical Skills -->
          <section class="rp-section">
            <h2 class="rp-section-title">TECHNICAL SKILLS</h2>
            <div class="rp-skills-table">
              ${r.skills?.languages ? `<div class="rp-skill-line"><strong>Languages:</strong> ${esc(r.skills.languages)}</div>` : ''}
              ${r.skills?.frameworks ? `<div class="rp-skill-line"><strong>Frameworks &amp; Libraries:</strong> ${esc(r.skills.frameworks)}</div>` : ''}
              ${r.skills?.databases ? `<div class="rp-skill-line"><strong>Databases &amp; Cloud:</strong> ${esc(r.skills.databases)}</div>` : ''}
              ${r.skills?.tools ? `<div class="rp-skill-line"><strong>Developer Tools:</strong> ${esc(r.skills.tools)}</div>` : ''}
              ${r.skills?.concepts ? `<div class="rp-skill-line"><strong>Core Concepts:</strong> ${esc(r.skills.concepts)}</div>` : ''}
            </div>
          </section>

          <!-- Projects -->
          ${r.projects && r.projects.length ? `
            <section class="rp-section">
              <h2 class="rp-section-title">TECHNICAL PROJECTS</h2>
              ${r.projects.map(proj => `
                <div class="rp-item">
                  <div class="rp-item-row">
                    <span>
                      <strong class="rp-bold">${esc(proj.name || 'Project Name')}</strong>
                      ${proj.tech ? ` | <span class="rp-italic">${esc(proj.tech)}</span>` : ''}
                    </span>
                    ${proj.link ? `<span class="rp-right"><a href="${cleanUrl(proj.link)}" target="_blank" rel="noopener" class="rp-link">${esc(proj.link)}</a></span>` : ''}
                  </div>
                  <ul class="rp-bullets">
                    ${(proj.bullets || []).filter(b => b.trim()).map(b => `<li>${esc(b)}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </section>
          ` : ''}

          <!-- Experience -->
          ${r.experience && r.experience.length ? `
            <section class="rp-section">
              <h2 class="rp-section-title">EXPERIENCE &amp; INTERNSHIPS</h2>
              ${r.experience.map(exp => `
                <div class="rp-item">
                  <div class="rp-item-row">
                    <span>
                      <strong class="rp-bold">${esc(exp.role || 'Role')}</strong>
                      ${exp.company ? ` | <span class="rp-italic">${esc(exp.company)}</span>` : ''}
                    </span>
                    <span class="rp-right">${esc(exp.period || '')}</span>
                  </div>
                  ${exp.location ? `<div class="rp-item-sub"><span class="rp-muted">${esc(exp.location)}</span></div>` : ''}
                  <ul class="rp-bullets">
                    ${(exp.bullets || []).filter(b => b.trim()).map(b => `<li>${esc(b)}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </section>
          ` : ''}

          <!-- Certifications -->
          ${r.certifications && r.certifications.length ? `
            <section class="rp-section">
              <h2 class="rp-section-title">CERTIFICATIONS &amp; ACHIEVEMENTS</h2>
              <ul class="rp-bullets">
                ${r.certifications.filter(c => c.trim()).map(c => `<li>${esc(c)}</li>`).join('')}
              </ul>
            </section>
          ` : ''}
        </div>
      `;
    }

    function updateLivePreview() {
      saveJson(RESUME_STORAGE_KEY, resume);
      const previewWrap = container.querySelector('#resumePaperWrap');
      if (previewWrap) {
        previewWrap.innerHTML = renderPreviewHtml();
      }
      updateScoreGauge();
    }

    function updateScoreGauge() {
      const { score, tips } = computeAtsScore();
      const scoreVal = container.querySelector('#atsScoreVal');
      const scoreBar = container.querySelector('#atsScoreBar');
      const scoreTips = container.querySelector('#atsScoreTips');

      if (scoreVal) scoreVal.textContent = `${score}%`;
      if (scoreBar) {
        scoreBar.style.width = `${score}%`;
        scoreBar.style.backgroundColor = score >= 85 ? '#10b981' : score >= 65 ? '#f59e0b' : '#ef4444';
      }
      if (scoreTips) {
        if (tips.length === 0) {
          scoreTips.innerHTML = `<span class="status-safe">${TOOL_ICONS.check} Outstanding! Your resume meets all top ATS guidelines.</span>`;
        } else {
          scoreTips.innerHTML = `<span class="status-warn">${TOOL_ICONS.lightbulb} <strong>ATS Tip:</strong> ${esc(tips[0])}</span>`;
        }
      }
    }

    function render() {
      const { score } = computeAtsScore();

      container.innerHTML = `
        <div class="resume-toolbar-wrap no-print">
          <div class="resume-toolbar">
            <div class="resume-toolbar-left">
              <label style="font-weight:600;font-size:0.85rem;color:var(--text-muted);">Template Preset:</label>
              <select id="resumePresetSelect" class="input" style="width:auto;padding:6px 12px;font-size:0.85rem;">
                <option value="fullstack">Full Stack Web Developer</option>
                <option value="python_ai">Python &amp; AI / Data Analyst</option>
                <option value="core_fresher">Core Software Engineer Fresher</option>
                <option value="blank">Blank Slate</option>
              </select>
            </div>
            <div class="resume-toolbar-actions">
              <button id="resumeExportJsonBtn" class="btn btn-outline btn-sm" type="button" title="Download your resume data as JSON" style="display:inline-flex;align-items:center;gap:5px;">
                ${TOOL_ICONS.download} Export JSON
              </button>
              <button id="resumeImportJsonBtn" class="btn btn-outline btn-sm" type="button" title="Load resume data from JSON" style="display:inline-flex;align-items:center;gap:5px;">
                ${TOOL_ICONS.upload} Import JSON
              </button>
              <input type="file" id="resumeFileInput" accept=".json" style="display:none;" />
              <button id="resumePrintBtn" class="btn btn-primary btn-sm" type="button" title="Print or save as 1-page PDF" style="display:inline-flex;align-items:center;gap:5px;">
                ${TOOL_ICONS.print} Print / Save PDF
              </button>
            </div>
          </div>
        </div>

        <div class="resume-builder">
          <!-- LEFT PANE: INTERACTIVE ATS FORM -->
          <div class="resume-form-pane no-print">
            <!-- ATS Score Card -->
            <div class="card ats-score-card">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <div>
                  <strong style="font-size:0.95rem;">ATS Optimization Score</strong>
                  <div style="font-size:0.78rem;color:var(--text-muted);">Tested against standard ATS scanner algorithms</div>
                </div>
                <span id="atsScoreVal" class="stat-val" style="font-size:1.3rem;">${score}%</span>
              </div>
              <div class="ats-meter-track">
                <div id="atsScoreBar" class="ats-meter-fill" style="width:${score}%;background-color:${score>=85?'#10b981':score>=65?'#f59e0b':'#ef4444'};"></div>
              </div>
              <div id="atsScoreTips" style="margin-top:8px;font-size:0.8rem;"></div>
            </div>

            <!-- Section 1: Contact Information -->
            <div class="card resume-section-card">
              <div class="resume-section-header">
                <h3>1. Personal &amp; Contact Details</h3>
              </div>
              <div class="grid grid-2" style="gap:10px;">
                <div class="form-group" style="margin-bottom:8px;">
                  <label>Full Name</label>
                  <input class="input rf-input" data-path="fullName" value="${esc(resume.fullName || '')}" placeholder="Mohit Gujjar" />
                </div>
                <div class="form-group" style="margin-bottom:8px;">
                  <label>Professional Title</label>
                  <input class="input rf-input" data-path="title" value="${esc(resume.title || '')}" placeholder="Full Stack Developer | BCA" />
                </div>
                <div class="form-group" style="margin-bottom:8px;">
                  <label>Email Address</label>
                  <input class="input rf-input" data-path="email" value="${esc(resume.email || '')}" placeholder="name@gmail.com" />
                </div>
                <div class="form-group" style="margin-bottom:8px;">
                  <label>Phone Number</label>
                  <input class="input rf-input" data-path="phone" value="${esc(resume.phone || '')}" placeholder="+91 98765 43210" />
                </div>
                <div class="form-group" style="margin-bottom:8px;">
                  <label>Location</label>
                  <input class="input rf-input" data-path="location" value="${esc(resume.location || '')}" placeholder="Bengaluru, India" />
                </div>
                <div class="form-group" style="margin-bottom:8px;">
                  <label>LinkedIn Profile</label>
                  <input class="input rf-input" data-path="linkedin" value="${esc(resume.linkedin || '')}" placeholder="linkedin.com/in/username" />
                </div>
                <div class="form-group" style="margin-bottom:8px;">
                  <label>GitHub Profile</label>
                  <input class="input rf-input" data-path="github" value="${esc(resume.github || '')}" placeholder="github.com/username" />
                </div>
                <div class="form-group" style="margin-bottom:8px;">
                  <label>Portfolio / Website</label>
                  <input class="input rf-input" data-path="portfolio" value="${esc(resume.portfolio || '')}" placeholder="myportfolio.dev" />
                </div>
              </div>
            </div>

            <!-- Section 2: Summary -->
            <div class="card resume-section-card">
              <div class="resume-section-header">
                <h3>2. Professional Summary</h3>
                <span style="font-size:0.75rem;color:var(--text-muted);">2–3 sentences, 40–80 words</span>
              </div>
              <textarea class="input rf-input" data-path="summary" rows="3" placeholder="Brief summary showcasing your degree, core skills, and engineering passions...">${esc(resume.summary || '')}</textarea>
            </div>

            <!-- Section 3: Education -->
            <div class="card resume-section-card">
              <div class="resume-section-header">
                <h3>3. Education</h3>
                <button type="button" id="addEduBtn" class="btn btn-outline btn-sm" style="display:inline-flex;align-items:center;gap:4px;">${TOOL_ICONS.plus} Add Education</button>
              </div>
              <div id="eduList">
                ${(resume.education || []).map((edu, idx) => `
                  <div class="resume-entry-card" data-edu-idx="${idx}">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                      <strong style="font-size:0.85rem;">Degree #${idx + 1}</strong>
                      <button type="button" class="btn btn-ghost btn-sm remove-edu-btn" data-idx="${idx}" style="color:var(--danger);padding:2px 8px;display:inline-flex;align-items:center;gap:4px;">${TOOL_ICONS.cross} Remove</button>
                    </div>
                    <div class="grid grid-2" style="gap:8px;">
                      <input class="input rf-edu-input" data-idx="${idx}" data-field="degree" value="${esc(edu.degree || '')}" placeholder="Degree (e.g. Bachelor of Computer Applications)" />
                      <input class="input rf-edu-input" data-idx="${idx}" data-field="institution" value="${esc(edu.institution || '')}" placeholder="College / University" />
                      <input class="input rf-edu-input" data-idx="${idx}" data-field="year" value="${esc(edu.year || '')}" placeholder="Year (e.g. 2023 – 2026)" />
                      <input class="input rf-edu-input" data-idx="${idx}" data-field="score" value="${esc(edu.score || '')}" placeholder="CGPA / Marks (e.g. CGPA: 8.9 / 10.0)" />
                      <input class="input rf-edu-input" data-idx="${idx}" data-field="location" value="${esc(edu.location || '')}" placeholder="Location (e.g. Tumakuru, India)" style="grid-column: span 2;" />
                      <input class="input rf-edu-input" data-idx="${idx}" data-field="coursework" value="${esc(edu.coursework || '')}" placeholder="Relevant Coursework (e.g. Data Structures, DBMS, OS, Networks)" style="grid-column: span 2;" />
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Section 4: Technical Skills -->
            <div class="card resume-section-card">
              <div class="resume-section-header">
                <h3>4. Categorized Technical Skills</h3>
              </div>
              <div style="display:flex;flex-direction:column;gap:8px;">
                <div class="form-group" style="margin-bottom:4px;">
                  <label>Programming Languages</label>
                  <input class="input rf-skill-input" data-field="languages" value="${esc(resume.skills?.languages || '')}" placeholder="Java, Python, C++, JavaScript, TypeScript, SQL" />
                </div>
                <div class="form-group" style="margin-bottom:4px;">
                  <label>Frameworks &amp; Libraries</label>
                  <input class="input rf-skill-input" data-field="frameworks" value="${esc(resume.skills?.frameworks || '')}" placeholder="React.js, Node.js, Express.js, Next.js, Tailwind CSS" />
                </div>
                <div class="form-group" style="margin-bottom:4px;">
                  <label>Databases &amp; Cloud</label>
                  <input class="input rf-skill-input" data-field="databases" value="${esc(resume.skills?.databases || '')}" placeholder="PostgreSQL, MongoDB, MySQL, Firebase, AWS S3" />
                </div>
                <div class="form-group" style="margin-bottom:4px;">
                  <label>Developer Tools</label>
                  <input class="input rf-skill-input" data-field="tools" value="${esc(resume.skills?.tools || '')}" placeholder="Git, GitHub, Docker, Postman, Linux Command Line, VS Code" />
                </div>
                <div class="form-group" style="margin-bottom:4px;">
                  <label>Core CS Concepts</label>
                  <input class="input rf-skill-input" data-field="concepts" value="${esc(resume.skills?.concepts || '')}" placeholder="Data Structures, Algorithms, OOP, REST APIs, Agile" />
                </div>
              </div>
            </div>

            <!-- Section 5: Technical Projects -->
            <div class="card resume-section-card">
              <div class="resume-section-header">
                <h3>5. Technical Projects</h3>
                <button type="button" id="addProjBtn" class="btn btn-outline btn-sm" style="display:inline-flex;align-items:center;gap:4px;">${TOOL_ICONS.plus} Add Project</button>
              </div>
              <div id="projList">
                ${(resume.projects || []).map((proj, idx) => `
                  <div class="resume-entry-card" data-proj-idx="${idx}">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                      <strong style="font-size:0.85rem;">Project #${idx + 1}</strong>
                      <button type="button" class="btn btn-ghost btn-sm remove-proj-btn" data-idx="${idx}" style="color:var(--danger);padding:2px 8px;display:inline-flex;align-items:center;gap:4px;">${TOOL_ICONS.cross} Remove</button>
                    </div>
                    <div class="grid grid-2" style="gap:8px;margin-bottom:8px;">
                      <input class="input rf-proj-input" data-idx="${idx}" data-field="name" value="${esc(proj.name || '')}" placeholder="Project Title" />
                      <input class="input rf-proj-input" data-idx="${idx}" data-field="link" value="${esc(proj.link || '')}" placeholder="GitHub / Live Link" />
                      <input class="input rf-proj-input" data-idx="${idx}" data-field="tech" value="${esc(proj.tech || '')}" placeholder="Tech Stack (e.g. React, Node.js, PostgreSQL)" style="grid-column:span 2;" />
                    </div>
                    <label style="font-size:0.75rem;color:var(--text-muted);display:block;margin-bottom:4px;">Bullet Points (Action Verb + Tech + Metric)</label>
                    <textarea class="input rf-proj-bullets" data-idx="${idx}" rows="3" placeholder="• Architected full-stack portal handling 1,000+ student queries&#10;• Reduced latency by 35% with caching">${(proj.bullets || []).join('\n')}</textarea>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Section 6: Experience -->
            <div class="card resume-section-card">
              <div class="resume-section-header">
                <h3>6. Experience &amp; Internships</h3>
                <button type="button" id="addExpBtn" class="btn btn-outline btn-sm" style="display:inline-flex;align-items:center;gap:4px;">${TOOL_ICONS.plus} Add Experience</button>
              </div>
              <div id="expList">
                ${(resume.experience || []).map((exp, idx) => `
                  <div class="resume-entry-card" data-exp-idx="${idx}">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                      <strong style="font-size:0.85rem;">Role #${idx + 1}</strong>
                      <button type="button" class="btn btn-ghost btn-sm remove-exp-btn" data-idx="${idx}" style="color:var(--danger);padding:2px 8px;display:inline-flex;align-items:center;gap:4px;">${TOOL_ICONS.cross} Remove</button>
                    </div>
                    <div class="grid grid-2" style="gap:8px;margin-bottom:8px;">
                      <input class="input rf-exp-input" data-idx="${idx}" data-field="role" value="${esc(exp.role || '')}" placeholder="Role / Title" />
                      <input class="input rf-exp-input" data-idx="${idx}" data-field="company" value="${esc(exp.company || '')}" placeholder="Company / Organization" />
                      <input class="input rf-exp-input" data-idx="${idx}" data-field="period" value="${esc(exp.period || '')}" placeholder="Dates (e.g. Jun 2025 – Aug 2025)" />
                      <input class="input rf-exp-input" data-idx="${idx}" data-field="location" value="${esc(exp.location || '')}" placeholder="Location (e.g. Bengaluru, India)" />
                    </div>
                    <textarea class="input rf-exp-bullets" data-idx="${idx}" rows="2" placeholder="• Developed 10+ reusable components accelerating delivery by 20%">${(exp.bullets || []).join('\n')}</textarea>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Section 7: Certifications -->
            <div class="card resume-section-card">
              <div class="resume-section-header">
                <h3>7. Certifications &amp; Achievements</h3>
                <span style="font-size:0.75rem;color:var(--text-muted);">One per line</span>
              </div>
              <textarea id="rfCerts" class="input" rows="3" placeholder="Meta Front-End Developer — Coursera&#10;AWS Certified Cloud Practitioner&#10;Harvard CS50x Certificate">${(resume.certifications || []).join('\n')}</textarea>
            </div>
          </div>

          <!-- RIGHT PANE: LIVE ATS PREVIEW PAPER (1-PAGE A4 STANDARD) -->
          <div class="resume-preview-pane">
            <div class="resume-preview-header no-print">
              <div>
                <strong style="font-size:0.9rem;">Live ATS Resume Preview</strong>
                <span class="badge badge-free" style="margin-left:6px;">1-Page Harvard Format</span>
              </div>
              <button class="btn btn-primary btn-sm" onclick="window.print()" type="button" style="display:inline-flex;align-items:center;gap:5px;">
                ${TOOL_ICONS.print} Print / Save PDF
              </button>
            </div>
            <div id="resumePaperWrap">
              ${renderPreviewHtml()}
            </div>
          </div>
        </div>
      `;

      updateScoreGauge();
      bindEvents();
    }

    function bindEvents() {
      container.querySelectorAll('.rf-input').forEach(input => {
        input.addEventListener('input', (e) => {
          const path = e.target.dataset.path;
          resume[path] = e.target.value;
          updateLivePreview();
        });
      });

      container.querySelectorAll('.rf-edu-input').forEach(input => {
        input.addEventListener('input', (e) => {
          const idx = parseInt(e.target.dataset.idx, 10);
          const field = e.target.dataset.field;
          if (resume.education[idx]) {
            resume.education[idx][field] = e.target.value;
            updateLivePreview();
          }
        });
      });

      container.querySelectorAll('.rf-skill-input').forEach(input => {
        input.addEventListener('input', (e) => {
          const field = e.target.dataset.field;
          resume.skills[field] = e.target.value;
          updateLivePreview();
        });
      });

      container.querySelectorAll('.rf-proj-input').forEach(input => {
        input.addEventListener('input', (e) => {
          const idx = parseInt(e.target.dataset.idx, 10);
          const field = e.target.dataset.field;
          if (resume.projects[idx]) {
            resume.projects[idx][field] = e.target.value;
            updateLivePreview();
          }
        });
      });

      container.querySelectorAll('.rf-proj-bullets').forEach(input => {
        input.addEventListener('input', (e) => {
          const idx = parseInt(e.target.dataset.idx, 10);
          if (resume.projects[idx]) {
            resume.projects[idx].bullets = e.target.value.split('\n');
            updateLivePreview();
          }
        });
      });

      container.querySelectorAll('.rf-exp-input').forEach(input => {
        input.addEventListener('input', (e) => {
          const idx = parseInt(e.target.dataset.idx, 10);
          const field = e.target.dataset.field;
          if (resume.experience[idx]) {
            resume.experience[idx][field] = e.target.value;
            updateLivePreview();
          }
        });
      });

      container.querySelectorAll('.rf-exp-bullets').forEach(input => {
        input.addEventListener('input', (e) => {
          const idx = parseInt(e.target.dataset.idx, 10);
          if (resume.experience[idx]) {
            resume.experience[idx].bullets = e.target.value.split('\n');
            updateLivePreview();
          }
        });
      });

      const certsInput = container.querySelector('#rfCerts');
      if (certsInput) {
        certsInput.addEventListener('input', (e) => {
          resume.certifications = e.target.value.split('\n').filter(Boolean);
          updateLivePreview();
        });
      }

      const addEduBtn = container.querySelector('#addEduBtn');
      if (addEduBtn) {
        addEduBtn.addEventListener('click', () => {
          resume.education.push({ degree: '', institution: '', year: '', score: '', location: '', coursework: '' });
          saveJson(RESUME_STORAGE_KEY, resume);
          render();
        });
      }

      container.querySelectorAll('.remove-edu-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(e.target.closest('button').dataset.idx, 10);
          resume.education.splice(idx, 1);
          saveJson(RESUME_STORAGE_KEY, resume);
          render();
        });
      });

      const addProjBtn = container.querySelector('#addProjBtn');
      if (addProjBtn) {
        addProjBtn.addEventListener('click', () => {
          resume.projects.push({ name: '', tech: '', link: '', bullets: [''] });
          saveJson(RESUME_STORAGE_KEY, resume);
          render();
        });
      }

      container.querySelectorAll('.remove-proj-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(e.target.closest('button').dataset.idx, 10);
          resume.projects.splice(idx, 1);
          saveJson(RESUME_STORAGE_KEY, resume);
          render();
        });
      });

      const addExpBtn = container.querySelector('#addExpBtn');
      if (addExpBtn) {
        addExpBtn.addEventListener('click', () => {
          resume.experience.push({ role: '', company: '', period: '', location: '', bullets: [''] });
          saveJson(RESUME_STORAGE_KEY, resume);
          render();
        });
      }

      container.querySelectorAll('.remove-exp-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(e.target.closest('button').dataset.idx, 10);
          resume.experience.splice(idx, 1);
          saveJson(RESUME_STORAGE_KEY, resume);
          render();
        });
      });

      const presetSelect = container.querySelector('#resumePresetSelect');
      if (presetSelect) {
        presetSelect.addEventListener('change', (e) => {
          const key = e.target.value;
          if (PRESETS[key]) {
            resume = JSON.parse(JSON.stringify(PRESETS[key]));
            saveJson(RESUME_STORAGE_KEY, resume);
            render();
          }
        });
      }

      const printBtn = container.querySelector('#resumePrintBtn');
      if (printBtn) {
        printBtn.addEventListener('click', () => window.print());
      }

      const exportBtn = container.querySelector('#resumeExportJsonBtn');
      if (exportBtn) {
        exportBtn.addEventListener('click', () => {
          const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(resume, null, 2));
          const dlAnchor = document.createElement('a');
          dlAnchor.setAttribute('href', dataStr);
          dlAnchor.setAttribute('download', `${(resume.fullName || 'ScholarGrid_Resume').replace(/\s+/g, '_')}_ATS_Resume.json`);
          dlAnchor.click();
        });
      }

      const importBtn = container.querySelector('#resumeImportJsonBtn');
      const fileInput = container.querySelector('#resumeFileInput');
      if (importBtn && fileInput) {
        importBtn.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => {
          const file = e.target.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = (evt) => {
            try {
              const loaded = JSON.parse(evt.target.result);
              resume = loaded;
              saveJson(RESUME_STORAGE_KEY, resume);
              render();
            } catch (err) {
              alert('Invalid resume JSON file: ' + err.message);
            }
          };
          reader.readAsText(file);
        });
      }
    }

    render();
  }

  /* ==========================================================================
     4. Campus Placement MCQ Practice & Timed Mock Exam
     ========================================================================== */
  function renderMcqQuiz(container) {
    if (!container) return;
    const bank = DATA.mcqBank || {};

    const allCatKeys = Object.keys(bank);
    const hiddenAliases = new Set(['DBMS', 'OS', 'CN', 'Aptitude']);
    const primaryCategories = allCatKeys.filter(c => !hiddenAliases.has(c));
    const categories = ['Daily 5 Challenge', ...primaryCategories];

    if (!primaryCategories.length) {
      container.innerHTML = '<div class="card">No MCQ questions available.</div>';
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const hash = window.location.hash || '';
    let initialCat = categories[1] || primaryCategories[0];
    if (hash.includes('daily=1') || urlParams.get('daily') === '1') {
      initialCat = 'Daily 5 Challenge';
    }

    let activeCat = initialCat;
    let mode = 'practice'; // 'practice' or 'mock'
    let negativeMarking = true;
    let currentQ = 0;
    let answers = {};
    let reviewFlags = new Set();
    let visited = new Set([0]);
    let submitted = false;
    let showingReview = false;
    let isRetakeOnly = false;
    let retakeQuestions = null;
    let timerId = null;
    let totalSeconds = 900;
    let secondsLeft = 900;
    let startTime = Date.now();

    function getDaily5Questions() {
      const todayStr = new Date().toISOString().slice(0, 10);
      try {
        const cached = localStorage.getItem('scholargrid_daily_5_' + todayStr);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length >= 5) return parsed;
        }
      } catch (e) {}

      const pool = [];
      const domainKeys = [
        'DSA: Data Structures & Algorithms',
        'OOPs & Java / C++',
        'Code Output & Pseudo-Code',
        'DBMS & SQL',
        'Quantitative Aptitude'
      ];
      domainKeys.forEach(dk => {
        const list = bank[dk] || [];
        if (list.length) {
          const picked = list[Math.floor(Math.random() * list.length)];
          pool.push({ ...picked, topic: dk.split(':')[0] });
        }
      });
      while (pool.length < 5) {
        const anyKey = primaryCategories[Math.floor(Math.random() * primaryCategories.length)];
        const list = bank[anyKey] || [];
        if (list.length) {
          pool.push({ ...list[Math.floor(Math.random() * list.length)], topic: anyKey.split(':')[0] });
        }
      }
      try {
        localStorage.setItem('scholargrid_daily_5_' + todayStr, JSON.stringify(pool));
      } catch (e) {}
      return pool;
    }

    function getActiveQuestions() {
      if (isRetakeOnly && retakeQuestions && retakeQuestions.length) {
        return retakeQuestions;
      }
      if (activeCat === 'Daily 5 Challenge' || activeCat.includes('Daily 5')) {
        return getDaily5Questions();
      }
      return bank[activeCat] || [];
    }

    function stopTimer() {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
    }

    function formatTime(sec) {
      const s = Math.max(0, Math.floor(sec));
      const m = Math.floor(s / 60);
      const rem = s % 60;
      return `${String(m).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
    }

    function startTimer() {
      stopTimer();
      if (mode !== 'mock') return;
      timerId = setInterval(() => {
        if (!document.body.contains(container)) {
          stopTimer();
          return;
        }
        secondsLeft -= 1;
        const timerEl = container.querySelector('#quizTimerEl');
        const warnEl = container.querySelector('#quizWarningBanner');
        if (timerEl) timerEl.textContent = formatTime(secondsLeft);
        if (warnEl) {
          if (secondsLeft <= 120 && secondsLeft > 0) {
            warnEl.style.display = 'flex';
          } else {
            warnEl.style.display = 'none';
          }
        }
        if (secondsLeft <= 0) {
          stopTimer();
          submitted = true;
          recordQuizCompletion();
          render();
        }
      }, 1000);
    }

    function recordQuizCompletion(finalize = true) {
      const questions = getActiveQuestions();
      let correct = 0;
      let wrong = 0;
      let unattempted = 0;

      questions.forEach((q, idx) => {
        if (answers[idx] === undefined) {
          unattempted++;
        } else if (answers[idx] === q.answer) {
          correct++;
        } else {
          wrong++;
        }
      });

      const penalties = (mode === 'mock' && negativeMarking) ? (wrong * 0.25) : 0;
      const netMarks = Math.max(0, correct - penalties);
      const elapsedSec = Math.round((Date.now() - startTime) / 1000);

      if (finalize) {
        try {
          const histKey = 'scholargrid_quiz_history';
          const history = JSON.parse(localStorage.getItem(histKey) || '[]');
          history.unshift({
            date: new Date().toISOString(),
            category: activeCat,
            mode,
            total: questions.length,
            correct,
            wrong,
            unattempted,
            netMarks: Number(netMarks.toFixed(2)),
            timeSpentSec: elapsedSec
          });
          if (history.length > 25) history.length = 25;
          localStorage.setItem(histKey, JSON.stringify(history));
        } catch (e) {}
      }

      // Advance Placement Streak
      let streakData = { count: 0, lastDate: '' };
      try {
        const streakKey = 'scholargrid_placement_streak';
        const todayStr = new Date().toISOString().slice(0, 10);
        streakData = JSON.parse(localStorage.getItem(streakKey) || '{"count":0,"lastDate":""}');

        if (streakData.lastDate !== todayStr) {
          const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
          if (streakData.lastDate === yesterday) {
            streakData.count = (streakData.count || 0) + 1;
          } else {
            streakData.count = Math.max(1, (streakData.count || 0) + 1);
          }
          streakData.lastDate = todayStr;
          localStorage.setItem(streakKey, JSON.stringify(streakData));
        }
      } catch (e) {}

      // Real-time synchronization event for dashboard placement streak widget
      window.dispatchEvent(new CustomEvent('scholargrid:streak-updated', { detail: streakData }));
    }

    function resetQuiz(newCat, newMode) {
      stopTimer();
      if (newCat) activeCat = newCat;
      if (newMode) mode = newMode;
      currentQ = 0;
      answers = {};
      reviewFlags.clear();
      visited.clear();
      visited.add(0);
      submitted = false;
      showingReview = false;
      isRetakeOnly = false;
      retakeQuestions = null;

      const questions = getActiveQuestions();
      totalSeconds = Math.max(300, questions.length * 90);
      secondsLeft = totalSeconds;
      startTime = Date.now();

      if (mode === 'mock') {
        startTimer();
      }
      render();
    }

    function startRetake(missedQuestions) {
      stopTimer();
      isRetakeOnly = true;
      retakeQuestions = missedQuestions;
      currentQ = 0;
      answers = {};
      reviewFlags.clear();
      visited.clear();
      visited.add(0);
      submitted = false;
      showingReview = false;
      mode = 'practice';
      render();
    }

    function render() {
      const questions = getActiveQuestions();
      if (!questions.length) {
        container.innerHTML = '<div class="card">No questions available in this category.</div>';
        return;
      }

      visited.add(currentQ);
      const answeredCount = Object.keys(answers).length;
      const reviewCount = reviewFlags.size;

      // -------------------------------------------------------------
      // SUBMITTED: SCORECARD & PERFORMANCE ANALYTICS VIEW
      // -------------------------------------------------------------
      if (submitted) {
        stopTimer();
        let correctCount = 0;
        let wrongCount = 0;
        const missedQuestions = [];
        const topicStats = {};

        questions.forEach((q, idx) => {
          const chosen = answers[idx];
          const isCorrect = chosen === q.answer;
          const topic = q.topic || activeCat.split(':')[0];
          if (!topicStats[topic]) topicStats[topic] = { total: 0, correct: 0 };
          topicStats[topic].total++;

          if (isCorrect) {
            correctCount++;
            topicStats[topic].correct++;
          } else {
            if (chosen !== undefined) wrongCount++;
            missedQuestions.push(q);
          }
        });

        const penalty = (mode === 'mock' && negativeMarking) ? (wrongCount * 0.25) : 0;
        const netMarks = Math.max(0, correctCount - penalty);
        const netPct = Math.round((netMarks / questions.length) * 100);
        const accuracyPct = (correctCount + wrongCount) > 0 ? Math.round((correctCount / (correctCount + wrongCount)) * 100) : 0;
        const timeTakenFormatted = formatTime(Math.max(1, (Date.now() - startTime) / 1000));

        const strongTopics = [];
        const weakTopics = [];
        Object.keys(topicStats).forEach(t => {
          const rate = Math.round((topicStats[t].correct / topicStats[t].total) * 100);
          if (rate >= 80) strongTopics.push(`${t} (${rate}%)`);
          else weakTopics.push(`${t} (${rate}%)`);
        });

        container.innerHTML = `
          <!-- Category Tabs -->
          <div class="tabs" role="tablist" aria-label="Quiz Categories" style="margin-bottom:16px; overflow-x:auto; flex-wrap:nowrap;">
            ${categories.map((cat) => `
              <button type="button" class="tab-btn ${cat === activeCat ? 'active' : ''}" data-cat="${esc(cat)}" style="display:inline-flex;align-items:center;gap:6px;">
                ${cat.includes('Daily 5') ? TOOL_ICONS.target : ''}
                <span>${esc(cat)}</span>
              </button>
            `).join('')}
          </div>

          <!-- Comprehensive Exam Scorecard -->
          <div class="card" style="margin-bottom:20px; border-top: 4px solid var(--primary);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; margin-bottom:16px;">
              <div>
                <div style="display:flex; align-items:center; gap:8px;">
                  <span class="badge ${netPct >= 70 ? 'badge-free' : 'badge-freemium'}" style="font-size:0.85rem; display:inline-flex; align-items:center; gap:5px;">
                    ${netPct >= 70 ? TOOL_ICONS.check : TOOL_ICONS.book}
                    <span>${netPct >= 70 ? 'Exam Qualified' : 'Revision Recommended'}</span>
                  </span>
                  <span style="font-size:0.85rem; color:var(--text-muted);">${mode === 'mock' ? 'Mock Placement Exam' : 'Practice Mode'}</span>
                </div>
                <h2 style="margin:6px 0 2px; font-size:1.4rem;">${esc(activeCat)} Scorecard</h2>
                <p style="margin:0; font-size:0.88rem; color:var(--text-muted);">
                  Performance summary, accuracy analytics &amp; syllabus mastery.
                </p>
              </div>
              <div style="display:flex; gap:8px; flex-wrap:wrap;">
                ${missedQuestions.length > 0 ? `
                  <button type="button" class="btn btn-primary btn-sm" id="quizRetakeIncorrectBtn" style="display:inline-flex;align-items:center;gap:6px;">
                    ${TOOL_ICONS.refresh} Retake Incorrect Only (${missedQuestions.length})
                  </button>
                ` : ''}
                <button type="button" class="btn btn-outline btn-sm" id="quizToggleSolutionsBtn" style="display:inline-flex;align-items:center;gap:6px;">
                  ${TOOL_ICONS.book} ${showingReview ? 'Hide Solutions' : 'Review All Solutions'}
                </button>
                <button type="button" class="btn btn-outline btn-sm" id="quizRestartBtn" style="display:inline-flex;align-items:center;gap:6px;">
                  ${TOOL_ICONS.refresh} Start New Quiz
                </button>
              </div>
            </div>

            <!-- Scorecard Metrics Grid -->
            <div class="grid grid-4" style="gap:12px; margin-bottom:16px;">
              <div class="card" style="padding:14px; text-align:center; background:var(--bg-elevated); border:1px solid var(--border);">
                <div style="font-size:0.78rem; text-transform:uppercase; letter-spacing:0.04em; color:var(--text-muted); font-weight:600;">Net Marks</div>
                <div style="font-size:1.6rem; font-weight:800; color:var(--primary); margin:4px 0;">${netMarks.toFixed(2)} <span style="font-size:0.95rem; font-weight:500; color:var(--text-muted);">/ ${questions.length}</span></div>
                <div style="font-size:0.8rem; color:var(--text-muted);">${netPct}% Overall</div>
              </div>

              <div class="card" style="padding:14px; text-align:center; background:var(--bg-elevated); border:1px solid var(--border);">
                <div style="font-size:0.78rem; text-transform:uppercase; letter-spacing:0.04em; color:var(--text-muted); font-weight:600;">Accuracy</div>
                <div style="font-size:1.6rem; font-weight:800; color:${accuracyPct >= 75 ? 'var(--success)' : 'var(--warning)'}; margin:4px 0;">${accuracyPct}%</div>
                <div style="font-size:0.8rem; color:var(--text-muted);">${correctCount} of ${correctCount + wrongCount} attempted</div>
              </div>

              <div class="card" style="padding:14px; text-align:center; background:var(--bg-elevated); border:1px solid var(--border);">
                <div style="font-size:0.78rem; text-transform:uppercase; letter-spacing:0.04em; color:var(--text-muted); font-weight:600;">Penalties (${negativeMarking && mode === 'mock' ? '-0.25' : 'None'})</div>
                <div style="font-size:1.6rem; font-weight:800; color:${penalty > 0 ? 'var(--danger)' : 'var(--text-muted)'}; margin:4px 0;">-${penalty.toFixed(2)}</div>
                <div style="font-size:0.8rem; color:var(--text-muted);">${wrongCount} Wrong, ${questions.length - answeredCount} Skipped</div>
              </div>

              <div class="card" style="padding:14px; text-align:center; background:var(--bg-elevated); border:1px solid var(--border);">
                <div style="font-size:0.78rem; text-transform:uppercase; letter-spacing:0.04em; color:var(--text-muted); font-weight:600;">Time Spent</div>
                <div style="font-size:1.6rem; font-weight:800; color:var(--text); margin:4px 0;">${timeTakenFormatted}</div>
                <div style="font-size:0.8rem; color:var(--text-muted);">Pace: ${(Math.max(1, (Date.now() - startTime) / 1000) / Math.max(1, answeredCount)).toFixed(0)}s / question</div>
              </div>
            </div>

            <!-- Topic Mastery Breakdown -->
            <div style="display:flex; flex-wrap:wrap; gap:16px; padding:12px; background:var(--bg); border-radius:12px; border:1px solid var(--border);">
              <div style="flex:1; min-width:240px;">
                <div style="font-size:0.85rem; font-weight:700; color:var(--success); margin-bottom:6px; display:inline-flex; align-items:center; gap:6px;">
                  <span style="width:8px; height:8px; border-radius:50%; background:var(--success); display:inline-block;"></span>
                  Strong Mastery (≥ 80%)
                </div>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                  ${strongTopics.length ? strongTopics.map(t => `
                    <span class="badge" style="background:rgba(5, 150, 105, 0.1); color:var(--success); font-weight:600;">${esc(t)}</span>
                  `).join('') : '<span style="font-size:0.82rem; color:var(--text-muted);">None yet — keep practicing!</span>'}
                </div>
              </div>

              <div style="flex:1; min-width:240px;">
                <div style="font-size:0.85rem; font-weight:700; color:var(--danger); margin-bottom:6px; display:inline-flex; align-items:center; gap:6px;">
                  <span style="width:8px; height:8px; border-radius:50%; background:var(--danger); display:inline-block;"></span>
                  Needs Revision (&lt; 80%)
                </div>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                  ${weakTopics.length ? weakTopics.map(t => `
                    <span class="badge" style="background:rgba(220, 38, 38, 0.1); color:var(--danger); font-weight:600;">${esc(t)}</span>
                  `).join('') : '<span style="font-size:0.82rem; color:var(--text-muted);">All topics mastered!</span>'}
                </div>
              </div>
            </div>
          </div>

          <!-- Solutions Expansion -->
          <div id="solutionsContainer" style="${showingReview ? 'display:grid;' : 'display:none;'} gap:16px; margin-top:20px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <h3 style="margin:0; font-size:1.15rem;">Question Solutions &amp; Step-by-Step Explanations</h3>
              <span style="font-size:0.85rem; color:var(--text-muted);">${questions.length} Questions</span>
            </div>
            ${questions.map((q, idx) => {
              const chosen = answers[idx];
              const isCorrect = chosen === q.answer;
              const isSkipped = chosen === undefined;
              return `
                <div class="card" style="border-left: 4px solid ${isCorrect ? 'var(--success)' : (isSkipped ? 'var(--warning)' : 'var(--danger)')};">
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
                    <div>
                      <span class="badge" style="font-size:0.75rem; margin-bottom:4px;">Q${idx + 1}</span>
                      <strong style="display:block; font-size:0.95rem; line-height:1.4;">${esc(q.q)}</strong>
                    </div>
                    <span class="badge ${isCorrect ? 'badge-free' : (isSkipped ? 'badge-freemium' : 'badge-paid')}" style="display:inline-flex; align-items:center; gap:4px;">
                      ${isCorrect ? `${TOOL_ICONS.check} Correct (+1.0)` : (isSkipped ? `○ Skipped (0.0)` : `${TOOL_ICONS.cross} Wrong (${negativeMarking && mode === 'mock' ? '-0.25' : '0.0'})`)}
                    </span>
                  </div>

                  ${q.snippet ? `
                    <pre class="quiz-snippet" style="margin:10px 0; padding:10px 14px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; font-family:'Fira Code', 'Courier New', monospace; font-size:0.85rem; overflow-x:auto;"><code>${esc(q.snippet)}</code></pre>
                  ` : ''}

                  <div style="display:grid; gap:8px; margin-top:10px;">
                    ${q.options.map((opt, oIdx) => {
                      let cls = 'quiz-option';
                      let statusText = '';
                      if (oIdx === q.answer) {
                        cls += ' correct';
                        statusText = ' (Correct Answer)';
                      } else if (oIdx === chosen) {
                        cls += ' wrong';
                        statusText = ' (Your Answer)';
                      }
                      return `
                        <div class="${cls}" style="padding:10px 14px; font-size:0.88rem;">
                          <strong>${String.fromCharCode(65 + oIdx)}.</strong> ${esc(opt)}${statusText}
                        </div>
                      `;
                    }).join('')}
                  </div>

                  <div style="margin-top:10px; padding:10px 12px; background:rgba(79, 70, 229, 0.05); border:1px solid rgba(79, 70, 229, 0.15); border-radius:8px; font-size:0.86rem; color:var(--text);">
                    <strong style="color:var(--primary);">${TOOL_ICONS.lightbulb} Explanation:</strong> ${esc(q.explanation)}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;

        container.querySelectorAll('.tab-btn[data-cat]').forEach(btn => {
          btn.addEventListener('click', () => resetQuiz(btn.getAttribute('data-cat')));
        });
        const restartBtn = container.querySelector('#quizRestartBtn');
        if (restartBtn) restartBtn.addEventListener('click', () => resetQuiz(activeCat));
        const toggleSolBtn = container.querySelector('#quizToggleSolutionsBtn');
        if (toggleSolBtn) {
          toggleSolBtn.addEventListener('click', () => {
            showingReview = !showingReview;
            render();
          });
        }
        const retakeBtn = container.querySelector('#quizRetakeIncorrectBtn');
        if (retakeBtn) {
          retakeBtn.addEventListener('click', () => startRetake(missedQuestions));
        }
        return;
      }

      // -------------------------------------------------------------
      // ACTIVE QUIZ INTERFACE: PRACTICE OR MOCK EXAM MODE
      // -------------------------------------------------------------
      const q = questions[currentQ];
      const chosen = answers[currentQ];
      const isReviewed = reviewFlags.has(currentQ);

      container.innerHTML = `
        <!-- Top Category Tabs -->
        <div class="tabs" role="tablist" aria-label="Quiz Categories" style="margin-bottom:14px; overflow-x:auto; flex-wrap:nowrap;">
          ${categories.map((cat) => `
            <button type="button" class="tab-btn ${cat === activeCat ? 'active' : ''}" data-cat="${esc(cat)}" style="display:inline-flex;align-items:center;gap:6px;">
              ${cat.includes('Daily 5') ? TOOL_ICONS.target : ''}
              <span>${esc(cat)}</span>
            </button>
          `).join('')}
        </div>

        <!-- Mode & Controls Header Bar -->
        <div class="card" style="padding:12px 16px; margin-bottom:14px; background:var(--bg-elevated); border:1px solid var(--border);">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <!-- Mode Selector Switch -->
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:0.84rem; font-weight:600; color:var(--text-muted);">Mode:</span>
              <div style="display:inline-flex; border:1px solid var(--border); border-radius:999px; padding:2px; background:var(--bg);">
                <button type="button" class="btn btn-sm ${mode === 'practice' ? 'btn-primary' : 'btn-outline'}" id="quizModePracticeBtn" style="border-radius:999px; padding:4px 12px; font-size:0.8rem; border:none; display:inline-flex; align-items:center; gap:5px;">
                  ${TOOL_ICONS.zap} Practice (Instant Feedback)
                </button>
                <button type="button" class="btn btn-sm ${mode === 'mock' ? 'btn-primary' : 'btn-outline'}" id="quizModeMockBtn" style="border-radius:999px; padding:4px 12px; font-size:0.8rem; border:none; display:inline-flex; align-items:center; gap:5px;">
                  ${TOOL_ICONS.clock} Mock Exam (Placement Timed)
                </button>
              </div>
            </div>

            <!-- Negative Marking & Timer Info -->
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              ${mode === 'mock' ? `
                <label style="display:inline-flex; align-items:center; gap:6px; font-size:0.82rem; color:var(--text-muted); cursor:pointer;">
                  <input type="checkbox" id="negativeMarkingToggle" ${negativeMarking ? 'checked' : ''} style="accent-color:var(--primary);" />
                  Negative Marking (-0.25)
                </label>
                <div class="quiz-timer" style="background:rgba(220, 38, 38, 0.08); border-color:rgba(220, 38, 38, 0.25); color:var(--danger); display:inline-flex; align-items:center; gap:6px;">
                  ${TOOL_ICONS.clock} <span id="quizTimerEl">${formatTime(secondsLeft)}</span>
                </div>
              ` : `
                <span class="badge badge-free" style="font-size:0.8rem;">Untimed Self-Paced Practice</span>
              `}
            </div>
          </div>

          <!-- Time Warning Banner (< 2 mins) -->
          <div id="quizWarningBanner" style="display:${(mode === 'mock' && secondsLeft <= 120 && secondsLeft > 0) ? 'flex' : 'none'}; align-items:center; gap:8px; margin-top:10px; padding:8px 12px; background:rgba(220, 38, 38, 0.1); border:1px solid var(--danger); border-radius:8px; color:var(--danger); font-size:0.85rem; font-weight:600;">
            ${TOOL_ICONS.alert} <strong>Time Alert:</strong> Less than 2 minutes remaining! Review marked questions before automated submission.
          </div>
        </div>

        <!-- Main Question & Palette Layout -->
        <div style="display:grid; grid-template-columns: 1fr ${mode === 'mock' ? '300px' : '260px'}; gap:16px; align-items:start;" class="quiz-layout-grid">
          
          <!-- LEFT / MAIN: Question Card -->
          <div class="card" style="padding:20px; border-top: 4px solid var(--primary);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <span class="badge" style="font-size:0.82rem;">Question ${currentQ + 1} of ${questions.length}</span>
                ${isReviewed ? `<span class="badge" style="background:rgba(147, 51, 234, 0.1); color:#7c3aed; border:1px solid rgba(147, 51, 234, 0.3); display:inline-flex; align-items:center; gap:4px;">${TOOL_ICONS.star} Marked for Review</span>` : ''}
              </div>
              <span style="font-size:0.82rem; color:var(--text-muted);">
                Answered: <strong>${answeredCount}</strong> / ${questions.length}
              </span>
            </div>

            <!-- Question Statement -->
            <h3 style="margin:0 0 12px; font-size:1.05rem; line-height:1.5; color:var(--text);">
              ${esc(q.q)}
            </h3>

            <!-- Monospace Code Snippet Block (if present) -->
            ${q.snippet ? `
              <pre class="quiz-snippet" style="margin:12px 0 16px; padding:12px 16px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; font-family:'Fira Code', 'Courier New', monospace; font-size:0.88rem; overflow-x:auto; line-height:1.45; color:#0f172a;"><code>${esc(q.snippet)}</code></pre>
            ` : ''}

            <!-- Options List -->
            <div style="display:grid; gap:10px; margin:16px 0;">
              ${q.options.map((opt, oIdx) => {
                let cls = 'quiz-option';
                if (mode === 'practice') {
                  if (chosen !== undefined) {
                    if (oIdx === q.answer) cls += ' correct';
                    else if (oIdx === chosen) cls += ' wrong';
                  }
                } else {
                  if (chosen === oIdx) cls += ' selected';
                }
                return `
                  <button type="button" class="${cls}" data-opt-idx="${oIdx}" style="text-align:left; justify-content:flex-start;">
                    <strong style="width:24px; height:24px; border-radius:50%; display:inline-grid; place-items:center; background:rgba(0,0,0,0.04); font-size:0.82rem; flex-shrink:0;">
                      ${String.fromCharCode(65 + oIdx)}
                    </strong>
                    <span style="flex:1;">${esc(opt)}</span>
                  </button>
                `;
              }).join('')}
            </div>

            <!-- Practice Mode Instant Explanation -->
            ${mode === 'practice' && chosen !== undefined ? `
              <div style="margin-top:16px; padding:14px; background:rgba(79, 70, 229, 0.05); border:1px solid rgba(79, 70, 229, 0.2); border-radius:10px; font-size:0.88rem;">
                <div style="font-weight:700; color:${chosen === q.answer ? 'var(--success)' : 'var(--danger)'}; margin-bottom:4px; display:inline-flex; align-items:center; gap:6px;">
                  ${chosen === q.answer ? `${TOOL_ICONS.check} Correct Answer!` : `${TOOL_ICONS.cross} Incorrect Selection`}
                </div>
                <div><strong style="color:var(--primary);">${TOOL_ICONS.lightbulb} Explanation:</strong> ${esc(q.explanation)}</div>
              </div>
            ` : ''}

            <!-- Action Buttons Toolbar -->
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-top:20px; padding-top:16px; border-top:1px solid var(--border);">
              <div style="display:flex; gap:8px;">
                <button type="button" class="btn btn-outline btn-sm" id="quizPrevBtn" ${currentQ === 0 ? 'disabled' : ''}>
                  ← Prev
                </button>
                <button type="button" class="btn btn-outline btn-sm" id="quizNextBtn" ${currentQ === questions.length - 1 ? 'disabled' : ''}>
                  Next →
                </button>
              </div>

              <div style="display:flex; gap:8px; flex-wrap:wrap;">
                ${chosen !== undefined ? `
                  <button type="button" class="btn btn-outline btn-sm" id="quizClearChoiceBtn" style="font-size:0.8rem; color:var(--text-muted);">
                    Clear Choice
                  </button>
                ` : ''}
                <button type="button" class="btn btn-outline btn-sm" id="quizMarkReviewBtn" style="font-size:0.8rem; color:#7c3aed; border-color:rgba(147, 51, 234, 0.4); display:inline-flex; align-items:center; gap:5px;">
                  ${isReviewed ? `${TOOL_ICONS.star} Unmark Review` : `${TOOL_ICONS.starOutline} Mark for Review`}
                </button>
                <button type="button" class="btn btn-primary btn-sm" id="quizSubmitBtn">
                  Finish &amp; Submit
                </button>
              </div>
            </div>
          </div>

          <!-- RIGHT: Professional TCS/GATE Style Question Palette -->
          <div class="card" style="padding:16px; background:var(--bg-elevated); border:1px solid var(--border); position:sticky; top:80px;">
            <div style="font-size:0.9rem; font-weight:700; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center;">
              <span>Question Palette</span>
              <span class="badge" style="font-size:0.75rem;">${questions.length} Items</span>
            </div>

            <!-- Legend -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:0.75rem; color:var(--text-muted); margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid var(--border);">
              <div style="display:flex; align-items:center; gap:6px;">
                <span style="width:12px; height:12px; border-radius:3px; background:#16a34a; display:inline-block;"></span>
                <span>Answered (${answeredCount})</span>
              </div>
              <div style="display:flex; align-items:center; gap:6px;">
                <span style="width:12px; height:12px; border-radius:3px; background:#ea580c; display:inline-block;"></span>
                <span>Unanswered</span>
              </div>
              <div style="display:flex; align-items:center; gap:6px;">
                <span style="width:12px; height:12px; border-radius:3px; background:#7c3aed; display:inline-block;"></span>
                <span>Review (${reviewCount})</span>
              </div>
              <div style="display:flex; align-items:center; gap:6px;">
                <span style="width:12px; height:12px; border-radius:3px; background:#cbd5e1; display:inline-block;"></span>
                <span>Not Visited</span>
              </div>
            </div>

            <!-- Number Palette Grid -->
            <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:6px;">
              ${questions.map((_, idx) => {
                const ans = answers[idx] !== undefined;
                const rev = reviewFlags.has(idx);
                const vis = visited.has(idx);
                const isCur = idx === currentQ;

                let bg = '#f1f5f9';
                let col = '#475569';
                let border = '#cbd5e1';

                if (rev) {
                  bg = '#7c3aed';
                  col = '#ffffff';
                  border = '#6b21a8';
                } else if (ans) {
                  bg = '#16a34a';
                  col = '#ffffff';
                  border = '#15803d';
                } else if (vis) {
                  bg = '#ea580c';
                  col = '#ffffff';
                  border = '#c2410c';
                }

                return `
                  <button type="button" class="palette-q-btn" data-q-idx="${idx}" style="
                    aspect-ratio:1;
                    border-radius:8px;
                    border:2px solid ${isCur ? 'var(--primary)' : border};
                    background:${bg};
                    color:${col};
                    font-weight:700;
                    font-size:0.82rem;
                    cursor:pointer;
                    display:grid;
                    place-items:center;
                    box-shadow:${isCur ? '0 0 0 2px rgba(79, 70, 229, 0.35)' : 'none'};
                    transition:transform 0.1s ease;
                  ">
                    ${idx + 1}
                  </button>
                `;
              }).join('')}
            </div>

            <!-- Quick Jump Footer -->
            <div style="margin-top:16px; padding-top:12px; border-top:1px solid var(--border); text-align:center;">
              <button type="button" class="btn btn-primary btn-sm" id="quizPaletteSubmitBtn" style="width:100%;">
                Submit Quiz (${answeredCount}/${questions.length})
              </button>
            </div>
          </div>

        </div>
      `;

      // Event Listeners
      container.querySelectorAll('.tab-btn[data-cat]').forEach(btn => {
        btn.addEventListener('click', () => {
          resetQuiz(btn.getAttribute('data-cat'));
        });
      });

      const practiceBtn = container.querySelector('#quizModePracticeBtn');
      if (practiceBtn) {
        practiceBtn.addEventListener('click', () => {
          if (mode !== 'practice') resetQuiz(activeCat, 'practice');
        });
      }
      const mockBtn = container.querySelector('#quizModeMockBtn');
      if (mockBtn) {
        mockBtn.addEventListener('click', () => {
          if (mode !== 'mock') resetQuiz(activeCat, 'mock');
        });
      }

      const negToggle = container.querySelector('#negativeMarkingToggle');
      if (negToggle) {
        negToggle.addEventListener('change', () => {
          negativeMarking = negToggle.checked;
        });
      }

      container.querySelectorAll('.quiz-option[data-opt-idx]').forEach(btn => {
        btn.addEventListener('click', () => {
          answers[currentQ] = Number(btn.getAttribute('data-opt-idx'));
          // In practice mode, check if all questions are answered or if daily 5 completed
          if (mode === 'practice' && Object.keys(answers).length >= questions.length) {
            recordQuizCompletion(false);
          }
          render();
        });
      });

      const clearBtn = container.querySelector('#quizClearChoiceBtn');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          delete answers[currentQ];
          render();
        });
      }

      const reviewBtn = container.querySelector('#quizMarkReviewBtn');
      if (reviewBtn) {
        reviewBtn.addEventListener('click', () => {
          if (reviewFlags.has(currentQ)) reviewFlags.delete(currentQ);
          else reviewFlags.add(currentQ);
          render();
        });
      }

      const prevBtn = container.querySelector('#quizPrevBtn');
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          if (currentQ > 0) {
            currentQ -= 1;
            render();
          }
        });
      }
      const nextBtn = container.querySelector('#quizNextBtn');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          if (currentQ < questions.length - 1) {
            currentQ += 1;
            render();
          }
        });
      }

      container.querySelectorAll('.palette-q-btn[data-q-idx]').forEach(btn => {
        btn.addEventListener('click', () => {
          currentQ = Number(btn.getAttribute('data-q-idx'));
          render();
        });
      });

      const doSubmit = () => {
        if (mode === 'mock') {
          const unans = questions.length - Object.keys(answers).length;
          const rev = reviewFlags.size;
          let msg = 'Are you ready to submit your exam?\n';
          if (unans > 0) msg += `\n• You have ${unans} unanswered question(s).`;
          if (rev > 0) msg += `\n• You have ${rev} question(s) marked for review.`;
          if (!confirm(msg + '\n\nClick OK to finalize your submission.')) return;
        }
        submitted = true;
        recordQuizCompletion(true);
        render();
      };

      const submitBtn = container.querySelector('#quizSubmitBtn');
      if (submitBtn) submitBtn.addEventListener('click', doSubmit);
      const palSubmitBtn = container.querySelector('#quizPaletteSubmitBtn');
      if (palSubmitBtn) palSubmitBtn.addEventListener('click', doSubmit);
    }

    if (mode === 'mock') startTimer();
    render();
  }

  window.SCHOLAR_TOOLS = {
    renderSgpaCalculator,
    renderAttendanceTracker,
    renderResumeBuilder,
    renderMcqQuiz
  };
})();
