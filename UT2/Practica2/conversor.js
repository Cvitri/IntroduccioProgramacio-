const prompt = require('prompt-sync')();
let bytes = Number(prompt(`Insertar numero de bytes: `));

let kilobytes = bytes / 1024;
let megabytes = kilobytes / 1024;
let gigabytes = megabytes / 1024;

console.log(`Convertimos Bytes a --> KB, MB, G`);

console.log(`Bytes: ${bytes} `);
console.log(`Kilobytes: ${Math.round(kilobytes * 100) / 100} KB`);
console.log(`Megabytes: ${Math.round(megabytes*100) / 100} MB`);
console.log(`Gigabytes: ${Math.round(gigabytes * 100) / 100} GB`);

console.log(`Convertimos GB a -> Bytes`);

let number2 = Number(prompt(`Insertar la medida en GB: `));
let gigabytes2 = (number2);
console.log(`Medida en bytes: ${gigabytes2 * 1024 * 1024 * 1024}`);

console.log(`Calcular el tiempo de descarga`);

let number3 = Number(prompt(`Insertar la medida del archivo a descargar (GB): `));
let number4 = Number(prompt(`Cual es la velocidad de descarga en Mbps: `));

let midaFitxer = parseFloat(number3);
let velocitatDescarga = parseFloat(number4);

let tempsDescarga = midaFitxer / velocitatDescarga;

console.log(`Tiempo de descarga: ${tempsDescarga} segundos`);