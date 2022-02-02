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

const eleven = {
	aceOfClubs: './cards/ace_of_clubs.svg',
	aceOfHearts: './cards/ace_of_hearts.svg',
	aceOfSpades: './cards/ace_of_spades.svg',
	aceOfDiamonds: './cards/ace_of_diamonds.svg'
};

const ten = {
	kingOfClubs: './cards/king_of_clubs.svg',
	kingOfHearts: './cards/king_of_hearts.svg',
	kingOfSpades: './cards/king_of_spades.svg',
	kingOfDiamonds: './cards/king_of_diamonds.svg',
	queenOfClubs: './cards/queen_of_clubs.svg',
	queenOfHearts: './cards/queen_of_hearts.svg',
	queenOfSpades: './cards/queen_of_spades.svg',
	queenOfDiamonds: './cards/queen_of_diamonds.svg',
	jackOfClubs: './cards/jack_of_clubs.svg',
	jackOfHearts: './cards/jack_of_hearts.svg',
	jackOfSpades: './cards/jack_of_spades.svg',
	jackOfDiamonds: './cards/jack_of_diamonds.svg',
	tenOfClubs: './cards/10_of_clubs.svg',
	tenOfHearts: './cards/10_of_hearts.svg',
	tenOfSpades: './cards/10_of_spades.svg',
	tenOfDiamonds: './cards/10_of_diamonds.svg'
};

const nine = {
	nineOfClubs: './cards/9_of_clubs.svg',
	nineOfHearts: './cards/9_of_hearts.svg',
	nineOfSpades: './cards/9_of_spades.svg',
	nineOfDiamonds: './cards/9_of_diamonds.svg',
};

const eight = {
	eightOfClubs: './cards/8_of_clubs.svg',
	eightOfHearts: './cards/8_of_hearts.svg',
	eightOfSpades: './cards/8_of_spades.svg',
	eightOfDiamonds: './cards/8_of_diamonds.svg',
};

const seven = {
	sevenOfClubs: './cards/7_of_clubs.svg',
	sevenOfHearts: './cards/7_of_hearts.svg',
	sevenOfSpades: './cards/7_of_spades.svg',
	sevenOfDiamonds: './cards/7_of_diamonds.svg',
};

const six = {
	sixOfClubs: './cards/6_of_clubs.svg',
	sixOfHearts: './cards/6_of_hearts.svg',
	sixOfSpades: './cards/6_of_spades.svg',
	sixOfDiamonds: './cards/6_of_diamonds.svg',
};

const five = {
	fiveOfClubs: './cards/5_of_clubs.svg',
	fiveOfHearts: './cards/5_of_hearts.svg',
	fiveOfSpades: './cards/5_of_spades.svg',
	fiveOfDiamonds: './cards/5_of_diamonds.svg',
};

const four = {
	fourOfClubs: './cards/4_of_clubs.svg',
	fourOfHearts: './cards/4_of_hearts.svg',
	fourOfSpades: './cards/4_of_spades.svg',
	fourOfDiamonds: './cards/4_of_diamonds.svg',
};

const three = {
	threeOfClubs: './cards/3_of_clubs.svg',
	threeOfHearts: './cards/3_of_hearts.svg',
	threeOfSpades: './cards/3_of_spades.svg',
	threeOfDiamonds: './cards/3_of_diamonds.svg',
};

const two = {
	twoOfClubs: './cards/2_of_clubs.svg',
	twoOfHearts: './cards/2_of_hearts.svg',
	twoOfSpades: './cards/2_of_spades.svg',
	twoOfDiamonds: './cards/2_of_diamonds.svg',
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

