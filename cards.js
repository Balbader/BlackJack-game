const playerCard1 = document.querySelector('#pl-1');
const playerCard2 = document.querySelector('#pl-2');
const computerCard1 = document.querySelector('#cp-1');
const computerCard2 = document.querySelector('#cp-2');

const cards = [
	['./PNG-cards-1.3/ace_of_clubs.png', './PNG-cards-1.3/ace_of_diamonds.png', './PNG-cards-1.3/ace_of_hearts.png', './PNG-cards-1.3/ace_of_spades.png'],
	['./PNG-cards-1.3/2_of_clubs.png', './PNG-cards-1.3/2_of_diamonds.png', './PNG-cards-1.3/2_of_hearts.png', './PNG-cards-1.3/2_of_spades.png'],
	['./PNG-cards-1.3/3_of_clubs.png', './PNG-cards-1.3/3_of_diamonds.png', './PNG-cards-1.3/3_of_hearts.png', './PNG-cards-1.3/3_of_spades.png'],
	['./PNG-cards-1.3/4_of_clubs.png', './PNG-cards-1.3/4_of_diamonds.png', './PNG-cards-1.3/4_of_hearts.png', './PNG-cards-1.3/4_of_spades.png'],
	['./PNG-cards-1.3/5_of_clubs.png', './PNG-cards-1.3/5_of_diamonds.png', './PNG-cards-1.3/5_of_hearts.png', './PNG-cards-1.3/5_of_spades.png'],
	['./PNG-cards-1.3/6_of_clubs.png', './PNG-cards-1.3/6_of_diamonds.png', './PNG-cards-1.3/6_of_hearts.png', './PNG-cards-1.3/6_of_spades.png'],
	['./PNG-cards-1.3/7_of_clubs.png', './PNG-cards-1.3/7_of_diamonds.png', './PNG-cards-1.3/7_of_hearts.png', './PNG-cards-1.3/7_of_spades.png'],
	['./PNG-cards-1.3/8_of_clubs.png', './PNG-cards-1.3/8_of_diamonds.png', './PNG-cards-1.3/8_of_hearts.png', './PNG-cards-1.3/8_of_spades.png'],
	['./PNG-cards-1.3/9_of_clubs.png', './PNG-cards-1.3/9_of_diamonds.png', './PNG-cards-1.3/9_of_hearts.png', './PNG-cards-1.3/9_of_spades.png'],
	['./PNG-cards-1.3/10_of_clubs.png', './PNG-cards-1.3/10_of_diamonds.png', './PNG-cards-1.3/10_of_hearts.png', './PNG-cards-1.3/10_of_spades.png'],
	['./PNG-cards-1.3/jack_of_clubs.png', './PNG-cards-1.3/jack_of_diamonds.png', './PNG-cards-1.3/jack_of_hearts.png', './PNG-cards-1.3/jack_of_spades.png'],
	['./PNG-cards-1.3/queen_of_clubs.png', './PNG-cards-1.3/queen_of_diamonds.png', './PNG-cards-1.3/queen_of_hearts.png', './PNG-cards-1.3/queen_of_spades.png'],
	['./PNG-cards-1.3/king_of_clubs.png', './PNG-cards-1.3/king_of_diamonds.png', './PNG-cards-1.3/king_of_hearts.png', './PNG-cards-1.3/king_of_spades.png'],
];

// Get random card
const getRandomCard = array => {
	const randomCard = Math.floor((Math.random() * array.length));
	return array[randomCard][randomCard];
};

// Change playerCard1
const changeImg = element => {
	element.src = getRandomCard(cards);
};

changeImg(playerCard1);
changeImg(playerCard2);
changeImg(computerCard1);
changeImg(computerCard2);

