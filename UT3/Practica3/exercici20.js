const prompt = require('prompt-sync')();

let edad = prompt("cuantos años tienes? ")
let entrada = prompt("tienes entrada? (si/no) ")

if (edad >= 18 && entrada == "si") { 
    console.log("Acceso permitido")
} else {
    console.log("Acceso denegado")
}
