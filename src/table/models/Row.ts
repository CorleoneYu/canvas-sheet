export interface IRowProps {
    colIds: string[]; // 列 id 列表
}

let rowIdx = 1;

class Row {
    public rowId: string;
    public colIds: string[] = [];

    public constructor(props: IRowProps) {
        const { colIds } = props;
        this.rowId = `r-${rowIdx++}`;
        this.colIds = colIds;
    }

    public get cellIds() {
        return this.colIds.map((colId) => `${this.rowId}_${colId}`);
    }
}

export default Row;
