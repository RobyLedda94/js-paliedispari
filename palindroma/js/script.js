// Palidroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma


// chiedo all'utente di inserire una parola

const parolaUtente = prompt("Inserisci una parola");
// console.log(parolaUtente);

// funzione per verificare se la parola e palindroma

function verificaPalindroma(parola){
    let parolaInvertita = "";

    // ciclo (for) la parola per controllare ogni carattere 
    for (let i = parola.length - 1; i >= 0; i --){
        parolaInvertita += parola[i]
    }

    // confronto la parola inserita dall'utente con quella invertita

    if (parolaInvertita.toLowerCase() === parola.toLowerCase()){
        return true;

    } else{
        return false;
    }
    
   
}

// richiamo la funzione

const isPalindroma = verificaPalindroma(parolaUtente);

// mostro il risultato in console
if (isPalindroma){
    console.log("La parola inserita è palindroma");
} else{
    console.log("La parola inserita non è palindroma");
}

