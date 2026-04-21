function buildGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  GEMSTONES.forEach((gem, i) => {
    const delay = (Math.min(i, 7) * 0.065).toFixed(2);

    const card = document.createElement('div');
    card.className = 'gem-card';
    card.style.setProperty('--delay', delay + 's');

    card.innerHTML = 
      <div class="gem-card-inner">
        <div class="gem-image-wrap">
          <div class="gem-glow" style="background:${gem.color}"></div>
          <div class="gem-shimmer"></div>

          <!-- هذا أهم شي للصور -->
          <img src="images/${gem.id}.png" 
               alt="${gem.name}" 
               loading="lazy"
               onerror="this.style.display='none'">

          <div class="gem-reveal-bar">${gem.tagline}</div>
        </div>

        <div class="gem-body">
          <h3 class="gem-name">${gem.name}</h3>
          <p class="gem-sub">${gem.tagline}</p>
          <p class="gem-desc">${gem.description}</p>
        </div>
      </div>
    ;

    // hover effect فقط للموبايل مو
    if (!isTouchDevice()) {
      const inner = card.querySelector('.gem-card-inner');
      let raf = null;

      card.addEventListener('mousemove', e => {
        if (raf) cancelAnimationFrame(raf);

        raf = requestAnimationFrame(() => {
          const r = inner.getBoundingClientRect();
          const nx = (e.clientX - r.left) / r.width - 0.5;
          const ny = (e.clientY - r.top) / r.height - 0.5;

          inner.style.transform =
            rotateX(${ny * -7}deg) rotateY(${nx * 7}deg) scale(1.016);

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
