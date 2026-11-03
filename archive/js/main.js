/**
 * Sandeep Manchinasetti — Editorial Portfolio Scripts
 * Handles folio page tracking, smooth chapter navigation, project indexing,
 * clipboard feedback, dark mode theme engine, live auto-calculating streak,
 * and intersection-observed scroll reveals.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const sections = [...document.querySelectorAll('[data-section]')];
  const navLinks = [...document.querySelectorAll('[data-nav]')];
  const folioPage = document.getElementById('folioPage');
  const revealElements = document.querySelectorAll('.reveal');
  const projectEntries = [...document.querySelectorAll('.project-entry')];
  const tocButtons = [...document.querySelectorAll('.toc-item')];
  const toast = document.getElementById('editorialToast');
  const toastMsg = document.getElementById('toastMessage');

  // =========================================================================
  // 1. Live Daily Streak Calculation
  // Baseline: 50 days as of November 3, 2026.
  // Updates automatically every day at midnight without hardcoding!
  // =========================================================================
  const getLiveStreak = () => {
    const anchorYear = 2026;
    const anchorMonth = 10; // Month is 0-indexed: 10 = November
    const anchorDay = 3;
    const baseStreak = 50;

    const anchorDate = new Date(anchorYear, anchorMonth, anchorDay);
    const now = new Date();
    
    // Normalize to midnight for accurate whole-day counting
    const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const anchorMidnight = new Date(anchorDate.getFullYear(), anchorDate.getMonth(), anchorDate.getDate());

    const diffMs = todayMidnight.getTime() - anchorMidnight.getTime();
    const daysElapsed = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));

    return baseStreak + daysElapsed;
  };

  const liveStreakValue = getLiveStreak();

  // Populate all streak elements across the document
  document.querySelectorAll('.js-live-streak').forEach(el => {
    el.textContent = liveStreakValue;
  });

  // Set counter target for streak metric
  document.querySelectorAll('.metric-count[data-counter-type="streak"]').forEach(el => {
    el.setAttribute('data-target', liveStreakValue);
  });

  // =========================================================================
  // 2. Dark Mode Engine
  // =========================================================================
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const mobileThemeToggleBtn = document.getElementById('mobileThemeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const mobileThemeIcon = document.getElementById('mobileThemeIcon');
  const themeTooltip = document.getElementById('themeTooltip');

  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('sandeep-portfolio-theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sandeep-portfolio-theme', theme);

    const isDark = theme === 'dark';
    const iconChar = isDark ? '☀️' : '🌙';
    const tooltipText = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';

    if (themeIcon) themeIcon.textContent = iconChar;
    if (mobileThemeIcon) mobileThemeIcon.textContent = iconChar;
    if (themeTooltip) themeTooltip.textContent = tooltipText;

    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label', tooltipText);
    }
    if (mobileThemeToggleBtn) {
      mobileThemeToggleBtn.setAttribute('aria-label', tooltipText);
    }
  };

  applyTheme(getPreferredTheme());

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    showToast(`Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} editorial mode.`);
  };

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleTheme);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('sandeep-portfolio-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // =========================================================================
  // 3. Toast Notification Helper
  // =========================================================================
  let toastTimer = null;
  const showToast = (message = 'Copied to clipboard.') => {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.add('is-active');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('is-active');
    }, 2800);
  };

  // =========================================================================
  // 4. Clipboard Helpers
  // =========================================================================
  const copyEmailToClipboard = () => {
    const email = 'sandeepmanchinasetti007@gmail.com';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(() => showToast(`Copied ${email} to clipboard.`))
        .catch(() => fallbackCopy(email));
    } else {
      fallbackCopy(email);
    }
  };

  const fallbackCopy = (text) => {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(`Copied ${text} to clipboard.`);
    } catch (err) {
      showToast('Please copy manually: sandeepmanchinasetti007@gmail.com');
    }
    document.body.removeChild(tempInput);
  };

  const copyHeroBtn = document.getElementById('copyHeroEmailBtn');
  if (copyHeroBtn) copyHeroBtn.addEventListener('click', copyEmailToClipboard);

  const copyFooterBtn = document.getElementById('copyFooterEmailBtn');
  if (copyFooterBtn) copyFooterBtn.addEventListener('click', copyEmailToClipboard);

  const copyContactBtn = document.getElementById('copyContactEmailBtn');
  if (copyContactBtn) copyContactBtn.addEventListener('click', copyEmailToClipboard);

  document.querySelectorAll('.js-copy-email').forEach(btn => {
    btn.addEventListener('click', copyEmailToClipboard);
  });

  // =========================================================================
  // 5. Minimalist Live Counter Animation
  // =========================================================================
  const countElements = document.querySelectorAll('.metric-count[data-target]');

  if ('IntersectionObserver' in window && countElements.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const isDecimal = el.getAttribute('data-decimal') === 'true';
        const duration = 1400; // ms
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = easeProgress * target;

          if (isDecimal) {
            el.textContent = currentVal.toFixed(1);
          } else {
            el.textContent = Math.floor(currentVal);
          }

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = isDecimal ? target.toFixed(1) : target;
          }
        };

        requestAnimationFrame(updateCounter);
        observer.unobserve(el);
      });
    }, {
      threshold: 0.15
    });

    countElements.forEach(el => counterObserver.observe(el));
  } else {
    countElements.forEach(el => {
      const target = el.getAttribute('data-target');
      const isDecimal = el.getAttribute('data-decimal') === 'true';
      el.textContent = isDecimal ? parseFloat(target).toFixed(1) : target;
    });
  }

  // =========================================================================
  // 6. Project TOC Index Navigation
  // =========================================================================
  const highlightProject = (targetId) => {
    projectEntries.forEach(entry => {
      const isTarget = entry.id === targetId;
      entry.classList.toggle('is-highlighted', isTarget);
    });

    tocButtons.forEach(btn => {
      const isCurrent = btn.dataset.target === targetId;
      btn.classList.toggle('is-active', isCurrent);
    });
  };

  tocButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        highlightProject(targetId);
      }
    });
  });

  projectEntries.forEach(entry => {
    entry.addEventListener('mouseenter', () => highlightProject(entry.id));
    entry.addEventListener('focusin', () => highlightProject(entry.id));
  });

  // =========================================================================
  // 7. Folio Chapter & Section Observer
  // =========================================================================
  const bubbleNav = document.getElementById('bubbleNav');

  if ('IntersectionObserver' in window) {
    const chapterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const { section, folio } = entry.target.dataset;

        if (folioPage && folio) {
          folioPage.textContent = folio;
        }

        if (bubbleNav) {
          bubbleNav.classList.toggle('dock-dark', section === 'work');
          bubbleNav.classList.toggle('dock-blue', section === 'contact');
        }

        navLinks.forEach(link => {
          const isActive = link.dataset.nav === section;
          link.classList.toggle('is-active', isActive);
          if (isActive) {
            link.setAttribute('aria-current', 'true');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    }, {
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    });

    sections.forEach(section => chapterObserver.observe(section));

    // =======================================================================
    // 8. Scroll Reveal Observer
    // =======================================================================
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.05
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // =========================================================================
  // 9. Hero Scrolling Roller Animation:
  // "Real-World Experience ↕ Artificial Intelligence"
  // Supports:
  // - Smooth auto-cycle between the two concepts
  // - Interactive click / keypress toggle
  // - Scroll-driven transition as user scrolls down/up the page
  // =========================================================================
  const rollerTrack = document.getElementById('heroRollerTrack');
  const rollerBox = document.getElementById('heroRollerBox');
  const rollerArrow = document.getElementById('heroRollerArrow');

  if (rollerTrack) {
    let currentIndex = 0; // 0 = Real-World Experience, 1 = Artificial Intelligence
    let isUserLocked = false;
    let unlockTimer = null;
    let autoRotateTimer = null;

    const setRollerState = (index) => {
      currentIndex = index % 2;
      const translateY = currentIndex === 0 ? '0%' : '-50%';
      rollerTrack.style.transform = `translateY(${translateY})`;
      if (rollerArrow) {
        rollerArrow.style.transform = currentIndex === 1 ? 'rotate(180deg) scale(1.15)' : 'rotate(0deg) scale(1)';
      }
    };

    // 1. Automatic gentle cycle every 3.2 seconds
    const startAutoCycle = () => {
      if (autoRotateTimer) clearInterval(autoRotateTimer);
      autoRotateTimer = setInterval(() => {
        if (!isUserLocked && window.scrollY < 120) {
          setRollerState(currentIndex === 0 ? 1 : 0);
        }
      }, 3200);
    };

    startAutoCycle();

    // 2. Click or Keyboard trigger
    const handleUserToggle = () => {
      isUserLocked = true;
      setRollerState(currentIndex === 0 ? 1 : 0);
      if (unlockTimer) clearTimeout(unlockTimer);
      unlockTimer = setTimeout(() => {
        isUserLocked = false;
      }, 5000);
    };

    if (rollerBox) {
      rollerBox.addEventListener('click', handleUserToggle);
      rollerBox.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleUserToggle();
        }
      });
    }

    // 3. Scroll-linked reaction: scrolling down rolls to "Artificial Intelligence",
    // scrolling back to top rolls back to "Real-World Experience"
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (!isUserLocked) {
            if (scrollY > 70 && currentIndex === 0) {
              setRollerState(1);
            } else if (scrollY <= 20 && currentIndex === 1) {
              setRollerState(0);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
});
