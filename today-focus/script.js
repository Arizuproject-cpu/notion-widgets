document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("focus-text");
  if (!el) return;

  const messages = [
    "Focus on what moves the needle.",
    "Finish one thing with intention.",
    "Progress beats perfection.",
    "Clarity creates momentum.",
    "Do less, but do it better.",
    "Consistency compounds quietly.",
    "Today decides tomorrow."
  ];

  const todayIndex = new Date().getDate() % messages.length;
  const text = messages[todayIndex];

  let i = 0;

  function typeText() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(typeText, 55);
    } else {
      setTimeout(() => {
        i = 0;
        typeText();
      }, 2500);
    }
  }

  typeText();
});
