import Cell, { ICellProps } from './Cell';

class CellManager {
  public cellMap: Map<string, Cell> = new Map();

  public createCell(props: ICellProps) {
    const cell = new Cell(props);
    this.cellMap.set(cell.cellId, cell);
    return cell;
  }
}

export default CellManager;
