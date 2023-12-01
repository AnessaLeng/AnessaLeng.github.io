let form = document.getElementById('company-name');
var original = document.body.innerHTML;

window.onload = function() {
  let slideIndex = 1;
  showSlides(slideIndex);

  function slides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("preview");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

    var reservation_form = document.getElementById('reservation-form');
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    if (day < 10) {
      day = '0' + day;
    }

    if (month < 10) {
      month = '0' + month;
    }

    today = year + '-' + month + '-' + day + '\n' + hours + ':' + minutes;
    reservation_form.getElementById('date').min = today;

    var buttons = ['click-to-reserve'];
    buttons.forEach(function(button) {
        if(button == 'click-to-reserve') {
            document.getElementById(button).addEventListener('click', reservation);
        }
    });
}

function reservation() {
    alert("Go to Contact on the nav bar!");
}

document.getElementById('date').onchange = function() {
  var input = new Date(this.value);
  if (input < new Date()) {
    alert("The selected date already passed!");
    this.value = '';
  } 
}

document.getElementById('reservation-form').addEventListener('submit', function(event) {
  event.preventDefault();

  document.getElementById('default-page').style.display = 'none';
  document.getElementById('submitted-form').style.display = 'block';

  var username = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var date = document.getElementById('date').value;
  var party = document.getElementById('party').value;
  var occasion = document.getElementById('occasion');
  var selected_occasion = occasion.options[occasion.selectedIndex].text;
  var comments = document.getElementById('comments').value;

  document.getElementById('submitted-name').innerHTML = username;
  document.getElementById('submitted-email').innerHTML = email;
  document.getElementById('submitted-phone').innerHTML = phone;
  document.getElementById('submitted-date').innerHTML = date;
  document.getElementById('submitted-party').innerHTML = party;
  document.getElementById('submitted-occasion').innerText =  selected_occasion;
  document.getElementById('submitted-comments').innerHTML = comments;

  alert("Thank you, " + username + "! A confirmation will be sent via " + email + " within 48 hours. If we need more details then you'll receive a call at " + phone + " from one of our managers.");
});
