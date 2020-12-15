import Row, { IRowProps } from './Row';

class RowManager {
  public rowMap: Map<string, Row> = new Map();

  public createRow(props: IRowProps) {
    const row = new Row(props);
    this.rowMap.set(row.rowId, row);
    return row;
  }
}

export default RowManager;
