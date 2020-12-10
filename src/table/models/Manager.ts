import Cell from './Cell';
import Row from './Row';
import Col from './Col';
import CellManager from './CellManager';
import RowManager from './RowManager';
import ColManager from './ColManager';
import TableManager from './TableManager';

class Manager {
    public cellManager = new CellManager();
    public rowManager = new RowManager();
    public colManager = new ColManager();
    public tableManager = new TableManager();

    public getCells = (cellIds: string[]): Cell[] => {
        return cellIds.reduce((acc: Cell[], cellId: string) => {
            const cell = this.cellManager.cellMap.get(cellId);
            if (cell) {
                acc.push(cell);
            }
            return acc;
        }, []);
    }

    public getCols = (colIds: string[]): Col[] => {
        return colIds.reduce((acc: Col[], colId: string) => {
            const col = this.colManager.colMap.get(colId);
            if (col) {
                acc.push(col);
            }
            return acc;
        }, []);
    }

    public getRows = (rowIds: string[]): Row[] => {
        return rowIds.reduce((acc: Row[], rowId: string) => {
            const row = this.rowManager.rowMap.get(rowId);
            if (row) {
                acc.push(row);
            }
            return acc;
        }, []);
    }
}

export default Manager;
