import { IPosition, IRange, ISelection } from './useSelection';

/**
 * 判断是否为同一个位置
 * @param posA
 * @param posB
 */
export function isSamePos(posA: IPosition, posB: IPosition) {
    return posA.rowIdx === posB.rowIdx && posA.colIdx === posB.colIdx;
}

/**
 * 判断 位置 是否在 范围里
 * @param range
 * @param pos
 */
export function isPosInRange(range: IRange, pos: IPosition) {
    const { start, end } = range;
    if (pos.rowIdx < start.rowIdx || end.rowIdx < pos.rowIdx) {
        return false;
    }

    if (pos.colIdx < start.colIdx || end.colIdx < pos.colIdx) {
        return false;
    }

    return true;
}

/**
 * 判断 位置 是否在 选区里（即 range[] 里）
 * @param selection
 * @param pos
 */
export function isCellActive(selection: ISelection, pos: IPosition) {
    if (!selection.ranges.length) {
        return false;
    }

    for (let i = 0; i < selection.ranges.length; i++) {
        const curRange = selection.ranges[i];
        if (isPosInRange(curRange, pos)) {
            return true;
        }
    }

    return false;
}
