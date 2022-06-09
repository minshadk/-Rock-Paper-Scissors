let score = 0;

const imagePath = {
  paper: "./images/icon-paper.svg",
  scissor: "./images/icon-scissors.svg",
  rock: "./images/icon-rock.svg",
};

const resultBorder = {
  paper: "paper-result-border",
  scissors: "scissors-result-border",
  rock: "rock-result-border",
};

const picker = document.querySelector(".picker");
const result = document.querySelector(".result");
const resultText = document.querySelector(".result-text");
const userChoiceImage = document.querySelector(".user-choice-image");
console.log(userChoiceImage);

function userChoice(userChoosed) {
  picker.style.display = "none";
  result.style.display = "flex";
  userChoiceImage.src = imagePath[userChoosed];
  console.log(userChoosed);
  console.log(userChoiceImage);
  houseChoice(userChoosed);
}

function houseChoice(userChoosed) {
  const choices = ["paper", "scissor", "rock"];
  houseChoosed = choices[Math.floor(Math.random() * choices.length)];
  console.log(houseChoosed);
  findWinner(userChoosed, houseChoosed);
}

function findWinner(userChoosed, houseChoosed) {
  //  user wining
  if (userChoosed === "paper" && houseChoosed === "rock")
    console.log("YOU WIN");
  else if (userChoosed === "scissor" && houseChoosed === "paper")
    console.log("YOU WIN");
  else if (userChoosed === "rock" && houseChoosed === "scissor")
    console.log("YOU WIN");
  // draw
  else if (userChoosed === "paper" && houseChoosed === "paper")
    console.log("DRAW");
  else if (userChoosed === "scissor" && houseChoosed === "scissor")
    console.log("DRAW");
  else if (userChoosed === "rock" && houseChoosed === "rock")
    console.log("DRAW");
  // house winning
  else if (userChoosed === "paper" && houseChoosed === "scissor")
    console.log("HOUSE WINS");
  else if (userChoosed === "scissor" && houseChoosed === "rock")
    console.log("HOUSE WINS");
  else if (userChoosed === "rock" && houseChoosed === "paper")
    console.log("HOUSE WINS");
}
