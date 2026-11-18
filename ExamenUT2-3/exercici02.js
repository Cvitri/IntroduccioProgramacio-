const prompt = require('prompt-sync')()

let nom = prompt('Client: ')
let madeobra = Number(prompt(`ma d'obra (€):`))
let peces = Number(prompt(`cost de les peces: `))
let contracte = Boolean(prompt(`Te contracte de manteniment? `))
let urgent = Boolean(prompt(`servei urgent?`))

console.log(`Presupost`)
console.log(`client: ${nom}`)
madeobra *= 35

if (contracte === "si") {
    madeobra  - 20%
    console.log(`ma de obra: ${madeobra}`)
} else {
    console.log(`ma de obra: ${madeobra}`)}

let base = (madeobra + peces)
console.log(`recarrec de urgencia: ${urgent}`)
console.log(`base imposable: ${base}`)
