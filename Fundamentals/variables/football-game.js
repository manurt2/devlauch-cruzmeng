/* 
 El evento es parte de las Eliminatorias Sudamericanas para la Copa del Mundo.
 En un partido celebrado el 22/11/23 a las 20:30, el equipo local Argentina se enfrento
 al equipo de visitante Brasil. El resultado final fue 1-0  indicando Argentina como el 
 equipo ganador.
 */

 const eventName = 'Eliminatorias Sudamericanas'
const year = '2023'
const day = '22'
const month = '11'
 const date = `${day}/${month}/${year}`
 
 const hour = '20'
 const min = '30'
 const time = `${hour}:${min}`

 const localTeam = 'Argentina'
 const awayTeam = 'Brasil'

 const localTeamScore = 1
 const awayTeamScore = 0

 const score = 
 `${localTeam} vs ${awayTeam}:
    ${localTeamScore}   -  ${awayTeamScore}
con fecha ${date} a las ${time}`

if(localTeamScore>awayTeamScore){
console.log(score)
 console.log(`El ganador de la Copa Mundial ${year} es ${localTeam}`)
} else{
console.log(score)
 console.log(`El ganador de la Copa Mundial ${year} es ${awayTeam}`)
}

 
