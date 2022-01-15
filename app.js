// Create player object
let player = {
    name: "Sarah",
    chips: 150,
    isAlive: false,
    hasBlackJack: false
}

const playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

// Get random card
const getRandomCard = (min, max) => {

    let random = Math.floor(Math.random() * (max - min) + min);

    if (random === 1)
        return 11;
    else if (random > 10)
        return 10;
    return random;
}

// Render a game
const renderGame = () => {

    let message = "";
    let firstCard = getRandomCard(1, 11);
    let secondCard = getRandomCard(1, 11);
    let allCards = [firstCard, secondCard];
    let sum = firstCard + secondCard;

    const cards = document.getElementById("cards");
    const sumEl = document.getElementById("sum-el");
    const messageEl = document.getElementById("message-el");

    cards.textContent = "Cards: " + allCards[0] + ", " + allCards[1];
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Hit?";
    } else if (sum === 21) {
        message = "BlackJack!";
        player.hasBlackJack = true;
    } else {
        message = "You Loose!";
        player.isAlive = false;
    }

    messageEl.textContent = message;
}

// Start a game
const startGame = () => {

    player.isAlive = true;
    renderGame();
}

//Draw a new card
const drawNewCard = () => {

    let message = "";
    let firstCard = getRandomCard(1, 11);
    let secondCard = getRandomCard(1, 11);
    let allCards = [firstCard, secondCard];
    let sum = firstCard + secondCard;
    let card;

    const cards = document.getElementById("cards");
    const sumEl = document.getElementById("sum-el");
    const messageEl = document.getElementById("message-el");

    if (player.isAlive === true && player.hasBlackJack === false) {
        card = getRandomCard(1, 11);
        allCards.push(card);
        cards.textContent = "Cards: " + allCards;
        sum += card;
        sumEl.textContent = "Sum: " + sum;
    }

    if (sum <= 20) {
        message = "Hit?";
    } else if (sum === 21) {
        message = "BlackJack!";
        player.hasBlackJack = true;
    } else {
        message = "You Loose!";
        player.isAlive = false;
    }

    messageEl.textContent = message;
}

// Start a new game
const start = document.getElementById("start");

start.addEventListener("click", () => {
    startGame();
});

// Draw a new card
const newCard = document.addEventListener("click", () => {
    drawNewCard();
})
