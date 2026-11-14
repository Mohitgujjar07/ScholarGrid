/**
 * ScholarGrid — Modern Landing Page Client Controller
 * Lightweight, accessible, zero-dependency vanilla JavaScript
 */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', initLandingPage);

  function initLandingPage() {
    initScrollHeader();
    initMobileMenu();
    initAnimatedCounters();
    initSemesterAccordions();
    initInteractiveDemos();
    initAnchorLinks();
  }

  /**
   * Sticky Header Blur on Scroll
   */
  function initScrollHeader() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /**
   * Mobile Navigation Hamburger Drawer
   */
  function initMobileMenu() {
    const toggleBtn = document.getElementById('mobileMenuBtn');
    const drawer = document.getElementById('mobileMenuDrawer');
    if (!toggleBtn || !drawer) return;

    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', String(isOpen));
      toggleBtn.innerHTML = isOpen 
        ? '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>';
    });

    // Close on link click
    const mobileLinks = drawer.querySelectorAll('.nav-link, .btn-launch-primary');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>';
      });
    });
  }

  /**
   * Viewport-triggered Animated Number Counters for Statistics
   */
  function initAnimatedCounters() {
    const statElements = document.querySelectorAll('[data-counter-target]');
    if (!statElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-counter-target'), 10);
          const prefix = el.getAttribute('data-counter-prefix') || '';
          const suffix = el.getAttribute('data-counter-suffix') || '';
          const padZero = el.getAttribute('data-counter-pad') === 'true';

          animateValue(el, 0, target, 1200, prefix, suffix, padZero);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    statElements.forEach(el => observer.observe(el));
  }

  function animateValue(element, start, end, duration, prefix, suffix, padZero) {
    if (start === end) {
      element.textContent = prefix + (padZero && end < 10 ? '0' + end : end) + suffix;
      return;
    }

    const startTime = performance.now();
    const step = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // easeOutExpo easing curve
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * (end - start) + start);
      
      let formatted = String(current);
      if (padZero && current < 10) {
        formatted = '0' + formatted;
      }
      
      element.textContent = prefix + formatted + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        let finalVal = String(end);
        if (padZero && end < 10) finalVal = '0' + finalVal;
        element.textContent = prefix + finalVal + suffix;
      }
    };

    requestAnimationFrame(step);
  }

  /**
   * Expandable Semester Accordion Cards
   */
  function initSemesterAccordions() {
    const toggleButtons = document.querySelectorAll('.sem-toggle-btn');
    toggleButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.sem-card');
        if (!card) return;

        const isExpanded = card.classList.toggle('expanded');
        btn.setAttribute('aria-expanded', String(isExpanded));
        const btnText = btn.querySelector('.toggle-text');
        if (btnText) {
          btnText.textContent = isExpanded ? 'Hide syllabus details' : 'Show full syllabus details';
        }
      });
    });
  }

  /**
   * Interactive Micro-Demos inside Student Tools Section
   */
  function initInteractiveDemos() {
    // 1. SGPA Demo Interactive Calculation
    const semSelect = document.getElementById('demoSem');
    const gradeSelect1 = document.getElementById('demoGrade1');
    const gradeSelect2 = document.getElementById('demoGrade2');
    const sgpaValDisplay = document.getElementById('demoSgpaVal');
    const sgpaPctDisplay = document.getElementById('demoSgpaPct');

    function updateSgpaDemo() {
      if (!gradeSelect1 || !gradeSelect2 || !sgpaValDisplay) return;
      const g1 = parseFloat(gradeSelect1.value) || 10;
      const g2 = parseFloat(gradeSelect2.value) || 9;
      // Weighted sample: (g1 * 4 + g2 * 4 + 9 * 4 + 10 * 4 + 9 * 4 + 10 * 4) / 24
      const totalPoints = (g1 * 4) + (g2 * 4) + (9.5 * 4) + (10 * 4) + (9 * 4) + (9 * 4);
      const sgpa = (totalPoints / 24).toFixed(2);
      const pct = ((sgpa - 0.75) * 10).toFixed(1);

      sgpaValDisplay.textContent = sgpa;
      if (sgpaPctDisplay) {
        sgpaPctDisplay.textContent = `Approx. ${pct}% Marks`;
      }
    }

    if (gradeSelect1 && gradeSelect2) {
      gradeSelect1.addEventListener('change', updateSgpaDemo);
      gradeSelect2.addEventListener('change', updateSgpaDemo);
    }

    // 2. MCQ Preview Interactive Click
    const mcqButtons = document.querySelectorAll('.quiz-opt-btn');
    const feedbackBox = document.getElementById('quizPreviewFeedback');

    mcqButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        mcqButtons.forEach(b => b.classList.remove('selected', 'correct', 'wrong'));
        const isCorrect = btn.getAttribute('data-correct') === 'true';

        if (isCorrect) {
          btn.classList.add('correct');
          if (feedbackBox) {
            feedbackBox.style.display = 'block';
            feedbackBox.innerHTML = '<span style="color:#2563EB;font-weight:600;">✓ Correct!</span> <code>a++</code> uses 5 then becomes 6; <code>++a</code> becomes 7 then uses 7. 5 + 7 = <strong>12</strong>.';
          }
        } else {
          btn.classList.add('wrong');
          if (feedbackBox) {
            feedbackBox.style.display = 'block';
            feedbackBox.innerHTML = '<span style="color:#EF4444;font-weight:600;">✕ Incorrect.</span> Remember post-increment returns current value before incrementing.';
          }
        }
      });
    });
  }

  /**
   * Smooth Anchor Scrolling with Offset for Sticky Nav
   */
  function initAnchorLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || !targetId) return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const navHeight = 72;
          const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
          });
        }
      });
    });
  }

})();
