export type IOffset = {
    x: number;
    y: number;
}

export type ISize = {
    width: number;
    height: number;
}

export type ILocation = {
    x: number;
    y: number;
}

export type IRenderAttr = {
    xIndex: number;
    yIndex: number;
    size: ISize;
    location: ILocation;
};

export type IRenderAttrRow = {
    rowIndex: number;
    renderAttrs: IRenderAttr[];
}
