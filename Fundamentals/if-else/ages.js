/*
El programa solicita al usuario su edad con prompt-sync, la convierte a numero y utiliza 
el ternary operator para calificar:

0-2 anos: "You are a baby"
3 a 13 anos: "You are a child"
14 a 17 anos: " You are a teenager"
18 a 29 anos: "You are a young adult"
30 a 60 anos: "You are a adult"
Mas de 60 anos: "You are an elderly"

Si la edad es menor de 0, muestra: "The institution does not support your age, please try again."
Es una forma clara y util de categorizar por edades.
*/

const prompt = require('prompt-sync')()
const age = parseInt(prompt('Digite su edad: '))

const message=(
(age> 0&&age<=2)
? 'You are a baby'
: (age>=3&&age<=13)
? 'You are a child'
: (age>=14&&age<=17)
?'You are a teenager'
: (age>=18&&age<=29)
?'You are a young adult'
: (age>=30&&age<=60)
?'You are an adult'
: (age>=60)
?'You are an elderly'
: null
)
console.log(message ? message : 'The institution does not support your age, please try again.')
