const prompt = require('prompt-sync')();
 let a = prompt(`introduce un numero: `);
 let b = prompt(`introduce otro numero: `);
 let c = prompt(`introduce una operacion: `);

 if (c == "+") {
    console.log(Number(a) + Number(b))
 } else if (c == "-") {
    console.log(Number(a) - Number(b))
 } else if (c == "*") {
    console.log(Number(a) * Number(b))
 } else if (c == "/") {
    console.log(Number(a) / Number(b))
 } else {
    console.log(`Operacion no valida`)
 }