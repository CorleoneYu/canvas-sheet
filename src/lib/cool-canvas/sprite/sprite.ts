import ISprite, { IContent } from './sprite.interface';
import IStyle from '@cool-canvas/style/style.interface';

interface ISpriteProps {
    content: IContent;
    style: IStyle;
}

let spriteIndex = 0;

export default class Sprite implements ISprite {
    public id = Math.random().toString(36).substr(2);
    public content: IContent;
    public style: IStyle;

    // 当前最终 style
    private $cache: Partial<IStyle> = {};

    // 当前自身 style
    private $style: Partial<IStyle> = {};

    // 需要更新的 style
    // private $needUpdate: INeedUpdateStyle;

    // 当前渲染 style
    // private $render: IStyle;

    // 当前自身 style 的缓存
    // private $self: IStyle;

    constructor(props: ISpriteProps) {
        const { content, style } = props;
        this.content = content;
        this.style = style;
    }

    /**
     * 将对象中的 children 递归转换成 sprite
     */
    private changeChildrenToSprite(parent: ISprite) {}
}
