// Choose a random option for the computer
let computerChoice;

function computerPlay () {
    let randInt = Math.floor((Math.random() * 6) + 1);
    switch(randInt) {
        case 1:
        case 2:
            return "rock";
            break;
        case 3:
        case 4:
            return "paper";
            break;
        case 5:
        case 6:
            return "scissors";
            break;
    }
}
// Ask the player to enter their choice

let playerChoice;


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        console.log(playRound(playerChoice, computerChoice));
    })
});

// Compare the two choices to determine a winner
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
    computerChoice = computerPlay();
    if (playerChoice === computerChoice) {
        updateResults("It's a tie!");
        updateScoreBoard();        
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            updateResults("Paper covers Rock. You Lose!");
            updateScoreBoard();
        } else {
            playerScore++;
            updateResults("Rock crushes Scissors. You Win!");
            updateScoreBoard();
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++;
            updateResults("Scissors cut Paper. You Lose!");
            updateScoreBoard();
        } else {
            playerScore++;
            updateResults("Paper covers Rock. You Win!");
            updateScoreBoard();
        }
    } else {
        if (computerChoice === "rock") {
            computerScore++;
            updateResults("Rock crushes Scissors. You Lose!");
            updateScoreBoard();
        } else {
            playerScore++;
            updateResults("Scissors cut Paper. You Win!");
            updateScoreBoard();
        }
    }
}

function updateScoreBoard() {
    const playerScoreBoard = document.querySelector('#player-score');
    playerScoreBoard.textContent = `Your Score: ${playerScore}`;
    const computerScoreBoard = document.querySelector('#computer-score');
    computerScoreBoard.textContent = `Computer Score: ${computerScore}`;
    if (playerScore == 5) {
        const resultsArea = document.querySelector('#results-box');
        resultsArea.textContent = "YOU WIN!";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        const resultsArea = document.querySelector('#results-box');
        resultsArea.textContent = "YOU LOSE!";
        playerScore = 0;
        computerScore = 0;
    }
}

function updateResults(string) {
    const resultsArea = document.querySelector('#results-box');
    resultsArea.textContent = string;
}

// Play 5 Rounds


/*
function game() {
    let i;
    playerScore = 0;
    computerScore = 0;
    for (i = 0; i < 5; i++) {
        console.log(playRound(playerChoice, computerChoice));
        console.log(`Round ${i+1} / 5 | Your score: ${playerScore} | Computer score: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        return "You win!";
    } else if (playerScore < computerScore) {
        return "You lose!";
    } else {
        return "Tie game!";
    }
}

console.log(game());
*/