/**
 * DEL-systems – Landing Page Interactions
 */

(function () {
  'use strict';

  const navbar = document.getElementById('navbar');
  const storyTrack = document.querySelector('.story__track');
  const storySections = document.querySelectorAll('.story__section');

  let ticking = false;
  let lastScrollY = 0;

  /* ---- Navbar scroll state ---- */
  function updateNavbar() {
    if (!navbar) return;

    const scrollY = window.scrollY;
    const threshold = 60;

    if (scrollY > threshold) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }

    lastScrollY = scrollY;
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }

  /* ---- Story stacking: set track height for proper scroll distance ---- */
  function initStoryStack() {
    if (!storyTrack || storySections.length === 0) return;

    const sectionCount = storySections.length;
    // Each section needs ~100vh of scroll space; last section doesn't need extra
    const totalHeight = sectionCount * 100;
    storyTrack.style.height = `${totalHeight}vh`;
  }

  /* ---- Subtle parallax on story text while section is active ---- */
  function updateStoryParallax() {
    storySections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;

      if (rect.top <= 0 && rect.bottom > viewportH * 0.3) {
        const progress = Math.min(1, Math.abs(rect.top) / (viewportH * 0.5));
        const text = section.querySelector('.story__text');
        const graphic = section.querySelector('.story__graphic');

        if (text) {
          text.style.transform = `translateY(${progress * 20}px)`;
          text.style.opacity = String(1 - progress * 0.3);
        }
        if (graphic) {
          graphic.style.transform = `translateY(${progress * -15}px) scale(${1 - progress * 0.03})`;
        }
      } else {
        const text = section.querySelector('.story__text');
        const graphic = section.querySelector('.story__graphic');
        if (text) {
          text.style.transform = '';
          text.style.opacity = '';
        }
        if (graphic) {
          graphic.style.transform = '';
        }
      }
    });
  }

  function onScrollCombined() {
    onScroll();
    updateStoryParallax();
  }

  /* ---- Smooth anchor offset for fixed navbar ---- */
  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        const navEl = navbar || document.getElementById('navbar');
        const navbarHeight = navEl
          ? navEl.offsetHeight + (parseFloat(getComputedStyle(navEl).top) || 0)
          : 0;
        const targetY = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;

        window.scrollTo({
          top: targetY,
          behavior: 'smooth',
        });
      });
    });
  }

  /* ---- Init ---- */
  function init() {
    initStoryStack();
    initSmoothAnchors();

    window.addEventListener('scroll', onScrollCombined, { passive: true });
    window.addEventListener('resize', () => {
      initStoryStack();
      updateStoryParallax();
    });

    updateNavbar();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
