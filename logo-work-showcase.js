(() => {
  const works = Array.from({ length: 50 }, (_, index) => String(index + 5));

  const style = document.createElement('style');
  style.textContent = `
    .sionWorkShowcase{background:#0d0d0d;color:#f5f3ef;margin-top:clamp(5rem,12vw,14rem);position:relative;height:1200vh}.sionWorkShowcase__sticky{height:100vh;overflow:hidden;position:sticky;top:0}.sionWorkShowcase__label{font-size:clamp(1.35rem,2.1vw,2.5rem);left:5vw;letter-spacing:-.055em;line-height:1;margin:0;position:absolute;top:clamp(1.5rem,4vw,4rem);z-index:1}.sionWorkShowcase__viewport{inset:0;overflow:hidden;position:absolute}.sionWorkShowcase__rail{align-items:center;display:flex;gap:clamp(.75rem,1.7vw,1.8rem);height:100%;padding:0 5vw;will-change:transform}.sionWorkShowcase__item{flex:0 0 clamp(230px,23vw,360px);position:relative}.sionWorkShowcase__item--size-1{flex-basis:clamp(270px,30vw,460px);margin-top:-12vh}.sionWorkShowcase__item--size-2{flex-basis:clamp(190px,19vw,300px);margin-top:14vh}.sionWorkShowcase__item--size-3{flex-basis:clamp(250px,26vw,410px);margin-top:4vh}.sionWorkShowcase__media{aspect-ratio:4/5;background:#171717;overflow:hidden}.sionWorkShowcase__item--size-1 .sionWorkShowcase__media{aspect-ratio:1/1}.sionWorkShowcase__item--size-2 .sionWorkShowcase__media{aspect-ratio:3/4}.sionWorkShowcase__item--size-3 .sionWorkShowcase__media{aspect-ratio:16/10}.sionWorkShowcase__image{height:100%;object-fit:contain;width:100%}@media (max-width:700px){.sionWorkShowcase{height:1040vh}.sionWorkShowcase__rail{gap:.8rem;padding:0 5vw}.sionWorkShowcase__item{flex-basis:68vw}.sionWorkShowcase__item--size-1{flex-basis:76vw;margin-top:-7vh}.sionWorkShowcase__item--size-2{flex-basis:60vw;margin-top:9vh}.sionWorkShowcase__item--size-3{flex-basis:72vw;margin-top:3vh}}@media (prefers-reduced-motion:reduce){.sionWorkShowcase{height:auto}.sionWorkShowcase__sticky{height:auto;position:relative}.sionWorkShowcase__viewport{overflow:auto;position:relative}.sionWorkShowcase__rail{overflow:auto;padding-bottom:1rem}.sionWorkShowcase__item{flex-basis:76vw!important;margin-top:0!important}}
  `;
  document.head.append(style);

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
      item.innerHTML = `<div class="sionWorkShowcase__media"><img class="sionWorkShowcase__image" src="/assets/exlogo/${image}.webp" alt="" loading="lazy"></div>`;
      rail.append(item);
    });
    const before = page.querySelector('.exploreNext');
    before ? before.before(section) : page.append(section);

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
