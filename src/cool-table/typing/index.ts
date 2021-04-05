export enum ColType {
    text = 'text',
    number = 'number',
}

export interface ICell {
    rowId: string;
    colId: string;
    value: string;
}

export interface ICol {
    colId: string;
    type: ColType;
    name: string;
}

export interface ITable {
    tableId: string;
    rowIds: string[];
    colIds: string[];
}

export interface IRow {
    rowId: string;
    colIds: string[];
}