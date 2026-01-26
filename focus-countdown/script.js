let total = 25 * 60;
let remaining = total;
let running = false;


const timeEl = document.getElementById('time');
const bar = document.getElementById('bar');
const startBtn = document.getElementById('start');


function render() {
const m = Math.floor(remaining / 60);
const s = remaining % 60;
timeEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
bar.style.width = `${(remaining / total) * 100}%`;
}


timeEl.onclick = () => {
if (running) return;
const input = prompt('Set focus minutes', remaining / 60);
if (!input) return;
total = parseInt(input) * 60;
remaining = total;
render();
};


startBtn.onclick = () => {
if (running) return;
running = true;
const interval = setInterval(() => {
if (remaining > 0) {
remaining--;
render();
} else {
clearInterval(interval);
running = false;
}
}, 1000);
};


render();
