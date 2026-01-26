let total = 25 * 60;
let remaining = total;


function update() {
const min = Math.floor(remaining / 60);
const sec = remaining % 60;
document.getElementById('timer').textContent =
`${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;


document.getElementById('progressBar').style.width =
`${(remaining / total) * 100}%`;


if (remaining > 0) remaining--;
}


update();
setInterval(update, 1000);
