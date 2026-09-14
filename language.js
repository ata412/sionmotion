(() => {
  // Thai is the initial language. A visitor's explicit language choice is kept.
  let language = 'th';
  try { language = localStorage.getItem('sion-language') === 'en' ? 'en' : 'th'; } catch {}
  const dictionary = window.SION_THAI || {};
  window.sionTranslate = text => {
    if (language !== 'th') return text;
    if (dictionary[text]) return dictionary[text];
    return text.split(', ').map(part => {
      const key = part.trim().replace(/^\(\s*|\s*\)$/g, '');
      return dictionary[key] ? part.replace(key, dictionary[key]) : part;
    }).join(', ');
  };
  document.documentElement.lang = language;
  document.documentElement.dataset.sionLanguage = language;
  const style = document.createElement('style');
  style.textContent = `html[lang="th"] body {font-family:var(--font-ptt45pride)} html[lang="th"] .textBodyIntro,html[lang="th"] .textBodyBig,html[lang="th"] .textBodySmall{line-height:1.55;letter-spacing:0} .sionLanguage{position:fixed;bottom:16px;right:16px;z-index:10000;display:flex;gap:4px;padding:5px;border-radius:24px;background:#111;color:white;border:1px solid #777;font:14px/1.4 Tahoma,Arial,sans-serif}.sionLanguage button{font:inherit;color:inherit;background:transparent;border:0;border-radius:18px;padding:8px 12px;cursor:pointer}.sionLanguage button[aria-pressed="true"]{background:white;color:#111}`;
  document.head.append(style);
  style.textContent += `
    @media (min-width: 768px) {
      body:has(.homeCarousel) > .sionLanguage {
        bottom: calc(var(--headerHeight, 80px) + var(--consentBannerHeight, 0px) + 16px);
      }
    }
    @media (max-width: 767px) {
      body > .sionLanguage { display: none; }
      .menu__footer:has(> .sionLanguage) {
        height: auto; min-height: var(--headerHeight);
        flex-direction: column; align-items: stretch; gap: 12px;
        padding-bottom: max(16px, env(safe-area-inset-bottom));
      }
      .menu__footer > .sionLanguage {
        position: static; align-self: flex-end; flex-shrink: 0;
      }
      .sionLanguage button { min-height: 44px; min-width: 44px; }
    }
  `;
  function mount() {
    const control = document.createElement('nav');
    control.className = 'sionLanguage';
    control.setAttribute('aria-label', 'Language / ภาษา');
    for (const [code, label] of [['th', 'ไทย'], ['en', 'EN']]) {
      const button = document.createElement('button');
      button.type = 'button'; button.textContent = label;
      button.lang = code;
      button.setAttribute('aria-pressed', String(language === code));
      button.onclick = () => {
        if (code === language) return;
        try { localStorage.setItem('sion-language', code); } catch { return; }
        location.reload();
      };
      control.append(button);
    }
    const mobile = window.matchMedia('(max-width: 767px)');
    function placeControl() {
      const footer = document.querySelector('.menu__footer');
      const parent = mobile.matches && footer ? footer : document.body;
      if (control.parentElement !== parent) parent.append(control);
    }
    placeControl();
    mobile.addEventListener('change', placeControl);
    // Nuxt may replace the initial menu during hydration or navigation.
    new MutationObserver(placeControl).observe(document.body, {childList: true, subtree: true});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, {once:true});
  else mount();
})();
