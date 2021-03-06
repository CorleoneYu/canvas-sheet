import { useCallback, useState, useMemo } from 'react';
import { createModel } from 'hox';
import useRowModel from './useRow';
import useColModel from './useCol';
import { ITable } from '@/cool-table/typing';
import { defaultTables } from '@/cool-table/constant/mock';

let tableIdx = 1 + 1;

function useTable() {
    const [tables, setTables] = useState<ITable[]>(defaultTables);
    const { createRow, getRows, rowInsertCol } = useRowModel();
    const { createCol } = useColModel();

    const tablesMap = useMemo(() => {
        const map: Map<string, ITable> = new Map();
        tables.forEach((table) => map.set(table.tableId, table));
        return map;
    }, [tables]);

    const createTable = useCallback(() => {
        const table = {
            tableId: `table-${tableIdx++}`,
            rowIds: [],
            colIds: [],
        };

        setTables([...tables, table]);
        return table.tableId;
    }, [tables]);

    // 表格插入行
    const insertRow = useCallback(
        (tableId: string) => {
            const table = tablesMap.get(tableId)!;
            if (!table) {
                return;
            }

            const rowId = createRow(table.colIds);
            table.rowIds.push(rowId);
            setTables((preTables) => [...preTables]);
        },
        [createRow, tablesMap],
    );

    // 表格插入列
    const insertCol = useCallback(
        (tableId: string) => {
            const table = tablesMap.get(tableId);
            if (!table) {
                return;
            }

            const colId = createCol();

            const rows = getRows(table.rowIds);
            rows.forEach((row, index) => {
                rowInsertCol(row.rowId, colId);
            });

            table.colIds.push(colId);
            setTables((preTables) => [...preTables]);
        },
        [createCol, rowInsertCol, tablesMap, getRows],
    );

    return {
        tables,
        tablesMap,
        createTable,
        insertRow,
        insertCol,
    };
}

export default createModel(useTable);
