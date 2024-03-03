function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // Update digital clock
    var digitalClock = document.getElementById("clockDisplay");
    digitalClock.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

// Format time to add leading zeros if necessary
function formatTime(time) {
    return (time < 10 ? "0" : "") + time;
}

// Update the clock immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
