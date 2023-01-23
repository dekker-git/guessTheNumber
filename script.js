"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = "?";
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //
  //when guess is not a number, or there was no input
  //
  if (!guess) {
    document.querySelector(".message").textContent = "No number inputted!";
    //
    // when guess is correct
    //
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct number!!";

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.backgroundColor = "green";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    } else {
    }
    //
    //when guess is too high
    //
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
    //
    // when guess is too low
    //
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing..";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".number").style.backgroundColor = "white";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
});
