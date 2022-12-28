"use strict";

// DOM elements
const board = document.querySelector(`.board`);
const buttons = document.querySelectorAll(`.buttons`);
const setSize = document.querySelector(`.set-size`);
const eraser = document.querySelector(`.eraser`);
const reset = document.querySelector(`.reset`);
const black = document.querySelector(`.black`);
const random = document.querySelector(`.random`);

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
    square.style.backgroundColor = `white`;
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
  if (color === `random`) {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

// Change color of mousehover
function changeColor(choice) {
  color = choice;
}

// White button
eraser.addEventListener(`click`, function () {
  changeColor(`white`);
});

// Black button
black.addEventListener(`click`, function () {
  changeColor(`black`);
});

// Rainbow button
random.addEventListener(`click`, function () {
  changeColor(`random`);
});

// Reset board
function resetBoard() {
  reset.addEventListener(`click`, function () {
    populateBoard(20);
    changeColor(`black`);
  });
}
resetBoard();
