/*
Descripcion del Codigo:

Entrada de Fecha de Nacimiento: Se solicita al usuario que ingrese su fecha de nacimiento en el formato 
YYYY/MM/DD. 

Calculo de la Edad: 

Se crea un objeto Date para la fecha de nacimiento y se calcula
la edad restando el ano de nacimiento del ano actual. Tambien se verifica si ya ha pasado el 
cumpleanos del ano actual, para ajustar la edad si es necesario.
Verificacion de Edad: 

Se utiliza un if-else para determinar si la persona cumple con la edad legal
para beber (18 anos o mas) y se imprime el mensaje correspondiente.
Este programa permite que el proceso de verificacion de edad sea automatico y preciso, asegurando que
solo los mayores de edad puedan ingresar al bar.

Puedes guiarte con esto.

const prompt = require('prompt-sync')()

const birthdate = prompt("What is your birthdate in format (YYYY/MM/DD)?");

const birthday =  new Date(birthdate)
const today = new Date()

const age = today.getFullYear() - birthday.getFullYear() // takes the age of the person
*/

const prompt = require('prompt-sync')()
const birthdateYear = parseInt(prompt("What is your birthdate year in format (YYYY)? "))
const birthdateMonth = parseInt(prompt("What is your birthdate month in format (MM)? "))
const birthdateDays = parseInt(prompt("What is your birthdate days in format (DD)? "))
const AGE_LEGAL_TO_DRINK = 18
const birthdate = (`${birthdateYear}/${birthdateMonth}/${birthdateDays}`)
const birthday =  new Date(birthdate)
const today = new Date()

let age = today.getFullYear() - birthday.getFullYear()

const birthdayPassed = (
today.getMonth() > birthday.getMonth() || (
    today.getMonth() === birthday.getMonth() &&
    today.getDate() >= birthday.getDate()
)
)

if(birthdayPassed){
    age--
}

if(age>=18){
console.log(`
    Su edad es de ${age}, 
    Usted cumple con la edad legal para beber `)
}else{
    const ageRemain = AGE_LEGAL_TO_DRINK - age
console.log(`
    Su edad es de ${age}, 
    Usted aun no cumple con la edad legal para bebe
    Aun le falta ${ageRemain} anos
    `)
}

