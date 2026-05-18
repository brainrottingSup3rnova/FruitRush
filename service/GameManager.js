import { Player } from "../domain/Player.js";

export class GameManager {
    constructor(player) {
        this.player = player;
    }

    catchFruit(fruitCatched) {
        if (fruitCatched.position.x === this.player.position.x && fruitCatched.position.y === this.player.position.y) {
            this.player.totalPoints += fruitCatched.points;
            this.player.fruitCatched += 1;
        }
    }

    catchBomb(bombCatched) {
        if (bombCatched.position.x === this.player.position.x && bombCatched.position.y === this.player.position.y) {
            this.player.lifes -= 1;
        }
    }
}