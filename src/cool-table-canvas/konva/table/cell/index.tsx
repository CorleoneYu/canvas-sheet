import React from 'react';
import { Rect } from 'react-konva';
import { ICell } from '@/cool-table-canvas/typing';
import { IRenderAttr } from '../../base/scroll-view';

interface ICellProps {
    cell: ICell;
    renderAttr: IRenderAttr;
}

export const cellConfig = {
    border: {
        color: '#cdcdcd',
        width: 1,
    },
};

const Cell = (props: ICellProps) => {
    const { renderAttr } = props;
    const { size, location } = renderAttr;
    const { border } = cellConfig;

    return (
        <Rect
            x={location.x}
            y={location.y}
            width={size.width}
            height={size.height}
            stroke={border.color}
            strokeWidth={border.width}
        />
    );
};

export default Cell;
