'use strict';

// Elementos de HTML
const userNumberInput = document.querySelector('.js_userNumber');
const tipsElement = document.querySelector('.js_tips');
const testButton = document.querySelector('.js_testButton');
const triesElement = document.querySelector('.js_tries');


// Funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}


function checkNumbers() {

const userNumber = parseInt(userNumberInput.value);

if (isNaN(userNumber)) {
    tipsElement.innerHTML = 'El número debe estar entre 1 y 100.';
    } else if (userNumber > 100) {
    tipsElement.innerHTML = 'El número debe estar entre 1 y 100.';
    } else if (userNumber < 1) {
    tipsElement.innerHTML = 'El número debe estar entre 1 y 100.';
    } else if (userNumber > randomNumber) {
    tipsElement.innerHTML = 'Demasiado alto.';
    } else if (userNumber < randomNumber) {
    tipsElement.innerHTML = 'Demasiado bajo.';
    } else if (userNumber === randomNumber) {
    tipsElement.innerHTML = 'Has ganado campeona!.';
    } 
}


function incrementCounter() {
   triesCounter++;  
   triesElement.innerHTML = triesCounter;
}


function handleClick(event) {
    event.preventDefault();
    checkNumbers();
    incrementCounter();
}


// Eventos
testButton.addEventListener('click', handleClick);


// Código que se ejecuta cuando carga la página 
let triesCounter = 0; 
const randomNumber = getRandomNumber (100);
console.log(`Mi número aleatorio es ${randomNumber}`);
