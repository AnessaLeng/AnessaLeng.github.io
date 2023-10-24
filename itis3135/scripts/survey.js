var original = document.body.innerHTML;
var courses = [];

function loadImage() {
    var input = document.getElementById('image');
    var file = input.files[0];
    if (file) {
        var imageURL = URL.createObjectURL(file);
        document.getElementById('preview').src = imageURL;
    }
    else {
        var defaultimageURL = "images/intro-chinatown-ny.jpg";
        document.getElementById('preview').src = defaultimageURL;
    }
    return imageURL;
}

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
}

function reset() {
    document.body.innerHTML = original;
}

function addCourses() {
    var li = document.createElement('li');
    var textareaCourseID = document.createElement('textarea');
    var textareaCourseReason = document.createElement('textarea');
    textareaCourseID.setAttribute("type", "textarea");
    textareaCourseID.setAttribute("id", "course-id");
    textareaCourseID.setAttribute("rows", "2");
    textareaCourseID.setAttribute("cols", "20");
    textareaCourseID.textContent = "ITSC2181 - Intro to Computer Systems";
    textareaCourseReason.setAttribute("type", "textarea");
    textareaCourseReason.setAttribute("id", "course-reason");
    textareaCourseReason.setAttribute("rows", "2");
    textareaCourseReason.setAttribute("cols", "20");
    textareaCourseReason.textContent = "It is required for my degree.";
    var form = document.getElementById('courses');
    li.appendChild(textareaCourseID)
    li.append(" : ");
    li.appendChild(textareaCourseReason);
    form.appendChild(li);
}

function deleteCourse() {
    var li = document.getElementById('courses').lastChild;
    li.parentNode.removeChild(li);
}

function submit() {
    if (!validateFields) { return; }

    var ul = document.createElement('ul');
    var username = document.getElementById('username').value;
    var mascot = document.getElementById('mascot').value;
    var image = loadImage();
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

    document.getElementById('intro-username').value = username;
    document.getElementById('intro-mascot').value = mascot;
    document.getElementById('intro-image').value = image;
    document.getElementById('intro-image-caption').value = image_caption;
    document.getElementById('intro-personal-background').value = personal_background;
    document.getElementById('intro-professional-background').value = professional_background;
    document.getElementById('intro-academic-background').value = academic_background;
    document.getElementById('intro-background-in-web-development').value = background_in_web_development;
    document.getElementById('intro-platform').value = platform;
    document.getElementById('intro-courses').value = course;
    var ul2 = document.createElement('ul2');
    for (var i = 0; i < courses.length; i++) {
        var li = document.createElement('li');
        li.value = courses[i].id + " : " + courses[i].description;
        ul2.appendChild(li);
    }
    document.getElementById('intro-funny-thing').value = funny_thing;
    document.getElementById('intro-anything-else').value = anything_else;    
}

button.addEventListener('click', function() {
    document.getElementById('byo-introduction').style.display = 'none';
    document.getElementById('byo-intro').style.display = 'block';  
});

document.addEventListener('DOMContentLoaded', submit);

var h2 = document.createElement('h2');
h2.innerHTML = '<h2>BYO Introduction</h2>';
document.body.appendChild(h2);
var ul = document.createElement('ul');
document.body.appendChild(ul);

    /*
    document.body.appendChild(ul);
    ul.appendChild(username);
    ul.appendChild(mascot);
    ul.appendChild(image);
    ul.appendChild(image_caption);
    ul.appendChild(personal_background);
    ul.appendChild(professional_background);
    ul.appendChild(academic_background);
    ul.appendChild(background_in_web_development);
    ul.appendChild(platform);
    ul.appendChild(course);
    document.body.appendChild(ul2);
    ul.appendChild(funny_thing);
    ul.appendChild(anything_else);
    */