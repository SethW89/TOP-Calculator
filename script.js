/*
    If 3 + 2 + 4 = is entered
    3 pressed:    display 3
    + pressed:    display 3
    2 pressed:    display 2
    + pressed:    display 5
    4 pressed:    display 4
    = pressed:    display 9
    clr pressed:  display 0
*/
const numberBtn = document.getElementsByClassName('number');
const display = document.getElementById('display');
display.textContent = '0';
let currText = display.textContent;
let operandArr = [];

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

// get numbers to show on display when button pressed
//console.log(numberBtn);
//Add event for each number button
//console.log(numberBtn.length);
//console.log(numberBtn[0]);
for (let i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener('click', () => {
        console.log(numberBtn[i]);
        console.log(numberBtn[i].textContent);
        // Send said text content to display
        displayUpdate(numberBtn[i].textContent);
    });
}
// Assign other buttons
const functionBtn = document.getElementsByClassName('functionBtn');
for (let i = 0; i < functionBtn.length; i++) {
    //console.log(functionBtn);
    // if add is selected
    console.log(functionBtn[i].textContent);
    functionBtn[i].addEventListener('click', () => {
        switch (functionBtn[i].textContent) {
            case '+':

                break;
            case '-':
                break;
            case 'x':
                break;
            case '/':
                break;
            case '.':
                break;
            case '=':
                break;
            case '%':
                break;
            case 'CLEAR':
                display.textContent = '0';
                operandArr = [];
                break;
        }
    })


}

function displayUpdate(value) {
    // If value is not a number...
    if (false) {
        displayError(); // ToDo
    }
    if (value.charCodeAt() >= 48 && value.charCodeAt() <= 57) {
        //console.log('ascii:', value.charCodeAt());
        currText = display.textContent;
        if (currText === '0') {
            currText = '';
        }
        display.textContent = currText + value;
    }
    if (value) {

    }
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