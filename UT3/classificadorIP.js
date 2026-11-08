const prompt = require('prompt-sync')();

console.log("======== CLASIFICADOR DE IP ========")

let oct1 = Number(prompt("Introduce el primer octeto: "))
let oct2 = Number(prompt("Introduce el segundo octeto: "))
let oct3 = Number(prompt("Introduce el tercer octeto: "))
let oct4 = Number(prompt("Introduce el cuarto octeto: "))
let ip = (`${oct1}.${oct2}.${oct3}.${oct4}`)

if ((oct1 >= 0 && oct1 <= 255) && (oct2 >= 0 && oct2 <= 255) && (oct3 >= 0 && oct3 <= 255) && (oct4 >= 0 && oct4 <= 255)) {
    console.log(`Direccion IP: ${ip}`)
} else {
    console.log("La direccion no es valida: cada octeto tiene que estar entre 0 y 255")
}

let clase
if (oct1 === 0) {
    clase = "Clase Reservada";
} else if ( oct1 <= 126) {
    clase = "Clase: A";
} else if (oct1 === 127) {
    clase = "Clase: Loopback";
} else if (oct1 <= 191) {
    clase = "Clase: B";
} else if (oct1 <= 223) {
    clase = "Clase: C";
} else if (oct1 <= 239) {
    clase = "Clase: D";
} else if (oct1 <= 255) {
    clase = "Clase: E";
}
console.log (clase)

switch (clase) {
case "Clase: A": 
    console.log ("Mascara por defecto: 255.0.0.0")
    break
case "Clase: B": 
    console.log ("Mascara por defecto: 255.255.0.0")
    break
case "Clase: C": 
    console.log ("Mascara por defecto: 255.255.255.0")
    break
default:
    console.log ("Mascara por defecto: no tiene (IP especial)")
    break
}

let tipo
if (oct1 === 10 || oct1 === 172 && (oct2 >=16 && oct2 <= 31) || oct1 === 192 && oct2 === 168) {
    tipo = "Tipo: privada"
} else {
    tipo = "Tipo: publica"
}
console.log(tipo)
