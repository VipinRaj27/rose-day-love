/* Containers */
const petalContainer = document.getElementById("petal-container");
const heartContainer = document.getElementById("heart-container");
const confettiContainer = document.getElementById("confetti-container");

/* Falling petals */
setInterval(() => {
  const p = document.createElement("div");
  p.className = "petal";
  p.innerHTML = "🌹";
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 6 + Math.random() * 6 + "s";
  petalContainer.appendChild(p);
  setTimeout(() => p.remove(), 12000);
}, 300);

/* Floating hearts */
setInterval(() => {
  const h = document.createElement("div");
  h.className = "floating-heart";
  h.innerHTML = "💖";
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = 6 + Math.random() * 6 + "s";
  heartContainer.appendChild(h);
  setTimeout(() => h.remove(), 12000);
}, 400);

/* Secret message */
const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");

function openSecret(event) {
  secretMessage.style.display = "block";

  // Small delay for smoother animation
  setTimeout(() => {
    secretMessage.classList.add("show");
  }, 50);

  secretBtn.style.display = "none";

  explodeHearts(event);
  launchConfetti();
}


/* Heart explosion */
function explodeHearts(event) {
  for (let i = 0; i < 20; i++) {
    const e = document.createElement("div");
    e.className = "explode-heart";
    e.innerHTML = "💖";

    e.style.left = event.clientX + Math.random() * 50 - 25 + "px";
    e.style.top = event.clientY + Math.random() * 50 - 25 + "px";

    document.body.appendChild(e);
    setTimeout(() => e.remove(), 1200);
  }
}

/* Confetti + sparkles */
function launchConfetti() {
  for (let i = 0; i < 40; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.innerHTML = ["✨","💖","🌹"][Math.floor(Math.random() * 3)];
    c.style.left = Math.random() * 100 + "vw";
    confettiContainer.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

/* Valentine countdown */
const timer = document.getElementById("timer");
const valentinesDay = new Date(new Date().getFullYear(), 1, 14);

function updateCountdown() {
  const diff = valentinesDay - new Date();

  if (diff <= 0) {
    timer.innerHTML = "💘 It's Valentine’s Day! 💘";
    return;
  }

  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;

  timer.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
