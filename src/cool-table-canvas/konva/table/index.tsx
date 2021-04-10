import React from 'react';
import { IRow } from '@/cool-table-canvas/typing';
import Row from '../row';

interface ITableProps {
    rows: IRow[];
}
const Table: React.FC<ITableProps> = (props) => {
    const { rows } = props;

    return (
        <>
            {rows.map((row, index) => (
                <Row row={row} key={index} />
            ))}
        </>
    );
};

export default Table;
