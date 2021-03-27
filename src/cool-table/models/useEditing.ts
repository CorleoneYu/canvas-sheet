/**
 * 标识当前处于编辑态的单元格
 */
import { useState, useCallback } from 'react';
import { createModel } from 'hox';
import { IPosition } from './use-selection';

interface IEditing {
    position: IPosition | null;
}

const defaultEditing: IEditing = {
    position: null,
};

export function isCellEditing(editing: IEditing, pos: IPosition) {
    if (!editing.position) {
        return false;
    }

    const { colIdx, rowIdx } = pos;
    if (colIdx !== editing.position.colIdx || rowIdx !== editing.position.rowIdx) {
        return false;
    }

    return true;
}

function useEditing() {
    const [editing, setEditing] = useState(defaultEditing);

    const updateEditing = useCallback((position: IPosition | null) => {
        setEditing((preEditing) => ({
            position,
        }));
    }, []);
    return {
        editing,
        updateEditing,
    };
}

export default createModel(useEditing);
