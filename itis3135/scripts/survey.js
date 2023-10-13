var original = document.body.innerHTML;
var courses = [];

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
    document.body.innerHTML = original;
}

function addCourses() {
    var li = document.createElement('li');
    var inputCourseID = document.createElement('input');
    var inputCourseReason = document.createElement('input');
    inputCourseID.setAttribute("type", "text");
    inputCourseID.setAttribute("value", "ITSC2181 - Intro to Computer Systems: ");
    inputCourseReason.setAttribute("type", "text");
    inputCourseReason.setAttribute("value", "It is required for my degree.");
    var form = document.getElementById('courses');
    li.appendChild(inputCourseID)
    li.append(" : ");
    li.appendChild(inputCourseReason);
    form.appendChild(li);
}

function deleteCourse() {
    var li = document.getElementById('courses').lastChild;
    li.parentNode.removeChild(li);
}

function submit() {
    if (!validateFields()) { return; }

    var username = document.getElementById('username').value;
    var mascot = document.getElementById('mascot').value;
    
    var image = document.getElementById('image').value;
    var reader = new FileReader();
    reader.readAsText(image);

    var image_caption = document.getElementById('image-caption').value;
    var personal_background = document.getElementById('personal-background').value;
    var professional_background = document.getElementById('professional-background').value;
    var academic_background = document.getElementById('academic-background').value;
    var background_in_web_development = document.getElementById('background-in-web-development').value;
    var platform = document.getElementById('platform').value;
    
    var course = {id: document.getElementById('course-id').value, description: document.getElementById('course-reason').value};
    courses.push(course);

    var funny_thing = document.getElementById('funny-thing').value;
    var anything_else = document.getElementById('anything-else').value;

    document.getElementById('intro-username').textContent = username;
    document.getElementById('intro-mascot').textContent = mascot;
    document.getElementById('intro-image').textContent = image;
    document.getElementById('intro-image-caption').textContent = image_caption;
    document.getElementById('intro-personal-background').textContent = personal_background;
    document.getElementById('intro-professional-background').textContent = professional_background;
    document.getElementById('intro-academic-background').textContent = academic_background;
    document.getElementById('intro-backgroun-in-web-development').textContent = background_in_web_development;
    document.getElementById('intro-platform').textContent = platform;

    /*for (var i = 0; i < courses.length; i++) {
        var li = document.createElement('li');
        li.textContent = courses[i].id + " : " + courses[i].description;
        li.appendChild(li);
    }*/

    document.getElementById('intro-funny-thing').textContent = funny_thing;
    document.getElementById('intro-anything-else').textContent = anything_else;

    document.getElementById('byo-introduction').style.display = 'none';
    document.getElementById('byo-intro').style.display = 'block';    
}