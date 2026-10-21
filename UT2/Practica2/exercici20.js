const prompt = require('prompt-sync')();
let x = prompt(`Escribe cualquier texto`)
console.log(`tu texto es '${x}'`)
console.log(`El tipo de dato es ${typeof x}`)
console.log(`${Boolean(x)}`)

// porque si la variable contiene texto el valor booleano sera verdadero, si la variable esta vacia el valor sera falso