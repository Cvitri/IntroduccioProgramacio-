const prompt = require('prompt-sync')();
let numero = prompt("introduce un numero: ")

if (numero >= 1 && numero <= 100) {
    console.log("numero correcto")
} else {
    console.log("numero fuera de rango")
}
