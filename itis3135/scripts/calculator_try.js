var number1 = '';
var number2 = '';
var operator = null;
var answer;

function showNum() {
    if (operator == null) {
        number1 = document.getElementById('calculator-display').textContent;
    }
    else {
        number2 = document.getElementById('calculator-display').textContent;
    }
}

window.onload = function() {
    var buttons = ['zero', 'decimal', 'clear', 'enter', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'subtraction', 'addition', 'multiply', 'divide'];
    buttons.forEach(function(button) {
        if (button == 'clear') {
            document.getElementById(button).addEventListener('click', allClear);
        }
        else if (button == 'subtraction' || button == 'addition' || button == 'multiply' || button == 'divide') {
            document.getElementById(button).addEventListener('click', operation);
        }
        else if (button == 'enter') {
            document.getElementById(button).addEventListener('click', calculate);
        }
        else {
            document.getElementById(button).addEventListener('click', appendNumber);
        }
    });
}

function appendNumber() {
    var display = document.getElementById('calculator-display');
    if(operator == null) {
        number1 = (display.textContent += this.value);
        showNum;
    }
    else {
        number2 = (display.textContent += this.value);
        showNum;
    }
}

function operation() {
    if (number1 == '') {
        alert("Oh no, was the first number entered yet?");
        return;
    }
    operator = this.value;
    document.getElementById('calculator-display').textContent = '';
}

function allClear() {
    number1 = '';
    number2 = '';
    operator = null;
    document.getElementById('calculator-display').textContent = '';
}

function calculate() {
    if (number1 == '' || number2 == '' || operator == null) { 
        alert("Something's missing.."); 
        document.getElementById('calculator-display').textContent = ''; 
        return; 
    }

    if (operator == 'subtraction') {
        answer = parseFloat(number1) - parseFloat(number2);
    }
    else if (operator == 'addition') {
        answer = parseFloat(number1) + parseFloat(number2);
    }
    else if (operator == 'multiply') {
        answer = parseFloat(number1) * parseFloat(number2);
    }
    else if (operator == 'divide') {
        if (number2 == '0') {
            alert("Cannot divide by zero!");
            return;
        }
        else {
            answer = parseFloat(number1) / parseFloat(number2);
        }
    }
    else {
        alert("Cannot compute.."); 
        return;
    }
    document.getElementById('calculator-display').textContent = answer;
}