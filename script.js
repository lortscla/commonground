/* ============================================
   Common Ground Vineyards — Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Scroll-triggered fade-in animations ----
  const fadeEls = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  fadeEls.forEach(el => observer.observe(el));

  // ---- Nav scroll effect ----
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---- Mobile menu toggle ----
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    navToggle.classList.toggle('active');
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      navToggle.classList.remove('active');
    });
  });

  // ---- Smooth parallax on vine leaves ----
  const leaves = document.querySelectorAll('.vine-leaf');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    leaves.forEach((leaf, i) => {
      const speed = 0.02 + (i * 0.008);
      leaf.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }, { passive: true });

});
