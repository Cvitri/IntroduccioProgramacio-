const prompt = require('prompt-sync')()

const EMPRESA = "NetLlevant"
const AÑO = 2026

let pc = prompt("nombre del euipo")
let memoria = prompt (" memoria ram")
let disco = prompt("capacitat del disc")
let año = prompt("año de compra")
let garantia = Boolean(prompt("tiene garantia? (si o no)"))

let ramgb = (memoria / 1024)
let discotb = (disco * 1024)

let año2 = (2026 - año)

console.log(`equip: ${pc}`)
console.log(`RAM: ${memoria}(${ramgb})`)
console.log(`disc: ${disco}(${discotb})`)
console.log(`antiguetat: ${año2}`)
console.log(`en garantia ${garantia}`)

console.log(`tipus de dades`)

console.log(typeof pc)
console.log(typeof memoria)
console.log(typeof disco)
console.log(typeof año)
console.log(typeof garantia)