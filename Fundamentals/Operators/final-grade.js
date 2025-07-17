/*
Imagina desarrollar un programa para calcular el promedio de calificaciones de estudiantes en una
escuela. Como parte de este desafio, primero configuras el entorno para recibir entradas del usuario,
permitiendo que ingresen tres notas. 

Luego, procesas estos datos para calcular el promedio de manera precisa.

Finalmente, presentas el resultado formateando con maximo dos decimales, para segurar una lectura 
clara.

Si el usuario ingresa las calificaciones 80, 70 y 90, la salida sera: 80
*/

const prompt = require('prompt-sync')()
const nameStudent = prompt('Cual es el nombre del estudiante? ')
const grade1 = parseFloat(prompt('Cual es la priemra nota? '))
const grade2 = parseFloat(prompt('Cual es la priemra nota? '))
const grade3 = parseFloat(prompt('Cual es la priemra nota? '))
const MAX_DIGITS = 2
const GRADES_AMOUNT = 3
const averageGrade = (grade1 + grade2 + grade3) / GRADES_AMOUNT
console.log(`
    La nota de ${nameStudent}\n
    Primera nota: ${grade1}
    Segunda nota: ${grade2}
    Tercera nota: ${grade3} \n
    La nota promedio del estudiante ${nameStudent} es de: ${averageGrade.toFixed(MAX_DIGITS)}
    
    `)