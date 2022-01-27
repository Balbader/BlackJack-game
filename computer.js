/*
 *
*/


// Get random card
const getRandomCard = (min, max) => {
	const random = Math.floor((Math.random() * (max - min) + min));

	if (random === 1) {
		return 11;
	}

	if (random > 10) {
		return 10;
	}

	return random;
};
