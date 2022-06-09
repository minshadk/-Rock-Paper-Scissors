let score = 0;

const imagePath = {
  paper: "./images/icon-paper.svg",
  scissor: "./images/icon-scissors.svg",
  rock: "./images/icon-rock.svg",
};

const resultBorder = {
  paper: "paper-result-border",
  scissor: "scissor-result-border",
  rock: "rock-result-border",
};

const picker = document.querySelector(".picker");
const result = document.querySelector(".result");
const resultText = document.querySelector(".result-text");
const scoreDigit = document.querySelector(".score-digit");

const userChoiceImage = document.querySelector(".user-choice-image");
const userChoiceRadius = document.querySelector(".user");

const houseChoiceImage = document.querySelector(".house-choice-image");
const houseChoiceRadius = document.querySelector(".house");

function userChoice(userChoosed) {
  picker.style.display = "none";
  result.style.display = "flex";

  // seting image src dynamicaly
  userChoiceImage.src = imagePath[userChoosed];
  //   adding border class dynamicaly
  userChoiceRadius.classList.add(resultBorder[userChoosed]);
  houseChoice(userChoosed);
}

function houseChoice(userChoosed) {
  const choices = ["paper", "scissor", "rock"];
  houseChoosed = choices[Math.floor(Math.random() * choices.length)];
  // seting image src dynamicaly
  houseChoiceImage.src = imagePath[houseChoosed];
  //   adding border class dynamicaly
  houseChoiceRadius.classList.add(resultBorder[houseChoosed]);
  findWinner(userChoosed, houseChoosed);
}

function findWinner(userChoosed, houseChoosed) {
  //  user wining
  if (userChoosed === "paper" && houseChoosed === "rock") {
    setResult("YOU WIN");
    setScore();
  } else if (userChoosed === "scissor" && houseChoosed === "paper") {
    setResult("YOU WIN");
    setScore();
  } else if (userChoosed === "rock" && houseChoosed === "scissor") {
    setResult("YOU WIN");
    setScore();
  }
  // draw
  else if (userChoosed === "paper" && houseChoosed === "paper")
    setResult("DRAW");
  else if (userChoosed === "scissor" && houseChoosed === "scissor")
    setResult("DRAW");
  else if (userChoosed === "rock" && houseChoosed === "rock") setResult("DRAW");
  // house winning
  else if (userChoosed === "paper" && houseChoosed === "scissor")
    setResult("HOUSE WINS");
  else if (userChoosed === "scissor" && houseChoosed === "rock")
    setResult("HOUSE WINS");
  else if (userChoosed === "rock" && houseChoosed === "paper")
    setResult("HOUSE WINS");
}

function setResult(result) {
  resultText.innerHTML = result;
}

function setScore() {
  ++score;
  scoreDigit.innerHTML = score;
}

function playAgain() {
  picker.style.display = "flex";
  result.style.display = "none";
}
