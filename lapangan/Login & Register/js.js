const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('User registered!');
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('User logged in!');
});