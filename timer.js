
  const targetDate = new Date("2026-05-23T00:00:00+02:00").getTime();

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  const boxes = document.querySelectorAll(".time-box");

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      return;
    }

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");

    // delikatny błysk co sekundę – na wszystkich boxach
    boxes.forEach(box => {
      box.classList.remove("glow-pulse");
      // force reflow, żeby animacja mogła się ponownie odpalić
      void box.offsetWidth;
      box.classList.add("glow-pulse");
    });
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);