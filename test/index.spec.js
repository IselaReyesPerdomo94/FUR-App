import { signInFacebook, signInGoogle, register, signInEmailPassword, signOut, savingUserData, createActivityCard, createFurCard, createProfileInformation, eraseDocumentFirebase } from '../src/lib/index.js';

var firebase = require('firebase-mock');

var mockauth = new firebase.MockAuthentication();
var mockdatabase = new firebase.MockFirebase();
var mockfirestore = new firebase.MockFirestore();
var mockstorage = new firebase.MockStorage();
var mockmessaging = new firebase.MockMessaging();
var mocksdk = new firebase.MockFirebaseSdk(
    // use null if your code does not use RTDB
    (path) => {
        return path ? mockdatabase.child(path) : mockdatabase;
    },
    // use null if your code does not use AUTHENTICATION
    () => {
        return mockauth;
    },
    // use null if your code does not use FIRESTORE
    () => {
        return mockfirestore;
    },
    // use null if your code does not use STORAGE
    () => {
        return mockstorage;
    },
    // use null if your code does not use MESSAGING
    () => {
        return mockmessaging;
    }
);

jest.mock('../src/js/configure.js', () => {
    return mocksdk;
});


//Función de iniciar sesión con facebook
describe('signInFacebook', () => {
    it('signInFacebook debería ser una función', () => {
        expect(typeof window.signInFacebook).toBe('function');
    });
});
//Función de iniciar sesión con Google
describe('signInGoogle', () => {
    it('signInGoogle debería ser una función', () => {
        expect(typeof window.signInGoogle).toBe('function');
    });
});
//Función de register
describe('register', () => {
    it('register debería ser una función', () => {
        expect(typeof window.register).toBe('function');
    });
});
//Función de signInEmailPassword
describe('signInEmailPassword', () => {
    it('signInEmailPassword debería ser una función', () => {
        expect(typeof window.signInEmailPassword).toBe('function');
    });
});

describe('signOut', () => {
    it('signOut debería ser una función', () => {
        expect(typeof window.signOut).toBe('function');
    });
});

describe('savingUserData', () => {
    it('savingUserData debería ser una función', () => {
        expect(typeof window.savingUserData).toBe('function');
    });
});

describe('createActivityCard', () => {
    it('createActivityCard debería ser una función', () => {
        expect(typeof window.createActivityCard).toBe('function');
    });
});

describe('createFurCard', () => {
    it('createFurCard debería ser una función', () => {
        expect(typeof window.createFurCard).toBe('function');
    });
});

describe('createProfileInformation', () => {
    it('createProfileInformation debería ser una función', () => {
        expect(typeof window.createProfileInformation).toBe('function');
    });
});

describe('eraseDocumentFirebase', () => {
    it('eraseDocumentFirebase debería ser una función', () => {
        expect(typeof window.eraseDocumentFirebase).toBe('function');
    });
});