import React from 'react';
import Cell from '../cell';
import { IRow } from '@/cool-table-canvas/typing';

interface IRowProps {
    row: IRow;
}

const Row = (props: IRowProps) => {
    const { row } = props;
    return (
        <>
            {row.cells.map((cell, index) => (
                <Cell cell={cell} key={index} />
            ))}
        </>
    );
};

export default Row;
