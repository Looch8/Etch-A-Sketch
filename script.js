"use strict";

// DOM elements
const board = document.querySelector(`.board`);
board.style.gridTemplateColumns = `repeat(16, 1fr)`;
board.style.gridTemplateRows = `repeat(16, 1fr)`;

// create 16x16 grid
for (let i = 0; i < 256; i++) {
  let square = document.createElement(`div`);
  square.style.background = `blue`;
  board.insertAdjacentElement(`beforeend`, square);
}

// hover color change function
