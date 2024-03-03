let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
  if (!timer) {
    timer = setInterval(updateDisplay, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null; // Reset timer variable
}

function resetTimer() {
  clearInterval(timer);
  timer = null; // Reset timer variable
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay(); // Update display before resetting timer values
}


function updateDisplay() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.querySelector('.display').textContent = formattedTime;
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.stop').addEventListener('click', stopTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);

