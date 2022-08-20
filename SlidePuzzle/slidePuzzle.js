var rows = 3;
var columns = 3;

var currTile;
var otherTile; //image 3

var turns = 0;
var gameOver = false;

// var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];
var leastMove = 9999999;

window.onload = function () {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.id = r + "-" + c;
            tile.src = "img/" + imgOrder.shift() + ".jpg";

            tile.addEventListener("click", onClick);
            // tile.addEventListener("dragstart", dragStart);
            // tile.addEventListener("dragover", dragOver);
            // tile.addEventListener("dragenter", dragEnter);
            // tile.addEventListener("dragleave", dragLeave);
            // tile.addEventListener("drop", dragDrop);
            // tile.addEventListener("dragend", dragEnd);

            document.getElementById("board").append(tile);
        }
    }
}

function initializeGame() {
    turns = 0;
    document.getElementById("turns").innerText = turns;
    imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];
    gameOver = false;
    let board = document.getElementById("board");
    let tiles = board.getElementsByTagName("img");
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].src =  "img/" + imgOrder.shift() + '.jpg';
    }

}

function dragStart(e) {
    currTile = e.target; // or this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this;
}

function onClick(e) {
    currTile = e.target;
    otherTile = findEmptyImageTile();
    dragEnd();
}

function findEmptyImageTile() {
    let board = document.getElementById("board");
    let tiles = board.getElementsByTagName("img");
    let emptyImageTile = '';
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i].src.includes('3.jpg')) {
            emptyImageTile = tiles[i];
            break;
        }
    }
    return emptyImageTile;
}

function dragEnd() {
    if (!otherTile.src.includes("3.jpg") || gameOver) {
        return;
    }

    let currCoords = currTile.id.split("-");
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;

    let moveUp = c == c2 && r2 == r-1;
    let moveDown = c == c2 && r2 == r+1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;
        if (isCompleted()) {
            document.getElementById("gameResult").innerText = "You did it!";
            gameOver = true;
            if (turns < leastMove) {
                leastMove = turns;
                document.getElementById("leastMoves").innerText = leastMove;
            }
        }
    }
}

function isCompleted() {
    let board = document.getElementById("board");
    let tiles = board.getElementsByTagName("img");
    for (let i = 0; i < tiles.length; i++) {
        if (!tiles[i].src.includes(i + 1 + '.jpg')) {
            return false;
        }
    }
    return true;
}