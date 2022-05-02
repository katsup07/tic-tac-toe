import {
  boxes, xScore, oScore, modalOuter, modalInner, playAgainstComputerBtn,
} from './elements.js';
import colors from './colors.js';

/* eslint-disable no-debugger */
// eslint-disable-next-line import/no-mutable-exports
/* eslint-disable max-len */

// accesses for the closure data below
const player = PlayerData();
export const ticTacToeColors = ticTacToeColorData();

/// ///////////////////
// color data closure
function ticTacToeColorData() {
  let theXandOcolor = 'rgba(86, 92, 211, 0.700)';

  function getXandOcolor() {
    return theXandOcolor;
  }

  function changeBoardColor() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => box.style.border = `1px solid ${color}`);
  }

  function changeXandOcolors() {
    theXandOcolor = colors[Math.floor(Math.random() * colors.length)];
    boxes.forEach((box) => box.style.color = theXandOcolor);
  }

  return ({ changeBoardColor, changeXandOcolors, getXandOcolor });
}

/// ///////////////
// player data closure
function PlayerData() {
  let computerPlayer = false;
  let alreadyScored = false;
  let lastMove;

  function getComputerPlayer() {
    return computerPlayer;
  }

  function toggleComputerPlayer() {
    computerPlayer ? computerPlayer = false : computerPlayer = true;
    console.log(computerPlayer);
  }

  // Tells whether a point during a round has been scored already or not.
  function getAlreadyScoredPoint() {
    return alreadyScored;
  }

  function setAlreadyScoredPoint(value) {
    alreadyScored = value;
  }

  function getLastMove() {
    return lastMove;
  }

  function setLastMove(value) {
    lastMove = value;
  }

  return ({
    getComputerPlayer, toggleComputerPlayer, getAlreadyScoredPoint, setAlreadyScoredPoint, setLastMove, getLastMove,
  });
}

/// /////
export function playerMarkBox() {
  player.setLastMove(+this.id);// convert from string to number with '+', will be needed as number when undoing last move
  this.style.color = ticTacToeColors.getXandOcolor(); // need to set color since color is transparent initially
  this.textContent !== 'X' ? this.textContent = 'X' : this.textContent = 'O';
  if (!player.getAlreadyScoredPoint()) checkForWinner();
  if (player.getComputerPlayer()) computerMarkBox();
}

function computerMarkBox() {
  // btc is for boxesTextContent
  const btc = boxes.map((box) => (box.textContent ? box.textContent : Math.random()));
  // check if there is a number. If no numbers, all boxes are full of user input('X' or 'O') or computer input('C'), so return to prevent computer from continuing to check for available places infinitely
  const value = btc.some((item) => typeof item === 'number');
  if (value === false) return;
  // computer checks each box randomly until it finds an an empty box to input 'C'. Calls itself over and over until finding one.
  const randomNum = Math.floor(Math.random() * 9);// between 0 and 8
  if (!boxes[randomNum].textContent) {
    boxes[randomNum].textContent = 'C';
    if (!player.getAlreadyScoredPoint()) checkForWinner();
  } else {
    computerMarkBox();
  }
  boxes[randomNum].style.color = ticTacToeColors.getXandOcolor();
}

function checkForWinner() {
  // btc is for boxesTextContent.
  // Return the textContent or if undefined fill it with a random number to avoid undefined === undefined leading to true
  const btc = boxes.map((box) => (box.textContent ? box.textContent : Math.random()));
  console.table(btc);
  // across
  if (btc[0] === btc[1] && btc[1] === btc[2]) displayWinner(btc[0]);
  if (btc[3] === btc[4] && btc[4] === btc[5]) displayWinner(btc[3]);
  if (btc[6] === btc[7] && btc[7] === btc[8]) displayWinner(btc[6]);
  // down
  if (btc[0] === btc[3] && btc[3] === btc[6]) displayWinner(btc[0]);
  if (btc[1] === btc[4] && btc[4] === btc[7]) displayWinner(btc[1]);
  if (btc[2] === btc[5] && btc[5] === btc[8]) displayWinner(btc[2]);
  // diagonal
  if (btc[0] === btc[4] && btc[4] === btc[8]) displayWinner(btc[0]);
  if (btc[2] === btc[4] && btc[4] === btc[6]) displayWinner(btc[2]);
}

function displayWinner(boxTextContent) {
  incrementScore(boxTextContent);
  modalOuter.classList.add('open');
  modalInner.innerHTML = `<h2>${boxTextContent} wins</h2>`;
}

export function closeModal() {
  modalOuter.classList.remove('open');
}

function incrementScore(boxTextContent) {
  console.log(xScore, xScore.textContent);
  let [xValue, oValue] = [+xScore.textContent, +oScore.textContent];
  if (boxTextContent === 'X') xScore.textContent = ++xValue;
  if (boxTextContent === 'O') oScore.textContent = ++oValue;
  if (boxTextContent === 'C') oScore.textContent = ++oValue;
  player.setAlreadyScoredPoint(true);
}

export function playAgainstComputer() {
  clearBoard();
  playAgainstComputerBtn.textContent = 'Quit Playing Computer';
  decideWhoGoesFirst();
}

// Randomly choose whether player or computer go first
function decideWhoGoesFirst() {
  const randomNum = Math.floor(Math.random() * 2);
  if (randomNum === 1) computerMarkBox(); // else, player makes first move
}

export function quitPlayingAgainstComputer() {
  console.log('quit');
  playAgainstComputerBtn.textContent = 'Play Against Computer';
  clearBoard();
}

export function toggleComputerPlayerValue() {
  player.toggleComputerPlayer(); // inside PlayerData() closure
}

// clear and reset functions
export function clearBoard(event) {
  player.setAlreadyScoredPoint(false);
  boxes.forEach((box) => box.textContent = '');
  if (player.getComputerPlayer()) decideWhoGoesFirst();
}
export function resetScore(event) {
  [xScore.textContent, oScore.textContent] = [0, 0];
  clearBoard();
}

export function clearLastMove(event) {
  if (!player.getLastMove()) return;
  if (event.key === 'Backspace' || event.pointerId === 1) {
    boxes[player.getLastMove() - 1].innerText = '';
  }
}
