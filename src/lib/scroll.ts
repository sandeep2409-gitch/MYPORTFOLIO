/**
 * Fast, snappy custom smooth scroll for in-page anchors.
 * Eliminates sluggish 800-1000ms browser curves and Next.js router transition lag.
 */

let scrollAnimFrame: number | null = null;

export function snappyScrollTo(
  target: string | HTMLElement,
  offset = 72,
  duration = 340
): boolean {
  if (typeof window === "undefined") return false;

  const element =
    typeof target === "string"
      ? document.getElementById(target.replace(/^\/?#/, ""))
      : target;

  if (!element) return false;

  if (scrollAnimFrame !== null) {
    cancelAnimationFrame(scrollAnimFrame);
    scrollAnimFrame = null;
  }

  const startY = window.scrollY;
  const targetY = Math.max(
    0,
    element.getBoundingClientRect().top + window.scrollY - offset
  );
  const distance = targetY - startY;

  // If already at or within 2px of destination, return immediately
  if (Math.abs(distance) < 2) return true;

  // Temporarily disable CSS scroll-behavior so JS has precise 60/120fps control
  const html = document.documentElement;
  const prevBehavior = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";

  const startTime = performance.now();
  // Fast deceleration curve (ease-out quartic): immediate rapid movement that settles smoothly
  const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeOutQuart(progress);

    window.scrollTo(0, Math.round(startY + distance * ease));

    if (progress < 1) {
      scrollAnimFrame = requestAnimationFrame(step);
    } else {
      window.scrollTo(0, targetY);
      html.style.scrollBehavior = prevBehavior;
      scrollAnimFrame = null;
    }
  }

  scrollAnimFrame = requestAnimationFrame(step);
  return true;
}
