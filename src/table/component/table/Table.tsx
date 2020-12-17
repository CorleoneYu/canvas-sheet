import React, { useState } from 'react';
import { Table, Selection } from '../../../models';
import selectionData from '../../constant/selection';
import RowComp from '../row';
import ColComp from '../col';

import { TableBox } from './style';

const TableComp = () => {
    const [selection] = useState<Selection>(selectionData);

    return (
        <TableBox>
            <div className="table-header"></div>
            <div className="table-body"></div>
        </TableBox>
    );
};

export default TableComp;
