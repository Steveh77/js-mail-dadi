// Mail
// Crea (inventa) una lista di indirizzi mail autorizzati.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa in console un messaggio appropriato sull’esito del controllo. ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);





// Crea (inventa) una lista di indirizzi mail autorizzati.
const emailList = ['pincopallino1@gmail.com', 'asdaddad@gmail.com','prova123@gmail.com']
console.log(emailList[0])
console.log(emailList[1])
console.log(emailList[2])

// Chiedi all’utente la sua email,
let emailUtente = prompt("qual è la tua Email?")
let flag = false;

// controlla che sia nella lista di chi può accedere,
for (let i = 0; i < 3; i++) {
    console.log(emailList[i])
    if (emailUtente === emailList[i]) {
        console.log("ok")
    }else{
        console.log("no")
    }
}
