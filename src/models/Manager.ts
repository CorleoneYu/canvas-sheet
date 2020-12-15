import Cell from './cell/Cell';
import Row from './row/Row';
import Col from './col/Col';
import CellManager from './cell/CellManager';
import RowManager from './row/RowManager';
import ColManager from './col/ColManager';
import TableManager from './table/TableManager';

class Manager {
    public cellManager = new CellManager();
    public rowManager = new RowManager();
    public colManager = new ColManager();
    public tableManager = new TableManager({
        manager: this,
    });

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
