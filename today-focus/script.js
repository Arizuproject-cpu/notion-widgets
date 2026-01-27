<script>
  const messages = [
    "Focus on what truly matters.",
    "Finish one thing with intention.",
    "Progress beats perfection.",
    "Clarity creates momentum.",
    "Do less, but do it better.",
    "Consistency compounds quietly.",
    "Today decides tomorrow."
  ];

  const el = document.getElementById("focus");
  const text = messages[new Date().getDate() % messages.length];

  let index = 0;
  let typingSpeed = 55;

  function typeEffect() {
    if (index < text.length) {
      el.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, typingSpeed);
    } else {
      // pause setelah selesai
      setTimeout(() => {
        el.textContent = "";
        index = 0;
        typeEffect();
      }, 3000);
    }
  }

  // ⏳ delay kecil agar Notion iframe siap
  setTimeout(() => {
    el.textContent = "";
    typeEffect();
  }, 600);
</script>
