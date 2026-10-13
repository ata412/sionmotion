(() => {
  const copy = {
    th: {skip:'ข้ามไปเนื้อหา',navContact:'คุยเรื่องโปรเจกต์ ↗',lead:'เบื้องหลังภาพที่เล่าเรื่อง<br>คือทีมที่ใส่ใจทุกรายละเอียด',intro:'Sion Motion ผลิตวิดีโอและภาพนิ่งให้แบรนด์ <br>ตั้งแต่คิดเรื่อง วางแผนถ่ายทำ ไปจนถึงตัดต่อและ<span class="aboutNoWrap">ส่งมอบงาน</span>',start:'เริ่มโปรเจกต์ด้วยกัน ↗',explore:'ดูสิ่งที่เราทำ ↓',productionLead:'ดูแลทุกขั้นตอนของงาน Production',films:'วิดีโอแบรนด์ โฆษณา และคอนเทนต์สินค้า',social:'วิดีโอสั้นสำหรับร้านอาหาร คาเฟ่ โรงแรม และไลฟ์สไตล์',photo:'ภาพสินค้า อาหาร สถานที่ และภาพเล่าเรื่อง',post:'ตัดต่อ เกรดสี ออกแบบเสียง และโมชั่นประกอบ',clients:'แบรนด์ที่เคยร่วมงานกับเรา',pause:'หยุดโลโก้',resume:'เล่นโลโก้ต่อ',contactIntro:'มีไอเดีย มีบรีฟ หรืออยากเริ่มจากการคุย <br>เราพร้อมช่วยวางทางให้โปรเจกต์ของคุณ',line:'คุยผ่าน LINE ↗',top:'กลับขึ้นด้านบน ↑',heroAlt:'ทีม Sion Motion ขณะทำงานกับกล้องและอุปกรณ์กันสั่นในกองถ่าย',storyAlt:'เบื้องหลังทีมถ่ายทำ Sion Motion เดินถือชุดกล้องในสถานที่ถ่ายทำ'},
    en: {skip:'Skip to content',navContact:'Let’s talk ↗',lead:'Behind every story is a team<br>that cares about every detail.',intro:'Sion Motion creates films and photography for brands. <br>From the first idea and shoot planning to editing and delivery.',start:'Start a project together ↗',explore:'Explore our production ↓',productionLead:'Every stage of production, thoughtfully handled.',films:'Brand films, commercials and product content.',social:'Short-form videos for restaurants, cafés, hotels and lifestyle brands.',photo:'Product, food, location and storytelling photography.',post:'Editing, colour grading, sound design and supporting motion graphics.',clients:'Brands we have worked with',pause:'Pause logos',resume:'Play logos',contactIntro:'An idea, a brief, or just a conversation. <br>Let’s find the right direction for your next project.',line:'Talk on LINE ↗',top:'Back to top ↑',heroAlt:'Sion Motion camera operator working with a camera and stabiliser on set',storyAlt:'Behind the scenes: Sion Motion camera operator carrying the camera rig on location'}
  };
  let language = 'th';
  try { language = localStorage.getItem('sion-language') === 'en' ? 'en' : 'th'; } catch {}
  const languageButton = document.querySelector('[data-language]');
  const pauseButton = document.querySelector('[data-pause]');
  const marquee = document.querySelector('.aboutMarquee');
  let paused = false;
  function renderPause() {
    pauseButton.setAttribute('aria-pressed', String(paused));
    pauseButton.querySelector('[data-copy]').textContent = copy[language][paused ? 'resume' : 'pause'];
    pauseButton.querySelector('[data-pause-icon]').textContent = paused ? '▷' : 'Ⅱ';
    marquee.classList.toggle('is-paused', paused);
  }
  function renderLanguage() {
    document.documentElement.lang = language;
    document.documentElement.dataset.sionLanguage = language;
    document.querySelectorAll('[data-copy]').forEach(node => { node.innerHTML = copy[language][node.dataset.copy]; });
    document.querySelectorAll('[data-alt]').forEach(node => { node.alt = copy[language][node.dataset.alt]; });
    languageButton.textContent = language === 'th' ? 'EN' : 'ไทย';
    languageButton.setAttribute('aria-label', language === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย');
    languageButton.lang = language === 'th' ? 'en' : 'th';
    renderPause();
  }
  languageButton.addEventListener('click', () => {
    language = language === 'th' ? 'en' : 'th';
    try { localStorage.setItem('sion-language', language); } catch {}
    renderLanguage();
  });
  const duplicate = document.querySelector('[data-logo-group]').cloneNode(true);
  duplicate.removeAttribute('data-logo-group');
  duplicate.setAttribute('aria-hidden', 'true');
  duplicate.querySelectorAll('img').forEach(img => { img.alt = ''; });
  document.querySelector('[data-logo-track]').append(duplicate);
  pauseButton.addEventListener('click', () => { paused = !paused; renderPause(); });
  renderLanguage();
})();
