const headerLogoStyle = document.createElement("style");
headerLogoStyle.textContent = `
  html.sionLandingPending .homeCarousel {
    opacity: 0 !important;
    visibility: hidden !important;
  }
  .colorIntroLayout1 .sionColorLogo {
    display: flex; align-items: center; gap: .7em; aspect-ratio: auto;
  }
  .sionColorLogo__mark {
    display: block; flex: 0 0 2em; height: 3em; background: currentColor;
    -webkit-mask: url('/assets/sion-motion-mark.png') center / contain no-repeat;
    mask: url('/assets/sion-motion-mark.png') center / contain no-repeat;
  }
  .sionColorLogo__name {
    font-family: Clarkson, Arial, sans-serif; font-size: 2.1em;
    font-weight: 400; line-height: 1; letter-spacing: -.035em; white-space: nowrap;
  }
  .sionHeaderLogo { display: block; width: auto; height: 72px; object-fit: contain; }
  @media (max-width: 767px) { .sionHeaderLogo { height: 58px; } }
  .homeCarouselUi .homeCarouselUi__inner.gridMain {
    display: flex; column-gap: .65em;
  }
  .homeCarouselUi .homeCarouselUi__index { flex: 0 0 auto; }
  .homeCarouselUi .homeCarouselUi__title { flex: 1 1 auto; min-width: 0; }
  .homeCarouselUi .homeCarouselUi__arrows { flex: 0 0 auto; margin-left: auto; }
  .sionShowreel > .sionShowreel__background {
    position: absolute; inset: 0; width: 100%; height: 100%;
    object-fit: cover; pointer-events: none; z-index: 0;
  }
  .sionShowreelFullBackground {
    position: absolute; inset: 0; width: 100%; height: 100%;
    object-fit: cover; pointer-events: none; z-index: 0;
    opacity: 0; filter: contrast(1.05) saturate(1.08);
    transition: opacity .55s ease;
  }
  .sionShowreelFullBackground.is-visible { opacity: 1; }
  .homeCarousel.showreelBackgroundActive .homeCarousel__perspective { z-index: 1; }
  .homeCarousel.showreelBackgroundActive .sionShowreel > .sionShowreel__background { opacity: 0; }
  .sionShowreelSoundToggle {
    position: absolute; left: 50%; bottom: 1.8rem; z-index: 2;
    transform: translateX(-50%); padding: .5rem .75rem;
    color: #fff; background: rgba(0, 0, 0, .35); border: 1px solid rgba(255, 255, 255, .7);
    border-radius: 999px; font: inherit; font-size: .68rem; letter-spacing: .08em;
    line-height: 1; text-transform: uppercase; cursor: pointer;
    opacity: 0; pointer-events: none; transition: opacity .25s ease, background-color .25s ease;
  }
  .sionShowreelSoundToggle.is-visible { opacity: 1; pointer-events: auto; }
  .sionShowreelSoundToggle:hover { background: #fff; color: #111; }
  @media (max-width: 767px) { .sionShowreelSoundToggle { bottom: 1.25rem; font-size: .62rem; } }


  .commercialProduction .intro__title {
    font-size: clamp(40px, 10vw, 160px);
    line-height: .95;
  }
  .commercialProduction .intro .intro__subtitle { position: static; display: block; margin-bottom: 16px; }
  .commercialProduction .intro .intro__description .spacer { display: none; }
  .menu .menu__items { width: 100%; max-width: 100%; min-height: 0; overflow-y: auto; overflow-x: hidden; }
  .menu .menu__items { scrollbar-width: none; }
  .menu .menu__items::-webkit-scrollbar { display: none; }
  .menu .menu__headerGap, .menu .menu__footer { flex-shrink: 0; }
`;
document.head.append(headerLogoStyle);

// The cloned app has its own smooth-scroll controller. While the fixed home
// carousel is active, ignore programmatic attempts from that controller to
// move the document; the header logo removes the lock before scrolling home.
if (!window.sionCarouselScrollGuard) {
  Object.defineProperty(window, 'sionCarouselScrollGuard', { value: true });
  const nativeScrollTo = window.scrollTo.bind(window);
  const nativeScrollBy = window.scrollBy.bind(window);
  const guardedScrollTo = (...args) => {
    if (document.body?.classList.contains('sionLandingCarouselLocked')) {
      const requestedTop = typeof args[0] === 'object' ? Number(args[0]?.top) : Number(args[1]);
      const bottom = Math.max(0, document.documentElement.scrollHeight - innerHeight);
      if (Number.isFinite(requestedTop) && requestedTop < bottom - 1) return;
    }
    return nativeScrollTo(...args);
  };
  window.scrollTo = guardedScrollTo;
  window.scroll = guardedScrollTo;
  window.scrollBy = (...args) => {
    if (document.body?.classList.contains('sionLandingCarouselLocked')) return;
    return nativeScrollBy(...args);
  };
}

// Hide the original carousel from the first paint while the readable landing
// page is being mounted. The class is cleared as soon as that page is in place.
if (location.pathname === '/' || location.pathname === '/index.html') {
  document.documentElement.classList.add('sionLandingPending');
}

// The original Vue component briefly unmutes its own hidden showreel before
// our replacement can stop it. Force that specific media element to be muted
// synchronously, before the browser receives any play request.
const nativeMediaPlay = HTMLMediaElement.prototype.play;
if (!HTMLMediaElement.prototype.sionSafePlay) {
  Object.defineProperty(HTMLMediaElement.prototype, 'sionSafePlay', { value: true });
  HTMLMediaElement.prototype.play = function (...args) {
    if (this.classList?.contains('sionShowreel__background')) {
      this.muted = true;
      this.defaultMuted = true;
      this.setAttribute('muted', '');
    }
    return nativeMediaPlay.apply(this, args);
  };
}

const blockCarouselInputBehindLanding = (event) => {
  if (!document.querySelector('.sionLanding')) return;
  if (document.body.classList.contains('sionLandingCarouselReady')) return;
  event.stopImmediatePropagation();
};

// Wheel and vertical touch gestures belong to the landing page. Let their
// native scrolling continue, but keep them out of the fixed carousel's own
// gesture handler so scrolling back up cannot rotate its slides.
let lastCarouselWheel = 0;
let carouselTouchStart = null;
const moveCarousel = (direction) => {
  const now = performance.now();
  if (now - lastCarouselWheel < 700) return;
  lastCarouselWheel = now;
  document.body.classList.add('sionCarouselHasInteracted');
  document.querySelectorAll('.sionCarouselIntroActive').forEach((item) => item.classList.remove('sionCarouselIntroActive'));
  document.querySelector(direction > 0 ? '.homeCarouselUi__arrowRight' : '.homeCarouselUi__arrowLeft')?.click();
};
const blockCarouselScrollGesture = (event) => {
  // Synthetic wheel events are forwarded to the original Vue carousel so it
  // can keep its zoom-out and wheel transition without moving the document.
  if (!event.isTrusted) return;
  if (!document.querySelector('.sionLanding')) return;
  const carouselReady = document.body.classList.contains('sionLandingCarouselReady');
  if (carouselReady) {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (event.type === 'wheel') {
      const movement = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      if (Math.abs(movement) > 8) {
        document.body.classList.add('sionCarouselHasInteracted');
        document.querySelectorAll('.sionCarouselIntroActive').forEach((item) => item.classList.remove('sionCarouselIntroActive'));
        document.querySelector('.homeCarousel')?.dispatchEvent(new WheelEvent('wheel', {
          bubbles: true,
          cancelable: true,
          deltaMode: event.deltaMode,
          deltaX: event.deltaX,
          deltaY: event.deltaY,
        }));
      }
    }
    return;
  }
  event.stopImmediatePropagation();
};
addEventListener('wheel', blockCarouselScrollGesture, { capture: true, passive: false });
addEventListener('touchmove', blockCarouselScrollGesture, { capture: true, passive: false });
addEventListener('touchstart', (event) => {
  if (!document.body.classList.contains('sionLandingCarouselReady')) return;
  const touch = event.touches[0];
  carouselTouchStart = touch ? { x: touch.clientX, y: touch.clientY } : null;
}, { capture: true, passive: true });
addEventListener('touchend', (event) => {
  if (!carouselTouchStart || !document.body.classList.contains('sionLandingCarouselReady')) return;
  const touch = event.changedTouches[0];
  if (!touch) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  const deltaX = carouselTouchStart.x - touch.clientX;
  const deltaY = carouselTouchStart.y - touch.clientY;
  const movement = Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY;
  if (Math.abs(movement) > 30) moveCarousel(movement);
  carouselTouchStart = null;
}, { capture: true, passive: false });
addEventListener('pointerdown', (event) => {
  if (!document.body.classList.contains('sionLandingCarouselReady')) return;
  if (event.target.closest('.homeCarouselUi__arrowLeft, .homeCarouselUi__arrowRight')) {
    document.body.classList.add('sionCarouselHasInteracted');
    document.querySelectorAll('.sionCarouselIntroActive').forEach((item) => item.classList.remove('sionCarouselIntroActive'));
  }
}, { capture: true, passive: true });
addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    blockCarouselInputBehindLanding(event);
  }
}, { capture: true });

if (!document.querySelector('script[data-sion-landing]')) {
  const landingScript = document.createElement('script');
  landingScript.src = '/landing-page.js?v=20260916-13';
  landingScript.dataset.sionLanding = 'true';
  landingScript.addEventListener('error', () => {
    document.documentElement.classList.remove('sionLandingPending');
  });
  document.head.append(landingScript);
}

const replaceHeaderLogo = () => {
  document.querySelectorAll('.sionHeaderLogo').forEach((logo) => {
    if (logo.getAttribute('src') === '/assets/sion-motion-logo-header.png') return;
    logo.src = '/assets/sion-motion-logo-header.png';
    logo.width = 312;
    logo.height = 496;
    logo.alt = 'Sion Motion';
  });
};

new MutationObserver(replaceHeaderLogo).observe(document.documentElement, {
  childList: true,
  subtree: true,
});
replaceHeaderLogo();

// The prerendered menu contains the six original chapters while the home
// carousel has a seventh Show Reel chapter. Keep the top-right Index menu in
// sync even if hydration is delayed or the cached server markup is shown.
const syncTopRightMenu = () => {
  const list = document.querySelector('.menu .menu__items');
  if (!list) return;
  const existing = [...list.querySelectorAll('.menuItem')].find((item) =>
    /show\s*reel/i.test(item.textContent || '') ||
    /commercial-production/i.test(item.getAttribute('aria-label') || '')
  );
  if (existing) {
    const link = existing.querySelector('.menuItem__link');
    if (link && /show\s*reel\s*video/i.test(link.textContent || '')) {
      const walker = document.createTreeWalker(link, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (!/show/i.test(node.nodeValue || '')) continue;
        node.nodeValue = node.nodeValue.replace(/show/i, 'Show');
        break;
      }
    }
    return;
  }

  const items = [...list.querySelectorAll('.menuItem')];
  if (items.length < 6) return;
  const source = items.find((item) => /motion/i.test(item.textContent || '')) || items.at(-1);
  if (!source) return;
  const item = source.cloneNode(true);
  item.classList.remove('active', 'clicked', 'rollover', 'dimmed');
  item.dataset.sionMenuFallback = 'showreel';
  item.setAttribute('aria-label', 'Navigate to show reel video');
  const index = item.querySelector('.menuItem__index');
  const link = item.querySelector('.menuItem__link');
  if (index) index.textContent = '07';
  if (link) link.textContent = 'Show reel video';
  item.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    window.location.assign('/commercial-production');
  });
  item.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    window.location.assign('/commercial-production');
  });
  list.append(item);
};

new MutationObserver(syncTopRightMenu).observe(document.documentElement, {
  childList: true,
  subtree: true,
});
syncTopRightMenu();

document.addEventListener(
  "click",
  (event) => {
    if (event.target.closest(".header__name, .header__nameLink")) {
      event.preventDefault();
      if (location.pathname === '/' || location.pathname === '/index.html') {
        dispatchEvent(new Event('sion:carousel-unlock'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.location.assign("/");
      }
    }
  },
  true,
);

// The bundled carousel creates its own showreel video. Keep that copy stopped;
// the full-size video below is the single playback source for this slide.
const stopEmbeddedShowreel = () => {
  const video = document.querySelector('.sionShowreel__background');
  if (!video) return;
  video.muted = true;
  if (!video.paused) video.pause();
};

setInterval(stopEmbeddedShowreel, 300);

// Keep the original cursor-trail timing and transitions, but give the Show
// Reel slide its own production footage instead of reusing Motion assets.
const syncShowreelTrailAssets = () => {
  const showreel = document.querySelector('.sionShowreel');
  if (!showreel) return;

  showreel.querySelectorAll('.homeCarouselMotionItem video').forEach((video) => {
    const match = video.currentSrc.match(/\/pages\/home\/motion\/(\d{2})@sm\.mp4/) ||
      video.getAttribute('src')?.match(/\/pages\/home\/motion\/(\d{2})@sm\.mp4/);
    const index = match?.[1] || video.dataset.sionTrailIndex;
    if (!index) return;
    const source = `/assets/showreel-trail/${index}@sm.mp4`;
    video.dataset.sionTrailIndex = index;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    if (video.getAttribute('src') === source) return;
    video.src = source;
    video.load();
  });

  showreel.querySelectorAll('.homeCarouselMotionItem img').forEach((poster) => {
    const match = poster.currentSrc.match(/\/pages\/home\/motion\/(\d{2})-poster@(lg|sm)\.webp/) ||
      poster.getAttribute('src')?.match(/\/pages\/home\/motion\/(\d{2})-poster@(lg|sm)\.webp/);
    const index = match?.[1] || poster.dataset.sionTrailIndex;
    if (!index) return;
    poster.dataset.sionTrailIndex = index;
    const source = `/assets/showreel-trail/${index}-poster.jpg`;
    if (poster.getAttribute('src') !== source) poster.src = source;
    poster.removeAttribute('srcset');
  });
};

new MutationObserver(syncShowreelTrailAssets).observe(document.documentElement, {
  childList: true,
  subtree: true,
});
syncShowreelTrailAssets();

const syncFullscreenShowreel = () => {
  const carousel = document.querySelector('.homeCarousel');
  const showreel = carousel?.querySelector('.sionShowreel');
  const title = document.querySelector('.homeCarouselUi__title')?.textContent || '';
  if (!carousel || !showreel) return;

  let video = carousel.querySelector('.sionShowreelFullBackground');
  if (!video) {
    video = document.createElement('video');
    video.className = 'sionShowreelFullBackground';
    video.src = '/pages/home/show-reel/background-clear.mp4';
    video.poster = '/pages/home/show-reel/poster.jpg';
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.setAttribute('aria-hidden', 'true');
    video.addEventListener('ended', () => {
      if (!video.classList.contains('is-visible')) return;
      video.currentTime = 0;
      video.play().catch(() => {});
    });
    // This must live inside the showreel panel. The panel has an opaque black
    // background, so inserting it behind the carousel makes it disappear.
    showreel.prepend(video);
  }

  let soundToggle = carousel.querySelector('.sionShowreelSoundToggle');
  if (!soundToggle) {
    soundToggle = document.createElement('button');
    soundToggle.type = 'button';
    soundToggle.className = 'sionShowreelSoundToggle';
    soundToggle.addEventListener('click', () => {
      const background = carousel.querySelector('.sionShowreelFullBackground');
      if (!background) return;
      background.muted = !background.muted;
      background.play().catch(() => {});
      updateShowreelSoundToggle(soundToggle, background);
    });
    carousel.append(soundToggle);
  }

  const isShowreel = /show\s*reel/i.test(title);
  carousel.classList.toggle('showreelBackgroundActive', isShowreel);
  video.classList.toggle('is-visible', isShowreel);
  soundToggle.classList.toggle('is-visible', isShowreel);
  updateShowreelSoundToggle(soundToggle, video);

  if (!isShowreel) {
    video.pause();
    video.dataset.sionActive = 'false';
    return;
  }

  if (video.dataset.sionActive !== 'true') {
    video.dataset.sionActive = 'true';
    video.currentTime = 0;
  }
  video.play().catch(() => {});
};

const updateShowreelSoundToggle = (button, video) => {
  const isMuted = video.muted;
  button.textContent = isMuted ? 'Sound On' : 'Sound Off';
  button.setAttribute('aria-label', isMuted ? 'Turn sound on' : 'Turn sound off');
  button.setAttribute('aria-pressed', String(!isMuted));
};

setInterval(syncFullscreenShowreel, 300);
