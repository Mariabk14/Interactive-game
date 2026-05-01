const refs = {
    buttons : document.querySelectorAll('.button-game'),
 resultText : document.querySelector('.game-text'),
 compScoreEl : document.getElementById('.comp-score'),
 userScoreEl : document.getElementById('.user-score'),
}


let compScore = 0;
let userScore = 0;

const choices = ['rock', 'scissors', 'paper'];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getWinner(user, computer) {
  if (user === computer) return 'draw';

  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'scissors' && computer === 'paper') ||
    (user === 'paper' && computer === 'rock')
  ) {
    return 'user';
  } else {
    return 'computer';
  }
}

refs.buttons.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();

    const winner = getWinner(userChoice, computerChoice);

    if (winner === 'user') {
      userScore++;
      refs.resultText.textContent = `Ви виграли! (${userChoice} > ${computerChoice})`;
    } else if (winner === 'computer') {
      compScore++;
      refs.resultText.textContent = `Комп'ютер виграв! (${computerChoice} > ${userChoice})`;
    } else {
      refs.resultText.textContent = `Нічия! (${userChoice} = ${computerChoice})`;
    }

    refs.compScoreEl.textContent = compScore;
    refs.userScoreEl.textContent = userScore;
  });
});
