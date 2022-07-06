"use strict";

const entry = document.querySelector('js-entry'); 
const btn = document.querySelector('.js-btn');
const attempts = document.querySelector('.js-attempts');
const acierto = false;
const intentos = 0;





function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }


const iniciar = () =>{
    const randomNumber = getRandomNumber(100);
    
    if (acierto == false){ 
        console.log("Escribe el número y dale a prueba");
    }else if (entry > randomNumber){
        alert("Demasiado alto");
        intentos++;

    }else if (entry < randomNumber){
        alert("Demasiado bajo");
        intentos++;
    }else if (entry == randomNumber){
        alert("Has gananado campeona");
    }else (entry != randomNumber) {
        alert("El número debe estar entre 1 y 100");
    }
}

function entry() {  
    const selectValue = select.value;
    entry.innerHTML = selectValue;
}

function handleClick(ev) { 
    ev.preventDefault();
    entry();
}

btn.addEventListener("click", handleClick)