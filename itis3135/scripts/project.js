let form = document.getElementById('company-name');

window.onload = function() {
    var buttons = ['click-to-reserve'];
    buttons.forEach(function(button) {
        if(button == 'click-to-reserve') {
            document.getElementById(button).addEventListener('click', reservation);
        }
    });
}

form.addEventListener('a', (e) => {
    e.preventDefault();


});

function reservation() {

}