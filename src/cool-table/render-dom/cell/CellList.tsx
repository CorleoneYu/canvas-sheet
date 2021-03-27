import React from 'react';
import { ICell, getCellId } from '../../models/useCell';
import CellComp from './Cell';

interface ICellListProps {
    cells: ICell[];
    rowIdx: number;
    rowCount: number;
}
const CellList = (props: ICellListProps) => {
    const { cells, rowCount, rowIdx } = props;
    const colCount = cells.length;

    return (
        <div className="cell-list">
            {cells.map((cell, colIdx) => {
                return (
                    <CellComp
                        key={getCellId(cell)}
                        cell={cell}
                        rowIdx={rowIdx}
                        colIdx={colIdx}
                        rowCount={rowCount}
                        colCount={colCount}
                    />
                );
            })}
        </div>
    );
};

export default CellList;
