const pages = {
  'index.html': 'Home', 'about.html': 'About Us', 'products.html': 'Products', 'services.html': 'Services', 'projects.html': 'Projects', 'why-us.html': 'Why Choose Us', 'contact.html': 'Contact'
};

const navItems = Object.entries(pages).map(([href, label]) => `<a href="${href}" data-page="${href}">${label}</a>`).join('');

const seoByPage = {
  'index.html': ['Nature Energy Technologies | Solar & Power Solutions', 'Reliable solar, inverter, battery and backup power solutions for homes and businesses in Nigeria.'],
  'about.html': ['About Nature Energy Technologies | Our Approach', 'Learn about Nature Energy Technologies Limited and our practical approach to solar and power solutions.'],
  'products.html': ['Solar Panels, Inverters & Batteries | Nature Energy', 'Explore solar panels, inverters, batteries and integrated energy systems from Nature Energy Technologies.'],
  'services.html': ['Solar Installation & Maintenance Services | Nature Energy', 'Solar installation, inverter repairs, battery maintenance, diagnostics and energy consultation services.'],
  'projects.html': ['Solar & Energy Projects | Nature Energy Technologies', 'Explore solar, backup power and energy storage project categories from Nature Energy Technologies.'],
  'why-us.html': ['Why Choose Nature Energy Technologies', 'Discover a practical approach to reliable solar, inverter and energy storage solutions.'],
  'contact.html': ['Contact Nature Energy Technologies | Request a Quote', 'Speak with Nature Energy Technologies about solar, inverter, battery and backup power solutions in Lagos and beyond.']
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('no-js');
  const current = location.pathname.split('/').pop() || 'index.html';
  setupSeo(current);
  document.querySelector('[data-site-header]').innerHTML = `<div class="container navbar"><a class="brand" href="index.html" aria-label="Nature Energy Technologies home"><img class="brand-logo" src="logo.png" alt="Nature Energy Technologies Limited"></a><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false"><i class="ri-menu-3-line"></i></button><nav class="nav-links" aria-label="Primary navigation">${navItems}<a class="button button-primary mobile-cta" href="contact.html">Get a Quote <i class="ri-arrow-right-up-line"></i></a></nav><a class="button button-primary nav-quote" href="contact.html">Get a Quote <i class="ri-arrow-right-up-line"></i></a></div><div class="nav-overlay" aria-hidden="true"></div>`;
  document.querySelector('[data-site-footer]').innerHTML = `<footer class="footer"><div class="container footer-grid"><div><a class="brand" href="index.html"><img class="brand-logo" src="logo.png" alt="Nature Energy Technologies Limited"></a><p style="margin-top:18px">Reliable solar, inverter and energy storage solutions for homes, businesses and essential operations.</p><div class="socials"><a href="https://wa.me/2348024340169" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><i class="ri-whatsapp-line"></i></a><a href="mailto:natureenergytechnologies@gmail.com" aria-label="Email Nature Energy Technologies"><i class="ri-mail-line"></i></a></div></div><div><h3>Quick Links</h3><div class="footer-links">${navItems}</div></div><div><h3>Solutions</h3><div class="footer-links"><a href="products.html">Solar panels</a><a href="products.html">Inverters</a><a href="products.html">Batteries</a><a href="services.html">Installation & maintenance</a></div></div><div><h3>Contact</h3><div class="footer-contact"><a class="footer-contact-item" href="tel:+2349160953400"><i class="ri-phone-line"></i><span>09160953400</span></a><a class="footer-contact-item" href="tel:+2348024340169"><i class="ri-phone-line"></i><span>08024340169</span></a><a class="footer-contact-item" href="mailto:natureenergytechnologies@gmail.com"><i class="ri-mail-line"></i><span>natureenergytechnologies@gmail.com</span></a><a class="footer-contact-item" href="contact.html"><i class="ri-map-pin-line"></i><span>27, Lambe ILUYOMADE STREET, OFF AGO PALACE WAY, OKOTA, LAGOS</span></a></div></div></div><div class="container copyright"><span>© ${new Date().getFullYear()} Nature Energy Technologies Limited. All Rights Reserved.</span><span>Clean Energy. Brighter Tomorrow.</span></div></footer>`;
  document.body.insertAdjacentHTML('beforeend', '<a class="whatsapp-float" href="https://wa.me/2348024340169" target="_blank" rel="noopener" aria-label="Chat with Nature Energy Technologies on WhatsApp" title="Chat with us on WhatsApp"><i class="ri-whatsapp-line"></i></a>');
  document.querySelectorAll(`[data-page="${current}"]`).forEach(link => link.classList.add('active'));
  setupNavigation(); setupScrollEffects(); setupForms(); setupFilters(); setupContentMedia();
});

function setupContentMedia() {
  const aboutImage = document.querySelector('img[alt="Engineer working with a solar installation"]');
  if (aboutImage) { aboutImage.src = 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=85'; aboutImage.alt = 'Engineer working on solar electrical equipment'; }
  const backupImage = [...document.querySelectorAll('.product-card')].find(card => card.querySelector('.product-meta')?.textContent.trim() === 'Backup power')?.querySelector('img');
  if (backupImage) { backupImage.src = 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=900&q=85'; backupImage.alt = 'Battery backup power storage equipment'; }
  const residentialImage = document.querySelector('.project-card[data-category="residential"] img');
  if (residentialImage) { residentialImage.src = 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=85'; residentialImage.alt = 'Residential rooftop solar project'; }
}

function setupSeo(current) {
  const [title, description] = seoByPage[current] || seoByPage['index.html'];
  document.title = title;
  const addMeta = (name, content, property = false) => { const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`; let tag = document.head.querySelector(selector); if (!tag) { tag = document.createElement('meta'); tag.setAttribute(property ? 'property' : 'name', name); document.head.appendChild(tag); } tag.content = content; };
  addMeta('author', 'Nature Energy Technologies Limited'); addMeta('robots', 'index, follow'); addMeta('theme-color', '#087A2A');
  addMeta('og:title', title, true); addMeta('og:description', description, true); addMeta('og:type', 'website', true); addMeta('og:site_name', 'Nature Energy Technologies Limited', true); addMeta('og:image', 'https://natureenergytechnologies.com/logo.png', true);
  addMeta('twitter:card', 'summary'); addMeta('twitter:title', title); addMeta('twitter:description', description); addMeta('twitter:image', 'https://natureenergytechnologies.com/logo.png');
  if (!document.head.querySelector('link[rel="icon"]')) { const favicon = document.createElement('link'); favicon.rel = 'icon'; favicon.type = 'image/jpeg'; favicon.href = 'favicon.jpeg'; document.head.appendChild(favicon); }
}

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
