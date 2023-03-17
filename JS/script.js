/*

Chiedi all’utente: il suo nome, il suo cognome ed il suo colore preferito. Il programma restituisce poi tutte le informazioni.

1) chiedere tramite un prompt e salvare il nome in una variante
2) chiedere tramite un prompt e salvare il cognome in una variante
3) chiedere tramite un prompt e salvare il colore preferito in una variante
4) stampare in pagina l'output
5) possibili controlli per ogni passaggio con "console.log"

*/

//Chiedo le info
const name = prompt("Come ti chiami?");
const surname = prompt("Qual'è il tuo cognome?");
const color = prompt("Qual'è il tuo colore preferito?");
let age = 23

//controllo se ricevo le info
console.log(name, surname, color);

//creo un output che scrive lr info in html
const output = `
Il tuo nome è ${name} <br>
Il tuo cognome è ${surname} <br>
Il tuo colore preferito è ${color}
`
//controllo se l'output è corretto
console.log(output);

//scrivo l'output in html
document.getElementById("informations").innerHTML = output

document.getElementById("info").innerHTML = name + " " + surname + " " + color + " " + age