(() => {
  const style = document.createElement('style');
  style.textContent = `
    body:has(.sionLanding) > .sionLanguage{bottom:auto;right:10rem;top:1.1rem}
    body:has(.sionLanding) .homeCarousel{clip-path:inset(38% 34% round .4rem);opacity:0;transform:scale(.84);transform-origin:50% 50%;transition:clip-path 1.45s cubic-bezier(.16,.84,.32,1),opacity .28s ease,transform 1.45s cubic-bezier(.16,.84,.32,1);visibility:hidden;will-change:clip-path,opacity,transform}
    body:has(.sionLanding).sionLandingCarouselReady .homeCarousel{clip-path:inset(0 round 0);opacity:1;transform:scale(1);visibility:visible}
    .sionLanding{--landing-black:#080808;--landing-paper:#f2efe8;--landing-accent:#ff4d24;color:#111;position:relative;z-index:4;pointer-events:none}
    .sionLanding *{box-sizing:border-box}
    .sionLanding section{pointer-events:auto;position:relative}
    .sionLanding__wrap{margin:0 auto;max-width:1440px;padding-left:clamp(2rem,5vw,7.2rem);padding-right:clamp(2rem,5vw,7.2rem)}
    .sionLanding__hero{align-items:flex-end;background:var(--landing-black);color:#fff;display:flex;min-height:100svh;overflow:hidden;padding:calc(var(--headerHeight,8.8rem) + 8vh) 0 7vh}
    .sionLanding__heroMedia{inset:0;opacity:.48;position:absolute}
    .sionLanding__heroMedia:after{background:linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,.18) 48%,rgba(0,0,0,.9));content:"";inset:0;position:absolute}
    .sionLanding__heroMedia img{height:100%;object-fit:cover;transform:scale(1.025);width:100%}
    .sionLanding__heroInner{position:relative;width:100%;z-index:1}
    .sionLanding__eyebrow{align-items:center;display:flex;font:500 1.1rem/1 Clarkson,Arial,sans-serif;gap:1rem;letter-spacing:.12em;margin:0 0 2.4rem;text-transform:uppercase}
    .sionLanding__eyebrow:before{background:currentColor;border-radius:50%;content:"";height:.7rem;width:.7rem}
    .sionLanding__hero h1{font:400 clamp(6rem,11.2vw,16rem)/.78 Clarkson,Arial,sans-serif;letter-spacing:-.075em;margin:0;max-width:12ch;text-transform:uppercase}
    .sionLanding__hero h1 span{color:var(--landing-accent)}
    .sionLanding__heroBottom{align-items:end;border-top:1px solid rgba(255,255,255,.35);display:grid;gap:3rem;grid-template-columns:1fr minmax(26rem,44rem);margin-top:5rem;padding-top:2rem}
    .sionLanding__heroBottom p{font-size:clamp(1.65rem,1.55vw,2.2rem);line-height:1.45;margin:0}
    .sionLanding__anchorNav{display:flex;flex-wrap:wrap;gap:.8rem}
    .sionLanding__anchorNav a{border:1px solid rgba(255,255,255,.45);border-radius:999px;color:#fff;font:500 1.1rem/1 Clarkson,Arial,sans-serif;letter-spacing:.08em;padding:1.1rem 1.5rem;text-decoration:none;text-transform:uppercase;transition:.25s ease}
    .sionLanding__anchorNav a:hover{background:#fff;color:#111}
    .sionLanding__intro{background:var(--landing-paper);padding:clamp(9rem,15vw,22rem) 0}
    .sionLanding__kicker{color:#68655f;font:500 1.1rem/1 Clarkson,Arial,sans-serif;letter-spacing:.12em;margin:0;text-transform:uppercase}
    .sionLanding__statement{font:400 clamp(4.6rem,8.2vw,11.8rem)/.9 Clarkson,Arial,sans-serif;letter-spacing:-.065em;margin:3rem 0 0;max-width:11ch;text-transform:uppercase}
    .sionLanding__statement i{color:var(--landing-accent);font-style:normal}
    .sionLanding__introText{display:grid;gap:3rem;grid-template-columns:1fr minmax(28rem,48rem);margin-top:clamp(6rem,10vw,13rem)}
    .sionLanding__introText p{font-size:clamp(1.8rem,1.8vw,2.6rem);line-height:1.5;margin:0}
    .sionLanding__services{background:#fff;padding:clamp(9rem,12vw,17rem) 0}
    .sionLanding__sectionHead{align-items:end;display:grid;gap:3rem;grid-template-columns:1fr minmax(28rem,45rem);margin-bottom:7rem}
    .sionLanding__sectionHead h2{font:400 clamp(5rem,8vw,11rem)/.84 Clarkson,Arial,sans-serif;letter-spacing:-.065em;margin:1.8rem 0 0;text-transform:uppercase}
    .sionLanding__sectionHead p{font-size:clamp(1.6rem,1.45vw,2.1rem);line-height:1.55;margin:0}
    .sionLanding__service{align-items:center;border-top:1px solid #bdbab4;display:grid;gap:3rem;grid-template-columns:7rem 1fr minmax(26rem,42rem);min-height:15rem;padding:2.4rem 0;transition:padding .35s ease}
    .sionLanding__service:last-child{border-bottom:1px solid #bdbab4}
    .sionLanding__service:hover{padding-left:1.5rem;padding-right:1.5rem}
    .sionLanding__serviceNum{color:#77736d;font:500 1.2rem/1 Clarkson,Arial,sans-serif}
    .sionLanding__service h3{font:400 clamp(2.8rem,4.2vw,6rem)/.95 Clarkson,Arial,sans-serif;letter-spacing:-.05em;margin:0;text-transform:uppercase}
    .sionLanding__service p{font-size:clamp(1.5rem,1.3vw,1.9rem);line-height:1.5;margin:0}
    .sionLanding__work{background:var(--landing-black);color:#fff;padding:clamp(9rem,12vw,17rem) 0}
    .sionLanding__work .sionLanding__kicker{color:#aaa}
    .sionLanding__workGrid{display:grid;gap:clamp(1.2rem,2vw,2.8rem);grid-template-columns:repeat(12,1fr)}
    .sionLanding__project{color:#fff;display:block;text-decoration:none}
    .sionLanding__project:nth-child(1){grid-column:1/span 7}
    .sionLanding__project:nth-child(2){grid-column:8/span 5;margin-top:14rem}
    .sionLanding__project:nth-child(3){grid-column:1/span 5;margin-top:3rem}
    .sionLanding__project:nth-child(4){grid-column:6/span 7;margin-top:10rem}
    .sionLanding__projectMedia{background:#161616;overflow:hidden;position:relative}
    .sionLanding__project:nth-child(1) .sionLanding__projectMedia,.sionLanding__project:nth-child(4) .sionLanding__projectMedia{aspect-ratio:16/10}
    .sionLanding__project:nth-child(2) .sionLanding__projectMedia,.sionLanding__project:nth-child(3) .sionLanding__projectMedia{aspect-ratio:4/5}
    .sionLanding__project img{height:100%;object-fit:cover;transition:transform 1s cubic-bezier(.16,.84,.32,1);width:100%}
    .sionLanding__project:hover img{transform:scale(1.035)}
    .sionLanding__projectMeta{align-items:baseline;border-top:1px solid #555;display:flex;justify-content:space-between;margin-top:1.4rem;padding-top:1.2rem}
    .sionLanding__projectMeta h3{font:400 clamp(2rem,2.2vw,3.2rem)/1 Clarkson,Arial,sans-serif;letter-spacing:-.04em;margin:0;text-transform:uppercase}
    .sionLanding__projectMeta span{color:#aaa;font:500 1rem/1 Clarkson,Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase}
    .sionLanding__process{background:var(--landing-accent);color:#111;padding:clamp(9rem,12vw,17rem) 0}
    .sionLanding__processGrid{display:grid;grid-template-columns:repeat(4,1fr);margin-top:7rem}
    .sionLanding__step{border-left:1px solid rgba(0,0,0,.45);display:flex;flex-direction:column;min-height:35rem;padding:0 2.5rem}
    .sionLanding__step:first-child{padding-left:0;border-left:0}
    .sionLanding__stepNum{font:500 1.1rem/1 Clarkson,Arial,sans-serif;letter-spacing:.1em}
    .sionLanding__step h3{font:400 clamp(2.6rem,3vw,4.4rem)/.95 Clarkson,Arial,sans-serif;letter-spacing:-.05em;margin:auto 0 2rem;text-transform:uppercase}
    .sionLanding__step p{font-size:1.6rem;line-height:1.5;margin:0}
    .sionLanding__closing{background:var(--landing-paper);padding:clamp(10rem,16vw,23rem) 0;text-align:center}
    .sionLanding__closing h2{font:400 clamp(6rem,11vw,16rem)/.78 Clarkson,Arial,sans-serif;letter-spacing:-.075em;margin:0 auto;max-width:10ch;text-transform:uppercase}
    .sionLanding__closing h2 span{color:var(--landing-accent)}
    .sionLanding__closing p{font-size:clamp(1.7rem,1.7vw,2.5rem);line-height:1.5;margin:4rem auto 0;max-width:55rem}
    .sionLanding__portal{height:100svh;pointer-events:none;position:relative}
    .sionLanding__portalLabel{color:#fff;font:500 1.1rem/1 Clarkson,Arial,sans-serif;left:50%;letter-spacing:.12em;position:absolute;text-align:center;text-transform:uppercase;top:8rem;transform:translateX(-50%);white-space:nowrap}
    .sionLanding__portalLabel:after{animation:sionLandingArrow 1.5s ease-in-out infinite;content:"↓";display:block;font-size:2.4rem;margin-top:1.4rem}
    .sionLanding__reveal{opacity:0;transform:translateY(5rem);transition:opacity .9s ease,transform .9s cubic-bezier(.16,.84,.32,1)}
    .sionLanding__reveal.is-in{opacity:1;transform:none}
    @keyframes sionLandingArrow{50%{transform:translateY(1rem)}}
    @media(max-width:800px){
      .sionLanding__hero{padding-bottom:5rem}.sionLanding__hero h1{font-size:clamp(5.4rem,18vw,9rem)}
      .sionLanding__heroBottom,.sionLanding__introText,.sionLanding__sectionHead{grid-template-columns:1fr}
      .sionLanding__heroBottom{margin-top:4rem}.sionLanding__introText{margin-top:6rem}
      .sionLanding__service{align-items:start;gap:1rem;grid-template-columns:4rem 1fr;padding:2.8rem 0}
      .sionLanding__service p{grid-column:2}
      .sionLanding__project:nth-child(n){grid-column:1/-1;margin-top:4rem}.sionLanding__project:first-child{margin-top:0}
      .sionLanding__processGrid{grid-template-columns:1fr 1fr;row-gap:5rem}
      .sionLanding__step{min-height:25rem}.sionLanding__step:nth-child(3){border-left:0;padding-left:0}
    }
    @media(max-width:520px){
      .sionLanding__processGrid{grid-template-columns:1fr}.sionLanding__step{border-left:0;border-top:1px solid rgba(0,0,0,.4);min-height:0;padding:3rem 0}
      .sionLanding__step:first-child{border-top:0}.sionLanding__step h3{margin:6rem 0 1.5rem}
      .sionLanding__project:nth-child(n) .sionLanding__projectMedia{aspect-ratio:4/5}
    }
    @media(prefers-reduced-motion:reduce){.sionLanding__reveal{opacity:1;transform:none}.sionLanding__project img,.sionLanding__portalLabel:after{animation:none;transition:none}}
  `;
  document.head.append(style);

  const copy = {
    th: {
      hero: 'เราออกแบบเว็บไซต์ สร้างคอนเทนต์ วางแผนการตลาด และผลิตภาพเคลื่อนไหวให้ทุกส่วนของแบรนด์ทำงานไปในทิศทางเดียวกัน',
      intro: 'Sion Motion คือทีมสร้างสรรค์ที่เชื่อว่ากลยุทธ์ ภาพ และเทคโนโลยีควรเล่าเรื่องเดียวกัน เราดูแลตั้งแต่ความคิดแรกจนถึงชิ้นงานที่พร้อมเผยแพร่และสร้างผลลัพธ์จริง',
      services: 'เลือกทำเฉพาะส่วนที่ต้องการ หรือให้เราดูแลเป็นทีมเดียวตั้งแต่การวางแนวคิดจนถึงการส่งมอบ',
      service1: 'ออกแบบและพัฒนาเว็บไซต์ที่สื่อสารชัด ใช้งานง่าย และมีเอกลักษณ์ของแบรนด์',
      service2: 'วางทิศทางคอนเทนต์ แคมเปญ และสื่อดิจิทัลให้เข้าถึงกลุ่มเป้าหมายอย่างมีระบบ',
      service3: 'ผลิตวิดีโอ โฆษณา ภาพนิ่ง และคอนเทนต์สำหรับทุกแพลตฟอร์ม',
      service4: 'สร้าง Motion Design, Title และภาพเคลื่อนไหวที่ทำให้แบรนด์มีชีวิต',
      work: 'ตัวอย่างทิศทางภาพและงานสร้างสรรค์จากหลายรูปแบบของเรา',
      step1: 'คุยเป้าหมาย กลุ่มผู้ชม ขอบเขต และสิ่งที่งานต้องทำให้สำเร็จ',
      step2: 'กำหนดแนวคิด ภาษาภาพ โครงสร้าง และแผนการผลิตที่ชัดเจน',
      step3: 'ออกแบบ ถ่ายทำ พัฒนา และปรับรายละเอียดร่วมกันเป็นรอบ',
      step4: 'ส่งมอบไฟล์พร้อมใช้ ดูแลการเผยแพร่ และต่อยอดจากผลลัพธ์',
      close: 'เลื่อนต่อเพื่อเข้าสู่พื้นที่ทดลองของ Sion Motion และสำรวจระบบงานแต่ละหมวดในรูปแบบอินเทอร์แอ็กทีฟ',
      portal: 'Scroll to explore Sion Motion',
    },
    en: {
      hero: 'We design websites, build content, shape marketing and produce moving images so every part of a brand moves in one direction.',
      intro: 'Sion Motion is a creative team that believes strategy, image and technology should tell the same story. We work from the first idea through to finished work ready to launch and perform.',
      services: 'Choose the discipline you need, or bring us in as one team from the first concept through final delivery.',
      service1: 'Clear, usable and distinctive websites designed and developed around your brand.',
      service2: 'Content direction, campaigns and digital media planned to reach the right audience with purpose.',
      service3: 'Video, commercial, still and platform-ready content produced from start to finish.',
      service4: 'Motion design, titles and moving identities that make the brand feel alive.',
      work: 'A selection of visual directions and creative work across our disciplines.',
      step1: 'We align on the goal, audience, scope and the job the work needs to accomplish.',
      step2: 'We define the idea, visual language, structure and a clear production plan.',
      step3: 'We design, shoot, develop and refine the details together in focused rounds.',
      step4: 'We deliver launch-ready work, support publishing and build on the results.',
      close: 'Continue into the Sion Motion playground to explore each part of our system through the original interactive experience.',
      portal: 'Scroll to explore Sion Motion',
    },
  };

  const text = () => copy[document.documentElement.lang === 'en' ? 'en' : 'th'];

  function createLanding(page) {
    if (page.querySelector(':scope > .sionLanding')) return;
    const t = text();
    const landing = document.createElement('div');
    landing.className = 'sionLanding';
    landing.innerHTML = `
      <section class="sionLanding__hero">
        <div class="sionLanding__heroMedia"><img src="/pages/home/show-reel/poster.jpg" alt="" fetchpriority="high"></div>
        <div class="sionLanding__heroInner sionLanding__wrap">
          <p class="sionLanding__eyebrow">Sion Motion · Bangkok</p>
          <h1>We build brands that <span>move.</span></h1>
          <div class="sionLanding__heroBottom">
            <nav class="sionLanding__anchorNav" aria-label="Landing page sections"><a href="#sion-capabilities">Capabilities</a><a href="#sion-work">Work</a><a href="#sion-process">Process</a></nav>
            <p>${t.hero}</p>
          </div>
        </div>
      </section>
      <section class="sionLanding__intro">
        <div class="sionLanding__wrap">
          <p class="sionLanding__kicker sionLanding__reveal">Independent Creative Studio</p>
          <h2 class="sionLanding__statement sionLanding__reveal">Strategy.<br>Design.<br><i>Motion.</i></h2>
          <div class="sionLanding__introText sionLanding__reveal"><p></p><p>${t.intro}</p></div>
        </div>
      </section>
      <section class="sionLanding__services" id="sion-capabilities">
        <div class="sionLanding__wrap">
          <div class="sionLanding__sectionHead sionLanding__reveal"><div><p class="sionLanding__kicker">What We Do</p><h2>One team.<br>Full range.</h2></div><p>${t.services}</p></div>
          <div class="sionLanding__service sionLanding__reveal"><span class="sionLanding__serviceNum">01</span><h3>Web Design</h3><p>${t.service1}</p></div>
          <div class="sionLanding__service sionLanding__reveal"><span class="sionLanding__serviceNum">02</span><h3>Digital Marketing</h3><p>${t.service2}</p></div>
          <div class="sionLanding__service sionLanding__reveal"><span class="sionLanding__serviceNum">03</span><h3>Production</h3><p>${t.service3}</p></div>
          <div class="sionLanding__service sionLanding__reveal"><span class="sionLanding__serviceNum">04</span><h3>Motion Design</h3><p>${t.service4}</p></div>
        </div>
      </section>
      <section class="sionLanding__work" id="sion-work">
        <div class="sionLanding__wrap">
          <div class="sionLanding__sectionHead sionLanding__reveal"><div><p class="sionLanding__kicker">Selected Direction</p><h2>Work that<br>moves people.</h2></div><p>${t.work}</p></div>
          <div class="sionLanding__workGrid">
            <article class="sionLanding__project sionLanding__reveal"><div class="sionLanding__projectMedia"><img src="/assets/pitch-portfolio/hotel-main.webp" alt="Hospitality visual direction" loading="lazy"></div><div class="sionLanding__projectMeta"><h3>Hospitality</h3><span>Campaign · Film</span></div></article>
            <article class="sionLanding__project sionLanding__reveal"><div class="sionLanding__projectMedia"><img src="/assets/pitch-portfolio/portrait-main.webp" alt="Portrait visual direction" loading="lazy"></div><div class="sionLanding__projectMeta"><h3>Portrait</h3><span>Production</span></div></article>
            <article class="sionLanding__project sionLanding__reveal"><div class="sionLanding__projectMedia"><img src="/assets/pitch-portfolio/food-main.webp" alt="Food visual direction" loading="lazy"></div><div class="sionLanding__projectMeta"><h3>Food</h3><span>Content · Photo</span></div></article>
            <article class="sionLanding__project sionLanding__reveal"><div class="sionLanding__projectMedia"><img src="/assets/pitch-portfolio/travel-main.webp" alt="Travel visual direction" loading="lazy"></div><div class="sionLanding__projectMeta"><h3>Travel</h3><span>Brand · Digital</span></div></article>
          </div>
        </div>
      </section>
      <section class="sionLanding__process" id="sion-process">
        <div class="sionLanding__wrap">
          <p class="sionLanding__kicker sionLanding__reveal">How We Work</p>
          <h2 class="sionLanding__statement sionLanding__reveal">From brief<br>to <i>impact.</i></h2>
          <div class="sionLanding__processGrid">
            <article class="sionLanding__step sionLanding__reveal"><span class="sionLanding__stepNum">01 / Discover</span><h3>Find the goal</h3><p>${t.step1}</p></article>
            <article class="sionLanding__step sionLanding__reveal"><span class="sionLanding__stepNum">02 / Define</span><h3>Shape the idea</h3><p>${t.step2}</p></article>
            <article class="sionLanding__step sionLanding__reveal"><span class="sionLanding__stepNum">03 / Create</span><h3>Make it real</h3><p>${t.step3}</p></article>
            <article class="sionLanding__step sionLanding__reveal"><span class="sionLanding__stepNum">04 / Deliver</span><h3>Move forward</h3><p>${t.step4}</p></article>
          </div>
        </div>
      </section>
      <section class="sionLanding__closing">
        <div class="sionLanding__wrap sionLanding__reveal"><h2>Explore the<br><span>system.</span></h2><p>${t.close}</p></div>
      </section>
      <div class="sionLanding__portal" id="sion-original-experience"><div class="sionLanding__portalLabel">${t.portal}</div></div>
    `;
    page.prepend(landing);
    requestAnimationFrame(() => {
      document.documentElement.classList.remove('sionLandingPending');
    });

    landing.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    landing.querySelectorAll('.sionLanding__reveal').forEach((item) => observer.observe(item));

    const portal = landing.querySelector('.sionLanding__portal');
    let lastCarouselReset = 0;
    const resetCarousel = () => {
      const index = document.querySelector('.homeCarouselUi__index')?.textContent.trim();
      if (!index || index === '01' || Date.now() - lastCarouselReset < 1200) return;
      lastCarouselReset = Date.now();
      document.querySelector('.homeCarouselUi__arrowLeft')?.click();
    };
    const updateCarouselAccess = () => {
      if (!landing.isConnected) {
        document.body.classList.remove('sionLandingCarouselReady');
        return;
      }
      const ready = portal.getBoundingClientRect().top <= 1;
      document.body.classList.toggle('sionLandingCarouselReady', ready);
      if (!ready) resetCarousel();
    };
    addEventListener('scroll', updateCarouselAccess, { passive: true });
    addEventListener('resize', updateCarouselAccess, { passive: true });
    const carouselGuard = setInterval(() => {
      if (!landing.isConnected) {
        clearInterval(carouselGuard);
        document.body.classList.remove('sionLandingCarouselReady');
        return;
      }
      updateCarouselAccess();
    }, 500);
    updateCarouselAccess();
  }

  function mount() {
    const homePages = document.querySelectorAll('.page.home');
    homePages.forEach(createLanding);
    if (!homePages.length && document.readyState !== 'loading') {
      document.documentElement.classList.remove('sionLandingPending');
    }
  }

  new MutationObserver(mount).observe(document.documentElement, { childList: true, subtree: true });
  mount();
})();
