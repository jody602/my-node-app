const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// Get DOM elements
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("game-result");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));

function playRound(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  userChoiceDisplay.textContent = `You chose: ${playerChoice}`;
  computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;

  let result = "";

  if (playerChoice === computerChoice) {
    result = "It’s a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
    playerScore++;
  } else {
    result = "You lose.";
    computerScore++;
  }

  resultDisplay.textContent = `Result: ${result}`;
  userScoreDisplay.textContent = `Your Score: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}