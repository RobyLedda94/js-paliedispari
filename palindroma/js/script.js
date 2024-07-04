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
    for (let i = parola.lenght - 1; i >= 0; i --){
        parolaInvertita += parola[i]
    }

    // confronto la parola inserita dall'utente con quella invertita

    if (parolaInvertita.toLowerCase() === parola.toLowerCase()){
        
    }
    
}

