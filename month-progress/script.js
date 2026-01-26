function updateMonthProgress() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  const startOfMonth = new Date(year, month, 1);
  const startOfNextMonth = new Date(year, month + 1, 1);

  const totalMs = startOfNextMonth - startOfMonth;
  const elapsedMs = now - startOfMonth;

  const progress = Math.min((elapsedMs / totalMs) * 100, 100);

  const totalDays = Math.round(totalMs / (1000 * 60 * 60 * 24));
  const usedDays = Math.floor(elapsedMs / (1000 * 60 * 60 * 24)) + 1;

  document.getElementById("percentage").textContent =
    progress.toFixed(1) + "%";

  document.getElementById("progressBar").style.width =
    progress + "%";

  document.getElementById("caption").textContent =
    `${usedDays} of ${totalDays} days used`;
}

updateMonthProgress();
setInterval(updateMonthProgress, 60 * 1000);
