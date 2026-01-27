const focusByDay = [
  "Start the week with small discipline",
  "Finish one important thing today",
  "Focus matters more than being busy",
  "Done is better than perfect",
  "Close the week with clarity",
  "Reflect, refine, and reset",
  "Prepare calmly for the next week"
];

// Adjust Sunday index
const today = new Date().getDay();
const focusText = focusByDay[today === 0 ? 6 : today - 1];

const textEl = document.getElementById("text");

let charIndex = 0;
let isDeleting = false;

function typingLoop() {
  if (!isDeleting) {
    textEl.textContent = focusText.slice(0, charIndex++);
    if (charIndex > focusText.length) {
      setTimeout(() => isDeleting = true, 2000);
    }
  } else {
    textEl.textContent = focusText.slice(0, charIndex--);
    if (charIndex === 0) {
      isDeleting = false;
    }
  }
}

setInterval(typingLoop, 80);
