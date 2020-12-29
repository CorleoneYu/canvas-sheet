import React, { useCallback } from 'react';
import ColComp from '../col';
import RowList from '../row';
import useTableModel, { ITable } from '../../models/useTable';
import useColModel from '../../models/useCol';
import useRowModel from '../../models/useRow';
import useSelectionModel, { isSamePos } from '../../models/useSelection';
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
    const { setSelectPosition, selection } = useSelectionModel();
    const { editing, setEditingPosition } = useEditingModel();

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
            console.log('handle click', (event.nativeEvent as any).path, pos);
            if (!pos) {
                setSelectPosition(null);
                setEditingPosition(null);
                return;
            }

            setSelectPosition(pos);
            if (editing.position && !isSamePos(editing.position, pos)) {
                setEditingPosition(null);
            }
        },
        [setSelectPosition, setEditingPosition, editing.position],
    );

    const handleDClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            const pos = getPositionFromEvent(event);
            console.log('handle double click', (event.nativeEvent as any).path, pos);
            if (!pos) {
                return;
            }

            setEditingPosition(pos);
        },
        [setEditingPosition],
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
                    activeCell - row: {selection.position?.rowIdx} col: {selection.position?.colIdx}
                </p>
                <p>
                    editing - row: {editing.position?.rowIdx} col: {editing.position?.colIdx}
                </p>
            </div>
        </TableBox>
    );
};

export default TableComp;
