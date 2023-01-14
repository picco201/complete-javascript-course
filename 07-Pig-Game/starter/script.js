'use strict';
//selecting element
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');

//condition start
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
const score = [0, 0];
let playing = true;
const init = function () {
  currentScore = 0;
  activePlayer = 0;
  score[0] = 0;
  score[1] = 0;
  playing = true;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;

  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;

  player1El.classList.remove('player--winner');
  player2El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
  player2El.classList.remove('player--active');
  player1El.classList.add('player--active');
};
init();

function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  document.getElementById('current--0').textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1El.classList.toggle('player--active');
  player2El.classList.toggle('player--active');
}

//rolling dice function
btnRoll.addEventListener('click', function () {
  if (playing) {
    //generating new dice
    let diceNum = Math.trunc(Math.random() * 6 + 1);
    console.log(diceNum);
    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNum}.png`;
    //check if the dice is 1
    if (diceNum != 1) {
      //add to current score and display current score
      currentScore += diceNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//hold function
btnHold.addEventListener('click', function () {
  if (playing) {
    //add score to users
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    //check score >=100
    if (score[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', init);
