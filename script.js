const menuOpenBtn = document.getElementById('menuOpenBtn');
const menuCloseBtn = document.getElementById('menuCloseBtn');
const sideNav = document.getElementById('sideNav');
const navOverlay = document.getElementById('navOverlay');

const toggleNavigation = (isOpen) => {
  if (isOpen) {
    sideNav.classList.add('open');
    navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    sideNav.classList.remove('open');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

menuOpenBtn.addEventListener('click', () => toggleNavigation(true));
menuCloseBtn.addEventListener('click', () => toggleNavigation(false));
navOverlay.addEventListener('click', () => toggleNavigation(false));

window.addEventListener('resize', () => {
  if (window.innerWidth > 850) {
    toggleNavigation(false);
  }
});