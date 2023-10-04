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
    var course = byo_introduction.getElementById();
}

function deleteCourse() {

}

function submit() {
    emptyFields();
}