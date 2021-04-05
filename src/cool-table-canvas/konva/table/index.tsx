import React, { useState } from 'react';
import Row from '../row';
import Header from '../header';
import { Group } from 'react-konva';
import { ITable } from '@/cool-table-canvas/typing';
import { defaultTable } from '@/cool-table-canvas/constant/mock';

const Table = () => {
    const [table, setTable] = useState<ITable>(defaultTable);
    const { header } = table;
    return (
        <Group>
            <Header header={header} />
            {table.rows.map((row, index) => (
                <Row row={row} key={index} />
            ))}
        </Group>
    );
};

export default Table;
