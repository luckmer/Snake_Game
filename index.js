const start = document.querySelector(".start");
const Game = document.querySelector(".game");
const Points = document.querySelector("h3")
const player = [28, 27, 26];
let currentPosition = 1;
let randomBlockNumber = 65;
let snakeStart = true;
let CollectedPoints = 0;
let width = 20;

const grid = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
]


const game = [];

const createBoard = () => {
    for (let i = 0; i < grid.length; i++) {
        const div = document.createElement("div");
        div.id = grid[i];
        Game.appendChild(div);
        game.push(div);
        if (grid[i] === 1) {
            game[i].className = "wall";
        }
        if (grid[i] === 0) {
            game[i].className = "space";
        }
    }
};

createBoard();

const PlaySnake = (event) => {
    if (!event.detail || (event.detail == 1 && snakeStart === false)) {
        snakeStart = true;
        Create();
        RandomBlock();
        start.innerHTML = "pause";
        game[randomBlockNumber].classList.add("apple");
        document.addEventListener("keyup", Joystick);
    } else {
        snakeStart = false;
        start.innerHTML = "start";
        document.removeEventListener("keyup", Joystick);
        game[randomBlockNumber].classList.remove("apple");
        player.forEach((index) => game[index].classList.remove("character"));
    }
}

const Collision = () => {
    if (game[player[0]].classList.contains("wall")) {
        GameOver();
    }
};

const Create = () => {
    player.forEach((index) => game[index].classList.add("character"));
};

const Delete = () => {
    const test = player.pop();
    player.unshift(currentPosition + player[0]);
    game[test].classList.remove("character");
};

const AppleCollision = () => {
    let collision = game[player[0]].classList.contains("apple");
    if (collision) {
        Points.innerText = CollectedPoints += 1
        game[randomBlockNumber].classList.remove("apple");
        const tail = player.pop();
        player.unshift(player[0] + currentPosition);
        player.push(tail);
        RandomBlock();
    }
};

const MoveUp = () => {
    Delete();
    currentPosition = -12;
    Create();
    AppleCollision();
    Collision();
};

const moveDown = () => {
    Delete();
    currentPosition = 12;
    Create();
    AppleCollision();
    Collision();
};

const moveRight = () => {
    Delete();
    currentPosition = 1;
    Create();
    AppleCollision();
    Collision();
};

const moveLeft = () => {
    Delete();
    currentPosition = -1;
    Create();
    AppleCollision();
    Collision();
};

const GameOver = () => {
    setTimeout(() => {
        alert("Game Over");
        location.reload();
    }, 50)
};

const Joystick = (e) => {
    if (e.keyCode === 87) {
        MoveUp();
    } else if (e.keyCode === 83) {
        moveDown();
    } else if (e.keyCode === 68) {
        moveRight();
    } else if (e.keyCode === 65) {
        moveLeft();
    }
};

const RandomBlock = () => {
    do {
        randomBlockNumber = Math.floor(Math.random() * grid.length);
    } while (
        (game[randomBlockNumber].classList.contains("snake") &&
            game[randomBlockNumber].id === "0") ||
        game[randomBlockNumber].classList.contains("wall")
    );
    game[randomBlockNumber].classList.add("apple");
};


start.addEventListener("click", PlaySnake);