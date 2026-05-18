export class Fruit {
    constructor(type = '', image = null, points = 0, speed = 0, context = null) {
        this.type = type;
        this.image = image;
        this.points = points;
        this.speed = speed;
        this.context = context;

        this.imageWidth = 32;
        this.imageHeight = 32;
        this.fruitWidth = 64;
        this.fruitHeight = 64;
        this.canvasHeight = 500;
        this.position = { x: Math.random() * (this.context.canvas.width - this.fruitWidth), y: -this.fruitHeight };
    }

    moveDown() {
        this.position.y += this.speed;
    }

    draw( ) {
        //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
        this.context.drawImage(this.image, 0 , 0, this.imageWidth, this.imageHeight, this.position.x, this.position.y, this.fruitWidth, this.fruitHeight);
    }

    reachedLimit() {
        //until the fruit reaches the bottom of the canvas, it keeps moving down. Once it reaches the bottom, it should be removed from the game.
        if(this.position.y > this.canvasHeight) {
            //resets the position of the fruit to the top of the canvas with a random x position
            this.reset();
            return true;
        }
        return false;
    }

    reset() {
        this.position = { x: Math.random() * (this.context.canvas.width - this.fruitWidth), y: -this.fruitHeight };
    }
}