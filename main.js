/* dichiariamo la variabile userName */
const userName = prompt ('Inserisci il tuo nome');
/* assegniamo alla variabile il valore inserito dall'utente, ovvero il suo nome */
document.getElementById('name-user').innerHTML = userName;

 /* dichiariamo la variabile userLastName */
const userLastName = prompt ('Inserisci il tuo cognome');
/* assegniamo alla variabile il valore inserito dall'utente, ovvero il suo cognome */
document.getElementById('lastname-user').innerHTML = userLastName;

/* dichiariamo la variabile userColor */
const userColor = prompt ('Inserisci il tuo colore preferito');
/* assegniamo alla variabile il valore inserito dall'utente, ovvero il suo colore preferito */

document.getElementById('color-user').innerHTML = userColor;
document.getElementById('password-user').innerHTML = ('La tua password sarà: ') + (userName) + (userLastName) + (userColor) + (22);

console.log (userName, userLastName, userColor);



