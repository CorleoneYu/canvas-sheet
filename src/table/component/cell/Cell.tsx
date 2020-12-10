import React from 'react';
import { Cell } from '../../models';
import { CellBox } from './style';

interface IProps {
    cell: Cell;
}

const CellComp = (props: IProps) => {
    const { cell } = props;

    return <CellBox>
        {cell.data}
    </CellBox>
};

export default CellComp;
