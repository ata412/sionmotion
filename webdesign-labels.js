(() => {
  const from = 'Campaign';
  const to = 'Web Design';

  function replaceLabels() {
    if (!document.body) return;
    const regions = document.querySelectorAll('.menu, .homeCarouselUi, .homeCarousel__title, .intro__title, .intro__subtitle, .page.campaign, .exploreNext');
    regions.forEach((region) => {
      const walker = document.createTreeWalker(region, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach((node) => {
        if (node.nodeValue.includes(from)) node.nodeValue = node.nodeValue.replaceAll(from, to);
      });
    });
    document.querySelectorAll('.menu [aria-label], .homeCarouselUi [aria-label], .intro__title[aria-label], .page.campaign [aria-label], .exploreNext [aria-label]').forEach((element) => {
      const label = element.getAttribute('aria-label');
      if (label && label.includes(from)) element.setAttribute('aria-label', label.replaceAll(from, to));
    });
    if (location.pathname === '/campaign') document.title = 'Web Design | Sion Motion';
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', replaceLabels, { once: true });
  else replaceLabels();
  setInterval(replaceLabels, 750);
})();
