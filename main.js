let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice;
    do {
        choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    } while (!['rock', 'paper', 'scissors'].includes(choice));
    return choice;
}

function playRound(humanChoice, computerChoice) {
    const resultText = document.getElementById("resultText");
    const playerScoreElement = document.getElementById("playerScore");
    const computerScoreElement = document.getElementById("computerScore");

    if(humanScore === 5 || computerScore === 5) {
        resultText.textContent = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
        return;
    }
    else if (humanChoice === computerChoice) {
        resultText.textContent = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
        playerScoreElement.textContent = `Player Score: ${humanScore}`;
    } else {
        resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
        computerScoreElement.textContent = `Computer Score: ${computerScore}`;
    }
}

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});