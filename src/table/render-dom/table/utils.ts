import React from 'react';

export function getPositionFromEvent(event: React.MouseEvent) {
    const target = findCell(event);
    if (!target) {
        return null;
    }

    const rowIdx = parseInt(target.getAttribute('data-row-idx') || '');
    const colIdx = parseInt(target.getAttribute('data-col-idx') || '');

    return {
        rowIdx,
        colIdx,
    };
}

function findCell(event: React.MouseEvent): Element | null {
    const path: Element[] = (event.nativeEvent as any).path || [];
    for (let i = 0; i < path.length; i++) {
        const cur = path[i];
        if (cur.getAttribute('data-is-cell')) {
            return cur;
        }
    }
    return null;
}
