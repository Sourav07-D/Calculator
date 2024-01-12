let currentInput = '0';
let currentOperation = null;
let prevInput = null;

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function setOperation(operation) {
    if (currentOperation !== null) {
        calculateResult();
    }
    currentOperation = operation;
    prevInput = currentInput;
    currentInput = '0';
}

function calculateResult() {
    if (currentOperation === null || currentInput === 'Error') {
        return;
    }

    const num1 = parseFloat(prevInput);
    const num2 = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            currentInput = (num1 + num2).toString();
            break;
        case '-':
            currentInput = (num1 - num2).toString();
            break;
        case '*':
            currentInput = (num1 * num2).toString();
            break;
        case '/':
            if (num2 !== 0) {
                currentInput = (num1 / num2).toString();
            } else {
                currentInput = 'Error';
            }
            break;
        default:
            return;
    }

    currentOperation = null;
    prevInput = null;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    currentOperation = null;
    prevInput = null;
    updateDisplay();
}

// Optional: You can implement additional features like a calculation history.
