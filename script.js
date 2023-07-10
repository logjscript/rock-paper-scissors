const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');
const parentElement = document.querySelector('.container');
const gameInfoElement = document.querySelector('.game-info');

btnRock.textContent = 'rock';
parentElement.appendChild(btnRock);

btnPaper.textContent = 'paper';
parentElement.appendChild(btnPaper);

btnScissors.textContent = 'scissors';
parentElement.appendChild(btnScissors);

btnRock.addEventListener("click", btnClick);
btnPaper.addEventListener("click", btnClick);
btnScissors.addEventListener("click", btnClick);

let playerCount = 0;

let computerCount = 0;

const scores = document.querySelector('.scores')

const playerScoreMsg = document.createElement('h2');
const playerScoreSentence = "Your score is " + playerCount;
playerScoreMsg.innerText = playerScoreSentence; 
scores.appendChild(playerScoreMsg);

const computerScoreMsg = document.createElement('h2');
const computerScoreSentence = "Computer score is " + computerCount;
computerScoreMsg.innerText = computerScoreSentence; 
scores.appendChild(computerScoreMsg);



let btnClickResult;
let roundCount = 0;

function btnClick(e) {
    if (roundCount < 5) {
    btnClickResult = e.target.textContent;
    playRound(btnClickResult, computerSelection());
    roundCount++;
    playerScoreMsg.innerText = "Your score is " + playerCount;
    computerScoreMsg.innerText = "Computer score is " +computerCount;
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
        const tieMsg = document.createElement('p');
        tieMsg.textContent = "It's a tie!";
        gameInfoElement.appendChild(tieMsg);
        console.log("It's a tie!");

    } else if (
        playerGuess === "rock" && computerGuess === "scissors" ||
        playerGuess === "paper" && computerGuess === "rock" ||
        playerGuess === "scissors" && computerGuess === "paper"
    ) {
        const playerWinMsg = document.createElement('p');
        playerWinMsg.textContent = "You Won!";
        gameInfoElement.appendChild(playerWinMsg);
        console.log("You Won!");
        return ++playerCount;
    } else {
        const computerWinMsg = document.createElement('p');
        computerWinMsg.textContent = "Computer Won!";
        gameInfoElement.appendChild(computerWinMsg);
        console.log("Computer Won!");
        return ++computerCount;
    }
}

let gameInProgress = true; // Flag to track game state

// ...

function restartGame() {
  if (gameInProgress) {
    return; // Only restart the game if it's already over
  }

  // Reset the player count, computer count, and round count
  playerCount = 0;
  computerCount = 0;
  roundCount = 0;

  // Clear game information displayed on the webpage
  gameInfoElement.innerHTML = '';

  // Update player score display
  playerScoreMsg.innerText = "Your score is " + playerCount;

  // Update computer score display
  computerScoreMsg.innerText = "Computer score is " + computerCount;

  // Reset the game state flag
  gameInProgress = true;

  // Add event listener to the buttons again
  btnRock.addEventListener("click", btnClick);
  btnPaper.addEventListener("click", btnClick);
  btnScissors.addEventListener("click", btnClick);
}


function finalScore(playerCount, computerCount) {
    if (playerCount === computerCount) {
        const tieGameMsg = document.createElement('h1');
        tieGameMsg.textContent = "The final score of the game is a tie!";
        gameInfoElement.appendChild(tieGameMsg);
        console.log("The final score of the game is a tie!");
    } else if (playerCount > computerCount) {
        const playerWinGameMsg = document.createElement('h1');
        playerWinGameMsg.textContent = "You Won the Game!";
        gameInfoElement.appendChild(playerWinGameMsg);
        console.log("You won the game!");
    } else {
        const computerWinGameMsg = document.createElement('h1');
        computerWinGameMsg.textContent = "You lost the game!";
        gameInfoElement.appendChild(computerWinGameMsg);
        console.log("You lost the game!");
    }

    gameInProgress = false;
    const finalScoreMsg = document.createElement('p');
    finalScoreMsg.textContent = "Click here to restart the game";
    finalScoreMsg.classList.add('restart-game');
    finalScoreMsg.addEventListener('click', restartGame);
    gameInfoElement.appendChild(finalScoreMsg);
}
