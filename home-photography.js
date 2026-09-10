(() => {
  const sources = {
    background: '/assets/pitch-portfolio/hotel-main.webp',
    details: [
      '/assets/pitch-portfolio/hotel-detail-1.webp',
      '/assets/pitch-portfolio/hotel-detail-2.webp',
      '/assets/pitch-portfolio/hotel-detail-3.webp'
    ]
  };

  function replaceImages() {
    document.querySelectorAll('.homeCarouselPhotographyItem').forEach((item) => {
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
