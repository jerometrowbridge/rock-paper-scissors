function getComputerChoice() {
    let computerChoice = ""
    let choices = ['rock', 'paper', 'scissors']
    let randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 1) {
        computerChoice = "rock";
    }
        else if (randomNum === 2) {
        computerChoice = "paper";
        }
        else {
        computerChoice = "scissors";
        }
    
        return computerChoice
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock") && (computerSelection === "paper")) {
        winner = "comp"
        const results = document.querySelector('#results')
        const myResults = document.createElement('p');
        let myInsertText = "Paper beats rock. The computer wins!"
        myResults.textContent = myInsertText
        results.appendChild(myResults);
        tabScore()
        finalResult()
    }
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        winner = "player"
        const results = document.querySelector('#results')
        const myResults = document.createElement('p');
        let myInsertText = "Rock beats scissors. You win!"
        myResults.textContent = myInsertText
        results.appendChild(myResults);
        tabScore()
        finalResult()
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        winner = "player"
        const results = document.querySelector('#results')
        const myResults = document.createElement('p');
        let myInsertText = "Paper beats rock. You win!"
        myResults.textContent = myInsertText
        results.appendChild(myResults);
        tabScore()
        finalResult()
    }
    else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        winner = "comp"
        const results = document.querySelector('#results')
        const myResults = document.createElement('p');
        let myInsertText = "Scissors beats paper. The computer wins!"
        myResults.textContent = myInsertText
        results.appendChild(myResults);
        tabScore()
        finalResult()
    }
    else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        winner = "comp"
        const results = document.querySelector('#results')
        const myResults = document.createElement('p');
        let myInsertText = "Rock beats scissors. The computer wins!"
        myResults.textContent = myInsertText
        results.appendChild(myResults);
        tabScore()
        finalResult()
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        winner = "player"
        const results = document.querySelector('#results')
        const myResults = document.createElement('p');
        let myInsertText = "Scissors beats paper. You win!"
        myResults.textContent = myInsertText
        results.appendChild(myResults);
        tabScore()
        finalResult()
    }
    else {
        winner = "none"
        const results = document.querySelector('#results')
        const myResults = document.createElement('p');
        let myInsertText = "It's a draw!"
        myResults.textContent = myInsertText
        results.appendChild(myResults);
        tabScore() 
        finalResult()
    }
}


let playerSelection
let computerSelection = getComputerChoice()
let userScore = 0
let compScore = 0
let drawScore = 0
let playerScore = document.querySelector("#playerScore")
let computerScore = document.querySelector("#computerScore")
// console.log(playRound(playerSelection, computerSelection))

const rockBtn = document.querySelector("#rockBtn")
rockBtn.addEventListener('click', function() {
    playRound("rock", getComputerChoice())
})

const paperBtn = document.querySelector("#paperBtn")
paperBtn.addEventListener('click', function() {
    getComputerChoice()
    playRound("paper", getComputerChoice())
})

const scissBtn = document.querySelector("#scissBtn")
scissBtn.addEventListener('click', function() {
    getComputerChoice()
    playRound("scissors", getComputerChoice())
    console.log(winner)
})


function tabScore() {
    if (winner === "player") {
        playerScore.textContent = ++userScore
    }
    else if (winner === "comp") {
        computerScore.textContent = ++compScore
    }
    else {
        drawScore++
    }
}

function finalResult() {
    const score = document.querySelector('#score');
    if (userScore === 5) {
        const userWinner = document.createElement('h1');
        userWinner.classList.add("winnerText")
        userWinner.textContent = "You have won the race to 5 wins!"
        const score = document.querySelector('#score');
        score.appendChild(userWinner)
    }
    else if (compScore === 5) {
        const compWinner = document.createElement('h1');
        compWinner.classList.add("winnerText")
        compWinner.textContent = "The computer won the race to 5 wins!"
        score.appendChild(compWinner)
    }
    else {
        return
    }
}
