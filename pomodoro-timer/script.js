// Times in minutes
const TIMES = {
  focus: 25,
  short: 5,
  long: 15
};

// State
let currentMode = 'focus';
let totalSeconds = TIMES[currentMode] * 60;
let remainingSeconds = totalSeconds;
let isRunning = false;
let timerInterval = null;

// DOM Elements
const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const modeBtns = document.querySelectorAll('.mode-btn');
const progressCircle = document.querySelector('.progress-ring__circle');

// SVG Circle setup
// Radius is 100, Circumference = 2 * PI * r
const radius = progressCircle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
progressCircle.style.strokeDashoffset = 0;

function setProgress(percent) {
  // If percent is 100, dashoffset is 0. If percent is 0, dashoffset is circumference.
  const offset = circumference - (percent / 100) * circumference;
  progressCircle.style.strokeDashoffset = offset;
}

function updateDisplay() {
  const m = Math.floor(remainingSeconds / 60);
  const s = remainingSeconds % 60;
  timeDisplay.textContent = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  
  const percent = (remainingSeconds / totalSeconds) * 100;
  setProgress(percent);
}

function switchMode(mode) {
  if (isRunning) pauseTimer();
  
  currentMode = mode;
  totalSeconds = TIMES[mode] * 60;
  remainingSeconds = totalSeconds;
  
  // UI Tabs update
  modeBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
  
  // Color update
  if (mode === 'focus') {
    progressCircle.style.stroke = 'var(--accent)';
  } else {
    progressCircle.style.stroke = 'var(--accent-break)';
  }
  
  updateDisplay();
}

function playAlarm() {
  // Optional: A simple beep
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.5);

  gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.5);
}

function tick() {
  if (remainingSeconds > 0) {
    remainingSeconds--;
    updateDisplay();
  } else {
    pauseTimer();
    playAlarm();
  }
}

function startTimer() {
  isRunning = true;
  startBtn.textContent = 'Pause';
  startBtn.classList.add('running');
  timerInterval = setInterval(tick, 1000);
}

function pauseTimer() {
  isRunning = false;
  startBtn.textContent = 'Start Session';
  startBtn.classList.remove('running');
  clearInterval(timerInterval);
}

function toggleTimer() {
  if (isRunning) {
    pauseTimer();
  } else {
    if (remainingSeconds === 0) {
      // If timer ended, reset before starting
      resetTimer();
    }
    startTimer();
  }
}

function resetTimer() {
  pauseTimer();
  remainingSeconds = totalSeconds;
  updateDisplay();
}

// Event Listeners
startBtn.addEventListener('click', toggleTimer);
resetBtn.addEventListener('click', resetTimer);

modeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.mode !== currentMode) {
      switchMode(btn.dataset.mode);
    }
  });
});

// Initial render
updateDisplay();
