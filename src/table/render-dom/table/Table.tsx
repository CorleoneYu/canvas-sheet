import React, { useCallback } from 'react';
import ColComp from '../col';
import RowList from '../row';
import useTableModel, { ITable } from '../../models/useTable';
import useColModel from '../../models/useCol';
import useRowModel from '../../models/useRow';
import useSelectionModel from '../../models/useSelection';
import { TableBox } from './style';

interface ITableProps {
    table: ITable;
}

const TableComp = (props: ITableProps) => {
    const { table } = props;
    const { insertRow, insertCol } = useTableModel();
    const { getCols } = useColModel();
    const { getRows } = useRowModel();
    const { setPosition, selection } = useSelectionModel();
    const rows = getRows(table.rowIds);
    const cols = getCols(table.colIds);

    const handleInsertRow = useCallback(() => {
        insertRow(table.tableId);
    }, [table, insertRow]);

    const handleInsertCol = useCallback(() => {
        insertCol(table.tableId);
    }, [table, insertCol]);

    const handleClick = useCallback(
        (event: React.MouseEvent) => {
            const target: Element = event.target as Element;
            const rowIdx = parseInt(target.getAttribute('data-row-idx') || '');
            const colIdx = parseInt(target.getAttribute('data-col-idx') || '');
            console.log('handleClick', rowIdx, colIdx);
            if (isNaN(rowIdx) || isNaN(colIdx)) {
                setPosition({
                    colIdx: -1,
                    rowIdx: -1,
                });
                return;
            }

            setPosition({
                colIdx,
                rowIdx,
            });
        },
        [setPosition],
    );

    return (
        <TableBox onClick={handleClick}>
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
                <RowList rows={rows} />
            </div>
            <div className="table-footer">
                <p>
                    activeCell - row: {selection.position.rowIdx} col: {selection.position.colIdx}
                </p>
            </div>
        </TableBox>
    );
};

export default TableComp;
