import { Player } from '../domain/Player.js';
import { Fruit } from '../domain/Fruit.js';
import { Bomb } from '../domain/Bomb.js';
import { GameManager } from '../service/GameManager.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
const backgroundImage = new Image();
backgroundImage.src = './assets/background.png';

backgroundImage.onload = function () {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};

let keysPressed = [];

document.addEventListener('keydown', function (event) {
    keysPressed[event.key] = true;
});

document.addEventListener('keyup', function (event) {
    keysPressed[event.key] = false;
});

const appleImage = new Image();
appleImage.src = './assets/Fruits/Apple.png';
const apple = new Fruit('Apple', appleImage, 1, 2, ctx);

const orangeImage = new Image();
orangeImage.src = './assets/Fruits/Orange.png';
const orange = new Fruit('Orange', orangeImage, 2, 3, ctx);

const stawberryImage = new Image();
stawberryImage.src = './assets/Fruits/Strawberry.png';
const stawberry = new Fruit('Strawberry', stawberryImage, 3, 4, ctx);

const fruits = [apple, orange, stawberry];

const bombImage = new Image();

bombImage.src = './assets/bomb.png';
const bomb = new Bomb(5, ctx, bombImage);

const playerImage = new Image();
playerImage.src = './assets/dinos/vita.png';
const player = new Player(playerImage, ctx, 5, keysPressed);

let gameFrame = 0;
let lastPoints = -1;
let lastLifes = 3;
let lastFruitCatched = 0;
let idAnimation = null;
let isGameRunning = true;

function animateGame() {
    if (!isGameRunning) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    for (let fruit of fruits) {
        //moves the fruit
        fruit.moveDown();
        //draws the fruit on the canvas
        fruit.draw();
        //checks if the fruit has reached the bottom of the canvas and eventually resets its position to the top of the canvas
        fruit.reachedLimit();
    }

    bomb.moveDown();
    bomb.draw();
    bomb.reachedLimit();

    player.update(keysPressed, gameFrame, fruits, bomb);
    player.draw();

    if (lastPoints !== player.totalPoints) {
        document.getElementById('points').textContent = player.totalPoints;
        document.getElementById('fruitCatched').textContent = player.fruitCatched;

        lastPoints = player.totalPoints;
    }

    if(lastLifes !== player.lifes) {
        document.getElementById('lifes').textContent = player.lifes;
        lastLifes = player.lifes;
        if(player.lifes == 0 ) {
            document.getElementById('gameOverOverlay').classList.remove('d-none');
            document.getElementById('finalPoints').textContent = player.totalPoints;
            isGameRunning = false;
            return;
        }
    }

    //it says that it should do that animation every idk seconds/hz
    gameFrame++;
    idAnimation = requestAnimationFrame(animateGame);
}

animateGame();

const btn = document.getElementById('btnRestart');

btn.addEventListener('click', () => {
    if (idAnimation) {
        cancelAnimationFrame(idAnimation);
    }
    document.getElementById('gameOverOverlay').classList.add('d-none');
    player.lifes = 3;
    player.totalPoints = 0;
    player.fruitCatched = 0;
    gameFrame = 0;
    lastPoints = -1;
    lastLifes = 3;
    isGameRunning = true;
    document.getElementById('points').textContent = '0';
    document.getElementById('lifes').textContent = '3';
    document.getElementById('fruitCatched').textContent = '0';
    
    // Reset fruits and bomb positions
    fruits.forEach(fruit => fruit.reset());
    bomb.reset();
    
    animateGame();
});
