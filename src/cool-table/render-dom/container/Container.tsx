import React from 'react';
import TableList from '../table';
import useTableModel from '../../models/useTable';
import { TableListBox } from './style';

const Container = () => {
    const { tables, createTable } = useTableModel();

    return (
        <TableListBox>
            <div className="table-operate">
                <button onClick={createTable}>添加表格</button>
            </div>
            <TableList tables={tables} />
        </TableListBox>
    );
};

export default Container;
