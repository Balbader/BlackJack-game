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

// Render a game
const startGame = () => {
	start.disabled = true;
	player.isAlive = true;

	const allCards = [];

	newCard.disabled = false;
	newCard.addEventListener('click', () => {
		drawNewCard(allCards);
	});

	drawNewCard(allCards);
	drawNewCard(allCards);
};

// Draw a new card
const drawNewCard = array => {
	let message = '';

	if (player.isAlive === true && player.hasBlackJack === false) {
		const card = getRandomCard(1, 11);
		array.push(card);
		cards.textContent = 'Cards: ' + array;
	}

	const sum = array.reduce((left, right) => (left + right), 0);
	sumElement.textContent = 'Sum: ' + sum;

	if (sum <= 20) {
		message = 'Hit?';
	} else if (sum === 21) {
		message = 'BlackJack!';
		player.hasBlackJack = true;
	} else {
		message = 'You Loose!';
		player.isAlive = false;
	}

	messageElement.textContent = message;
};

// Start a new game
start.addEventListener('click', () => {
	startGame();
});

