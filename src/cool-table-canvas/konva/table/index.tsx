import React, { useCallback, useMemo, useState } from 'react';
import { Stage, Layer } from 'react-konva';
import { ITable } from '@/cool-table-canvas/typing';
import ScrollView, { IOffset, IRenderAttrRow } from '../base/scroll-view';
import { AllSelectHeader, RowHeader, ColHeader } from './header';
import Row from './row';
import { defaultTable } from '@/cool-table-canvas/constant/mock';
import { Box, CanvasBox, boxHeight, boxWidth } from './style';

const colHeaderHeight = 24;
const rowHeaderWidth = 50;

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

    return (
        <Box>
            {/* 左上 行列交叉 + 冻结左上 */}
            <CanvasBox left={0} top={0}>
                <AllSelectHeader width={rowHeaderWidth} height={colHeaderHeight} />
            </CanvasBox>
            {/* 左下 行头 + 冻结左下 */}
            <CanvasBox left={0} top={colHeaderHeight}>
                <RowHeader 
                    rowHeaders={header.rowHeaders}
                    rowHeaderViewHeight={boxHeight - colHeaderHeight}
                    rowHeaderWidth={rowHeaderWidth}
                    offsetY={offset.y}
                />
            </CanvasBox>
            {/* 右上 列头 + 冻结右上 */}
            <CanvasBox left={rowHeaderWidth} top={0}>
                <ColHeader
                    colHeaders={header.colHeaders}
                    colHeaderViewWidth={boxWidth - rowHeaderWidth}
                    colHeaderHeight={colHeaderHeight}
                    offsetX={offset.x}
                />
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
