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
    
}

function addCourse() {
    var count = 1;
    var li = document.createElement("li");
    var input = document.createElement("input");
    li.setAttribute("value", count)
    input.setAttribute("type", "text");

    if (count == 1)
    {
        input.textContent = "ITSC2181 - Intro to Computer Systems: It is required for my degree.";
    }
    else if (count == 2) 
    {
        input.textContent = "STAT2122 - Intro to Probability and Statistics: Unfortunately, I need this for my degree.";
    }
    else if (count == 3)
    {
        input.textContent = "ITSC3146 - Intro to Operating Systems and Networking: It is required for my degree.";
    }
    else if (count = 4)
    {
        input.textContent = "ITIS3135 - Web App Design and Development: It is required for my degree, but I am also thrilled to learn more about this subject.";
    }
    else 
    {
        input.textContent = "Course Number - Course Name: Description.";
    }
    count++;
    document.body.appendChild(li);
    document.body.appendChild(input);
}

function deleteCourse() {
    var li = document.getElementById("value");
    document.body.removeChild(value);
}

function submit() {
    validateFields();
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
    
}