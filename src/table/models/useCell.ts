import { useCallback, useMemo, useState } from 'react';
import { createModel } from 'hox';

export interface ICell {
    rowId: string;
    colId: string;
    value: string;
}

export const getCellId = (cell: ICell) => {
    return `${cell.rowId}-${cell.colId}`;
}

function useCell() {
    const [cells, setCells] = useState<ICell[]>([]);

    const cellsMap = useMemo(() => {
        const map: Map<string, ICell> = new Map();
        cells.forEach(cell => map.set(getCellId(cell), cell));
        return map;
    }, [cells]);

    const getCells = useCallback((cellIds: string[]) => {
        const list: ICell[] = [];
        cellIds.forEach((cellId) => {
            const cell = cellsMap.get(cellId);
            if (!cell) {
                return;
            }

            list.push(cell);
        })
    }, [cellsMap]);

    // 获取整行数据
    const getCellsByRowId = useCallback((rowId: string) => {
        return cells.filter((cell) => cell.rowId === rowId);
    }, [cells]);

    // 获取整列数据
    const getCellsByColId = useCallback((colId: string) => {
        return cells.filter((cell) => cell.colId === colId);
    }, [cells]);

    const createCell = useCallback((rowId: string, colId: string) => {
        const cell = {
            rowId,
            colId,
            value: '空'
        };
        const newCells = [...cells, cell];
        setCells(newCells);
        return cell;
    }, [cells]);

    return {
        cells,
        setCells,
        getCells,
        createCell,
        getCellsByRowId,
        getCellsByColId,
    };
}

export default createModel(useCell);
