function hide() {
  let elements = document.querySelectorAll('.inputImg');
  for (i = 0; i < elements.length; i++) {
    elements[i].classList.add('inputImgSHOWN');
  }

}

function seen() {
  let elements = document.getElementsByClassName('errorMsg');
  for (i = 0; i < elements.length; i++) {
    elements[i].classList.add('errorMsgSHOWN');
  }

}

function changeBorder() {
  let border = document.querySelectorAll("input");
  for (i = 0; i < border.length; i++) {
    border[i].style.border = "2px solid red"
  }
}



function valid() {
  var help = new Array("Fname", "Lname", "email", "password")
  for (var i = 0; i < 3; i++) {
    var submitForm = document.forms["myForm"][help[i]].value;
    if (submitForm == "") {
      hide()
      seen()
      changeBorder()
      return false;
    }
  }
}