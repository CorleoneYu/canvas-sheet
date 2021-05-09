import React, { useMemo, useCallback } from 'react';
import { IColHeader } from '@/cool-table-canvas/typing';
import { Stage, Layer, Group, Text, Rect } from 'react-konva';
import { ControlScrollView, IRenderAttrRow, IRenderAttr } from '@/cool-table-canvas/konva/base/scroll-view';
import { defaultConfig } from '@/cool-table-canvas/constant';

const { background, border } = defaultConfig.style.header;

interface IColHeaderProps {
    colHeaders: IColHeader[];
    colHeaderViewWidth: number;
    colHeaderHeight: number;
    offsetX: number;
}

const ColHeader = (props: IColHeaderProps) => {
    const { offsetX, colHeaders, colHeaderViewWidth, colHeaderHeight } = props;

    const colHeaderWidths = useMemo(() => {
        return colHeaders.map((colHeader) => colHeader.width);
    }, [colHeaders]);

    const renderColHeaders = useCallback((renderAttrRows: IRenderAttrRow[]) => {
        const renderAttrs = renderAttrRows[0].renderAttrs;
        return renderAttrs.map((renderAttr: IRenderAttr, visibleRowIdx: number) => {
            const { xIndex: dataColIdx, location, size } = renderAttr;
            const colHeader = colHeaders[dataColIdx];

            return (
                <React.Fragment key={colHeader.title}>
                    <Rect
                        key={`rect-${colHeader.title}`}
                        x={location.x}
                        y={location.y}
                        width={size.width}
                        height={size.height}
                        fill={background.normal}
                        stroke={border.color}
                        strokeWidth={border.width}
                    />
                    <Text
                        key={`text-${colHeader.title}`}
                        y={location.y}
                        x={location.x}
                        width={size.width}
                        height={size.height}
                        fill="rgba(0, 0, 0, 0.88)"
                        align="center"
                        verticalAlign="middle"
                        text={colHeader.title}
                    />
                </React.Fragment>
            );
        });
    }, [colHeaders]);

    return (
        <Stage className="canvas-box right-top" width={colHeaderViewWidth} height={colHeaderHeight}>
            <Layer>
                <Group>
                    <ControlScrollView
                        x={offsetX}
                        y={0}
                        viewHeight={colHeaderHeight}
                        viewWidth={colHeaderViewWidth}
                        widths={colHeaderWidths}
                        heights={[colHeaderHeight]}
                        render={renderColHeaders}
                    />
                </Group>
            </Layer>
        </Stage>
    );
};

export default ColHeader;
