import React, { useMemo } from 'react';
import { IRow } from '../../models/useRow';
import useCellModel, { getCellId } from '../../models/useCell';
import Header from './Header';
import CellComp from '../cell';
import { RowBox } from './style';

interface IProps {
    isLastRow: boolean;
    index: number;
    row: IRow;
}

const RowComp = (props: IProps) => {
    const { row, index, isLastRow } = props;
    const { getCellsByRowId } = useCellModel();
    const cells = useMemo(() => {
        return getCellsByRowId(row.rowId);
    }, [getCellsByRowId, row.rowId]);

    return (
        <RowBox>
            <Header index={index} row={row} />
            <div className="cell-list">
                {cells.map((cell) => (
                    <CellComp key={getCellId(cell)} cell={cell} isLastRow={isLastRow} />
                ))}
            </div>
        </RowBox>
    );
};

export default RowComp;
