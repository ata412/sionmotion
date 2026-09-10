(() => {
  const services = ['Web Design', 'Digital Marketing', 'Production'];
  const copy = 'Sion Motion brings together web design, digital marketing, and production to build distinctive brand experiences. From strategy and design to content, motion, and launch, every piece is made to move people and grow brands.';

  function createServices() {
    return `<ul class="sionCapabilities__items">${services.map((service, index) => `
      <li class="sionCapabilities__item">
        <span class="sionCapabilities__index">0${index + 1}</span>
        <h3 class="sionCapabilities__title">${service}</h3>
      </li>`).join('')}</ul>`;
  }

  function createPackages() {
    const packages = [
      {
        name: 'Single Page', price: '฿19,500',
        items: ['ออกแบบเว็บไซต์ 1 Page', 'ออกแบบไม่เกิน 7 Section', 'แก้ไข Design 2 ครั้ง', 'ลงข่าว/บทความ 5 รายการ', 'ลงรูปภาพในอัลบั้ม 20 ภาพ', 'ลงข้อมูลสินค้า 5 SKU', 'ตั้งค่าข้อมูลเว็บไซต์']
      },
      {
        name: 'Business 1', price: '฿35,000',
        items: ['ออกแบบเว็บไซต์ 3 Page', 'ออกแบบไม่เกิน 7 Section', 'แก้ไข Design 2 ครั้ง', 'ลงข้อมูลหน้าเว็บไซต์ 10 Page', 'ลงข่าว/บทความ 10 รายการ', 'ลงรูปภาพในอัลบั้ม 50 ภาพ', 'ลงข้อมูลสินค้า 35 SKU', 'ตั้งค่าข้อมูลเว็บไซต์', 'ตั้งค่า SEO เบื้องต้น']
      },
      {
        name: 'Business 2', price: '฿55,000',
        items: ['ออกแบบเว็บไซต์ 5 Page', 'ออกแบบไม่เกิน 10 Section', 'แก้ไข Design 2 ครั้ง', 'ลงข้อมูลหน้าเว็บไซต์ 20 Page', 'ลงข่าว/บทความ 20 รายการ', 'ลงรูปภาพในอัลบั้ม 70 ภาพ', 'ลงข้อมูลสินค้า 70 SKU', 'ตั้งค่าข้อมูลเว็บไซต์', 'Admin อัปเดตข้อมูลบนเว็บไซต์ 3 เดือน*', 'ตั้งค่า SEO เบื้องต้น', 'เขียนบทความลง Blog 3 บทความ']
      }
    ];
    return `<div class="sionPackages__inner gridContainer">
      <header class="sionPackages__header">
        <p class="sionPackages__eyebrow">( WEB DESIGN PACKAGES )</p>
        <h2 class="sionPackages__heading">Choose the<br>right scale.</h2>
      </header>
      <div class="sionPackages__grid">${packages.map((plan, index) => `
        <article class="sionPackages__card" data-package="0${index + 1}">
          <div class="sionPackages__cardTop">
            <p class="sionPackages__number">PACKAGE 0${index + 1}</p>
            <h3 class="sionPackages__name">${plan.name}</h3>
            <p class="sionPackages__price">${plan.price}</p>
          </div>
          <ul class="sionPackages__list">${plan.items.map((item) => `<li><span>${item}</span><span aria-hidden="true">+</span></li>`).join('')}</ul>
        </article>`).join('')}</div>
    </div>`;
  }

  function enhancePackages(section) {
    if (!section || section.dataset.enhanced === 'true') return;
    section.dataset.enhanced = 'true';
    const cards = [...section.querySelectorAll('.sionPackages__card')];
    cards.forEach((card, index) => card.style.setProperty('--card-delay', `${index * 110}ms`));
    requestAnimationFrame(() => requestAnimationFrame(() => section.classList.add('is-visible')));
    section.addEventListener('pointermove', (event) => {
      const rect = section.getBoundingClientRect();
      section.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
      section.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
    });
  }

  function mount() {
    if (location.pathname !== '/campaign' || !document.body) return;

    const awardsCopy = [...document.querySelectorAll('.paragraph.alignRight')]
      .find((section) => /Awards|What We Do/.test(section.textContent));

    if (awardsCopy) {
      const subtitle = awardsCopy.querySelector('.paragraph__subtitle');
      const paragraph = awardsCopy.querySelector('.paragraph__text');
      if (subtitle && subtitle.textContent.trim() !== '( What We Do )') subtitle.textContent = '( What We Do )';
      if (paragraph && paragraph.dataset.sionCopy !== 'true') {
        paragraph.dataset.sionCopy = 'true';
        paragraph.setAttribute('aria-label', copy);
        const spacer = document.createElement('span');
        spacer.className = 'spacer';
        spacer.setAttribute('data-v-a53e9b1b', '');
        spacer.setAttribute('aria-hidden', 'true');
        spacer.textContent = ' ';
        paragraph.replaceChildren(spacer, document.createTextNode(copy));
      }
    }

    const awards = document.querySelector('.campaignAwards');
    if (awards && awards.dataset.sionCapabilities !== 'true') {
      awards.dataset.sionCapabilities = 'true';
      awards.innerHTML = createServices();
    }

    if (awards && !document.querySelector('.sionPackages')) {
      awards.insertAdjacentHTML('afterend', `<section class="sionPackages">${createPackages()}</section>`);
    }
    enhancePackages(document.querySelector('.sionPackages'));
  }

  function addStyles() {
    if (document.getElementById('sion-capabilities-styles')) return;
    const style = document.createElement('style');
    style.id = 'sion-capabilities-styles';
    style.textContent = `
      .campaignAwards[data-sion-capabilities="true"] { min-height: auto; padding: clamp(5rem, 12vw, 12rem) 0; }
      .sionCapabilities__items { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1px; margin: 0; padding: 0; list-style: none; background: currentColor; }
      .sionCapabilities__item { min-height: min(34vw, 30rem); padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between; color: var(--bg, #111); background: var(--fg, #fff); }
      .sionCapabilities__index { font: inherit; font-size: .75rem; letter-spacing: .04em; }
      .sionCapabilities__title { max-width: 9ch; margin: 0; font: inherit; font-size: clamp(2rem, 4.2vw, 5rem); line-height: .92; letter-spacing: -.05em; }
      .sionPackages { --pointer-x: 50%; --pointer-y: 50%; position: relative; overflow: hidden; padding: clamp(6rem, 11vw, 11rem) 0 clamp(5rem, 9vw, 9rem); color: #fff; background: #0a0a0a; }
      .sionPackages::before { content: ''; position: absolute; inset: 0; pointer-events: none; background: radial-gradient(circle 32rem at var(--pointer-x) var(--pointer-y), rgba(255,255,255,.09), transparent 70%); opacity: 0; transition: opacity .5s ease; }
      .sionPackages:hover::before { opacity: 1; }
      .sionPackages__inner { position: relative; z-index: 1; }
      .sionPackages__header { display: grid; grid-template-columns: 1fr 2fr; align-items: start; margin-bottom: clamp(4rem, 8vw, 8rem); }
      .sionPackages__eyebrow { margin: .5rem 0 0; font-size: .75rem; letter-spacing: .06em; }
      .sionPackages__heading { margin: 0; font: inherit; font-size: clamp(4rem, 9vw, 9.5rem); font-weight: 400; line-height: .82; letter-spacing: -.07em; }
      .sionPackages__grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(.65rem, 1.2vw, 1.25rem); align-items: stretch; }
      .sionPackages__card { --rest-y: 0rem; position: relative; isolation: isolate; overflow: hidden; min-height: clamp(38rem, 53vw, 51rem); padding: clamp(1.25rem, 2vw, 2rem); display: flex; flex-direction: column; justify-content: space-between; color: #0a0a0a; background: #f3f2ed; opacity: 0; transform: translateY(calc(var(--rest-y) + 5rem)); transition: transform .8s cubic-bezier(.16,1,.3,1) var(--card-delay), opacity .7s ease var(--card-delay), background-color .35s ease; }
      .sionPackages__card::after { content: attr(data-package); position: absolute; z-index: -1; right: -.04em; top: .04em; font-size: clamp(11rem, 22vw, 24rem); line-height: .72; letter-spacing: -.12em; opacity: .035; pointer-events: none; }
      .sionPackages.is-visible .sionPackages__card { opacity: 1; transform: translateY(var(--rest-y)); }
      .sionPackages__card:nth-child(2) { --rest-y: clamp(-2.5rem, -2vw, -1.5rem); color: #111; background: #ff6a3d; }
      .sionPackages.is-visible .sionPackages__card:hover { transform: translateY(calc(var(--rest-y) - .75rem)); transition-delay: 0ms; }
      .sionPackages__cardTop { position: relative; z-index: 1; display: grid; grid-template-columns: 1fr auto; align-items: start; }
      .sionPackages__number { grid-column: 1 / -1; margin: 0 0 clamp(3rem, 6vw, 6rem); font-size: .7rem; letter-spacing: .08em; }
      .sionPackages__name { max-width: 8ch; margin: 0; font: inherit; font-size: clamp(2.4rem, 4vw, 4.75rem); font-weight: 400; line-height: .88; letter-spacing: -.06em; }
      .sionPackages__price { margin: .35rem 0 0 1rem; font-size: clamp(1rem, 1.3vw, 1.35rem); white-space: nowrap; }
      .sionPackages__list { position: relative; z-index: 1; margin: 3rem 0 0; padding: 0; list-style: none; font-size: clamp(.92rem, 1.05vw, 1.1rem); line-height: 1.35; }
      .sionPackages__list li { display: flex; justify-content: space-between; gap: 1rem; padding: .72rem 0; border-top: 1px solid currentColor; transition: padding .3s ease, opacity .3s ease; }
      .sionPackages__list li:last-child { border-bottom: 1px solid currentColor; }
      .sionPackages__list li span:last-child { flex: 0 0 auto; font-size: 1.1em; transition: transform .35s cubic-bezier(.16,1,.3,1); }
      .sionPackages__list li:hover { padding-left: .55rem; }
      .sionPackages__list li:hover span:last-child { transform: rotate(45deg); }
      @media (max-width: 700px) { .sionCapabilities__items { grid-template-columns: 1fr; } .sionCapabilities__item { min-height: 42vw; } }
      @media (max-width: 700px) {
        .sionPackages__header { grid-template-columns: 1fr; gap: 3rem; }
        .sionPackages__heading { font-size: clamp(3.7rem, 18vw, 6.5rem); }
        .sionPackages__grid { grid-template-columns: 1fr; gap: .8rem; }
        .sionPackages::before { display: none; }
        .sionPackages__card, .sionPackages__card:nth-child(2) { --rest-y: 0rem; min-height: auto; gap: 7rem; }
        .sionPackages.is-visible .sionPackages__card:hover { transform: translateY(0); }
        .sionPackages__number { margin-bottom: 4rem; }
        .sionPackages__name { font-size: clamp(3rem, 14vw, 5rem); }
      }
    `;
    document.head.appendChild(style);
  }

  function boot() {
    addStyles();
    mount();
    setInterval(mount, 750);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();
