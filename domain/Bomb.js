export class Bomb {
    constructor(speed = 0, context = null, image = '') {
        this.speed = speed;
        this.context = context;
        this.image = image;

        this.imageWidth = 32;
        this.imageHeight = 32;
        this.bombWidth = 64;
        this.bombHeight = 64;
        this.canvasHeight = 500;
        this.position = { x: Math.random() * (this.context.canvas.width - this.bombWidth), y: -this.bombHeight };
    }

    moveDown() {
        this.position.y += this.speed;
    }

    draw() {
        if (!this.image || !this.image.complete || this.image.naturalWidth === 0) {
            return;
        }
        this.context.drawImage(this.image, 0, 0, this.imageWidth, this.imageHeight, this.position.x, this.position.y, this.bombWidth, this.bombHeight);
    }

    reachedLimit() {
        //until the bomb reaches the bottom of the canvas, it keeps moving down. Once it reaches the bottom, it should be removed from the game.
        if(this.position.y > this.canvasHeight) {
            //resets the position of the bomb to the top of the canvas with a random x position
            this.position = { x: Math.random() * (this.context.canvas.width - this.bombWidth), y: -this.bombHeight };
            return true;
        }
        return false;
    }

    reset() {
        this.position = { x: Math.random() * (this.context.canvas.width - this.bombWidth), y: -this.bombHeight };
    }
}