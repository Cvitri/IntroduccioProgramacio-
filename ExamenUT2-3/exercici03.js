const prompt = require('prompt-sync')()

let velcontratada = prompt(`velocitat contractada: `)
let velmesurada = prompt(`velocitat mesurada al test: `)
let ping = prompt(`ping `)
let perdua = prompt(`perdua de paquets: `)

if (velcontratada <= 0 || velmesurada < 0 || ping < 0 || perdua < 0) {
    console.log(`dades no valides`)
} else{
let porcentaje = (velmesurada% velcontratada)
console.log(`${porcentaje}%`)

}