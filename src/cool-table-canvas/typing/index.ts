// 区分 数据层 & 渲染层
// 思考：x, y, width, height 哪些放在数据层，哪些在渲染层

export interface ICell {
    x: number;
    y: number;
    width: number;
    height: number;
    border: {
        color: string,
        width: number,
    }
}

export interface IRow {
    cells: ICell[];
}

export interface IRowHeader {
    title: string;
    height: number; // 行高，同一行单元格高度相等
}

export interface IColHeader {
    title: string;
    width: number; // 列宽，同一列单元格宽度相等
}

export interface ITableHeader {
    rowWidth: number; // 每一行头都等宽
    colHeight: number; // 每一列头都等高
    background: string;
    border: {
        color: string,
        width: number,
    }

    rowHeaders: IRowHeader[];
    colHeaders: IColHeader[];
}

export interface ITableOverview {
    rowCount: number;
    colCount: number;
}

export interface ITable {
    overview: ITableOverview;
    header: ITableHeader;
    rows: IRow[];
}