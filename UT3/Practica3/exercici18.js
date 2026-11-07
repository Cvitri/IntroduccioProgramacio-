const prompt = require('prompt-sync')();

let edad = prompt(`Cuantos años tienes? `)
let carnet = prompt(`Tienes carnet de estudiante? (si/no) `)

if (edad < 18 || edad > 65 || carnet == "si") {
    console.log("tienes descuento")
} else {
    console.log("precio normal")
}

