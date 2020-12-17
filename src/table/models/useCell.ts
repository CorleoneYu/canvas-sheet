import { useState } from 'react';
import { createModel } from 'hox';

export interface ICell {
    rowId: string;
    colId: string;
    value: string;
}

function useCell() {
    const [cells, setCells] = useState<ICell[]>([]);

    return {
        cells,
        setCells,
    };
}

export default createModel(useCell);
