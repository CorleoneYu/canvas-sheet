import Manager from '../Manager';
export interface ITableProps {
    rowIds: string[];
    colIds: string[];
    viewIds: string[];
    manager: Manager;
}

let tableIdx = 1;
class Table {
    public tableId: string;
    public rowIds: string[] = [];
    public colIds: string[] = [];
    public viewIds: string[] = [];
    private manager: Manager;

    public constructor(props: ITableProps) {
        const { rowIds, colIds, manager, viewIds } = props;
        this.tableId = `table-${tableIdx++}`;
        this.rowIds = rowIds;
        this.colIds = colIds;
        this.viewIds = viewIds;
        this.manager = manager;
    }

    public get rows() {
        return this.manager.getRows(this.rowIds);
    }

    public get cols() {
        return this.manager.getCols(this.colIds);
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
