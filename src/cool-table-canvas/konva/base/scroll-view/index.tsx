import React, { useCallback, useState, useMemo } from 'react';
import Konva from 'konva';
import { Group, Rect, Text } from 'react-konva';
import ScrollBar, { barConfig } from '../scroll-bar';

export interface IOffset {
    x: number;
    y: number;
}

export interface ISize {
    width: number;
    height: number;
}

export interface ILocation {
    x: number;
    y: number;
}

interface IItem extends ISize, ILocation {
    text: string;
}

interface IScrollViewProps {
    width: number;
    height: number;
    contentWidth: number;
    contentHeight: number;
    onScroll?: (offset: Partial<IOffset>) => void;
    list: ISize[];
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
    const { width, height, contentWidth, contentHeight, children, onScroll, list } = props;
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);

    const minScrollX = useMemo(() => width - contentWidth, [width, contentWidth]);
    const minScrollY = useMemo(() => height - contentHeight, [height, contentHeight]);

    const handleWheel = useCallback(
        (event: Konva.KonvaEventObject<WheelEvent>) => {
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
                const value = pre - delta * deltaY;
                const newY = limit(maxScrollY, minScrollY, value);
                onScroll?.({
                    y: newY,
                });
                return newY;
            });
        },
        [minScrollX, minScrollY, onScroll],
    );

    const tops = useMemo(() => {
        const tops = [0];
        list.forEach((item) => {
            const current = item.height + tops[tops.length - 1];
            tops.push(current);
        });
        console.log('tops', tops);
        return tops;
    }, [list]);

    const visibleList: IItem[] = useMemo(() => {
        const offsetY = Math.abs(y);
        const firstIndex = getTargetIdx(tops, offsetY) - 1;
        const lastIndex = getTargetIdx(tops, offsetY + height);
        console.log('firstIndex', firstIndex, 'offsetY', offsetY);
        console.log('lastIndex', lastIndex, 'offsetY + height', offsetY + height);

        let current = y % 24;
        const visibleList: IItem[] = list.slice(firstIndex, lastIndex + 1).map((size, index) => {
            const visible: IItem = {
                ...size,
                x: 0,
                y: current,
                text: `${firstIndex + index}`,
            };
            current += size.height;
            return visible;
        });
        console.log('visibleList: ', visibleList);
        return visibleList;
    }, [tops, y, height, list]);

    return (
        <>
            {/* <Group x={x} y={y} onWheel={handleWheel}>
                {children}
            </Group> */}
            <Group onWheel={handleWheel}>
                {visibleList.map((item) => (
                    <React.Fragment key={`test-${item.text}`}>
                        <Rect
                            x={item.x}
                            y={item.y}
                            width={item.width}
                            height={item.height}
                            stroke="#cdcdcd"
                            strokeWidth={1}
                        />
                        <Text
                            x={item.x}
                            y={item.y}
                            width={item.width}
                            height={item.height}
                            fill='rgba(0, 0, 0, 0.88)'
                            align="center"
                            verticalAlign="middle"
                            text={`${item.text}`}
                        />
                    </React.Fragment>
                ))}
            </Group>
            <Group x={0} y={height - padding - size}>
                {/* x 滚动轴 */}
                <ScrollBar direction="x" offset={x} viewSize={width} totalSize={contentWidth} />
            </Group>
            <Group x={width - padding - size} y={0}>
                {/* y 滚动轴 */}
                <ScrollBar direction="y" offset={y} viewSize={height} totalSize={contentHeight} />
            </Group>
        </>
    );
};

function limit(max: number, min: number, value: number) {
    if (value > max) {
        return max;
    }

    if (value < min) {
        return min;
    }

    return value;
}

/**
 * 获取 target 在数组中合适的位置
 * @param numArray 递增的数组
 * @param target
 */
function getTargetIdx(numArray: number[], target: number) {
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > target) {
            return i;
        }
    }
    return numArray.length;
}

export default ScrollView;
