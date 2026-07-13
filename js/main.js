/**
 * DEL-systems – Landing Page Interactions
 */

(function () {
  'use strict';

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  const navbar = document.getElementById('navbar');
  const storyTrack = document.querySelector('.story__track');
  const storySections = document.querySelectorAll('.story__section');
  const hasStory = Boolean(storyTrack && storySections.length > 0);
  const mqMobile = window.matchMedia('(max-width: 768px)');
  const mqCoarse = window.matchMedia('(pointer: coarse)');
  const shouldLightenEffects = mqMobile.matches || mqCoarse.matches;

  let ticking = false;

  function updateNavbar() {
    if (!navbar) return;
    navbar.classList.toggle('is-scrolled', window.scrollY > 60);
    ticking = false;
  }

  function initStoryStack() {
    if (!hasStory || !storyTrack) return;

    const total = Array.from(storySections).reduce(
      (sum, section) => sum + section.offsetHeight,
      0
    );
    storyTrack.style.height = `${Math.max(total, storySections.length * window.innerHeight)}px`;
  }

  function smoothstep(value) {
    const t = Math.min(1, Math.max(0, value));
    return t * t * (3 - 2 * t);
  }

  const STORY_MASK_STOPS = [
    [0, 1],
    [62, 1],
    [74, 0.9],
    [86, 0.55],
    [94, 0.2],
    [100, 0],
  ];

  function buildStoryOutroMask(progress) {
    const parts = STORY_MASK_STOPS.map(([pos, alpha]) => {
      const value = pos <= 62 ? 1 : 1 - progress * (1 - alpha);
      return `rgba(0, 0, 0, ${value}) ${pos}%`;
    });

    return `linear-gradient(to bottom, ${parts.join(', ')})`;
  }

  function clearStoryOutroMask(section4) {
    section4.style.webkitMaskImage = '';
    section4.style.maskImage = '';
  }

  function updateStoryOutroGlow() {
    if (!hasStory) return;
    const section4 = storySections[storySections.length - 1];
    if (!section4 || !storyTrack) return;

    const rect4 = section4.getBoundingClientRect();
    const vh = window.innerHeight;

    if (rect4.top > 1 || rect4.bottom <= 0) {
      clearStoryOutroMask(section4);
      return;
    }

    const trackRect = storyTrack.getBoundingClientRect();
    const remaining = trackRect.bottom - vh;
    const fadeRange = vh * 2.4;
    const raw = 1 - remaining / fadeRange;
    const progress = smoothstep(raw);
    const mask = buildStoryOutroMask(progress);

    section4.style.webkitMaskImage = mask;
    section4.style.maskImage = mask;
  }

  function updateStoryParallax() {
    if (!hasStory) return;
    const section4 = storySections[storySections.length - 1];
    const rect4 = section4 ? section4.getBoundingClientRect() : null;
    const hideLowerSections = rect4
      ? rect4.top <= 1 && rect4.bottom > 0
      : false;

    storySections.forEach((section, index) => {
      const isLowerSection = index < storySections.length - 1;

      if (isLowerSection) {
        section.style.visibility = hideLowerSections ? 'hidden' : '';
      }

      const rect = section.getBoundingClientRect();
      const text = section.querySelector('.story__text');
      const graphic = section.querySelector('.story__graphic');
      const isLocked = rect.top <= 2 && rect.top >= -8 && rect.bottom > window.innerHeight * 0.5;

      if (isLocked) {
        const progress = Math.min(1, Math.abs(rect.top) / (window.innerHeight * 0.5));
        if (text) {
          text.style.transform = `translateY(${progress * 12}px)`;
          text.style.opacity = String(1 - progress * 0.15);
        }
        if (graphic) {
          graphic.style.transform = `translateY(${progress * -8}px)`;
        }
      } else {
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

  function updateStoryPanelOpacity() {
    if (!hasStory) return;
    const vh = window.innerHeight;

    storySections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const inZone = rect.top <= 2 && rect.bottom > vh * 0.35;

      if (!inZone) {
        section.style.removeProperty('--story-panel-alpha');
        return;
      }

      // Towards the end of a locked card, gradually become less transparent.
      const progress = Math.min(1, Math.abs(rect.top) / (vh * 0.55));
      const alpha = 0.74 + progress * 0.18;
      section.style.setProperty('--story-panel-alpha', alpha.toFixed(3));
    });
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateNavbar();
        if (hasStory && !shouldLightenEffects) {
          updateStoryParallax();
          updateStoryOutroGlow();
        }
        if (hasStory) {
          updateStoryPanelOpacity();
        }
      });
      ticking = true;
    }
  }

  function initSmoothAnchors() {
    document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (!href || !href.includes('#')) return;

        const targetId = href.substring(href.indexOf('#'));
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
          behavior: shouldLightenEffects ? 'auto' : 'smooth'
        });
      });
    });
  }

  function init() {
    window.scrollTo(0, 0);
    if (hasStory) initStoryStack();
    initSmoothAnchors();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('load', () => {
      window.scrollTo(0, 0);
      if (hasStory) initStoryStack();
    });
    window.addEventListener('resize', () => {
      if (hasStory) {
        initStoryStack();
        if (!shouldLightenEffects) {
          updateStoryParallax();
          updateStoryOutroGlow();
        }
        updateStoryPanelOpacity();
      }
    });

    updateNavbar();
    if (hasStory) {
      if (!shouldLightenEffects) {
        updateStoryParallax();
        updateStoryOutroGlow();
      }
      updateStoryPanelOpacity();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
