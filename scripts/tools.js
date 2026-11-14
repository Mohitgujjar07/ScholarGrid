(function () {
  const DATA = window.SCHOLAR_TOOLS_DATA || {};

  const SGPA_STORAGE_KEY = 'scholargrid_sgpa_v1';
  const ATTENDANCE_STORAGE_KEY = 'scholargrid_attendance_v1';
  const RESUME_STORAGE_KEY = 'scholargrid_resume_v1';

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
    } catch {}
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

    let state = loadJson(SGPA_STORAGE_KEY, {});
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

    function render() {
      ensureSemState(activeSem);
      saveJson(SGPA_STORAGE_KEY, state);
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
              <div class="card-title">${esc(activeSem)} — Subjects, Internal Marks & Theory Grade</div>
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
                        <select class="sgpa-grade" data-code="${esc(sub.code)}" style="padding:6px 10px;">
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
      }

      container.querySelectorAll('.sgpa-ia').forEach((input) => {
        input.addEventListener('input', () => {
          const code = input.getAttribute('data-code');
          const val = Math.max(0, Math.min(40, Number(input.value) || 0));
          state[activeSem][code].ia = val;
          saveJson(SGPA_STORAGE_KEY, state);
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

    let state = loadJson(ATTENDANCE_STORAGE_KEY, {});
    let activeSem = getActiveSemesterDefault(semesters);

    function ensureSem(sem) {
      if (!state[sem]) state[sem] = {};
      (creditsMap[sem] || []).forEach((sub) => {
        if (!state[sem][sub.code]) {
          state[sem][sub.code] = { attended: 18, total: 22, ia: 30 };
        }
      });
    }

    function calcStatus(attended, total) {
      const a = Math.max(0, Number(attended) || 0);
      const t = Math.max(0, Number(total) || 0);
      if (t === 0) {
        return { pct: 100, safe: true, text: 'No classes logged yet' };
      }
      const pct = (a / t) * 100;
      if (pct >= 75) {
        // Max consecutive absences x while maintaining a / (t + x) >= 0.75 => x <= (a / 0.75) - t
        const canMiss = Math.floor(a / 0.75 - t);
        return {
          pct,
          safe: true,
          text: canMiss > 0 ? `Safe to miss ${canMiss} class${canMiss === 1 ? '' : 'es'}` : 'On the 75% boundary — attend next class'
        };
      }
      // Consecutive classes needed x: (a + x) / (t + x) >= 0.75 => x >= 3*t - 4*a
      const needed = Math.max(1, Math.ceil(3 * t - 4 * a));
      return {
        pct,
        safe: false,
        text: `Attend next ${needed} class${needed === 1 ? '' : 'es'} for 75%`
      };
    }

    function render() {
      ensureSem(activeSem);
      saveJson(ATTENDANCE_STORAGE_KEY, state);
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
            <div class="stat-val" style="font-size:1.1rem;">
              <span class="${overall.safe ? 'status-safe' : 'status-warn'}">${esc(overall.text)}</span>
            </div>
            <div class="stat-label">75% Mandatory University Threshold</div>
          </div>
        </div>

        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div>
              <div class="card-title">${esc(activeSem)} — Subject Attendance & IA Tracker</div>
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
                        <button type="button" class="btn btn-outline btn-sm att-present" data-code="${esc(sub.code)}" title="Mark 1 class attended">+P</button>
                        <button type="button" class="btn btn-outline btn-sm att-absent" data-code="${esc(sub.code)}" title="Mark 1 class missed">+A</button>
                      </td>
                      <td><strong>${st.pct.toFixed(1)}%</strong></td>
                      <td><span class="${st.safe ? 'status-safe' : 'status-warn'}">${esc(st.text)}</span></td>
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
     3. Code Playground & Viva Q&A (with Lazy-Loaded Pyodide Python Runner)
     ========================================================================== */
  function loadPyodideRuntime() {
    if (window._scholarPyodidePromise) return window._scholarPyodidePromise;
    window._scholarPyodidePromise = new Promise((resolve, reject) => {
      function initPyodide() {
        if (typeof window.loadPyodide !== 'function') {
          reject(new Error('Pyodide loader not available.'));
          return;
        }
        window.loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/' })
          .then(resolve)
          .catch(reject);
      }

      if (typeof window.loadPyodide === 'function') {
        initPyodide();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
      script.async = true;
      script.onload = initPyodide;
      script.onerror = () => {
        window._scholarPyodidePromise = null;
        reject(new Error('Failed to load Pyodide from CDN. Check your internet connection.'));
      };
      document.head.appendChild(script);
    });
    return window._scholarPyodidePromise;
  }

  function renderCodePlayground(container) {
    if (!container) return;
    const labs = DATA.labPrograms || [];
    if (!labs.length) {
      container.innerHTML = '<div class="card">No lab programs available.</div>';
      return;
    }

    let activeIndex = 0;
    let sampleIndex = 0;
    let currentCode = labs[0].program;
    let pyOutput = '';
    let pyStatus = '';

    function render() {
      const lab = labs[activeIndex];
      const samples = lab.samples && lab.samples.length ? lab.samples : [{ name: lab.title, code: lab.program }];
      const isPython = lab.language.toLowerCase() === 'python';

      container.innerHTML = `
        <div class="tabs" role="tablist" aria-label="Lab Languages">
          ${labs.map((l, idx) => `
            <button type="button" class="tab-btn ${idx === activeIndex ? 'active' : ''}" data-lang-idx="${idx}">
              ${esc(l.language)} (${esc(l.semester)})
            </button>
          `).join('')}
        </div>

        <div class="card" style="margin-bottom:18px;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div>
              <div class="card-title">${esc(lab.code)} — ${esc(lab.title)}</div>
              <div class="card-desc">${isPython ? 'Edit and run Python directly in your browser (Pyodide) or open in an online compiler.' : 'Copy the sample program or launch it in an online compiler.'}</div>
            </div>
            ${samples.length > 1 ? `
              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                ${samples.map((s, sIdx) => `
                  <button type="button" class="btn ${sIdx === sampleIndex ? 'btn-primary' : 'btn-outline'} btn-sm" data-sample-idx="${sIdx}">${esc(s.name)}</button>
                `).join('')}
              </div>
            ` : ''}
          </div>

          <div class="code-toolbar">
            <span class="badge">${esc(lab.language)}</span>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <button type="button" class="btn btn-outline btn-sm" id="copyCodeBtn">📋 Copy Code</button>
              ${isPython ? '<button type="button" class="btn btn-primary btn-sm" id="runPythonBtn">▶ Run Python</button>' : ''}
              <a href="${esc(lab.compilerUrl)}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">↗ Run in Online Compiler</a>
            </div>
          </div>

          <textarea id="codeEditor" class="code-block" rows="13" spellcheck="false" aria-label="Code Editor">${esc(currentCode)}</textarea>

          ${isPython ? `
            <div id="pyStatusBox" style="font-size:0.84rem; color:var(--text-muted); margin-top:4px;">${esc(pyStatus)}</div>
            <pre id="pyOutputBox" class="code-block" style="min-height:64px; margin-top:6px; ${pyOutput ? '' : 'display:none;'}">${esc(pyOutput)}</pre>
          ` : ''}
        </div>

        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div>
              <div class="card-title">Top 10 ${esc(lab.language)} Lab Viva Questions & Answers</div>
              <div class="card-desc">Click any question to reveal the concise viva answer.</div>
            </div>
            <button type="button" class="btn btn-outline btn-sm" id="toggleAllVivaBtn">Expand / Collapse All</button>
          </div>
          <div id="vivaList" style="display:grid; gap:8px; margin-top:6px;">
            ${(lab.viva || []).map((v, i) => `
              <details class="viva-item">
                <summary><strong>Q${i + 1}.</strong> ${esc(v.q)}</summary>
                <div style="margin-top:8px; color:var(--text-muted); font-size:0.9rem;">${esc(v.a)}</div>
              </details>
            `).join('')}
          </div>
        </div>
      `;

      container.querySelectorAll('.tab-btn[data-lang-idx]').forEach((btn) => {
        btn.addEventListener('click', () => {
          activeIndex = Number(btn.getAttribute('data-lang-idx'));
          sampleIndex = 0;
          currentCode = labs[activeIndex].program;
          pyOutput = '';
          pyStatus = '';
          render();
        });
      });

      container.querySelectorAll('[data-sample-idx]').forEach((btn) => {
        btn.addEventListener('click', () => {
          sampleIndex = Number(btn.getAttribute('data-sample-idx'));
          currentCode = samples[sampleIndex].code;
          pyOutput = '';
          pyStatus = '';
          render();
        });
      });

      const editor = container.querySelector('#codeEditor');
      if (editor) {
        editor.addEventListener('input', () => {
          currentCode = editor.value;
        });
      }

      const copyBtn = container.querySelector('#copyCodeBtn');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          const text = editor ? editor.value : currentCode;
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
              copyBtn.textContent = '✓ Copied!';
              setTimeout(() => { copyBtn.textContent = '📋 Copy Code'; }, 1500);
            }).catch(() => {});
          }
        });
      }

      const runBtn = container.querySelector('#runPythonBtn');
      if (runBtn) {
        runBtn.addEventListener('click', async () => {
          const statusEl = container.querySelector('#pyStatusBox');
          const outEl = container.querySelector('#pyOutputBox');
          const codeToRun = editor ? editor.value : currentCode;

          runBtn.disabled = true;
          pyStatus = 'Loading Python runtime (Pyodide)...';
          if (statusEl) statusEl.textContent = pyStatus;

          try {
            const pyodide = await loadPyodideRuntime();
            pyStatus = 'Running Python code...';
            if (statusEl) statusEl.textContent = pyStatus;

            await pyodide.runPythonAsync(`
import sys, io
_sg_stdout = io.StringIO()
_sg_stderr = io.StringIO()
sys.stdout = _sg_stdout
sys.stderr = _sg_stderr
`);
            try {
              await pyodide.runPythonAsync(codeToRun);
              const out = pyodide.runPython('_sg_stdout.getvalue()');
              const err = pyodide.runPython('_sg_stderr.getvalue()');
              pyOutput = (out || '') + (err ? '\n[stderr]\n' + err : '');
              if (!pyOutput.trim()) pyOutput = '(Program finished with no output)';
              pyStatus = 'Executed successfully via Pyodide.';
            } catch (pyErr) {
              pyOutput = String(pyErr);
              pyStatus = 'Execution finished with an error.';
            }
          } catch (loadErr) {
            pyStatus = loadErr.message || 'Could not load Pyodide.';
            pyOutput = 'Tip: Use "Run in Online Compiler" if offline.';
          } finally {
            runBtn.disabled = false;
            if (statusEl) statusEl.textContent = pyStatus;
            if (outEl) {
              outEl.style.display = 'block';
              outEl.textContent = pyOutput;
            }
          }
        });
      }

      const toggleAllBtn = container.querySelector('#toggleAllVivaBtn');
      if (toggleAllBtn) {
        toggleAllBtn.addEventListener('click', () => {
          const items = Array.from(container.querySelectorAll('#vivaList details'));
          const anyClosed = items.some((d) => !d.open);
          items.forEach((d) => { d.open = anyClosed; });
        });
      }
    }

    render();
  }

  /* ==========================================================================
     4. 1-Page Formula & Cheat Sheets
     ========================================================================== */
  function renderFormulaSheets(container) {
    if (!container) return;
    const sheets = DATA.formulaSheets || [];
    if (!sheets.length) {
      container.innerHTML = '<div class="card">No formula sheets available.</div>';
      return;
    }

    let activeIdx = 0;

    function render() {
      const sheet = sheets[activeIdx];
      container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
          <div class="tabs" role="tablist" aria-label="Formula Sheet Subjects" style="margin-bottom:0;">
            ${sheets.map((s, idx) => `
              <button type="button" class="tab-btn ${idx === activeIdx ? 'active' : ''}" data-sheet-idx="${idx}">${esc(s.title.split('(')[0].trim())}</button>
            `).join('')}
          </div>
          <button type="button" class="btn btn-primary btn-sm" id="printFormulaBtn">🖨️ Print / Save PDF</button>
        </div>

        <div class="card formula-sheet">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:8px; border-bottom:1px solid var(--border); padding-bottom:10px; margin-bottom:12px;">
            <div>
              <div class="card-title" style="font-size:1.2rem;">${esc(sheet.title)}</div>
              <div class="card-desc">${esc(sheet.subtitle)}</div>
            </div>
            <span class="badge">${esc(sheet.code)}</span>
          </div>

          <div class="grid grid-2">
            ${(sheet.sections || []).map((sec) => `
              <div style="border:1px solid var(--border); border-radius:12px; padding:14px;">
                <h3 style="font-size:0.98rem; margin-bottom:10px; color:var(--primary);">${esc(sec.heading)}</h3>
                <div style="display:grid; gap:8px;">
                  ${(sec.items || []).map((item) => `
                    <div style="padding-bottom:6px; border-bottom:1px dashed var(--border);">
                      <div style="font-weight:600; font-size:0.86rem;">${esc(item.term)}</div>
                      <div style="font-family:monospace; font-size:0.85rem; margin:2px 0;">${esc(item.formula)}</div>
                      <div style="font-size:0.78rem; color:var(--text-muted);">${esc(item.note)}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

      container.querySelectorAll('.tab-btn[data-sheet-idx]').forEach((btn) => {
        btn.addEventListener('click', () => {
          activeIdx = Number(btn.getAttribute('data-sheet-idx'));
          render();
        });
      });

      const printBtn = container.querySelector('#printFormulaBtn');
      if (printBtn) {
        printBtn.addEventListener('click', () => window.print());
      }
    }

    render();
  }

  /* ==========================================================================
     5. ATS Resume Builder
     ========================================================================== */
  const PROJECT_PRESETS = [
    {
      label: 'ScholarGrid Academic Workspace',
      title: 'ScholarGrid — Offline-Ready BCA Academic Portal',
      tech: 'HTML5, CSS3, Vanilla JavaScript, PWA, Service Workers',
      bullets: '• Built an ad-free academic workspace serving 22 modules, PDFs, and interactive study tools.\n• Implemented offline caching via Service Workers and LocalStorage persistence for SGPA & attendance.'
    },
    {
      label: 'DBMS Library Management System',
      title: 'Automated Library & Inventory Management System',
      tech: 'Python, SQLite/MySQL, SQL, Tkinter/Flask',
      bullets: '• Designed a normalized 3NF relational schema for 1,000+ books, members, and fine tracking.\n• Reduced book search and issue latency by 45% using indexed SQL queries and triggers.'
    },
    {
      label: 'AI Placement Prep Assistant',
      title: 'CS Interview & MCQ Readiness Analyzer',
      tech: 'JavaScript, Python, REST APIs, Charting',
      bullets: '• Created a timed mock-test engine covering DBMS, OS, CN, and Quantitative Aptitude.\n• Added instant explanation feedback and topic-wise accuracy analytics.'
    },
    {
      label: 'Network Packet & Port Scanner',
      title: 'Lightweight TCP Port & Latency Diagnostic Tool',
      tech: 'Python, Socket Programming, Multithreading',
      bullets: '• Implemented multithreaded TCP port scanning and RTT latency logging for LAN diagnostics.\n• Exported structured JSON/CSV audit reports for network troubleshooting.'
    }
  ];

  const DEFAULT_RESUME = {
    fullName: 'Ananya Rao',
    email: 'ananya.rao@example.edu',
    phone: '+91 98765 43210',
    location: 'Bengaluru, India',
    links: 'github.com/ananyarao | linkedin.com/in/ananyarao',
    summary: 'Final-year BCA student (CGPA 8.95) with strong foundations in Data Structures, DBMS, Python, and Web Development. Seeking a Software Engineer / Analyst role to build reliable, user-centric applications.',
    degree: 'Bachelor of Computer Applications (BCA)',
    college: 'Bengaluru City University',
    eduYear: '2024 – 2027',
    cgpa: '8.95 / 10.0',
    skills: 'C, Java, Python, SQL, HTML5, CSS3, JavaScript, Git, DBMS, Operating Systems, Computer Networks',
    projectTitle: PROJECT_PRESETS[0].title,
    projectTech: PROJECT_PRESETS[0].tech,
    projectBullets: PROJECT_PRESETS[0].bullets,
    experience: 'Web Development Intern — Campus Tech Cell (May 2026 – Jul 2026)\n• Maintained department notice portal and optimized static assets for mobile students.\n• Collaborated with 4 peers using Git branches and pull requests.',
    certifications: '• Google Data Analytics Certificate (Coursera)\n• AWS Cloud Practitioner Essentials\n• NPTEL Database Management Systems (Elite)'
  };

  function renderResumeBuilder(container) {
    if (!container) return;
    let resume = Object.assign({}, DEFAULT_RESUME, loadJson(RESUME_STORAGE_KEY, {}));

    function updatePreviewOnly() {
      const preview = container.querySelector('#resumePreviewPane');
      if (!preview) return;
      saveJson(RESUME_STORAGE_KEY, resume);

      const skillList = resume.skills.split(',').map((s) => s.trim()).filter(Boolean);
      const bulletHtml = (text) => esc(text).replace(/\n/g, '<br/>');

      preview.innerHTML = `
        <div style="border-bottom:2px solid #0f172a; padding-bottom:8px; margin-bottom:10px;">
          <h2 style="font-size:1.35rem; margin:0; color:#0f172a;">${esc(resume.fullName || 'Your Name')}</h2>
          <div style="font-size:0.82rem; color:#334155; margin-top:4px;">
            ${esc(resume.email)} • ${esc(resume.phone)} • ${esc(resume.location)}<br/>
            ${esc(resume.links)}
          </div>
        </div>

        ${resume.summary ? `
          <div style="margin-bottom:10px;">
            <h4 style="font-size:0.85rem; text-transform:uppercase; letter-spacing:0.05em; border-bottom:1px solid #cbd5e1; margin-bottom:4px; color:#0f172a;">Summary</h4>
            <p style="font-size:0.84rem; color:#1e293b; margin:0;">${esc(resume.summary)}</p>
          </div>
        ` : ''}

        <div style="margin-bottom:10px;">
          <h4 style="font-size:0.85rem; text-transform:uppercase; letter-spacing:0.05em; border-bottom:1px solid #cbd5e1; margin-bottom:4px; color:#0f172a;">Education</h4>
          <div style="display:flex; justify-content:space-between; font-size:0.84rem; font-weight:600; color:#0f172a;">
            <span>${esc(resume.degree)} — ${esc(resume.college)}</span>
            <span>${esc(resume.eduYear)}</span>
          </div>
          <div style="font-size:0.82rem; color:#334155;">CGPA: ${esc(resume.cgpa)}</div>
        </div>

        <div style="margin-bottom:10px;">
          <h4 style="font-size:0.85rem; text-transform:uppercase; letter-spacing:0.05em; border-bottom:1px solid #cbd5e1; margin-bottom:4px; color:#0f172a;">Technical Skills</h4>
          <div style="font-size:0.84rem; color:#1e293b;">${skillList.map((s) => esc(s)).join(' • ')}</div>
        </div>

        <div style="margin-bottom:10px;">
          <h4 style="font-size:0.85rem; text-transform:uppercase; letter-spacing:0.05em; border-bottom:1px solid #cbd5e1; margin-bottom:4px; color:#0f172a;">Projects</h4>
          <div style="font-size:0.85rem; font-weight:600; color:#0f172a;">${esc(resume.projectTitle)}</div>
          <div style="font-size:0.78rem; color:#475569; margin-bottom:3px;">Tech Stack: ${esc(resume.projectTech)}</div>
          <div style="font-size:0.83rem; color:#1e293b; line-height:1.45;">${bulletHtml(resume.projectBullets)}</div>
        </div>

        ${resume.experience ? `
          <div style="margin-bottom:10px;">
            <h4 style="font-size:0.85rem; text-transform:uppercase; letter-spacing:0.05em; border-bottom:1px solid #cbd5e1; margin-bottom:4px; color:#0f172a;">Experience</h4>
            <div style="font-size:0.83rem; color:#1e293b; line-height:1.45;">${bulletHtml(resume.experience)}</div>
          </div>
        ` : ''}

        ${resume.certifications ? `
          <div>
            <h4 style="font-size:0.85rem; text-transform:uppercase; letter-spacing:0.05em; border-bottom:1px solid #cbd5e1; margin-bottom:4px; color:#0f172a;">Certifications & Achievements</h4>
            <div style="font-size:0.83rem; color:#1e293b; line-height:1.45;">${bulletHtml(resume.certifications)}</div>
          </div>
        ` : ''}
      `;
    }

    function render() {
      container.innerHTML = `
        <div class="resume-builder">
          <div class="card resume-form-pane">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
              <div class="card-title">ATS Resume Editor</div>
              <div style="display:flex; gap:8px;">
                <button type="button" class="btn btn-outline btn-sm" id="resumeResetBtn">Reset Sample</button>
                <button type="button" class="btn btn-primary btn-sm" id="resumePrintBtn">🖨️ Print / Export PDF</button>
              </div>
            </div>

            <div style="display:grid; gap:10px;">
              <label style="font-size:0.82rem; font-weight:600;">Full Name
                <input class="input" data-field="fullName" value="${esc(resume.fullName)}" />
              </label>
              <div class="grid grid-2" style="gap:10px;">
                <label style="font-size:0.82rem; font-weight:600;">Email
                  <input class="input" data-field="email" value="${esc(resume.email)}" />
                </label>
                <label style="font-size:0.82rem; font-weight:600;">Phone
                  <input class="input" data-field="phone" value="${esc(resume.phone)}" />
                </label>
              </div>
              <div class="grid grid-2" style="gap:10px;">
                <label style="font-size:0.82rem; font-weight:600;">Location
                  <input class="input" data-field="location" value="${esc(resume.location)}" />
                </label>
                <label style="font-size:0.82rem; font-weight:600;">GitHub / LinkedIn
                  <input class="input" data-field="links" value="${esc(resume.links)}" />
                </label>
              </div>
              <label style="font-size:0.82rem; font-weight:600;">Career Summary
                <textarea class="input" rows="2" data-field="summary">${esc(resume.summary)}</textarea>
              </label>
              <div class="grid grid-2" style="gap:10px;">
                <label style="font-size:0.82rem; font-weight:600;">Degree
                  <input class="input" data-field="degree" value="${esc(resume.degree)}" />
                </label>
                <label style="font-size:0.82rem; font-weight:600;">College / University
                  <input class="input" data-field="college" value="${esc(resume.college)}" />
                </label>
              </div>
              <div class="grid grid-2" style="gap:10px;">
                <label style="font-size:0.82rem; font-weight:600;">Duration
                  <input class="input" data-field="eduYear" value="${esc(resume.eduYear)}" />
                </label>
                <label style="font-size:0.82rem; font-weight:600;">CGPA / Percentage
                  <input class="input" data-field="cgpa" value="${esc(resume.cgpa)}" />
                </label>
              </div>
              <label style="font-size:0.82rem; font-weight:600;">Technical Skills (comma-separated)
                <input class="input" data-field="skills" value="${esc(resume.skills)}" />
              </label>

              <div style="border-top:1px solid var(--border); padding-top:8px;">
                <label style="font-size:0.82rem; font-weight:600;">Load Project Template Preset
                  <select id="projectPresetSelect" style="margin-top:4px;">
                    <option value="">-- Choose a preset to auto-fill --</option>
                    ${PROJECT_PRESETS.map((p, i) => `<option value="${i}">${esc(p.label)}</option>`).join('')}
                  </select>
                </label>
              </div>
              <label style="font-size:0.82rem; font-weight:600;">Project Title
                <input class="input" data-field="projectTitle" value="${esc(resume.projectTitle)}" />
              </label>
              <label style="font-size:0.82rem; font-weight:600;">Project Tech Stack
                <input class="input" data-field="projectTech" value="${esc(resume.projectTech)}" />
              </label>
              <label style="font-size:0.82rem; font-weight:600;">Project Impact Bullets
                <textarea class="input" rows="3" data-field="projectBullets">${esc(resume.projectBullets)}</textarea>
              </label>
              <label style="font-size:0.82rem; font-weight:600;">Experience / Internships
                <textarea class="input" rows="3" data-field="experience">${esc(resume.experience)}</textarea>
              </label>
              <label style="font-size:0.82rem; font-weight:600;">Certifications & Achievements
                <textarea class="input" rows="3" data-field="certifications">${esc(resume.certifications)}</textarea>
              </label>
            </div>
          </div>

          <div class="card resume-preview" id="resumePreviewPane"></div>
        </div>
      `;

      updatePreviewOnly();

      container.querySelectorAll('[data-field]').forEach((el) => {
        el.addEventListener('input', () => {
          const field = el.getAttribute('data-field');
          resume[field] = el.value;
          updatePreviewOnly();
        });
      });

      const presetSel = container.querySelector('#projectPresetSelect');
      if (presetSel) {
        presetSel.addEventListener('change', () => {
          const idx = presetSel.value;
          if (idx === '') return;
          const preset = PROJECT_PRESETS[Number(idx)];
          if (!preset) return;
          resume.projectTitle = preset.title;
          resume.projectTech = preset.tech;
          resume.projectBullets = preset.bullets;
          render();
        });
      }

      const resetBtn = container.querySelector('#resumeResetBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          resume = Object.assign({}, DEFAULT_RESUME);
          saveJson(RESUME_STORAGE_KEY, resume);
          render();
        });
      }

      const printBtn = container.querySelector('#resumePrintBtn');
      if (printBtn) {
        printBtn.addEventListener('click', () => window.print());
      }
    }

    render();
  }

  /* ==========================================================================
     6. Timed Core CS & Aptitude MCQ Quiz
     ========================================================================== */
  function renderMcqQuiz(container) {
    if (!container) return;
    const bank = DATA.mcqBank || {};
    const categories = Object.keys(bank);
    if (!categories.length) {
      container.innerHTML = '<div class="card">No MCQ questions available.</div>';
      return;
    }

    let activeCat = categories[0];
    let currentQ = 0;
    let answers = {};
    let submitted = false;
    let secondsLeft = (bank[activeCat] || []).length * 60;
    let timerId = null;

    function stopTimer() {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
    }

    function formatTime(sec) {
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    function startTimer() {
      stopTimer();
      timerId = setInterval(() => {
        if (!document.body.contains(container)) {
          stopTimer();
          return;
        }
        secondsLeft -= 1;
        const timerEl = container.querySelector('#quizTimerEl');
        if (timerEl) timerEl.textContent = formatTime(Math.max(0, secondsLeft));
        if (secondsLeft <= 0) {
          stopTimer();
          submitted = true;
          render();
        }
      }, 1000);
    }

    function resetQuiz(cat) {
      activeCat = cat;
      currentQ = 0;
      answers = {};
      submitted = false;
      secondsLeft = (bank[activeCat] || []).length * 60;
      startTimer();
      render();
    }

    function render() {
      const questions = bank[activeCat] || [];
      if (!questions.length) {
        container.innerHTML = '<div class="card">No questions in this category.</div>';
        return;
      }

      const answeredCount = Object.keys(answers).length;
      const correctCount = questions.reduce((acc, q, idx) => acc + (answers[idx] === q.answer ? 1 : 0), 0);

      if (submitted) {
        stopTimer();
        const pct = Math.round((correctCount / questions.length) * 100);
        container.innerHTML = `
          <div class="tabs" role="tablist" aria-label="Quiz Categories">
            ${categories.map((cat) => `
              <button type="button" class="tab-btn ${cat === activeCat ? 'active' : ''}" data-cat="${esc(cat)}">${esc(cat)}</button>
            `).join('')}
          </div>

          <div class="card" style="margin-bottom:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
              <div>
                <div class="card-title">${esc(activeCat)} Quiz Complete!</div>
                <div class="card-desc">Score: <strong>${correctCount} / ${questions.length}</strong> (${pct}%)</div>
              </div>
              <button type="button" class="btn btn-primary btn-sm" id="quizRestartBtn">↻ Retake ${esc(activeCat)} Quiz</button>
            </div>
          </div>

          <div style="display:grid; gap:12px;">
            ${questions.map((q, idx) => {
              const chosen = answers[idx];
              const isCorrect = chosen === q.answer;
              return `
                <div class="card">
                  <div style="display:flex; justify-content:space-between; gap:8px;">
                    <strong>Q${idx + 1}. ${esc(q.q)}</strong>
                    <span class="${isCorrect ? 'status-safe' : 'status-warn'}">${isCorrect ? 'Correct' : 'Incorrect'}</span>
                  </div>
                  <div style="display:grid; gap:6px; margin-top:6px;">
                    ${q.options.map((opt, oIdx) => {
                      let cls = 'quiz-option';
                      if (oIdx === q.answer) cls += ' correct';
                      else if (oIdx === chosen && chosen !== q.answer) cls += ' wrong';
                      return `<div class="${cls}">${esc(opt)}</div>`;
                    }).join('')}
                  </div>
                  <div style="font-size:0.85rem; color:var(--text-muted); margin-top:6px;">
                    <strong>Explanation:</strong> ${esc(q.explanation)}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      } else {
        const q = questions[currentQ];
        const chosen = answers[currentQ];

        container.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
            <div class="tabs" role="tablist" aria-label="Quiz Categories" style="margin-bottom:0;">
              ${categories.map((cat) => `
                <button type="button" class="tab-btn ${cat === activeCat ? 'active' : ''}" data-cat="${esc(cat)}">${esc(cat)}</button>
              `).join('')}
            </div>
            <div class="quiz-timer">⏱ <span id="quizTimerEl">${formatTime(secondsLeft)}</span></div>
          </div>

          <div class="card">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
              <span class="badge">Question ${currentQ + 1} of ${questions.length}</span>
              <span style="font-size:0.84rem; color:var(--text-muted);">Answered: ${answeredCount}/${questions.length}</span>
            </div>

            <div class="card-title" style="margin-top:6px;">${esc(q.q)}</div>

            <div style="display:grid; gap:8px; margin-top:6px;">
              ${q.options.map((opt, oIdx) => `
                <button type="button" class="quiz-option ${chosen === oIdx ? 'selected' : ''}" data-opt-idx="${oIdx}" style="text-align:left;">
                  <strong>${String.fromCharCode(65 + oIdx)}.</strong> ${esc(opt)}
                </button>
              `).join('')}
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-top:12px;">
              <div style="display:flex; gap:8px;">
                <button type="button" class="btn btn-outline btn-sm" id="quizPrevBtn" ${currentQ === 0 ? 'disabled' : ''}>← Prev</button>
                <button type="button" class="btn btn-outline btn-sm" id="quizNextBtn" ${currentQ === questions.length - 1 ? 'disabled' : ''}>Next →</button>
              </div>
              <button type="button" class="btn btn-primary btn-sm" id="quizSubmitBtn">Submit Quiz</button>
            </div>
          </div>
        `;
      }

      container.querySelectorAll('.tab-btn[data-cat]').forEach((btn) => {
        btn.addEventListener('click', () => {
          resetQuiz(btn.getAttribute('data-cat'));
        });
      });

      container.querySelectorAll('.quiz-option[data-opt-idx]').forEach((btn) => {
        btn.addEventListener('click', () => {
          answers[currentQ] = Number(btn.getAttribute('data-opt-idx'));
          render();
        });
      });

      const prevBtn = container.querySelector('#quizPrevBtn');
      if (prevBtn) prevBtn.addEventListener('click', () => { if (currentQ > 0) { currentQ -= 1; render(); } });

      const nextBtn = container.querySelector('#quizNextBtn');
      if (nextBtn) nextBtn.addEventListener('click', () => { if (currentQ < questions.length - 1) { currentQ += 1; render(); } });

      const submitBtn = container.querySelector('#quizSubmitBtn');
      if (submitBtn) submitBtn.addEventListener('click', () => { submitted = true; render(); });

      const restartBtn = container.querySelector('#quizRestartBtn');
      if (restartBtn) restartBtn.addEventListener('click', () => resetQuiz(activeCat));
    }

    startTimer();
    render();
  }

  window.SCHOLAR_TOOLS = {
    renderSgpaCalculator,
    renderAttendanceTracker,
    renderCodePlayground,
    renderFormulaSheets,
    renderResumeBuilder,
    renderMcqQuiz
  };
})();
