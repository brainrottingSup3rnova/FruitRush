export class Player {
    constructor(Image = '', Context = null, speed = 0) {
        this.Image = Image;
        this.context = Context;
        this.Position = { x: 0, y: 445 }; // Position on the board, starting at 0; right => +1, left => -1
        this.size = 64;
        this.totalPoints = 0;
        this.fruitCatched = 0;
        this.speed = speed;

        this.frameX = 0;
        this.maxFrame = 3; // for idle
        this.isMoving = false;
        this.lastFrame = 0;

        this.inImageWidth = 24;
        this.inImageHeight = 24;

        this.lifes = 3;
    }

    update(keys, gameFrame, fruits, bomb) {
        this.handleContact(fruits);
        this.catchBomb(bomb);
        this.isMoving = false;
        if (keys['a']) {
            this.moveLeft();
        }
        if (keys['d']) {
            this.moveRight();
        }
        this.updateAnimation(gameFrame);
        this.lastFrame = this.frameX;
    }

    moveRight() {
        if (this.Position.x + this.speed <= this.context.canvas.width - 50) {
            this.Position.x += this.speed;
            this.isMoving = true;
            if (this.lastFrame < 4) {
                this.frameX = 4;
            }
        }
    }

    moveLeft() {
        if (this.Position.x - this.speed >= -10) {
            this.Position.x -= this.speed;
            this.isMoving = true;
            if (this.lastFrame < 4) {
                this.frameX = 4;
            }
        }
    }

    updateAnimation(gameFrame) {
        if (gameFrame % 6 === 0) {
            this.frameX++;
            if (this.isMoving) {
                if (this.frameX > this.maxFrame + 4) {
                    this.frameX = 4;
                }
            } else if (this.frameX > this.maxFrame) {
                this.frameX = 0;
            }
        }
    }

    draw() {
        if (!this.Image || !this.Image.complete || this.Image.naturalWidth === 0) {
            return;
        }
        this.context.drawImage(
            this.Image,
            this.frameX * this.inImageWidth,
            0,
            this.inImageWidth,
            this.inImageHeight,
            this.Position.x,
            this.Position.y,
            this.size,
            this.size
        );
    }

    handleContact(fruits) {
        fruits.forEach(fruit => {
            const withinX = fruit.position.x < this.Position.x + this.size &&
                fruit.position.x + fruit.fruitWidth > this.Position.x;

            const withinY = fruit.position.y < this.Position.y + this.size - 20 &&
                fruit.position.y + fruit.fruitHeight - 20 > this.Position.y;

            if (withinX && withinY) {
                this.totalPoints += fruit.points;
                this.fruitCatched ++;

                fruit.reset();
            }
        });

    } 

    catchBomb(bomb) {
        const withinX = bomb.position.x < this.Position.x + this.size &&
            bomb.position.x + bomb.bombWidth > this.Position.x;
        
        const withinY = bomb.position.y < this.Position.y + this.size - 20 &&
            bomb.position.y + bomb.bombHeight - 20 > this.Position.y;
        if (withinX && withinY) {
            this.lifes -= 1;
            
            bomb.reset();
        }
    }
}