const result = document.querySelector("#result");
const myScore = document.querySelector("#my-score");
const machineScore = document.querySelector("#machine-score");
const resetButton = document.querySelector(".reset-button");

let myScoreCounter = 0;
let machineScoreCounter = 0;

const myPlay = (playerChoice) => {
  const machine = machinePlay();
  console.log("Minha jogada: " + playerChoice);
  console.log("Jogada da máquina: " + machine);
  gameRules(playerChoice, machine);
};

const machinePlay = () => {
  const choice = ["rock", "paper", "scissors"];
  const machineChoice = Math.floor(Math.random() * 3);
  return choice[machineChoice];
};

const gameRules = (player, machine) => {
  const machineChoice = document.querySelector("#machine-choice");
  machineChoice.innerHTML = `Alexa chose ${machine}!`;

  if (player === machine) {
    result.innerHTML = "It's a draw game!";
  } else if (
    (player === "rock" && machine === "scissors") ||
    (player === "scissors" && machine === "paper") ||
    (player === "paper" && machine === "rock")
  ) {
    result.innerHTML = "Winner!";
    myScoreCounter++;
    myScore.innerHTML = myScoreCounter;
  } else {
    result.innerHTML = "You Lost!";
    machineScoreCounter++;
    machineScore.innerHTML = machineScoreCounter;
  }
};

const resetScore = () => {
  result.innerHTML = "";
  machineScore.innerHTML = "0";
  myScore.innerHTML = "0";
  myScoreCounter = 0;
  machineScoreCounter = 0;
};
