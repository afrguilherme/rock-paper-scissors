const result = document.getElementById("result");
const myScore = document.getElementById("my-score");
const machineScore = document.getElementById("machine-score");
const resetButton = document.getElementsByClassName("reset-button");
const machineChoice = document.getElementById("machine-choice");

let myScoreNumber = 0;
let machineScoreNumber = 0;

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  const machineChoice = document.getElementById("machine-choice");
  if (machine === "rock") {
    machineChoice.innerHTML = "Alexa chose rock!";
  } else if (machine === "paper") {
    machineChoice.innerHTML = "Alexa chose paper!";
  } else {
    machineChoice.innerHTML = "Alexa chose scissors!";
  }

  if (human === machine) {
    result.innerHTML = "It's a draw game!";
  } else if (
    (human === "rock" && machine === "scissors") ||
    (human === "scissors" && machine === "paper") ||
    (human === "paper" && machine === "rock")
  ) {
    result.innerHTML = "Winner!";

    myScoreNumber++;
    myScore.innerHTML = myScoreNumber;
  } else {
    result.innerHTML = "You lost!";
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
  }
};

const resetScore = () => {
  myScore.innerHTML = "0";
  machineScore.innerHTML = "0";
  result.innerHTML = "";
  machineChoice.innerHTML = "";
  myScoreNumber = 0;
  machineScoreNumber = 0;
};
