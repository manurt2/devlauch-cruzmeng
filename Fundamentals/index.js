console.log("Hello World!")

const grade = 90
let message
if(grade>= 70){
    message = 'Pasate!' // tambien existe el if else
} else {
    message = 'Reprobaste'
}

// otro metodo que se puede hacer y es mas minimalista

const message2 = grade === 100
? 'Excelente'
: grade>= 70
? 'Pasaste' // el signo ? representa if
: ' Reprobaste' // los : representa else

console.log(message2)

const prompt = require('prompt-sync')()
console.log(` BANCO:

    1. Depositar
    2. Revisar cuenta
    3. Pago de tarjeta
    \n`)
const option = parseInt(prompt("    Digite una opcion:    "))
switch(option){
    case 1: 
    console.log('Se deposito')
    break;
    case 2: 
    console.log('Su cuenta es de ')
    break;
    case 3:
        console.log('Pagando tarjetas...')
    break;
    default:
        console.error('Option invalid') // para que imprima cuando tenga una opcion invalidad
        break;
}


