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
    document.write();
}