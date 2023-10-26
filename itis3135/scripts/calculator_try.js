var number1 = [];
var number2 = [];
var operation;
var answer;

window.onload = function() {
    document.getElementById('zero').onclick = showNum;
    document.getElementById('one').onclick = showNum;
    document.getElementById('two').onclick = showNum;
    document.getElementById('three').onclick = showNum;
    document.getElementById('four').onclick = showNum;
    document.getElementById('five').onclick = showNum;
    document.getElementById('six').onclick = showNum;
    document.getElementById('seven').onclick = showNum;
    document.getElementById('eight').onclick = showNum;
    document.getElementById('nine').onclick = showNum;
}

function showNum() {
    document.formCalculator.textNumber.value += this.value;
}

$('button').click(function() {
    while ($(this) != document.getElementById('row-operators')) {
        var digit = $(this).val();
        number1.push(digit);
        document.getElementById('display-numbers').textContent = number1;
    }
    
    while ($(this) < document.getElementById('row-operators')) {
        operation = document.getElementById('row-operators').value;
        var digit = $(this).val();
        number2.push(digit);
        document.getElementById('display-numbers').textContent = number2;
        
        if ($(this).val() == 'enter') {
            if (operation == 'subtraction') {
                answer = number1 - number2;
            }
            else if (operation == 'addition') {
                answer = number1 + number2;
            }
            else if (operation == 'multiply') {
                answer = number1 * number2;
            }
            else if (operation == 'divide') {
                answer = number1 / number2;
            }
        }
        alert(answer);
    }
});