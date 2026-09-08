const homeLogoStyle = document.createElement('style');
homeLogoStyle.textContent = `
  .homeCarouselLogo .homeCarouselLogo__logoWrapper { display:none !important; }
  .homeCarouselLogo .sionHomeLogoSequence { position:relative; width:min(72vw,900px); height:min(36vw,470px); overflow:visible; }
  .homeCarouselLogo .sionHomeLogoAsset {
    position:absolute; top:50%; left:50%; width:clamp(66px,8vw,120px); height:clamp(66px,8vw,120px);
    object-fit:contain; transform:translate(-50%,-50%) scale(3.05); transform-origin:center;
    animation:sionIconToLockup 8s cubic-bezier(.645,.045,.355,1) infinite;
  }
  .homeCarouselLogo .sionHomeWordmark {
    position:absolute; top:50%; left:33%; color:currentColor;
    font:500 clamp(2.2rem,6.3vw,7.2rem)/.85 Arial,sans-serif; letter-spacing:-.025em; white-space:nowrap;
    opacity:0; transform:translate(-1.5rem,-50%);
    animation:sionWordmarkReveal 8s cubic-bezier(.645,.045,.355,1) infinite;
  }
  .homeCarouselLogo__inverse .sionHomeLogoAsset { filter:invert(1); }
  @keyframes sionIconToLockup {
    0%,30% { left:50%; transform:translate(-50%,-50%) scale(3.05); }
    52%,82% { left:24%; transform:translate(-50%,-50%) scale(1.7); }
    100% { left:50%; transform:translate(-50%,-50%) scale(3.05); }
  }
  @keyframes sionWordmarkReveal {
    0%,32% { opacity:0; transform:translate(-1.5rem,-50%); }
    54%,80% { opacity:1; transform:translate(0,-50%); }
    100% { opacity:0; transform:translate(-1.5rem,-50%); }
  }
  @media (max-width:700px) {
    .homeCarouselLogo .sionHomeLogoSequence { width:88vw; height:45vw; }
    .homeCarouselLogo .sionHomeLogoAsset { width:58px; height:58px; }
    .homeCarouselLogo .sionHomeWordmark { left:36%; font-size:clamp(1.7rem,8vw,3.8rem); }
    @keyframes sionIconToLockup {
      0%,30% { left:50%; transform:translate(-50%,-50%) scale(2.35); }
      52%,82% { left:22%; transform:translate(-50%,-50%) scale(1.55); }
      100% { left:50%; transform:translate(-50%,-50%) scale(2.35); }
    }
  }
`;
document.head.append(homeLogoStyle);

function replaceHomeLogo() {
  document.querySelectorAll('.homeCarouselLogo').forEach((root) => {
    root.querySelectorAll('.homeCarouselLogo__main, .homeCarouselLogo__inverse').forEach((layer) => {
      if (layer.querySelector('.sionHomeLogoSequence')) return;
      const sequence = document.createElement('div');
      sequence.className = 'sionHomeLogoSequence';
      sequence.innerHTML = '<img class="sionHomeLogoAsset" src="/assets/sion-motion-mark.png" alt="Sion Motion"><span class="sionHomeWordmark">Sion Motion</span>';
      layer.append(sequence);
    });
  });
}
new MutationObserver(replaceHomeLogo).observe(document.documentElement, { childList:true, subtree:true });
replaceHomeLogo();
