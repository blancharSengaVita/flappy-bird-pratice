import {GameController} from "./GameController";

class Main {
    gameController : GameController;
    constructor() {
        this.gameController = new GameController();
    }
}

new Main();