(() => {
  const from = 'Campaign';
  const to = 'Web Design';

  function replaceLabels() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (node.nodeValue.trim() === from) node.nodeValue = node.nodeValue.replace(from, to);
    });
    document.querySelectorAll('[aria-label]').forEach((element) => {
      const label = element.getAttribute('aria-label');
      if (label && label.includes(from)) element.setAttribute('aria-label', label.replaceAll(from, to));
    });
    if (location.pathname === '/campaign') document.title = 'Web Design | Sion Motion';
  }

  new MutationObserver(replaceLabels).observe(document.documentElement, { childList: true, subtree: true });
  replaceLabels();
})();
