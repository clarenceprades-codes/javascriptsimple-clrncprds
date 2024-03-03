// Function to draw the analog clock
function drawAnalogClock() {
    const canvas = document.getElementById("analogClock");
    const ctx = canvas.getContext("2d");
    const radius = canvas.height / 2;
    ctx.translate(radius, radius);
    drawClock(ctx, radius);
    setInterval(() => {
      updateClock(ctx, radius);
    }, 1000);
  }
  
  // Function to draw the clock face
  function drawClock(ctx, radius) {
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    drawNumbers(ctx, radius);
  }
  
  // Function to draw the clock numbers
  function drawNumbers(ctx, radius) {
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    var ang;
    for (let num = 1; num < 13; num++) {
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
    }
  }
  
  // Function to draw clock hands
  function drawHand(ctx, angle, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(angle);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-angle);
  }
  
  // Function to update the clock hands
  function updateClock(ctx, radius) {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    // Clear the canvas before redrawing the hands
    ctx.clearRect(-radius, -radius, 2 * radius, 2 * radius);
    // Draw the clock hands
    drawHand(ctx, (hour % 12 + minute / 60) * Math.PI / 6, radius * 0.5, radius * 0.07); // Hour hand
    drawHand(ctx, (minute + second / 60) * Math.PI / 30, radius * 0.8, radius * 0.05); // Minute hand
    drawHand(ctx, second * Math.PI / 30, radius * 0.9, radius * 0.02); // Second hand
  }
  
  // Update the clock immediately
  drawAnalogClock();
  