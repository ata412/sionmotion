// Preserve the original gallery compositions; constrain the oversized reels.
const style = document.createElement('style');
style.textContent = `
  .commercialProduction .motionLayout1 .galleryItem {
    max-width: min(100%, 45svh);
  }
  .commercialProduction .motionLayout3__itemFull {
    width: min(100%, 360px, 33.75svh); margin-inline: auto;
  }
  .commercialProduction .crslBasic { --reel-width: min(300px, 29.25svh); }
  .commercialProduction .crslBasic__crsl { grid-column: 1 / -1; --offset: 0px; }
  .commercialProduction .crslBasic .crsl__slides { width: 100%; }
  .commercialProduction .crslBasic .slide { max-width: calc(var(--reel-width) + var(--columnGap)); }
  .commercialProduction .crslBasic__top {
    grid-column: 1 / -1; width: min(100%, 760px); margin-inline: auto;
  }
  @media (max-width: 900px) {
    .commercialProduction .motionLayout3__itemFull { width: min(100%, 280px, 31.5svh); }
    .commercialProduction .crslBasic { --reel-width: min(260px, 29.25svh); }
  }
`;
document.head.append(style);
