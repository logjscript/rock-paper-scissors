let playerGuess;

function playerSelection() {
    playerGuess = prompt("Choose Rock, Paper, or Scissors!");
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

playerSelection();

let computerGuess;

function computerSelection() {
    let computerGuess = Math.random()

    if (computerGuess < .33) {
        return "rock";
    } else if (computerGuess < .66) {
        return "paper";
    } else {
        return "scissors";
    }
}
