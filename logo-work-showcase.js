(() => {
  const works = Array.from({ length: 50 }, (_, index) => String(index + 5));

  const style = document.createElement('style');
  style.textContent = `
    .sionWorkShowcase{background:#0d0d0d;color:#f5f3ef;position:relative;height:1200vh}.sionWorkShowcase__sticky{height:100vh;overflow:hidden;position:sticky;top:0}.sionWorkShowcase__label{font-size:clamp(1.35rem,2.1vw,2.5rem);left:5vw;letter-spacing:-.055em;line-height:1;margin:0;position:absolute;top:calc(var(--headerHeight, 8.8rem) + 1.25rem);z-index:1}.sionWorkShowcase__viewport{inset:0;overflow:hidden;position:absolute}.sionWorkShowcase__rail{align-items:center;display:flex;gap:clamp(.75rem,1.7vw,1.8rem);height:100%;padding:0 5vw;will-change:transform}.sionWorkShowcase__item{cursor:zoom-in;flex:0 0 clamp(230px,23vw,360px);outline:none;position:relative}.sionWorkShowcase__item:focus-visible .sionWorkShowcase__media{outline:1px solid #f5f3ef;outline-offset:4px}.sionWorkShowcase__item--size-1{flex-basis:clamp(270px,30vw,460px);margin-top:-12vh}.sionWorkShowcase__item--size-2{flex-basis:clamp(190px,19vw,300px);margin-top:14vh}.sionWorkShowcase__item--size-3{flex-basis:clamp(250px,26vw,410px);margin-top:4vh}.sionWorkShowcase__media{aspect-ratio:4/5;background:#171717;overflow:hidden}.sionWorkShowcase__item--size-1 .sionWorkShowcase__media{aspect-ratio:1/1}.sionWorkShowcase__item--size-2 .sionWorkShowcase__media{aspect-ratio:3/4}.sionWorkShowcase__item--size-3 .sionWorkShowcase__media{aspect-ratio:16/10}.sionWorkShowcase__image{height:100%;object-fit:contain;transition:transform .45s cubic-bezier(.2,.75,.25,1);width:100%}.sionWorkShowcase__item:hover .sionWorkShowcase__image{transform:scale(1.025)}
    .sionWorkLightbox{background:#0d0d0d;color:#f5f3ef;display:grid;grid-template-rows:auto 1fr auto;inset:0;opacity:0;position:fixed;transition:opacity .35s ease,visibility 0s linear .35s;visibility:hidden;z-index:1000}.sionWorkLightbox.is-open{opacity:1;transition:opacity .35s ease;visibility:visible}.sionWorkLightbox__top{align-items:center;display:flex;justify-content:space-between;padding:clamp(1rem,2vw,2rem) clamp(1rem,2.5vw,2.5rem);position:relative;z-index:2}.sionWorkLightbox__count{font-size:12px;letter-spacing:.03em}.sionWorkLightbox__close{background:none;border:0;color:inherit;cursor:pointer;font:inherit;font-size:12px;padding:.75rem 0;text-transform:uppercase}.sionWorkLightbox__stage{align-items:center;display:flex;justify-content:center;min-height:0;padding:0 clamp(3.75rem,8vw,9rem);position:relative}.sionWorkLightbox__figure{height:100%;margin:0;min-height:0;width:100%}.sionWorkLightbox__image{display:block;height:100%;object-fit:contain;opacity:0;transform:scale(.96);transition:opacity .32s ease,transform .5s cubic-bezier(.2,.75,.25,1);width:100%}.sionWorkLightbox__image.is-visible{opacity:1;transform:scale(1)}.sionWorkLightbox__arrow{align-items:center;background:none;border:0;color:inherit;cursor:pointer;display:flex;font:inherit;font-size:clamp(1.5rem,2.5vw,2.75rem);height:100%;justify-content:center;position:absolute;top:0;width:clamp(3.5rem,7vw,8rem);z-index:2}.sionWorkLightbox__arrow--prev{left:0}.sionWorkLightbox__arrow--next{right:0}.sionWorkLightbox__thumbs{display:flex;gap:.5rem;margin:0 auto;max-width:100%;overflow-x:auto;padding:1.25rem max(1rem,calc(50vw - 2.5rem));scrollbar-width:none}.sionWorkLightbox__thumbs::-webkit-scrollbar{display:none}.sionWorkLightbox__thumb{background:#181818;border:0;cursor:pointer;flex:0 0 5rem;height:4rem;opacity:.38;padding:0;transition:opacity .25s ease}.sionWorkLightbox__thumb.is-active{opacity:1}.sionWorkLightbox__thumb img{height:100%;object-fit:contain;width:100%}body.sionWorkLightboxOpen{overflow:hidden}
    @media (max-width:700px){.sionWorkShowcase{height:1040vh}.sionWorkShowcase__label{top:calc(var(--headerHeight, 5.4rem) + 1.5rem)}.sionWorkShowcase__rail{gap:.8rem;padding:0 5vw}.sionWorkShowcase__item{flex-basis:68vw}.sionWorkShowcase__item--size-1{flex-basis:76vw;margin-top:-7vh}.sionWorkShowcase__item--size-2{flex-basis:60vw;margin-top:9vh}.sionWorkShowcase__item--size-3{flex-basis:72vw;margin-top:3vh}.sionWorkLightbox__top{padding-top:max(1rem,env(safe-area-inset-top))}.sionWorkLightbox__stage{padding:0 2.75rem}.sionWorkLightbox__arrow{font-size:1.5rem;width:2.75rem}.sionWorkLightbox__thumb{flex-basis:4.25rem;height:3.4rem}.sionWorkLightbox__thumbs{padding-left:calc(50vw - 2.125rem);padding-right:calc(50vw - 2.125rem)}}@media (prefers-reduced-motion:reduce){.sionWorkShowcase{height:auto}.sionWorkShowcase__sticky{height:auto;position:relative}.sionWorkShowcase__viewport{overflow:auto;position:relative}.sionWorkShowcase__rail{overflow:auto;padding-bottom:1rem}.sionWorkShowcase__item{flex-basis:76vw!important;margin-top:0!important}.sionWorkLightbox,.sionWorkLightbox__image{transition:none}}
  `;
  document.head.append(style);

  let lightbox;
  let lightboxImage;
  let lightboxCount;
  let lightboxThumbs;
  let activeIndex = 0;
  let returnFocus;

  function showImage(index) {
    activeIndex = (index + works.length) % works.length;
    lightboxImage.classList.remove('is-visible');
    lightboxImage.onload = () => requestAnimationFrame(() => lightboxImage.classList.add('is-visible'));
    lightboxImage.src = `/assets/exlogo/${works[activeIndex]}.webp`;
    if (lightboxImage.complete) requestAnimationFrame(() => lightboxImage.classList.add('is-visible'));
    lightboxCount.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(works.length).padStart(2, '0')}`;
    lightboxThumbs.querySelectorAll('.sionWorkLightbox__thumb').forEach((thumb, thumbIndex) => {
      const isActive = thumbIndex === activeIndex;
      thumb.classList.toggle('is-active', isActive);
      thumb.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
    lightboxThumbs.children[activeIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  function closeLightbox() {
    if (!lightbox?.classList.contains('is-open')) return;
    lightbox.classList.remove('is-open');
    document.body.classList.remove('sionWorkLightboxOpen');
    returnFocus?.focus({ preventScroll: true });
  }

  function ensureLightbox() {
    if (lightbox) return;
    lightbox = document.createElement('div');
    lightbox.className = 'sionWorkLightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Selected work image viewer');
    lightbox.innerHTML = `
      <div class="sionWorkLightbox__top">
        <span class="sionWorkLightbox__count"></span>
        <button class="sionWorkLightbox__close" type="button" aria-label="Close image viewer">Close</button>
      </div>
      <div class="sionWorkLightbox__stage">
        <button class="sionWorkLightbox__arrow sionWorkLightbox__arrow--prev" type="button" aria-label="Previous image">←</button>
        <figure class="sionWorkLightbox__figure"><img class="sionWorkLightbox__image" alt=""></figure>
        <button class="sionWorkLightbox__arrow sionWorkLightbox__arrow--next" type="button" aria-label="Next image">→</button>
      </div>
      <div class="sionWorkLightbox__thumbs" aria-label="Select image"></div>`;
    document.body.append(lightbox);
    lightboxImage = lightbox.querySelector('.sionWorkLightbox__image');
    lightboxCount = lightbox.querySelector('.sionWorkLightbox__count');
    lightboxThumbs = lightbox.querySelector('.sionWorkLightbox__thumbs');

    works.forEach((image, index) => {
      const button = document.createElement('button');
      button.className = 'sionWorkLightbox__thumb';
      button.type = 'button';
      button.setAttribute('aria-label', `View image ${index + 1}`);
      button.innerHTML = `<img src="/assets/exlogo/${image}.webp" alt="" loading="lazy">`;
      button.addEventListener('click', () => showImage(index));
      lightboxThumbs.append(button);
    });

    lightbox.querySelector('.sionWorkLightbox__close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.sionWorkLightbox__arrow--prev').addEventListener('click', () => showImage(activeIndex - 1));
    lightbox.querySelector('.sionWorkLightbox__arrow--next').addEventListener('click', () => showImage(activeIndex + 1));
    const stage = lightbox.querySelector('.sionWorkLightbox__stage');
    const figure = lightbox.querySelector('.sionWorkLightbox__figure');
    lightbox.addEventListener('click', (event) => {
      if (event.target === stage || event.target === figure) closeLightbox();
    });

    let touchStartX = 0;
    lightbox.addEventListener('touchstart', (event) => { touchStartX = event.touches[0].clientX; }, { passive: true });
    lightbox.addEventListener('touchend', (event) => {
      const distance = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(distance) > 45) showImage(activeIndex + (distance < 0 ? 1 : -1));
    }, { passive: true });
  }

  function openLightbox(index, trigger) {
    ensureLightbox();
    returnFocus = trigger;
    showImage(index);
    lightbox.classList.add('is-open');
    document.body.classList.add('sionWorkLightboxOpen');
    lightbox.querySelector('.sionWorkLightbox__close').focus({ preventScroll: true });
  }

  addEventListener('keydown', (event) => {
    if (!lightbox?.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') showImage(activeIndex - 1);
    if (event.key === 'ArrowRight') showImage(activeIndex + 1);
  });

  function createShowcase(page) {
    if (page.querySelector('.sionWorkShowcase')) return;
    const section = document.createElement('section');
    section.className = 'sionWorkShowcase';
    section.setAttribute('aria-label', 'Work gallery');
    section.innerHTML = `<div class="sionWorkShowcase__sticky"><p class="sionWorkShowcase__label">( SELECTED WORK )</p><div class="sionWorkShowcase__viewport"><div class="sionWorkShowcase__rail"></div></div></div>`;
    const rail = section.querySelector('.sionWorkShowcase__rail');
    works.forEach((image, index) => {
      const item = document.createElement('article');
      item.className = 'sionWorkShowcase__item';
      item.classList.add(`sionWorkShowcase__item--size-${(index * 7 + 3) % 4}`);
      item.tabIndex = 0;
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', `Open selected work image ${index + 1}`);
      item.innerHTML = `<div class="sionWorkShowcase__media"><img class="sionWorkShowcase__image" src="/assets/exlogo/${image}.webp" alt="" loading="lazy"></div>`;
      item.addEventListener('click', () => openLightbox(index, item));
      item.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openLightbox(index, item);
        }
      });
      rail.append(item);
    });
    const container = page.querySelector('.slot-wrapper') || page;
    container.prepend(section);

    let frame = 0;
    const update = () => {
      frame = 0;
      const distance = Math.max(0, rail.scrollWidth - innerWidth + innerWidth * .1);
      const range = Math.max(1, section.offsetHeight - innerHeight);
      const progress = Math.max(0, Math.min(1, -section.getBoundingClientRect().top / range));
      const shift = progress * distance;
      rail.style.transform = `translate3d(${-shift}px,0,0)`;
    };
    const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update); };
    addEventListener('scroll', requestUpdate, { passive: true });
    addEventListener('resize', requestUpdate, { passive: true });
    new ResizeObserver(requestUpdate).observe(rail);
    requestUpdate();
  }

  function mount() { document.querySelectorAll('.page.logo').forEach(createShowcase); }
  new MutationObserver(mount).observe(document.documentElement, { childList: true, subtree: true });
  mount();
})();
