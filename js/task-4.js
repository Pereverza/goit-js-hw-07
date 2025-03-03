const form  = document.querySelector('.login-form')
form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
   const { email, password } = event.currentTarget.elements;
    if (email.value.trim() === '' || password.value.trim() === '') {
        return alert('All form fields must be filled in')
    }
    console.log({ email: email.value, password: password.value });
    event.currentTarget.reset();
    
}




