import React from 'react';
import { ICell, getCellId } from '../../models/useCell';
import { useSelectionModel, isCellActive } from '../../models/use-selection';
import useEditingModel, { isCellEditing } from '../../models/useEditing';
import Editor from './editors';

import { CellBox } from './style';

interface IProps {
    cell: ICell;
    rowIdx: number;
    colIdx: number;
    rowCount: number;
    colCount: number;
}

const CellComp = (props: IProps) => {
    const { cell, rowIdx, colIdx, colCount, rowCount } = props;
    const { selection } = useSelectionModel();
    const { editing } = useEditingModel();

    const isActive = isCellActive(selection, {
        rowIdx,
        colIdx,
    });

    const isEditing = isCellEditing(editing, {
        rowIdx,
        colIdx,
    });

    return (
        <CellBox
            className="cell"
            isActive={isActive}
            isFirstCol={colIdx === 0}
            isLastCol={colIdx === colCount - 1}
            isFirstRow={rowIdx === 0}
            isLastRow={rowIdx === rowCount - 1}
            data-is-cell={true}
            data-row-idx={rowIdx}
            data-col-idx={colIdx}
            data-row={cell.rowId}
            data-col={cell.colId}
            data-cell={getCellId(cell)}
        >
            {isEditing ? <Editor cell={cell} /> : <>{cell.value}</>}
        </CellBox>
    );
};

export default CellComp;
