import React, { useCallback, useMemo, ReactNode } from 'react';
import Konva from 'konva';
import { Group, Rect, Text } from 'react-konva';
import ScrollBar, { barConfig } from '../scroll-bar';
import useScroll from './useScroll';
export interface IOffset {
    x: number;
    y: number;
}

interface ISize {
    width: number;
    height: number;
}

interface ILocation {
    x: number;
    y: number;
}

export interface IRenderAttr {
    xIndex: number;
    yIndex: number;
    size: ISize;
    location: ILocation;
};

export interface IRenderAttrRow {
    rowIndex: number;
    renderAttrs: IRenderAttr[];
}

interface IScrollViewProps {
    // 视窗宽高
    viewWidth: number;
    viewHeight: number;

    // 内容宽高
    widths: number[];
    heights: number[];
    onScroll?: (offset: Partial<IOffset>) => void;

    render: (rows: IRenderAttrRow[]) => ReactNode;
}

const { size, padding } = barConfig;

const ScrollView: React.FC<IScrollViewProps> = (props) => {
    const { viewWidth, viewHeight, onScroll, widths, heights, render } = props;

    const { locations: tops, handleScroll: handleYScroll, firstIndex: yFirst, lastIndex: yLast, offset: y } = useScroll(
        {
            sizes: heights,
            viewSize: viewHeight,
        },
    );

    const { locations: lefts, handleScroll: handleXScroll, firstIndex: xFirst, lastIndex: xLast, offset: x } = useScroll(
        {
            sizes: widths,
            viewSize: viewWidth,
        },
    );

    const contentHeight = useMemo(() => tops[tops.length - 1], [tops]);
    const contentWidth = useMemo(() => lefts[lefts.length - 1], [lefts]);

    const handleWheel = useCallback(
        async (event: Konva.KonvaEventObject<WheelEvent>) => {
            const { deltaX, deltaY } = event.evt;

            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                const newX = await handleXScroll(deltaX);
                onScroll?.({
                    x: newX,
                });
                return;
            }

            const newY = await handleYScroll(deltaY);
            onScroll?.({
                y: newY,
            });
        },
        [onScroll, handleYScroll, handleXScroll],
    );

    const visible: IRenderAttrRow[] = useMemo(() => {
        const rows: IRenderAttrRow[] = [];

        for (let i = yFirst; i <= yLast; i++) {
            const currentRow: IRenderAttrRow = {
                rowIndex: i,
                renderAttrs: [],
            };

            for (let j = xFirst; j <= xLast; j++) {
                currentRow.renderAttrs.push({
                    xIndex: j,
                    yIndex: i,
                    location: {
                        x: lefts[j] + x,
                        y: tops[i] + y,
                    },
                    size: {
                        width: widths[j],
                        height: heights[i],
                    }
                });
            }
            rows.push(currentRow);
        }
        return rows;
    }, [yFirst, yLast, xFirst, xLast, tops, x, y, widths, heights, lefts]);

    return (
        <>
            <Group onWheel={handleWheel}>
                {render(visible)}
            </Group>
            <Group x={0} y={viewHeight - padding - size}>
                {/* x 滚动轴 */}
                <ScrollBar direction="x" offset={x} viewSize={viewWidth} totalSize={contentWidth} />
            </Group>
            <Group x={viewWidth - padding - size} y={0}>
                {/* y 滚动轴 */}
                <ScrollBar direction="y" offset={y} viewSize={viewHeight} totalSize={contentHeight} />
            </Group>
        </>
    );
};

export default ScrollView;
