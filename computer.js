console.log('hello world!');
console.log('hello world!');
const computer = {
  isAlive: false,
  hasBlackJack: false,
};

const computerScore = document.querySelector('#computer-total');
const computerHand = document.querySelector('#computer-cards');
const computerPlay = document.querySelector('#computer-play');
const messageElement = document.querySelector('#message-el');

// Array to hold computer cards
const computerCards = [];

// Get random card
const getRandomCard = (min, max) => {
  const random = Math.floor(((Math.random() * (max - min)) + min));

  if (random === 1) {
    return 11;
  }

  if (random > 10) {
    return 10;
  }

  return random;
};

// Computer turn
const computerTurn = () => {
  computer.isAlive = true;
  computer.hasBlackJack = false;

  dealNewCard(computerCards);
  dealNewCard(computerCards);
  console.log(computerCards);
};

// Deal new card
const dealNewCard = array => {
  if (computer.isAlive === true && computer.hasBlackJack === false) {
    const card = getRandomCard(1, 11);
    array.push(card);
    computerHand.textContent = array;
  }

  const computerTotalScore = array.reduce((left, right) => (left + right), 0);
  computerScore.textContent = 'Computer Total: ' + computerTotalScore;

  checkComputerStatus(computerTotalScore);
};

// Check Computer Status
const checkComputerStatus = computerTotalScore => {
  let message = '';

  if (computerTotalScore <= 20) {
    message = 'Hit?';
  } else if (computerTotalScore === 21) {
    message = 'BlackJack!';
    computer.hasBlackJack = true;
  } else {
    message = 'Computer Lost!';
    computer.isAlive = false;
  }

  //if (computerTotalScore > 21) {
  //computer.isAlive = false;
  //}

  //if (computerTotalScore <= 19) {
  //computer.isAlive = true;
  //computer.hasBlackJack = false;
  //dealNewCard(computerCards);
  //}

  //if (computerTotalScore === 20) {
  //message = 'That\'s it for us!';
  //}

  //if (computerTotalScore === 21) {
  //message = 'BlackJack!!';
  //computer.hasBlackJack = true;
  //}

  messageElement.textContent = message;
};

computerPlay.addEventListener('click', () => {
  computerTurn();
});

