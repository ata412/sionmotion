const style = document.createElement('style');
style.textContent = `
  .sionMotionReveal { position:absolute; inset:0; z-index:2; display:grid; place-items:center; overflow:hidden; background:#000; pointer-events:none; }
  .sionMotionReveal__art { position:relative; width:min(44vw,520px); max-height:68vh; aspect-ratio:1; }
  .sionMotionReveal__drawing, .sionMotionReveal__final { position:absolute; inset:0; display:grid; place-items:center; width:100%; height:100%; }
  .sionMotionReveal__drawing svg, .sionMotionReveal__final { width:100%; height:100%; object-fit:contain; }
  .sionMotionReveal__final { opacity:0; filter:drop-shadow(0 0 0 transparent); }
  .sionMotionReveal__drawing path { fill:none !important; stroke-linecap:round; stroke-linejoin:round; vector-effect:non-scaling-stroke; }
  .sionMotionReveal__drawing path.st0 { stroke:#393334; stroke-width:4.5; }
  .sionMotionReveal__drawing path.st1 { stroke:#fff; stroke-width:4; }
  @media (max-width:700px) { .sionMotionReveal__art { width:72vw; } }
`;
document.head.append(style);

function clamp(value) { return Math.max(0, Math.min(1, value)); }

async function mountReveal() {
  const intro = document.querySelector('#logoIntro');
  const sequence = intro?.querySelector('.logoIntro__sequence');
  if (!intro || !sequence || sequence.querySelector('.sionMotionReveal')) return;

  const reveal = document.createElement('div');
  reveal.className = 'sionMotionReveal';
  reveal.innerHTML = `<div class="sionMotionReveal__art"><div class="sionMotionReveal__drawing"></div><img class="sionMotionReveal__final" src="/assets/sion-motion-logo.png" alt="Sion Motion"></div>`;
  sequence.append(reveal);

  const originalCanvas = sequence.querySelector('canvas');
  if (originalCanvas) originalCanvas.style.visibility = 'hidden';

  const drawing = reveal.querySelector('.sionMotionReveal__drawing');
  // Do not let the filled SVG flash before its paths become strokes.
  drawing.style.visibility = 'hidden';
  const finalLogo = reveal.querySelector('.sionMotionReveal__final');
  let paths = [];
  try {
    const response = await fetch('/assets/sion-motion-logo.svg');
    drawing.innerHTML = await response.text();
    paths = [...drawing.querySelectorAll('path')].map((path) => {
      const length = Math.ceil(path.getTotalLength());
      path.style.strokeDasharray = String(length);
      path.style.strokeDashoffset = String(length);
      return { path, length };
    });
  } catch (_) {
    drawing.style.visibility = 'hidden';
  }

  const update = () => {
    // The artwork is sticky, so measure the scroll progress of its parent section.
    const rect = intro.getBoundingClientRect();
    // LogoIntro is four viewports tall. Keep the drawing across its whole sticky travel.
    const travel = Math.max(window.innerHeight * 3, intro.offsetHeight - window.innerHeight, 1);
    const sectionProgress = clamp(-rect.top / travel);
    const blankUntil = .12;
    const progress = clamp((sectionProgress - blankUntil) / (1 - blankUntil));
    const duration = .08;
    const span = Math.max(.001, 1 - duration);

    drawing.style.visibility = sectionProgress > blankUntil ? 'visible' : 'hidden';
    paths.forEach(({ path, length }, index) => {
      const start = paths.length < 2 ? 0 : index * span / (paths.length - 1);
      const drawn = clamp((progress - start) / duration);
      path.style.strokeDashoffset = String(length * (1 - drawn));
    });
    finalLogo.style.opacity = String(clamp((progress - .94) / .06));
    drawing.style.opacity = String(1 - clamp((progress - .96) / .04));
  };
  window.addEventListener('scroll', update, { passive:true });
  window.addEventListener('resize', update);
  update();
}

new MutationObserver(mountReveal).observe(document.documentElement, { childList:true, subtree:true });
mountReveal();
