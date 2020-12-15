import React from 'react';
import { Row } from '../../../models';
import manager from '../../constant/manager';
import Header from './Header';
import CellComp from '../cell';
import { RowBox } from './style';

interface IProps {
    index: number;
    row: Row;
}

const RowComp = (props: IProps) => {
    const { row, index } = props;
    const cells = manager.getCells(row.cellIds);

    return (
        <RowBox>
            <Header index={index} row={row} />
            <div className="cell-list">
                {cells.map((cell) => (
                    <CellComp key={cell.cellId} cell={cell} />
                ))}
            </div>
        </RowBox>
    );
};

export default RowComp;
