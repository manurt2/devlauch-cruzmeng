/*
Escribe un programa en JavaScript que solicite al usuario ingresar el numero de dias y calcule el 
numero equivalente de meses y dias restantes, considerando que un mes consta de 30 dias.

Este programa utiliza el modulo prompt-sync para recibir interactivamente la entrada del usuario.
Despues de calcular la cantidad de meses y dias restantes segun la entrada del usuario. Despues de 
calcular la cantidad de meses y dias restantes.

Como pista, puedes usar Math.floor() para redondear el resultado a un numero entero.

Si el usuario ingresa 100, la salida sera: 100 days are 3 months and 10 days.
*/

const  DAYS_PER_MONTH = 30
const prompt = require('prompt-sync')()
const cantDays = parseInt(prompt('Ingrese el numero de dias: '))
const months = Math.floor(cantDays / DAYS_PER_MONTH)

const daysLeft = cantDays % DAYS_PER_MONTH 
// otro metodo que se puede hacer es (months * DAYS_PER_MONTH) - cantDays 

if(daysLeft>0){
console.log(`
    ${cantDays} days are ${months} months and ${daysLeft} days.
    `)
}else{

    console.log(`
    ${cantDays} days are ${months} months.
    `)
}