const focusByDay = [
  "Start the week with small discipline",
  "Finish one important thing today",
  "Focus matters more than being busy",
  "Done is better than perfect",
  "Close the week with clarity",
  "Reflect, refine, and reset",
  "Prepare calmly for the next week"
];

const day = new Date().getDay();
const message = focusByDay[day === 0 ? 6 : day - 1];

const textEl = document.getElementById("text");

let index = 0;
let deleting = false;

function loopTyping() {
  if (!deleting) {
    textEl.textContent = message.slice(0, index++);
    if (index > message.length) {
      setTimeout(() => deleting = true, 2000);
    }
  } else {
    textEl.textContent = message.slice(0, index--);
    if (index === 0) {
      deleting = false;
    }
  }
}

setInterval(loopTyping, 90);
