// aqui exportaras las funciones que necesites

//Autentificación con Facebook
const sigInFacebook = () => {

    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
    });
}


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log(user)
        console.log(bc.displayName);
    } else {
        // No user is signed in.
        console.log('usuario')
    }
});

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

export { register, sigInFacebook };