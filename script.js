
/* ═══════════════════════════════════════════════
   SCRIPT.JS – Portfolio Interactions
   Black × Gold × Orange Theme
   ═══════════════════════════════════════════════ */
// ─── 1. CUSTOM CURSOR ──────────────────────────────────────────────────────
(function () {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;
  let aimX = 0, aimY = 0;
  window.addEventListener('mousemove', e => {
    aimX = e.clientX;
    aimY = e.clientY;
    dot.style.left  = aimX + 'px';
    dot.style.top   = aimY + 'px';
  });
  // Smooth ring follow
  let ringX = 0, ringY = 0;
  function animRing() {
    ringX += (aimX - ringX) * 0.14;
    ringY += (aimY - ringY) * 0.14;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();
  document.querySelectorAll('a, button, .bento-card, .cert-tile, .ach-card, .contact-item').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
})();
// ─── 2. NAVBAR SCROLL ──────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
let lastY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 60);
