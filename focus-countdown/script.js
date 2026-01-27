const params = new URLSearchParams(window.location.search);
const minutes = parseInt(params.get("minutes")) || 25;

let totalSeconds = minutes * 60;
let interval = null;

const timeEl = document.getElementById("time");
const btn = document.getElementById("startBtn");

function updateDisplay() {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  timeEl.textContent =
    String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

btn.addEventListener("click", () => {
  if (interval) return;

  interval = setInterval(() => {
    totalSeconds--;
    updateDisplay();

    if (totalSeconds <= 0) {
      clearInterval(interval);
      interval = null;
      btn.textContent = "Done";
    }
  }, 1000);
});

updateDisplay();
