<script>
  window.onload = function () {
    const messages = [
      "Focus on progress, not perfection.",
      "One small step today builds momentum.",
      "Discipline today creates freedom tomorrow.",
      "Do the important thing before the urgent one.",
      "Consistency beats motivation every time.",
      "Show up even when it feels uncomfortable.",
      "Clarity comes from action, not overthinking."
    ];

    const today = new Date().getDay();
    const message = messages[today];

    const el = document.getElementById("focusText");
    let index = 0;
    let isDeleting = false;

    function loopTyping() {
      if (!isDeleting) {
        el.textContent = message.substring(0, index + 1);
        index++;

        if (index === message.length) {
          setTimeout(() => isDeleting = true, 1800);
        }
      } else {
        el.textContent = message.substring(0, index - 1);
        index--;

        if (index === 0) {
          isDeleting = false;
        }
      }

      setTimeout(loopTyping, isDeleting ? 35 : 45);
    }

    loopTyping();
  };
</script>
