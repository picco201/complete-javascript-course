'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let userScore = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No number!';
  } else if (guess === secretNumber) {
    //player win
    document.querySelector('.message').textContent = 'Correct number 🎊🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (userScore > highScore) {
      highScore = userScore;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess wrong
  } else if (guess != secretNumber) {
    if (userScore > 0) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high' : 'Too low';
      userScore--;
      document.querySelector('.score').textContent = userScore;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  }
  //   else if (guess > secretNumber) {
  //     //number too high
  //     if (userScore > 0) {
  //       document.querySelector('.message').textContent = 'Too high';
  //       userScore--;
  //       document.querySelector('.score').textContent = userScore;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //     }
  //   } else if (guess < secretNumber) {
  //     //number too low
  //     if (userScore > 0) {
  //       document.querySelector('.message').textContent = 'Too low';
  //       userScore--;
  //       document.querySelector('.score').textContent = userScore;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  let userScore = 20;
  document.querySelector('.score').textContent = userScore;
  document.querySelector('.message').textContent = 'Guess a number';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = userScore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
