/*Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.*/

// Creo console.log per vedere se js file è collegatto a index.html
console.log('JS ok');

// Creo un array con 10 numeri
var arrayGrande=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Creo un array con meno numeri del primo array
var arrayPiccolo=[1, 2, 3];

// Creo un  ciclo for che inserisce un numero random finchè arrayPiccolo ha lo stesso  numero dell'arrayGrande
for (var i=arrayPiccolo.length; arrayPiccolo.length < arrayGrande.length; i++){
    arrayPiccolo.push(Math.floor((Math.random()*100)));
}

console.log(arrayPiccolo);