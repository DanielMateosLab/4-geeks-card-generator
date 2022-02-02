/* eslint-disable */
import "bootstrap";
import "./style.css";

const CARD_SIZE_RATIO = 0.7143;
const CARD_VALUES = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const CARD_SUITS = [
  { color: "red", suit: "♥" },
  { color: "red", suit: "♦" },
  { color: "black", suit: "♣" },
  { color: "black", suit: "♠" }
];

window.onload = function() {
  shuffleCards();
};

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function shuffleCards() {
  const value = pickRandom(CARD_VALUES);
  const { color, suit } = pickRandom(CARD_SUITS);

  document.querySelectorAll(".suit").forEach(element => {
    element.style.color = color;
    element.innerHTML = suit;
  });

  document.querySelector(".value").innerHTML = value;
}
