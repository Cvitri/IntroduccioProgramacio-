const prompt = require('prompt-sync')();

let n = prompt("introduce un numero del 1 al 7: ")

switch (n) {
case "1":
    console.log("Lunes");
break;
case "2":
    console.log("Martes");
break;
case "3":
    console.log("Miercoles");
break;
case "4":
    console.log("Jueves");
break;
case "5":
    console.log("Viernes");
break;
case "6":
    console.log("Sabado");
break;
case "7":
    console.log("Domingo");
break;
default:
    console.log("Dia no valido");
break;
}