/* =============================================
   PORTFOLIO - JAVASCRIPT (Enhanced)
   Sandeep Manchinasetti
   ============================================= */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hidden");
    document.body.style.overflow = "auto";
    initAnimations();
  }, 2400);
});
document.body.style.overflow = "hidden";

const cursor = document.getElementById("cursor");
const cursorFollower = document.getElementById("cursorFollower");
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  cursorFollower.style.left = followerX + "px";
  cursorFollower.style.top = followerY + "px";
  requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll("a, button, .skill-card, .project-card, .skill-tag, .info-item, .contact-item").forEach((el) => {
  el.addEventListener("mouseenter", () => { cursor.classList.add("active"); cursorFollower.classList.add("active"); });
  el.addEventListener("mouseleave", () => { cursor.classList.remove("active"); cursorFollower.classList.remove("active"); });
});

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2.5 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.6 + 0.15;
    this.baseOpacity = this.opacity;
    const r = Math.random();
    this.hue = r < 0.4 ? 248 : r < 0.7 ? 190 : 340;
    this.pulseSpeed = Math.random() * 0.02 + 0.005;
    this.pulseOffset = Math.random() * Math.PI * 2;
  }
  update(time) {
    this.x += this.speedX;
    this.y += this.speedY;
    this.opacity = this.baseOpacity + Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.15;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${this.hue}, 85%, 65%, ${this.opacity * 0.15})`;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${this.hue}, 85%, 70%, ${this.opacity})`;
    ctx.fill();
  }
}

const particles = [];
const particleCount = Math.min(100, Math.floor(window.innerWidth / 12));
for (let i = 0; i < particleCount; i++) particles.push(new Particle());

let pMouseX = 0, pMouseY = 0;
canvas.addEventListener("mousemove", (e) => { pMouseX = e.clientX; pMouseY = e.clientY; });

let animTime = 0;
function animateParticles() {
  animTime++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (pMouseX > 0 && pMouseY > 0) {
    const gradient = ctx.createRadialGradient(pMouseX, pMouseY, 0, pMouseX, pMouseY, 180);
    gradient.addColorStop(0, "rgba(124, 111, 255, 0.06)");
    gradient.addColorStop(0.5, "rgba(0, 229, 255, 0.02)");
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.fillRect(pMouseX - 180, pMouseY - 180, 360, 360);
  }

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 160) {
        const opacity = (1 - distance / 160) * 0.2;
        const grd = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
        grd.addColorStop(0, `hsla(${particles[i].hue}, 80%, 65%, ${opacity})`);
        grd.addColorStop(1, `hsla(${particles[j].hue}, 80%, 65%, ${opacity})`);
        ctx.beginPath();
        ctx.strokeStyle = grd;
        ctx.lineWidth = 0.6;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  particles.forEach((p) => {
    const dx = p.x - pMouseX;
    const dy = p.y - pMouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 200) {
      const opacity = (1 - dist / 200) * 0.25;
      ctx.beginPath();
      ctx.strokeStyle = `rgba(124, 111, 255, ${opacity})`;
      ctx.lineWidth = 0.8;
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(pMouseX, pMouseY);
      ctx.stroke();
    }
    if (dist < 130) {
      const force = (130 - dist) / 130;
      p.x += (dx / dist) * force * 2.5;
      p.y += (dy / dist) * force * 2.5;
    }
    p.update(animTime);
    p.draw();
  });

  requestAnimationFrame(animateParticles);
}
animateParticles();

const typewriterEl = document.getElementById("typewriter");
const typewriterTexts = ["Full Stack Developer", "AI & ML Engineer", "Problem Solver", "Tech Enthusiast", "B.Tech Student"];
let textIndex = 0, charIndex = 0, isDeleting = false, typeSpeed = 100;

function typewrite() {
  const current = typewriterTexts[textIndex];
  if (isDeleting) { typewriterEl.textContent = current.substring(0, charIndex - 1); charIndex--; typeSpeed = 40; }
  else { typewriterEl.textContent = current.substring(0, charIndex + 1); charIndex++; typeSpeed = 90; }
  if (!isDeleting && charIndex === current.length) { isDeleting = true; typeSpeed = 2200; }
  else if (isDeleting && charIndex === 0) { isDeleting = false; textIndex = (textIndex + 1) % typewriterTexts.length; typeSpeed = 500; }
  setTimeout(typewrite, typeSpeed);
}

const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
  const sections = document.querySelectorAll("section");
  let currentSection = "";
  sections.forEach((s) => { if (window.scrollY >= s.offsetTop - 100) currentSection = s.id; });
  document.querySelectorAll(".nav-link").forEach((l) => {
    l.classList.toggle("active", l.getAttribute("data-section") === currentSection);
  });
});

navToggle.addEventListener("click", () => { navToggle.classList.toggle("active"); navLinks.classList.toggle("open"); });
document.querySelectorAll(".nav-link").forEach((l) => l.addEventListener("click", () => { navToggle.classList.remove("active"); navLinks.classList.remove("open"); }));

function initAnimations() {
  typewrite();
  animateStats();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = getComputedStyle(entry.target).getPropertyValue("--delay") || "0s";
        setTimeout(() => {
          entry.target.classList.add("revealed");
          if (entry.target.classList.contains("skill-card")) {
            const fill = entry.target.querySelector(".skill-bar-fill");
            if (fill) fill.style.width = fill.getAttribute("data-width") + "%";
          }
        }, parseFloat(delay) * 1000);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right, .skill-card, .project-card").forEach((el) => observer.observe(el));
}

function animateStats() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute("data-target"));
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) { entry.target.textContent = target; clearInterval(timer); }
          else entry.target.textContent = Math.ceil(current);
        }, 30);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll(".stat-number").forEach((s) => observer.observe(s));
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.querySelector(".project-card-inner").style.transform =
      `translateY(-10px) perspective(1000px) rotateX(${y * -8}deg) rotateY(${x * 8}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.querySelector(".project-card-inner").style.transform = "translateY(0) perspective(1000px) rotateX(0) rotateY(0)";
  });
});

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });
  btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
});

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    const t = document.querySelector(this.getAttribute("href"));
    if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector(".btn-submit");
  const orig = btn.innerHTML;
  btn.innerHTML = "<span>Sending...</span>";
  btn.disabled = true;

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { "Accept": "application/json" }
  })
  .then((res) => {
    if (res.ok) {
      btn.innerHTML = '<span>Message Sent! ✓</span>';
      btn.style.background = "linear-gradient(135deg, #28c840 0%, #43e97b 100%)";
      btn.style.boxShadow = "0 4px 24px rgba(40, 200, 64, 0.4)";
      form.reset();
    } else {
      throw new Error("Failed");
    }
  })
  .catch(() => {
    btn.innerHTML = '<span>Oops, try again</span>';
    btn.style.background = "linear-gradient(135deg, #ff4757 0%, #ff6b9d 100%)";
    btn.style.boxShadow = "0 4px 24px rgba(255, 71, 87, 0.4)";
  })
  .finally(() => {
    setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; btn.style.background = ""; btn.style.boxShadow = ""; }, 3000);
  });
});

function initIcons() {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
  const githubIcons = document.querySelectorAll('[data-lucide="github"]');
  const githubSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>';
  githubIcons.forEach(icon => {
    icon.outerHTML = githubSvg;
  });
}

document.addEventListener("DOMContentLoaded", initIcons);
window.addEventListener("load", initIcons);

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY < window.innerHeight) {
    const content = document.querySelector(".hero-content");
    content.style.transform = `translateY(${scrollY * 0.35}px)`;
    content.style.opacity = 1 - scrollY / (window.innerHeight * 0.75);
  }
});

const skillTagsContainer = document.querySelector(".skill-tags");
if (skillTagsContainer) {
  const tags = document.querySelectorAll(".skill-tag");
  tags.forEach((t) => { t.style.opacity = "0"; t.style.transform = "translateY(20px) scale(0.9)"; t.style.transition = "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"; });
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".skill-tag").forEach((tag, i) => {
          setTimeout(() => { tag.style.opacity = "1"; tag.style.transform = "translateY(0) scale(1)"; }, i * 100);
        });
      }
    });
  }, { threshold: 0.3 }).observe(skillTagsContainer);
}

function splitTextReveal() {
  const name = document.getElementById("heroName");
  if (!name) return;
  const text = name.textContent;
  name.innerHTML = "";
  [...text].forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.cssText = `display:inline-block;opacity:0;transform:translateY(50px) rotateX(-90deg) scale(0.5);transition:all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.04 + 0.3}s`;
    name.appendChild(span);
  });
  requestAnimationFrame(() => {
    name.querySelectorAll("span").forEach((s) => { s.style.opacity = "1"; s.style.transform = "translateY(0) rotateX(0) scale(1)"; });
  });
}

window.addEventListener("load", () => { setTimeout(splitTextReveal, 2500); });
