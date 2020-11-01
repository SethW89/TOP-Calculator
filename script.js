

// Addition function
function add(a, b) {
    return a + b;
}

// Subtraction function
function subtract(a, b) {
    return a - b;
}

// Multiplication function
function multiply(a, b) {
    return a * b;
}

// Division function
function divide(a, b) {
    if (b === 0) {
        return 'DIV 0 ERROR';
    }
    return a / b;
}

function operate(a, b, operator) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    } else {
        return 'OP ERROR';
    }

}