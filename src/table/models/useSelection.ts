import { useCallback, useState } from 'react';
import { createModel } from 'hox';

// 单点
export interface IPosition {
    rowIdx: number;
    colIdx: number;
}

// 范围
export interface IRange {
    startRowIdx: number;
    endRowIdx: number;
    startColIdx: number;
    endColIdx: number;
}

// 选区
export interface ISelection {
    position: IPosition | null;
    ranges: IRange[];
}

export function isSamePos(posA: IPosition, posB: IPosition) {
    return posA.rowIdx === posB.rowIdx && posA.colIdx === posB.colIdx;
}

export function isCellActive(selection: ISelection, pos: IPosition) {
    if (!selection.position) {
        return false;
    }

    const { colIdx, rowIdx } = pos;
    if (selection.position.colIdx !== colIdx || selection.position.rowIdx !== rowIdx) {
        return false;
    }

    return true;
}

const defaultSelection: ISelection = {
    position: null,
    ranges: [],
};

function useSelection() {
    const [selection, setSelection] = useState<ISelection>(defaultSelection);

    const setSelectPosition = useCallback((position: IPosition | null) => {
        setSelection((preSelection) => ({
            position,
            ranges: preSelection.ranges,
        }));
    }, []);

    return {
        selection,
        setSelectPosition,
    };
}

export default createModel(useSelection);
