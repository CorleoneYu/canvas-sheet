import React, { useState } from 'react';
import { Table } from '../../../models';
import tableData from '../../constant/mock';
import RowComp from '../row';
import ColComp from '../col';

import { TableBox } from './style';

const TableComp = () => {
    const [table] = useState<Table>(tableData);
    const rows = table.rows;
    const cols = table.cols;

    return <TableBox>
        <div className="table-header">
            {cols.map(col => <ColComp col={col} key={col.colId} />)}
        </div>
        <div className="table-body">
            {rows.map((row, index) => <RowComp index={index} row={row} key={row.rowId} />)}
        </div>
    </TableBox>;
    
};

export default TableComp;