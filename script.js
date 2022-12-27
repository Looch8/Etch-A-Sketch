"use strict";

// DOM elements
const board = document.querySelector(`.board`);
const buttons = document.querySelectorAll(`.buttons`);

// Populate board function here

// create 16x16 grid - put this into a function
function populateBoard(size) {
  let squares = board.querySelectorAll(`div`);
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement(`div`);
    // hover effect
    square.addEventListener(`mouseover`, function () {
      square.setAttribute(`style`, `background-color: black`);
    });
    square.style.background = `blue`;
    board.insertAdjacentElement(`beforeend`, square);
  }
}
populateBoard(45);
