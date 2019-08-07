// aqui exportaras las funciones que necesites

const register = (userNameInput, emailInput, passwordInput, passwordConfirmInput, acceptRegisterInput) => {
    const name = userNameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPass = passwordConfirmInput.value;
    const accept = acceptRegisterInput.checked;
    if (name === '') {
        alert('No te olvides de escribir tu nombre');
        return;
    }
    if (email.length < 4) {
        alert('Tu email no es válido');
        return;
    }
    if (password.length < 6) {
        alert('Tu contraseña debe contener al menos 6 caracteres');
        return;
    }
    if (password !== confirmPass) {
        alert('La contraseña no concuerda');
        return;
    }
    if (!accept) {
        alert('Por favor acepta los términos y condiciones para registrarte');
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
            console.log(email);
            console.log(password);

        });
    email - password.html
}

export { register };