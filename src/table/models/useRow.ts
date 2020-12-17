import { useCallback, useState } from 'react';
import { createModel } from 'hox';

export interface IRow {
    rowId: string;
    colIds: string[];
}

let rowIdx = 1;

function useRow() {
    const [rows, setRows] = useState<IRow[]>([]);

    const createRow = useCallback(() => {
        const row = {
            rowId: `row-${rowIdx++}`,
            colIds: [],
        };
        const newRows = [...rows, row];
        setRows(newRows);
    }, [rows, setRows]);

    return {
        rows,
        setRows,
        createRow,
    };
}

export default createModel(useRow);
