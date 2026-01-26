const messages = [
'Focus on what truly matters today.',
'Small progress is still progress.',
'Do one thing with full attention.',
'Consistency beats intensity.',
'Clarity comes from action.',
'Finish what you started.',
'Your future self will thank you.'
];


const todayIndex = new Date().getDate() % messages.length;
const text = messages[todayIndex];


const el = document.getElementById('typing');
let i = 0;


function type() {
if (i <= text.length) {
el.textContent = text.slice(0, i++);
setTimeout(type, 70);
}
}


type();
