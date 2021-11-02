// Choose a random option for the computer
let computerChoice;

const yourIcon = document.getElementById('your-graphic');
const computerIcon = document.getElementById('computer-graphic');

function computerPlay () {
    let randInt = Math.floor((Math.random() * 6) + 1);
    switch(randInt) {
        case 1:
        case 2:            
            computerIcon.src = `images/rock.png`;
            return "rock";
            break;
        case 3:
        case 4:
            computerIcon.src = `images/paper.png`;
            return "paper";
            break;
        case 5:
        case 6:
            computerIcon.src = `images/scissors.png`;
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
        yourIcon.src = `images/${button.id}.png`;
        console.log(playRound(playerChoice, computerChoice));        
    })
});

// Compare the two choices to determine a winner
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
    computerChoice = computerPlay();
    if (playerChoice === computerChoice) {
        updateResults("It's a tie!", "black");
        updateScoreBoard();        
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            updateResults("Paper covers Rock. You Lose!", "red");
            updateScoreBoard();
        } else {
            playerScore++;
            updateResults("Rock crushes Scissors. You Win!", "green");
            updateScoreBoard();
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++;
            updateResults("Scissors cut Paper. You Lose!", "red");
            updateScoreBoard();
        } else {
            playerScore++;
            updateResults("Paper covers Rock. You Win!", "green");
            updateScoreBoard();
        }
    } else {
        if (computerChoice === "rock") {
            computerScore++;
            updateResults("Rock crushes Scissors. You Lose!", "red");
            updateScoreBoard();
        } else {
            playerScore++;
            updateResults("Scissors cut Paper. You Win!", "green");
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
        updateResults("YOU WIN!", "dark-green");
        resetGame();
    } else if (computerScore == 5) {
        const resultsArea = document.querySelector('#results-box');
        updateResults("YOU LOSE!", "dark-red");
        resetGame();
    }
}

function updateResults(string, color) {
    const resultsArea = document.querySelector('#results-box');
    resultsArea.textContent = string;
    resultsArea.style.color = color;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScoreBoard();
    yourIcon.src = 'images/question.png';
    computerIcon.src = 'images/question.png';
}
