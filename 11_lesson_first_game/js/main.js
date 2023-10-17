// First Interactive Game

let playGame = confirm('Shall we play rock, paper, scissors?')
if (playGame) {
    //play
    let playerChoice = prompt('Please enter rock, paper or scissors')
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase()
        if (playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissors') {
        let computerChoice = Math.floor(Math.random()*3 + 1)
        let computer = computerChoice === 1 ? 'rock'
            : computerChoice === 2 ? 'paper'
            : 'scissors'

        

        let result = playerOne === computer 
            ? "\nIt's a tie"
            : playerOne === 'rock' && computer === 'paper' 
            ? '\nComputer wins' 
            : playerOne === 'paper' && computer === 'scissors' 
            ? '\nComputer wins' 
            : playerOne === 'scissors' && computer === 'rock' 
            ? '\nComputer wins'
            : '\nYou win' 

        alert(`You chose ${playerOne}. The computer chose ${computer}\n${result}`)
        let playAgain = confirm('Play Again?')
        playAgain ? location.reload() : alert("Okay, thanks for playing.")
            
        } else {
            alert("You didn't enter rock, paper or scissors")
        }
    } else {
        alert('I guess you changed your mind. Maybe next time.')
    }
} else {
    alert('Okay, maybe next time.')
}