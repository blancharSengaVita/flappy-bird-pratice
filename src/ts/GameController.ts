import {Animation} from './Animation';
import {Canvas} from "./Canvas";

export class GameController {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    animation : Animation;

    constructor() {
        this.canvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext('2d') as CanvasRenderingContext2D;
        this.animation = new Animation(this.canvasElement, this.ctx);
    }
}
