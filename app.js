// Create player object
const player = {
	name: 'Sarah',
	chips: 150,
	isAlive: false,
	hasBlackJack: false,
};

const computer = {
	name: 'Computer',
	chips: 150,
	isAlive: false,
	hasBlackJack: false,
}

let allCards = [];
let computerCards = [];

const cards = document.querySelector('#cards');
const compCards = document.querySelector('#computer-cards');
const sumElement = document.querySelector('#sum-el');
const compSum = document.querySelector('#computer-sum');
const messageElement = document.querySelector('#message-el');
const newCard = document.querySelector('#new-card');
const start = document.querySelector('#start');
const newGame = document.querySelector('#new-game');
const playerElement = document.querySelector('#player-el');
const computerCard = document.querySelector('#computer-card');

playerElement.textContent = player.name + ': $' + player.chips;

// Get random card
const getRandomCard = (min, max) => {
	const random = Math.floor((Math.random() * (max - min)) + min);

	if (random === 1) {
		return 11;
	}

	if (random > 10) {
		return 10;
	}

	return random;
};

// Start a game
const startGame = () => {
	start.disabled = true;
	newGame.disabled = true;
	newCard.disabled = false;
	player.isAlive = true;

	allCards = [];

	newCard.addEventListener('click', () => {
		drawNewCard(allCards);
		console.log(allCards);
	});

	drawNewCard(allCards);
	drawNewCard(allCards);
	console.log(allCards);
};

// Computer play
const computerPlay = () => {
	start.disabled = true;
	newGame.disabled = true;
	newCard.disabled = true;
	computer.isAlive = true;

	computerCards = [];
	drawNewCard(computerCards);
	drawNewCard(computerCards);


	if (computerScore < 21) {
		computer.hasBlackJack = false;
		computer.isAlive = true;

		drawNewCard(computerCards);
	} else if (computerScore === 21) {
		computer.hasBlackJack = true;
		console.log('Computer Wins!');
	} else {
		computer.isAlive = false;
		computer.hasBlackJack = false;
		console.log('Computer Loose!');
	}
};

// Draw a new card for player
const drawNewCard = array => {
	if (player.isAlive === true && player.hasBlackJack === false) {
		const card = getRandomCard(1, 11);
		array.push(card);
		cards.textContent = 'Cards: ' + array;
	}

	const sum = array.reduce((left, right) => (left + right), 0);
	sumElement.textContent = 'Sum: ' + sum;

	checkPlayerStatus(sum);
};

// Draw new card for computer
const computerDraw = (arr) => {
	if (computer.isAlive = true && computer.hasBlackJack = false) {
		const card = getRandomCard(1, 11);
		arr.push(card);
		compCards.textContent = 'Computer Cards: ' + arr;
	}

	const computerScore = arr.reduce((left, right) => (left + right), 0);
	compSum.textContent = 'Computer Sum: ' + computerScore;

	checkComputerStatus();
}

// Reset the game
const resetGame = () => {
	newGame.disabled = false;
	newGame.addEventListener('click', () => {
		startGame();
	});
};

// Check player status
const checkPlayerStatus = sum => {
	let message = '';

	if (sum <= 20) {
		message = 'Hit?';
	} else if (sum === 21) {
		message = 'BlackJack!';
		player.hasBlackJack = true;
		newCard.disabled = true;
		resetGame();
	} else {
		message = 'You Loose!';
		player.isAlive = false;
		newCard.disabled = true;
		resetGame();
	}

	messageElement.textContent = message;
};

// Check Computer Status
const checkComputerStatus = computerScore => {
	let message = '';

	if (computerScore < 21) {
		computer.hasBlackJack = false;
		computer.isAlive = true;

		drawNewCard(computerCards);
	} else if (computerScore === 21) {
		computer.hasBlackJack = true;
		computerDraw(computerCards);
		console.log('Computer Wins!');
	} else {
		computer.isAlive = false;
		computer.hasBlackJack = false;
		console.log('Computer Loose!');
	}

	if (computerScore <= 20) {
		message = 'One more hit for Computer!';
		computer.hasBlackJack = false;
		computer.isAlive = true;
	} else if (sum === 21) {
		message = 'BlackJack!';
		player.hasBlackJack = true;
		newCard.disabled = true;
		resetGame();
	} else {
		message = 'You Loose!';
		player.isAlive = false;
		newCard.disabled = true;
		resetGame();
	}

	messageElement.textContent = message;
};

// Start a new game
start.addEventListener('click', () => {
	startGame();
});

