export const boxes = [...document.querySelectorAll('.box')].map((box) => box);
export const clearBoardBtn = document.querySelector('.clear-board');
export const clearLastMoveBtn = document.querySelector('.clear-last-move');
export const resetScoreBtn = document.querySelector('.reset-score');
export const changeBoardColorBtn = document.querySelector('.change-board-color');
export const playAgainstComputerBtn = document.querySelector('.play-against-computer');
export const changeXandOcolorBtn = document.querySelector('.change-x-and-o-color');
export const modalOuter = document.querySelector('.modal-outer');
export const modalInner = document.querySelector('.modal-inner');
export const [xScore, oScore] = [document.querySelector('#X'), document.querySelector('#O')];
// eslint-disable-next-line prefer-const
// eslint-disable-next-line import/no-mutable-exports
/* export let computerPlayer = false; */
