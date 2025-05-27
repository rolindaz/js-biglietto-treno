// console.log('Puzzi');

/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
TIP: per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:
100km, 10 anni => prezzo corretto: €16.80
100km, 70 anni => prezzo corretto: €12.60

*/

// chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero

const userKm = Number(prompt('Quanti km vuoi percorrere?')), userAge = Number(prompt('Quanti anni hai?'));

console.log(userKm, userAge);

// - il prezzo del biglietto è definito in base ai km (0.21 € al km)

let basePrice = userKm * 0.21;

console.log(`Prezzo base: ${basePrice.toFixed(2)}`);

// - va applicato uno sconto del 20% per i minorenni

let youngDiscount = basePrice / 100 * 20;

// - va applicato uno sconto del 40% per gli over 65

let elderDiscount = basePrice / 100 * 40;

// prezzo totale del viaggio, secondo queste regole: 

let totalPriceYoung = basePrice - youngDiscount, totalPriceElder = basePrice - elderDiscount;

if (userAge < 18) {
    console.log(`Sconto per under 18: ${youngDiscount.toFixed(2)} €`)
    console.log(`Prezzo totale biglietto: ${totalPriceYoung.toFixed(2)} €`)
} else if (userAge >= 65) {
    console.log(`Sconto per over 65: ${elderDiscount.toFixed(2)} €`)
    console.log(`Prezzo totale biglietto: ${totalPriceElder.toFixed(2)} €`)
} else {
    console.log(`Prezzo totale biglietto: ${basePrice.toFixed(2)} €`)
};