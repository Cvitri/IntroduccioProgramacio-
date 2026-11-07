const prompt = require('prompt-sync')();

let numero = prompt(`introduce un numero del 1 al 4: `);

if (numero == 1) {
    console.log(`Talla XS`)
} else if (numero == 2) {
    console.log(`Talla S`)    
} else if ( numero == 3) {
    console.log (`Talla M`)
} else if (numero == 4) {
    console.log (`Talla L`)
} else {
    console.log (`Talla no disponible`)
}