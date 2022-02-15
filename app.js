// Create player object
const player = {
	isAlive: false,
	hasBlackJack: false,
	cards: [],
};

let allCards = [];

const cards = document.querySelector('#cards');
const sumElement = document.querySelector('#sum-el');
const messageElement = document.querySelector('#message-el');
const newCard = document.querySelector('#new-card');
const start = document.querySelector('#start');
const newGame = document.querySelector('#new-game');

// Img html tag
const playerCard1 = document.querySelector('#pl-1');
const playerCard2 = document.querySelector('#pl-2');
const computerCard1 = document.querySelector('#cp-1');
const computerCard2 = document.querySelector('#cp-2');

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

// Draw a new card for player
const drawNewCard = array => {
	if (player.isAlive === true && player.hasBlackJack === false) {
		const card = getRandomCard(1, 11);
		array.push(card);
		cards.textContent = 'Cards: ' + array;
	}

	const sum = array.reduce((left, right) => (left + right), 0);
	sumElement.textContent = 'Player Total: ' + sum;

	checkPlayerStatus(sum);
};

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

// Start a new game
start.addEventListener('click', () => {
	startGame();
});

