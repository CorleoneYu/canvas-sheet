import { useCallback, useState } from 'react';
import { createModel } from 'hox';

// 单点
interface IPosition {
    rowIdx: number;
    colIdx: number;
}

// 范围
interface IRange {
    startRowIdx: number;
    endRowIdx: number;
    startColIdx: number;
    endColIdx: number;
}

// 选区
interface ISelection {
    position: IPosition;
    ranges: IRange[];
}

export function isCellActive(selection: ISelection, rowIdx: number, colIdx: number) {
    if (!selection.position) {
        return false;
    }

    if (selection.position.colIdx !== colIdx || selection.position.rowIdx !== rowIdx) {
        return false;
    }

    return true;
}

const defaultSelection: ISelection = {
    position: {
        rowIdx: -1,
        colIdx: -1,
    },
    ranges: [],
};

function useSelection() {
    const [selection, setSelection] = useState<ISelection>(defaultSelection);

    const setPosition = useCallback((position: IPosition) => {
        setSelection((preSelection) => ({
            position,
            ranges: preSelection.ranges,
        }));
    }, []);

    return {
        selection,
        setPosition,
    };
}

export default createModel(useSelection);
