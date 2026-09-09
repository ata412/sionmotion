const headerLogoStyle = document.createElement("style");
headerLogoStyle.textContent = `
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
