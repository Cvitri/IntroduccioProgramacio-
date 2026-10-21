const prompt = require('prompt-sync')();
let nom = prompt(`como te llamas?`)
let edat = prompt(`cuantos años tienes?`)
console.log(`Hola ${nom}, tienes ${edat} años`)
console.log(`El año que viene tendrás ${Number(edat) + 1} años`)