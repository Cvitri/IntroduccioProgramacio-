const prompt = require('prompt-sync')()

const EMPRESA = "NetLlevant"
const AÑO = 2026

let nom = prompt('Client: ')
let madeobra = Number(prompt(`ma d'obra (€):`))
let peces = Number(prompt(`cost de les peces: `))
let contracte = Boolean(prompt(`Te contracte de manteniment? `))
let urgent = Boolean(prompt(`servei urgent?`))

console.log(`===Presupost===`)
console.log(`client: ${nom}`)
madeobra *= 35

if (urgent === "si") {
    urgent = "15"
} else {
    urgent = "no"
}

let base = (madeobra + peces)
console.log(`recarrec de urgencia: ${urgent}`)
console.log(`base imposable: ${base}`)

console.log(`IVA 21%: `)