export interface ICellProps {
    rowId: string;
    colId: string;
    data: string;
}

class Cell {
    public rowId: string;
    public colId: string;
    public data: string;

    constructor(props: ICellProps) {
        const { data, rowId, colId } = props;
        this.rowId = rowId;
        this.colId = colId;
        this.data = data;
    }

    public get cellId() {
        return `${this.rowId}_${this.colId}`;
    }
}

export default Cell;
