//Conditionals: Switch Statements

// switch (expression OR value) {

//     case choice1: 
//         // run this code
//         break;
    
//     case choice2:
//         // run this code
//         break;
    
//     case choice3:
//         // run this code
//         break;
    
//     default:
//         // run this code
// }

switch(Math.floor(Math.random()*5)+1) {
    case 1: 
        console.log(1)
        break;
    
    case 2:
        console.log(2)
        break;
    
    case 3:
        console.log(3)
        break;
    
    default:
        console.log('No match')
}

let playerOne = 'paper'
let computer = 'rock'

switch(playerOne) {
    case computer:
        console.log('Tie game')
        break
    case 'rock':
        if (computer === 'paper') {
            console.log('Computer wins')
        } else {
            console.log('You win')
        }
        break
    
    case 'paper':
        if (computer === 'scissors') {
            console.log('Computer wins')
        } else {
            console.log('You win')
        }
        break
    
    case 'scissors':
        if (computer === 'rock') {
            console.log('Computer wins')
        } else {
            console.log('You win')
        }
        break
    
}