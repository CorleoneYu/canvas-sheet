import React from 'react';
import { Rect } from 'react-konva';

// 默认配置
export const barConfig = {
    size: 8,
    padding: 4,
};

interface IScrollBarProps {
    direction: 'x' | 'y';
    offset: number; // 偏移位置
    viewSize: number; // 视窗大小
    totalSize: number; // 整体大小
}

const ScrollBar: React.FC<IScrollBarProps> = (props) => {
    const { direction, viewSize, totalSize, offset } = props;
    const sizePercent = parseFloat((viewSize / totalSize).toFixed(2));
    const size = sizePercent * viewSize;

    const offsetPercent = parseFloat((offset / totalSize).toFixed(2));
    const location = offsetPercent * viewSize;

    if (direction === 'x') {
        return <Rect x={-location} y={0} width={size} height={barConfig.size} fill="#cbcdd1" cornerRadius={5} />;
    }

    return <Rect x={0} y={-location} height={size} width={barConfig.size} fill="#cbcdd1" cornerRadius={5} />;
};

export default ScrollBar;
