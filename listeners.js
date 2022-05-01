import {
  boxes, clearLastMoveBtn, clearBoardBtn, changeBoardColorBtn, playAgainstComputerBtn, changeXandOcolorBtn, modalOuter, resetScoreBtn
} from './elements.js';
import {
  playerMarkBox, clearLastMove, changeBoardColor, closeModal, resetScore, changeXandOcolors,
} from './lib.js';
import { clearBoardHandler, playComputerhandler } from './handlers.js';

boxes.forEach((box) => box.addEventListener('click', playerMarkBox));
playAgainstComputerBtn.addEventListener('click', playComputerhandler);

window.addEventListener('keydown', clearBoardHandler);
clearBoardBtn.addEventListener('click', clearBoardHandler);
changeBoardColorBtn.addEventListener('click', changeBoardColor);
changeXandOcolorBtn.addEventListener('click', changeXandOcolors);
modalOuter.addEventListener('click', closeModal);
clearLastMoveBtn.addEventListener('click', clearLastMove);
window.addEventListener('keydown', clearLastMove);
resetScoreBtn.addEventListener('click', resetScore);
