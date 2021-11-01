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

function playerPlay() {
    do {
        playerChoice = prompt("Please enter your choice:");
        playerChoice = playerChoice.toLowerCase();
    }
    while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors");
    return playerChoice;
}

// Compare the two choices to determine a winner

function playRound(playerChoice, computerChoice) {
    computerChoice = computerPlay();
    playerChoice = playerPlay();
    if (playerChoice === computerChoice) {
        playerScore++;
        computerScore++
        return "It's a tie!";
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            return "Paper covers Rock. You Lose!";
        } else {
            playerScore++;
            return "Rock crushes Scissors. You Win!";
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++;
            return "Scissors cut Paper. You Lose!";
        } else {
            playerScore++;
            return "Paper covers Rock. You Win!";
        }
    } else {
        if (computerChoice === "rock") {
            computerScore++;
            return "Rock crushes Scissors. You Lose!";
        } else {
            playerScore++;
            return "Scissors cut Paper. You Win!";
        }
    }
}

// Play 5 Rounds

let playerScore;
let computerScore;

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