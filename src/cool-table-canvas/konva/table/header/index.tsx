import React from 'react';
import { IColHeader, IRowHeader } from '@/cool-table-canvas/typing';
import { Rect, Text } from 'react-konva';

// 默认配置
export const headerConfig = {
    border: {
        color: '#cdcdcd',
        width: 1,
    },
    background: {
        normal: '#f9fafb',
    },
    color: {
        normal: 'rgba(0, 0, 0, 0.88)',
    },
    colHeaderHeight: 24,
    rowHeaderWidth: 50,
};

interface IColHeaderProps {
    colHeaders: IColHeader[];
}

export const ColHeader: React.FC<IColHeaderProps> = (props) => {
    const { colHeaders } = props;
    const { border, background, colHeaderHeight, color } = headerConfig;
    return (
        <>
            {colHeaders.map((colHeader, index) => (
                <React.Fragment key={colHeader.title}>
                    <Rect
                        key={`rect-${colHeader.title}`}
                        x={index * colHeader.width}
                        y={0}
                        width={colHeader.width}
                        height={colHeaderHeight}
                        fill={background.normal}
                        stroke={border.color}
                        strokeWidth={border.width}
                    />
                    <Text
                        key={`text-${colHeader.title}`}
                        y={0}
                        x={index * colHeader.width}
                        width={colHeader.width}
                        height={colHeaderHeight}
                        fill={color.normal}
                        align="center"
                        verticalAlign="middle"
                        text={colHeader.title}
                    />
                </React.Fragment>
            ))}
        </>
    );
};

interface IRowHeaderProps {
    rowHeaders: IRowHeader[];
}

export const RowHeader: React.FC<IRowHeaderProps> = (props) => {
    const { rowHeaders } = props;
    const { border, background, rowHeaderWidth, color } = headerConfig;

    return (
        <>
            {rowHeaders.map((rowHeader, index) => (
                <React.Fragment key={rowHeader.title}>
                    <Rect
                        key={`rect-${rowHeader.title}`}
                        x={0}
                        y={index * rowHeader.height}
                        width={rowHeaderWidth}
                        height={rowHeader.height}
                        fill={background.normal}
                        stroke={border.color}
                        strokeWidth={border.width}
                    />
                    <Text
                        key={`text-${rowHeader.title}`}
                        x={0}
                        y={index * rowHeader.height}
                        width={rowHeaderWidth}
                        height={rowHeader.height}
                        fill={color.normal}
                        align="center"
                        verticalAlign="middle"
                        text={rowHeader.title}
                    />
                </React.Fragment>
            ))}
        </>
    );
};

interface IAllSelectHeaderProps {}

// 行列交叉处，用于全选
export const AllSelectHeader: React.FC<IAllSelectHeaderProps> = (props) => {
    const { border, background, colHeaderHeight, rowHeaderWidth } = headerConfig;
    return (
        <Rect
            x={0}
            y={0}
            width={rowHeaderWidth}
            height={colHeaderHeight}
            fill={background.normal}
            stroke={border.color}
            strokeWidth={border.width}
        />
    );
};
