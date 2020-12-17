export interface ITableProps {
    rowIds: string[];
    colIds: string[];
    viewIds: string[];
}

let tableIdx = 1;
class Table {
    public tableId: string;
    public rowIds: string[] = [];
    public colIds: string[] = [];
    public viewIds: string[] = [];

    public constructor(props: ITableProps) {
        const { rowIds, colIds, viewIds } = props;
        this.tableId = `table-${tableIdx++}`;
        this.rowIds = rowIds;
        this.colIds = colIds;
        this.viewIds = viewIds;
    }

    public insertRow = (rowId: string) => {
        this.rowIds.push(rowId);
    }

    public insertCol = (colId: string) => {
        this.colIds.push(colId);
    }

    public insertView = (viewId: string) => {
        this.viewIds.push(viewId);
    }

}

export default Table;
