import React, { useMemo } from 'react';
import { IRow } from '@/cool-table/typing';
import useCellModel from '../../models/useCell';
import Header from './Header';
import CellList from '../cell';
import { RowBox } from './style';

interface IProps {
    rowCount: number; // 总共行数
    index: number;
    row: IRow;
}

const RowComp = (props: IProps) => {
    const { row, index, rowCount } = props;
    const { getCellsByRowId } = useCellModel();
    const cells = useMemo(() => {
        return getCellsByRowId(row.rowId);
    }, [getCellsByRowId, row.rowId]);

    return (
        <RowBox>
            <Header index={index} />
            <CellList cells={cells} rowCount={rowCount} rowIdx={index} />
        </RowBox>
    );
};

export default RowComp;
