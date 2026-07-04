const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const navLinks = document.querySelector('[data-nav-links]');
const revealEls = document.querySelectorAll('.reveal');
const filterButtons = document.querySelectorAll('[data-filter]');
const menuItems = document.querySelectorAll('.menu-item');
const lightbox = document.querySelector('[data-lightbox-modal]');
const lightboxImage = document.querySelector('[data-lightbox-image]');
const lightboxClose = document.querySelector('[data-lightbox-close]');

function syncHeader() {
  header.classList.toggle('scrolled', window.scrollY > 24);
}

function closeMenu() {
  navLinks.classList.remove('open');
  document.body.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}

window.addEventListener('scroll', syncHeader, { passive: true });
syncHeader();

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  document.body.classList.toggle('menu-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealEls.forEach((el) => observer.observe(el));

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    menuItems.forEach((item) => {
      item.classList.toggle('hide', category !== 'all' && item.dataset.category !== category);
    });
  });
});

document.querySelectorAll('[data-lightbox]').forEach((button) => {
  button.addEventListener('click', () => {
    lightboxImage.src = button.dataset.lightbox;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
    closeLightbox();
  }
});
