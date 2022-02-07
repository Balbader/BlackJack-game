console.log('The game is being built');
/* 1. Create a player object that will be used for both the user and the computer. */
const newPlayer = {
	isAlive: false,
	hasBlackJack: false,
	cards: [],
};

const player1 = Object.create(newPlayer);
const computer = Object.create(newPlayer);

/* Get random number function */
const getRandomNbr = (min, max) => {
	const random = Math.floor((Math.random() * (max - min)) + min);

	if (random === 1) {
		return 11;
	}

	if (random > 10) {
		return 10;
	}

	return random;
};

/* Deal a new random card function */
const dealNewCard = () => {
	const newCard = getRandomNbr(2, 12);
	return newCard;
};

/* Create a function startGame() that allow us to draw a set of two cards per player and assign them to each player */
const startGame = () => {
	const start = document.querySelector('#start');

	start.addEventListener('click', () => {

	});
};
