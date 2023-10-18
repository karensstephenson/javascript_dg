// Rock, Paper, Scissors: refactored with arrays and functions
const initGame = () => {
    const startGame = confirm('Shall we play rock, paper, scissors?')
    startGame ? playGame() : alert("Okay, maybe next time.")
}

//Game flow function
const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice)
        if (playerChoice === "") {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decidedNotToPlay()
            break
        }
        playerChoice = evaluatePlayerChoice(playerChoice) 
            if (!playerChoice) {
                invalidChoice()
                continue
            }
            const computerChoice = getComputerChoice()
            const result = determineWinner(playerChoice, computerChoice)
            displayResult(result)
            if (askPlayAgain()) {
                continue
            } else {
                thanksForPlaying()
                break
            }
        }
    }



const getPlayerChoice = (playerChoice) => {
    return prompt("Please enter rock, paper, or scissors.")   
}

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLowerCase()
    } else {
        return false
    }
}

const decidedNotToPlay = () => {
    alert("I guess you changed your mind. Maybe next time.")
}

const evaluatePlayerChoice = (playerChoice) => {
    if (
        playerChoice === 'rock' || 
        playerChoice === 'paper' || 
        playerChoice === 'scissors'
    ) {
        return playerChoice
    } else {
        return false
    }
}

const invalidChoice = () => {
    alert("You didn't enter rock, paper, or scissors.")
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*3 + 1)
    const rpsArray = ['rock', 'paper', 'scissors']
    return rpsArray[randomNumber]
}

const determineWinner = (player, computer) => {
    const winner = 
        player === computer 
            ? "\nIt's a tie"
            : player === 'rock' && computer === 'paper' 
            ? `You chose ${player}\nThe computer chose ${computer}\nComputer wins!` 
            : player === 'paper' && computer === 'scissors' 
            ? `You chose ${player}\nThe computer chose ${computer}\nComputer wins!`
            : player === 'scissors' && computer === 'rock' 
            ? `You chose ${player}\nThe computer chose ${computer}\nComputer wins!`
            : `You chose ${player}\nThe computer chose ${computer}\nYou win!`
    
    return winner;
}

const displayResult = (result) => {
    alert(result)
}

const askPlayAgain = () => {
    return confirm("Play Again?")
}

const thanksForPlaying = () => {
    alert("Okay, thanks for playing.")
}

initGame()