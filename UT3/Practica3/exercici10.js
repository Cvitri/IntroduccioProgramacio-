const prompt = require('prompt-sync')();

let temperatura = prompt(`que temperatura hace? `) 

if (temperatura >= 25) {
    console.log (`fa calor`)
} else if (temperatura < 25 && temperatura >= 10) {
    console.log (`temperatura moderada`)
} else {
    console.log (`fa fred`)
}