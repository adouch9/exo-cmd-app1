const readlineSync = require('readline-sync')
let Lastname = readlineSync.question('Lastname: ')
let firtName = readlineSync.question('Firstname: ')
let Questionorigine = readlineSync.question('origine: ')
const droitVote = readlineSync.question('Votre age ? ')
let vote = Number(droitVote)
let majoriteFrance = 18
let majoriteStates = 21
let origineFrance = "france"
let origineStates = "americain"


  


if ((vote < majoriteFrance && Questionorigine === origineFrance) || (vote < majoriteStates && Questionorigine === origineStates) ){
    
    console.log(`hello ${Lastname} ${firtName} vous êtes Mineur, vous ne pouvez pas voter`) 
  
}
 else if ((vote > majoriteFrance && Questionorigine === origineFrance) || (vote >= majoriteStates && Questionorigine === origineStates)){
 
    console.log(`hello ${Lastname} ${firtName} vous êtes Majeur, vous pouvez voter`)

}
else{
    console.log("Erreur 404")
}
