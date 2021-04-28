import React from 'react';
import Cell from '../cell';
import { IRow } from '@/cool-table-canvas/typing';
import { IRenderAttr, IRenderAttrRow } from '../../base/scroll-view';

interface IRowProps {
    row: IRow;
    visibleRowIdx: number; // 视图层的 idx
    renderAttrRow: IRenderAttrRow;
}

const Row = (props: IRowProps) => {
    const { row, renderAttrRow } = props;
    const { renderAttrs } = renderAttrRow;
    return (
        <>
            {renderAttrs.map((renderAttr: IRenderAttr) => {
                const { yIndex: dataRowIdx, xIndex: dataColumnIdx } = renderAttr;
                const cell = row.cells[dataColumnIdx];
                return <Cell key={`cell-${dataRowIdx}-${dataColumnIdx}`} cell={cell} renderAttr={renderAttr} />
            })}
        </>
    );
};

export default Row;
