function generateNewNumbers() {
    let ticketNumbers = [];
    for (let i = 1; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * 70) + 1;
        ticketNumbers.push(randomNum);
    }
    ticketNumbers.sort((a, b) => a - b);
    for (let i = 1; i < 6; i++) {
        document.getElementById("wBall" + i).innerHTML = ticketNumbers[i - 1];
    }

    let goldNum = Math.floor(Math.random() * 25) + 1;
    document.getElementById("gBall").innerHTML = goldNum;
    // white balls Math.floor(Math.random() * 70) + 1;
    // gold ball Math.floor(Math.random() * 25) + 1;
}

function winningNumberExists(winningNum) {
    for (let i = 1; i < 6; i++) {
        let currentNumber = +document.getElementById("wBall" + i).innerText;
        if (winningNum === currentNumber) {
            return true;
        }
    }
    return false;
}

function removeWinStyle() {
    for (let i = 1; i < 6; i++) {
        let currentElement = document.getElementById("wBall" + i);
        currentElement.classList.remove("win");
    }
}

function removeLuckyPowerBallStyle() {
        let currentElement = document.getElementById("gBall");
        currentElement.classList.remove("luckyPowerBall");
}

function generateWinningNumbers() {
    let matchBallCount = 0;
    let matchPowerBallCount = 0;
    removeWinStyle();
    removeLuckyPowerBallStyle();
    let winNums = [];
    for (let i = 1; i < 6; i++) {
        let winningNum = Math.floor(Math.random() * 70) + 1;
        winNums.push(winningNum);
        if (winningNumberExists(winningNum)) {
            // get element with that number
            // add win class
            for (let i = 1; i < 6; i++) {
                let ticketElement =document.getElementById("wBall" + i);
                if (ticketElement.innerText == winningNum) {
                    matchBallCount++;
                    ticketElement.classList.add("win");
                }
            }
            console.log('winning number exist: ' + winningNum);
        }
        winNums.sort((a, b) => a - b);
        for (let i = 1; i < 6; i++) {
            document.getElementById("whiteB" + i).innerHTML = winNums[i - 1];
        }
    }

    let gNumber = Math.floor(Math.random() * 25) + 1;
    document.getElementById("goldB").innerHTML = gNumber;

    let goldNumber = +document.getElementById("gBall").innerText;
    if (gNumber === goldNumber) {
        matchPowerBallCount++;
        document.getElementById("gBall").classList.add("luckyPowerBall");
    }
    let prize = 0;
    if (matchPowerBallCount === 1) {
        // if (matchBallCount === 0) {
        //     prize = 2;
        // } else if (matchBallCount === 1) {
        //     prize = 4;
        // } else if (matchBallCount === 2) {
        //     prize = 10;
        // } else if (matchBallCount === 3) {
        //     prize = 200;
        // } else if (matchBallCount === 4) {
        //     prize = 10000;
        // } else if (matchBallCount === 5) {
        //     prize = "Jackpot";
        // }
        switch (matchBallCount) {
            case 0: prize = 2; break;
            case 1: prize = 4; break;
            case 2: prize = 10; break;
            case 3: prize = 200; break;
            case 4: prize = 10000; break;
            case 5: prize = "Jackpot";
        }

    } else {
        // if (matchBallCount === 3) {
        //     prize = 10;
        // } else if (matchBallCount === 4) {
        //     prize = 500;
        // } else if (matchBallCount === 5) {
        //     prize = 1000000;
        // }
        switch (matchBallCount) {
            case 3: prize = 10; break;
            case 4: prize = 500; break;
            case 5: prize = 1000000;
        }
    }
    document.getElementById("result").innerText = "You won " + (prize === "Jackpot" ? "" : "$") + prize + "!";
}

function generateRandomNumbers() {
    let arrayTicket = [];
    for (let i = 1; i < 6; i++) {
        arrayTicket.push(Math.floor(Math.random() * 70) + 1);
        for (let j = 1; j < 6; j++) {
            document.getElementById("randomNumbers" + j).innerHTML = arrayTicket[j - 1];
        }
    }

    let goldenNumber = Math.floor(Math.random() * 25);
    document.getElementById("randomNumbers6").innerHTML = goldenNumber;

    console.log(arrayTicket.concat(arrayTicket, "a", goldenNumber));
    console.log(arrayTicket.push(goldenNumber));
    console.log(arrayTicket);
}
// ---------------------------
let countriesList = ["USA", "UK", "Japan", "Nepal", "Thailand", "Canada", "Brazil", "Chile", "Australia", "Russia", "China", "Switzerland", "Sweden", "Norway"];

function countries() {
    let dropDownCountries = document.getElementById("countryDropdown");
    while (dropDownCountries.options.length > 1) {
        dropDownCountries.remove(dropDownCountries.options.length - 1);
    }
    let topCountries = ["USA", "Japan", "Nepal"];
    for (let i = topCountries.length - 1; i >= 0; i--) {
        let country = topCountries[i];
        let countryIndex = countriesList.indexOf(country);
        countriesList.splice(countryIndex, 1);
        countriesList.unshift(country);
    }
    // let index = countries.indexOf("USA");
    // console.log(index);
    // let USA = countries[index];
    // countries.splice(index, 1);
    // let UKIndex = countries.indexOf("UK");
    // console.log(UKIndex);
    // let UK = countries[UKIndex];
    // countries.splice(UKIndex, 1);
    // countries.unshift(UK);
    // countries.unshift(USA);
    document.getElementById("countries").innerText = countriesList;

    for (let i = 0; i < countriesList.length; i++) {
        let element = document.createElement("option");
        element.textContent = countriesList[i];
        element.value = countriesList[i];
        document.getElementById("countryDropdown").appendChild(element);
    }
}

function sortCountries() {
    countriesList.sort();

    let dropdownSelect = document.getElementById("countryDropdown");
    while (dropdownSelect.options.length > 1) {
        dropdownSelect.remove(dropdownSelect.options.length - 1);
    }
    for (let i = 0; i < countriesList.length; i++) {
        let element = document.createElement("option");
        element.textContent = countriesList[i];
        element.value = countriesList[i];
        document.getElementById("countryDropdown").appendChild(element);
    }
}