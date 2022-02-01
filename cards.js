
const playerCard1 = document.querySelector('#pl-1');
const playerCard2 = document.querySelector('#pl-2');
const computerCard1 = document.querySelector('#cp-1');
const computerCard2 = document.querySelector('#cp-2');

const cards = {
	aceOfClubs: './cards/ace_of_clubs.svg',
	aceOfHearts: './cards/ace_of_hearts.svg',
	aceOfSpades: './cards/ace_of_spades.svg',
	aceOfDiamonds: './cards/ace_of_diamonds.svg',
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
	tenOfDiamonds: './cards/10_of_diamonds.svg',
	nineOfClubs: './cards/9_of_clubs.svg',
	nineOfHearts: './cards/9_of_hearts.svg',
	nineOfSpades: './cards/9_of_spades.svg',
	nineOfDiamonds: './cards/9_of_diamonds.svg',
	eightOfClubs: './cards/8_of_clubs.svg',
	eightOfHearts: './cards/8_of_hearts.svg',
	eightOfSpades: './cards/8_of_spades.svg',
	eightOfDiamonds: './cards/8_of_diamonds.svg',
	sevenOfClubs: './cards/7_of_clubs.svg',
	sevenOfHearts: './cards/7_of_hearts.svg',
	sevenOfSpades: './cards/7_of_spades.svg',
	sevenOfDiamonds: './cards/7_of_diamonds.svg',
	sixOfClubs: './cards/6_of_clubs.svg',
	sixOfHearts: './cards/6_of_hearts.svg',
	sixOfSpades: './cards/6_of_spades.svg',
	sixOfDiamonds: './cards/6_of_diamonds.svg',
	fiveOfClubs: './cards/5_of_clubs.svg',
	fiveOfHearts: './cards/5_of_hearts.svg',
	fiveOfSpades: './cards/5_of_spades.svg',
	fiveOfDiamonds: './cards/5_of_diamonds.svg',
	fourOfClubs: './cards/4_of_clubs.svg',
	fourOfHearts: './cards/4_of_hearts.svg',
	fourOfSpades: './cards/4_of_spades.svg',
	fourOfDiamonds: './cards/4_of_diamonds.svg',
	threeOfClubs: './cards/3_of_clubs.svg',
	threeOfHearts: './cards/3_of_hearts.svg',
	threeOfSpades: './cards/3_of_spades.svg',
	threeOfDiamonds: './cards/3_of_diamonds.svg',
	twoOfClubs: './cards/2_of_clubs.svg',
	twoOfHearts: './cards/2_of_hearts.svg',
	twoOfSpades: './cards/2_of_spades.svg',
	twoOfDiamonds: './cards/2_of_diamonds.svg',
	oneOfClubs: './cards/1_of_clubs.svg',
	oneOfHearts: './cards/1_of_hearts.svg',
	oneOfSpades: './cards/1_of_spades.svg',
	oneOfDiamonds: './cards/1_of_diamonds.svg',
};

// Get random card
const getRandomCard = (cards) => {
	const cardEntries = Object.entries(cards);
	const randomCard = Math.floor((Math.random() * cardEntries.length));
	return cardEntries[randomCard][1];
};

// Change Image
const changeImg = element => {
	element.src = getRandomCard(cards);
};

const distributeCards = () => {
	changeImg(playerCard1);
	changeImg(computerCard1);
	changeImg(playerCard2);
	changeImg(computerCard2);
};

distributeCards();

