var person = [];
var salaries = [];

person.push('Luffy D. Monkey');
person.push('Zoro Roronoa');
person.push('Eren Yeager');
person.push('Mikasa Ackerman');
person.push('Rimuru Tempest');
person.push('Rengoku Kyojuro');
person.push('Nezuko Kamado');
person.push('Anya Forger');

salaries.push(600000);
salaries.push(500000);
salaries.push(65000);
salaries.push(60000);
salaries.push(70000);
salaries.push(45000);
salaries.push(50000);
salaries.push(20000);

//document.getElementById('add-employee').addEventListener('click', hover);
// document.getElementById('display-results').addEventListener('click', hover);
document.getElementById('display-table').addEventListener('click', hover);
/*
window.onload = function hover() {
    document.getElementById(this.value).focus();
};
*/
function hover() {
    document.getElementById('results-table').scrollIntoView().focus();
}

function addSalary() {
    var person_name = document.getElementById('add-person').value;
    var person_salary = document.getElementById('add-salary').value;

    if (person_name == "" || person_salary == "" || isNaN(person_salary)) { 
        alert("Either the entry is empty or the salary entered is not numeric."); 
        return; 
    }

    person.push(person_name);
    salaries.push(person_salary);
}

function displayResults() {
    var sum = 0;
    var average = 0;
    var max = salaries[0];

    for (var i = 0; i < salaries.length; i++) {
        sum = sum + salaries[i];
    }
    average = sum / salaries.length;

    for (var i = 0; i < salaries.length; i++) {
        if (salaries[i] > max) {
            max = salaries[i];
        }
    }

    var output = document.getElementById('results');

    var h2 = document.createElement('h2');
    h2.textContent= "Salary";
    output.appendChild(h2);
    
    var p = document.createElement('p');
    p.textContent = "Average Salary: $" + average;
    output.appendChild(p);

    p = document.createElement('p');
    p.textContent = "Max Salary: $" + max;
    output.appendChild(p);
}

function displaySalary() {
    var tbody = document.createElement('tbody');
    var tr = document.createElement('tr');
    var th; 
    var td;
    tr.setAttribute('class', 'data');

    th = document.createElement('th');
    th.appendChild(document.createTextNode('Person'));
    tr.appendChild(th);

    th = document.createElement('th');
    th.appendChild(document.createTextNode('Salary'));
    tr.appendChild(th);

    tbody.appendChild(tr);

    for (var i = 0; i < person.length; i++) {
        tr = document.createElement('tr');
        td = document.createElement('td');
        td.appendChild(document.createTextNode(person[i]));
        tr.appendChild(td);

        td = document.createElement('td');
        td.appendChild(document.createTextNode(salaries[i]));
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    
    document.getElementById('results-table').appendChild(tbody);
}