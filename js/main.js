/**
 * Sandeep Manchinasetti Portfolio - Ultra-Lightweight Zero-Dependency Engine
 * 100% Vanilla JS + WebGL. Zero External Libraries. 120 FPS Native Performance.
 */

// Icon SVG Dictionary
const ICON_SVGS = {
  "github": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
  "linkedin": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
  "twitter": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>',
  "instagram": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
  "mail": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  "command": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3z"/></svg>',
  "download": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>',
  "search": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  "home": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  "user": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  "code-2": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',
  "folder-git-2": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"/><circle cx="13" cy="12" r="2"/><path d="M13 14v4"/><circle cx="18" cy="19" r="2"/><path d="M13 18h3"/></svg>',
  "briefcase": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  "trophy": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>',
  "award": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
  "copy": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
  "external-link": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>',
  "arrow-right": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  "arrow-up-right": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" x2="17" y1="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>',
  "arrow-up": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="19" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
  "map-pin": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  "graduation-cap": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  "sparkles": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z"/></svg>',
  "shield-check": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
  "shield-alert": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>',
  "shield": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  "brain": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M12 5v13"/></svg>',
  "eye": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  "layout": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>',
  "terminal": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>',
  "server": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>',
  "layers": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  "cpu": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="12" height="12" x="6" y="6" rx="2"/><path d="M9 18v3M15 18v3M9 3v3M15 3v3M20 9h3M20 15h3M3 9h3M3 15h3"/></svg>',
  "building-2": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>',
  "scan-face": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>',
  "hand": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 0 1 2 2v4a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>',
  "map": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>',
  "check-circle": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
};

// Pure SVG Icon Renderer
function renderAllIcons(container = document) {
  const targets = container.querySelectorAll("[data-lucide]:not([data-lucide-rendered])");
  targets.forEach((el) => {
    const name = el.getAttribute("data-lucide");
    if (ICON_SVGS[name]) {
      const div = document.createElement("div");
      div.innerHTML = ICON_SVGS[name].trim();
      const svg = div.firstElementChild;
      if (svg) {
        svg.classList.add("lucide", `lucide-${name}`);
        svg.setAttribute("data-lucide-rendered", "true");
        el.replaceWith(svg);
      }
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => renderAllIcons());
} else {
  renderAllIcons();
}

document.addEventListener("DOMContentLoaded", () => {
  renderAllIcons();

  // Failsafe Page Loader Dismissal
  function dismissLoader() {
    const loader = document.getElementById("loader");
    if (loader && !loader.classList.contains("hidden")) {
      loader.classList.add("hidden");
      document.body.style.overflow = "auto";
      initNativeScrollAnimations();
    }
  }
  setTimeout(dismissLoader, 300);
  window.addEventListener("load", dismissLoader);



  // Toast Notification System
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toastMessage");
  let toastTimer = null;

  function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  // Global State for Mouse Tracking
  const mouse = {
    x: -100,
    y: -100,
    followerX: -100,
    followerY: -100,
    targetRotX: 0,
    targetRotY: 0,
    curRotX: 0,
    curRotY: 0
  };

  const cursor = document.getElementById("cursor");
  const cursorFollower = document.getElementById("cursorFollower");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    if (window.innerWidth > 0 && window.innerHeight > 0) {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.targetRotY = normX * 0.45;
      mouse.targetRotX = normY * 0.45;
    }
  }, { passive: true });

  const hoverElements = "a, button, .bento-card, .skill-card, .project-card, .timeline-card, .hackathon-card, .achievement-card, .contact-chip, .cloud-tag, .filter-btn, .project-filter-btn";
  document.querySelectorAll(hoverElements).forEach((el) => {
    el.addEventListener("mouseenter", () => {
      if (cursor && cursorFollower) {
        cursor.classList.add("active");
        cursorFollower.classList.add("active");
      }
    });
    el.addEventListener("mouseleave", () => {
      if (cursor && cursorFollower) {
        cursor.classList.remove("active");
        cursorFollower.classList.remove("active");
      }
    });
  });

  // Cached DOM elements for Avatar animations
  const cyberAvatar = document.getElementById("cyberAvatar");
  const boyHeadGroup = document.getElementById("boyHeadGroup");
  const leftPupil = document.getElementById("leftPupil");
  const rightPupil = document.getElementById("rightPupil");
  const leftReflect = document.getElementById("leftReflect");
  const rightReflect = document.getElementById("rightReflect");
  const pfpContainer = document.getElementById("pfpContainer");
  const reactiveEmoji = document.getElementById("reactiveEmoji");

  let avatarRect = null;
  function updateAvatarRect() {
    if (cyberAvatar) avatarRect = cyberAvatar.getBoundingClientRect();
  }
  updateAvatarRect();
  window.addEventListener("resize", updateAvatarRect, { passive: true });
  window.addEventListener("scroll", updateAvatarRect, { passive: true });

  // WebGL 3D Hero Scene Engine (Pure Native WebGL - 0 External Dependencies)
  const canvas = document.getElementById("webglCanvas");
  let heroInView = true;
  let tabVisible = true;

  document.addEventListener("visibilitychange", () => { tabVisible = !document.hidden; });

  const heroEl = document.getElementById("hero");
  if (heroEl && window.IntersectionObserver) {
    const heroObserver = new IntersectionObserver((entries) => {
      heroInView = entries[0].isIntersecting;
    }, { threshold: 0.05 });
    heroObserver.observe(heroEl);
  }

  let render3DFrame = null;

  if (canvas) {
    render3DFrame = initNativeWebGLScene(canvas);
  }

  // Unified Central Frame Engine Loop
  function renderLoop() {
    if (!prefersReducedMotion) {
      if (cursor && mouse.x > 0) {
        cursor.style.left = mouse.x + "px";
        cursor.style.top = mouse.y + "px";
      }
      if (cursorFollower && mouse.x > 0) {
        mouse.followerX += (mouse.x - mouse.followerX) * 0.14;
        mouse.followerY += (mouse.y - mouse.followerY) * 0.14;
        cursorFollower.style.left = mouse.followerX + "px";
        cursorFollower.style.top = mouse.followerY + "px";
      }

      if (cyberAvatar && avatarRect && tabVisible && mouse.x > 0) {
        const avatarCenterX = avatarRect.left + avatarRect.width / 2;
        const avatarCenterY = avatarRect.top + avatarRect.height / 2;
        const deltaX = mouse.x - avatarCenterX;
        const deltaY = mouse.y - avatarCenterY;
        const angle = Math.atan2(deltaY, deltaX);
        const dist = Math.min(Math.hypot(deltaX, deltaY) / 180, 1);

        const eyeOffsetX = Math.cos(angle) * (3 * dist);
        const eyeOffsetY = Math.sin(angle) * (3 * dist);

        if (leftPupil) {
          leftPupil.setAttribute("cx", 40 + eyeOffsetX);
          leftPupil.setAttribute("cy", 50 + eyeOffsetY);
        }
        if (rightPupil) {
          rightPupil.setAttribute("cx", 60 + eyeOffsetX);
          rightPupil.setAttribute("cy", 50 + eyeOffsetY);
        }
        if (leftReflect) {
          leftReflect.setAttribute("cx", 41 + eyeOffsetX * 0.8);
          leftReflect.setAttribute("cy", 49 + eyeOffsetY * 0.8);
        }
        if (rightReflect) {
          rightReflect.setAttribute("cx", 61 + eyeOffsetX * 0.8);
          rightReflect.setAttribute("cy", 49 + eyeOffsetY * 0.8);
        }

        if (boyHeadGroup) {
          const headRotate = (deltaX / window.innerWidth) * 15;
          const headTranslateY = (deltaY / window.innerHeight) * 4;
          boyHeadGroup.style.transform = `rotate(${headRotate}deg) translateY(${headTranslateY}px)`;
          boyHeadGroup.style.transformOrigin = "50px 75px";
        }
      }
    }

    if (render3DFrame && heroInView && tabVisible) {
      mouse.curRotY += (mouse.targetRotY - mouse.curRotY) * 0.05;
      mouse.curRotX += (mouse.targetRotX - mouse.curRotX) * 0.05;
      render3DFrame(mouse.curRotX, mouse.curRotY);
    }

    requestAnimationFrame(renderLoop);
  }
  requestAnimationFrame(renderLoop);

  // Typewriter effect
  const typewriterEl = document.getElementById("typewriter");
  const typewriterTexts = [
    "AI Security Engineer",
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "Computer Vision Architect"
  ];
  let textIdx = 0, charIdx = 0, isDeleting = false, typeSpeed = 90;

  function typewrite() {
    if (!typewriterEl) return;
    const current = typewriterTexts[textIdx];
    if (isDeleting) {
      typewriterEl.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      typeSpeed = 40;
    } else {
      typewriterEl.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      typeSpeed = 85;
    }

    if (!isDeleting && charIdx === current.length) {
      isDeleting = true;
      typeSpeed = 2200;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      textIdx = (textIdx + 1) % typewriterTexts.length;
      typeSpeed = 400;
    }
    setTimeout(typewrite, typeSpeed);
  }
  typewrite();

  // Native Scroll Reveal Animations (Replacing GSAP & ScrollTrigger)
  function initNativeScrollAnimations() {
    document.querySelectorAll(".gs-fade-up").forEach((el, idx) => {
      el.style.transitionDelay = `${(idx % 4) * 0.12}s`;
      el.classList.add("revealed");
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          if (entry.target.classList.contains("skill-card")) {
            const bar = entry.target.querySelector(".skill-progress-bar");
            if (bar) bar.style.width = bar.getAttribute("data-width");
          }
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal-up, .skill-card").forEach((el) => revealObserver.observe(el));
  }

  // Active Navbar Section Tracking via IntersectionObserver
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");
  const sections = document.querySelectorAll("section");

  if (window.IntersectionObserver && sections.length > 0) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          document.querySelectorAll(".nav-link").forEach((link) => {
            link.classList.toggle("active", link.getAttribute("data-section") === id);
          });
        }
      });
    }, { rootMargin: "-25% 0px -50% 0px" });

    sections.forEach((sec) => sectionObserver.observe(sec));
  }

  window.addEventListener("scroll", () => {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 40);
    if (backToTop) backToTop.classList.toggle("show", window.scrollY > 500);
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Mobile Navigation Drawer
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const navBackdrop = document.getElementById("navBackdrop");

  function closeMobileNav() {
    if (navLinks) navLinks.classList.remove("open");
    if (navToggle) navToggle.classList.remove("open");
    if (navBackdrop) navBackdrop.classList.remove("show");
    document.body.classList.remove("no-scroll");
  }

  function toggleMobileNav() {
    if (!navLinks) return;
    const isOpen = navLinks.classList.toggle("open");
    if (navToggle) navToggle.classList.toggle("open", isOpen);
    if (navBackdrop) navBackdrop.classList.toggle("show", isOpen);
    document.body.classList.toggle("no-scroll", isOpen);
  }

  if (navToggle) navToggle.addEventListener("click", toggleMobileNav);
  if (navBackdrop) navBackdrop.addEventListener("click", closeMobileNav);
  document.querySelectorAll(".nav-link, .mobile-nav-cta a").forEach((l) => l.addEventListener("click", closeMobileNav));

  // Category Filtering - Skills
  const skillBtns = document.querySelectorAll(".filter-btn");
  const skillCards = document.querySelectorAll(".skill-card");

  skillBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      skillBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      skillCards.forEach((card) => {
        const cat = card.getAttribute("data-category");
        if (filter === "all" || cat.includes(filter)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // Category Filtering - Projects
  const projectBtns = document.querySelectorAll(".project-filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  projectBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      projectBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-pfilter");
      projectCards.forEach((card) => {
        const cat = card.getAttribute("data-pcat");
        if (filter === "all" || cat === filter) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // Projects Quick View Data
  const projectsData = {
    college360: {
      category: "Full-Stack Web Application",
      title: "Campus Management System (College360)",
      desc: "Centralized digital portal designed to digitize university and college administrative processes with role-based JWT portals for students, faculty, and administrators.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST API"],
      features: [
        "Real-time attendance recording and auto-generated analytics.",
        "Role-based access control (Admin, Professor, Student).",
        "Interactive timetable scheduler and course registration.",
        "Secure student feedback system with real-time reporting."
      ],
      github: "https://github.com/sandeep2409-gitch/college360.git",
      demo: "https://college360-ibj2.vercel.app/"
    },
    phishing: {
      category: "AI & Cybersecurity",
      title: "ML Phishing Site Detector",
      desc: "Machine Learning security application inspecting Web URL parameters, SSL certificate data, and lexical domain features to flag malicious phishing attempts.",
      tech: ["Python", "Scikit-Learn", "NLP", "Flask", "Pandas", "HTML5/CSS3"],
      features: [
        "Analyzes 30+ structural & syntactic features of target web URLs.",
        "Trained classification model achieving high detection accuracy.",
        "Provides instant security score and safety warnings to users.",
        "Lightweight REST API backend built with Flask."
      ],
      github: "https://github.com/sandeep2409-gitch/phishing-detection-system-using-ml.git",
      demo: "#"
    },
    facerecog: {
      category: "Computer Vision & Biometrics",
      title: "Facial Recognition Attendance System V2",
      desc: "Automated biometric verification system designed to streamline attendance using camera feeds, neural face embeddings, and spoof prevention.",
      tech: ["Python", "OpenCV", "FaceNet / Dlib", "Flask", "SQLite", "GPS Geo-fencing"],
      features: [
        "Real-time face detection & recognition from live video streams.",
        "GPS location verification preventing proxy attendance.",
        "Fallback QR-code verification for registered users.",
        "Automated attendance report exports for faculty."
      ],
      github: "https://github.com/sandeep2409-gitch/FACE-RECOGNITION-SYSTEM-V2.git",
      demo: "https://github.com/sandeep2409-gitch/FACE-RECOGNITION-SYSTEM-V2.git"
    },
    signtotext: {
      category: "AI & Accessibility",
      title: "Sign Language to Text Converter",
      desc: "Accessibility technology project using high-speed computer vision hand keypoint tracking to interpret sign language gestures in real time into clear textual sentences.",
      tech: ["Python", "MediaPipe", "TensorFlow", "Keras", "OpenCV", "CNN"],
      features: [
        "21 3D landmark tracking per hand via MediaPipe gesture engine.",
        "Deep Learning CNN model trained on custom sign alphabet datasets.",
        "Sub-30ms real-time inference loop for smooth text conversion.",
        "Improves accessibility for hearing-impaired individuals."
      ],
      github: "https://github.com/sandeep2409-gitch/SIGN-TO-TEXT-CONVERT.git",
      demo: "#"
    },
    braintumor: {
      category: "Medical AI & Computer Vision",
      title: "AI Brain Tumor Prediction System",
      desc: "Medical imaging deep learning model trained on brain MRI scan datasets to identify tumors, assist radiologist diagnostics, and categorize tumor classifications.",
      tech: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV", "NumPy"],
      features: [
        "Convolutional Neural Network architecture optimized for MRI analysis.",
        "Pre-processes MRI slice images with contrast normalization.",
        "High diagnostic accuracy on multi-class brain tumor classification.",
        "Visual output highlighting regions of interest."
      ],
      github: "https://github.com/sandeep2409-gitch",
      demo: "#"
    },
    village: {
      category: "Interactive Web Application",
      title: "Village Explorer Platform",
      desc: "Interactive community discovery web platform bringing rural village history, local business directories, maps, and cultural resources online.",
      tech: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Interactive Maps"],
      features: [
        "Rich media galleries highlighting local culture and landmarks.",
        "Interactive map integration detailing public facilities & resources.",
        "Responsive, mobile-friendly design with zero latency.",
        "Community noticeboard and event announcements."
      ],
      github: "https://github.com/sandeep2409-gitch",
      demo: "#"
    }
  };

  const projectModal = document.getElementById("projectModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalTechList = document.getElementById("modalTechList");
  const modalFeaturesList = document.getElementById("modalFeaturesList");
  const modalGithubBtn = document.getElementById("modalGithubBtn");
  const modalDemoBtn = document.getElementById("modalDemoBtn");

  document.querySelectorAll(".btn-quick-view").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-project");
      const data = projectsData[key];
      if (!data) return;

      if (modalCategory) modalCategory.textContent = data.category;
      if (modalTitle) modalTitle.textContent = data.title;
      if (modalDesc) modalDesc.textContent = data.desc;
      if (modalTechList) modalTechList.innerHTML = data.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("");
      if (modalFeaturesList) modalFeaturesList.innerHTML = data.features.map((f) => `<li>${f}</li>`).join("");

      if (modalGithubBtn) modalGithubBtn.setAttribute("href", data.github);
      if (modalDemoBtn) {
        modalDemoBtn.setAttribute("href", data.demo);
        modalDemoBtn.style.display = data.demo === "#" ? "none" : "inline-flex";
      }

      if (projectModal) {
        projectModal.classList.add("open");
        renderAllIcons(projectModal);
      }
    });
  });

  function closeModal() { if (projectModal) projectModal.classList.remove("open"); }
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (projectModal) {
    projectModal.addEventListener("click", (e) => { if (e.target === projectModal) closeModal(); });
  }

  // Resume Modal Manager
  const resumeModal = document.getElementById("resumeModal");
  const resumeModalCloseBtn = document.getElementById("resumeModalCloseBtn");

  function openResumeModal(e) {
    if (e) e.preventDefault();
    if (resumeModal) {
      resumeModal.classList.add("open");
      renderAllIcons(resumeModal);
    }
    document.body.classList.add("no-scroll");
  }

  function closeResumeModal() {
    if (resumeModal) resumeModal.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }

  document.querySelectorAll(".nav-resume-btn, .btn-minimal-resume, [data-action='open-resume']").forEach((btn) => {
    btn.addEventListener("click", openResumeModal);
  });

  if (resumeModalCloseBtn) resumeModalCloseBtn.addEventListener("click", closeResumeModal);
  if (resumeModal) {
    resumeModal.addEventListener("click", (e) => { if (e.target === resumeModal) closeResumeModal(); });
  }

  // Command Palette Manager
  const cmdBackdrop = document.getElementById("cmdBackdrop");
  const cmdInput = document.getElementById("cmdInput");
  const cmdTriggerBtn = document.getElementById("cmdTriggerBtn");

  function openCmdPalette() {
    if (!cmdBackdrop) return;
    cmdBackdrop.classList.add("open");
    if (cmdInput) {
      cmdInput.value = "";
      cmdInput.focus();
    }
    filterCmdItems("");
    renderAllIcons(cmdBackdrop);
  }

  function closeCmdPalette() { if (cmdBackdrop) cmdBackdrop.classList.remove("open"); }

  if (cmdTriggerBtn) cmdTriggerBtn.addEventListener("click", openCmdPalette);
  if (cmdBackdrop) {
    cmdBackdrop.addEventListener("click", (e) => { if (e.target === cmdBackdrop) closeCmdPalette(); });
  }

  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      if (cmdBackdrop && cmdBackdrop.classList.contains("open")) closeCmdPalette();
      else openCmdPalette();
    }
    if (e.key === "Escape") {
      closeCmdPalette();
      closeModal();
      closeResumeModal();
    }
  });

  function filterCmdItems(query) {
    const q = query.toLowerCase().trim();
    document.querySelectorAll(".cmd-item").forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = (!q || text.includes(q)) ? "flex" : "none";
    });
  }

  if (cmdInput) {
    cmdInput.addEventListener("input", (e) => filterCmdItems(e.target.value));
  }

  document.querySelectorAll(".cmd-item").forEach((item) => {
    item.addEventListener("click", () => {
      const action = item.getAttribute("data-action");
      if (action === "nav") {
        const target = item.getAttribute("data-target");
        const sec = document.getElementById(target);
        if (sec) sec.scrollIntoView({ behavior: "smooth" });
      } else if (action === "copy-email") {
        navigator.clipboard.writeText("sandeepmanchinasetti007@gmail.com");
        showToast("Email address copied to clipboard!");
      } else if (action === "github") {
        window.open("https://github.com/sandeep2409-gitch", "_blank");
      } else if (action === "open-resume") {
        openResumeModal();
      }
      closeCmdPalette();
    });
  });

  // Clipboard Helpers
  const copyEmailChip = document.getElementById("copyEmailChip");
  if (copyEmailChip) {
    copyEmailChip.addEventListener("click", () => {
      navigator.clipboard.writeText("sandeepmanchinasetti007@gmail.com");
      showToast("Email copied: sandeepmanchinasetti007@gmail.com");
    });
  }

  const navEmailPill = document.getElementById("navEmailPill");
  if (navEmailPill) {
    navEmailPill.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.writeText("sandeepmanchinasetti007@gmail.com");
      showToast("Email copied: sandeepmanchinasetti007@gmail.com");
    });
  }

  const copyCodeBtn = document.getElementById("copyCodeBtn");
  if (copyCodeBtn) {
    copyCodeBtn.addEventListener("click", () => {
      const snippet = `const sandeep = {
  name: "Sandeep Manchinasetti",
  email: "sandeepmanchinasetti007@gmail.com",
  role: "AI Security Engineer & Full Stack Dev",
  openTo: ["Internships", "Full-time", "Projects"],
  hireable: () => true
};`;
      navigator.clipboard.writeText(snippet);
      showToast("Code snippet copied to clipboard!");
    });
  }

  // Interactive Profile Card Status
  const emojis = ["⚡", "🚀", "💻", "🤖", "🔥", "🛡️", "🔮", "🧠"];
  let emojiIdx = 0;

  if (pfpContainer && reactiveEmoji) {
    pfpContainer.addEventListener("mousemove", (e) => {
      const rect = pfpContainer.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const tiltX = (y / rect.height) * -20;
      const tiltY = (x / rect.width) * 20;

      reactiveEmoji.style.transform = `scale(1.25) translate(${x * 0.25}px, ${y * 0.25}px) rotate(${tiltY * 0.8}deg)`;
      if (cyberAvatar) {
        cyberAvatar.style.transform = `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      }
    }, { passive: true });

    pfpContainer.addEventListener("mouseleave", () => {
      reactiveEmoji.style.transform = `scale(1) translate(0px, 0px) rotate(0deg)`;
      if (cyberAvatar) {
        cyberAvatar.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
      }
    });

    reactiveEmoji.addEventListener("click", (e) => {
      e.stopPropagation();
      emojiIdx = (emojiIdx + 1) % emojis.length;
      reactiveEmoji.textContent = emojis[emojiIdx];
      reactiveEmoji.style.transform = `scale(1.6) rotate(360deg)`;
      setTimeout(() => { reactiveEmoji.style.transform = `scale(1.2) rotate(0deg)`; }, 250);
      showToast(`Profile status updated: ${emojis[emojiIdx]}`);
    });
  }
});

// High-Performance Native WebGL 3D Hero Scene (~3KB vs 600KB Three.js)
function initNativeWebGLScene(canvas) {
  const gl = canvas.getContext("webgl", { alpha: true, antialias: true, powerPreference: "high-performance" });
  if (!gl) return null;

  const vsSource = `
    attribute vec3 aPosition;
    attribute vec3 aNormal;
    uniform mat4 uMVP;
    uniform mat4 uModel;
    varying vec3 vNormal;
    varying vec3 vPos;
    void main() {
      vPos = (uModel * vec4(aPosition, 1.0)).xyz;
      vNormal = mat3(uModel) * aNormal;
      gl_Position = uMVP * vec4(aPosition, 1.0);
    }
  `;

  const fsSource = `
    precision mediump float;
    varying vec3 vNormal;
    varying vec3 vPos;
    uniform float uWireframe;

    void main() {
      if (uWireframe > 0.5) {
        gl_FragColor = vec4(0.75, 0.52, 0.98, 0.35);
        return;
      }
      vec3 N = normalize(vNormal);
      vec3 L1 = normalize(vec3(4.0, 4.0, 5.0) - vPos);
      vec3 L2 = normalize(vec3(-4.0, -2.0, 3.0) - vPos);
      vec3 V = normalize(vec3(0.0, 0.0, 7.0) - vPos);

      float diff1 = max(dot(N, L1), 0.0);
      float diff2 = max(dot(N, L2), 0.0);

      vec3 R = reflect(-L1, N);
      float spec = pow(max(dot(V, R), 0.0), 24.0);

      vec3 color = vec3(0.18, 0.08, 0.3) * 0.4 +
                   vec3(0.66, 0.33, 0.97) * diff1 * 0.85 +
                   vec3(0.22, 0.74, 0.97) * diff2 * 0.45 +
                   vec3(0.9, 0.7, 1.0) * spec * 0.75;

      gl_FragColor = vec4(color, 0.95);
    }
  `;

  function createShader(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  }

  const prog = gl.createProgram();
  gl.attachShader(prog, createShader(gl.VERTEX_SHADER, vsSource));
  gl.attachShader(prog, createShader(gl.FRAGMENT_SHADER, fsSource));
  gl.linkProgram(prog);
  gl.useProgram(prog);

  const locs = {
    pos: gl.getAttribLocation(prog, "aPosition"),
    norm: gl.getAttribLocation(prog, "aNormal"),
    uMVP: gl.getUniformLocation(prog, "uMVP"),
    uModel: gl.getUniformLocation(prog, "uModel"),
    uWireframe: gl.getUniformLocation(prog, "uWireframe")
  };

  // Build TorusKnot geometry
  const knot = buildTorusKnotMesh(2, 3, 1.15, 0.35, 80, 20);
  const knotPosBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, knotPosBuf);
  gl.bufferData(gl.ARRAY_BUFFER, knot.positions, gl.STATIC_DRAW);

  const knotNormBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, knotNormBuf);
  gl.bufferData(gl.ARRAY_BUFFER, knot.normals, gl.STATIC_DRAW);

  const knotIdxBuf = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, knotIdxBuf);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, knot.indices, gl.STATIC_DRAW);

  // Build Icosahedron Wireframe geometry
  const ico = buildIcosahedronWireframe(2.15);
  const icoPosBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, icoPosBuf);
  gl.bufferData(gl.ARRAY_BUFFER, ico.positions, gl.STATIC_DRAW);

  const icoIdxBuf = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, icoIdxBuf);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, ico.indices, gl.STATIC_DRAW);

  gl.enable(gl.DEPTH_TEST);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  let width = 0, height = 0;
  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * Math.min(window.devicePixelRatio, 1.5);
    canvas.height = height * Math.min(window.devicePixelRatio, 1.5);
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  resize();
  window.addEventListener("resize", resize, { passive: true });

  let time = 0;
  return function render(rotX, rotY) {
    time += 0.015;

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const aspect = width / (height || 1);
    const pMat = mat4Perspective(45, aspect, 0.1, 100);

    // TorusKnot Model Matrix
    let mMat = mat4Identity();
    mMat = mat4Translate(mMat, [0, Math.sin(time * 1.2) * 0.15, 0]);
    mMat = mat4RotateY(mMat, rotY + time * 0.35);
    mMat = mat4RotateX(mMat, rotX + time * 0.25);

    let mvpMat = mat4Multiply(pMat, mat4Translate(mat4Identity(), [0, 0, -6.5]));
    let finalMVP = mat4Multiply(mvpMat, mMat);

    gl.uniformMatrix4fv(locs.uMVP, false, finalMVP);
    gl.uniformMatrix4fv(locs.uModel, false, mMat);
    gl.uniform1f(locs.uWireframe, 0.0);

    gl.bindBuffer(gl.ARRAY_BUFFER, knotPosBuf);
    gl.vertexAttribPointer(locs.pos, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(locs.pos);

    gl.bindBuffer(gl.ARRAY_BUFFER, knotNormBuf);
    gl.vertexAttribPointer(locs.norm, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(locs.norm);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, knotIdxBuf);
    gl.drawElements(gl.TRIANGLES, knot.indices.length, gl.UNSIGNED_SHORT, 0);

    // Wireframe Outer Mesh Matrix
    let icoMat = mat4Identity();
    icoMat = mat4Translate(icoMat, [0, Math.sin(time * 1.2) * 0.15, 0]);
    icoMat = mat4RotateY(icoMat, rotY - time * 0.2);
    icoMat = mat4RotateX(icoMat, rotX - time * 0.15);

    let icoMVP = mat4Multiply(mvpMat, icoMat);
    gl.uniformMatrix4fv(locs.uMVP, false, icoMVP);
    gl.uniformMatrix4fv(locs.uModel, false, icoMat);
    gl.uniform1f(locs.uWireframe, 1.0);

    gl.bindBuffer(gl.ARRAY_BUFFER, icoPosBuf);
    gl.vertexAttribPointer(locs.pos, 3, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, icoIdxBuf);
    gl.drawElements(gl.LINES, ico.indices.length, gl.UNSIGNED_SHORT, 0);
  };
}

// 3D Matrix Math Helpers
function mat4Identity() {
  return new Float32Array([1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1]);
}
function mat4Perspective(fovDeg, aspect, near, far) {
  const f = 1.0 / Math.tan((fovDeg * Math.PI / 180) / 2);
  const nf = 1.0 / (near - far);
  return new Float32Array([
    f / aspect, 0, 0, 0,
    0, f, 0, 0,
    0, 0, (far + near) * nf, -1,
    0, 0, (2 * far * near) * nf, 0
  ]);
}
function mat4Translate(m, v) {
  const out = new Float32Array(m);
  out[12] += v[0]; out[13] += v[1]; out[14] += v[2];
  return out;
}
function mat4RotateX(m, rad) {
  const c = Math.cos(rad), s = Math.sin(rad);
  const out = new Float32Array(m);
  const a10=m[4], a11=m[5], a12=m[6], a13=m[7], a20=m[8], a21=m[9], a22=m[10], a23=m[11];
  out[4] = a10*c + a20*s; out[5] = a11*c + a21*s; out[6] = a12*c + a22*s; out[7] = a13*c + a23*s;
  out[8] = a20*c - a10*s; out[9] = a21*c - a11*s; out[10] = a22*c - a12*s; out[11] = a23*c - a13*s;
  return out;
}
function mat4RotateY(m, rad) {
  const c = Math.cos(rad), s = Math.sin(rad);
  const out = new Float32Array(m);
  const a00=m[0], a01=m[1], a02=m[2], a03=m[3], a20=m[8], a21=m[9], a22=m[10], a23=m[11];
  out[0] = a00*c - a20*s; out[1] = a01*c - a21*s; out[2] = a02*c - a22*s; out[3] = a03*c - a23*s;
  out[8] = a00*s + a20*c; out[9] = a01*s + a21*c; out[10] = a02*s + a22*c; out[11] = a03*s + a23*c;
  return out;
}
function mat4Multiply(a, b) {
  const out = new Float32Array(16);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      out[j * 4 + i] = a[i] * b[j * 4] + a[i + 4] * b[j * 4 + 1] + a[i + 8] * b[j * 4 + 2] + a[i + 12] * b[j * 4 + 3];
    }
  }
  return out;
}

// Geometry Builders
function buildTorusKnotMesh(p, q, R, r, tubularSegs, radialSegs) {
  const pos = [], norm = [], idx = [];
  for (let i = 0; i <= tubularSegs; i++) {
    const u = (i / tubularSegs) * Math.PI * 2;
    const cu = Math.cos(u), su = Math.sin(u);
    const quP = (q / p) * u;
    const cqu = Math.cos(quP), squ = Math.sin(quP);

    const rad = R * (0.6 + 0.4 * cqu);
    const p1 = [rad * Math.cos(p * u), rad * Math.sin(p * u), rad * squ * 0.8];
    const p2 = [(R * (0.6 + 0.4 * Math.cos((q/p)*(u+0.01)))) * Math.cos(p*(u+0.01)), (R * (0.6 + 0.4 * Math.cos((q/p)*(u+0.01)))) * Math.sin(p*(u+0.01)), (R * (0.6 + 0.4 * Math.cos((q/p)*(u+0.01)))) * Math.sin((q/p)*(u+0.01)) * 0.8];

    const T = [p2[0]-p1[0], p2[1]-p1[1], p2[2]-p1[2]];
    let len = Math.hypot(T[0], T[1], T[2]) || 1;
    T[0]/=len; T[1]/=len; T[2]/=len;

    const N = [p1[0], p1[1], p1[2]];
    len = Math.hypot(N[0], N[1], N[2]) || 1;
    N[0]/=len; N[1]/=len; N[2]/=len;

    const B = [T[1]*N[2]-T[2]*N[1], T[2]*N[0]-T[0]*N[2], T[0]*N[1]-T[1]*N[0]];
    const Nr = [B[1]*T[2]-B[2]*T[1], B[2]*T[0]-B[0]*T[2], B[0]*T[1]-B[1]*T[0]];

    for (let j = 0; j <= radialSegs; j++) {
      const v = (j / radialSegs) * Math.PI * 2;
      const cx = -r * Math.cos(v), cy = r * Math.sin(v);
      const nx = cx * Nr[0] + cy * B[0], ny = cx * Nr[1] + cy * B[1], nz = cx * Nr[2] + cy * B[2];
      let nLen = Math.hypot(nx, ny, nz) || 1;

      pos.push(p1[0] + nx, p1[1] + ny, p1[2] + nz);
      norm.push(nx/nLen, ny/nLen, nz/nLen);
    }
  }

  for (let i = 0; i < tubularSegs; i++) {
    for (let j = 0; j < radialSegs; j++) {
      const a = i * (radialSegs + 1) + j;
      const b = a + 1;
      const c = (i + 1) * (radialSegs + 1) + j + 1;
      const d = (i + 1) * (radialSegs + 1) + j;
      idx.push(a, b, d, b, c, d);
    }
  }
  return { positions: new Float32Array(pos), normals: new Float32Array(norm), indices: new Uint16Array(idx) };
}

function buildIcosahedronWireframe(radius) {
  const t = (1 + Math.sqrt(5)) / 2;
  const raw = [
    [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
    [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
    [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]
  ];
  const pos = [];
  raw.forEach(v => {
    const len = Math.hypot(v[0], v[1], v[2]);
    pos.push((v[0] / len) * radius, (v[1] / len) * radius, (v[2] / len) * radius);
  });
  const idx = [];
  for (let i = 0; i < 12; i++) {
    for (let j = i + 1; j < 12; j++) {
      const dx = pos[i*3]-pos[j*3], dy = pos[i*3+1]-pos[j*3+1], dz = pos[i*3+2]-pos[j*3+2];
      if (Math.abs(Math.hypot(dx, dy, dz) - radius * 1.0514) < 0.2) {
        idx.push(i, j);
      }
    }
  }
  return { positions: new Float32Array(pos), indices: new Uint16Array(idx) };
}