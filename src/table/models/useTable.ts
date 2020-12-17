import { useCallback, useState, useMemo } from 'react';
import { createModel } from 'hox';
import useRowModel from './useRow';
import useColModel from './useCol';

export interface ITable {
    tableId: string;
    rowIds: string[];
    colIds: string[];
}

let tableIdx = 1;

function useTable() {
    const [tables, setTables] = useState<ITable[]>([]);
    const { createRow, getRows, insertCol: rowInsertCol } = useRowModel();
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
        const newTables = [...tables, table];
        setTables(newTables);
    }, [tables, setTables]);


    // 表格插入行
    const insertRow = useCallback((tableId: string) => {
        const table = tablesMap.get(tableId)!;
        if (!table) {
            return;
        }

        console.log('table -> insertRow');
        const rowId = createRow(table.colIds);
        table.rowIds.push(rowId);
        setTables([...tables]);
    }, [createRow, tables, tablesMap]);

    // 表格插入列
    const insertCol = useCallback((tableId: string) => {
        const table = tablesMap.get(tableId);
        if (!table) {
            return;
        }

        console.log('table -> insertCol');
        const rows = getRows(table.rowIds);
        const colId = createCol();

        // 更新 行
        rows.forEach(row => {
            rowInsertCol(row.rowId, colId);
        });

        // 更新 表格
        table.colIds.push(colId);
        setTables([...tables]);
    }, [tables, createCol, rowInsertCol, tablesMap, getRows]);

    return {
        tables,
        tablesMap,
        createTable,
        insertRow,
        insertCol,
    };
}

export default createModel(useTable);
