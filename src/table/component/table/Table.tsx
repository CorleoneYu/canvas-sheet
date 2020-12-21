import React, { useCallback } from 'react';
import RowComp from '../row';
import ColComp from '../col';
import useTableModel, { ITable } from '../../models/useTable';
import useColModel from '../../models/useCol';
import useRowModel from '../../models/useRow';
import { TableBox } from './style';

interface ITableProps {
    table: ITable;
}

const TableComp = (props: ITableProps) => {
    const { table } = props;
    const { insertRow, insertCol } = useTableModel();
    const { getCols } = useColModel();
    const { getRows } = useRowModel();

    const rows = getRows(table.rowIds);
    const cols = getCols(table.colIds);

    const handleInsertRow = useCallback(() => {
        insertRow(table.tableId);
    }, [table, insertRow]);

    const handleInsertCol = useCallback(() => {
        insertCol(table.tableId);
    }, [table, insertCol]);

    return (
        <TableBox>
            <h2>id: {table.tableId}</h2>
            <div className="table-operate">
                <button className="table-btn" onClick={handleInsertRow}>
                    添加行
                </button>
                <button className="table-btn" onClick={handleInsertCol}>
                    添加列
                </button>
            </div>
            <div className="table-header">
                {cols.map((col) => (
                    <ColComp key={col.colId} col={col} />
                ))}
            </div>
            <div className="table-body">
                {rows.map((row, index) => (
                    <RowComp key={row.rowId} index={index} row={row} isLastRow={index === rows.length - 1} />
                ))}
            </div>
        </TableBox>
    );
};

export default TableComp;
