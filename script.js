/*
    If 3 + 2 - 3 * 5 = | 10 is entered
    3 pressed:    display 3
    + pressed:    display 3
    2 pressed:    display 2
    - pressed:    display 5
    3 pressed:    display 3
    * pressed:    display 2
    5 pressed:    display 5
    = pressed:    display 10;
    clr pressed:  display 0
*/
const numberBtn = document.getElementsByClassName('number');
const display = document.getElementById('display');
display.textContent = '0';
let currText = display.textContent;
let prevOperand = '0';
let currOperand = '0';
let prevOperator = '+';
let newOperand = true; // Flag for overwriting screen with new number


// Addition function
function add(a, b) {
    //console.log('Adding', Number(a) + Number(b));
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

function operate(a, b, operator) {
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

// get numbers to show on display when button pressed
//console.log(numberBtn);
//Add event for each number button
//console.log(numberBtn.length);
//console.log(numberBtn[0]);
for (let i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener('click', () => {
        //console.log(numberBtn[i]);
        //console.log(numberBtn[i].textContent);
        // Send said text content to display
        if (newOperand) {
            displayUpdate(numberBtn[i].textContent);
            newOperand = false;
        } else {
            displayUpdate(currOperand + numberBtn[i].textContent);
        }
    });
}
// Assign other buttons
const functionBtn = document.getElementsByClassName('functionBtn');
for (let i = 0; i < functionBtn.length; i++) {
    //console.log(functionBtn);
    // if add is selected
    //console.log(functionBtn[i].textContent);
    functionBtn[i].addEventListener('click', () => {
        switch (functionBtn[i].textContent) {
            case '+':
            case '-':
            case 'X':
            case '/':
                // We do the previous operation, and reassign
                // the current and past operands and queue the
                // next operator
                console.log(prevOperand, currOperand, prevOperator);
                prevOperand = operate(prevOperand, currOperand, prevOperator);
                prevOperator = functionBtn[i].textContent;
                newOperand = true;

                // Update Display with result of previous operation
                displayUpdate(prevOperand);

                break;
            case '.':
                break;
            case '=':
                break;
            case '%':
                break;
            case 'CLEAR':
                display.textContent = '0';
                prevOperand = '0';
                break;
        }
    })

}
function clearDisplay() {
    display.textContent = '';
}
function displayUpdate(value) {
    // If value is not a number...
    //console.log('ascii:', value.charCodeAt());
    display.textContent = value;
    currOperand = display.textContent;

    /*
        +      - 43
        =      - 61
        -      - 45
        /      - 47
        %      - 37
        +/-(!) - 33?
        clear  - 127?
    */
}