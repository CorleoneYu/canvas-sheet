export interface ITableProps {
  rowIds: string[];
  colIds: string[];
}

let tableIdx = 1;
class Table {
  public tableId: string;
  public rowIds: string[] = [];
  public colIds: string[] = [];

  public constructor(props: ITableProps) {
    const { rowIds, colIds } = props;
    this.tableId = `t-${tableIdx++}`;
    this.rowIds = rowIds;
    this.colIds = colIds;
  }
}

export default Table;
