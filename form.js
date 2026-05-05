document.querySelector(".dopamine-btn").addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.95)";
    setTimeout(() => {
      e.target.style.transform = "scale(1.08)";
    }, 120);
  });