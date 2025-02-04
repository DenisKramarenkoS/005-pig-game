'use strict';
// Functions

function getRandomNumber() {
  return Math.trunc(Math.random() * 6) + 1;
}

function changeSide() {
  players[side].classList.toggle('player__wrap_active');
  side = side === 1 ? 0 : 1;
  players[side].classList.toggle('player__wrap_active');
  currentScores[side].textContent = '0';
  isFirstAttempt = true;
}

function disableBtns() {
  btnRoll.disabled = true;
  btnHold.disabled = true;
}
// Variables
let pointsRoll = 0; // points for one roll
let side = 0;
let isFirstAttempt = true;
// DOM
const btnReset = document.getElementById('-btn__reset');
const btnRoll = document.getElementById('-btn__roll');
const btnHold = document.getElementById('-btn__hold');

const img = document.getElementById('dice');
const currentScores = document.getElementsByClassName('player__current-score');
const players = document.getElementsByClassName('player__wrap');
const playerScores = document.getElementsByClassName('player__score');

btnRoll.addEventListener('click', () => {
  pointsRoll = getRandomNumber();

  if (pointsRoll === 1 && !isFirstAttempt) {
    currentScores[side].textContent = '0';

    changeSide();
    img.src = `assets/images/dice-${pointsRoll}.svg`;
    return;
  } else if (pointsRoll === 1 && isFirstAttempt) {
    changeSide();
    img.src = `assets/images/dice-${pointsRoll}.svg`;
    return;
  }

  img.src = `assets/images/dice-${pointsRoll}.svg`;
  currentScores[side].textContent =
    pointsRoll + Number(currentScores[side].textContent);

  if (Number(playerScores[side].textContent) >= 100) {
    disableBtns();
    return;
  }
  isFirstAttempt = false;
});

btnHold.addEventListener('click', () => {
  playerScores[side].textContent =
    Number(currentScores[side].textContent) +
    Number(playerScores[side].textContent);

  if (Number(playerScores[side].textContent) >= 100) {
    disableBtns();
    return;
  }
  changeSide();
});

btnReset.addEventListener('click', () => {
  setTimeout(() => {
    location.reload();
  }, 200);
});
