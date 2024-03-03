// Array to store the color options
var colors = [];

// Variables to store the number of colors and the index of the correct color
var numColors = 6;
var pickedColor;

// Selecting HTML elements
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("resetButton");
var colorOptions = document.querySelector(".color-options");

// Initialize the game
init();

// Function to initialize the game
function init() {
  // Generate random colors and pick a random color as the correct answer
  generateRandomColors(numColors);
  pickedColor = pickColor();
  // Display the picked color
  colorDisplay.textContent = pickedColor;
  // Generate color option buttons
  setupColorOptions();
  // Reset message display
  messageDisplay.textContent = "";
  // Change reset button text
  resetButton.textContent = "New Colors";
}

// Function to generate random RGB colors and populate the colors array
function generateRandomColors(num) {
  // Clear colors array
  colors = [];
  // Generate random colors
  for (var i = 0; i < num; i++) {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    colors.push("rgb(" + red + ", " + green + ", " + blue + ")");
  }
}

// Function to pick a random color from the colors array
function pickColor() {
  var randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Function to setup color option buttons
function setupColorOptions() {
  // Clear existing color options
  colorOptions.innerHTML = "";
  // Create color option buttons
  for (var i = 0; i < colors.length; i++) {
    var button = document.createElement("button");
    button.style.backgroundColor = colors[i];
    button.addEventListener("click", function() {
      // Check if clicked color matches the picked color
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#f2f2f2";
        messageDisplay.textContent = "Try Again";
      }
    });
    colorOptions.appendChild(button);
  }
}

// Function to change all colors to the correct color when guessed correctly
function changeColors(color) {
  for (var i = 0; i < colors.length; i++) {
    colorOptions.children[i].style.backgroundColor = color;
  }
}

// Reset button event listener
resetButton.addEventListener("click", function() {
  init();
});
