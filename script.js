"use strict";

// DOM elements
const board = document.querySelector(`.board`);
const buttons = document.querySelectorAll(`.buttons`);
const setSize = document.querySelector(`.set-size`);
const eraser = document.querySelector(`.eraser`);
const reset = document.querySelector(`.reset`);

let color = `black`;

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

    square.addEventListener(`mouseover`, colorSquare);
    square.style.backgroundColor = `blue`;
    board.insertAdjacentElement(`beforeend`, square);
  }
}
populateBoard(20);

// Populate board limit
function changeSize(input) {
  if (input >= 2 && input <= 100) {
    populateBoard(input);
  } else {
    alert(`Please enter a value between 2 and 100`);
  }
}

//Color function
function colorSquare() {
  this.style.backgroundColor = color;
}

// Change color of mousehover
function changeColor(choice) {
  color = choice;
}

// White button
eraser.addEventListener(`click`, function () {
  changeColor(`white`);
});

// Reset board
function resetBoard() {
  reset.addEventListener(`click`, function () {
    populateBoard(20);
    changeColor(`black`);
  });
}
resetBoard();
