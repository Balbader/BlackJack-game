console.log('The game is being built');
/* 1. Create a player object that will be used for both the user and the computer. */
const playerProps = {
	isAlive: false,
	hasBlackJack: false,
	cards: [],
};

/* Initiate player & dealer object */
const player = {...playerProps};
const dealer = {...playerProps};

/* Create cardImg{} object to display card suits */
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

/* Get random number function */
const getRandomNbr = (min, max) => {
	const random = Math.floor((Math.random() * (max - min)) + min);
	return random;
};

/* Create a function that matches the random number with the right card */
const matchCard = (number, playerCard) => {
	const randomNbr = getRandomNbr(2, 12);

	if (number === 2) {
		playerCard.src = cardImages.two[randomNbr];
	}

	if (number === 3) {
		playerCard.src = cardImages.three[randomNbr];
	}

	if (number === 4) {
		playerCard.src = cardImages.four[randomNbr];
	}

	if (number === 5) {
		playerCard.src = cardImages.five[randomNbr];
	}

	if (number === 6) {
		playerCard.src = cardImages.six[randomNbr];
	}

	if (number === 7) {
		playerCard.src = cardImages.seven[randomNbr];
	}

	if (number === 8) {
		playerCard.src = cardImages.eight[randomNbr];
	}

	if (number === 9) {
		playerCard.src = cardImages.nine[randomNbr];
	}

	if (number === 10) {
		playerCard.src = cardImages.ten[randomNbr];
	}

	if (number === 11) {
		playerCard.src = cardImages.eleven[randomNbr];
	}
};

/* Deal a new random card function */
const dealNewCard = () => {
	const newCard = getRandomNbr(2, 12);
	return newCard;
};

/* Calculate the sum of all cards  */
const calculateSum = array => {
	const sum = array.reduce((left, right) => (left + right), 0);
	const playerTotal = document.querySelector('#player-total');
	playerTotal.textContent = 'Player Total: ' + sum;
	return sum;
};

/* Add resetGame() fumction to new game btn */
const resetGame = playerProps => {
	const newGame = document.querySelector('new-game');
	newGame.addEventListener('click', () => {
		start.disabled = false;
		playerProps.isAlive = true;
		playerProps.hasBlackJack = false;
		playerProps.cards = [];
	});
};

/* Create a function checkPlayerStatus() */
const checkPlayerStatus = (sum, playerProps) => {
	const gameMessage = document.querySelector('#message-el');
	let message = '';

	if (sum <= 20) {
		message = 'Hit?';
	} else if (sum === 21) {
		message = 'BlackJack!!';
		playerProps.hasBlackJack = true;
		resetGame();
	} else {
		message = 'You Loose :(';
		playerProps.isAlive = false;
		resetGame();
	}

	gameMessage.textContent = message;
};

/* Create a function hit() to draw a new card */
const hit = array => {
	const newCard = document.querySelector('#new-card');

	if (player.isAlive === true && player.hasBlackJack === false) {
		newCard.addEventListener('click', () => {
			const card = dealNewCard();
			array.push(card);
			const totalSum = calculateSum(array);
			checkPlayerStatus(totalSum);
		});
	}
};

/* Create a function startGame() that allow us to draw a set of two cards per player and assign them to each player */
const startGame = () => {
	const start = document.querySelector('#start');
	const playerCard1 = document.querySelector('#pl-1');
	const playerCard2 = document.querySelector('#pl-2');

	start.addEventListener('click', () => {
		/* Disable Start Game btn */
		start.disabled = true;

		/* Deal a new card 2 times and assign them to player cards array */
		const card1 = dealNewCard();
		const card2 = dealNewCard();

		player.cards.push(card1, card2);
		console.log(player.cards);

		matchCard(card1, playerCard1);
		matchCard(card2, playerCard2);
		let totalSum = calculateSum(player.cards);
		checkPlayerStatus(totalSum);
	});
};

startGame();
