import React, { useCallback, useMemo, useState } from 'react';
import { Stage, Layer, Group } from 'react-konva';
import { ITable } from '@/cool-table-canvas/typing';
import Table from './table';
import ScrollView, { IOffset, ISize } from './base/scroll-view';
import { headerConfig, RowHeader, ColHeader, AllSelectHeader } from './header';
import { defaultTable } from '@/cool-table-canvas/constant/mock';
import { defaultConfig } from '@/cool-table-canvas/constant';
import { Box, CanvasBox, boxHeight, boxWidth } from './style';

const { overview, style } = defaultConfig;
const totalWidth = style.cell.width * overview.colCount;
const totalHeight = style.cell.height * overview.rowCount;

const Container = () => {
    const [table, setTable] = useState<ITable>(defaultTable);
    const [offset, setOffset] = useState<IOffset>({ x: 0, y: 0 });
    const { header, rows } = table;
    const { rowWidth, colHeight } = headerConfig;

    // const handleScroll = useCallback((offset: Partial<IOffset>) => {
    //     setOffset((pre) => ({
    //         ...pre,
    //         ...offset,
    //     }));
    // }, []);
    const list: ISize[]  = useMemo(() => {
        return rows.map(row => {
            const firstCell = row.cells[0];
            return {
                width: firstCell.width,
                height: firstCell.height
            };
        })
    }, [rows]);

    return (
        <Box>
            {/* 左上 行列交叉 + 冻结左上 */}
            <CanvasBox left={0} top={0}>
                <Stage width={rowWidth} height={colHeight}>
                    <Layer>
                        <AllSelectHeader />
                    </Layer>
                </Stage>
            </CanvasBox>
            {/* 左下 行头 + 冻结左下 */}
            {/* <CanvasBox left={0} top={colHeight}>
                <Stage className="canvas-box left-bottom" width={rowWidth} height={boxHeight - colHeight}>
                    <Layer>
                        <Group y={offset.y}>
                            <RowHeader rowHeaders={header.rowHeaders} />
                        </Group>
                    </Layer>
                </Stage>
            </CanvasBox> */}
            {/* 右上 列头 + 冻结右上  */}
            <CanvasBox left={rowWidth} top={0}>
                <Stage className="canvas-box right-top" width={boxWidth - rowWidth} height={colHeight}>
                    <Layer>
                        <Group x={offset.x}>
                            <ColHeader colHeaders={header.colHeaders} />
                        </Group>
                    </Layer>
                </Stage>
            </CanvasBox>
            {/* 右下 表格主体 */}
            <CanvasBox left={rowWidth} top={colHeight}>
                <Stage className="canvas-box right-bottom" width={boxWidth - rowWidth} height={boxHeight - colHeight}>
                    <Layer>
                        {/* <ScrollView
                            width={boxWidth - rowWidth}
                            height={boxHeight - colHeight}
                            contentHeight={totalHeight}
                            contentWidth={totalWidth}
                            onScroll={handleScroll}
                        >
                            <Table rows={rows} />
                        </ScrollView> */}
                        <ScrollView
                            width={boxWidth - rowWidth}
                            height={boxHeight - colHeight}
                            contentHeight={totalHeight}
                            contentWidth={totalWidth}
                            list={list}
                        />
                    </Layer>
                </Stage>
            </CanvasBox>
        </Box>
    );
};

export default Container;
