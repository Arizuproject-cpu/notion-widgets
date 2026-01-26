function updateTimeLeft() {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth();

  // End of current month
  const endOfMonth = new Date(year, month + 1, 0, 23, 59, 59);

  const diff = endOfMonth - now;

  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

  // Progress calculation
  const startOfMonth = new Date(year, month, 1);
  const totalMonthSeconds =
    (endOfMonth - startOfMonth) / 1000;

  const elapsedSeconds =
    (now - startOfMonth) / 1000;

  const progress =
    (elapsedSeconds / totalMonthSeconds) * 100;

  document.getElementById("progress").style.width =
    Math.min(progress, 100) + "%";
}

updateTimeLeft();
setInterval(updateTimeLeft, 1000);
