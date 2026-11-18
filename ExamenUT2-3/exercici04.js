const prompt = require('prompt-sync')()

let tipus = prompt(`tipus de incidencia(Xarxa, Hardware, Software)`)
let hores = prompt(`cuantes hores van pasar desde la incidencia? `)
let empresa = Boolean(prompt(`Empresa? (si o no)`))
let serveiaturat = Boolean(prompt(`El servei esta aturat? (si o no)`))

switch (tipus) {
    case "Xarxa":
    console.log(`${hores}, departament xarxa`)
    break;
    case "Hardware":
    console.log(`${hores}, Taller`)
    break;
    case "Software":
    console.log(`${hores}, Suport de aplicacions`)
    break;
    default: 
    console.log("no valida")
    break;
}
    
let prioridad 
if (empresa === "si" && serveiaturat === "si") {
    prioridad = "CRITICA"
    console.log(prioridad)
} else {
    prioridad = "NORMAL"
    console.log(prioridad)
}

