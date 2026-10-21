const prompt = require('prompt-sync')();
let x = prompt("Primer numero: ")
let y = prompt("Segundo numero: ")
console.log(`Suma: ${Number(x) + Number(y)}`)
console.log(`Resta: ${Number(x) - Number(y)}`)
console.log(`Multiplicación: ${Number(x) * Number(y)}`)
console.log(`División: ${Number(x) / Number(y)}`)