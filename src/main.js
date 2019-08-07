// Este es el punto de entrada de tu aplicacion
import { register } from './lib/index.js';

//Const
const userNameInput = document.getElementById('user-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('confirm-p');
const acceptRegisterInput = document.getElementById('accept');
const readyRegister = document.getElementById('ready');

//Events
readyRegister.addEventListener('click', () => register(userNameInput, emailInput, passwordInput, passwordConfirmInput, acceptRegisterInput));