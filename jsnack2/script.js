/*Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.*/

// Creo console.log per vedere se js file è collegatto a index.html
console.log('JS ok');

// Creo un array vuoto che successivamente verrà riempito
let arrayDaRiempire=[];

//creo variabile somma e la inizializzo  a 0
var somma=0;

//Creo ciclo for che permetterà di riempire l'array con prompt
for(let i=0; i<5; i++){
    arrayDaRiempire.push(parseInt(prompt("inserisci un numero")));
    somma+=arrayDaRiempire[i];

}
console.log(arrayDaRiempire);

console.log('la somma dei numeri che hai inserito è ' + somma);