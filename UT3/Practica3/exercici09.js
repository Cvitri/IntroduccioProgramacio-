const prompt = require('prompt-sync')();
let edad = prompt(`Cuantos años tienes?`)
if (edad >= 18) {
console.log(`eres mayor de edad`)
} else {
    console.log(`eres menor de edad`)
}