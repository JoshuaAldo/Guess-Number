'use strict';
// console.log(document.querySelector('.message').textContent);

//Selecting and manipulating element
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 40;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//handling click event
let correct = Math.trunc(Math.random() * 20) + 1;
console.log(correct);
let score = 20;
let highscore = 0;

const displayMessage = function (message){
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  if (!guess) {
    displayMessage(`⛔ No Number!`)
  } 

  else if (guess === correct) {
    displayMessage(`Correct Number!🎉🎊`);

    document.querySelector('.number').textContent = correct;
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.guess').disabled = true;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } 
  
  else if (guess !== correct) {
    if (score > 1) {
      displayMessage(guess > correct ? 'To high...' : 'To Low...');
      score--;
      document.querySelector('.score').textContent = score;
    } 
    
    else {
      // document.querySelector('.message').textContent = 'You lost the game :(';
      displayMessage('You lost the game :(');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess').disabled = true;
    }
  }

    //   else if (guess < correct) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'To Low...';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game :(';
    //     document.querySelector('.score').textContent = 0;
    //     document.querySelector('.guess').disabled = true;
    //   }
    // } else if (guess > correct) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'To High...';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game :(';
    //     document.querySelector('.score').textContent = 0;
    //     document.querySelector('.guess').disabled = true;
    //   }
// }
});

document.querySelector('.again').addEventListener('click', function () {
  // reset
  correct = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(correct);
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').disabled = false;
  document.querySelector('.guess').value = '';

  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
});
