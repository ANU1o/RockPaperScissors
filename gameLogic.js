const { floor, random } = Math;

const rock = "🪨";
const paper = "📃";
const scissors = "✂️";

goFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
};

var tries = 10;
var tryHolder = document.getElementById("try-holder");
var choiceHolder = document.getElementById("choices");
var playerScore = 0;
var playerScoreHolder = document.getElementById("PCount");
var computerScore = 0;
var computerScoreHolder = document.getElementById("CCount");
var choices = [rock, paper, scissors];
var result = document.getElementById("result");

playerScoreHolder.innerText = playerScore;
computerScoreHolder.innerText = computerScore;
tryHolder.innerText = tries;

function playGame(playerChoice) {
  var computerChoice = choices[floor(random() * choices.length)];
  if (playerChoice == computerChoice) {
    tries--;
    tryHolder.innerText = tries;
    choiceHolder.style.color = "var(--fg)";
    choiceHolder.innerHTML = `${playerChoice} <i class="fa-solid fa-equals"></i> ${computerChoice}`;
  } else if (
    (playerChoice == rock && computerChoice == scissors) ||
    (playerChoice == paper && computerChoice == rock) ||
    (playerChoice == scissors && computerChoice == paper)
  ) {
    playerScore++;
    playerScoreHolder.innerText = playerScore;
    tries--;
    tryHolder.innerText = tries;
    choiceHolder.style.color = "var(--player)";
    choiceHolder.innerHTML = `${playerChoice} <i class="fa-solid fa-check"></i> ${computerChoice}`;
  } else {
    computerScore++;
    computerScoreHolder.innerText = computerScore;
    tries--;
    tryHolder.innerText = tries;
    choiceHolder.style.color = "var(--computer)";
    choiceHolder.innerHTML = `${playerChoice} <i class="fa-solid fa-xmark"></i> ${computerChoice}`;
  }

  if (tries == 0) {
    if (playerScore == computerScore) {
      result.innerText = "Match Tied";
      result.style.color = "var(--fg)";
      dialogBox.style.display = "flex";
    } else if (playerScore > computerScore) {
      result.innerText = "You Wins";
      result.style.color = "var(--player)";
      dialogBox.style.display = "flex";
    } else {
      result.innerText = "You Lost";
      result.style.color = "var(--computer)";
      dialogBox.style.display = "flex";
    }
  }
}

reset = () => {
  tries = 10;
  playerScore = 0;
  computerScore = 0;
  playerScoreHolder.innerText = playerScore;
  computerScoreHolder.innerText = computerScore;
  tryHolder.innerText = tries;
  dialogBox.style.display = "none";
  choiceHolder.style.color = "var(--fg)";
  choiceHolder.innerHTML = `<i class="fa-solid fa-circle"></i>`;
};
