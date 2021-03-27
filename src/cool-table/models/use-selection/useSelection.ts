import { useCallback, useState, useMemo } from 'react';
import { createModel } from 'hox';

// 单点
export interface IPosition {
    rowIdx: number;
    colIdx: number;
}

// 范围
export interface IRange {
    start: IPosition;
    end: IPosition;
}

// 选区
export interface ISelection {
    ranges: IRange[];
}

const defaultSelection: ISelection = {
    ranges: [],
};

function useSelection() {
    const [selection, setSelection] = useState<ISelection>(defaultSelection);

    const updateSelection = useCallback((pos: IPosition | null) => {
        if (!pos) {
            setSelection({ ranges: [] });
            return;
        }

        const { colIdx, rowIdx } = pos;
        const range: IRange = {
            start: {
                colIdx,
                rowIdx,
            },
            end: {
                colIdx,
                rowIdx,
            },
        };
        setSelection({
            ranges: [range],
        });
    }, []);

    const range = useMemo(() => {
        return selection.ranges.length ? selection.ranges[0] : null;
    }, [selection]);

    return {
        selection,
        range,
        updateSelection,
    };
}

const useSelectionModel = createModel(useSelection);
export { useSelectionModel };
