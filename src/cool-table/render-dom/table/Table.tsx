import React, { useCallback } from 'react';
import ColComp from '../col';
import RowList from '../row';
import useTableModel, { ITable } from '../../models/useTable';
import useColModel from '../../models/useCol';
import useRowModel from '../../models/useRow';
import { useSelectionModel, isSamePos } from '../../models/use-selection';
import useEditingModel from '../../models/useEditing';
import { TableBox } from './style';
import { getPositionFromEvent } from './utils';

interface ITableProps {
    table: ITable;
}

const TableComp = (props: ITableProps) => {
    const { table } = props;
    const { insertRow, insertCol } = useTableModel();
    const { getCols } = useColModel();
    const { getRows } = useRowModel();
    const { updateSelection, range } = useSelectionModel();
    const { editing, updateEditing } = useEditingModel();

    const rows = getRows(table.rowIds);
    const cols = getCols(table.colIds);

    const handleInsertRow = useCallback(() => {
        insertRow(table.tableId);
    }, [table, insertRow]);

    const handleInsertCol = useCallback(() => {
        insertCol(table.tableId);
    }, [table, insertCol]);

    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            const pos = getPositionFromEvent(event);
            console.log('handle click', pos);
            if (!pos) {
                updateSelection(null);
                updateEditing(null);
                return;
            }

            updateSelection(pos);
            if (editing.position && !isSamePos(editing.position, pos)) {
                updateEditing(null);
            }
        },
        [updateSelection, updateEditing, editing.position],
    );

    const handleDClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            const pos = getPositionFromEvent(event);
            console.log('handle double click', pos);
            if (!pos) {
                return;
            }

            updateEditing(pos);
        },
        [updateEditing],
    );

    return (
        <TableBox onClick={handleClick} onDoubleClick={handleDClick}>
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
                    activeCell - row: {range?.start.rowIdx} col: {range?.start.colIdx}
                </p>
                <p>editing - row:</p>
            </div>
        </TableBox>
    );
};

export default TableComp;
