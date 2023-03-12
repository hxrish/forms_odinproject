const form = document.getElementById('hero-form');
const btn = document.getElementById('submit-btn');
const pass_err = document.getElementById('pass_error');
const cpass_err = document.getElementById('cpass_error');
const email_err = document.getElementById('email_error');
const fname_err = document.getElementById('fname_error');
const fname_input = document.getElementById('usr_fname');
const email_input = document.getElementById('usr_email');
const pass_input = document.getElementById('usr_pass');
const cpass_input = document.getElementById('usr_cpass');


const passRegEx = /.{8,}/;

const emailRegEx = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9]+(?:\.[a-zA-Z]{2,})+$/;


// window.addEventListener('load', () => {
//     const fnameValid = fname_input.length > 2;
//     fname_input.className = fnameValid ? 'valid' : 'wrong';
// })

fname_input.addEventListener('input', () => {
    const fnameValid = fname_input.value.length > 2;
    if(fnameValid){
        fname_input.classList.remove('wrong');
        fname_err.innerText = '';
    }
    else{
        fname_input.classList.add('wrong');
        // fname_err.innerText = 'This is wrong.';
    }
})


email_input.addEventListener('input', () => {
    const emailValid = emailRegEx.test(email_input.value);
    if(emailValid){
        email_input.classList.remove('wrong');
        email_err.innerText = '';
    }
    else{
        email_input.classList.add('wrong');
        email_err.innerText = 'Please add an valid email.';
    }
})

let  nopassSame = pass_input.value != cpass_input.value;

pass_input.addEventListener('input', () => {
    const passValid = passRegEx.test(pass_input.value);
    if (passValid && pass_input.value == cpass_input.value){
        pass_input.classList.remove('wrong');
        pass_err.innerText = '';
        console.log('noo');
    }

    else if(!passValid){
        pass_input.classList.add('wrong');
        pass_err.innerText = 'Must be 8 characters long';
    }

    else if(pass_input.value != cpass_input.value){
        pass_input.classList.add('wrong');
        pass_err.innerText = 'Passwords do not match';
        console.log(nopassSame);
        console.log('hi');
    }
    else{
        pass_input.classList.add('wrong');
        pass_err.innerText = 'Please enter a valid password';
        console.log('what');
    }
})


cpass_input.addEventListener('input', () => {
    const cpass_validator = passRegEx.test(cpass_input.value);

    if(cpass_input.value == pass_input.value && cpass_validator){
        cpass_input.classList.remove('wrong');
        pass_input.classList.remove('wrong');
        pass_err.innerText = '';
        cpass_err.innerText = '';
    }

    else if(!cpass_validator){
        cpass_input.classList.add('wrong');
        cpass_err.innerText = 'Must be 8 characters long';
    }

    else if(cpass_input.value != pass_input.value){
        cpass_input.classList.add('wrong');
        cpass_err.innerText = 'Passwords do not match';
        pass_input.classList.add('wrong');
    }

    else{
        cpass_input.classList.add('wrong');
        cpass_err.innerText = 'Invalid password';
        pass_input.classList.add('wrong');
    }
})




btn.addEventListener('click', (event) => {
    // event.preventDefault();

    const passValid = passRegEx.test(pass_input.value);

    const cpass_validator = passRegEx.test(cpass_input.value);

    if(fname_input.classList.contains('wrong') || fname_input.value == ''){
        fname_err.innerText = 'Must have a valid name';
    }
    
    else if(email_input.classList.contains('wrong') || email_input.value == ''){
        email_err.innerText = 'Must have a valid email';
    }

    else if(!passValid){
        pass_err.innerText = 'Must be 8 characters long';
    }

    else if(!cpass_validator){
        cpass_err.innerHTML = 'Must be 8 characters long';
    }

    else if(cpass_input.value != pass_input.value){
        pass_err.innerText = 'Passwords must be same';
        cpass_err.innerText = 'Passwords must be same';
    }

    else{
        location.replace('https://www.youtube.com/watch?v=yauFhOqoXRc');
    }
})