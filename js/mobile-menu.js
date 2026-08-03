const openMenuBtn = document.querySelector('.menu-open-btn');
const closeMenuBtn = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

openMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    mobileMenu.classList.remove('is-open');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    mobileMenu.classList.remove('is-open');
  }
});
