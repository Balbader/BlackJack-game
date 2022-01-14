let player = {
    name: "Balou",
    chips: 150,
    isAlive: false,
    hasBlackJack: false
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

let message = "";
let firstCard = 0;
let secondCard = 0;
let allCards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let cards = document.getElementById("cards");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let card = 0

const getRandom = (min, max) => {

    let random = Math.floor(Math.random() * (max - min) + min);

    if (random === 1)
        return 11;
    else if (random > 10)
        return 10;
    return random;
}

const renderGame = () => {

    cards.textContent = "Cards: " + allCards[0] + "," + allCards[1];
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

const startGame = () => {
    player.isAlive = true;
    firstCard = getRandom(1, 11);
    secondCard = getRandom(1, 11);
    allCards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

const drawNewCard = () => {

    if (player.isAlive && player.hasBlackJack === false) {
        card = getRandom(1, 11);
        allCards.push(card);
        cards.textContent = "Cards:" + allCards;
        sum += card;
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

