(() => {
  const route = location.pathname.replace(/\/$/, '') || '/';
  if (route !== '/ai-solution' && route !== '/ai-solution.html') return;

  const root = document.getElementById('__nuxt');
  if (!root) return;
  const th = document.documentElement.dataset.sionLanguage !== 'en';
  const copy = th ? {
    back: 'กลับหน้าแรก', carousel: 'กลับ Carousel', nav1: 'ภาพรวม', nav2: 'โซลูชัน', nav3: 'กระบวนการ',
    eyebrow: 'AI SOLUTION / COMPUTER VISION',
    hero: 'เปลี่ยนภาพ<br>จากกล้อง<br>เป็นข้อมูลที่<em>ตัดสินใจได้</em>',
    heroLead: 'ออกแบบ AI จากหน้างานจริง เพื่อมองหา นับ ตรวจสอบ และแจ้งเตือนสิ่งที่ทีมต้องรู้ โดยเชื่อมต่อกับกล้องและ Workflow ที่ธุรกิจใช้อยู่',
    live: 'ระบบกำลังประมวลผล', objects: 'วัตถุที่ตรวจพบ',
    capabilities: 'สิ่งที่ระบบช่วยมองเห็น', capabilitiesLead: 'โมเดลหนึ่งตัวควรแก้ปัญหาหนึ่งอย่างให้ชัด แล้วจึงเชื่อมผลลัพธ์เข้ากับการทำงานจริง',
    cases: [
      ['Object Detection', 'ตรวจจับสินค้า ชิ้นส่วน บุคคล อุปกรณ์ PPE หรือวัตถุเฉพาะในพื้นที่ทำงาน'],
      ['Product Counting', 'นับของบนสายพาน จำนวนเข้า–ออก สต็อก และกำลังการผลิตแบบต่อเนื่อง'],
      ['Vehicle Analytics', 'นับและจำแนกรถ วิเคราะห์ทิศทาง ความหนาแน่น และช่วงเวลาที่มีการใช้งานสูง'],
      ['Quality Inspection', 'คัดแยกตำหนิ ความผิดปกติ สี รูปร่าง หรือชิ้นงานที่ไม่เป็นไปตามมาตรฐาน'],
      ['Safety & PPE', 'ตรวจหมวก เสื้อสะท้อนแสง พื้นที่ห้ามเข้า และเหตุการณ์ที่ต้องแจ้งเตือน'],
      ['OCR & Traceability', 'อ่านฉลาก เลขล็อต บาร์โค้ด ป้ายทะเบียน และเชื่อมประวัติกลับเข้าสู่ระบบ']
    ],
    demos: 'ตัวอย่างการประยุกต์ใช้', demoLead: 'ใช้ภาพจากสถานการณ์จริงประกอบกับ Detection UI เพื่อให้เห็นว่าข้อมูลแบบใดสามารถนำไปต่อยอดได้',
    demoCards: [
      ['01 / LOGISTICS', 'นับพัสดุบนสายพาน', 'ติดตามจำนวนและอัตราการไหล แยกประเภทสิ่งของ และแจ้งเมื่อเกิดการหยุดสะสม'],
      ['02 / TRAFFIC', 'วิเคราะห์จำนวนรถ', 'นับรถตามช่องทาง แยกประเภทรถ และดูความหนาแน่นเพื่อวางแผนพื้นที่หรือการเดินทาง'],
      ['03 / PRODUCTION', 'ตรวจสายการผลิต', 'ตรวจวัตถุดิบ ชิ้นงานผิดปกติ และสถานะเครื่องจักรจากกล้องที่ติดตั้งในจุดสำคัญ']
    ],
    process: 'จากโจทย์หน้างาน<br>สู่ระบบที่ใช้งานจริง',
    steps: [
      ['01', 'Define', 'ลงพื้นที่ กำหนดสิ่งที่ต้องตรวจและตัวชี้วัดความสำเร็จ'],
      ['02', 'Collect & Label', 'เก็บภาพในสภาพแวดล้อมจริงและทำข้อมูลสำหรับฝึกโมเดล'],
      ['03', 'Train & Evaluate', 'ฝึก ทดสอบ และปรับค่าให้เหมาะกับความเร็วและความแม่นยำที่ต้องการ'],
      ['04', 'Deploy & Monitor', 'ติดตั้งบน Cloud หรือ Edge Device พร้อม Dashboard การแจ้งเตือนและการดูแลโมเดล']
    ],
    beyond: 'มากกว่า Computer Vision', beyondLead: 'เราออกแบบ AI ให้เข้ากับข้อมูลและขั้นตอนขององค์กร ไม่จำกัดเฉพาะการมองเห็นจากกล้อง',
    beyondItems: [['Forecasting', 'คาดการณ์ยอดขาย ความต้องการ และกำลังการผลิต'], ['Document AI', 'อ่านเอกสาร ใบสั่งซื้อ ใบเสร็จ และจัดข้อมูลอัตโนมัติ'], ['Knowledge AI / RAG', 'ค้นและตอบจากข้อมูลภายในโดยอ้างอิงแหล่งที่มา'], ['Workflow Automation', 'เชื่อม AI กับ LINE, CRM, Sheet, Email และระบบหลังบ้าน']],
    ctaSmall: 'มีโจทย์ที่อยากให้ AI ช่วยดูอยู่หรือเปล่า?', cta: 'ส่งภาพหน้างาน<br>มาให้เราประเมิน', line: 'คุยผ่าน LINE', phone: 'โทร 097-208-2873',
    source: 'สื่อประกอบจาก Pexels — ใช้งานภายใต้ Pexels License'
  } : {
    back: 'Back home', carousel: 'Back to Carousel', nav1: 'Overview', nav2: 'Solutions', nav3: 'Process',
    eyebrow: 'AI SOLUTION / COMPUTER VISION',
    hero: 'Turn camera feeds<br>into <em>decisions.</em>',
    heroLead: 'Purpose-built AI that detects, counts, inspects, and alerts—connected to the cameras and workflows your operation already uses.',
    live: 'Processing live feed', objects: 'objects detected',
    capabilities: 'What the system can see', capabilitiesLead: 'Start with one clearly defined operational problem, then connect the model output to the people and systems that act on it.',
    cases: [
      ['Object Detection', 'Detect products, parts, people, PPE, and custom objects across operational areas.'],
      ['Product Counting', 'Count conveyor items, entries, exits, inventory, and production throughput continuously.'],
      ['Vehicle Analytics', 'Count and classify vehicles, direction, density, and peak usage periods.'],
      ['Quality Inspection', 'Identify defects, anomalies, colors, shapes, and products outside specification.'],
      ['Safety & PPE', 'Monitor helmets, high-visibility clothing, restricted areas, and events that require attention.'],
      ['OCR & Traceability', 'Read labels, lot numbers, barcodes, and license plates, then connect records to your systems.']
    ],
    demos: 'Applied examples', demoLead: 'Real-world stock footage combined with detection UI shows the kind of operational data each solution can produce.',
    demoCards: [
      ['01 / LOGISTICS', 'Conveyor package counting', 'Monitor count and flow rate, classify items, and flag accumulation or stoppages.'],
      ['02 / TRAFFIC', 'Vehicle flow analytics', 'Count by lane, classify vehicle types, and understand density for mobility or site planning.'],
      ['03 / PRODUCTION', 'Production line inspection', 'Inspect materials, abnormal items, and equipment status from cameras at critical points.']
    ],
    process: 'From an operational brief<br>to a working system.',
    steps: [
      ['01', 'Define', 'Visit the site and define the target, conditions, and success metrics.'],
      ['02', 'Collect & Label', 'Capture representative footage and prepare the training dataset.'],
      ['03', 'Train & Evaluate', 'Train, test, and tune for the required balance of speed and accuracy.'],
      ['04', 'Deploy & Monitor', 'Deploy to cloud or edge with dashboards, alerts, and ongoing model monitoring.']
    ],
    beyond: 'Beyond computer vision', beyondLead: 'We design AI around your information and operations, including work that does not begin with a camera.',
    beyondItems: [['Forecasting', 'Forecast sales, demand, and production capacity.'], ['Document AI', 'Read orders, receipts, and documents into structured data.'], ['Knowledge AI / RAG', 'Search and answer from internal knowledge with references.'], ['Workflow Automation', 'Connect AI with LINE, CRM, Sheets, email, and internal tools.']],
    ctaSmall: 'Have something you want AI to watch?', cta: 'Send us a sample.<br>We will assess it.', line: 'Talk on LINE', phone: 'Call 097-208-2873',
    source: 'Media from Pexels — used under the Pexels License'
  };

  const caseCards = copy.cases.map((item, index) => `<article class="aiCase"><span>${String(index + 1).padStart(2, '0')}</span><h3>${item[0]}</h3><p>${item[1]}</p><i>↘</i></article>`).join('');
  const media = [
    ['package-conveyor', 'PACKAGE', '248'],
    ['highway-traffic', 'VEHICLE', '137'],
    ['factory-conveyor', 'MATERIAL', '064']
  ];
  const demoCards = copy.demoCards.map((item, index) => {
    const [file, label, count] = media[index];
    const boxes = index === 1
      ? '<i class="aiDetect aiDetect--a" data-name="CAR 97%"></i><i class="aiDetect aiDetect--b" data-name="CAR 95%"></i><i class="aiDetect aiDetect--c" data-name="TRUCK 92%"></i>'
      : '<i class="aiDetect aiDetect--a" data-name="OBJECT 98%"></i><i class="aiDetect aiDetect--b" data-name="OBJECT 96%"></i>';
    return `<article class="aiDemo"><div class="aiDemo__media"><video src="/assets/ai-solution/media/${file}.mp4" poster="/assets/ai-solution/media/${file}.jpg" muted loop playsinline autoplay preload="metadata"></video><div class="aiDemo__scan"></div>${boxes}<div class="aiDemo__meter"><span>${label}</span><strong data-ai-count="${count}">000</strong></div></div><div class="aiDemo__copy"><span>${item[0]}</span><h3>${item[1]}</h3><p>${item[2]}</p></div></article>`;
  }).join('');
  const steps = copy.steps.map((step) => `<li><span>${step[0]}</span><h3>${step[1]}</h3><p>${step[2]}</p></li>`).join('');
  const beyond = copy.beyondItems.map((item, index) => `<article><span>${String(index + 1).padStart(2, '0')}</span><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('');

  root.innerHTML = `<div class="aiPage"><header class="aiNav"><a class="aiNav__brand" href="/" aria-label="Sion Motion — Home"><img src="/assets/sion-motion-logo-header.png" alt="Sion Motion"></a><nav><a href="#overview">${copy.nav1}</a><a href="#solutions">${copy.nav2}</a><a href="#process">${copy.nav3}</a></nav><a class="aiNav__back" href="/">${copy.back}</a></header><main><section class="aiHero" id="overview"><div class="aiHero__copy"><p>( ${copy.eyebrow} )</p><h1>${copy.hero}</h1><div>${copy.heroLead}</div></div><div class="aiHero__visual"><video src="/assets/ai-solution/media/package-conveyor.mp4" poster="/assets/ai-solution/media/package-conveyor.jpg" muted loop playsinline autoplay preload="auto"></video><div class="aiHero__grid"></div><div class="aiHero__scan"></div><i class="aiHero__box aiHero__box--1" data-name="PACKAGE 98%"></i><i class="aiHero__box aiHero__box--2" data-name="PACKAGE 96%"></i><div class="aiHero__status"><span><i></i>${copy.live}</span><strong><b data-ai-count="248">000</b> ${copy.objects}</strong></div></div></section><section class="aiCapabilities" id="solutions"><header><p>( CAPABILITIES )</p><h2>${copy.capabilities}</h2><div>${copy.capabilitiesLead}</div></header><div class="aiCases">${caseCards}</div></section><section class="aiExamples"><header><p>( LIVE APPLICATIONS )</p><h2>${copy.demos}</h2><div>${copy.demoLead}</div></header>${demoCards}</section><section class="aiProcess" id="process"><header><p>( BUILD PROCESS )</p><h2>${copy.process}</h2></header><ol>${steps}</ol></section><section class="aiBeyond"><header><p>( AI MODELS )</p><h2>${copy.beyond}</h2><div>${copy.beyondLead}</div></header><div>${beyond}</div></section><section class="aiCta"><p>${copy.ctaSmall}</p><h2>${copy.cta}</h2><div><a href="https://line.me/ti/p/dfPg1ktRiT" target="_blank" rel="noopener">${copy.line}<span>↗</span></a><a href="tel:+66972082873">${copy.phone}<span>↗</span></a></div></section></main><footer class="aiFooter"><a href="/"><img src="/assets/sion-motion-logo-header.png" alt="Sion Motion"></a><a href="/?carousel=1">${copy.carousel}</a><a href="https://www.pexels.com/" target="_blank" rel="noopener">${copy.source}</a></footer></div>`;

  document.body.classList.add('aiSolutionRoute');
  document.title = 'AI Solution | Sion Motion';
  const style = document.createElement('style');
  style.textContent = `
    html{scroll-behavior:smooth;scroll-padding-top:6rem}body.aiSolutionRoute{margin:0;background:#090c09;color:#f4f5ef;overflow-x:hidden}body.aiSolutionRoute>.sionLanguage{top:7rem;right:1rem;bottom:auto}.aiPage{width:100%;overflow:hidden;--acid:#b8ff3d;--orange:#ff6038;min-height:100vh;font-family:inherit}.aiPage *{box-sizing:border-box}.aiPage a{color:inherit;text-decoration:none}.aiNav{position:fixed;inset:0 0 auto;z-index:50;height:6rem;padding:.65rem 3rem;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:3rem;background:rgba(9,12,9,.8);border-bottom:1px solid rgba(255,255,255,.25);backdrop-filter:blur(16px)}.aiNav__brand img{display:block;width:auto;height:4.7rem}.aiNav nav{display:flex;justify-content:center;gap:3rem;font:1rem/1 Clarkson,Arial,sans-serif;text-transform:uppercase}.aiNav nav a,.aiNav__back{position:relative;padding:.5rem 0}.aiNav nav a:after,.aiNav__back:after{content:'';position:absolute;inset:auto 0 .2rem;height:1px;background:var(--acid);transform:scaleX(0);transform-origin:right;transition:transform .35s}.aiNav nav a:hover:after,.aiNav__back:hover:after{transform:scaleX(1);transform-origin:left}.aiNav__back{font:1rem/1 Clarkson,Arial,sans-serif;text-transform:uppercase}.aiHero{min-height:100svh;padding:6rem 0 0;display:grid;grid-template-columns:1fr 1fr}.aiHero__copy{padding:clamp(5rem,8vw,9rem) 3rem 4rem;display:flex;flex-direction:column;justify-content:space-between}.aiHero__copy>p,.aiCapabilities header>p,.aiExamples header>p,.aiProcess header>p,.aiBeyond header>p{margin:0;font:1rem/1 Clarkson,Arial,sans-serif;letter-spacing:.08em}.aiHero h1{margin:auto 0 3rem;font-size:clamp(4.7rem,8.8vw,10rem);font-weight:400;line-height:.78;letter-spacing:-.075em}.aiHero h1 em{display:block;color:var(--acid);font-style:normal}.aiHero__copy>div{max-width:42rem;font-size:clamp(1.35rem,1.8vw,2rem);line-height:1.4}.aiHero__visual{position:relative;min-height:calc(100svh - 6rem);overflow:hidden;background:#141814}.aiHero__visual video{width:100%;height:100%;object-fit:cover;filter:saturate(.75) contrast(1.08)}.aiHero__visual:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(0,0,0,.65))}.aiHero__grid{position:absolute;inset:0;opacity:.25;background-image:linear-gradient(rgba(184,255,61,.35) 1px,transparent 1px),linear-gradient(90deg,rgba(184,255,61,.35) 1px,transparent 1px);background-size:10% 10%}.aiHero__scan,.aiDemo__scan{position:absolute;z-index:2;left:0;right:0;height:2px;background:var(--acid);box-shadow:0 0 20px var(--acid);animation:aiScan 4s ease-in-out infinite alternate}@keyframes aiScan{from{top:12%}to{top:86%}}.aiHero__box,.aiDetect{position:absolute;z-index:3;border:2px solid var(--acid)}.aiHero__box:before,.aiDetect:before{content:attr(data-name);position:absolute;top:-1.6rem;left:-2px;padding:.25rem .45rem;background:var(--acid);color:#071000;font:600 .65rem/1 Clarkson,Arial,sans-serif;letter-spacing:.06em;white-space:nowrap}.aiHero__box--1{left:28%;top:38%;width:24%;height:29%}.aiHero__box--2{right:12%;top:31%;width:26%;height:33%}.aiHero__status{position:absolute;z-index:4;left:2rem;right:2rem;bottom:2rem;display:flex;justify-content:space-between;align-items:end;font-family:Clarkson,Arial,sans-serif}.aiHero__status span{display:flex;align-items:center;gap:.6rem;font-size:.8rem;letter-spacing:.08em;text-transform:uppercase}.aiHero__status span i{width:.65rem;height:.65rem;background:var(--acid);border-radius:50%;box-shadow:0 0 16px var(--acid);animation:aiPulse 1.2s infinite}@keyframes aiPulse{50%{opacity:.35}}.aiHero__status strong{font-size:.85rem;font-weight:400;text-transform:uppercase;text-align:right}.aiHero__status b{display:block;color:var(--acid);font-size:3.2rem;font-weight:400;line-height:.85}.aiCapabilities,.aiExamples,.aiProcess,.aiBeyond{padding:clamp(7rem,11vw,12rem) 3rem}.aiCapabilities{background:#f1f1eb;color:#0a0d0a}.aiCapabilities header,.aiExamples header,.aiBeyond header{display:grid;grid-template-columns:1fr 2fr;gap:2rem;margin-bottom:7rem}.aiCapabilities h2,.aiExamples h2,.aiProcess h2,.aiBeyond h2{margin:0;font-size:clamp(4rem,8vw,9rem);font-weight:400;line-height:.86;letter-spacing:-.07em}.aiCapabilities header>div,.aiExamples header>div,.aiBeyond header>div{grid-column:2;max-width:56rem;font-size:clamp(1.4rem,2.1vw,2.35rem);line-height:1.4}.aiCases{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-top:1px solid;border-left:1px solid}.aiCase{position:relative;min-height:25rem;padding:1.5rem;display:flex;flex-direction:column;border-right:1px solid;border-bottom:1px solid;transition:.35s}.aiCase>span{font:1rem/1 Clarkson,Arial,sans-serif}.aiCase h3{margin:auto 0 1.5rem;font:400 clamp(2rem,3.1vw,3.6rem)/.95 Clarkson,Arial,sans-serif;letter-spacing:-.045em}.aiCase p{max-width:30rem;margin:0;padding-right:2rem;font-size:1.2rem;line-height:1.45}.aiCase i{position:absolute;right:1.5rem;top:1.5rem;font:normal 1.6rem/1 Clarkson,Arial,sans-serif}.aiCase:hover{background:var(--acid);transform:translateY(-.5rem)}.aiExamples{padding-left:0;padding-right:0}.aiExamples>header{padding:0 3rem}.aiDemo{display:grid;grid-template-columns:1.65fr 1fr;min-height:85vh;border-top:1px solid rgba(255,255,255,.35)}.aiDemo:nth-of-type(even){grid-template-columns:1fr 1.65fr}.aiDemo:nth-of-type(even) .aiDemo__media{order:2}.aiDemo__media{position:relative;min-height:70vh;overflow:hidden;background:#111}.aiDemo__media video{width:100%;height:100%;object-fit:cover}.aiDemo__media:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 60%,rgba(0,0,0,.55))}.aiDetect--a{left:18%;top:34%;width:21%;height:28%}.aiDetect--b{left:48%;top:40%;width:19%;height:25%}.aiDetect--c{right:9%;top:28%;width:20%;height:30%}.aiDemo__meter{position:absolute;left:1.5rem;right:1.5rem;bottom:1.5rem;z-index:4;display:flex;justify-content:space-between;align-items:end;color:var(--acid);font:1rem/1 Clarkson,Arial,sans-serif;letter-spacing:.08em}.aiDemo__meter strong{font-size:4rem;font-weight:400}.aiDemo__copy{padding:3rem;display:flex;flex-direction:column;justify-content:flex-end}.aiDemo__copy>span{margin-bottom:auto;color:var(--acid);font:1rem/1 Clarkson,Arial,sans-serif;letter-spacing:.08em}.aiDemo__copy h3{margin:4rem 0 2rem;font-size:clamp(3rem,5vw,6rem);font-weight:400;line-height:.9;letter-spacing:-.06em}.aiDemo__copy p{max-width:42rem;margin:0;font-size:clamp(1.3rem,1.8vw,2rem);line-height:1.45}.aiProcess{background:var(--acid);color:#071000}.aiProcess header{display:grid;grid-template-columns:1fr 3fr;gap:2rem;margin-bottom:8rem}.aiProcess ol{margin:0;padding:0;list-style:none;border-top:1px solid}.aiProcess li{display:grid;grid-template-columns:1fr 1.5fr 2fr;gap:2rem;padding:2.3rem 0;border-bottom:1px solid;align-items:start}.aiProcess li>span{font:1rem/1 Clarkson,Arial,sans-serif}.aiProcess li h3{margin:0;font:400 clamp(2.3rem,4vw,4.5rem)/.9 Clarkson,Arial,sans-serif;letter-spacing:-.05em}.aiProcess li p{max-width:42rem;margin:0;font-size:1.35rem;line-height:1.45}.aiBeyond{background:#f1f1eb;color:#0a0d0a}.aiBeyond>div{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid;border-left:1px solid}.aiBeyond article{min-height:22rem;padding:1.5rem;display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto 1fr auto;gap:1rem;border-right:1px solid;border-bottom:1px solid}.aiBeyond article h3{margin:0;text-align:right;font:400 clamp(2rem,4vw,4.5rem)/.9 Clarkson,Arial,sans-serif;letter-spacing:-.05em}.aiBeyond article p{grid-column:2;align-self:end;max-width:35rem;margin:0 0 0 auto;font-size:1.25rem;line-height:1.45}.aiCta{min-height:85vh;padding:3rem;display:flex;flex-direction:column;justify-content:space-between;background:var(--orange);color:#090c09}.aiCta>p{font-size:1.2rem}.aiCta h2{margin:auto 0;font-size:clamp(5rem,11vw,12rem);font-weight:400;line-height:.8;letter-spacing:-.08em}.aiCta>div{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid}.aiCta a{padding:1.6rem 0;display:flex;justify-content:space-between;font-size:1.4rem;border-bottom:1px solid}.aiCta a:first-child{padding-right:2rem;border-right:1px solid}.aiCta a:last-child{padding-left:2rem}.aiFooter{padding:2rem 3rem;display:grid;grid-template-columns:auto 1fr 1fr;gap:3rem;align-items:end;background:#090c09;color:#fff;border-top:1px solid #555;font:1rem/1.3 Clarkson,Arial,sans-serif}.aiFooter img{height:4rem;width:auto}.aiFooter a:nth-child(2){justify-self:center}.aiFooter a:last-child{justify-self:end;text-align:right;font-size:.75rem;opacity:.65}.sionBackToCarousel{display:none!important}@media(max-width:900px){.aiHero{grid-template-columns:1fr}.aiHero__visual{min-height:70vh}.aiCases{grid-template-columns:repeat(2,1fr)}.aiDemo,.aiDemo:nth-of-type(even){grid-template-columns:1fr}.aiDemo:nth-of-type(even) .aiDemo__media{order:0}.aiDemo__copy{min-height:45vh}.aiProcess header{grid-template-columns:1fr}.aiBeyond>div{grid-template-columns:1fr}}@media(max-width:700px){html{scroll-padding-top:4.8rem}body.aiSolutionRoute>.sionLanguage{display:flex!important;position:fixed!important;left:auto!important;right:.75rem!important;top:5.5rem!important;bottom:auto!important;transform:none!important}.aiNav{height:4.8rem;padding:.5rem 1rem;display:flex;justify-content:space-between}.aiNav__brand img{height:3.7rem}.aiNav nav{display:none}.aiNav__back{font-size:.85rem}.aiHero{padding-top:4.8rem}.aiHero__copy{min-width:0;min-height:70vh;padding:4rem 1rem 2rem;overflow:hidden}.aiHero h1{max-width:100%;font-size:16vw;line-height:.82;letter-spacing:-.055em;overflow-wrap:anywhere;word-break:break-word}.aiHero__copy>div{max-width:100%;font-size:1.3rem;overflow-wrap:anywhere}.aiHero__visual{min-height:62vh}.aiHero__status{left:1rem;right:1rem;bottom:1rem}.aiHero__status b{font-size:2.4rem}.aiCapabilities,.aiProcess,.aiBeyond{padding:7rem 1rem}.aiExamples{padding-top:7rem;padding-bottom:7rem}.aiExamples>header{padding:0 1rem}.aiCapabilities header,.aiExamples header,.aiBeyond header{display:block;margin-bottom:4rem}.aiCapabilities h2,.aiExamples h2,.aiProcess h2,.aiBeyond h2{margin-top:3rem;font-size:17vw}.aiCapabilities header>div,.aiExamples header>div,.aiBeyond header>div{margin-top:2rem;font-size:1.3rem}.aiCases{grid-template-columns:1fr}.aiCase{min-height:21rem}.aiCase h3{font-size:3rem}.aiDemo{min-height:0}.aiDemo__media{min-height:62vh}.aiDemo__copy{min-height:50vh;padding:1.2rem}.aiDemo__copy h3{font-size:13vw}.aiProcess header{margin-bottom:5rem}.aiProcess li{grid-template-columns:2.5rem 1fr;padding:2rem 0}.aiProcess li p{grid-column:2;font-size:1.2rem}.aiBeyond article{min-height:18rem}.aiBeyond article h3{font-size:11vw}.aiCta{padding:1rem;min-height:75vh}.aiCta h2{font-size:17vw}.aiCta>div{grid-template-columns:1fr}.aiCta a:first-child{padding-right:0;border-right:0}.aiCta a:last-child{padding-left:0}.aiFooter{padding:1.5rem 1rem;grid-template-columns:auto 1fr}.aiFooter a:nth-child(2){justify-self:end}.aiFooter a:last-child{grid-column:1/-1;justify-self:start;text-align:left}.aiFooter img{height:3.5rem}}
  `;
  document.head.append(style);

  const animateCount = (element) => {
    if (element.dataset.animated) return;
    element.dataset.animated = 'true';
    const end = Number(element.dataset.aiCount || 0);
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / 1200);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = String(Math.round(end * eased)).padStart(3, '0');
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) animateCount(entry.target);
  }), { threshold: .4 });
  root.querySelectorAll('[data-ai-count]').forEach((element) => observer.observe(element));
  root.querySelectorAll('video').forEach((video) => video.play().catch(() => {}));
})();
