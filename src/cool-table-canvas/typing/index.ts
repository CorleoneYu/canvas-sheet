// 区分 数据层 & 渲染层
// 思考：x, y, width, height 哪些放在数据层，哪些在渲染层

export interface ICell {
    width: number;
    height: number;
    value: string;
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