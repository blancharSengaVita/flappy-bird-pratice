import {settings} from "./settings";

export class Background {
    CanvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    sprite: HTMLImageElement;

    constructor(CanvasElement : HTMLCanvasElement, ctx : CanvasRenderingContext2D) {
        this.CanvasElement = CanvasElement;
        this.ctx = ctx;

        this.sprite = new Image();
        this.createImage();
        this.draw()
    }

    draw() {
        this.ctx.drawImage(this.sprite, settings.sprite.background.sx,settings.sprite.background.sy,settings.sprite.background.sw,settings.sprite.background.sh,settings.sprite.background.dx,settings.sprite.background.dy,settings.sprite.background.dw,settings.sprite.background.dh,)
    }

    createImage() {
        this.sprite.src = settings.sprite.url
        this.sprite.addEventListener("load", ()=> this.draw())

    }


}