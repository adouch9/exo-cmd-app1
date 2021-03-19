const readlineSync = require('readline-sync')
let Lastname = readlineSync.question('Lastname: ')
let firtName = readlineSync.question('Firstname: ')
const droitVote = readlineSync.question('Votre age ? ')
let vote = Number(droitVote)
let age = 18

  


if (vote < age){
    
    console.log(`hello ${Lastname} ${firtName} vous êtes Mineur, vous ne pouvez pas voter`)
}
 else if (vote  >= age){
 
    console.log(`hello ${Lastname} ${firtName} vous êtes Majeur, vous pouvez pas voter`)

}
else{
    console.log("Error 404")
}
