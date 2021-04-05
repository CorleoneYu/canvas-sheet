import React from 'react';
import RowComp from './Row';
import { IRow } from '@/cool-table/typing';

interface IRowListProps {
    rows: IRow[];
}

const RowList = (props: IRowListProps) => {
    const { rows } = props;
    return (
        <div className="row-list">
            {rows.map((row, index) => (
                <RowComp key={row.rowId} row={row} rowCount={rows.length} index={index} />
            ))}
        </div>
    );
};

export default RowList;
