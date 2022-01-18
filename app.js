// Create player object
const player = {
	name: 'Sarah',
	chips: 150,
	isAlive: false,
	hasBlackJack: false,
};

const cards = document.querySelector('#cards');
const sumElement = document.querySelector('#sum-el');
const messageElement = document.querySelector('#message-el');
const newCard = document.querySelector('#new-card');
const start = document.querySelector('#start');
const resetBtn = document.createElement('button');
const playerElement = document.querySelector('#player-el');

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
	resetBtn.disabled = true;
	newCard.disabled = false;
	player.isAlive = true;

	const allCards = [];
	console.log('startGame():', allCards);

	newCard.addEventListener('click', () => {
		drawNewCard(allCards);
		console.log(allCards);
	});

	drawNewCard(allCards);
	drawNewCard(allCards);
};

// Draw a new card
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

// Reset the game
const reset = () => {
	resetBtn.disabled = false;
	resetBtn.innerHTML = 'NEW GAME';

	const btns = document.querySelector('#btns')
	btns.append(resetBtn);

	resetBtn.addEventListener('click', () => {
		startGame();
		console.log('clicked');
	});
};

// Chec player status
const checkPlayerStatus = sum => {
	let message = '';

	if (sum <= 20) {
		message = 'Hit?';
	} else if (sum === 21) {
		message = 'BlackJack!';
		player.hasBlackJack = true;
		reset();
	} else {
		message = 'You Loose!';
		player.isAlive = false;
		reset();
	}

	messageElement.textContent = message;
};

// Start a new game
start.addEventListener('click', () => {
	startGame();
});

