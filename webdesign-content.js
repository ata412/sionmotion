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

  function createMarketingServices() {
    const isThai = document.documentElement.dataset.sionLanguage !== 'en';
    const content = isThai ? {
      eyebrow: '( DIGITAL MARKETING AGENCY )',
      heading: 'ทำการตลาดออนไลน์<br><em>ให้ทุกอย่างไปทางเดียวกัน</em>',
      intro: 'ตั้งแต่คนเห็นแบรนด์ครั้งแรก ไปจนถึงวันที่ตัดสินใจซื้อ เราวางเว็บไซต์ คอนเทนต์ สื่อ และข้อมูลให้เชื่อมกันเป็นระบบเดียว พร้อมวัดผลและปรับงานต่อเนื่อง',
      cta: 'ดูบริการทั้งหมด',
      steps: ['คิดกลยุทธ์', 'สร้างคอนเทนต์', 'เปิดแคมเปญ', 'วัดผลและพัฒนา'],
      reasonsEyebrow: '( WHY SION MOTION? )',
      reasonsHeading: 'ทำไมต้องทำการตลาด<br>กับ Sion Motion?',
      reasonsIntro: 'เพราะงานที่ดีไม่ควรจบแค่สวย แต่ต้องทำงานจริงกับธุรกิจของคุณได้ด้วย',
      reasons: [
        ['One Team, Full Range', 'ทีมเดียวดูแลตั้งแต่กลยุทธ์ เว็บไซต์ คอนเทนต์ โฆษณา ไปจนถึงโปรดักชัน ทำให้งานทุกชิ้นพูดภาษาเดียวกัน'],
        ['Right People, Right Message', 'วิเคราะห์ลูกค้าและเส้นทางการตัดสินใจก่อนเลือกช่องทาง เพื่อส่งสารให้ตรงคน ตรงเวลา และตรงความต้องการ'],
        ['Creative Meets Data', 'ใช้ความคิดสร้างสรรค์ควบคู่กับข้อมูลจริง ทุกชิ้นงานจึงมีทั้งภาพจำที่ชัดและเหตุผลรองรับการตัดสินใจ'],
        ['Results You Can See', 'ตั้งเป้าหมายและระบบวัดผลตั้งแต่ต้น เพื่อให้เห็นว่า Traffic, Lead, Conversion และงบประมาณเดินไปทางไหน'],
        ['Always Optimizing', 'ติดตามผล ทดลอง และปรับแคมเปญอย่างต่อเนื่อง เพราะพฤติกรรมคนและแพลตฟอร์มไม่เคยหยุดเปลี่ยน'],
        ['Built Around Your Business', 'เลือกเฉพาะสิ่งที่ธุรกิจต้องใช้จริง วางขอบเขตและงบให้เหมาะกับเป้าหมาย เพื่อให้ทุกการลงทุนมีความหมาย']
      ],
      faqEyebrow: '( FAQ )',
      faqHeading: 'คำถามที่<br>พบบ่อย',
      faqs: [
        ['Sion Motion ให้บริการอะไรบ้าง?', 'เราดูแล Web Design, Digital Marketing, SEO, Performance Ads, Social Content, Video Production, Motion Design และ AI Solution โดยเลือกจัดทีมและขอบเขตงานให้เหมาะกับเป้าหมายของแต่ละธุรกิจ'],
        ['ถ้ายังไม่รู้ว่าควรเริ่มจากบริการไหน ต้องทำอย่างไร?', 'เริ่มจากคุยเรื่องธุรกิจ กลุ่มลูกค้า เป้าหมาย และสิ่งที่กำลังติดขัดก่อน จากนั้นเราจะช่วยจัดลำดับว่าส่วนไหนควรทำก่อน พร้อมเสนอแนวทางและขอบเขตงานที่ชัดเจน'],
        ['สามารถจ้างเฉพาะบริการเดียวได้ไหม?', 'ได้ คุณสามารถเริ่มจากเว็บไซต์ SEO โฆษณา คอนเทนต์ หรือโปรดักชันเพียงส่วนเดียว และค่อยเชื่อมบริการอื่นเพิ่มภายหลังได้'],
        ['งบประมาณเริ่มต้นเท่าไร?', 'งานเว็บไซต์มีแพ็กเกจเริ่มต้นแสดงอยู่ด้านล่าง ส่วนงานการตลาดและโปรดักชันจะประเมินตามเป้าหมาย ปริมาณงาน ช่องทาง และระยะเวลาของโครงการ'],
        ['ต้องใช้เวลานานแค่ไหนจึงจะเห็นผล?', 'ระยะเวลาขึ้นอยู่กับประเภทงาน เว็บไซต์และแคมเปญโฆษณามักประเมินผลระยะแรกได้เร็วกว่า SEO และการสร้างแบรนด์ ซึ่งต้องอาศัยข้อมูลและการพัฒนาอย่างต่อเนื่อง เราจะแจ้งกรอบเวลาให้ชัดเจนก่อนเริ่มงาน'],
        ['วัดผลการตลาดอย่างไร?', 'เรากำหนดตัวชี้วัดให้สัมพันธ์กับเป้าหมาย เช่น Traffic, Engagement, Lead, Conversion หรือยอดขาย พร้อมติดตั้งระบบติดตามและสรุปข้อมูลเพื่อใช้ปรับงานรอบต่อไป'],
        ['หลังส่งมอบงานมีบริการดูแลต่อหรือไม่?', 'มี ทั้งรูปแบบดูแลรายเดือน อัปเดตเว็บไซต์ ผลิตคอนเทนต์ บริหารโฆษณา และปรับปรุงผลลัพธ์ต่อเนื่อง โดยกำหนดขอบเขตตามสิ่งที่ทีมของคุณต้องการ']
      ],
      services: [
        ['SEO & Search Growth', 'วางโครงสร้างเว็บไซต์ คีย์เวิร์ด Technical SEO และแผนคอนเทนต์ เพื่อเพิ่ม Organic Traffic และสร้างการเติบโตระยะยาว', 'SEARCH / CONTENT'],
        ['Performance Ads', 'ดูแล Google Ads, Meta และ TikTok ตั้งแต่กลุ่มเป้าหมาย ชิ้นงานโฆษณา ไปจนถึง Conversion Tracking และการใช้งบให้คุ้มค่า', 'MEDIA / DATA'],
        ['Social & Content', 'ออกแบบทิศทางคอนเทนต์ ภาพ ข้อความ และโมชั่นให้แบรนด์สื่อสารต่อเนื่อง ชัดเจน และเหมาะกับแต่ละแพลตฟอร์ม', 'SOCIAL / CREATIVE'],
        ['Website & Landing Page', 'ออกแบบ UX/UI และหน้า Landing Page ที่โหลดเร็ว ใช้งานง่าย รองรับมือถือ และพาคนไปสู่การติดต่อหรือสั่งซื้อ', 'DESIGN / CONVERSION'],
        ['Video & Production', 'ผลิตวิดีโอโฆษณา คอนเทนต์โซเชียล วิดีโอสินค้า และงานภาพเคลื่อนไหวให้เป็นส่วนเดียวกับแคมเปญ', 'FILM / MOTION'],
        ['AI Solution & Automation', 'เชื่อม AI, Chatbot, ระบบรับ Lead และรายงานผล เพื่อลดงานซ้ำและช่วยให้ทีมตอบลูกค้าได้เร็วขึ้น', 'AI / WORKFLOW']
      ]
    } : {
      eyebrow: '( DIGITAL MARKETING AGENCY )',
      heading: 'Digital marketing<br><em>moving in one direction.</em>',
      intro: 'From the first impression to the final conversion, we connect websites, content, media, and data into one clear system—then measure, learn, and improve it continuously.',
      cta: 'Explore all services',
      steps: ['Strategy', 'Create', 'Launch', 'Optimize'],
      reasonsEyebrow: '( WHY SION MOTION? )',
      reasonsHeading: 'Why grow your brand<br>with Sion Motion?',
      reasonsIntro: 'Strong work should do more than look good. It should work for your business and keep improving over time.',
      reasons: [
        ['One Team, Full Range', 'One connected team handles strategy, websites, content, advertising, and production so every touchpoint speaks the same language.'],
        ['Right People, Right Message', 'We study audiences and decision journeys before choosing channels, helping the message reach the right people at the right moment.'],
        ['Creative Meets Data', 'Creative thinking works alongside real data, giving every execution a memorable point of view and a clear reason to exist.'],
        ['Results You Can See', 'Goals and measurement are defined from the start, making traffic, leads, conversions, and media spend easier to understand.'],
        ['Always Optimizing', 'We monitor, test, and improve campaigns continuously as audiences, platforms, and opportunities change.'],
        ['Built Around Your Business', 'We recommend what the business actually needs and shape the scope and budget around meaningful commercial goals.']
      ],
      faqEyebrow: '( FAQ )',
      faqHeading: 'Frequently asked<br>questions',
      faqs: [
        ['What services does Sion Motion provide?', 'We cover web design, digital marketing, SEO, performance ads, social content, video production, motion design, and AI solutions. The team and scope are shaped around each business goal.'],
        ['What if I do not know which service to start with?', 'We begin with your business, audience, goals, and current challenges. From there, we prioritize what should happen first and propose a clear direction and scope.'],
        ['Can I hire Sion Motion for one service only?', 'Yes. You can begin with a website, SEO, advertising, content, or production, then connect other services when the business is ready.'],
        ['What is the starting budget?', 'Website package prices are shown below. Marketing and production budgets depend on the objective, volume of work, channels, and project duration.'],
        ['How long does it take to see results?', 'Timing depends on the work. Websites and paid campaigns can usually be assessed sooner than SEO and brand building, which improve through consistent data and iteration. We define a realistic timeframe before work begins.'],
        ['How do you measure marketing performance?', 'We choose metrics that match the objective, such as traffic, engagement, leads, conversions, or revenue, then set up tracking and use the findings to improve the next cycle.'],
        ['Do you provide support after launch?', 'Yes. Ongoing options include website updates, monthly content, advertising management, and continuous optimization, with a scope built around your team’s needs.']
      ],
      services: [
        ['SEO & Search Growth', 'Site structure, keyword strategy, technical SEO, and content planning designed to build sustainable organic traffic.', 'SEARCH / CONTENT'],
        ['Performance Ads', 'Google, Meta, and TikTok campaigns shaped around audiences, creative, conversion tracking, and efficient media spend.', 'MEDIA / DATA'],
        ['Social & Content', 'A consistent system for ideas, copy, design, and motion that gives each platform the right voice and format.', 'SOCIAL / CREATIVE'],
        ['Website & Landing Page', 'Fast, responsive UX and landing pages that make the next action clear and turn attention into enquiries or sales.', 'DESIGN / CONVERSION'],
        ['Video & Production', 'Campaign films, social content, product video, and motion built as an integrated part of the marketing idea.', 'FILM / MOTION'],
        ['AI Solution & Automation', 'AI, chatbots, lead workflows, and reporting systems that reduce repetitive work and help teams respond faster.', 'AI / WORKFLOW']
      ]
    };

    return `<div class="sionMarketing__inner gridContainer">
      <header class="sionMarketing__header">
        <p class="sionMarketing__eyebrow">${content.eyebrow}</p>
        <div class="sionMarketing__headlineWrap">
          <h2 class="sionMarketing__heading">${content.heading}</h2>
          <div class="sionMarketing__introRow">
            <p class="sionMarketing__intro">${content.intro}</p>
            <a class="sionMarketing__cta" href="/services"><span>${content.cta}</span><span aria-hidden="true">&#8599;</span></a>
          </div>
        </div>
      </header>
      <ol class="sionMarketing__process" aria-label="Marketing process">${content.steps.map((step, index) => `<li><span>0${index + 1}</span>${step}</li>`).join('')}</ol>
      <div class="sionMarketing__grid" id="sion-marketing-services">${content.services.map((service, index) => `
        <a class="sionMarketing__card${index === 0 ? ' is-featured' : ''}" href="/services/${['seo','performance-ads','social-content','web-design','production','ai-solution'][index]}" style="--service-delay:${index * 70}ms">
          <div class="sionMarketing__cardMeta"><span>0${index + 1}</span><span>${service[2]}</span></div>
          <h3>${service[0]}</h3>
          <p>${service[1]}</p>
          <span class="sionMarketing__arrow" aria-hidden="true">&#8599;</span>
        </a>`).join('')}</div>
      <section class="sionReasons">
        <header class="sionReasons__header">
          <p class="sionReasons__eyebrow">${content.reasonsEyebrow}</p>
          <div>
            <h2 class="sionReasons__heading">${content.reasonsHeading}</h2>
            <p class="sionReasons__intro">${content.reasonsIntro}</p>
          </div>
        </header>
        <ol class="sionReasons__list">${content.reasons.map((reason, index) => `
          <li class="sionReasons__item">
            <span class="sionReasons__number">0${index + 1}</span>
            <h3>${reason[0]}</h3>
            <p>${reason[1]}</p>
            <span class="sionReasons__plus" aria-hidden="true">+</span>
          </li>`).join('')}</ol>
      </section>
      <section class="sionFaq">
        <header class="sionFaq__header">
          <p class="sionFaq__eyebrow">${content.faqEyebrow}</p>
          <h2 class="sionFaq__heading">${content.faqHeading}</h2>
        </header>
        <div class="sionFaq__list">${content.faqs.map((faq, index) => `
          <details class="sionFaq__item"${index === 0 ? ' open' : ''}>
            <summary><span class="sionFaq__number">0${index + 1}</span><span class="sionFaq__question">${faq[0]}</span><span class="sionFaq__toggle" aria-hidden="true"></span></summary>
            <div class="sionFaq__answer"><p>${faq[1]}</p></div>
          </details>`).join('')}</div>
      </section>
    </div>`;
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

  function enhanceMarketing(section) {
    if (!section || section.dataset.enhanced === 'true') return;
    section.dataset.enhanced = 'true';
    const reveal = () => section.classList.add('is-visible');
    if (!('IntersectionObserver' in window)) return reveal();
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      reveal();
      observer.disconnect();
    }, { threshold: 0.12 });
    observer.observe(section);
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

    if (awards && !document.querySelector('.sionMarketing')) {
      awards.insertAdjacentHTML('afterend', `<section class="sionMarketing">${createMarketingServices()}</section>`);
    }
    const marketing = document.querySelector('.sionMarketing');
    if (!document.querySelector('.sionPackages')) {
      (marketing || awards)?.insertAdjacentHTML('afterend', `<section class="sionPackages">${createPackages()}</section>`);
    }
    enhanceMarketing(marketing);
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
      .sionMarketing { --marketing-orange: #ff6038; position: relative; overflow: hidden; padding: clamp(6rem, 12vw, 12rem) 0; color: #111; background: #f3f2ed; }
      .sionMarketing__header { display: grid; grid-template-columns: 1fr 3fr; gap: 2rem; align-items: start; }
      .sionMarketing__eyebrow { margin: .65rem 0 0; font-size: .72rem; letter-spacing: .07em; }
      .sionMarketing__heading { max-width: 12ch; margin: 0; font: inherit; font-size: clamp(3.8rem, 8.1vw, 9rem); font-weight: 400; line-height: .86; letter-spacing: -.07em; }
      .sionMarketing__heading em { color: var(--marketing-orange); font-style: normal; }
      .sionMarketing__introRow { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: clamp(2rem, 6vw, 7rem); align-items: end; margin: clamp(3rem, 6vw, 6rem) 0 0; }
      .sionMarketing__intro { max-width: 42rem; margin: 0; font-size: clamp(1.25rem, 2vw, 2.1rem); line-height: 1.25; }
      .sionMarketing__cta { min-width: 12rem; padding: .9rem 0; display: flex; justify-content: space-between; gap: 2rem; color: inherit; border-bottom: 1px solid currentColor; text-decoration: none; font-size: .8rem; letter-spacing: .03em; }
      .sionMarketing__cta span:last-child { transition: transform .35s cubic-bezier(.16,1,.3,1); }
      .sionMarketing__cta:hover span:last-child { transform: translateY(.35rem); }
      .sionMarketing__process { margin: clamp(5rem, 10vw, 10rem) 0 clamp(2rem, 4vw, 4rem); padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); list-style: none; border-top: 1px solid #111; }
      .sionMarketing__process li { position: relative; padding: 1rem 1rem 0 0; font-size: clamp(.9rem, 1.15vw, 1.2rem); }
      .sionMarketing__process li::before { content: ''; position: absolute; width: .55rem; height: .55rem; top: -.32rem; left: 0; border-radius: 50%; background: var(--marketing-orange); }
      .sionMarketing__process li span { display: block; margin-bottom: .55rem; font-size: .65rem; letter-spacing: .06em; opacity: .55; }
      .sionMarketing__grid { scroll-margin-top: 2rem; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid #111; border-left: 1px solid #111; }
      .sionMarketing__card { position: relative; min-height: clamp(25rem, 34vw, 37rem); padding: clamp(1.25rem, 2.3vw, 2.5rem); display: flex; flex-direction: column; color: #111; border-right: 1px solid #111; border-bottom: 1px solid #111; background: #f3f2ed; text-decoration: none; opacity: 0; transform: translateY(4rem); transition: color .45s ease, background-color .45s ease, transform .85s cubic-bezier(.16,1,.3,1) var(--service-delay), opacity .7s ease var(--service-delay); }
      .sionMarketing.is-visible .sionMarketing__card { opacity: 1; transform: translateY(0); }
      .sionMarketing__card.is-featured { color: #111; background: var(--marketing-orange); }
      .sionMarketing__card:hover { color: #fff; background: #111; }
      .sionMarketing__cardMeta { display: flex; justify-content: space-between; gap: 1rem; font-size: .67rem; letter-spacing: .06em; }
      .sionMarketing__card h3 { max-width: 10ch; margin: auto 0 2rem; font: inherit; font-size: clamp(2.7rem, 5vw, 6rem); font-weight: 400; line-height: .85; letter-spacing: -.065em; }
      .sionMarketing__card p { max-width: 36rem; margin: 0; padding-right: clamp(2rem, 5vw, 6rem); font-size: clamp(1rem, 1.25vw, 1.3rem); line-height: 1.35; }
      .sionMarketing__arrow { position: absolute; right: clamp(1.25rem, 2.3vw, 2.5rem); bottom: clamp(1.25rem, 2.3vw, 2.5rem); font-size: clamp(1.5rem, 2.5vw, 2.6rem); transition: transform .4s cubic-bezier(.16,1,.3,1); }
      .sionMarketing__card:hover .sionMarketing__arrow { transform: translate(.3rem, -.3rem); }
      .sionReasons { margin-top: clamp(8rem, 15vw, 16rem); }
      .sionReasons__header { display: grid; grid-template-columns: 1fr 3fr; gap: 2rem; margin-bottom: clamp(4rem, 8vw, 8rem); }
      .sionReasons__eyebrow { margin: .65rem 0 0; font-size: .72rem; letter-spacing: .07em; }
      .sionReasons__heading { max-width: 12ch; margin: 0; font: inherit; font-size: clamp(3.8rem, 7.2vw, 8rem); font-weight: 400; line-height: .88; letter-spacing: -.07em; }
      .sionReasons__intro { max-width: 38rem; margin: clamp(2.5rem, 5vw, 5rem) 0 0; font-size: clamp(1.25rem, 1.8vw, 1.9rem); line-height: 1.3; }
      .sionReasons__list { margin: 0; padding: 0; list-style: none; border-top: 1px solid #111; }
      .sionReasons__item { position: relative; display: grid; grid-template-columns: minmax(3rem, .45fr) 1.15fr 1.4fr minmax(2rem, auto); gap: clamp(1rem, 3vw, 4rem); align-items: start; padding: clamp(1.5rem, 2.8vw, 3rem) 0; border-bottom: 1px solid #111; transition: padding .45s cubic-bezier(.16,1,.3,1), color .35s ease, background-color .35s ease; }
      .sionReasons__item::before { content: ''; position: absolute; inset: 0 calc(50% - 50vw); z-index: -1; background: #111; transform: scaleY(0); transform-origin: bottom; transition: transform .45s cubic-bezier(.16,1,.3,1); }
      .sionReasons__item:hover { color: #fff; padding-left: .9rem; padding-right: .9rem; }
      .sionReasons__item:hover::before { transform: scaleY(1); }
      .sionReasons__number { padding-top: .35rem; font-size: .7rem; letter-spacing: .06em; opacity: .6; }
      .sionReasons__item h3 { max-width: 12ch; margin: 0; font: inherit; font-size: clamp(1.8rem, 3vw, 3.6rem); font-weight: 400; line-height: .95; letter-spacing: -.045em; }
      .sionReasons__item p { max-width: 40rem; margin: .15rem 0 0; font-size: clamp(.95rem, 1.2vw, 1.2rem); line-height: 1.4; }
      .sionReasons__plus { font-size: 1.5rem; line-height: 1; transition: transform .4s cubic-bezier(.16,1,.3,1); }
      .sionReasons__item:hover .sionReasons__plus { transform: rotate(45deg); }
      .sionFaq { margin-top: clamp(8rem, 15vw, 16rem); }
      .sionFaq__header { display: grid; grid-template-columns: 1fr 3fr; gap: 2rem; margin-bottom: clamp(4rem, 8vw, 8rem); }
      .sionFaq__eyebrow { margin: .65rem 0 0; font-size: .72rem; letter-spacing: .07em; }
      .sionFaq__heading { margin: 0; font: inherit; font-size: clamp(4rem, 8vw, 9rem); font-weight: 400; line-height: .84; letter-spacing: -.07em; }
      .sionFaq__list { border-top: 1px solid #111; }
      .sionFaq__item { border-bottom: 1px solid #111; }
      .sionFaq__item summary { display: grid; grid-template-columns: minmax(3rem, .45fr) 2.55fr auto; gap: clamp(1rem, 3vw, 4rem); align-items: center; min-height: clamp(5.5rem, 8vw, 8rem); padding: 1rem 0; cursor: pointer; list-style: none; }
      .sionFaq__item summary::-webkit-details-marker { display: none; }
      .sionFaq__number { font-size: .7rem; letter-spacing: .06em; opacity: .6; }
      .sionFaq__question { max-width: 42ch; font-size: clamp(1.5rem, 2.7vw, 3.2rem); line-height: 1.05; letter-spacing: -.035em; }
      .sionFaq__toggle { position: relative; width: 1.5rem; height: 1.5rem; }
      .sionFaq__toggle::before, .sionFaq__toggle::after { content: ''; position: absolute; top: 50%; left: 0; width: 100%; height: 1px; background: currentColor; transition: transform .4s cubic-bezier(.16,1,.3,1); }
      .sionFaq__toggle::after { transform: rotate(90deg); }
      .sionFaq__item[open] .sionFaq__toggle::after { transform: rotate(0deg); }
      .sionFaq__answer { display: grid; grid-template-columns: minmax(3rem, .45fr) 2.55fr auto; gap: clamp(1rem, 3vw, 4rem); }
      .sionFaq__answer p { grid-column: 2; max-width: 48rem; margin: 0; padding: 0 0 clamp(2rem, 4vw, 4rem); font-size: clamp(1rem, 1.35vw, 1.4rem); line-height: 1.45; }
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
        .sionMarketing__header { grid-template-columns: 1fr; gap: 2.5rem; }
        .sionMarketing__heading { max-width: none; font-size: clamp(3.4rem, 16vw, 6rem); }
        .sionMarketing__introRow { grid-template-columns: 1fr; gap: 2.5rem; }
        .sionMarketing__cta { width: 100%; }
        .sionMarketing__process { grid-template-columns: repeat(2, 1fr); gap: 2rem 0; }
        .sionMarketing__grid { grid-template-columns: 1fr; }
        .sionMarketing__card { min-height: 29rem; }
        .sionMarketing__card h3 { font-size: clamp(3.2rem, 16vw, 5rem); }
        .sionReasons__header { grid-template-columns: 1fr; gap: 2.5rem; }
        .sionReasons__heading { max-width: none; font-size: clamp(3.4rem, 15vw, 5.5rem); }
        .sionReasons__item { grid-template-columns: 2.25rem 1fr auto; gap: .75rem; }
        .sionReasons__item h3 { font-size: clamp(1.8rem, 9vw, 3rem); }
        .sionReasons__item p { grid-column: 2 / -1; padding-right: 1.5rem; }
        .sionReasons__plus { grid-column: 3; grid-row: 1; }
        .sionReasons__item:hover { padding-left: 0; padding-right: 0; }
        .sionReasons__item::before { display: none; }
        .sionFaq__header { grid-template-columns: 1fr; gap: 2.5rem; }
        .sionFaq__heading { font-size: clamp(3.7rem, 17vw, 6rem); }
        .sionFaq__item summary { grid-template-columns: 2.25rem 1fr auto; gap: .75rem; min-height: 6.5rem; }
        .sionFaq__question { font-size: clamp(1.4rem, 7vw, 2.3rem); }
        .sionFaq__answer { grid-template-columns: 2.25rem 1fr; gap: .75rem; }
        .sionFaq__answer p { grid-column: 2; padding-right: 1.5rem; }
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
