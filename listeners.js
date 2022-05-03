import {
  boxes, clearLastMoveBtn, nextRoundBtn, changeBoardColorBtn, playAgainstComputerBtn, changeXandOcolorBtn, modalOuter, resetScoreBtn,
} from './elements.js';
import {
  playerMarkBox, clearLastMove, closeModal, resetScore, ticTacToeColors, playAgainstComputer,
} from './lib.js';
import { nextRoundHandler } from './handlers.js';

boxes.forEach((box) => box.addEventListener('click', playerMarkBox));
playAgainstComputerBtn.addEventListener('click', playAgainstComputer);

window.addEventListener('keydown', nextRoundHandler);
nextRoundBtn.addEventListener('click', nextRoundHandler);
changeBoardColorBtn.addEventListener('click', ticTacToeColors.changeBoardColor);
changeXandOcolorBtn.addEventListener('click', ticTacToeColors.changeXandOcolors);
modalOuter.addEventListener('click', closeModal);
clearLastMoveBtn.addEventListener('click', clearLastMove);
window.addEventListener('keydown', clearLastMove);
resetScoreBtn.addEventListener('click', resetScore);
