import React, { useCallback, useState, useMemo } from 'react';
import Konva from 'konva';
import { Group } from 'react-konva';
import ScrollBar, { barConfig } from '../scroll-bar';

export interface IOffset {
    x: number;
    y: number;
}

interface IScrollViewProps {
    width: number;
    height: number;
    contentWidth: number;
    contentHeight: number;
    onScroll?: (offset: Partial<IOffset>) => void;
}

const maxScrollX = 0;
const maxScrollY = 0;

const { size, padding } = barConfig;

/**
 * 滚动需要
 * 1. 容器宽高 width height
 * 2. 内容宽高 ContentWidth ContentHeight
 * ⚠️ : 默认 width < ContentWidth，则:
 * 1. 最大滚动值固定 0，最小则为 width - ContentWidth
 * 2. 高度同理
 */
const ScrollView: React.FC<IScrollViewProps> = (props) => {
    const { width, height, contentWidth, contentHeight, children, onScroll } = props;
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);

    const minScrollX = useMemo(() => width - contentWidth, [width, contentWidth]);
    const minScrollY = useMemo(() => height - contentHeight, [height, contentHeight]);

    const handleWheel = useCallback((event: Konva.KonvaEventObject<WheelEvent>) => {
        const { deltaX, deltaY } = event.evt;
        const delta = 1;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            setX((pre) => {
                const value = pre - delta * deltaX;
                const newX = limit(maxScrollX, minScrollX, value);
                onScroll?.({
                    x: newX,
                });
                return newX;
            });
            return;
        }

        setY((pre) => {
            const value = pre -delta * deltaY;
            const newY = limit(maxScrollY, minScrollY, value);
            onScroll?.({
                y: newY,
            });
            return newY;
        });
    }, [minScrollX, minScrollY, onScroll]);
    
    return (
        <>
            <Group x={x} y={y} onWheel={handleWheel}>
                {children}
            </Group>
            <Group x={0} y={height - padding - size}>
                {/* x 滚动轴 */}
                <ScrollBar  direction="x" offset={x} viewSize={width} totalSize={contentWidth} />
            </Group>
            <Group x={ width - padding - size } y={0}>
                {/* y 滚动轴 */}
                <ScrollBar  direction="y" offset={y} viewSize={height} totalSize={contentHeight} />
            </Group>
        </>
        
    )
}

function limit(max: number, min: number, value: number) {
    if (value > max) {
        return max;
    }

    if (value < min) {
        return min;
    }

    return value;
}

export default ScrollView;
