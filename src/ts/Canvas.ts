import {Animation} from './Animation'
import {Background} from "./Background";

export class Canvas {
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    background: Background;


    constructor(CanvasElement : HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = CanvasElement;
        this.ctx = ctx;

        this.background = new Background(this.canvasElement, this.ctx)
    }
}