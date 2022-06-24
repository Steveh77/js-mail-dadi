// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilisci il vincitore, in base a chi fa il punteggio più alto e stampa  in console il risultato (ossia se ha vinto il computer o il player)
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?





// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
let numeroGiocatore = Math.round(Math.random() * 101);
let cpu = Math.round(Math.random() * 101);

console.log(numeroGiocatore);
console.log(cpu)

if (numeroGiocatore > cpu) {
    console.log("hai vinto")
}else{
    console.log("hai perso")
}