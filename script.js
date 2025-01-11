const usernameInput = document.getElementById('names');
const emailInput = document.getElementById('mail');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('cpassword');
const submitButton = document.getElementById('input');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    if(username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields');
        return;
    }
    if(password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    alert('Form submitted successfully');
    console.log('Username:', username,  "Email:", email, "Password:", password);
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    confirmPasswordInput.value = '';
});