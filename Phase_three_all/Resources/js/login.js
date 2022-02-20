
function  formValidation() {

var lastName = document.getElementById("lastname").value;
var password = document.getElementById("password").value;
var confimPassword = document.getElementById("confimpassword").value;
var date =document.getElementById("date").value;
var email = document.getElementById("email").value
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;


  const date18YrsAgo = new Date();
  date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18);
  // check if the date of birth is before that date
  


); 


if (firstName.trim() == " " || firstName.trim() == NULL) {
    firstName.style.border = "2px solid red";
    document.getElementById("errlname").style.visibility = "visible";
    return false;
}
else if (lastName.trim() == " " || lastName.trim() == NULL) {
    lastName.style.border = "2px solid red";
    document.getElementById("errlname").style.visibility = "visible";
    return false;
}
else if (password == " " || password == NULL || password > 8 && password < 16) {
    password.style.border = "2px solid red";
    document.getElementById("pass").style.visibility = "visible";
    return false;
}
else if (password != confimPassword) {
    confimPassword.style.border = "2px solid red";
    document.getElementById("errCon").style.visibility = "visible";
    return false;
}

else if(!email.value.match(mailformat))
{
email.style.border = "2px solid red";
    document.getElementById("errEmail").style.visibility = "visible";
    return false;
}else if(date <= date18YrsAgo;)

{
    confimPassword.style.border = "2px solid red";
    document.getElementById("date").style.visibility = "visible";
    return false;

}

    
}

