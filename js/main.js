/**
 * Sandeep Manchinasetti — Editorial Portfolio Scripts
 * Handles folio page tracking, smooth chapter navigation, project indexing,
 * clipboard feedback, and intersection-observed scroll reveals.
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

  // 1. Toast Notification Helper
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

  // 2. Clipboard Helpers
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

  // 3. Project TOC Index Navigation
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

  // 4. Folio Chapter & Section Observer
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

    // 5. Scroll Reveal Observer
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
    // Fallback for older browsers without IntersectionObserver
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
});
