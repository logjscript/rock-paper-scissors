const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');
const parentElement = document.querySelector('.container');

btnRock.textContent = 'rock';
parentElement.appendChild(btnRock);

btnPaper.textContent = 'paper';
parentElement.appendChild(btnPaper);

btnScissors.textContent = 'scissors';
parentElement.appendChild(btnScissors);

btnRock.addEventListener("click", btnClick);
btnPaper.addEventListener("click", btnClick);
btnScissors.addEventListener("click", btnClick);

let btnClickResult;
let roundCount = 0;

function btnClick(e) {
    if (roundCount < 5) {
    btnClickResult = e.target.textContent;
    playRound(btnClickResult, computerSelection());
    roundCount++;
    }

    if (roundCount === 5) {
        return finalScore(playerCount, computerCount);
    }

    
}

let computerGuess;

function computerSelection() {
    const computerRandom = Math.random();
    let guess = computerGuess;
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
    playerGuess = btnClickResult;

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
