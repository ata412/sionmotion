(() => {
  const sets = ['hotel', 'food', 'lifestyle'].flatMap((name) => [
    `/assets/pitch-portfolio/${name}-main.webp`,
    ...[1, 2, 3].map((number) => `/assets/pitch-portfolio/${name}-detail-${number}.webp`)
  ]);

  function replaceIntroImages() {
    document.querySelectorAll('.page.photography img[src*="/pages/photography/intro/"], .page.photography img[data-sion-intro-image]').forEach((image, index) => {
      image.dataset.sionIntroImage = String(index % sets.length);
      const source = sets[Number(image.dataset.sionIntroImage)];
      if (image.getAttribute('src') !== source) image.setAttribute('src', source);
    });
  }

  new MutationObserver(replaceIntroImages).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['src'],
    childList: true,
    subtree: true
  });
  replaceIntroImages();
})();
