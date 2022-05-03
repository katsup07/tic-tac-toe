import { nextRound } from './lib.js';

export function nextRoundHandler(event) {
  if (event.key === 'Escape' || event.pointerId === 1 || event.pointerId === 0 || this === 'Window') nextRound();
}
