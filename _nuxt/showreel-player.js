// Full-screen player for the Show Reel page: pressing a clip plays only that
// video, with its sound and controls, and the arrows move through every clip.
const CLIP_SELECTOR = '.motionIntroItem, .item, .slide, .galleryItem, .sionFullFilms__film';
const DRAG_LIMIT = 10;

const style = document.createElement('style');
style.textContent = `
  .commercialProduction :is(${CLIP_SELECTOR}) video { cursor: pointer; }
  html.sionPlayerOpen { overflow: hidden; }
  .sionPlayer {
    position: fixed; inset: 0; width: 100%; max-width: none; height: 100%; max-height: none;
    margin: 0; padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
    border: 0; outline: 0; overflow: hidden; background: #000; color: #fff; overscroll-behavior: contain;
  }
  .sionPlayer[open] {
    display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: auto minmax(0, 1fr) auto;
    grid-template-areas: "top top" "video video" "prev next";
  }
  .sionPlayer::backdrop { background: #000; }
  .sionPlayer__top { grid-area: top; display: flex; align-items: center; justify-content: space-between; padding: 4px 8px 4px 16px; }
  .sionPlayer__count { font-size: 14px; font-variant-numeric: tabular-nums; opacity: .75; }
  .sionPlayer__video { grid-area: video; display: block; width: 100%; height: 100%; min-height: 0; object-fit: contain; background: #000; }
  .sionPlayer__button {
    display: flex; align-items: center; justify-content: center; gap: 8px; min-width: 48px; min-height: 48px;
    padding: 0 12px; border: 0; background: none; color: inherit; font: inherit; font-size: 14px; cursor: pointer;
  }
  .sionPlayer__button:hover { opacity: .7; }
  .sionPlayer__button:focus-visible { outline: 2px solid currentColor; outline-offset: -4px; }
  .sionPlayer__button svg { width: 24px; height: 24px; flex: none; }
  .sionPlayer__button svg path { fill: none; stroke: currentColor; }
  .sionPlayer__prev { grid-area: prev; }
  .sionPlayer__next { grid-area: next; }
  @media (min-aspect-ratio: 1/1) {
    .sionPlayer[open] {
      grid-template-columns: 72px minmax(0, 1fr) 72px; grid-template-rows: auto minmax(0, 1fr);
      grid-template-areas: "top top top" "prev video next";
    }
    .sionPlayer__prev span, .sionPlayer__next span {
      position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%);
    }
  }
`;
document.head.append(style);

const icon = (path) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="${path}"/></svg>`;
const text = (en, th) => (document.documentElement.dataset.sionLanguage === 'th' ? th : en);

let player = null;
let video = null;
let counter = null;
let playlist = [];
let current = 0;
let opener = null;
let pausedClips = [];

const pageClips = () => [...document.querySelectorAll('.commercialProduction video')];
const clipSource = (clip) => clip.currentSrc || clip.src;

const showClip = (index) => {
  current = (index + playlist.length) % playlist.length;
  const clip = playlist[current];
  video.poster = clip.poster;
  video.src = clip.src;
  counter.textContent = `${current + 1} / ${playlist.length}`;
  video.play().catch(() => {});
};

const makeButton = (className, label, content) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `sionPlayer__button ${className}`;
  button.setAttribute('aria-label', label);
  button.innerHTML = content;
  return button;
};

const buildPlayer = () => {
  player = document.createElement('dialog');
  player.className = 'sionPlayer';
  player.setAttribute('aria-label', 'Show Reel');
  player.tabIndex = -1;

  const top = document.createElement('div');
  top.className = 'sionPlayer__top';
  counter = document.createElement('span');
  counter.className = 'sionPlayer__count';
  const closeButton = makeButton('sionPlayer__close', text('Close', 'ปิด'), icon('M6 6l12 12M18 6L6 18'));
  closeButton.addEventListener('click', () => player.close());
  top.append(counter, closeButton);

  video = document.createElement('video');
  video.className = 'sionPlayer__video';
  video.controls = true;
  video.playsInline = true;

  const previousLabel = text('Previous', 'ก่อนหน้า');
  const nextLabel = text('Next', 'ถัดไป');
  const previous = makeButton('sionPlayer__prev', previousLabel, `${icon('M15 5l-7 7 7 7')}<span>${previousLabel}</span>`);
  const next = makeButton('sionPlayer__next', nextLabel, `<span>${nextLabel}</span>${icon('M9 5l7 7-7 7')}`);
  previous.addEventListener('click', () => showClip(current - 1));
  next.addEventListener('click', () => showClip(current + 1));

  player.append(top, video, previous, next);

  // Keep the page's smooth scrolling and carousel keys from reacting behind the player.
  ['wheel', 'touchmove'].forEach((type) => player.addEventListener(type, (event) => event.stopPropagation()));
  player.addEventListener('keydown', (event) => {
    event.stopPropagation();
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showClip(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  player.addEventListener('close', () => {
    video.pause();
    video.removeAttribute('src');
    video.removeAttribute('poster');
    video.load();
    document.documentElement.classList.remove('sionPlayerOpen');
    pausedClips.forEach((clip) => clip.play().catch(() => {}));
    pausedClips = [];
    opener?.focus?.({ preventScroll: true });
    opener = null;
  });
  document.body.append(player);
};

const openClip = (clip) => {
  if (!player) buildPlayer();
  const sources = new Map();
  pageClips().forEach((item) => {
    const src = clipSource(item);
    if (src && !sources.has(src)) sources.set(src, { src, poster: item.poster });
  });
  playlist = [...sources.values()];
  const index = playlist.findIndex((item) => item.src === clipSource(clip));
  if (index < 0) return;

  opener = clip;
  pausedClips = pageClips().filter((item) => !item.paused);
  pausedClips.forEach((item) => item.pause());
  document.documentElement.classList.add('sionPlayerOpen');
  player.showModal();
  player.focus();
  showClip(index);
};

// Gallery cards overlap and a card's button can extend over its neighbour, so
// use the clip that is actually under the press rather than the pressed card's.
const clipAtPoint = (x, y) => document.elementsFromPoint(x, y)
  .find((element) => element.tagName === 'VIDEO' && element.closest(CLIP_SELECTOR));

let pressStart = null;
window.addEventListener('pointerdown', (event) => {
  pressStart = { x: event.clientX, y: event.clientY };
}, true);

window.addEventListener('click', (event) => {
  const container = event.target.closest?.(CLIP_SELECTOR);
  if (!container || !container.closest('.commercialProduction') || event.button !== 0) return;
  const fromKeyboard = event.detail === 0;
  if (!fromKeyboard && pressStart
    && Math.hypot(event.clientX - pressStart.x, event.clientY - pressStart.y) > DRAG_LIMIT) return;
  const clip = fromKeyboard
    ? container.querySelector('video')
    : clipAtPoint(event.clientX, event.clientY);
  if (!clip) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  openClip(clip);
}, true);

window.addEventListener('keydown', (event) => {
  if ((event.key !== 'Enter' && event.key !== ' ') || !event.target.matches?.('.sionFullFilms__film video')) return;
  event.preventDefault();
  openClip(event.target);
}, true);

window.addEventListener('popstate', () => {
  if (player?.open) player.close();
});
