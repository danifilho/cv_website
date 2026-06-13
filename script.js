/* ============================================================
   Daniel Filho — Research Portfolio
   ============================================================ */

/* ---- Set the portrait photo here ----
   Drop your file in images/ and update this path.
   It fills both the circle and the water-reflection below it. */
const PHOTO_SRC = 'images/profile.jpg';

(function applyPhoto() {
  const img = new Image();
  img.onload = () => {
    const css = `url('${PHOTO_SRC}')`;
    const main = document.getElementById('portrait-img');
    const refl = document.getElementById('portrait-reflection');
    if (main) {
      main.style.backgroundImage = css;
      const ph = main.querySelector('.portrait-placeholder');
      if (ph) ph.remove();
    }
    if (refl) refl.style.backgroundImage = css;
  };
  // If the file isn't there yet, the placeholder simply stays.
  img.src = PHOTO_SRC;
})();

/* ---- Inverted-color cursor ---- */
const cursor = document.getElementById('cursor-circle');
if (cursor) {
  window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });
  // Grow slightly over interactive elements
  document.querySelectorAll('a, button, .card').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '64px';
      cursor.style.height = '64px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '40px';
      cursor.style.height = '40px';
    });
  });
}

/* ---- Reveal on scroll ---- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
