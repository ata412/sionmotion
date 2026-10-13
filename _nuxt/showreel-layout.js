// Portrait reels need their own sizing within the shared Motion layouts.
const style = document.createElement('style');
style.textContent = `
  .commercialProduction { --reel-width: min(360px, 33.75svh); }
  .commercialProduction .galleryItem { max-width: var(--reel-width); justify-self: center; }
  .commercialProduction .motionLayout3__itemFull { margin-inline: auto; }
  .commercialProduction .motionLayout3__itemOffset,
  .commercialProduction .motionLayout3__itemGroupItem { aspect-ratio: 9 / 16; }
  .commercialProduction .crslBasic { --reel-width: min(300px, 29.25svh); }
  .commercialProduction .crslBasic .slide { max-width: calc(var(--reel-width) + var(--columnGap)); }
  .commercialProduction .motionIntroItem__hero .media {
    width: var(--reel-width); height: auto; aspect-ratio: 9 / 16;
    left: 50%; top: 50%; transform: translate(-50%, -50%); object-fit: contain;
  }
  .commercialProduction .motionIntroItem__heroInner { background: transparent; }
  .commercialProduction .motionLayout4__inner {
    display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 3rem; padding: 3rem; height: auto; aspect-ratio: auto;
  }
  .commercialProduction .motionLayout4__left,
  .commercialProduction .motionLayout4__right {
    display: flex; align-items: center; justify-content: center;
    position: relative; width: 100%; height: auto;
  }
  .commercialProduction .motionLayout4__itemLeft,
  .commercialProduction .motionLayout4__itemRight {
    position: static; width: min(100%, var(--reel-width)); height: auto;
    aspect-ratio: 9 / 16; object-fit: contain;
  }
  @media (max-width: 900px) {
    .commercialProduction { --reel-width: min(280px, 31.5svh); }
    .commercialProduction .crslBasic { --reel-width: min(260px, 29.25svh); }
    .commercialProduction .motionLayout3__top { align-items: center; }
    .commercialProduction .motionLayout3__itemGroup { align-items: center; width: 100%; }
    .commercialProduction .motionLayout4__inner { grid-template-columns: 1fr; padding: 2rem; }
  }
`;
document.head.append(style);
