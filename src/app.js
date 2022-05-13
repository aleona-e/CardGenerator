/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateCard();
  //every 3 secs
  setInterval(generateCard, 3000);
};

window.generateNewCard = function() {
  generateCard();
};

function generateCard() {
  const card = document.getElementById("card");
  card.style.backgroundColor = "white";
  card.style.width = "250px";
  card.style.height = "350px";

  let suits = ["♦", "♥", "♠", "♣"];
  let values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  generateSuit(suits);
  generateValue(values);
}

function generateSuit(suits) {
  let randomNumber = Math.random() * suits.length;
  let randomInt = Math.floor(randomNumber);
  let suit = suits[randomInt];
  let topLeftSymbol = document.getElementById("topLeftSymbol");
  let bottomRightSymbol = document.getElementById("bottomRightSymbol");

  topLeftSymbol.innerHTML = suits[randomInt];
  bottomRightSymbol.innerHTML = suits[randomInt];

  if (suit === "♦" || suit === "♥") {
    topLeftSymbol.style.color = "red";
    bottomRightSymbol.style.color = "red";
  } else {
    topLeftSymbol.style.color = "black";
    bottomRightSymbol.style.color = "black";
  }
}

function generateValue(values) {
  let randomNumber = Math.random() * values.length;
  let randomInt = Math.floor(randomNumber);

  document.getElementById("number").innerHTML = values[randomInt];
}
