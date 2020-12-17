import { useCallback, useState, useMemo } from 'react';
import useCellModel from './useCell';
import { createModel } from 'hox';

export interface IRow {
    rowId: string;
    colIds: string[];
}

let rowIdx = 1;

function useRow() {
    const [rows, setRows] = useState<IRow[]>([]);
    const { createCell } = useCellModel();
    const rowsMap = useMemo(() => {
        const map: Map<string, IRow> = new Map();
        rows.forEach((row) => map.set(row.rowId, row));
        return map;
    }, [rows]);

    const getRows = useCallback(
        (rowIds: string[]) => {
            const list: IRow[] = [];
            rowIds.forEach((rowId) => {
                if (rowsMap.has(rowId)) {
                    list.push(rowsMap.get(rowId)!);
                }
            });
            return list;
        },
        [rowsMap],
    );

    const createRow = useCallback(
        (colIds: string[]) => {
            const row = {
                rowId: `row-${rowIdx++}`,
                colIds: [...colIds],
            };

            // 创建对应的 cell
            colIds.forEach((colId) => {
                createCell(row.rowId, colId);
            });

            setRows((preRows) => [...preRows, row]);
            return row.rowId;
        },
        [createCell],
    );

    const rowInsertCol = useCallback(
        (rowId: string, colId: string) => {
            const row = rowsMap.get(rowId);
            if (!row) {
                return;
            }

            // 创建对应的 cell
            createCell(row.rowId, colId);

            row.colIds.push(colId);
            setRows((preRows) => [...preRows]);
        },
        [rowsMap, createCell],
    );

    return {
        rows,
        getRows,
        rowsMap,
        createRow,
        rowInsertCol,
    };
}

export default createModel(useRow);
