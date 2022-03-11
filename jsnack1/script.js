/*Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.*/

// Creo un array con dalcuni numeri
const array=[2, 1, 3, 1, 4, 10, 5];

// Creo variabile somma inizializzandola a 0
let somma=0;

// Creo ciclo for per ispezionare ogni singolo elemento dell'array
for(let i=0; i<array.length; i++){
    //creo condizione che vede se l'indice dell'array è dispari e quando è così mi aggiorna la somma come somma di numeri in posizione dispari
    if(i % 2 !==0){
        somma = somma + array[i];
    }
}

console.log(somma);