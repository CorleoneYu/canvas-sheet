import React from 'react';
import { Rect, Stage, Layer } from 'react-konva';
import { defaultConfig } from '@/cool-table-canvas/constant';

const { background, border } = defaultConfig.style.header;

interface IAllSelectHeaderProps {
    width: number;
    height: number;
}

const AllSelectHeader = (props: IAllSelectHeaderProps) => {
    const { width, height } = props;
    return (
        <Stage width={width} height={height}>
            <Layer>
                <Rect
                    x={0}
                    y={0}
                    width={width}
                    height={height}
                    fill={background.normal}
                    stroke={border.color}
                    strokeWidth={border.width}
                />
            </Layer>
        </Stage>
    );
};

export default AllSelectHeader;
