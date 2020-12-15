import React from 'react';
import { Cell } from '../../../models';
import { CellBox } from './style';

interface IProps {
    cell: Cell;
}

const CellComp = (props: IProps) => {
    const { cell } = props;

    return <CellBox data-row={cell.rowId} data-col={cell.colId} data-cell={cell.cellId}>
        {cell.data}
    </CellBox>
};

export default CellComp;
