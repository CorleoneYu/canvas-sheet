import IStyle from '@cool-canvas/style/style.interface';

export interface IRect {
    left: number;
    top: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
}

export interface IContent {
    type: 'img' | 'text';
    img?: string;
    text?: string;
}

export default interface ISprite {
    id: string;
    content: IContent;
    style: IStyle;

    /**
     * 添加子节点
     * @return child
     */
    // add: (child: ISprite) => void;

    /**
     * 移除子节点
     * @return child
     */
    // remove: (child: ISprite) => void;

    /**
     * 移除当前节点的所有子节点
     */
    // clear: () => void;

    /**
     * 获取当前节点的全部子节点（包含子节点的子节点...） 
     * @param includeSelf 是否包含当前节点
     * @return 节点集合
     */
    // getAllChildren: (includeSelf: boolean) => ISprite[];

    /**
     * 获取当前节点的全部 style.visible 不为 false 的子节点（包含子节点的子节点...） 
     * @param includeSelf 是否包含当前节点
     */
    // getAllVisibleChildren: (includeSelf: boolean) => ISprite[];

    /**
     * 移除当前节点
     */
    // delete: () => void;

    /**
     * 立即更新节点属性
     * @param
     */
    // update: (config: any) => void;

    /**
     * 获取 Sprite 模型所占的区域盒子
     * @param fromCache 是否从缓存结果中获取
     * @return 区域盒子
     */
    // getRect: (fromCache: boolean) => IRect;

    /**
     * 获取能容纳 Sprite 及其全部子节点的区域盒子。
     * @return 区域盒子
     */
    // getOuterRect: () => IRect;

    /**
     * 获取 Sprite 的某个样式的渲染结果
     * @param key 要获取的样式，如： left, opacity
     * @param fromLastTick 是否从上一帧渲染缓存中获取
     */
    // getStyle: (key: string, fromLastTick: boolean) => any;

    /**
     * 获取 Sprite 当前样式的设置的值。
     * @param key 要获取的样式
     */
    // getSelfStyle: (key: string) => any;

    /**
     * 注册时间监听函数
     * @param eventName 事件名，等 event 部分写完，直接引用 type 类型
     * @param callback 事件函数
     * @return 事件函数对应的 id
     */
    // addEventListener: (eventName: string, callback: Function) => string;

    /**
     * 移除一个或全部的事件监听
     * @param eventName 事件名
     * @param id 事件函数 id, 不传则删除改事件名对应的全部函数
     */
    // removeEventListener: (eventName: string, id?: string) => void;

    /**
     * 注册钩子函数监听函数，可以是 生命周期钩子，也可以是自定义钩子
     * @param hookName 钩子名
     * @param callback
     */
    // on: (hookName: string, callback: Function) => string;

    /**
     * 移除一个或全部的钩子监听
     * @param hookName 钩子名
     * @param id 钩子函数 id
     */
    // off: (hookName: string, id?: string) => void;

    // @TODO 补全
    /**
     * 触发当前节点的全部子节点的钩子
     * @param hookName
     * @param props
     */
    // distribute: () => void;

    /**
     * 触发当前节点、以及全部子节点的钩子
     * @param hookName
     * @param props
     */
    // broadcast: () => void

    /**
     * 触发当前节点的钩子
     */
    // trigger: () => void;
}