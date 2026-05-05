/* === PARALLAX === */
const parallax = document.getElementById("parallax");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  parallax.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});

/* === ROZBIJANIE NAPISU NA LITERKI === */
const title = document.getElementById("neonTitle");
const text = title.innerText.trim();
title.innerHTML = "";

[...text].forEach((letter) => {
  const span = document.createElement("span");
  span.textContent = letter;
  span.style.animationDelay = `${Math.random() * 4}s`;
  title.appendChild(span);
});