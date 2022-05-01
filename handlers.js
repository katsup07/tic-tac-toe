import { playAgainstComputer, quitPlayingAgainstComputer, clearBoard, toggleComputerPlayerValue } from './lib.js';
/* import { computerPlayer } from './elements.js'; */

export function playComputerhandler() {
  if (this.textContent === 'Play Against Computer') {
    toggleComputerPlayerValue();
    playAgainstComputer();
  } else if (this.textContent === 'Quit Playing Computer') {
    toggleComputerPlayerValue();
    quitPlayingAgainstComputer();
  } else {
    console.log("Oops. something went wrong!")
  }
}

export function clearBoardHandler(event) {
  if (this === 'Window') return clearBoard();
  if (event.key === 'Escape' || event.pointerId === 1) clearBoard();
}
