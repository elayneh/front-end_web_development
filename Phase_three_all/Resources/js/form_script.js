const form=document.getElementById('form');
const fname=document.getElementById('fname');
const lname=document.getElementById('lname');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmation=document.getElementById('confirmation');

//Show input error message

function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
    
}

//Email

function isValidEmail(email)
{
    const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function isValidFname(fname){
    const nam=/^[a-zA-Z]./;
    return nam.test(String(fname));
}
function isValidLname(fname){
    const lnam=/^[a-zA-Z]./;
    return nam.test(String(fname));
}
form.addEventListener('submit',function(e){
    e.preventDefault();

    if(fname.value===''){
        showError(fname,'cann\'t be empty');
    }else if(!isValidFname(fname.value)){
        showError(fname, 'invalid input');
    }
    else{
        showSuccess(fname);
    }
    if(lname.value===''){
        showError(lname,'cann\'t be empty');
    }else if(!isValidFname(lname.value)){
        showError(lname, 'invalid input');
    }
    else{
        showSuccess(lname);
    }
    if(email.value===''){
        showError(email,'Email is required');
    }else if(!isValidEmail(email.value)){
        showError(email,'Email is not valid');
    }
    else{
        showSuccess(email);
    }

    if(password.value==='' || password.value.length <= 7 || password.value.length > 32){
        showError(password,'Invalid');
    }
    else{
        showSuccess(password);
    }
    if(confirmation.value==='' || confirmation.value !== password.value){
        showError(confirmation,'password not match');
    }
    else{
        showSuccess(confirmation);
    }
});
