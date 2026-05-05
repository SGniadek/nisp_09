function smoothScrollTo(targetY, duration = 700) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start;

  // custom easing (cubic-bezier-like)
  const ease = t => t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;

  function step(timestamp) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const progress = Math.min(time / duration, 1);

    window.scrollTo(0, startY + diff * ease(progress));

    if (time < duration) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    const y = target.getBoundingClientRect().top + window.scrollY;
    smoothScrollTo(y, 700); // 700ms = szybkie ale super smooth
  });
});