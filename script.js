let message = "";
let hasBlackJack = false;
let isAlive = true;
let cards = document.getElementById("cards");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let card = 0

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let firstCard = getRandom(1, 11);
let secondCard = getRandom(1, 11);
let allCards = [firstCard, secondCard];
let sum = firstCard + secondCard;

const renderGame = () => {

    cards.textContent = "Cards: " + allCards[0] + "," + allCards[1];
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Hit?";
    } else if (sum === 21) {
        message = "BlackJack!";
        hasBlackJack = true;
    } else {
        message = "You Loose!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

const startGame = () => {
    renderGame();
}

const drawNewCard = () => {

    card = getRandom(1, 11);
    allCards.push(card);
    cards.textContent = "Cards:" + allCards;
    sum += card;
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Hit?";
    } else if (sum === 21) {
        message = "BlackJack!";
        hasBlackJack = true;
    } else {
        message = "You Loose!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

// Start a new game
const start = document.getElementById("start");
start.addEventListener("click", () => {
    startGame();
});

// Draw a new card
const newCard = document.getElementById("new-card");
newCard.addEventListener("click", () => {
    drawNewCard();
})

