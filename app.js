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
const startGame = () => {

    const start = document.getElementById("start");
    start.disabled = true;
    player.isAlive = true;

    let allCards = [];

    const newCard = document.getElementById("new-card");
    newCard.disabled = false;
    newCard.addEventListener("click", () => {
        drawNewCard(allCards);
    })

    drawNewCard(allCards);
    drawNewCard(allCards);
}

//Draw a new card
const drawNewCard = (arr) => {

    let message = "";

    const cards = document.getElementById("cards");
    const sumEl = document.getElementById("sum-el");
    const messageEl = document.getElementById("message-el");

    if (player.isAlive === true && player.hasBlackJack === false) {
        const card = getRandomCard(1, 11);
        arr.push(card);
        cards.textContent = "Cards: " + arr;
    }

    const sum = arr.reduce((left, right) => {
        return (left + right);
    }, 0);
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

// Start a new game
const start = document.getElementById("start");

start.addEventListener("click", () => {
    startGame();
});

