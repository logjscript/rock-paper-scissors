let playerGuess;

function playerSelection() {
    playerGuess = prompt("Choose Rock, Paper, or Scissors.");

    while (playerGuess == null) {
        playerGuess = prompt("Please choose Rock, Paper, or Scissors!");
    }

    playerGuess = playerGuess.toLowerCase();
    
    while (
        playerGuess !== "rock" &&
        playerGuess !== "paper" && 
        playerGuess !== "scissors"
    ) {
        playerGuess = prompt("Invalid guess. Please guess again.");
        playerGuess = playerGuess.toLowerCase();
    }

    return playerGuess;
}

let computerGuess;

function computerSelection() {
    const computerRandom = Math.random();

    if (computerRandom < .33) {
        computerGuess = "rock";
    } else if (computerRandom < .66) {
        computerGuess = "paper";
    } else {
        computerGuess = "scissors";
    }
}

function playRound(playerGuess, computerGuess) {
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
    } else {
        console.log("Computer Won!");
    }
}


