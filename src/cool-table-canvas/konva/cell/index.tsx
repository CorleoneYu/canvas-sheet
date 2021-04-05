import React from 'react';
import { Rect } from 'react-konva';
import { ICell } from '@/cool-table-canvas/typing';

interface ICellProps {
    cell: ICell;
}

const Cell = (props: ICellProps) => {
    const { cell } = props;
    const { width, height, x, y, border } = cell;

    return <Rect x={x} y={y} width={width} height={height} stroke={border.color} strokeWidth={border.width} />;
};

export default Cell;
