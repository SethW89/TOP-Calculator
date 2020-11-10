
const numberBtn = document.getElementsByClassName('number');
const display = document.getElementById('display');
display.textContent = '0';
let prevOperand = '';
let currOperand = '';
let prevOperator = '';
let operandFlag = true; // Flag for overwriting screen with new number
let decimalFlag = false; // determins if we currently have a decimal number



function operate(a, b, operator) {
    console.log(a, operator, b);
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === 'X') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    } else {
        return 'OP ERROR';
    }

}

// Add event for each number button
for (let i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener('click', () => {
        // Send said text content to display
        if (operandFlag) {
            if (decimalFlag) {
                console.log('did the decimal stuff.');
                displayUpdate('0.' + numberBtn[i].textContent);
                decimalFlag = false;
            } else {
                displayUpdate(numberBtn[i].textContent);
            }
            operandFlag = false;
        } else {
            displayUpdate(currOperand + numberBtn[i].textContent);
        }
    });
}
// Assign other buttons
const functionBtn = document.getElementsByClassName('functionBtn');
for (let i = 0; i < functionBtn.length; i++) {
    functionBtn[i].addEventListener('click', () => {
        switch (functionBtn[i].textContent) {
            case '+':
            case '-':
            case 'X':
            case '/':
                // We do the previous operation, and reassign
                // the current and past operands and queue the
                // next operator
                if (prevOperator === '') {
                    console.log('Hello there.', functionBtn[i].textContent);
                    prevOperator = functionBtn[i].textContent;
                    prevOperand = currOperand;
                    operandFlag = true;
                } else {
                    console.log(prevOperand, prevOperator, currOperand);
                    prevOperand = operate(prevOperand, currOperand, prevOperator);
                    prevOperator = functionBtn[i].textContent;
                    operandFlag = true;
                    displayUpdate(prevOperand);
                }

                // Update Display with result of previous operation

                break;
            case '.':
                if (operandFlag == true) {
                    display.textContent = '0.';
                    decimalFlag = true;
                    break;
                } else if (display.textContent.includes('.')) {
                    break;
                } else {
                    displayUpdate(display.textContent + '.');
                }
                break;
            case '=':
                console.log(prevOperand, prevOperator, currOperand);
                if (prevOperator != '') {
                    prevOperand = operate(prevOperand, currOperand, prevOperator);
                    prevOperator = '';
                    currOperand = ''
                    operandFlag = true;
                    displayUpdate(prevOperand);
                }
                break;
            case '+/-':
                currOperand = display.textContent * -1;
                displayUpdate(currOperand);

                break;
            case 'CLEAR':
                stateCleared()
                break;
        }
    })

}
function clearDisplay() {
    display.textContent = '';
}
function displayUpdate(value) {
    if (display.textContent == '0' && value == '0') {
        return;
    }
    if (String(value).length > 12) {
        display.textContent = parseFloat(value.toPrecision(10)).toExponential(3);
    } else {
        display.textContent = value;
    }

    currOperand = display.textContent;
    console.log(currOperand);
}

// Reset to initial conditions
function stateCleared() {
    display.textContent = '0';
    prevOperand = '';
    prevOperator = '';
    currOperand = '';
    operandFlag = true;
    decimalFlag = false;
}

// Addition function
function add(a, b) {
    return Number(a) + Number(b);
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