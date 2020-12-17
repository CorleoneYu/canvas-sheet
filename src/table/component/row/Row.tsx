import React from 'react';
import { IRow } from '../../models/useRow';
import useCellModel, { getCellId } from '../../models/useCell';
import Header from './Header';
import CellComp from '../cell';
import { RowBox } from './style';

interface IProps {
    index: number;
    row: IRow;
}

const RowComp = (props: IProps) => {
    const { row, index } = props;
    const { getCellsByRowId } = useCellModel();
    const cells = getCellsByRowId(row.rowId);

    return (
        <RowBox>
            <Header index={index} row={row} />
            <div className="cell-list">
                {cells.map((cell) => (
                    <CellComp key={getCellId(cell)} cell={cell} />
                ))}
            </div>
        </RowBox>
    );
};

export default RowComp;
