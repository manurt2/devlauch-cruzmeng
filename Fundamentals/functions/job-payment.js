/*
Es una empresa hay un proceso donde cada trabajador debe registrar las horas de entrada y salida 
dirariamente. De esta forma, al final de cada dia, su empleador sabra cuanto tiene que pagarles por
sus horas trabajas.
Pero, si una persona trabajo mas de ocho horas, se le debe pagar un costo extra por las horas 
adicionales, que es igual 1.5 veces el monto de su tarifa por hora. Haz una programa que, recibiendo
la tarifa por hora, la hora de entrada y la hora de salida, imprima el monto total de dinero que ese
empleado recibio ese dia.

Tarifa por hora: $10
Hora de entrada: 9:00
Hora de salida: 18:00

Respuesta: 95$
*/

const prompt = require('prompt-sync')()
const WORK_DAY_HOUR = 8
const EXTRA_HOUR_MULTIPLIER = 1.5
const calculateSalary = (hourlyRate, entryTime, endDay) => {
    const [startHour, ] = entryTime.split(':')
    const [endHour] = endDay.split(':')
    const workedHour = endHour - startHour

    let salary = 0

    if(workedHour<=WORK_DAY_HOUR){
        salary = hourlyRate *workedHour
    }else{
        const extraHours = workedHour - WORK_DAY_HOUR
        salary = (hourlyRate *workedHour) + ((extraHours*hourlyRate)*EXTRA_HOUR_MULTIPLIER)

    }

     return salary
}
const main = () => {
    const hourlyRate = parseFloat(prompt('Hourly Rate: '))
    const entryTime = prompt('Start at: ')
    const endDay = prompt('End at: ')

    const salary = calculateSalary (hourlyRate, entryTime, endDay)
    console.log(`
        Tarifa por hora: ${hourlyRate}
        Hora de entrada: ${entryTime}
        Hora de salida:  ${endDay}\n
        Respuesta: ${salary}$
        
        `)
}

main ()