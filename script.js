const form = document.getElementById("form");
const firstName = document.getElementById("name");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", e => {
    e.preventDefault();

    var firstNameValue = firstName.value.trim();
    var lastNameValue = lastName.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var regexPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(firstNameValue === ''){
        errorFunc(firstName, "First Name cannot be empty")
    }
    else{
        successFunc(firstName)
    }

    if(lastNameValue === ''){
        errorFunc(lastName, "Last Name cannot be empty")
    }
    else{
        successFunc(lastName)
    }

    if(emailValue === ''){
        errorFunc(email, "Email cannot be empty")
    }else if(!emailValue.match(regexPattern)){
        errorFunc(email, "Looks like this is not an email")
    }
    else{
        successFunc(email)
    }

    if(passwordValue === ''){
        errorFunc(password, "Password cannot be empty")
    }
    else{
        successFunc(password)
    }
});

function errorFunc(req, message){
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');

    span.innerText = message;
    req.className += "error";
    span.className += "error-text";

    if(req !== email){
        req.value = " ";
    }
    else{
        req.style.color = "hsl(0, 100%, 74%)"
    }
};

function successFunc(req){
    req.className += "success";
};