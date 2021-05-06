import React, { useCallback, useMemo, useState } from 'react';
import { Stage, Layer, Group, Text } from 'react-konva';
import { ITable } from '@/cool-table-canvas/typing';
import ScrollView, { ControlScrollView, IOffset, IRenderAttr, IRenderAttrRow } from '../base/scroll-view';
import { headerConfig, ColHeader, AllSelectHeader } from './header';
import Row from './row';
import { defaultTable } from '@/cool-table-canvas/constant/mock';
import { Box, CanvasBox, boxHeight, boxWidth } from './style';

const { rowHeaderWidth, colHeaderHeight } = headerConfig;

const Container = () => {
    const [table, setTable] = useState<ITable>(defaultTable);
    const [offset, setOffset] = useState<IOffset>({ x: 0, y: 0 });
    const { header, rows } = table;

    const handleScroll = useCallback((offset: Partial<IOffset>) => {
        setOffset((pre) => ({
            ...pre,
            ...offset,
        }));
    }, []);

    const heights = useMemo(() => {
        return rows.map((row) => {
            const firstCell = row.cells[0];
            return firstCell.height;
        });
    }, [rows]);

    const widths = useMemo(() => {
        return rows[0].cells.map((cell) => cell.width);
    }, [rows]);

    const renderRows = useCallback(
        (renderAttrRows: IRenderAttrRow[]) => {
            return renderAttrRows.map((renderAttrRow: IRenderAttrRow, visibleRowIdx: number) => {
                const { rowIndex: dataRowIdx } = renderAttrRow;
                const row = rows[dataRowIdx];
                return (
                    <Row
                        key={`row-${dataRowIdx}`}
                        renderAttrRow={renderAttrRow}
                        row={row}
                        visibleRowIdx={visibleRowIdx}
                    />
                );
            });
        },
        [rows],
    );

    const rowHeaderHeights = useMemo(() => {
        return header.rowHeaders.map((rowHeader) => rowHeader.height);
    }, [header.rowHeaders]);

    const renderRowHeaders = useCallback(
        (renderAttrRows: IRenderAttrRow[]) => {
            return renderAttrRows.map((renderAttrRow: IRenderAttrRow, visibleRowIdx: number) => {
                const { rowIndex: dataRowIdx } = renderAttrRow;
                const renderAttr = renderAttrRow.renderAttrs[0];
                const { location, size } = renderAttr;
                const rowHeader = header.rowHeaders[dataRowIdx];
                return (
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
                );
            });
        },
        [header.rowHeaders],
    );

    const colHeaderWidths = useMemo(() => {
        return header.colHeaders.map((colHeader) => colHeader.width);
    }, [header.colHeaders]);

    const renderColHeaders = useCallback((renderAttrRows: IRenderAttrRow[]) => {
        const renderAttrs = renderAttrRows[0].renderAttrs;
        return renderAttrs.map((renderAttr: IRenderAttr, visibleRowIdx: number) => {
            const { xIndex: dataColIdx, location, size } = renderAttr;
            const colHeader = header.colHeaders[dataColIdx];

            return (
                <Text
                    key={`text-${colHeader.title}`}
                    y={location.y}
                    x={location.x}
                    width={size.width}
                    height={size.height}
                    ill="rgba(0, 0, 0, 0.88)"
                    align="center"
                    verticalAlign="middle"
                    text={colHeader.title}
                />
            );
        });
    }, [header.colHeaders]);

    return (
        <Box>
            {/* 左上 行列交叉 + 冻结左上 */}
            <CanvasBox left={0} top={0}>
                <Stage width={rowHeaderWidth} height={colHeaderHeight}>
                    <Layer>
                        <AllSelectHeader />
                    </Layer>
                </Stage>
            </CanvasBox>
            {/* 左下 行头 + 冻结左下 */}
            <CanvasBox left={0} top={colHeaderHeight}>
                <Stage className="canvas-box left-bottom" width={rowHeaderWidth} height={boxHeight - colHeaderHeight}>
                    <Layer>
                        <Group>
                            <ControlScrollView
                                x={0}
                                y={offset.y}
                                viewHeight={boxHeight - colHeaderHeight}
                                viewWidth={rowHeaderWidth}
                                widths={[rowHeaderWidth]}
                                heights={rowHeaderHeights}
                                render={renderRowHeaders}
                            />
                        </Group>
                    </Layer>
                </Stage>
            </CanvasBox>
            {/* 右上 列头 + 冻结右上 */}
            <CanvasBox left={rowHeaderWidth} top={0}>
                <Stage className="canvas-box right-top" width={boxWidth - rowHeaderWidth} height={colHeaderHeight}>
                    <Layer>
                        <Group>
                            <ControlScrollView
                                x={offset.x}
                                y={0}
                                viewHeight={colHeaderHeight}
                                viewWidth={boxWidth - rowHeaderWidth}
                                widths={colHeaderWidths}
                                heights={[colHeaderHeight]}
                                render={renderColHeaders}
                            />
                        </Group>
                    </Layer>
                </Stage>
            </CanvasBox>
            {/* 右下 表格主体 */}
            <CanvasBox left={rowHeaderWidth} top={colHeaderHeight}>
                <Stage
                    className="canvas-box right-bottom"
                    width={boxWidth - rowHeaderWidth}
                    height={boxHeight - colHeaderHeight}
                >
                    <Layer>
                        <ScrollView
                            viewWidth={boxWidth - rowHeaderWidth}
                            viewHeight={boxHeight - colHeaderHeight}
                            widths={widths}
                            heights={heights}
                            render={renderRows}
                            onScroll={handleScroll}
                        />
                    </Layer>
                </Stage>
            </CanvasBox>
        </Box>
    );
};

export default Container;
