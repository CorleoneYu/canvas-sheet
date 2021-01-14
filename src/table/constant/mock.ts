import { ICell } from '../models/useCell';
import { ICol } from '../models/useCol';
import { IRow } from '../models/useRow';
import { ITable } from '../models/useTable';
import { ColType } from '../typing';

const INIT_COUNT = {
    row: 3,
    col: 3,
    table: 1,
};

function initCells(row: number = INIT_COUNT.row, col: number = INIT_COUNT.col) {
    const cells: ICell[] = [];
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            cells.push({
                rowId: `row-${r}`,
                colId: `col-${c}`,
                value: `${r + 1}${c + 1}`,
            });
        }
    }
    return cells;
}

function initRows(row: number = INIT_COUNT.row, col: number = INIT_COUNT.col) {
    const rows: IRow[] = [];
    const colIds: string[] = [];
    for (let c = 0; c < col; c++) {
        colIds.push(`col-${c}`);
    }

    for (let r = 0; r < row; r++) {
        rows.push({
            colIds,
            rowId: `row-${r}`,
        });
    }
    return rows;
}

function initCols(col: number = INIT_COUNT.col) {
    const cols: ICol[] = [];
    for (let c = 0; c < col; c++) {
        cols.push({
            colId: `col-${c}`,
            type: ColType.text,
            name: `第${c}列`,
        });
    }
    return cols;
}

function initTables(table: number = INIT_COUNT.table, row: number = INIT_COUNT.row, col: number = INIT_COUNT.col) {
    const colIds: string[] = [];
    for (let c = 0; c < col; c++) {
        colIds.push(`col-${c}`);
    }

    const rowIds: string[] = [];
    for (let r = 0; r < row; r++) {
        rowIds.push(`row-${r}`);
    }

    const tables: ITable[] = [];
    for (let t = 0; t < table; t++) {
        tables.push({
            rowIds,
            colIds,
            tableId: `table-${t}`,
        });
    }
    return tables;
}

const defaultCells = initCells();
const defaultRows = initRows();
const defaultCols = initCols();
const defaultTables = initTables();

export { defaultCells, defaultRows, defaultCols, defaultTables };
