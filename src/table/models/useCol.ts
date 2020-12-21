import { useCallback, useMemo, useState } from 'react';
import { createModel } from 'hox';
import { ColType } from '../../models/col/Col';
import { INIT_COUNT, defaultCols } from '../constant/mock';

export interface ICol {
    colId: string;
    type: ColType;
    name: string;
}

let colIdx = INIT_COUNT.col + 1;

function useCol() {
    const [cols, setCols] = useState<ICol[]>(defaultCols);

    const colsMap = useMemo(() => {
        const map: Map<string, ICol> = new Map();
        cols.forEach((col) => map.set(col.colId, col));
        return map;
    }, [cols]);

    const getCols = useCallback(
        (colIds: string[]) => {
            const list: ICol[] = [];
            colIds.forEach((colId) => {
                const col = colsMap.get(colId);
                if (col) {
                    list.push(col);
                }
            });
            return list;
        },
        [colsMap],
    );

    const createCol = useCallback((type: ColType = ColType.text, name?: string) => {
        const colName = name ? name : `未命名列-${colIdx}`;
        const col = {
            type,
            name: colName,
            colId: `col-${colIdx++}`,
        };

        setCols((preCols) => [...preCols, col]);
        return col.colId;
    }, []);

    return {
        cols,
        colsMap,
        getCols,
        createCol,
    };
}

export default createModel(useCol);
