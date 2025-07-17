/*
Crear un programa de Javascript que calcule la factura total de una persona en un hotel, donde cada
habitacion tiene un precio de $100 por noche, aprovechando una oferta promocional que incluye un
descuento del 5%.

El programa debe solicitar al huesped el numero de noche que paso en el hotel para que calcular 
la factura final.

Si el usuario ingresa que se quedo 5 noches, la salida sera: $475.00
*/

const promptSync = require('prompt-sync')()

const PRICE_PER_DAY = 100

const promoDiscount = 0.05

const days = parseInt(promptSync('Cuantos dias desea quedarse? -> '))

const subtotal = PRICE_PER_DAY * days

const discount = subtotal * promoDiscount

const total = subtotal - discount

console.log(`
    --------------
    Hotel RECEIPT
    --------------\n
    Nights: $${days}\n
    --------------
    Payments
    --------------\n
    Subtotal: $${subtotal}
    Discount: $${discount}
    Total: $${total}
    `)