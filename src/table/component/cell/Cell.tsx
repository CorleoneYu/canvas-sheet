import React from 'react';
import { ICell, getCellId } from '../../models/useCell';
import { CellBox } from './style';

interface IProps {
    cell: ICell;
    isLastRow: boolean;
}

const CellComp = (props: IProps) => {
    const { cell, isLastRow } = props;

    return (
        <CellBox isLastRow={isLastRow} data-row={cell.rowId} data-col={cell.colId} data-cell={getCellId(cell)}>
            {cell.value}
        </CellBox>
    );
};

export default CellComp;
