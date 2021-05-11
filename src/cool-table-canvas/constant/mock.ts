import { ICell, IRow, ITable, ITableOverview, ITableHeader, IColHeader, IRowHeader } from '@/cool-table-canvas/typing';
import { tableConfig } from './index';

function initCells(rowIndex: number, count: number): ICell[] {
    const cells: ICell[] = [];
    const { cell } = tableConfig.style;

    for (let i = 0; i < count; i++) {
        cells.push({
            width: cell.width,
            height: cell.height,
            value: '',
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
            height: tableConfig.style.cell.height,
        });
    }

    const colHeaders: IColHeader[] = [];
    const ACode = 'A'.charCodeAt(0);
    for (let i = 0; i < colCount; i++) {
        colHeaders.push({
            title: String.fromCharCode(ACode + i),
            width: tableConfig.style.cell.width,
        });
    }

    return {
        rowHeaders,
        colHeaders,
    };
}

function initTable(): ITable {
    const overview: ITableOverview = {
        rowCount: tableConfig.overview.rowCount,
        colCount: tableConfig.overview.colCount,
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
