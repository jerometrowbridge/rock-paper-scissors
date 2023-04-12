function game() {
    
    let playerScore = 0
    let computerScore = 0
    let drawScore = 0
    let winner = ""
    
    playGame()
    if (winner === "player") {
        playerScore++
    }
    else if (winner === "comp") {
        computerScore++
    }
    else {
        drawScore++
    }
    playGame()
    if (winner === "player") {
        playerScore++
    }
    else if (winner === "comp") {
        computerScore++
    }
    else {
        drawScore++
    }
    playGame()
    if (winner === "player") {
        playerScore++
    }
    else if (winner === "comp") {
        computerScore++
    }
    else {
        drawScore++
    }
    playGame()
    if (winner === "player") {
        playerScore++
    }
    else if (winner === "comp") {
        computerScore++
    }
    else {
        drawScore++
    }
    playGame()
    if (winner === "player") {
        playerScore++
    }
    else if (winner === "comp") {
        computerScore++
    }
    else {
        drawScore++
    }
    console.log(`The results are as follows. Victories for Player: ${playerScore}; Victories for Computer: ${computerScore}; Draws: ${drawScore}.`)
    if (playerScore > computerScore) {
        console.log(`You won!`)
    }
    else if (computerScore > playerScore) {
        console.log(`The computer won, better luck next time!`)
    }
    else {
        console.log(`You tied! How crazy!`)
    }
    function playGame() {
        let computerSelection = ""
        let playerSelection = prompt("This game is called Rock, Paper, Scissors. Please, make your choice:")
        let playerChoice = playerSelection.toLowerCase()
        getComputerChoice()
        console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}!`)
        findWinner()
        return winner

        function getComputerChoice() {
                let choices = ['rock', 'paper', 'scissors']
                let randomNum = Math.floor(Math.random() * (choices.length + 1))
                if (randomNum === 1) {
                    computerSelection = "rock";
                }
                    else if (randomNum === 2) {
                    computerSelection = "paper";
                    }
                    else {
                    computerSelection = "scissors";
                    }
                
                    return 
        }
        
        function findWinner() {
            function gameWinner() {
                if ((playerChoice === "rock") && (computerSelection === "paper")) {
                    winner = "comp"
                    console.log("Paper beats rock. The computer wins!")
                     
                }
                else if ((playerChoice === "rock") && (computerSelection === "scissors")) {
                    winner = "player"
                    console.log("Rock beats scissors. You win!")
                                      
                }
                else if ((playerChoice === "paper") && (computerSelection === "rock")) {
                    winner = "player"
                    console.log("Paper beats rock. You win!")
                                       
                }
                else if ((playerChoice === "paper") && (computerSelection === "scissors")) {
                    winner = "comp"
                    console.log("Scissors beats paper. The computer wins!")
                                        
                }
                else if ((playerChoice === "scissors") && (computerSelection === "rock")) {
                    winner = "comp"
                    console.log("Rock beats scissors. The computer wins!")
                                        
                }
                else if ((playerChoice === "scissors") && (computerSelection === "paper")) {
                    winner = "player"
                    console.log("Scissors beats paper. You win!")
                                      
                }
                else {
                    winner = "none"
                    console.log(`It's a draw!`)
                }
             
            }
            gameWinner()
            return winner
        }
    }


    
}

game()