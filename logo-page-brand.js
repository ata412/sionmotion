const logoPageBrandStyle = document.createElement('style');
logoPageBrandStyle.textContent = `
  .page.logo svg.sionBrandOriginal { display: none !important; }
  .page.logo .sionBrandReplacement {
    align-items: center;
    color: currentColor;
    display: inline-flex;
    justify-content: center;
  }
  .page.logo .sionBrandReplacement--lockup {
    gap: clamp(.7rem, 1.2vw, 1.8rem);
  }
  .page.logo .sionBrandReplacement--lockup.logoBlock__logo {
    aspect-ratio: auto;
    width: 70%;
  }
  .page.logo .sionBrandReplacement--icon.logoBlock__logo {
    aspect-ratio: auto;
    width: 42%;
  }
  .page.logo .sionBrandReplacement--text.logoBlock__logo {
    aspect-ratio: auto;
    width: 70%;
  }
  .page.logo .sionBrandReplacement__mark {
    display: block;
    height: 3.2em;
    object-fit: contain;
    width: 2.1em;
  }
  .page.logo .logoBlock__logo .sionBrandReplacement__mark {
    height: clamp(7rem, 12vw, 17rem);
    width: auto;
  }
  .page.logo .sionBrandReplacement__name {
    font-family: Clarkson, Arial, sans-serif;
    font-size: clamp(2rem, 4.3vw, 7rem);
    font-weight: 400;
    letter-spacing: -.035em;
    line-height: .9;
    white-space: nowrap;
  }
  .page.logo .sionBrandReplacement--text .sionBrandReplacement__name {
    font-size: inherit;
  }
  .page.logo .sionBrandReplacement--text.logoBlock__logo .sionBrandReplacement__name {
    font-size: clamp(2rem, 4.3vw, 7rem);
  }
`;
document.head.append(logoPageBrandStyle);

const brandText = (value) => value
  .replaceAll("Squarespace's", "Sion Motion's")
  .replaceAll('SQUARESPACE', 'SION MOTION')
  .replaceAll('Squarespace', 'Sion Motion');

function replacementFor(type, original) {
  const replacement = document.createElement('span');
  replacement.className = `${original.getAttribute('class') || ''} sionBrandReplacement sionBrandReplacement--${type}`;
  replacement.setAttribute('aria-label', 'Sion Motion');

  if (type !== 'text') {
    const mark = document.createElement('img');
    mark.className = 'sionBrandReplacement__mark';
    mark.src = '/assets/sion-motion-mark.png';
    mark.alt = '';
    replacement.append(mark);
  }
  if (type !== 'icon') {
    const name = document.createElement('span');
    name.className = 'sionBrandReplacement__name';
    name.textContent = 'Sion Motion';
    replacement.append(name);
  }
  return replacement;
}

function replaceLogoSymbols(page) {
  page.querySelectorAll('svg use[href*="icon-squarespace-"]').forEach((use) => {
    const svg = use.closest('svg');
    if (!svg || svg.classList.contains('sionBrandOriginal')) return;
    const href = use.getAttribute('href') || '';
    let type = href.endsWith('-icon') ? 'icon' : href.endsWith('-text') ? 'text' : 'lockup';
    if (svg.closest('.logoBlock__left')) type = 'icon';
    if (svg.closest('.logoBlock__right')) type = 'text';
    svg.classList.add('sionBrandOriginal');
    svg.insertAdjacentElement('afterend', replacementFor(type, svg));
  });
}

function replaceLogoText(page) {
  const walker = document.createTreeWalker(page, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    if (node.parentElement?.closest('script, style, symbol')) return;
    if (/Squarespace/i.test(node.nodeValue)) node.nodeValue = brandText(node.nodeValue);
  });

  page.querySelectorAll('[aria-label], [alt], [title]').forEach((element) => {
    ['aria-label', 'alt', 'title'].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (value && /Squarespace/i.test(value)) element.setAttribute(attribute, brandText(value));
    });
  });
}

function updateLogoPageBrand() {
  document.querySelectorAll('.page.logo').forEach((page) => {
    replaceLogoSymbols(page);
    replaceLogoText(page);
  });
}

new MutationObserver(updateLogoPageBrand).observe(document.documentElement, {
  childList: true,
  subtree: true,
});
updateLogoPageBrand();
