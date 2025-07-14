/* 
El Elite Fitness Center es un gimnasio boutique ubicado en Pablo Alto, California, que ofrece 
membresias por $150 al mes. Opera de 6am a 10 pm, emplea a 10 entrenadores certificados y cuenta con
comodidades como sauna, piscina y clases grupales.
*/

const gymName = 'Elite Fitness Center'
const gymType = 'Boutique'
const located = 'Pablo Alto, California'
const membership = 150
const currency = '$'
const duration = 'monthly'
const openTime = 6
const closeTime = 10
const cantWorkers = 10
const amenity1 = 'Sauna'
const amenity2 = 'Piscina'
const amenity3 = 'Clases grupales'

console.log(`
    Welcome to ${gymName} (${gymType})\n
    We are located in ${located}\n
    Open at ${openTime}:00AM to ${closeTime}:00PM \n
    Memebership: ${membership} ${currency} ${duration}\n
    Team: ${cantWorkers} certified trainers \n
    We have amenity like:
    ${amenity1}
    ${amenity2}
    ${amenity3}
    `
)
