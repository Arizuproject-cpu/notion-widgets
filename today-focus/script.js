const dailyMessages = [
      "Focus on progress, not perfection.",
      "One small step today builds momentum.",
      "Discipline today creates freedom tomorrow.",
      "Do the important thing before the urgent one.",
      "Consistency beats motivation every time.",
      "Show up, even when it feels hard.",
      "Clarity comes from action, not overthinking."
    ];

    const todayIndex = new Date().getDay(); // 0 - 6
    const message = dailyMessages[todayIndex];

    const textEl = document.getElementById("focusText");
    let charIndex = 0;

    function typeEffect() {
      if (charIndex < message.length) {
        textEl.textContent += message.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 40);
      }
    }

    typeEffect();
  </script>

</body>
</html>
