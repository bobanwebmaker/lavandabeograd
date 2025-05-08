// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mainNav = document.getElementById('main-nav');

if (mobileMenuBtn && mainNav) {
  mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });
}

// Smooth scroll za navigacione linkove
document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // Ne sprečavamo podrazumevano ponašanje jer želimo da se navigacija dogodi
    // Ovo će raditi jer linkovi vode na glavnu stranicu sa ID-jevima sekcija
  });
});
