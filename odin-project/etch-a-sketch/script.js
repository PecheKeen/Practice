let color = "#333";

function createBoard(size) {
    let board = document.querySelector(".grid");
    let tile = board.querySelectorAll('div');
    tile.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < (size * size); i++) {
        let tile = document.createElement('div');
        tile.addEventListener('mouseover', tileColor);
        tile.style.backgroundColor = "#ddd";
        board.insertAdjacentElement("beforeend", tile);
    }
}

createBoard(16)

function changeSize(input) {
    if(input >= 2 && input <= 100) {
    createBoard(input);
    } else {
        console.log("error - too many tiles");
    }
}

function tileColor() {
    if(color === 'random') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
    this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector(".grid");
    let tile = board.querySelectorAll('div');
    tile.forEach((div) => div.style.backgroundColor = '#ddd');
}