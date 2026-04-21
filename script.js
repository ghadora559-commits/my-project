'use strict';

const GEMSTONES = [
  { id:'ruby', name:'Ruby', tagline:'The Stone of Eternal Flame', description:'The ruby does not ask for attention — it commands it. Born in the fierce heat of deep metamorphic rock, it holds within its crystalline heart a red so saturated it feels almost like an emotion rather than a colour. Ancient cultures believed it harboured an undying inner flame; warriors wore it for courage, lovers offered it as the most intimate of promises. It remains, perhaps, the most human of all stones — passionate, alive, and impossible to ignore.', color:'radial-gradient(circle at 50% 40%, rgba(210,30,60,0.6) 0%, transparent 68%)', glow:'0 28px 64px -12px rgba(210,30,60,0.5)' },
  { id:'emerald', name:'Emerald', tagline:'A Promise of Eternal Spring', description:'To look into a fine emerald is to glimpse the idea of spring itself — not a single season, but renewal made permanent and mineral. The Egyptians buried their dead with emeralds as a symbol of eternal youth; Cleopatra wore them as a declaration of both power and beauty. There is something profoundly calming in that green, something that asks you to slow down and breathe deeply, as though the stone itself still carries the memory of every forest it took millions of years to become.', color:'radial-gradient(circle at 50% 40%, rgba(35,125,75,0.6) 0%, transparent 68%)', glow:'0 28px 64px -12px rgba(35,125,75,0.48)' },
  { id:'sapphire', name:'Sapphire', tagline:'Wisdom Crystallised in Blue', description:'Sapphires are the colour of thinking clearly — of a sky seen just before dusk, when everything sharpens and the world feels vast and calm. Ancient Persians believed the entire sky was a reflection of a great sapphire beneath the earth; royalty wore them not merely for beauty but for clarity of mind and steadiness of soul. In every facet lives the quiet authority of someone who has already considered every possibility, and chosen serenity.', color:'radial-gradient(circle at 50% 40%, rgba(15,82,186,0.6) 0%, transparent 68%)', glow:'0 28px 64px -12px rgba(15,82,186,0.52)' },
  { id:'amethyst', name:'Amethyst', tagline:'The Contemplative Stone', description:'Amethyst has always belonged to the contemplative and the creative — to those who sit with difficult questions and let them breathe. Ancient Greeks carved goblets from it, believing it could ward off intoxication; medieval scholars wore it to sharpen their thinking. Its violet light occupies a liminal space, like the hour just before sleep when the mind begins to wander beautifully into the place between thought and dream.', color:'radial-gradient(circle at 50% 40%, rgba(130,48,185,0.6) 0%, transparent 68%)', glow:'0 28px 64px -12px rgba(130,48,185,0.48)' },
  { id:'diamond', name:'Diamond', tagline:'The Earth\'s Deepest Secret', description:'The diamond is the earth\'s most extraordinary transformation: carbon — the most ordinary of elements — pressed and heated over billions of years into the hardest substance known to exist. It fractures white light into every colour at once. It is made of the same material as charcoal, a quiet reminder that the most remarkable things often begin unremarkably, and that time, given enough of it, can make the impossible routine.', color:'radial-gradient(circle at 50% 40%, rgba(205,215,255,0.32) 0%, transparent 68%)', glow:'0 28px 64px -12px rgba(185,200,255,0.38)' },
  { id:'alexandrite', name:'Alexandrite', tagline:'The Stone That Contains Contradiction', description:'Alexandrite is the gem that refuses to be fully known. Emerald green in daylight, deep ruby red under candlelight — it holds two contradictory truths at once, shifting not just colour but character depending on where and when you encounter it. Discovered in the Ural Mountains in 1830, it is among the rarest gemstones on earth. Some collectors spend their entire lives in pursuit of a fine alexandrite. Most never find one. That elusiveness is part of what it is.', color:'radial-gradient(circle at 50% 40%, rgba(0,125,115,0.6) 0%, transparent 68%)', glow:'0 28px 64px -12px rgba(0,125,115,0.48)' },
  { id:'tanzanite', name:'Tanzanite', tagline:'The Gemstone of a Generation', description:'Tanzanite exists in only one place on the entire planet: a small corridor of land at the foot of Mount Kilimanjaro, in Tanzania. Its trichroic nature means it appears differently — blue, violet, or burgundy — depending on the angle of light, giving it the quality of a thought that changes meaning each time you revisit it. Geologists believe the deposit will be exhausted within decades. To own a tanzanite is to hold something the earth will not make again.', color:'radial-gradient(circle at 50% 40%, rgba(60,50,140,0.62) 0%, transparent 68%)', glow:'0 28px 64px -12px rgba(60,50,140,0.52)' },
  { id:'opal', name:'Opal', tagline:'A Storm of Colour Frozen in Stone', description:'The opal has no crystal structure — it is a frozen liquid, a suspension of microscopic silica spheres that diffract light into a shifting, living spectrum called play-of-fire. No two opals are alike; each is a unique painting that changes as you turn it, catching purples, golds, and greens that appear and vanish like fleeting moods. Aristotle wrote about it with wonder. Indigenous Australians believe it marks the place where a creator spirit first touched the earth.', color:'radial-gradient(circle at 50% 40%, rgba(235,115,60,0.55) 0%, transparent 68%)', glow:'0 28px 64px -12px rgba(235,115,60,0.48)' },
  { id:'topaz', name:'Topaz', tagline:'Crystallised Warmth', description:'Imperial topaz — in its finest golden-orange form — was once reserved exclusively for Russian royalty, who forbade its trade to any outside the Tsar\'s household. The name may derive from the Sanskrit word for fire, and there is something unmistakably warm about this stone: it holds light the way late afternoon sun holds a room, filling it with a gentle, unwavering radiance. It is a stone that asks nothing of you except that you notice it — and once you do, you cannot look away.', color:'radial-gradient(circle at 50% 40%, rgba(208,158,28,0.62) 0%, transparent 68%)', glow:'0 28px 64px -12px rgba(208,158,28,0.48)' },
  { id:'garnet', name:'Garnet', tagline:'The Stone of Steadfast Devotion', description:'The garnet has been carried as a talisman for thousands of years — by ancient Egyptians in their burial chambers, by Crusaders on long journeys, by lovers separated by distance who sent them as tokens of safe return. Its name comes from the Latin granatum, meaning pomegranate seed, and in its deepest red the resemblance is precise: intensely coloured, and full of something that feels like urgency. It is the stone of quiet, daily devotion — not the grand gesture, but the kind that lasts.', color:'radial-gradient(circle at 50% 40%, rgba(128,4,4,0.65) 0%, transparent 68%)', glow:'0 28px 64px -12px rgba(128,4,4,0.55)' },
  { id:'aquamarine', name:'Aquamarine', tagline:'The Colour of Open Water', description:'Aquamarine is the colour of shallow tropical water just before noon — translucent, luminous, and impossibly calm. Ancient sailors carried it as protection against storms, believing it was a fragment of the ocean\'s own substance. There is something about this stone that still evokes the feeling of open water: wide horizons, clean air, and a particular quality of stillness that only exists far from land. It is a stone for those who have learned to be at peace with their own depths.', color:'radial-gradient(circle at 50% 40%, rgba(0,172,190,0.58) 0%, transparent 68%)', glow:'0 28px 64px -12px rgba(0,172,190,0.48)' },
  { id:'moonstone', name:'Moonstone', tagline:'Light Made Solid', description:'Moonstone\'s most captivating quality — adularescence — is not on the surface but beneath it: a floating, billowing glow that moves like light trapped in water, like something alive and breathing inside the stone. Hindus regard it as sacred; Romans believed it was formed from solidified moonlight. It is a gem for quiet hours and late evenings — for the kind of beauty that does not announce itself but waits, patiently, to be discovered.', color:'radial-gradient(circle at 50% 40%, rgba(190,200,255,0.42) 0%, transparent 68%)', glow:'0 28px 64px -12px rgba(170,182,255,0.38)' },
  { id:'jade', name:'Jade', tagline:'Five Thousand Years of Reverence', description:'Jade has been the most revered stone in Chinese culture for over five thousand years — not for rarity alone, but for what it embodies: the five cardinal virtues of wisdom, courage, compassion, modesty, and justice, each felt in the stone\'s cool, dense weight. The finest imperial jade — intense, semi-translucent, deeply green — is valued above diamonds in much of Asia. To wear jade is to carry an ethical inheritance, the weight of every civilisation that has held it sacred before you.', color:'radial-gradient(circle at 50% 40%, rgba(0,112,72,0.63) 0%, transparent 68%)', glow:'0 28px 64px -12px rgba(0,112,72,0.52)' },
  { id:'spinel', name:'Spinel', tagline:'Beauty That Needed No Crown', description:'Spinel is the gemstone world\'s great underdog — a stone of extraordinary fire and colour that was misidentified as ruby for centuries. The Black Prince\'s Ruby, centrepiece of the British Imperial Crown, is in fact a red spinel. Its beauty was real all along, and entirely independent of its reputation. Today\'s collectors prize it precisely for that quality: a stone that never needed the credit it was denied, and whose worth required no validation from anyone.', color:'radial-gradient(circle at 50% 40%, rgba(172,18,92,0.63) 0%, transparent 68%)', glow:'0 28px 64px -12px rgba(172,18,92,0.52)' }
];

const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

function buildGallery() {
  const grid = document.getElementById('galleryGrid');
  grid.appendchild(card);
  if (!grid) return;
  GEMSTONES.forEach((gem, i) => {
    const delay = (Math.min(i, 7) * 0.065).toFixed(2);
    const card  = document.createElement('div');
    card.className = 'gem-card';
    card.style.setProperty('--delay', delay + 's');
    card.innerHTML = `
      <div class="gem-card-inner">
        <div class="gem-image-wrap">
          <div class="gem-glow" style="background:${gem.color}"></div>
          <div class="gem-shimmer"></div>
          <img src="images/${gem.id}.png" alt="${gem.name} — fine jewelry" loading="lazy" decoding="async" />
          <div class="gem-reveal-bar">${gem.tagline}</div>
        </div>
        <div class="gem-body">
          <h3 class="gem-name">${gem.name}</h3>
          <p class="gem-sub">${gem.tagline}</p>
          <p class="gem-desc">${gem.description}</p>
        </div>
      </div>`;
    if (!isTouchDevice()) {
      const inner = card.querySelector('.gem-card-inner');
      let raf = null;
      card.addEventListener('mousemove', e => {
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const r  = inner.getBoundingClientRect();
          const nx = (e.clientX - r.left) / r.width  - 0.5;
          const ny = (e.clientY - r.top)  / r.height - 0.5;
          inner.style.transform = `rotateX(${ny * -7}deg) rotateY(${nx * 7}deg) scale(1.016)`;
          inner.style.boxShadow = gem.glow;
        });
      });
      card.addEventListener('mouseleave', () => {
        if (raf) cancelAnimationFrame(raf);
        inner.style.transform = '';
        inner.style.boxShadow = '';
      });
    }
    grid.appendChild(card);
  });
}
function initReveal() {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } }),
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
  );
  document.querySelectorAll('.reveal-up,.reveal-left,.reveal-scale,.gem-card').forEach(el => obs.observe(el));
}

function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const th = window.innerHeight * 0.7;
  window.addEventListener('scroll', () => nav.classList.toggle('visible', window.scrollY > th), { passive: true });
}

function initParallax() {
  if (isTouchDevice()) return;
  const glows  = document.querySelectorAll('.atm-glow');
  const heroEl = document.querySelector('.hero-content');
  const vh     = window.innerHeight;
  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    glows.forEach((g, i) => { g.style.transform = `translateY(${sy * (i === 1 ? -0.06 : 0.08)}px)`; });
    if (heroEl && sy < vh * 1.1) {
      heroEl.style.transform = `translateY(${sy * 0.18}px)`;
      heroEl.style.opacity   = Math.max(0, 1 - sy / (vh * 0.6));
    }
  }, { passive: true });
}

function scrollToSection(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

document.addEventListener('DOMContentLoaded', () => {
  buildGallery(); initReveal(); initNavbar(); initParallax();
});
