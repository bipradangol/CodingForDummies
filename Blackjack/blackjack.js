var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var yourAceCount = 0;

var hidden;
var deck;

var canHit = true;//allows the player (you) to draw while yourSum <= 21

var backCardOrig;
var backCard

let currentAmount = 0;

window.onload = function () {
    currentAmount = checkCookie();
    document.getElementById("currentAmount").innerText = currentAmount < 0 ? "-$" + Math.abs(currentAmount) : "$" + currentAmount;
    createBackCardOriginal();
    initializeGame();
}

function createBackCardOriginal() {
    backCardOrig = document.createElement("img");
    backCardOrig.id = "hidden";
    backCardOrig.src = "./cards/BACK.png";
}

function initializeGame() {
    resetDealersCards();
    removeAllYourCards();
    resetValues();
    buildDeck();
    shuffleDeck();
    startGame();
}

function resetDealersCards() {
    removeAllDealerCards()
    insertBackCard();
}

function removeAllDealerCards() {
    let dealerCardsPlace = document.getElementById("dealer-cards");
    while (dealerCardsPlace.firstChild) {
        dealerCardsPlace.removeChild(dealerCardsPlace.firstChild);
    }
}

function insertBackCard() {
    backCard = backCardOrig.cloneNode(true);
    let dealerCardsPlace = document.getElementById("dealer-cards");
    dealerCardsPlace.append(backCard);
}

function removeAllYourCards() {
    let yourCardsPlace = document.getElementById("your-cards");
    while (yourCardsPlace.firstChild) {
        yourCardsPlace.removeChild(yourCardsPlace.firstChild);
    }
}

function resetValues() {
    dealerSum = 0;
    yourSum = 0;

    dealerAceCount = 0;
    yourAceCount = 0;

    canHit = true;//allows the player (you) to draw while yourSum <= 21
    document.getElementById("dealer-sum").innerText = "";
    document.getElementById("your-sum").innerText = "";
    document.getElementById("results").innerText = "";
}

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]); //A-C -> K-C, A-D -> K-D
        }
    }
    // console.log(deck);
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); // (0-1) * 52 => (0-51.9999)
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}

function startGame() {
    hidden = deck.pop();
    dealerSum += getValue(hidden);
    dealerAceCount += checkAce(hidden);
    // console.log(hidden);
    // console.log(dealerSum);
    while (dealerSum < 17) {
        //<img src="./cards/4-C.png">
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg);
    }
    console.log(dealerSum);

    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        yourSum += getValue(card);
        yourAceCount += checkAce(card);
        document.getElementById("your-cards").append(cardImg);
    }
    console.log(yourSum);
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stay").addEventListener("click", stay);
}

function hit() {

    if (!canHit) {
        return;
    }

    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    document.getElementById("your-cards").append(cardImg);

    if (reduceAce(yourSum, yourAceCount) > 21) { //A, J, K -> 11(change 11 to 1) + 10 + 10
        canHit = false;
    }
}

function stay() {
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    yourSum = reduceAce(yourSum, yourAceCount);

    canHit = false;
    document.getElementById("hidden").src = "./cards/" + hidden + ".png";

    let message = "";
    if (yourSum > 21) {
        message = "You Lose $100!";
        currentAmount -= 100;
    } else if (dealerSum > 21) {
        message = "You Win $100!";
        currentAmount += 100;
    }
    //both you and dealer <= 21
    else if (yourSum == dealerSum) {
        message = "Tie!";
    } else if (yourSum > dealerSum) {
        message = "You Win $100!";
        currentAmount += 100;
    } else if (yourSum < dealerSum) {
        message = "You Lose $100!";
        currentAmount -= 100;
    }

    setCookie("currentAmount", currentAmount, 1);
    document.getElementById("results").innerText = message;
    document.getElementById("currentAmount").innerText = currentAmount < 0 ? "-$" + Math.abs(currentAmount) : "$" + currentAmount;
    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("your-sum").innerText = yourSum;
}

function getValue(card) {
    let data = card.split("-"); // "4-C" -> ["4", "C"]
    let value = data[0];

    if (isNaN(value)) { //A J Q K
        if (value == "A") {
             return 11;
        }
        return 10;
    }

    return parseInt(value);
}

function checkAce(card) {
    if (card[0] == "A") {
        return 1;
    }
    return 0;
}

function reduceAce(playerSum, playerAceAccount) {
    while (playerSum > 21 && playerAceAccount > 0) {
        playerSum -= 10;
        playerAceAccount -= 1;
    }
    return playerSum;
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length);
        }
    }
    return "";
}

function checkCookie() {
    let cAmount = getCookie("currentAmount");
    console.log("cookie: ", cAmount);
    return Number(cAmount);

}