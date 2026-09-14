const headerLogoStyle = document.createElement("style");
headerLogoStyle.textContent = `
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
  .sionHeaderLogo { display: block; width: auto; height: 56px; object-fit: contain; }
  @media (max-width: 767px) { .sionHeaderLogo { height: 44px; } }
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
  .menu .menu__headerGap, .menu .menu__footer { flex-shrink: 0; }
  .menu .menu__items .menuItem[aria-label="Navigate to show reel video"] .menuItem__link {
    font-size: clamp(24px, 5vw, 72px);
    line-height: 1.2;
    width: calc(100% - 4rem);
  }
`;
document.head.append(headerLogoStyle);

document.addEventListener(
  "click",
  (event) => {
    if (event.target.closest(".header__name, .header__nameLink")) {
      event.preventDefault();
      window.location.assign("/");
    }
  },
  true,
);

// Browsers block autoplay with sound. Keep the showreel visible immediately,
// then the existing carousel handler restores sound after the visitor interacts.
const startShowreelBackground = () => {
  const video = document.querySelector('.sionShowreel__background');
  if (!video || !video.paused || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;

  if (!video.dataset.sionShowreelStarted) {
    video.dataset.sionShowreelStarted = 'true';
    video.currentTime = 4;
  }

  video.muted = true;
  video.play().catch(() => {});
};

setInterval(startShowreelBackground, 400);

const syncFullscreenShowreel = () => {
  const carousel = document.querySelector('.homeCarousel');
  const title = document.querySelector('.homeCarouselUi__title')?.textContent || '';
  if (!carousel) return;

  let video = carousel.querySelector('.sionShowreelFullBackground');
  if (!video) {
    video = document.createElement('video');
    video.className = 'sionShowreelFullBackground';
    video.src = '/pages/home/show-reel/background-clear.mp4';
    video.poster = '/pages/home/show-reel/poster.jpg';
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('aria-hidden', 'true');
    carousel.prepend(video);
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
      const original = carousel.querySelector('.sionShowreel__background');
      setTimeout(() => {
        if (original) {
          original.muted = true;
          original.pause();
        }
      }, 0);
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
    return;
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
