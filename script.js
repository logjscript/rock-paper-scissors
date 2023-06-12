let playerGuess;
let computerGuess;

function playerSelection() {
    let guess = prompt("Choose Rock, Paper, or Scissors.");

    while (guess == null) {
        return guess = prompt("Please choose Rock, Paper, or Scissors!");
    }

        guess = guess.toLowerCase();
    
    while (
        guess !== "rock" &&
        guess !== "paper" && 
        guess !== "scissors"
    ) {
        guess = prompt("Invalid guess. Please guess again.");
}
        return guess;
}

function computerSelection() {
    const computerRandom = Math.random();
    let guess;
    console.log(computerRandom);
    if (computerRandom < .33) {
        return guess = "rock";
    } else if (computerRandom < .66) {
        return guess = "paper";
    } else {
        return guess = "scissors";
    }
}


function playRound(playerGuess, computerGuess) {
    playerGuess = playerSelection();
    computerGuess = computerSelection();

    if (
        playerGuess === computerGuess
    ) {
        console.log("It's a tie!");

    } else if (
        playerGuess === "rock" && computerGuess === "scissors" ||
        playerGuess === "paper" && computerGuess === "rock" ||
        playerGuess === "scissors" && computerGuess === "paper"
    ) {
        console.log("You Won!");
        return ++playerCount;
    } else {
        console.log("Computer Won!");
        return ++computerCount;
    }
}

let playerCount = 0;

let computerCount = 0;

function finalScore(playerCount, computerCount) {
    if (playerCount === computerCount) {
        console.log("The final score of the game is a tie!");
    } else if (playerCount > computerCount) {
        console.log("You won the game!");
    } else {
        console.log("You lost the game!");
    }
}

function fullGame() {

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    finalScore(playerCount, computerCount);
}

fullGame();