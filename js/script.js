// creo le variabili contenenti gli elementi dal DOM

const countdown = document.getElementById('countdown');
const numRandomList = document.getElementById('numbers-list');
const message = document.getElementById('message');
const button = document.querySelector('button');
const numUser = document.querySelector('input');

// dichiaro il timer
let timer;

// gestisco il timer
let count = 1;
numRandomList.innerText = count;

timer = setInterval(() => {
    count++;
    numRandomList.innerText = count;
},1000)

setTimeout(() => {
    clearInterval(timer);
    numRandomList.innerHTML = '';
    instructions.innerHTML = 'Inserisci i numeri memorizzati, anche in ordine casuale';
    answersForm.classList.remove("d-none")
},5000)

//  Creo l'array che conterrà i numeri casuali
const numRandom = [''];

// dichiaro l'elemento della lista vuoto
 
let items = '';
 
// ciclo l'array
for (let i=0; i<numRandom.length; i++){
    // creo il list items concatenandolo alla variabile item
    items += `<li>${numRandom[i]}</li>`
}

// assegno a numRandomList
numRandomList.innerHTML = items