import React from 'react';
import { ITable } from '../../models/useTable';
import TableComp from './Table';

interface ITableListProps {
    tables: ITable[];
}

const TableList = (props: ITableListProps) => {
    const { tables } = props;

    return (
        <div className="table-list">
            {tables.map((table) => (
                <TableComp table={table} key={table.tableId} />
            ))}
        </div>
    );
};

export default TableList;
