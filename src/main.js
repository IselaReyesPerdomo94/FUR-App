// Este es el punto de entrada de tu aplicacion
import { register } from './lib/index.js';

//variables
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('confirm-p');
const acceptRegisterInput = document.getElementById('accept');
const readyRegister = document.getElementById('ready');


console.log('hello')
readyRegister.addEventListener('click', () => register(emailInput, passwordInput, passwordConfirmInput, acceptRegisterInput));