import React from 'react';
import { Rect } from 'react-konva';
import { ICell } from '@/cool-table-canvas/typing';

interface ICellProps {
    cell: ICell;
    x: number;
    y: number;
}

export const cellConfig = {
    border: {
        color: '#cdcdcd',
        width: 1,
    },
};

const Cell = (props: ICellProps) => {
    const { cell, x, y } = props;
    const { width, height } = cell;
    const { border } = cellConfig;

    return <Rect x={x} y={y} width={width} height={height} stroke={border.color} strokeWidth={border.width} />;
};

export default Cell;
