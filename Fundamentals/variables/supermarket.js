/*
Voy al supermarcado GreenCenter para hacer mis compras habituales y planeo comprar manzanas y naranjas
Cuando estoy alli, veo que no hay platanos ni uvas, asi que cambio un poco mi lista.
Veo que 3 cajeros estan trabajando, asi que me preparo para pagar.
Mis cosas cuestan 100$ en total.
Entrego 150$ en efectivo y recibo 50$ de cambio.
*/

const nameSupermarket = 'GreenCenter'
const favoriteFruit1 = 'Apple'
const favoriteFruit2 = 'Orange'
const areBananaAvailable = false
const areGravesAvailable = false
const numbersOfActiveChashiers = 3
const cashInWalletDollars = 150
const totalPurchaseDollars = 100
const changeDollars = cashInWalletDollars - totalPurchaseDollars

console.log(`Welcome to ${nameSupermarket}\n
    You are buying:
    ${favoriteFruit1} 
    ${favoriteFruit2}  \n
    Total of the purchase = ${totalPurchaseDollars}\n
    Paying in cash = ${cashInWalletDollars}\n
    Change = ${changeDollars}    `)

