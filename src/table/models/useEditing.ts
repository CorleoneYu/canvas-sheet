/**
 * 标识当前处于编辑态的单元格
 */
import { useState, useCallback } from 'react';
import { createModel } from 'hox';
import { IPosition } from './useSelection';

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

    const setEditingPosition = useCallback((position: IPosition | null) => {
        setEditing((preEditing) => ({
            position,
        }));
    }, []);
    return {
        editing,
        setEditingPosition,
    };
}

export default createModel(useEditing);
