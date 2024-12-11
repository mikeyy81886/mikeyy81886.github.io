const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    // Display both player and computer choices
    playerChoiceDisplay.textContent = playerChoice;
    computerChoiceDisplay.textContent = computerChoice;
    resultDisplay.textContent = result;
  });
});

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}