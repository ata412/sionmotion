(() => {
  const sets = ['hotel', 'food', 'lifestyle'].flatMap((name) => [
    `/assets/pitch-portfolio/${name}-main.webp`,
    ...[1, 2, 3].map((number) => `/assets/pitch-portfolio/${name}-detail-${number}.webp`)
  ]);
  const galleryImages = ['hotel', 'food', 'lifestyle', 'portrait', 'street', 'travel'].flatMap((name) => [
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

  function replaceGalleryImages() {
    const selector = '.page.photography img[src*="/pages/photography/shuffle-carousel/"], .page.photography img[src*="/pages/photography/image-grid/"], .page.photography img[data-sion-gallery-image]';
    document.querySelectorAll(selector).forEach((image, index) => {
      image.dataset.sionGalleryImage = String(index % galleryImages.length);
      const source = galleryImages[Number(image.dataset.sionGalleryImage)];
      if (image.getAttribute('src') !== source) image.setAttribute('src', source);
    });
  }

  function replacePhotographyImages() {
    replaceIntroImages();
    replaceGalleryImages();
  }

  new MutationObserver(replacePhotographyImages).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['src'],
    childList: true,
    subtree: true
  });
  replacePhotographyImages();
})();
