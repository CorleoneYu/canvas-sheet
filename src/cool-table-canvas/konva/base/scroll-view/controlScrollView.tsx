import React, { useMemo, ReactNode } from 'react';
import { Group } from 'react-konva';
import { IRenderAttrRow } from './interface';
import { calcFirstLastIndex, getLocations } from './hooks/utils';

interface IControlScrollViewProps {
    // 视窗宽高
    viewWidth: number;
    viewHeight: number;

    // 内容宽高
    widths: number[];
    heights: number[];

    // 显示内容
    render: (rows: IRenderAttrRow[]) => ReactNode;

    // 受控位置
    x: number;
    y: number;
}

const ControlScrollView: React.FC<IControlScrollViewProps> = (props) => {
    const { viewWidth, viewHeight, widths, heights, render, x, y } = props;

    const xLocations = useMemo(() => {
        return getLocations(widths);
    }, [widths]);
    const yLocations = useMemo(() => {
        return getLocations(heights);
    }, [heights]);

    const [xFirst, xLast] = useMemo(() => {
        return calcFirstLastIndex({
            offset: x,
            locations: xLocations,
            viewSize: viewWidth,
            sizes: widths,
        });
    }, [x, xLocations, viewWidth, widths]);

    const [yFirst, yLast] = useMemo(() => {
        return calcFirstLastIndex({
            offset: y,
            locations: yLocations,
            viewSize: viewHeight,
            sizes: heights,
        });
    }, [y, yLocations, viewHeight, heights]);

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
                        x: xLocations[j] + x,
                        y: yLocations[i] + y,
                    },
                    size: {
                        width: widths[j],
                        height: heights[i],
                    },
                });
            }
            rows.push(currentRow);
        }
        return rows;
    }, [yFirst, yLast, xFirst, xLast, yLocations, x, y, widths, heights, xLocations]);

    return <Group>{render(visible)}</Group>;
};

export default ControlScrollView;
