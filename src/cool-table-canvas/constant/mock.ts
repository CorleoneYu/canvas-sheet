import { ICell, IRow, ITable, ITableOverview, ITableHeader, IColHeader, IRowHeader } from '@/cool-table-canvas/typing';
import { defaultStyle } from './index';

const DEFAULT_CELL_COUNT = 5;
const DEFAULT_ROW_COUNT = 20;

function initCells(rowIndex: number, count: number): ICell[] {
    const cells: ICell[] = [];
    const { cell } = defaultStyle;

    for (let i = 0; i < count; i++) {
        cells.push({
            width: cell.width,
            height: cell.height,
            x: i * cell.width,
            y: (rowIndex + 1)* cell.height,
            border: {
                color: defaultStyle.cell.borderColor,
                width: defaultStyle.cell.borderWidth,
            }
        });
    }

    return cells;
}

function initRows(rowCount: number, cellCount: number): IRow[] {
    const rows: IRow[] = [];

    for (let i = 0; i < rowCount; i++) {
        rows.push({
            cells: initCells(i, cellCount),
        });
    }

    return rows;
}

function initHeader(rowCount: number, colCount: number): ITableHeader {
    const rowHeaders: IRowHeader[] = [];
    for (let i = 0; i < rowCount; i++) {
        rowHeaders.push({
            title: `${i + 1}`,
            height: defaultStyle.cell.height,
        });
    }

    const colHeaders: IColHeader[] = [];
    const ACode = 'A'.charCodeAt(0);
    for (let i = 0; i < colCount; i++) {
        colHeaders.push({
            title: String.fromCharCode(ACode + i),
            width: defaultStyle.cell.width,
        });
    }

    const { borderColor, borderWidth, background, row, col } = defaultStyle.header;
    return {
        rowHeaders,
        colHeaders,
        border: {
            color: borderColor,
            width: borderWidth,
        },
        background: background,
        rowWidth: row.width,
        colHeight: col.height,
    };
}

function initTable(): ITable {
    const overview: ITableOverview = {
        rowCount: DEFAULT_ROW_COUNT,
        colCount: DEFAULT_CELL_COUNT,
    };

    const header = initHeader(overview.rowCount, overview.colCount);
    const rows = initRows(overview.rowCount, overview.colCount);

    return {
        overview,
        header,
        rows,
    };
}

const defaultTable = initTable();
console.log('defaultTable: ', defaultTable);

export { defaultTable };
