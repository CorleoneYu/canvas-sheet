import React from 'react';
import { Row } from '../../../models';
import Header from './Header';
import CellComp from '../cell';
import { RowBox } from './style';

interface IProps {
    index: number;
    row: Row;
}

const RowComp = (props: IProps) => {
    const { row, index } = props;

    return (
        <RowBox>
            <Header index={index} row={row} />
            <div className="cell-list"></div>
        </RowBox>
    );
};

export default RowComp;
