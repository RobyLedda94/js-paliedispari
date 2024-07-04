// Pari e Dispari
// L’utente inserisce prima  "pari" o "dispari" poi inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



// chiedo all'utente di scegliare o pari o dispari

const sceltaUtente = prompt("Scegli un numero pari o dispari");
console.log(sceltaUtente);


// chiedo all'utente di inserire un numero da 1 a 5

const numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(numeroUtente);


// genero un numero casuale da 1 a 5 per il computer

const numeroComputer = Math.floor(Math.random() * 5) + 1;
console.log(`Numero del computer: ${numeroComputer}`);


// determino la somma
const somma = sceltaUtente + numeroComputer;


// function a (c){
    
// }