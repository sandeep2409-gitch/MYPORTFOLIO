

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

function renderAllIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    try { window.lucide.createIcons(); } catch (e) {}
  }
  document.querySelectorAll("[data-lucide]").forEach((el) => {
    const name = el.getAttribute("data-lucide");
    if (ICON_SVGS[name]) {
      const div = document.createElement("div");
      div.innerHTML = ICON_SVGS[name].trim();
      const svg = div.firstElementChild;
      if (svg) {
        svg.classList.add("lucide", `lucide-${name}`);
        el.replaceWith(svg);
      }
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderAllIcons);
} else {
  renderAllIcons();
}
window.addEventListener("load", renderAllIcons);

document.addEventListener("DOMContentLoaded", () => {
  renderAllIcons();

  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    renderAllIcons();
    setTimeout(() => {
      loader.classList.add("hidden");
      document.body.style.overflow = "auto";
      initGSAPAnimations();
      renderAllIcons();
    }, 1200);
  });
  document.body.style.overflow = "hidden";

  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toastMessage");
  let toastTimer;

  function showToast(msg) {
    toastMessage.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  let lenis;
  if (window.Lenis) {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  const cursor = document.getElementById("cursor");
  const cursorFollower = document.getElementById("cursorFollower");
  let mouseX = -100, mouseY = -100;
  let followerX = -100, followerY = -100;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    cursorFollower.style.left = followerX + "px";
    cursorFollower.style.top = followerY + "px";
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  const hoverElements = "a, button, .bento-card, .skill-card, .project-card, .timeline-card, .hackathon-card, .achievement-card, .contact-chip, .cloud-tag, .filter-btn, .project-filter-btn";
  document.querySelectorAll(hoverElements).forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("active");
      cursorFollower.classList.add("active");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");
      cursorFollower.classList.remove("active");
    });
  });

  const canvas = document.getElementById("webglCanvas");
  if (canvas && window.THREE) {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.TorusKnotGeometry(1.2, 0.38, 128, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0x9333ea,
      metalness: 0.85,
      roughness: 0.2,
      wireframe: false
    });
    const coreMesh = new THREE.Mesh(geometry, material);
    group.add(coreMesh);

    const outerGeo = new THREE.IcosahedronGeometry(2.2, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    group.add(outerMesh);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const purplePointLight = new THREE.PointLight(0xa855f7, 3, 20);
    purplePointLight.position.set(0, 0, 4);
    scene.add(purplePointLight);

    const cyanPointLight = new THREE.PointLight(0x00f2fe, 2, 20);
    cyanPointLight.position.set(3, 3, 2);
    scene.add(cyanPointLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    let targetRotX = 0, targetRotY = 0;
    window.addEventListener("mousemove", (e) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotY = normX * 0.45;
      targetRotX = normY * 0.45;
    });

    let clock = new THREE.Clock();
    function animate3D() {
      const elapsedTime = clock.getElapsedTime();

      coreMesh.rotation.x = elapsedTime * 0.25;
      coreMesh.rotation.y = elapsedTime * 0.35;
      outerMesh.rotation.x = -elapsedTime * 0.15;
      outerMesh.rotation.y = -elapsedTime * 0.2;

      group.position.y = Math.sin(elapsedTime * 1.2) * 0.15;

      group.rotation.y += (targetRotY - group.rotation.y) * 0.05;
      group.rotation.x += (targetRotX - group.rotation.x) * 0.05;

      renderer.render(scene, camera);
      requestAnimationFrame(animate3D);
    }
    animate3D();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
  }

  const typewriterEl = document.getElementById("typewriter");
  const typewriterTexts = [
    "AI Security Engineer",
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "Computer Vision Architect"
  ];
  let textIdx = 0, charIdx = 0, isDeleting = false, typeSpeed = 90;

  function typewrite() {
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

  function initGSAPAnimations() {
    if (window.gsap) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".gs-fade-up", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });

      const revealElements = document.querySelectorAll(".reveal-up");
      revealElements.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          onEnter: () => {
            el.classList.add("revealed");
            if (el.classList.contains("skill-card")) {
              const bar = el.querySelector(".skill-progress-bar");
              if (bar) bar.style.width = bar.getAttribute("data-width");
            }
          }
        });
      });
    }
  }

  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
    backToTop.classList.toggle("show", window.scrollY > 500);

    let currentSec = "";
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        currentSec = sec.getAttribute("id");
      }
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.toggle("active", link.getAttribute("data-section") === currentSec);
    });
  });

  backToTop.addEventListener("click", () => {
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  });

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

      modalCategory.textContent = data.category;
      modalTitle.textContent = data.title;
      modalDesc.textContent = data.desc;
      modalTechList.innerHTML = data.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("");
      modalFeaturesList.innerHTML = data.features.map((f) => `<li>${f}</li>`).join("");

      modalGithubBtn.setAttribute("href", data.github);
      modalDemoBtn.setAttribute("href", data.demo);
      modalDemoBtn.style.display = data.demo === "#" ? "none" : "inline-flex";

      projectModal.classList.add("open");
      renderAllIcons();
    });
  });

  function closeModal() { projectModal.classList.remove("open"); }
  modalCloseBtn.addEventListener("click", closeModal);
  projectModal.addEventListener("click", (e) => { if (e.target === projectModal) closeModal(); });

  const cmdBackdrop = document.getElementById("cmdBackdrop");
  const cmdInput = document.getElementById("cmdInput");
  const cmdTriggerBtn = document.getElementById("cmdTriggerBtn");

  function openCmdPalette() {
    cmdBackdrop.classList.add("open");
    cmdInput.value = "";
    cmdInput.focus();
    filterCmdItems("");
    renderAllIcons();
  }

  function closeCmdPalette() { cmdBackdrop.classList.remove("open"); }
  cmdTriggerBtn.addEventListener("click", openCmdPalette);
  cmdBackdrop.addEventListener("click", (e) => { if (e.target === cmdBackdrop) closeCmdPalette(); });

  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      if (cmdBackdrop.classList.contains("open")) closeCmdPalette();
      else openCmdPalette();
    }
    if (e.key === "Escape") {
      closeCmdPalette();
      closeModal();
    }
  });

  function filterCmdItems(query) {
    const q = query.toLowerCase().trim();
    document.querySelectorAll(".cmd-item").forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = (!q || text.includes(q)) ? "flex" : "none";
    });
  }

  cmdInput.addEventListener("input", (e) => filterCmdItems(e.target.value));

  document.querySelectorAll(".cmd-item").forEach((item) => {
    item.addEventListener("click", () => {
      const action = item.getAttribute("data-action");
      if (action === "nav") {
        const target = item.getAttribute("data-target");
        const sec = document.getElementById(target);
        if (sec) {
          if (lenis) lenis.scrollTo(sec);
          else sec.scrollIntoView({ behavior: "smooth" });
        }
      } else if (action === "copy-email") {
        navigator.clipboard.writeText("sandeepmanchinasetti007@gmail.com");
        showToast("Email address copied to clipboard!");
      } else if (action === "github") {
        window.open("https://github.com/sandeep2409-gitch", "_blank");
      }
      closeCmdPalette();
    });
  });

  const copyEmailChip = document.getElementById("copyEmailChip");
  copyEmailChip.addEventListener("click", () => {
    navigator.clipboard.writeText("sandeepmanchinasetti007@gmail.com");
    showToast("Email copied: sandeepmanchinasetti007@gmail.com");
  });

  const navEmailPill = document.getElementById("navEmailPill");
  navEmailPill.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("sandeepmanchinasetti007@gmail.com");
    showToast("Email copied: sandeepmanchinasetti007@gmail.com");
  });

  const copyCodeBtn = document.getElementById("copyCodeBtn");
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

  const pfpContainer = document.getElementById("pfpContainer");
  const reactiveEmoji = document.getElementById("reactiveEmoji");
  const cyberAvatar = document.getElementById("cyberAvatar");
  const boyHeadGroup = document.getElementById("boyHeadGroup");
  const leftPupil = document.getElementById("leftPupil");
  const rightPupil = document.getElementById("rightPupil");
  const leftReflect = document.getElementById("leftReflect");
  const rightReflect = document.getElementById("rightReflect");
  const emojis = ["⚡", "🚀", "💻", "🤖", "🔥", "🛡️", "🔮", "🧠"];
  let emojiIdx = 0;

  window.addEventListener("mousemove", (e) => {
    if (!cyberAvatar) return;
    const rect = cyberAvatar.getBoundingClientRect();
    const avatarCenterX = rect.left + rect.width / 2;
    const avatarCenterY = rect.top + rect.height / 2;

    const deltaX = e.clientX - avatarCenterX;
    const deltaY = e.clientY - avatarCenterY;
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
  });

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
    });

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
      setTimeout(() => {
        reactiveEmoji.style.transform = `scale(1.2) rotate(0deg)`;
      }, 250);

      showToast(`Profile status updated: ${emojis[emojiIdx]}`);
    });
  }
});
