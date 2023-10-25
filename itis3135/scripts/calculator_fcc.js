const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNumber = display.textContent;
        if (!action) {
            if (displayedNumber == '0' || previousKeyType == 'operator' || previousKeyType == 'calculate') {
                display.textContent = keyContent;
            }
            else {
                display.textContent = displayedNumber + keyContent;
            }
            calculator.dataset.previousKeyType = 'number';
        }

        if (action == 'add' ||
            action == 'subtract' ||
            action == 'multiply' ||
            action == 'divide') {

            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNumber;

            if (firstValue && operator && previousKeyType != 'operator' && previousKeyType != 'calculate') {
                const calculatedValue = calculate(firstValue, operator, secondValue);
                display.textContent = calculatedValue;
                calculator.dataset.firstValue = calculatedValue;
            } 
            else {
                calculator.dataset.firstValue = displayedNumber;
            }

            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNumber;
            calculator.dataset.operator = action;
        }
        
        if (action == 'decimal') {
            if (!displayedNumber.includes('.')) {
                display.textContent = displayedNumber + ".";
            }
            else if (previousKeyType == 'operator' || previousKeyType == 'calculate') {
                display.textContent = '0.';
            }
            calculator.dataset.previousKeyType = 'decimal';
        }
        
        if (action == 'clear') {
            if (action != 'clear') {
                const clearButton = calculator.querySelector('[data-action=clear]');
                clearButton.textContent = 'CE';
            }

            if (key.textContent == 'AC') {
                calculator.dataset.firstValue = '';
                calculator.dataset.modValue = '';
                calculator.dataset.operator = '';
                calculator.dataset.previousKeyType = '';
            }
            else {
                key.textContent = 'AC';
            }
            display.textContent = 0;
            calculator.dataset.previousKeyType = 'clear';
        }
        
        if (action == 'calculate') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNumber;

            if (firstValue) {
                if (previousKeyType == 'calculate') {
                    firstValue = displayedNumber;
                    secondValue = calculator.dataset.modValue;
                }
                display.textContent = calculate(firstValue, operator, secondValue);
            }
            calculator.dataset.modValue = secondValue;
            calculator.dataset.previousKeyType = 'calculate';
        }

        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));
    }
})

const calculate = (number1, operator, number2) => {
    const firstNumber = parseFloat(number1);
    const secondNumber = parseFloat(number2);
    if (operator == 'add') return firstNumber + secondNumber;
    if (operator = 'subtract') return firstNumber - secondNumber;
    if (operator == 'multiply') return firstNumber * secondNumber;
    if (operator == 'divide') return firstNumber / secondNumber;
}

const createResultString = () => {
    if (!action) {
        return displayedNumber == '0' || previousKeyType == 'operator' || previousKeyType == 'calculate'
        ? keyContent : displayedNumber + keyContent;
    }

    if (action == 'decimal') {
        if (!displayedNumber.includes('.')) return displayedNumber + ".";
        if (previousKeyType == 'operator' || previousKeyType == 'calculate') return '0.';
        return displayedNumber;
    }

    if (action == 'add' || action == 'subtract' || action == 'multiply' || action == 'divide') {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;

        return firstValue && operator && previousKeyType != 'operator' && previousKeyType != 'calculate'
        ? calculate(firstValue, operator, displayedNumber) : displayedNumber;
    }

    if (action == 'clear') {
        return 0;
    }

    if (action == 'calculate') {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const modValue = calculator.dataset.modValue;

        return firstValue
            ? previousKeyType == 'calculate'
            ? calculate(displayedNumber, operator, modValue)
            : calculate(firstValue, operator, displayedNumber)
            : displayedNumber;
    }
}

const createResultString = (key, displayedNumber, state) => {
    const keyContent = key.textContent;
    const action = key.dataset.action;
    const firstValue = state.firstValue;
    const modValue = state.modValue;
    const operator = state.operator;
    const previousKeyType = state.previousKeyType;
}