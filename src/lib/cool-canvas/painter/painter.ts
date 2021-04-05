import ISprite from '@/lib/cool-canvas/sprite/sprite.interface';

interface IConfig {
    el: HTMLCanvasElement;
    width: number;
    height: number;
}

class Painter {
    public width: number = 0;
    public height: number = 0;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private children: ISprite[] = [];

    constructor(config: IConfig) {
        const { width, height, el } = config;

        this.width = width;
        this.height = height;
        this.canvas = el;
        this.ctx = this.canvas.getContext('2d')!;
    }

    public add(sprite: ISprite) {
        this.children.push(sprite);
    }

    public paint() {
        this.children.forEach(child => {
            const { content, style } = child;
            switch (content.type) {
                case 'img': {
                    // code
                    break;
                }
                case 'text': {
                    this.ctx.font = "48px serif";
                    this.ctx.strokeText(content.text!, style.left, 100);
                    break;
                }
            }
        })
    }
}

export default Painter;