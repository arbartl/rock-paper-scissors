// Choose a random option for the computer
let computerChoice = computerPlay();

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

do {
    playerChoice = prompt("Please enter your choice:");
    playerChoice = playerChoice.toLowerCase();
}
while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors");

console.log(`You chose ${playerChoice}`);
// Compare the two choices to determine a winner

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return "Paper covers Rock. You Lose!";
        } else {
            return "Rock crushes Scissors. You Win!";
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Scissors cut Paper. You Lose!";
        } else {
            return "Paper covers Rock. You Win!";
        }
    } else {
        if (computerChoice === "rock") {
            return "Rock crushes Scissors. You Lose!";
        } else {
            return "Scissors cut Paper. You Win!";
        }
    }
}

console.log(playRound(playerChoice, computerChoice));
// Announce who won the game