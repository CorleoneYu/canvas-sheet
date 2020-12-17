import { useCallback, useState } from 'react';
import { createModel } from 'hox';
import { ColType } from '../../models/col/Col';

export interface ICol {
    colId: string;
    type: ColType;
    name: string;
}

let colIdx = 1;

function useCol() {
    const [cols, setCols] = useState<ICol[]>([]);

    const createCol = useCallback(
        (type: ColType, name: string = '未命名列') => {
            const col = {
                type,
                name,
                colId: `col-${colIdx++}`,
            };
            const newCols = [...cols, col];
            setCols(newCols);
        },
        [setCols, cols],
    );

    return {
        cols,
        setCols,
        createCol,
    };
}

export default createModel(useCol);
