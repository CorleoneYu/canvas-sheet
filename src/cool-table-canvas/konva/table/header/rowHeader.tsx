import React, { useMemo, useCallback } from 'react';
import { IRowHeader } from '@/cool-table-canvas/typing';
import { Stage, Layer, Group, Text, Rect } from 'react-konva';
import { ControlScrollView, IRenderAttrRow, IRenderAttr } from '@/cool-table-canvas/konva/base/scroll-view';
import { defaultConfig } from '@/cool-table-canvas/constant';

const { background, border } = defaultConfig.style.header;

interface IRowHeaderProps {
    rowHeaders: IRowHeader[];
    rowHeaderViewHeight: number;
    rowHeaderWidth: number;
    offsetY: number;
}

const RowHeader = (props: IRowHeaderProps) => {
    const { offsetY, rowHeaderViewHeight, rowHeaders, rowHeaderWidth } = props;

    const rowHeaderHeights = useMemo(() => {
        return rowHeaders.map((rowHeader) => rowHeader.height);
    }, [rowHeaders]);

    const renderRowHeaders = useCallback(
        (renderAttrRows: IRenderAttrRow[]) => {
            return renderAttrRows.map((renderAttrRow: IRenderAttrRow, visibleRowIdx: number) => {
                const { rowIndex: dataRowIdx } = renderAttrRow;
                const renderAttr: IRenderAttr = renderAttrRow.renderAttrs[0];
                const { location, size } = renderAttr;
                const rowHeader = rowHeaders[dataRowIdx];
                return (
                    <React.Fragment key={rowHeader.title}>
                        <Rect
                            key={`row-header-rect-${rowHeader.title}`}
                            x={location.x}
                            y={location.y}
                            width={size.width}
                            height={size.height}
                            fill={background.normal}
                            stroke={border.color}
                            strokeWidth={border.width}
                        />
                        <Text
                            key={`row-header-${rowHeader.title}`}
                            x={location.x}
                            y={location.y}
                            width={size.width}
                            height={size.height}
                            fill="rgba(0, 0, 0, 0.88)"
                            align="center"
                            verticalAlign="middle"
                            text={rowHeader.title}
                        />
                    </React.Fragment>
                    
                );
            });
        },
        [rowHeaders],
    );

    return (
        <Stage className="canvas-box left-bottom" width={rowHeaderWidth} height={rowHeaderViewHeight}>
            <Layer>
                <Group>
                    <ControlScrollView
                        x={0}
                        y={offsetY}
                        viewHeight={rowHeaderViewHeight}
                        viewWidth={rowHeaderWidth}
                        widths={[rowHeaderWidth]}
                        heights={rowHeaderHeights}
                        render={renderRowHeaders}
                    />
                </Group>
            </Layer>
        </Stage>
    );
};

export default RowHeader;
