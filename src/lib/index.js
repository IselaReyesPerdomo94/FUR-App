// aqui exportaras las funciones que necesites
import { components } from "../views/pages/activities.js";

import { petCard } from "../views/pages/myinfo.js";

//Home function
const goingHome = () => {
    location.hash = '/home';
}

//Going to profile function
const goingProfile = () => {
    location.hash = '/mi-informacion'
}

const goingLogin = () => {
        location.hash = '/';
    }
    //Autentificación con Facebook
const signInFacebook = () => {
    console.log('usando fb')
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        })
        .catch(function(error) {
            // Handle Errors here.
            console.log('no funciono')
            console.log(error)
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
        });
        savingUserData();
}


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        goingHome();
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
        savingUserData();
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
        .then(()=> {
             db.collection("users").add({
             name: name,
             email: email,
             userID: user.uid
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .then(() => goingProfile())
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
        }
        )
        .catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
            console.log(email);
            console.log(password);

        });
    email - password.html;      
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
        .then(() => goingHome())
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
            console.log('Sign-out successful');
            goingLogin();
            // location.reload();
        }).catch(function(error) {
            // An error happened.
        });
}
//Saving user data

const savingUserData = () => {  
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        db.collection("users").add({
        name: user.displayName,
        email: user.email, 
        photo: user.photoURL,
        userID: user.uid
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    } 
});   
}
        

//Activities function

const createActivityCard = (title, date, time, description, priority) => {
    const newCard = components.card
        .replace('*title*', title)
        .replace('*date*', date)
        .replace('*time*', time)
        .replace('*description*', description)
        .replace("*priority*",priority)
    return newCard;
}

//Mi Info function

const createFurCard = (furName, nickName, specie, ageFur, ageFurTwo, descriptionFur) => {
    const newFurCard = petCard.card
        .replace('*petName*', furName.value)
        .replace('*nickName*', nickName.value)
        .replace('*age*', ageFur.value)
        .replace('*age2*', ageFurTwo.value)
        .replace('*specie*', specie.value)
        .replace('*about*', descriptionFur.value)
    return newFurCard;
}

window.signInFacebook = signInFacebook;
window.signInGoogle = signInGoogle;
window.register = register;
window.signInEmailPassword = signInEmailPassword;
window.signOut = signOut;
window.createActivityCard = createActivityCard;
window.createFurCard = createFurCard;
