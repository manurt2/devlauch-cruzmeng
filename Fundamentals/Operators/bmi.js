/*
Escribe un programa sencillo en JavaScript que calcule y muestre el Indice de Masa Corporal (IMC) 
de un usuario. El programa debe solicitar al usuario su nombre, alturas en metros y peso en kilogramos.

Despues de calcular el IMC, el programa debe mostrar un mensaje al usuario que incluya su nombre 
y el valor de su IMC.

Calcule IMC utilizando la formula:

IMC = weight / height^2

Nombre: John
Altura: 1.75
Peso: 70

La salida sera: Hi John, your BMI is ~22.86

*/

const prompt = require('prompt-sync')()
const name = prompt('Cual es tu nombre? ')
const weight = parseFloat(prompt('Cual es tu peso en kg? '))
const height = parseFloat(prompt('Cual es tu altura en metros? '))

const imc = weight / Math.pow(height,2) 
// este es un metodo weight / height^2

console.log(`
    Indice de Masa Corporal (IMC)
    Nombre: ${name}
    Altura: ${height}
    Peso:   ${weight}
    Tu IMC es de ${imc.toFixed(2)}
    `)
