import {Canvas} from "./Canvas";

export class Animation {
    private CanvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private canvas: Canvas;

    constructor(CanvasElement : HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.CanvasElement = CanvasElement;
        this.ctx = ctx;
        this.canvas = new Canvas(this.CanvasElement, this.ctx);

        this.animate();
    }

    animate() {
        this.ctx.clearRect(0,0,this.CanvasElement.width,this.CanvasElement.height);
        this.canvas.background.draw();

        requestAnimationFrame(()=>this.animate())
    }
}