// Choose a random option for the computer
let computerChoice;
let playerScore = 0;
let computerScore = 0;

const yourIcon = document.getElementById('your-graphic');
const computerIcon = document.getElementById('computer-graphic');

function drawScoreboard () {
    const playerScoreBoard = document.querySelector('#player-score-board');
    for (let i = 0; i < 5; i++) {
        const scoreBox = document.createElement('div');
        scoreBox.classList.add('score-box');
        scoreBox.classList.add('box');
        scoreBox.setAttribute("id", `ps-${i+1}`);
        scoreBox.style.height = "20px";
        scoreBox.style.width = "20px";
        playerScoreBoard.appendChild(scoreBox);
    }

    const computerScoreBoard = document.querySelector('#computer-score-board');
    for (let i = 0; i < 5; i++) {
        const scoreBox = document.createElement('div');
        scoreBox.classList.add('score-box');
        scoreBox.classList.add('box');
        scoreBox.setAttribute("id", `cs-${i+1}`);
        scoreBox.style.height = "20px";
        scoreBox.style.width = "20px";
        computerScoreBoard.appendChild(scoreBox);
    }
    clearScoreboard();
}

drawScoreboard();

function clearScoreboard () {
    for (let i = 1; i < 6; i++) {
        const pBox = document.querySelector(`#ps-${i}`);
        const cBox = document.querySelector(`#cs-${i}`);
        pBox.style.backgroundColor = "#0E0B16";
        cBox.style.backgroundColor = "#0E0B16";
    }
    const resultsArea = document.querySelector('#results-box');
        updateResults("Waiting for your choice...", "#E7DFDD");
}

function computerPlay () {
    let randInt = Math.floor((Math.random() * 10) + 1);
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
        case 7:
        case 8:
            computerIcon.src = `images/lizard.png`;
            return "lizard";
            break;
        case 9:
        case 10:
            computerIcon.src = 'images/spock.png';
            return "spock";
            break;
    }
}
// Ask the player to enter their choice

let playerChoice;


const buttons = document.querySelectorAll('.choice-button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        yourIcon.src = `images/${button.id}.png`;
        console.log(playRound(playerChoice, computerChoice));        
    })
});

// Compare the two choices to determine a winner


function playRound(playerChoice, computerChoice) {
    computerChoice = computerPlay();
    if (playerChoice === computerChoice) {
        updateResults("It's a tie!", "#E7DFDD");        
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            updateResults("Paper covers Rock. You Lose!", "red");
        }  else if (computerChoice === "spock") {
            computerScore++;
            updateResults("Spock vaporizes Rock. You Lose!", "red");
        } else if (computerChoice === "scissors") {
            playerScore++;
            updateResults("Rock crushes Scissors. You Win!", "green");
        } else if (computerChoice === "lizard") {
            playerScore++;
            updateResults("Rock crushes Lizard. You Win!", "green");
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++;
            updateResults("Scissors cut Paper. You Lose!", "red");
        } else if (computerChoice === "lizard") {
            computerScore++;
            updateResults("Lizard eats Paper. You Lose!", "red");
        } else if (computerChoice === "rock") {
            playerScore++;
            updateResults("Paper covers Rock. You Win!", "green");
        }  else if (computerChoice === "spock") {
            playerScore++;
            updateResults("Paper disproves Spock. You Win!", "green");
        }
    } else if (playerChoice === "scissors" ) {
        if (computerChoice === "rock") {
            computerScore++;
            updateResults("Rock crushes Scissors. You Lose!", "red");
        } else if (computerChoice === "spock") {
            computerScore++;
            updateResults("Spock smashes Scissors. You Lose!", "red");
        } else if (computerChoice === "paper") {
            playerScore++;
            updateResults("Scissors cut Paper. You Win!", "green");
        } else if (computerChoice === "lizard") {
            playerScore++;
            updateResults("Scissors decapitate Lizard. You Win!", "green");
        }
    } else if (playerChoice === "lizard" ) {
        if (computerChoice === "rock") {
            computerScore++;
            updateResults("Rock crushes Lizard. You Lose!", "red");
        } else if (computerChoice === "scissors") {
            computerScore++;
            updateResults("Scissors decapitate Lizard. You Lose!", "red");
        } else if (computerChoice === "spock") {
            playerScore++;
            updateResults("Lizard poisons Spock. You Win!", "green");
        } else if (computerChoice === "paper") {
            playerScore++;
            updateResults("Lizard eats Paper. You Win!", "green");
        }
    } else if (playerChoice === "spock" ) {
        if (computerChoice === "lizard") {
            computerScore++;
            updateResults("Lizard poisons Spock. You Lose!", "red");
        } else if (computerChoice === "paper") {
            computerScore++;
            updateResults("Paper disproves Spock. You Lose!", "red");
        } else if (computerChoice === "rock") {
            playerScore++;
            updateResults("Spock vaporizes Rock. You Win!", "green");
        } else if (computerChoice === "scissors") {
            playerScore++;
            updateResults("Spock smashes Scissors. You Win!", "green");
        }
    }
    updateScoreBoard();
}

function updateScoreBoard() {
    if (playerScore > 0 && playerScore <= 5) {
        const playerScoreBox = document.querySelector(`#ps-${playerScore}`);
        playerScoreBox.style.backgroundColor = "#A239CA";
    }

    if (computerScore > 0 && computerScore <= 5) {
        const computerScoreBox = document.querySelector(`#cs-${computerScore}`);
        computerScoreBox.style.backgroundColor = "#A239CA";
    }

    if (playerScore == 5) {
        const resultsArea = document.querySelector('#results-box');
        updateResults("YOU WIN!", "dark-green");
        const choiceButtons = document.querySelectorAll('.choice-button');
        choiceButtons.forEach((button) => {
            button.disabled = true;
        });
    } else if (computerScore == 5) {
        const resultsArea = document.querySelector('#results-box');
        updateResults("YOU LOSE!", "dark-red");
        const choiceButtons = document.querySelectorAll('.choice-button');
        choiceButtons.forEach((button) => {
            button.disabled = true;
        });
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
    clearScoreboard();
    const choiceButtons = document.querySelectorAll('.choice-button');
        choiceButtons.forEach((button) => {
            button.disabled = false;
        });
    yourIcon.src = 'images/question.png';
    computerIcon.src = 'images/question.png';
}

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {
    resetGame();
})