'use strict';

// Variables
let pointsRoll = 0; // points for one roll

// DOM
const btnRoll = document.getElementById('-btn__roll');
const img = document.getElementById('dice');

btnRoll.addEventListener('click', () => {
  pointsRoll = Math.trunc(Math.random() * 6) + 1;
  img.src = `assets/images/dice-${pointsRoll}.svg`;
});
