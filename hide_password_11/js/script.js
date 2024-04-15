const password_input = document.querySelector('#password-inp');
const eye_icon = document.querySelector('.toggle');

function changeEyeIcon() {
    if(password_input.type === 'password') {
        password_input.setAttribute('type' , 'text');
    } else {
        password_input.setAttribute('type' , 'password');
    }
}