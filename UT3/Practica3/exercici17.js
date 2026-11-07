// Cas A
let hora = 9;
if (hora < 10 || hora > 18) {
console.log("Accés denegat");
}
// acceso denegado porque hay un valor true en un OR, por lo tanto el resultado sera true, denegando el acceso

// Cas B
let hora2 =15;
let capDeSetmana = false;
if (hora2 < 10 || hora2 > 18 || capDeSetmana) {
console.log("Accés denegat");
}
//no se mostrara el mensaje de acceso denegado ya que no hay no hay ningun valor true, son todos false, entonces el resultado sera false y no se mostrara el mensaje de acceso denegado

// Cas C
let hora3 = 17;
let capDeSetmana2 = true;
if (hora3 < 10 && hora3 > 18 && capDeSetmana2) {
console.log("Accés denegat");
}
//no se mostrara el mensaje ya que al ser un AND y haber valores false, el resultado automaticamente sera false, por lo tanto no se mostrara el mensaje de acceso denegado