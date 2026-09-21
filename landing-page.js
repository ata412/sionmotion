(() => {
  const style = document.createElement('style');
  style.textContent = `
    body:has(.sionLanding) > .sionLanguage{bottom:auto;right:10rem;top:1.1rem}
    body:has(.sionLanding) .homeCarousel{clip-path:inset(var(--sion-carousel-clip-y,38%) var(--sion-carousel-clip-x,34%) round var(--sion-carousel-radius,.4rem));opacity:var(--sion-carousel-opacity,0);transform:scale(var(--sion-carousel-scale,.84));transform-origin:50% 50%;transition:clip-path .12s linear,opacity .12s linear,transform .12s linear;visibility:hidden;will-change:clip-path,opacity,transform}
    body:has(.sionLanding).sionLandingCarouselOpening .homeCarousel,body:has(.sionLanding).sionLandingCarouselReady .homeCarousel{visibility:visible}
    body:has(.sionLanding).sionLandingCarouselOpening:not(.sionCarouselHasInteracted) .homeCarouselItem.sionCarouselIntroActive>.homeCarouselItem__inner{clip-path:inset(0)!important;transform:rotateY(0deg) scale(1)!important}
    body:has(.sionLanding).sionLandingCarouselOpening:not(.sionCarouselHasInteracted) .homeCarouselUi .text__inner{opacity:1!important;transform:translateY(0)!important}
    html:has(body.sionLandingCarouselLocked){overflow:hidden;overscroll-behavior:none}
    body.sionLandingCarouselLocked{overflow:hidden;overscroll-behavior:none}
    body.sionLandingCarouselLocked .homeCarousel{touch-action:none}
    body:has(.sionLanding):not(.sionLandingCarouselReady) .sionHomeLogoAsset,body:has(.sionLanding):not(.sionLandingCarouselReady) .sionHomeWordmark{animation-play-state:paused}
    body:has(.sionLanding) .homeCarouselLogo .sionHomeLogoAsset{animation-name:sionIconToLockupImmediate}
    body:has(.sionLanding) .homeCarouselLogo .sionHomeWordmark{animation-name:sionWordmarkRevealImmediate}
    @keyframes sionIconToLockupImmediate{
      0%{left:50%;transform:translate(-50%,-50%) scale(3.05)}
      30%,78%{left:24%;transform:translate(-50%,-50%) scale(1.7)}
      100%{left:50%;transform:translate(-50%,-50%) scale(3.05)}
    }
    @keyframes sionWordmarkRevealImmediate{
      0%{opacity:0;transform:translate(-1.5rem,-50%)}
      30%,76%{opacity:1;transform:translate(0,-50%)}
      100%{opacity:0;transform:translate(-1.5rem,-50%)}
    }
    .sionLanding{--landing-black:#080808;--landing-paper:#f2efe8;--landing-accent:#ff4d24;color:#111;position:relative;z-index:4;pointer-events:none}
    .sionLanding *{box-sizing:border-box}
    .sionLanding section{pointer-events:auto;position:relative}
    .sionLanding__wrap{margin:0 auto;max-width:1440px;padding-left:clamp(2rem,5vw,7.2rem);padding-right:clamp(2rem,5vw,7.2rem)}
    .sionLanding__hero{background:var(--landing-black);color:#fff;height:1000svh;overflow:clip}
    .sionLanding__heroSticky{align-items:center;display:flex;height:100svh;overflow:hidden;padding:calc(var(--headerHeight,8.8rem) + 4vh) 0 4vh;position:sticky;top:0}
    .sionLanding__heroInner{position:relative;text-align:center;width:100%;z-index:1}
    .sionLanding__eyebrow{align-items:center;display:flex;font:500 1.1rem/1 Clarkson,Arial,sans-serif;gap:1rem;justify-content:center;letter-spacing:.12em;margin:0 0 2.4rem;text-transform:uppercase}
    .sionLanding__eyebrow:before{background:currentColor;border-radius:50%;content:"";height:.7rem;width:.7rem}
    .sionLanding__hero h1{font:400 clamp(6rem,11.2vw,16rem)/.78 Clarkson,Arial,sans-serif;letter-spacing:-.075em;margin:0;max-width:12ch;text-transform:uppercase}
    .sionLanding__hero h1 span{color:var(--landing-accent)}
    html[data-sion-language="th"] .sionLanding__hero h1{font-family:var(--font-ptt45pride),Tahoma,sans-serif;font-size:clamp(5.5rem,8.5vw,12rem);font-weight:700;letter-spacing:-.045em;line-height:.84;max-width:none;text-transform:none}
    .sionLanding__heroSequence{display:grid;justify-items:center;position:relative}
    .sionLanding__heroHeadline{align-items:center;display:flex;justify-content:center;margin:0 auto;width:fit-content;will-change:opacity,transform}
    .sionLanding__heroLogoSlot{flex:0 0 auto;margin-left:0;overflow:hidden;width:0}
    .sionLanding__heroLogo{display:block;height:auto;opacity:0;transform:translateX(-2.5rem) scale(.94);transform-origin:left center;width:clamp(14rem,18vw,26rem);will-change:clip-path,opacity,transform}
    .sionLanding__heroHeadlineSecond{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:100%}
    .sionLanding__heroHeadlineSecond h1{display:grid;margin-left:auto;margin-right:auto;max-width:none;place-items:center;text-align:center;width:100%}
    .sionLanding__heroHeadlineSecond h1>.sionLanding__heroSecondLead,.sionLanding__heroHeadlineSecond h1>.sionLanding__heroSecondTail{color:#fff;display:block;grid-area:1/1;opacity:0;will-change:opacity,transform}
    .sionLanding__heroHeadlineSecond .sionLanding__heroSecondTail{font-size:1.2em;line-height:.82}
    .sionLanding__hero h1 .sionLanding__heroTailPrompt{color:#fff;display:flex;justify-content:center;white-space:nowrap}
    .sionLanding__hero h1 .sionLanding__heroTailChar{color:#fff;display:inline-block;opacity:0;transform:translateY(.38em);will-change:opacity,transform}
    .sionLanding__heroTailAccent{color:var(--landing-accent);display:block;font:inherit;font-size:1.12em;margin-top:.28em;opacity:0;transform:translateY(.55em);will-change:opacity,transform}
    .sionLanding__heroBottom{align-items:end;border-top:1px solid rgba(255,255,255,.35);display:grid;gap:3rem;grid-template-columns:1fr minmax(26rem,44rem);margin-top:5rem;padding-top:2rem}
    .sionLanding__heroBottom p{font-size:clamp(1.65rem,1.55vw,2.2rem);line-height:1.45;margin:0;text-align:center}
    .sionLanding__anchorNav{display:flex;flex-wrap:wrap;gap:.8rem;justify-content:center}
    .sionLanding__anchorNav a{border:1px solid rgba(255,255,255,.45);border-radius:999px;color:#fff;font:500 1.1rem/1 Clarkson,Arial,sans-serif;letter-spacing:.08em;padding:1.1rem 1.5rem;text-decoration:none;text-transform:uppercase;transition:.25s ease}
    .sionLanding__anchorNav a:hover{background:#fff;color:#111}
    .sionLanding__heroActions{display:flex;flex-direction:column;gap:1rem}
    .sionLanding__contactPrompt{align-items:center;display:flex;flex-wrap:wrap;gap:.65rem;justify-content:center}
    .sionLanding__contactPrompt>span{font-size:clamp(1.35rem,1.35vw,1.8rem);line-height:1.35}
    .sionLanding__contactPrompt a{border:1px solid rgba(255,255,255,.55);border-radius:999px;color:#fff;font:500 1.05rem/1 Clarkson,Arial,sans-serif;letter-spacing:.06em;padding:1rem 1.3rem;text-decoration:none;transition:.25s ease}
    .sionLanding__contactPrompt a:first-of-type{background:var(--landing-accent);border-color:var(--landing-accent);color:#111}
    .sionLanding__contactPrompt a:hover{background:#fff;border-color:#fff;color:#111}
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
    .sionLanding__service{align-items:center;border-top:1px solid #bdbab4;color:inherit;display:grid;gap:3rem;grid-template-columns:7rem 1fr minmax(26rem,42rem) 3rem;min-height:15rem;padding:2.4rem 0;text-decoration:none;transition:background-color .35s ease,padding .35s ease}
    .sionLanding__service:last-child{border-bottom:1px solid #bdbab4}
    .sionLanding__service:hover{background:#f4f2ed;padding-left:1.5rem;padding-right:1.5rem}
    .sionLanding__serviceNum{color:#77736d;font:500 1.2rem/1 Clarkson,Arial,sans-serif}
    .sionLanding__service h3{font:400 clamp(2.8rem,4.2vw,6rem)/.95 Clarkson,Arial,sans-serif;letter-spacing:-.05em;margin:0;text-transform:uppercase}
    .sionLanding__service p{font-size:clamp(1.5rem,1.3vw,1.9rem);line-height:1.5;margin:0}
    .sionLanding__serviceArrow{font:400 2.4rem/1 Clarkson,Arial,sans-serif;transition:transform .35s cubic-bezier(.16,1,.3,1)}
    .sionLanding__service:hover .sionLanding__serviceArrow{transform:translate(.35rem,-.35rem)}
    .sionLanding__marketing{background:var(--landing-paper);color:#111;padding:clamp(9rem,12vw,17rem) 0}
    .sionLanding__marketing .sionLanding__sectionHead h2 i{color:var(--landing-accent);font-style:normal}
    html[data-sion-language="th"] .sionLanding__marketing .sionLanding__sectionHead h2 i{font-family:var(--font-ptt45pride),Tahoma,sans-serif;font-weight:700;letter-spacing:-.045em}
    .sionLanding__marketingGrid{border-left:1px solid #111;border-top:1px solid #111;display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}
    .sionLanding__marketingCard{background:var(--landing-paper);border-bottom:1px solid #111;border-right:1px solid #111;color:#111;display:flex;flex-direction:column;min-height:clamp(40rem,48vw,58rem);min-width:0;overflow:hidden;padding:clamp(2rem,3vw,3.5rem);text-decoration:none;transition:background-color .45s ease,color .45s ease,transform .55s cubic-bezier(.16,1,.3,1)}
    .sionLanding__marketingCard:first-child{background:var(--landing-accent)}
    .sionLanding__marketingCard:nth-child(5){background:#d8d4cc}
    .sionLanding__marketingCard:hover{background:#111;color:#fff;transform:translateY(-1rem)}
    .sionLanding__marketingMeta{display:flex;font:500 1rem/1 Clarkson,Arial,sans-serif;justify-content:space-between;letter-spacing:.08em;text-transform:uppercase}
    .sionLanding__marketingCard h3{font:400 clamp(2.7rem,5vw,6.5rem)/1 Clarkson,Arial,sans-serif;letter-spacing:-.025em;margin:auto 0 3rem;max-width:9ch;overflow-wrap:anywhere}
    .sionLanding__marketingCard p{font-size:clamp(1.35rem,1.35vw,1.8rem);line-height:1.5;margin:0 0 4rem;overflow-wrap:anywhere}
    .sionLanding__marketingMore{align-items:center;border-top:1px solid currentColor;display:flex;font:500 1.05rem/1 Clarkson,Arial,sans-serif;justify-content:space-between;letter-spacing:.04em;margin-top:auto;padding-top:1.5rem;text-transform:uppercase}
    .sionLanding__marketingMore i{font-size:2rem;font-style:normal;transition:transform .35s ease}
    .sionLanding__marketingCard:hover .sionLanding__marketingMore i{transform:translate(.35rem,-.35rem)}
    .sionLanding__work{background:var(--landing-black);color:#fff;padding:clamp(9rem,12vw,17rem) 0}
    .sionLanding__work .sionLanding__kicker{color:#aaa}
    .sionLanding__workGrid{display:grid;gap:clamp(1.2rem,2vw,2.8rem);grid-template-columns:repeat(12,1fr)}
    .sionLanding__project{color:#fff;display:block;text-decoration:none}
    .sionLanding__project:nth-child(odd){grid-column:1/span 5}
    .sionLanding__project:nth-child(even){grid-column:7/span 5;margin-top:14rem}
    .sionLanding__projectMedia{background:#161616;overflow:hidden;position:relative}
    .sionLanding__projectMedia{aspect-ratio:9/16}
    .sionLanding__project img,.sionLanding__project video{display:block;height:100%;object-fit:cover;transition:transform 1s cubic-bezier(.16,.84,.32,1);width:100%}
    .sionLanding__project:hover img,.sionLanding__project:hover video{transform:scale(1.025)}
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
    @media(max-height:820px) and (min-width:801px){
      .sionLanding__heroSticky{padding-bottom:max(1.5rem,env(safe-area-inset-bottom));padding-top:calc(var(--headerHeight,8.8rem) + 1.5rem)}
      .sionLanding__eyebrow{margin-bottom:1.25rem}
      .sionLanding__heroBottom{gap:2rem;margin-top:clamp(1.5rem,4vh,3rem);padding-top:1.15rem}
      .sionLanding__heroBottom p{font-size:clamp(1.2rem,1.35vw,1.7rem)}
      .sionLanding__anchorNav a{font-size:.95rem;padding:.85rem 1.15rem}
    }
    @media(max-width:1100px) and (min-width:801px){
      .sionLanding__marketingGrid{grid-template-columns:repeat(2,minmax(0,1fr))}
      .sionLanding__marketingCard{min-height:42rem}
    }
    @media(max-width:800px){
      .sionLanding__heroSticky{padding-bottom:3rem;padding-top:calc(var(--headerHeight,8.8rem) + 2rem)}.sionLanding__hero h1{font-size:clamp(5.4rem,18vw,9rem)}
      html[data-sion-language="th"] .sionLanding__hero h1{font-size:clamp(5.5rem,14.5vw,7rem)}
      .sionLanding__heroLogo{width:clamp(10rem,27vw,14rem)}
      .sionLanding__heroHeadlineSecond .sionLanding__heroSecondTail{font-size:clamp(4rem,16vw,6rem)}
      .sionLanding__heroBottom,.sionLanding__introText,.sionLanding__sectionHead{grid-template-columns:1fr}
      .sionLanding__heroBottom{gap:1.5rem;margin-top:clamp(1.5rem,5vh,3rem);padding-top:1.25rem}.sionLanding__anchorNav a{font-size:.95rem;padding:.85rem 1.15rem}.sionLanding__introText{margin-top:6rem}
      .sionLanding__service{align-items:start;gap:1rem;grid-template-columns:4rem 1fr 2rem;padding:2.8rem 0}
      .sionLanding__service p{grid-column:2/4}
      .sionLanding__serviceArrow{grid-column:3;grid-row:1;font-size:1.8rem}
      .sionLanding__marketingGrid{grid-template-columns:1fr}.sionLanding__marketingCard{min-height:38rem}.sionLanding__marketingCard:hover{transform:none}
      .sionLanding__project:nth-child(n){grid-column:1/-1;margin-top:4rem}.sionLanding__project:first-child{margin-top:0}
      .sionLanding__processGrid{grid-template-columns:1fr 1fr;row-gap:5rem}
      .sionLanding__step{min-height:25rem}.sionLanding__step:nth-child(3){border-left:0;padding-left:0}
    }
    @media(max-width:700px){
      @keyframes sionIconToLockupImmediate{
        0%{left:50%;transform:translate(-50%,-50%) scale(2.35)}
        30%,78%{left:22%;transform:translate(-50%,-50%) scale(1.55)}
        100%{left:50%;transform:translate(-50%,-50%) scale(2.35)}
      }
    }
    @media(max-width:520px){
      .sionLanding__processGrid{grid-template-columns:1fr}.sionLanding__step{border-left:0;border-top:1px solid rgba(0,0,0,.4);min-height:0;padding:3rem 0}
      .sionLanding__step:first-child{border-top:0}.sionLanding__step h3{margin:6rem 0 1.5rem}
      .sionLanding__project:nth-child(n) .sionLanding__projectMedia{aspect-ratio:9/16}
    }
    @media(prefers-reduced-motion:reduce){.sionLanding__reveal{opacity:1;transform:none}.sionLanding__project img,.sionLanding__portalLabel:after{animation:none;transition:none}}
  `;
  document.head.append(style);

  const copy = {
    th: {
      headline: 'สีอะไร?',
      secondLead: 'บริการ ดุจญาติมิตร',
      secondTail: 'แต่',
      secondAccent: '" คิดตังค์ "',
      hero: 'เราออกแบบเว็บไซต์ สร้างคอนเทนต์ วางแผนการตลาด และผลิตภาพเคลื่อนไหวให้ทุกส่วนของแบรนด์ทำงานไปในทิศทางเดียวกัน',
      intro: 'Sion Motion คือทีมสร้างสรรค์ที่เชื่อว่ากลยุทธ์ ภาพ และเทคโนโลยีควรเล่าเรื่องเดียวกัน เราดูแลตั้งแต่ความคิดแรกจนถึงชิ้นงานที่พร้อมเผยแพร่และสร้างผลลัพธ์จริง',
      services: 'เลือกทำเฉพาะส่วนที่ต้องการ หรือให้เราดูแลเป็นทีมเดียวตั้งแต่การวางแนวคิดจนถึงการส่งมอบ',
      marketingEyebrow: 'บริการรับทำการตลาดออนไลน์',
      marketingHeading: 'Digital Marketing<br>Agency <i>ครบวงจร!</i>',
      marketingIntro: 'บริการรับทำการตลาดออนไลน์แบบครบวงจร เชื่อม Search, Social, Content และข้อมูลให้ช่วยกันสร้างทั้งการรับรู้และผลลัพธ์ทางธุรกิจ',
      marketingMore: 'รายละเอียดเพิ่มเติม',
      marketingCards: [
        ['Social Media Marketing', 'ดูแลการสื่อสารบน Social Media แบบครบวงจร ตั้งแต่กลยุทธ์ คอนเทนต์ ภาพและวิดีโอ ไปจนถึงโฆษณาที่ออกแบบตามกลุ่มเป้าหมายของธุรกิจ', 'SOCIAL / STRATEGY', '/services/social-content'],
        ['SEO Service', 'บริการรับทำ SEO ให้ติดอันดับบน Google เติบโตอย่างยั่งยืน สร้าง Organic Traffic และทำให้ธุรกิจเป็นที่รู้จักจากการค้นหาบน Google', 'SEARCH / ORGANIC', '/services/seo'],
        ['Facebook Marketing', 'รับดูแลเพจ วางแผนการตลาดออนไลน์ คิดคอนเทนต์และออกแบบภาพกราฟิก พร้อมทีมดูแล Facebook แบบครบวงจร เพื่อทำให้แบรนด์โดดเด่นและสื่อสารต่อเนื่อง', 'SOCIAL / CONTENT', '/services/social-content'],
        ['Google Ads', 'บริการวางแผนและดูแลโฆษณา Google เพื่อเข้าถึงกลุ่มเป้าหมายจากคำค้นหาได้ทันที พร้อมติดตั้ง Conversion Tracking และวัดผลลัพธ์การตลาดได้จริง', 'SEARCH / PERFORMANCE', '/services/performance-ads'],
        ['WordPress Development', 'ยกระดับภาพลักษณ์ธุรกิจด้วยเว็บไซต์ WordPress ที่ออกแบบให้ทันสมัย ใช้งานง่าย รองรับมือถือ และพร้อมต่อยอดด้านการตลาด', 'WEB / EXPERIENCE', '/services/web-design'],
        ['รับดูแลร้านค้า Shopee / Lazada', 'ดูแลร้านค้าออนไลน์บน Shopee และ Lazada ตั้งแต่หน้าร้าน ข้อมูลสินค้า แคมเปญ โปรโมชัน และสื่อโฆษณา เพื่อเพิ่มโอกาสเข้าถึงและยอดขาย', 'E-COMMERCE / SALES', '/services/performance-ads'],
      ],
      service1: 'ออกแบบและพัฒนาเว็บไซต์ที่สื่อสารชัด ใช้งานง่าย และมีเอกลักษณ์ของแบรนด์',
      service2: 'วางทิศทางคอนเทนต์ แคมเปญ และสื่อดิจิทัลให้เข้าถึงกลุ่มเป้าหมายอย่างมีระบบ',
      service3: 'ผลิตวิดีโอ โฆษณา ภาพนิ่ง และคอนเทนต์สำหรับทุกแพลตฟอร์ม',
      service4: 'สร้าง Motion Design, Title และภาพเคลื่อนไหวที่ทำให้แบรนด์มีชีวิต',
      service5: 'ออกแบบและประยุกต์ใช้ AI เพื่อช่วยสร้างคอนเทนต์ พัฒนากระบวนการทำงาน และต่อยอดธุรกิจอย่างเหมาะสม',
      work: 'ตัวอย่างทิศทางภาพและงานสร้างสรรค์จากหลายรูปแบบของเรา',
      step1: 'คุยเป้าหมาย กลุ่มผู้ชม ขอบเขต และสิ่งที่งานต้องทำให้สำเร็จ',
      step2: 'กำหนดแนวคิด ภาษาภาพ โครงสร้าง และแผนการผลิตที่ชัดเจน',
      step3: 'ออกแบบ ถ่ายทำ พัฒนา และปรับรายละเอียดร่วมกันเป็นรอบ',
      step4: 'ส่งมอบไฟล์พร้อมใช้ ดูแลการเผยแพร่ และต่อยอดจากผลลัพธ์',
      close: 'เลื่อนต่อเพื่อเข้าสู่พื้นที่ทดลองของ Sion Motion และสำรวจระบบงานแต่ละหมวดในรูปแบบอินเทอร์แอ็กทีฟ',
      portal: 'Scroll to explore Sion Motion',
      consultation: 'มีโปรเจกต์ในใจ? รับคำปรึกษาฟรี',
    },
    en: {
      headline: 'We build brands that <span>move.</span>',
      secondLead: 'Friendly service.',
      secondTail: 'But',
      secondAccent: 'serious work.',
      hero: 'We design websites, build content, shape marketing and produce moving images so every part of a brand moves in one direction.',
      intro: 'Sion Motion is a creative team that believes strategy, image and technology should tell the same story. We work from the first idea through to finished work ready to launch and perform.',
      services: 'Choose the discipline you need, or bring us in as one team from the first concept through final delivery.',
      consultation: 'Have a project in mind? Get a free consultation.',
      marketingEyebrow: 'Full-service digital marketing',
      marketingHeading: 'Digital Marketing<br>Agency <i>ครบวงจร!</i>',
      marketingIntro: 'Full-service digital marketing that connects search, social, content, and data to build awareness and measurable business results.',
      marketingMore: 'View details',
      marketingCards: [
        ['Social Media Marketing', 'Connected strategy, content, design, video, and advertising shaped around the audience each business needs to reach.', 'SOCIAL / STRATEGY', '/services/social-content'],
        ['SEO Service', 'Build sustainable visibility on Google through technical SEO, keyword strategy, content planning, and long-term organic growth.', 'SEARCH / ORGANIC', '/services/seo'],
        ['Facebook Marketing', 'Page management, campaign planning, content, and graphic design delivered as one connected Facebook marketing system.', 'SOCIAL / CONTENT', '/services/social-content'],
        ['Google Ads', 'Reach high-intent audiences at the moment they search, supported by conversion tracking and measurable campaign optimization.', 'SEARCH / PERFORMANCE', '/services/performance-ads'],
        ['WordPress Development', 'Modern, responsive WordPress websites designed to strengthen credibility and support the next stage of digital growth.', 'WEB / EXPERIENCE', '/services/web-design'],
        ['Shopee / Lazada', 'Storefront, product, campaign, promotion, and advertising support for stronger reach and sales across major marketplaces.', 'E-COMMERCE / SALES', '/services/performance-ads'],
      ],
      service1: 'Clear, usable and distinctive websites designed and developed around your brand.',
      service2: 'Content direction, campaigns and digital media planned to reach the right audience with purpose.',
      service3: 'Video, commercial, still and platform-ready content produced from start to finish.',
      service4: 'Motion design, titles and moving identities that make the brand feel alive.',
      service5: 'Practical AI solutions for content creation, smarter workflows and new opportunities tailored to the business.',
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
        <div class="sionLanding__heroSticky">
          <div class="sionLanding__heroInner sionLanding__wrap">
            <p class="sionLanding__eyebrow">Sion Motion</p>
            <div class="sionLanding__heroSequence">
              <div class="sionLanding__heroHeadline">
                <h1>${t.headline}</h1>
                <div class="sionLanding__heroLogoSlot"><img class="sionLanding__heroLogo" src="/assets/sion-motion-logo-header.png" alt="Sion Motion" width="312" height="496"></div>
              </div>
              <div class="sionLanding__heroHeadlineSecond"><h1><span class="sionLanding__heroSecondLead">${t.secondLead}</span><span class="sionLanding__heroSecondTail"><span class="sionLanding__heroTailPrompt">${t.secondTail}<span class="sionLanding__heroTailChar">.</span><span class="sionLanding__heroTailChar">.</span><span class="sionLanding__heroTailChar">.</span><span class="sionLanding__heroTailChar">?</span></span><strong class="sionLanding__heroTailAccent">${t.secondAccent}</strong></span></h1></div>
            </div>
            <div class="sionLanding__heroBottom">
              <div class="sionLanding__heroActions"><div class="sionLanding__contactPrompt"><span>${t.consultation}</span><a href="https://line.me/ti/p/dfPg1ktRiT" target="_blank" rel="noopener noreferrer">LINE</a><a href="tel:0972082873" aria-label="Phone 0972082873">PHONE · 0972082873</a></div><nav class="sionLanding__anchorNav" aria-label="Landing page sections"><a href="#sion-capabilities">Capabilities</a><a href="#sion-work">Work</a><a href="#sion-process">Process</a></nav></div>
              <p>${t.hero}</p>
            </div>
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
          <a class="sionLanding__service sionLanding__reveal" href="/commercial-production" aria-label="Production — Show Reel"><span class="sionLanding__serviceNum">01</span><h3>Production</h3><p>${t.service3}</p><i class="sionLanding__serviceArrow" aria-hidden="true">↗</i></a>
          <a class="sionLanding__service sionLanding__reveal" href="/digital-marketing" aria-label="Digital Marketing"><span class="sionLanding__serviceNum">02</span><h3>Digital Marketing</h3><p>${t.service2}</p><i class="sionLanding__serviceArrow" aria-hidden="true">↗</i></a>
          <a class="sionLanding__service sionLanding__reveal" href="/ai-solution" aria-label="AI Solution"><span class="sionLanding__serviceNum">03</span><h3>AI Solution</h3><p>${t.service5}</p><i class="sionLanding__serviceArrow" aria-hidden="true">↗</i></a>
          <a class="sionLanding__service sionLanding__reveal" href="/campaign" aria-label="Web Design"><span class="sionLanding__serviceNum">04</span><h3>Web Design</h3><p>${t.service1}</p><i class="sionLanding__serviceArrow" aria-hidden="true">↗</i></a>
          <a class="sionLanding__service sionLanding__reveal" href="/motion" aria-label="Motion Design"><span class="sionLanding__serviceNum">05</span><h3>Motion Design</h3><p>${t.service4}</p><i class="sionLanding__serviceArrow" aria-hidden="true">↗</i></a>
        </div>
      </section>
      <section class="sionLanding__marketing" id="sion-digital-marketing">
        <div class="sionLanding__wrap">
          <div class="sionLanding__sectionHead sionLanding__reveal"><div><p class="sionLanding__kicker">${t.marketingEyebrow}</p><h2>${t.marketingHeading}</h2></div><p>${t.marketingIntro}</p></div>
          <div class="sionLanding__marketingGrid">${t.marketingCards.map((service, index) => `
            <a class="sionLanding__marketingCard sionLanding__reveal" href="${service[3]}">
              <div class="sionLanding__marketingMeta"><span>0${index + 1}</span><span>${service[2]}</span></div>
              <h3>${service[0]}</h3>
              <p>${service[1]}</p>
              <span class="sionLanding__marketingMore"><span>${t.marketingMore}</span><i aria-hidden="true">&#8599;</i></span>
            </a>`).join('')}</div>
        </div>
      </section>
      <section class="sionLanding__work" id="sion-work">
        <div class="sionLanding__wrap">
          <div class="sionLanding__sectionHead sionLanding__reveal"><div><p class="sionLanding__kicker">Selected Direction</p><h2>Work that<br>moves people.</h2></div><p>${t.work}</p></div>
          <div class="sionLanding__workGrid">
            <article class="sionLanding__project sionLanding__reveal"><div class="sionLanding__projectMedia"><video src="/assets/reels/cocktail.mp4" poster="/assets/reels/cocktail.jpg" muted loop playsinline preload="metadata" aria-label="Cocktail reel"></video></div><div class="sionLanding__projectMeta"><h3>Cocktail</h3><span>Food · Film</span></div></article>
            <article class="sionLanding__project sionLanding__reveal"><div class="sionLanding__projectMedia"><video src="/assets/reels/coffee.mp4" poster="/assets/reels/coffee.jpg" muted loop playsinline preload="metadata" aria-label="Coffee reel"></video></div><div class="sionLanding__projectMeta"><h3>Coffee</h3><span>Lifestyle · Film</span></div></article>
            <article class="sionLanding__project sionLanding__reveal"><div class="sionLanding__projectMedia"><img src="/assets/pitch-portfolio/hotel-main.webp" alt="Hospitality visual direction" loading="lazy"></div><div class="sionLanding__projectMeta"><h3>Hospitality</h3><span>Campaign · Photo</span></div></article>
            <article class="sionLanding__project sionLanding__reveal"><div class="sionLanding__projectMedia"><video src="/assets/reels/msn.mp4" poster="/assets/reels/msn.jpg" muted loop playsinline preload="metadata" aria-label="MSN reel"></video></div><div class="sionLanding__projectMeta"><h3>MSN</h3><span>Social · Content</span></div></article>
            <article class="sionLanding__project sionLanding__reveal"><div class="sionLanding__projectMedia"><video src="/assets/reels/morph.mp4" poster="/assets/reels/morph.jpg" muted loop playsinline preload="metadata" aria-label="Morph reel"></video></div><div class="sionLanding__projectMeta"><h3>Morph</h3><span>Hotel · Film</span></div></article>
            <article class="sionLanding__project sionLanding__reveal"><div class="sionLanding__projectMedia"><img src="/assets/pitch-portfolio/portrait-main.webp" alt="Portrait visual direction" loading="lazy"></div><div class="sionLanding__projectMeta"><h3>Portrait</h3><span>Production · Photo</span></div></article>
            <article class="sionLanding__project sionLanding__reveal"><div class="sionLanding__projectMedia"><video src="/assets/reels/picnic.mp4" poster="/assets/reels/picnic.jpg" muted loop playsinline preload="metadata" aria-label="Picnic reel"></video></div><div class="sionLanding__projectMeta"><h3>Picnic</h3><span>Lifestyle · Campaign</span></div></article>
            <article class="sionLanding__project sionLanding__reveal"><div class="sionLanding__projectMedia"><video src="/assets/reels/christmas.mp4" poster="/assets/reels/christmas.jpg" muted loop playsinline preload="metadata" aria-label="Christmas reel"></video></div><div class="sionLanding__projectMeta"><h3>Christmas</h3><span>Seasonal · Film</span></div></article>
            <article class="sionLanding__project sionLanding__reveal"><div class="sionLanding__projectMedia"><img src="/assets/pitch-portfolio/food-main.webp" alt="Food visual direction" loading="lazy"></div><div class="sionLanding__projectMeta"><h3>Food</h3><span>Content · Photo</span></div></article>
            <article class="sionLanding__project sionLanding__reveal"><div class="sionLanding__projectMedia"><video src="/assets/reels/vampire.mp4" poster="/assets/reels/vampire.jpg" muted loop playsinline preload="metadata" aria-label="Vampire Grill reel"></video></div><div class="sionLanding__projectMeta"><h3>Vampire Grill</h3><span>Experience · Film</span></div></article>
            <article class="sionLanding__project sionLanding__reveal"><div class="sionLanding__projectMedia"><video src="/assets/reels/valentine.mp4" poster="/assets/reels/valentine.jpg" muted loop playsinline preload="metadata" aria-label="Valentine reel"></video></div><div class="sionLanding__projectMeta"><h3>Valentine</h3><span>Campaign · Content</span></div></article>
            <article class="sionLanding__project sionLanding__reveal"><div class="sionLanding__projectMedia"><img src="/assets/pitch-portfolio/travel-main.webp" alt="Travel visual direction" loading="lazy"></div><div class="sionLanding__projectMeta"><h3>Travel</h3><span>Brand · Photo</span></div></article>
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

    const hero = landing.querySelector('.sionLanding__hero');
    const heroLogoSlot = landing.querySelector('.sionLanding__heroLogoSlot');
    const heroLogo = landing.querySelector('.sionLanding__heroLogo');
    const heroFirstHeadline = landing.querySelector('.sionLanding__heroHeadline');
    const heroSecondLead = landing.querySelector('.sionLanding__heroSecondLead');
    const heroSecondTail = landing.querySelector('.sionLanding__heroSecondTail');
    const heroTailChars = [...landing.querySelectorAll('.sionLanding__heroTailChar')];
    const heroTailAccent = landing.querySelector('.sionLanding__heroTailAccent');
    let heroFrame = 0;
    const updateHeroLogo = () => {
      heroFrame = 0;
      if (!hero.isConnected) return;
      const distance = Math.max(1, hero.offsetHeight - innerHeight);
      const rawProgress = Math.max(0, Math.min(1, (scrollY - hero.offsetTop) / distance));
      // The first 77.78% keeps the existing sequence timing. The remaining
      // distance holds the completed "คิดตังค์" frame before the next section.
      const timelineProgress = Math.min(1, rawProgress / .7777778);
      const progress = Math.max(0, Math.min(1, (timelineProgress - .04) / .4));
      const eased = progress * progress * (3 - 2 * progress);
      const leadProgress = Math.max(0, Math.min(1, (timelineProgress - .63) / .1));
      const leadEntry = leadProgress * leadProgress * (3 - 2 * leadProgress);
      const leadExitProgress = Math.max(0, Math.min(1, (timelineProgress - .76) / .07));
      const leadExit = leadExitProgress * leadExitProgress * (3 - 2 * leadExitProgress);
      const tailProgress = Math.max(0, Math.min(1, (timelineProgress - .835) / .04));
      const tailEntry = tailProgress * tailProgress * (3 - 2 * tailProgress);
      const firstExit = leadEntry;
      const targetWidth = parseFloat(getComputedStyle(heroLogo).width) || 0;
      const gap = innerWidth <= 800 ? 12 : 28;
      heroLogoSlot.style.width = `${targetWidth * eased}px`;
      heroLogoSlot.style.marginLeft = `${gap * eased}px`;
      heroLogo.style.opacity = `${eased}`;
      heroLogo.style.clipPath = `inset(0 ${100 * (1 - eased)}% 0 0)`;
      heroLogo.style.transform = `translateX(${-25 * (1 - eased)}px) scale(${.94 + .06 * eased})`;
      heroFirstHeadline.style.opacity = `${1 - firstExit}`;
      heroFirstHeadline.style.transform = `translateY(${-30 * firstExit}px)`;
      heroSecondLead.style.opacity = `${leadEntry * (1 - leadExit)}`;
      heroSecondLead.style.transform = `translateY(${30 * (1 - leadEntry) - 30 * leadExit}px)`;
      heroSecondTail.style.opacity = `${tailEntry}`;
      heroSecondTail.style.transform = `translateY(${30 * (1 - tailEntry)}px)`;
      heroTailChars.forEach((char, index) => {
        const charProgress = Math.max(0, Math.min(1, (timelineProgress - (.875 + index * .012)) / .012));
        const charEntry = charProgress * charProgress * (3 - 2 * charProgress);
        char.style.opacity = `${charEntry}`;
        char.style.transform = `translateY(${.38 * (1 - charEntry)}em)`;
      });
      const accentProgress = Math.max(0, Math.min(1, (timelineProgress - .985) / .013));
      const accentEntry = accentProgress * accentProgress * (3 - 2 * accentProgress);
      heroTailAccent.style.opacity = `${accentEntry}`;
      heroTailAccent.style.transform = `translateY(${.55 * (1 - accentEntry)}em)`;
    };
    const requestHeroUpdate = () => {
      if (!heroFrame) heroFrame = requestAnimationFrame(updateHeroLogo);
    };
    addEventListener('scroll', requestHeroUpdate, { passive: true });
    addEventListener('resize', requestHeroUpdate, { passive: true });
    updateHeroLogo();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    landing.querySelectorAll('.sionLanding__reveal').forEach((item) => observer.observe(item));

    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { rootMargin: '20% 0px', threshold: .12 });
    landing.querySelectorAll('.sionLanding__project video').forEach((video) => videoObserver.observe(video));

    const portal = landing.querySelector('.sionLanding__portal');
    let lastCarouselReset = 0;
    let carouselWasOpening = false;
    let carouselWasReady = false;
    let carouselIntroTimer = 0;
    let carouselLocked = false;
    let carouselUnlocking = false;
    addEventListener('sion:carousel-unlock', () => {
      carouselUnlocking = true;
      carouselLocked = false;
      document.body.classList.remove('sionLandingCarouselLocked');
    });
    const resetCarousel = () => {
      const index = document.querySelector('.homeCarouselUi__index')?.textContent.trim();
      if (!index || index === '01' || Date.now() - lastCarouselReset < 1200) return;
      lastCarouselReset = Date.now();
      document.querySelector('.homeCarouselUi__arrowLeft')?.click();
    };
    const updateCarouselAccess = () => {
      if (!landing.isConnected) {
        carouselLocked = false;
        if (!document.querySelector('.sionLanding')) {
          document.body.classList.remove('sionLandingCarouselOpening');
          document.body.classList.remove('sionLandingCarouselReady');
          document.body.classList.remove('sionLandingCarouselLocked');
        }
        return;
      }
      if (carouselLocked) {
        const bottom = Math.max(0, document.documentElement.scrollHeight - innerHeight);
        if (scrollY < bottom - 1) {
          scrollTo(0, bottom);
          return;
        }
      }
      const portalTop = portal.getBoundingClientRect().top;
      const progress = Math.max(0, Math.min(1, (innerHeight - portalTop) / innerHeight));
      const easedProgress = 1 - Math.pow(1 - progress, 2.2);
      const carousel = document.querySelector('.homeCarousel');
      carousel?.style.setProperty('--sion-carousel-clip-y', `${38 * (1 - easedProgress)}%`);
      carousel?.style.setProperty('--sion-carousel-clip-x', `${34 * (1 - easedProgress)}%`);
      carousel?.style.setProperty('--sion-carousel-radius', `${.4 * (1 - easedProgress)}rem`);
      carousel?.style.setProperty('--sion-carousel-opacity', `${Math.min(1, progress * 1.8)}`);
      carousel?.style.setProperty('--sion-carousel-scale', `${.84 + .16 * easedProgress}`);
      const ready = progress >= .995;
      const shouldLock = progress >= .9;
      const logoAnimations = document.querySelectorAll('.sionHomeLogoAsset, .sionHomeWordmark');
      if (progress < .1) carouselUnlocking = false;
      const opening = progress > .001;
      document.body.classList.toggle('sionLandingCarouselOpening', opening);
      document.body.classList.toggle('sionLandingCarouselReady', ready);
      const introIndex = Math.max(0, (parseInt(document.querySelector('.homeCarouselUi__index')?.textContent, 10) || 1) - 1);
      document.querySelectorAll('.homeCarouselItem').forEach((item, index) => {
        item.classList.toggle('sionCarouselIntroActive', opening && !document.body.classList.contains('sionCarouselHasInteracted') && index === introIndex);
      });
      if (shouldLock && !carouselLocked && !carouselUnlocking) {
        carouselLocked = true;
        document.body.classList.add('sionLandingCarouselLocked');
        scrollTo(0, Math.max(0, document.documentElement.scrollHeight - innerHeight));
      }
      if (opening && !carouselWasOpening) {
        document.body.classList.remove('sionCarouselHasInteracted');
      }
      if (!ready) {
        clearTimeout(carouselIntroTimer);
        logoAnimations.forEach((item) => {
          item.getAnimations().forEach((animation) => {
            animation.pause();
            animation.currentTime = 0;
          });
        });
      }
      if (ready && !carouselWasReady) {
        clearTimeout(carouselIntroTimer);
        logoAnimations.forEach((item) => { item.style.animation = 'none'; });
        if (logoAnimations.length) void logoAnimations[0].offsetWidth;
        logoAnimations.forEach((item) => {
          item.style.removeProperty('animation');
          item.getAnimations().forEach((animation) => {
            animation.currentTime = 0;
            animation.pause();
          });
        });
        carouselIntroTimer = setTimeout(() => {
          if (!document.body.classList.contains('sionLandingCarouselReady')) return;
          logoAnimations.forEach((item) => {
            item.getAnimations().forEach((animation) => {
              animation.currentTime = 0;
              animation.play();
            });
          });
        }, 500);
      }
      carouselWasOpening = opening;
      carouselWasReady = ready;
      // Keep the current slide still while the carousel closes. Resetting it
      // during this visible portion made the whole carousel appear to jump up.
      if (progress <= .001) {
        document.body.classList.remove('sionCarouselHasInteracted');
        resetCarousel();
      }
    };
    addEventListener('scroll', updateCarouselAccess, { passive: true });
    addEventListener('resize', updateCarouselAccess, { passive: true });
    const carouselGuard = setInterval(() => {
      if (!landing.isConnected) {
        clearTimeout(carouselIntroTimer);
        clearInterval(carouselGuard);
        if (!document.querySelector('.sionLanding')) {
          document.body.classList.remove('sionLandingCarouselOpening');
          document.body.classList.remove('sionLandingCarouselReady');
          document.body.classList.remove('sionLandingCarouselLocked');
        }
        return;
      }
      updateCarouselAccess();
    }, 500);
    updateCarouselAccess();
    if (new URLSearchParams(location.search).get('carousel') === '1') {
      requestAnimationFrame(() => {
        scrollTo(0, Math.max(0, document.documentElement.scrollHeight - innerHeight));
        updateCarouselAccess();
        history.replaceState(history.state, '', '/');
      });
    }
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
