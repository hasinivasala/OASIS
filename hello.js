let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function appendCharacter(char) {
    if (displayValue === '0' && char !== '.' || displayValue === 'Error') {
        displayValue = char;
    } else {
        displayValue += char;
    }
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}
