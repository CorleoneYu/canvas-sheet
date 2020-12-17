import React from 'react';
import TableComp from '../table';
import useTableModel from '../../models/useTable';
import { TableListBox } from './style';

const TableList = () => {
    const { tables, createTable } = useTableModel();

    return <TableListBox>
        <div className="table-operate">
            <button onClick={createTable}>添加表格</button>
        </div>
        <div className="table-list">
            {tables.map(table => <TableComp table={table} key={table.tableId} />)}
        </div>
    </TableListBox>
}

export default TableList;
