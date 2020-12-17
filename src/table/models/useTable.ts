import { useState } from 'react';
import { createModel } from 'hox';

export interface ITable {
    rowIds: string[];
    colIds: string[]
}


function useTable() {
    const [tables, setTables] = useState<ITable[]>([]);

    return {
        tables,
        setTables,
    };
}

export default createModel(useTable);
