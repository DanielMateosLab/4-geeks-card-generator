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
  let autoShuffler = null;
  shuffleCards();

  document
    .querySelector(".shuffle-btn")
    .addEventListener("click", shuffleCards);

  document
    .querySelector("#auto-shuffle")
    .addEventListener("change", function() {
      if (!this.checked) {
        clearInterval(autoShuffler);
      } else {
        autoShuffler = startAutoShuffler();
      }
    });

  const sizeSliderElement = document.querySelector("#size-slider");
  sizeSliderElement.addEventListener("change", function() {
    setCardSize(this.value);
  });

  setCardSize(30);
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

function startAutoShuffler() {
  shuffleCards();

  return setInterval(() => shuffleCards(), 10 * 1000);
}

function setCardSize(vw) {
  const cardElement = document.querySelector(".card");
  const suitElements = document.querySelectorAll(".suit");
  const valueElement = document.querySelector(".value");

  cardElement.style.width = Math.round(vw) + "vw";
  cardElement.style.height = Math.round(vw / CARD_SIZE_RATIO) + "vw";
  suitElements.forEach(
    element => (element.style.fontSize = Math.round(vw / 4) + "vw")
  );
  valueElement.style.fontSize = Math.round(vw / 2) + "vw";
}
