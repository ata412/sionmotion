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
  .header__top { z-index: 10020 !important; pointer-events: none !important; }
  .header__name, .header__menuBtn, .sionGlobalNav,
  .header__name a, .sionGlobalNav a { pointer-events: auto !important; }
  .sionGlobalNav {
    position: absolute; left: 50%; top: 50%; z-index: 10021;
    display: flex; align-items: center; gap: clamp(1rem, 2.25vw, 2.75rem);
    transform: translate(-50%, -50%); white-space: nowrap;
    font-size: 1.1rem; line-height: 1; text-transform: uppercase;
  }
  .sionGlobalNav a { position: relative; padding: .55rem 0; color: inherit; text-decoration: none; }
  .sionGlobalNav a::after {
    content: ''; position: absolute; left: 0; right: 0; bottom: .25rem; height: 1px;
    background: currentColor; transform: scaleX(0); transform-origin: right;
    transition: transform .35s cubic-bezier(.16,1,.3,1);
  }
  .sionGlobalNav a:hover::after, .sionGlobalNav a[aria-current="page"]::after {
    transform: scaleX(1); transform-origin: left;
  }
  .sionGlobalNav__services { color: #ff6038 !important; }
  .sionGlobalNav__packages { color: #ff6038 !important; }
  @media (hover: hover) and (pointer: fine) {
    .sionGlobalNav { transition: gap .45s cubic-bezier(.16,1,.3,1); }
    .sionGlobalNav:hover { gap: clamp(1.35rem, 2.8vw, 3.4rem); }
    .sionGlobalNav a {
      transform-origin: 50% 100%;
      transition: transform .42s cubic-bezier(.16,1,.3,1), color .25s ease;
      will-change: transform;
    }
    .sionGlobalNav a:hover { z-index: 2; transform: translateY(-.18rem) scale(1.32); }
    .sionGlobalNav a:has(+ a:hover),
    .sionGlobalNav a:hover + a { z-index: 1; transform: translateY(-.08rem) scale(1.13); }
  }
  @media (max-width: 1100px) {
    .sionGlobalNav a:not(.sionGlobalNav__packages) { display: none; }
  }
  @media (max-width: 767px) {
    .sionGlobalNav { left: auto; right: 4.5rem; transform: translateY(-50%); font-size: .9rem; }
  }
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
  .sionAiCarouselItem .homeCarouselMotion { display: none !important; }
  .sionAiCarousel {
    position: absolute; inset: 0; overflow: hidden; background: #080b08; color: #b8ff3d;
    font-family: Clarkson, Arial, sans-serif; pointer-events: none;
  }
  .sionAiCarousel__media { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: .72; }
  .sionAiCarousel__shade { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(3,8,3,.88), rgba(3,8,3,.12) 68%, rgba(3,8,3,.48)); }
  .sionAiCarousel__grid { position: absolute; inset: 0; opacity: .2; background-image: linear-gradient(rgba(184,255,61,.35) 1px,transparent 1px),linear-gradient(90deg,rgba(184,255,61,.35) 1px,transparent 1px); background-size: 7.5vw 7.5vw; }
  .sionAiCarousel__copy { position: absolute; left: 8vw; top: 50%; z-index: 2; transform: translateY(-50%); }
  .sionAiCarousel__copy span { display: block; margin-bottom: 1rem; font-size: clamp(.7rem,1vw,1rem); letter-spacing: .16em; text-transform: uppercase; }
  .sionAiCarousel__copy strong { display: block; font-size: clamp(4rem,10vw,10rem); font-weight: 400; line-height: .78; letter-spacing: -.08em; }
  .sionAiCarousel__copy em { display: block; margin-top: 1.7rem; color: #fff; font-size: clamp(1rem,1.6vw,1.7rem); font-style: normal; }
  .sionAiCarousel__box { position: absolute; z-index: 3; border: 2px solid #b8ff3d; box-shadow: 0 0 0 1px rgba(0,0,0,.3); }
  .sionAiCarousel__box::before { content: attr(data-label); position: absolute; left: -2px; top: -1.55rem; padding: .25rem .45rem; color: #071000; background: #b8ff3d; font-size: .62rem; letter-spacing: .08em; white-space: nowrap; }
  .sionAiCarousel__box--1 { right: 28%; top: 32%; width: 13%; height: 27%; }
  .sionAiCarousel__box--2 { right: 12%; top: 38%; width: 12%; height: 23%; }
  .sionAiCarousel__count { position: absolute; right: 3rem; bottom: 3rem; z-index: 3; padding: .75rem 1rem; border: 1px solid currentColor; background: rgba(3,8,3,.65); font-size: .8rem; letter-spacing: .12em; }
  .sionDigitalCarouselItem .homeCarouselCampaigns { display: none !important; }
  .sionDigitalCarousel { position:absolute;inset:0;overflow:hidden;background:#ff6038;color:#0a0a0a;font-family:Clarkson,Arial,sans-serif;pointer-events:none; }
  .sionDigitalCarousel__grid { position:absolute;inset:0;background-image:linear-gradient(rgba(0,0,0,.18) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.18) 1px,transparent 1px);background-size:8vw 8vw; }
  .sionDigitalCarousel__copy { position:absolute;left:7vw;top:50%;z-index:2;transform:translateY(-50%); }
  .sionDigitalCarousel__copy span { display:block;margin-bottom:1rem;font-size:clamp(.7rem,1vw,1rem);letter-spacing:.16em;text-transform:uppercase; }
  .sionDigitalCarousel__copy strong { display:block;font-size:clamp(4rem,9.4vw,9.5rem);font-weight:400;line-height:.77;letter-spacing:-.08em; }
  .sionDigitalCarousel__copy em { display:block;margin-top:1.6rem;font-size:clamp(1rem,1.6vw,1.7rem);font-style:normal; }
  .sionDigitalCarousel__orbit { position:absolute;right:7vw;top:50%;width:min(33vw,32rem);aspect-ratio:1;border:1px solid currentColor;border-radius:50%;transform:translateY(-50%); }
  .sionDigitalCarousel__orbit:before,.sionDigitalCarousel__orbit:after{content:'';position:absolute;border:1px solid currentColor;border-radius:50%;inset:16%}.sionDigitalCarousel__orbit:after{inset:33%;background:#0a0a0a}
  .sionDigitalCarousel__channel{position:absolute;z-index:3;padding:.55rem .75rem;background:#f4f1eb;border:1px solid #0a0a0a;font-size:.72rem;letter-spacing:.08em}.sionDigitalCarousel__channel--a{right:25%;top:18%}.sionDigitalCarousel__channel--b{right:5%;top:47%}.sionDigitalCarousel__channel--c{right:23%;bottom:16%}.sionDigitalCarousel__channel--d{right:39%;top:47%}
  @media (max-width: 767px) {
    .sionAiCarousel__copy { left: 7vw; }
    .sionAiCarousel__copy strong { font-size: 22vw; }
    .sionAiCarousel__box--1 { right: 18%; top: 27%; width: 28%; height: 25%; }
    .sionAiCarousel__box--2 { right: 7%; top: 56%; width: 24%; height: 19%; }
    .sionAiCarousel__count { right: 1rem; bottom: 5rem; }
    .sionDigitalCarousel__copy{left:7vw;top:39%}.sionDigitalCarousel__copy strong{font-size:19vw}.sionDigitalCarousel__orbit{right:-16vw;top:70%;width:70vw}.sionDigitalCarousel__channel--a{right:31%;top:56%}.sionDigitalCarousel__channel--b{right:3%;top:70%}.sionDigitalCarousel__channel--c{right:24%;bottom:8%}.sionDigitalCarousel__channel--d{right:55%;top:72%}
  }


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
  .sionBackToCarousel {
    position: fixed; left: clamp(1.2rem, 2.5vw, 3rem); bottom: clamp(1.2rem, 2.5vw, 3rem); z-index: 10030;
    display: inline-flex; align-items: center; gap: .8rem; padding: .9rem 1.25rem;
    border: 1px solid currentColor; border-radius: 999px; background: #111; color: #fff;
    font: 500 .9rem/1 Clarkson, Arial, sans-serif; letter-spacing: .08em; text-decoration: none;
    text-transform: uppercase; transition: background-color .25s ease, color .25s ease, transform .35s cubic-bezier(.16,1,.3,1);
  }
  .sionBackToCarousel:hover { background: #fff; color: #111; transform: translateX(-.3rem); }
  .sionBackToCarousel span { font-size: 1.3em; line-height: .7; }
  @media (max-width: 767px) {
    .sionBackToCarousel { font-size: .75rem; padding: .8rem 1rem; }
  }
`;
document.head.append(headerLogoStyle);

const carouselChapterRoutes = new Set([
  '/logo', '/typography', '/color', '/photography', '/campaign', '/motion', '/commercial-production', '/ai-solution', '/digital-marketing'
]);
const syncBackToCarouselButton = () => {
  const shouldShow = carouselChapterRoutes.has(location.pathname.replace(/\/$/, ''));
  let button = document.querySelector('.sionBackToCarousel');
  if (!shouldShow) {
    button?.remove();
    return;
  }
  if (button) return;
  button = document.createElement('a');
  button.className = 'sionBackToCarousel';
  button.href = '/?carousel=1';
  button.setAttribute('aria-label', 'Back to carousel');
  button.innerHTML = '<span aria-hidden="true">&#8592;</span> Carousel';
  button.addEventListener('click', (event) => {
    event.preventDefault();
    location.assign('/?carousel=1');
  });
  document.body.append(button);
};
new MutationObserver(syncBackToCarouselButton).observe(document.documentElement, { childList: true, subtree: true });
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', syncBackToCarouselButton, { once: true });
else syncBackToCarouselButton();

// Browsers cache tab icons very aggressively. Version every icon reference so
// the Sion Motion artwork replaces the favicon from the cloned site at once.
const sionIconVersion = '20260916-1';
const refreshBrowserIcons = () => {
  document.querySelectorAll('link[rel~="icon"], link[rel="apple-touch-icon"], link[rel="manifest"]').forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (!href || href.includes(`v=${sionIconVersion}`)) return;
    link.setAttribute('href', `${href.split('?')[0]}?v=${sionIconVersion}`);
  });
};
new MutationObserver(refreshBrowserIcons).observe(document.head, { childList: true, subtree: true });
refreshBrowserIcons();

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
  landingScript.src = '/landing-page.js?v=20260921-01';
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

const syncAiSolutionMenu = () => {
  const list = document.querySelector('.menu .menu__items');
  if (!list) return;
  const existing = [...list.querySelectorAll('.menuItem')].find((item) =>
    /ai\s*solution/i.test(item.textContent || '') ||
    /navigate to ai solution/i.test(item.getAttribute('aria-label') || '')
  );
  if (existing) return;
  const showreel = [...list.querySelectorAll('.menuItem')].find((item) =>
    /show\s*reel/i.test(item.textContent || '')
  );
  if (!showreel) return;
  const item = showreel.cloneNode(true);
  item.classList.remove('active', 'clicked', 'rollover', 'dimmed');
  item.dataset.sionMenuFallback = 'ai-solution';
  item.setAttribute('aria-label', 'Navigate to AI Solution');
  const index = item.querySelector('.menuItem__index');
  const link = item.querySelector('.menuItem__link');
  if (index) index.textContent = '08';
  if (link) link.textContent = 'AI Solution';
  const openAi = (event) => {
    if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    event.stopImmediatePropagation();
    window.location.assign('/ai-solution');
  };
  item.addEventListener('click', openAi);
  item.addEventListener('keydown', openAi);
  showreel.after(item);
};

new MutationObserver(syncAiSolutionMenu).observe(document.documentElement, {
  childList: true,
  subtree: true,
});
syncAiSolutionMenu();

const syncDigitalMarketingMenu = () => {
  const list = document.querySelector('.menu .menu__items');
  if (!list) return;
  const existing = [...list.querySelectorAll('.menuItem')].find((item) =>
    /digital\s*marketing/i.test(item.textContent || '') ||
    /navigate to digital marketing/i.test(item.getAttribute('aria-label') || '')
  );
  if (existing) return;
  const aiSolution = [...list.querySelectorAll('.menuItem')].find((item) => /ai\s*solution/i.test(item.textContent || ''));
  if (!aiSolution) return;
  const item = aiSolution.cloneNode(true);
  item.classList.remove('active', 'clicked', 'rollover', 'dimmed');
  item.dataset.sionMenuFallback = 'digital-marketing';
  item.setAttribute('aria-label', 'Navigate to Digital Marketing');
  const index = item.querySelector('.menuItem__index');
  const link = item.querySelector('.menuItem__link');
  if (index) index.textContent = '09';
  if (link) link.textContent = 'Digital Marketing';
  const openDigitalMarketing = (event) => {
    if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    event.stopImmediatePropagation();
    window.location.assign('/digital-marketing');
  };
  item.addEventListener('click', openDigitalMarketing);
  item.addEventListener('keydown', openDigitalMarketing);
  aiSolution.after(item);
};
new MutationObserver(syncDigitalMarketingMenu).observe(document.documentElement, { childList: true, subtree: true });
syncDigitalMarketingMenu();

// Add a visible navigation bar to the original pages and expose Services in
// the full-screen Index menu. Both are re-mounted after Nuxt route changes.
const globalNavItems = [
  ['/logo', 'Logo'],
  ['/photography', 'Photography'],
  ['/campaign', 'Web Design'],
  ['/motion', 'Motion'],
  ['/commercial-production', 'Show Reel'],
  ['/ai-solution', 'AI Solution'],
  ['/digital-marketing', 'Digital Marketing'],
  ['/services', 'Services'],
  ['/packages', 'Packages'],
];

const syncGlobalNavigation = () => {
  const header = document.querySelector('.header__inner');
  if (header && !header.querySelector('.sionGlobalNav')) {
    const nav = document.createElement('nav');
    nav.className = 'sionGlobalNav';
    nav.setAttribute('aria-label', 'Main navigation');
    globalNavItems.forEach(([href, label]) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = label;
      if (href === '/services') link.className = 'sionGlobalNav__services';
      if (href === '/packages') link.className = 'sionGlobalNav__packages';
      if (location.pathname === href) link.setAttribute('aria-current', 'page');
      nav.append(link);
    });
    const menuButton = header.querySelector('.header__menuBtn');
    header.insertBefore(nav, menuButton || null);
  }

  const list = document.querySelector('.menu .menu__items');
  if (!list || list.querySelector('[data-sion-menu-fallback="services"]')) return;
  if ([...list.querySelectorAll('.menuItem')].some((item) => /navigate to services/i.test(item.getAttribute('aria-label') || ''))) return;
  const items = [...list.querySelectorAll('.menuItem')];
  const source = items.find((item) => /show\s*reel/i.test(item.textContent || '')) || items.at(-1);
  if (!source) return;
  const item = source.cloneNode(true);
  item.classList.remove('active', 'clicked', 'rollover', 'dimmed');
  item.dataset.sionMenuFallback = 'services';
  item.setAttribute('aria-label', 'Navigate to Services');
  const index = item.querySelector('.menuItem__index');
  const link = item.querySelector('.menuItem__link');
  if (index) index.textContent = '10';
  if (link) link.textContent = 'Services';
  const openServices = (event) => {
    if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    event.stopImmediatePropagation();
    window.location.assign('/services');
  };
  item.addEventListener('click', openServices);
  item.addEventListener('keydown', openServices);
  list.append(item);
};

new MutationObserver(syncGlobalNavigation).observe(document.documentElement, {
  childList: true,
  subtree: true,
});
syncGlobalNavigation();

const syncPackagesMenuItem = () => {
  const list = document.querySelector('.menu .menu__items');
  if (!list || list.querySelector('[data-sion-menu-fallback="packages"]')) return;
  if ([...list.querySelectorAll('.menuItem')].some((item) => /navigate to packages/i.test(item.getAttribute('aria-label') || ''))) return;
  const source = [...list.querySelectorAll('.menuItem')].at(-1);
  if (!source) return;
  const item = source.cloneNode(true);
  item.classList.remove('active', 'clicked', 'rollover', 'dimmed');
  item.dataset.sionMenuFallback = 'packages';
  item.setAttribute('aria-label', 'Navigate to Packages');
  const index = item.querySelector('.menuItem__index');
  const link = item.querySelector('.menuItem__link');
  if (index) index.textContent = '11';
  if (link) link.textContent = 'Packages';
  const openPackages = (event) => {
    if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    event.stopImmediatePropagation();
    window.location.assign('/packages');
  };
  item.addEventListener('click', openPackages);
  item.addEventListener('keydown', openPackages);
  list.append(item);
};

new MutationObserver(syncPackagesMenuItem).observe(document.documentElement, {
  childList: true,
  subtree: true,
});
syncPackagesMenuItem();

const syncAiCarouselSlide = () => {
  const items = [...document.querySelectorAll('.homeCarouselItem')];
  if (items.length < 8 || !items.some((item) => item.querySelector('.sionShowreel'))) return;
  const item = items[7];
  if (!item || item.classList.contains('sionAiCarouselItem')) return;
  item.classList.add('sionAiCarouselItem');
  const inner = item.querySelector('.homeCarouselItem__inner') || item;
  const visual = document.createElement('div');
  visual.className = 'sionAiCarousel';
  visual.setAttribute('aria-hidden', 'true');
  visual.innerHTML = `<video class="sionAiCarousel__media" src="/assets/ai-solution/media/package-conveyor.mp4" poster="/assets/ai-solution/media/package-conveyor.jpg" muted loop playsinline autoplay preload="metadata"></video><div class="sionAiCarousel__shade"></div><div class="sionAiCarousel__grid"></div><div class="sionAiCarousel__copy"><span>Computer vision / Automation</span><strong>AI<br>Solution</strong><em>See it. Count it. Act on it.</em></div><i class="sionAiCarousel__box sionAiCarousel__box--1" data-label="PACKAGE 98%"></i><i class="sionAiCarousel__box sionAiCarousel__box--2" data-label="PACKAGE 96%"></i><div class="sionAiCarousel__count">LIVE COUNT&nbsp;&nbsp; 0248</div>`;
  inner.append(visual);
  visual.querySelector('video')?.play().catch(() => {});
};

new MutationObserver(syncAiCarouselSlide).observe(document.documentElement, { childList: true, subtree: true });
syncAiCarouselSlide();

const syncDigitalMarketingCarouselSlide = () => {
  const items = [...document.querySelectorAll('.homeCarouselItem')];
  if (items.length < 9 || !items.some((item) => item.querySelector('.sionShowreel'))) return;
  const item = items[8];
  if (!item || item.classList.contains('sionDigitalCarouselItem')) return;
  item.classList.add('sionDigitalCarouselItem');
  const inner = item.querySelector('.homeCarouselItem__inner') || item;
  const visual = document.createElement('div');
  visual.className = 'sionDigitalCarousel';
  visual.setAttribute('aria-hidden', 'true');
  visual.innerHTML = `<div class="sionDigitalCarousel__grid"></div><div class="sionDigitalCarousel__copy"><span>Strategy / Creative / Media / Data</span><strong>Digital<br>Marketing</strong><em>Every channel. One direction.</em></div><i class="sionDigitalCarousel__orbit"></i><span class="sionDigitalCarousel__channel sionDigitalCarousel__channel--a">SOCIAL</span><span class="sionDigitalCarousel__channel sionDigitalCarousel__channel--b">SEARCH</span><span class="sionDigitalCarousel__channel sionDigitalCarousel__channel--c">CONTENT</span><span class="sionDigitalCarousel__channel sionDigitalCarousel__channel--d">DATA</span>`;
  inner.append(visual);
};
new MutationObserver(syncDigitalMarketingCarouselSlide).observe(document.documentElement, { childList: true, subtree: true });
syncDigitalMarketingCarouselSlide();

document.addEventListener('click', (event) => {
  if (!event.target.closest('.sionAiCarouselItem')) return;
  if (!/ai\s*solution/i.test(document.querySelector('.homeCarouselUi__title')?.textContent || '')) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  location.assign('/ai-solution');
}, true);

document.addEventListener('click', (event) => {
  if (!event.target.closest('.sionDigitalCarouselItem')) return;
  if (!/digital\s*marketing/i.test(document.querySelector('.homeCarouselUi__title')?.textContent || '')) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  location.assign('/digital-marketing');
}, true);

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
