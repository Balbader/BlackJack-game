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

const cardImages = {
	eleven: [
		'./cards/ace_of_clubs.svg',
		'./cards/ace_of_hearts.svg',
		'./cards/ace_of_spades.svg',
		'./cards/ace_of_diamonds.svg',
	],
	ten: [
		'./cards/king_of_clubs.svg',
		'./cards/king_of_hearts.svg',
		'./cards/king_of_spades.svg',
		'./cards/king_of_diamonds.svg',
		'./cards/queen_of_clubs.svg',
		'./cards/queen_of_hearts.svg',
		'./cards/queen_of_spades.svg',
		'./cards/queen_of_diamonds.svg',
		'./cards/jack_of_clubs.svg',
		'./cards/jack_of_hearts.svg',
		'./cards/jack_of_spades.svg',
		'./cards/jack_of_diamonds.svg',
		'./cards/10_of_clubs.svg',
		'./cards/10_of_hearts.svg',
		'./cards/10_of_spades.svg',
		'./cards/10_of_diamonds.svg',
	],
	nine: [
		'./cards/9_of_clubs.svg',
		'./cards/9_of_hearts.svg',
		'./cards/9_of_spades.svg',
		'./cards/9_of_diamonds.svg',
	],
	eight: [
		'./cards/8_of_clubs.svg',
		'./cards/8_of_hearts.svg',
		'./cards/8_of_spades.svg',
		'./cards/8_of_diamonds.svg',
	],
	seven: [
		'./cards/7_of_clubs.svg',
		'./cards/7_of_hearts.svg',
		'./cards/7_of_spades.svg',
		'./cards/7_of_diamonds.svg',
	],
	six: [
		'./cards/6_of_clubs.svg',
		'./cards/6_of_hearts.svg',
		'./cards/6_of_spades.svg',
		'./cards/6_of_diamonds.svg',
	],
	five: [
		'./cards/5_of_clubs.svg',
		'./cards/5_of_hearts.svg',
		'./cards/5_of_spades.svg',
		'./cards/5_of_diamonds.svg',
	],
	four: [
		'./cards/4_of_clubs.svg',
		'./cards/4_of_hearts.svg',
		'./cards/4_of_spades.svg',
		'./cards/4_of_diamonds.svg',
	],
	three: [
		'./cards/3_of_clubs.svg',
		'./cards/3_of_hearts.svg',
		'./cards/3_of_spades.svg',
		'./cards/3_of_diamonds.svg',
	],
	two: [
		'./cards/2_of_clubs.svg',
		'./cards/2_of_hearts.svg',
		'./cards/2_of_spades.svg',
		'./cards/2_of_diamonds.svg',
	],
};

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

