const prompt = require('prompt-sync')();
let numero = prompt(`introduce un numero: `);

if (numero == 7) {
    console.log (`has adivinado el numero`)
} else {
    console.log(`No has adivinado, vulve a intentar`)
}