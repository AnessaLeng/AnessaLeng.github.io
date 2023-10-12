function validateFields() {
    var form = document.getElementById('byo-introduction');
    for (var i = 0; i < form.elements.length; i++) 
    {
        if (form.elements[i].value == '' && form.elements[i].hasAttribute('required')) 
        {
            alert("Please fill out the required field(s).");
            return false;
        }
    }
    form.submit();
}

function reset() {
    document.getElementById('byo-introduction').reset();
}

function addCourses() {
    /*var courses = {};
    var courseID = document.getElementById('course-id').value;
    var courseDescription = document.getElementById('course-description').value;
    courses[courseID] = courseDescription; */
    var li = document.createElement('li');
    var input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("value", "ITSC2181 - Intro to Computer Systems: It is required for my degree.");
    var form = document.getElementById('byo-introduction');
    li.appendChild(input);
    form.appendChild(li);
}

function deleteCourse() {
    var li = document.getElementById("value");
    document.body.removeChild(value);
}

function submit() {
    if (!validateFields()) { return; }
    const username = document.getElementById('username');
    const mascot = document.getElementById('mascot');
    const image = document.getElementById('image');
    const image_caption = document.getElementById('image-caption');
    const personal_background = document.getElementById('personal-background');
    const professional_background = document.getElementById('professional-background');
    const academic_background = document.getElementById('academic-background');
    var h3 = document.createElement('h3');
    var figure = document.createElement('figure');
    var figure_caption = document.createElement('figure-caption');
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    h3.textContent(username);
    h3.textContent(mascot);
    figure.src = "./images/intro-chinatown-ny.jpg";
    figure_caption.textContent(image_caption);
    li.textContent(personal_background);
    li.textContent(professional_background);
    li.textContent(academic_background);

    document.getElementById('byo-introduction').style.display = 'none';    
}