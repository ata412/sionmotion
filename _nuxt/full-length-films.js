import { a as element, q as inject } from './K2cKJ6Jp.js';

const style = document.createElement('style');
style.textContent = `
  .sionFullFilms { padding-top: 12rem; padding-bottom: 12rem; }
  .sionFullFilms__heading { margin-bottom: 4rem; }
  .sionFullFilms__heading h2 { font-size: clamp(3rem, 5vw, 7rem); font-weight: 400; line-height: 1.1; }
  .sionFullFilms__heading p { margin-top: 1.5rem; font-size: 1.6rem; line-height: 1.7; }
  .sionFullFilms__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 5rem 3rem; }
  .sionFullFilms__film { min-width: 0; }
  .sionFullFilms__media { position: relative; }
  .sionFullFilms__media::after {
    content: ''; position: absolute; top: 50%; left: 50%; width: 0; height: 0; margin: -14px 0 0 -9px;
    border-style: solid; border-width: 14px 0 14px 24px; border-color: transparent transparent transparent #fff;
    filter: drop-shadow(0 1px 6px rgba(0, 0, 0, .55)); pointer-events: none;
  }
  .sionFullFilms__film video { display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; object-fit: contain; background: #111; }
  .sionFullFilms__caption { display: flex; justify-content: flex-end; margin-top: 1.5rem; font-size: 1.4rem; line-height: 1.6; }
  .sionFullFilms__duration { opacity: .65; white-space: nowrap; }
  .sionFullFilmsLink { padding-top: 3rem; padding-bottom: 3rem; }
  .sionFullFilmsLink a { display: inline-flex; gap: 1rem; align-items: center; padding: 1rem 1.5rem; border: 1px solid currentColor; border-radius: 999px; font-size: 1.3rem; color: inherit; text-decoration: none; }
  @media (max-width: 767px) {
    .sionFullFilms { padding-top: 7rem; padding-bottom: 7rem; }
    .sionFullFilms__grid { grid-template-columns: 1fr; gap: 3.5rem; }
  }
`;
document.head.append(style);

const durationLabel = (seconds) => {
  const total = Math.floor(seconds);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
};

export const FullLengthFilmsLink = {
  name: 'FullLengthFilmsLink',
  inheritAttrs: false,
  setup() {
    const scrolling = inject('ScrollerKey', null);
    const showFilms = (event) => {
      const target = document.getElementById('full-length-films');
      if (!target) return;
      event.preventDefault();
      if (scrolling?.scroller) {
        scrolling.scroller.resize();
        scrolling.scroller.scrollTo(target, { offset: -90, immediate: true, force: true });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };
    return () => element('nav', { class: 'sionFullFilmsLink gridContainer', 'aria-label': 'Show Reel sections' }, [
      element('a', { href: '#full-length-films', onClick: showFilms }, 'ดูวิดีโอฉบับเต็ม ↓'),
    ]);
  },
};

export const FullLengthFilms = {
  name: 'FullLengthFilms',
  inheritAttrs: false,
  props: { items: { type: Array, default: () => [] } },
  setup(props) {
    return () => element('section', { class: 'sionFullFilms gridContainer', id: 'full-length-films' }, [
      element('div', { class: 'sionFullFilms__heading' }, [
        element('h2', null, 'Full-length films'),
        element('p', null, 'วิดีโอผลงานฉบับเต็ม พร้อมเสียงและปุ่มควบคุมการเล่น'),
      ]),
      element('div', { class: 'sionFullFilms__grid' }, props.items.map((film) =>
        element('article', { class: 'sionFullFilms__film', key: film.src }, [
          element('div', { class: 'sionFullFilms__media' }, [
            element('video', {
              src: film.src, poster: film.poster, playsinline: true,
              preload: 'none', width: film.width, height: film.height,
              role: 'button', tabindex: 0, 'aria-label': film.title,
            }),
          ]),
          element('div', { class: 'sionFullFilms__caption' }, [
            element('span', { class: 'sionFullFilms__duration' }, durationLabel(film.duration)),
          ]),
        ])
      )),
    ]);
  },
};
