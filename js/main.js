const pages = {
  'index.html': 'Home', 'about.html': 'About Us', 'products.html': 'Products', 'services.html': 'Services', 'projects.html': 'Projects', 'why-us.html': 'Why Choose Us', 'contact.html': 'Contact'
};

const navItems = Object.entries(pages).map(([href, label]) => `<a href="${href}" data-page="${href}">${label}</a>`).join('');

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('no-js');
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelector('[data-site-header]').innerHTML = `<div class="container navbar"><a class="brand" href="index.html" aria-label="Nature Energy Technologies home"><img class="brand-logo" src="logo.png" alt="Nature Energy Technologies Limited"></a><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false"><i class="ri-menu-3-line"></i></button><nav class="nav-links" aria-label="Primary navigation">${navItems}<a class="button button-primary mobile-cta" href="contact.html">Get a Quote <i class="ri-arrow-right-up-line"></i></a></nav><a class="button button-primary nav-quote" href="contact.html">Get a Quote <i class="ri-arrow-right-up-line"></i></a></div><div class="nav-overlay" aria-hidden="true"></div>`;
  document.querySelector('[data-site-footer]').innerHTML = `<footer class="footer"><div class="container footer-grid"><div><a class="brand" href="index.html"><img class="brand-logo" src="logo.png" alt="Nature Energy Technologies Limited"></a><p style="margin-top:18px">Reliable solar, inverter and energy storage solutions for homes, businesses and essential operations.</p><div class="socials"><a href="contact.html" aria-label="WhatsApp placeholder"><i class="ri-whatsapp-line"></i></a><a href="contact.html" aria-label="Email contact"><i class="ri-mail-line"></i></a></div></div><div><h3>Quick Links</h3><div class="footer-links">${navItems}</div></div><div><h3>Solutions</h3><div class="footer-links"><a href="products.html">Solar panels</a><a href="products.html">Inverters</a><a href="products.html">Batteries</a><a href="services.html">Installation & maintenance</a></div></div><div><h3>Contact</h3><div class="footer-links"><a href="contact.html">Phone: [Add phone]</a><a href="contact.html">Email: [Add email]</a><a href="contact.html">Office: [Add address]</a><a href="contact.html">WhatsApp us</a></div></div></div><div class="container copyright"><span>© ${new Date().getFullYear()} Nature Energy Technologies Limited. All Rights Reserved.</span><span>Clean Energy. Brighter Tomorrow.</span></div></footer>`;
  document.querySelectorAll(`[data-page="${current}"]`).forEach(link => link.classList.add('active'));
  setupNavigation(); setupScrollEffects(); setupForms(); setupFilters();
});

function setupNavigation() {
  const header = document.querySelector('.site-header'); const menu = document.querySelector('.menu-toggle'); const links = document.querySelector('.nav-links'); const overlay = document.querySelector('.nav-overlay');
  const closeMenu = () => { links?.classList.remove('open'); overlay?.classList.remove('visible'); document.body.classList.remove('menu-open'); menu?.setAttribute('aria-expanded', 'false'); menu?.setAttribute('aria-label', 'Open navigation'); if (menu) menu.innerHTML = '<i class="ri-menu-3-line"></i>'; };
  menu?.addEventListener('click', () => { const open = !links.classList.contains('open'); if (open) { links.classList.add('open'); overlay?.classList.add('visible'); document.body.classList.add('menu-open'); menu.setAttribute('aria-expanded', 'true'); menu.setAttribute('aria-label', 'Close navigation'); menu.innerHTML = '<i class="ri-close-line"></i>'; } else closeMenu(); });
  overlay?.addEventListener('click', closeMenu);
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  links?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('scroll', () => { header.classList.toggle('scrolled', window.scrollY > 25); document.querySelector('.back-top')?.classList.toggle('visible', window.scrollY > 550); }, { passive: true });
  document.querySelector('.back-top')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function setupScrollEffects() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (typeof gsap !== 'undefined' && !reduce) {
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll('.reveal').forEach(el => gsap.fromTo(el, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: .7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));
    const sun = document.querySelector('.sun');
    if (sun) gsap.to(sun, { x: '90vw', y: '72vh', opacity: .32, ease: 'none', scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1.5 } });
  } else document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  if (typeof Lenis !== 'undefined' && !reduce) { const lenis = new Lenis({ duration: 1.05, smoothWheel: true }); function raf(time) { lenis.raf(time); requestAnimationFrame(raf); } requestAnimationFrame(raf); }
}

function setupForms() { document.querySelectorAll('form[data-quote-form]').forEach(form => form.addEventListener('submit', event => { event.preventDefault(); if (!form.checkValidity()) { form.reportValidity(); return; } form.querySelector('.form-note').style.display = 'block'; form.reset(); })); }
function setupFilters() { document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-filter]').forEach(btn => btn.classList.remove('active')); button.classList.add('active'); const value = button.dataset.filter; document.querySelectorAll('[data-category]').forEach(card => { card.hidden = value !== 'all' && card.dataset.category !== value; }); })); }
