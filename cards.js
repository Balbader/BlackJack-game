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

// Get random number
const getRandomNbr = (min, max) => {
	const random = Math.floor((Math.random() * (max - min)) + min);
	return random;
};

const randNbr = getRandomNbr(2, 12);
console.log('randNbr: ', randNbr);

// Get random card
const getRandomCard = object => {
	const cardEntries = Object.entries(object);
	const randomCard = Math.floor((Math.random() * cardEntries.length));
	return cardEntries[randomCard][1];
};

// Change Image
const changeImg = (element, object) => {
	element.src = getRandomCard(object);
};

