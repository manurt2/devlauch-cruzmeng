/*
El proveedor principal de servicios de telefonos movil en la ciudad esta introduciendo una oferta
promocional basada tanto en el monto de recarga realizado por sus clientes como en la duracion de su
suscripcion con la compania. Para ser elegible para la promocion, los clientes deben recargar un 
minimo de 20$ y un maximo de 80$ y haber estado suscritos durante al menos un ano.

En la promocion SuperSaver, los clientes pueden disfrutar de un monto de recarga duplicado 
si su recarga es inferior a $38 y han estado afiliado al servicio por tres o anos o menos.

Por otro lado, la promocion MegaRecharge esta dirigida los clientes que han estado suscritos por
mas de tres anos, ofreciendoles un monto de recarga triplicada independientemente del monto de recarga.

Tu tarea es desarrollar un programa que tome como entrada el nombre del cliente, el monto de la recarga
y la duracion de su suscripcion, y determine si la promocion les aplica y calcule el monto total de
recarga incluyendo la promocion.

*/

const prompt = require('prompt-sync')()
const MIN_YEAR_DURATION = 1
const MIN_RECHARGE = 20
const MAX_RECHARGE = 80
const MIN_SUBSCRIPTION = 12
SUPER_PROMO_MULTIPLER = 2
const SUPER_PROMO_MIN_AMOUNT = 38
const MEGA_PROMO_MIN_DURATION = 36
const MEGA_PROMO_MULTIPLIER = 3
function calculateRecharge(amount, subscriptionDays){
    if(subscriptionDays<MIN_YEAR_DURATION) return amount

    let multipler = 1
    
    if(amount>MIN_RECHARGE){

        if(subscriptionDays>=MEGA_PROMO_MIN_DURATION){
        multipler = MEGA_PROMO_MULTIPLIER

    }else if(
        amount >= SUPER_PROMO_MIN_AMOUNT &&
        amount <= MAX_RECHARGE 
    ){
        multipler = SUPER_PROMO_MULTIPLER

    }
    }
    return amount * multipler

}
function main(){
    const clientName = prompt('What is clients name? ')
    const amount = parseInt(prompt('Amount for the recharge: '))
    const subscriptionDays = parseInt(prompt('What is the duration of your subscription (Year)? '))
    const recharge = calculateRecharge(amount, subscriptionDays)
    const promo =  recharge - amount
    console.log(`
        THANKS ${clientName}
        _______________________
        RECHARGE$: ${recharge}
        PROMO$: ${promo}
        `)

}

main();
