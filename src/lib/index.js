// aqui exportaras las funciones que necesites


//Home function
const goingHome = () => {
    location.hash = '/home';
}

//Going to profile function
const goingProfile = () => {
    location.hash = '/profile'
}

const goingLogin = () => {
        location.hash = '/';
    }
    //Autentificación con Facebook
const signInFacebook = () => {

    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).then(() => goingHome())
        .catch(function(error) {
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
        goingHome();
        console.log('usuario conectado')
    } else {
        // No user is signed in.
        console.log('usuario no conectado')
        goingLogin();
    }
});

//Sign in Google
const signInGoogle = () => {
    console.log("hola google");

    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).then(() => goingHome())
        .catch(function(error) {
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
        .then(() => goingProfile())
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

const signInEmailPassword = (emailLogin, currentPassword) => {
    const email = emailLogin.value;
    const password = currentPassword.value;
    if (email === '') {
        alert('No olvides tu correo para iniciar sesión');
        return;
    }
    if (password === '') {
        alert('Ingresa tu contraseña');
        return;
    }
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => goingProgile())
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/invalid-email') {
                alert('Tu correo electrónico es inválido');
            }
            if (errorCode === 'auth/user-not-found') {
                alert('Ups! Parece ser que tu correo no esta registrado')
            }
            if (errorCode === 'auth/wrong-password') {
                alert('Tu contraseña es incorrecta')
            }
        });
}

const signOut = () => {
    firebase.auth().signOut()
        .then(function() {
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
        });

}

window.signInFacebook = signInFacebook;
window.signInGoogle = signInGoogle;
window.register = register;
window.signInEmailPassword = signInEmailPassword;

window.signOut = signOut;

