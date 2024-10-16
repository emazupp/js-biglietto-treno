/* TRACCIA */

/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

/* SVOLGIMENTO */

/* creo una variabile per i km */
const userKm = parseInt(
  prompt("Inserisci il numero di chilometri che vuoi percorrere:")
);
/* creo una variabile per l'eta dell'utente */
const userAge = parseInt(prompt("Inserisci la tua eta':"));
/* creo una variabile per tenere il totale */
/* moltiplico i chilometri per 0.21 */
let totalTicketPrice = userKm * 0.21;
/* condizione di sconto 20% se l'utente ha meno di 18 anni */
if (userAge < 18) {
  let coupon = (totalTicketPrice * 20) / 100;
  totalTicketPrice = totalTicketPrice - coupon;
}

/* condizione di sconto 40% se l'utente ha più di 65 anni */
if (userAge >= 65) {
  let coupon = (totalTicketPrice * 40) / 100;
  totalTicketPrice = totalTicketPrice - coupon;
}

/* OUTPUT */
alert(
  "Il prezzo totale del biglietto è: " + totalTicketPrice.toFixed(2) + " €"
);
