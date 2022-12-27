"use strict";

// DOM elements
const board = document.querySelector(`.board`);
const buttons = document.querySelectorAll(`.buttons`);
board.style.gridTemplateColumns = `repeat(16, 1fr)`;
board.style.gridTemplateRows = `repeat(16, 1fr)`;

// Populate board function here

// create 16x16 grid - put this into a function
//size
for (let i = 0; i < 256; i++) {
  let square = document.createElement(`div`);
  // hover effect
  square.addEventListener(`mouseover`, function () {
    square.setAttribute(`style`, `background-color: black`);
  });
  square.style.background = `blue`;
  board.insertAdjacentElement(`beforeend`, square);
}

// hover color change function
// board.addEventListener(`mouseover`, function () {
//   board.setAttribute(`style`, `background-color: black`);
// });

/*
Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
There are multiple ways to change the color of the divs, including:
adding a new class to the div.
changing the div’s background color using JavaScript.
*/
