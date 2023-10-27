var original = document.body.innerHTML;
var courses = [];

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    this.style.display = 'none';
    submit;
    document.body.appendChild(document.getElementById('byo-intro'));
    document.getElementById('byo-intro').style.display = 'block';
});

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

var index = 0;

function addCourses() {
    var defaultCoursesid = [];
    defaultCoursesid.push('ITIS3200 - Intro to Security and Privacy');
    defaultCoursesid.push('ITSC2181 - Intro to Computer Systems');
    defaultCoursesid.push('STAT2122 - Intro to Probability and Statistics');
    defaultCoursesid.push('ITSC3146 - Intro to Operating Systems and Networking');
    defaultCoursesid.push('ITIS3135 - Web App Design and Development');

    var defaultCoursesreason = [];
    defaultCoursesreason.push('It is required for my degree and concentration.');
    defaultCoursesreason.push('It is required for my degree.');
    defaultCoursesreason.push('Unfortunately, I need this for my degree.');
    defaultCoursesreason.push('It is required for my degree.');
    defaultCoursesreason.push('It is required for my degree, but I am also thrilled to learn more about this subject.');

    var li = document.createElement('li');
    var textareaCourseID = document.createElement('textarea');
    var textareaCourseReason = document.createElement('textarea');
    textareaCourseID.setAttribute("type", "textarea");
    textareaCourseID.setAttribute("id", "course-id");
    textareaCourseID.setAttribute("rows", "2");
    textareaCourseID.setAttribute("cols", "20");
    textareaCourseID.textContent = defaultCoursesid[index];
    textareaCourseReason.setAttribute("type", "textarea");
    textareaCourseReason.setAttribute("id", "course-reason");
    textareaCourseReason.setAttribute("rows", "2");
    textareaCourseReason.setAttribute("cols", "20");
    textareaCourseReason.textContent = defaultCoursesreason[index];
    var form = document.getElementById('courses');
    li.appendChild(textareaCourseID)
    li.append(" : ");
    li.appendChild(textareaCourseReason);
    form.appendChild(li);    
    index++;
}

function deleteCourse() {
    var li = document.getElementById('courses').lastChild;
    li.parentNode.removeChild(li);
}

function submit() {
    //if (!validateFields) { return false; } 
    
    var username = document.getElementById('username').value;
    var mascot = document.getElementById('mascot').value;
    var image = document.getElementById('preview').src;
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
    
    var form = document.getElementById('byo-intro');
    form.getElementById('intro-username').textContent = username;
    form.getElementById('intro-mascot').textContent = mascot;
    form.getElementById('intro-image').src = image;
    form.getElementById('intro-image-caption').textContent = image_caption;
    form.getElementById('intro-personal-background').textContent = personal_background;
    form.getElementById('intro-professional-background').textContent = professional_background;
    form.getElementById('intro-academic-background').textContent = academic_background;
    form.getElementById('intro-background-in-web-development').textContent = background_in_web_development;
    form.getElementById('intro-platform').textContent = platform;
    form.getElementById('intro-courses').textContent = course;
    form.getElementById('intro-funny-thing').textContent = funny_thing;
    form.getElementById('intro-anything-else').textContent = anything_else;
    
    return false;
}