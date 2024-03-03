let currentResult = '';

function appendCharacter(character) {
  currentResult += character;
  document.getElementById('result').value = currentResult;
}

function clearResult() {
  currentResult = '';
  document.getElementById('result').value = currentResult;
}

function calculate() {
  try {
    const result = eval(currentResult);
    document.getElementById('result').value = result;
    currentResult = result.toString();
  } catch (error) {
    document.getElementById('result').value = 'Error';
    currentResult = '';
  }
}
