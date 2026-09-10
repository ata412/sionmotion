(() => {
  const sets = ['hotel', 'food', 'lifestyle', 'portrait', 'street', 'travel'].map((name) => ({
    background: `/assets/pitch-portfolio/${name}-main.webp`,
    details: [1, 2, 3].map((number) => `/assets/pitch-portfolio/${name}-detail-${number}.webp`)
  }));

  function replaceImages() {
    document.querySelectorAll('.homeCarouselPhotographyItem').forEach((item, itemIndex) => {
      const sources = sets[itemIndex % sets.length];
      const background = item.querySelector('.homeCarouselPhotographyItem__bg');
      if (background && background.getAttribute('src') !== sources.background) {
        background.setAttribute('src', sources.background);
      }
      item.querySelectorAll('.homeCarouselPhotographyItem__fgImage').forEach((image, index) => {
        const source = sources.details[index % sources.details.length];
        if (image.getAttribute('src') !== source) image.setAttribute('src', source);
      });
    });
  }

  new MutationObserver(replaceImages).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['src'],
    childList: true,
    subtree: true
  });
  replaceImages();
})();
